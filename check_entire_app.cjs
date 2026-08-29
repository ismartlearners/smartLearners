const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'questions.ts');

let totalIssues = 0;
const results = [];

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');

  try {
    const cleaned = raw
      .replace(/^import .*/gm, '')
      .replace(/export const \w+:\s*Question\[\]\s*=\s*/, 'return ');
    const questions = new Function(cleaned)();

    questions.forEach((q, idx) => {
      const qNum = q.questionNumber || (idx + 1);
      const fields = [
        { name: 'passageHtml', text: q.passageHtml },
        { name: 'questionText', text: q.questionText },
        { name: 'explanation', text: q.explanation },
        ...(q.options || []).map(o => ({ name: `option_${o.id}`, text: o.text }))
      ];

      fields.forEach(({ name, text }) => {
        if (!text) return;

        // Check for delimiter mismatch
        const openD = (text.match(/\\\(/g) || []).length;
        const closeD = (text.match(/\\\)/g) || []).length;
        if (openD !== closeD) {
          totalIssues++;
          results.push(`[${file}] Q${qNum} ${name}: LaTeX delimiter count mismatch (\\(: ${openD}, \\): ${closeD}) -> ${JSON.stringify(text)}`);
        }

        // Check for double closing delimiters or stray paren right after delimiter
        if (/\\\)\s*\)/.test(text)) {
          totalIssues++;
          results.push(`[${file}] Q${qNum} ${name}: Stray parenthesis after closing delimiter -> ${JSON.stringify(text)}`);
        }

        // Check for malformed math inside \( ... \)
        const mathMatches = text.match(/\\\([\s\S]*?\\\)/g) || [];
        mathMatches.forEach(m => {
          const inner = m.slice(2, -2);
          let bal = 0;
          for (let i = 0; i < inner.length; i++) {
            if (inner[i] === '(' && (i === 0 || inner[i-1] !== '\\')) bal++;
            if (inner[i] === ')' && (i === 0 || inner[i-1] !== '\\')) {
              bal--;
              if (bal < 0) {
                totalIssues++;
                results.push(`[${file}] Q${qNum} ${name}: Unbalanced ')' inside math expression: ${m}`);
                break;
              }
            }
          }
          if (bal > 0) {
            totalIssues++;
            results.push(`[${file}] Q${qNum} ${name}: Unbalanced '(' inside math expression: ${m}`);
          }
        });
      });
    });
  } catch (err) {
    console.error(`Error parsing ${file}:`, err);
  }
});

console.log(`\n================ FINAL AUDIT REPORT ================`);
console.log(`Total issues found across all datasets: ${totalIssues}`);
if (totalIssues > 0) {
  results.forEach(r => console.log(' - ' + r));
} else {
  console.log('✅ ALL datasets are completely clean! No extra parentheses, delimiter mismatches, or corrupted math found.');
}
