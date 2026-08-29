const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');

function printQuestions(file, qNums) {
  const filePath = path.join(dataDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  console.log(`\n================== ${file} ==================`);
  
  const cleaned = raw
    .replace(/^import .*/gm, '')
    .replace(/export const \w+:\s*Question\[\]\s*=\s*/, 'return ');
  const questions = new Function(cleaned)();

  questions.forEach((q, idx) => {
    const qNum = q.questionNumber || (idx + 1);
    if (qNums.includes(qNum)) {
      console.log(`\n--- Q${qNum} in ${file} (id: ${q.id}) ---`);
      console.log('passageHtml:', q.passageHtml ? JSON.stringify(q.passageHtml) : '(none)');
      console.log('questionText:', q.questionText ? JSON.stringify(q.questionText) : '(none)');
      if (q.options) console.log('options:', JSON.stringify(q.options));
      console.log('explanation:', JSON.stringify(q.explanation));
    }
  });
}

printQuestions('test8_math_module1.ts', [17, 19, 27]);
printQuestions('test8_math_module2.ts', [5, 12, 14, 20, 22, 24, 26]);
printQuestions('test9_math_module1.ts', [8, 18, 20, 21, 27]);
printQuestions('test9_math_module2.ts', [3, 5, 7, 15]);
