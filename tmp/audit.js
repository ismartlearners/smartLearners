const fs = require('fs');
const path = require('path');

const testFiles = [
  "test4_math_module1.ts", "test4_math_module2.ts", "test4_rw_module1.ts", "test4_rw_module2.ts",
  "test5_math_module1.ts", "test5_math_module2.ts", "test5_rw_module1.ts", "test5_rw_module2.ts",
  "test6_math_module1.ts", "test6_math_module2.ts", "test6_rw_module1.ts", "test6_rw_module2.ts",
  "test7_math_module1.ts", "test7_math_module2.ts", "test7_rw_module1.ts", "test7_rw_module2.ts",
];

console.log("=== DETAILED AUDIT OF TESTS 4, 5, 6, 7 ===");

testFiles.forEach(file => {
  const filePath = path.join('./src/data', file);
  if (!fs.existsSync(filePath)) {
    console.log(`FILE NOT FOUND: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const isMath = file.includes('math');
  const expectedCount = isMath ? 27 : 33;

  const qBlocks = content.split(/\{\s*id:/);
  const totalItems = qBlocks.length - 1;

  console.log(`\nChecking ${file}: (${totalItems}/${expectedCount} questions found)`);

  const qNumList = [];
  qBlocks.forEach((b, idx) => {
    if (idx === 0) return;
    const qNumMatch = b.match(/questionNumber:\s*(\d+)/);
    const idMatch = b.match(/^[\s]*(\d+)/);
    const qNum = qNumMatch ? parseInt(qNumMatch[1]) : null;
    const id = idMatch ? parseInt(idMatch[1]) : null;

    if (!qNum) {
      console.log(`   Block ${idx} (id: ${id}) missing questionNumber!`);
    } else {
      qNumList.push(qNum);
    }
  });

  const missing = [];
  for (let i = 1; i <= expectedCount; i++) {
    if (!qNumList.includes(i)) missing.push(i);
  }
  if (missing.length > 0) console.log(`   MISSING Q NUMBERS: ${missing.join(', ')}`);
});
