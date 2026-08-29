import fs from 'fs';
import path from 'path';

// Import graph helpers
import {
  makeM1Q1Svg,
  makeM1Q3Svg,
  makeM1Q6Svg,
  makeRationalGraph,
  makeRW1Q16Svg,
  makeRW2Q12Svg,
  makeRW2Q14Svg
} from '../src/data/test5_graph_helpers.js';

console.log("Updating Test 5 graph questions...");

// 1. UPDATE src/data/test5_math_module1.ts
const m1Path = path.resolve('src/data/test5_math_module1.ts');
let m1Content = fs.readFileSync(m1Path, 'utf8');

// Replace Q1 passageHtml
const m1q1Svg = makeM1Q1Svg();
m1Content = m1Content.replace(
  /id: 2007,[\s\S]*?questionText: `The graph of a system of a linear equation and a nonlinear equation is shown/,
  (match) => {
    return match.replace(/passageHtml: `[\s\S]*?`,\n    questionText:/, `passageHtml: \`${m1q1Svg}\`,\n    questionText:`);
  }
);

// Replace Q3 passageHtml
const m1q3Svg = makeM1Q3Svg();
m1Content = m1Content.replace(
  /id: 2009,[\s\S]*?questionText: `The graph of the linear function f is shown/,
  (match) => {
    return match.replace(/passageHtml: `[\s\S]*?`,\n    questionText:/, `passageHtml: \`${m1q3Svg}\`,\n    questionText:`);
  }
);

// Replace Q6 passageHtml
const m1q6Svg = makeM1Q6Svg();
m1Content = m1Content.replace(
  /id: 2012,[\s\S]*?questionText: `The graph of a system of linear equations is shown/,
  (match) => {
    return match.replace(/passageHtml: `[\s\S]*?`,\n    questionText:/, `passageHtml: \`${m1q6Svg}\`,\n    questionText:`);
  }
);

// Update Q16 in m1
const ratMain = makeRationalGraph('main', 'main');
const ratA = makeRationalGraph('A', 'optA');
const ratB = makeRationalGraph('B', 'optB');
const ratC = makeRationalGraph('C', 'optC');
const ratD = makeRationalGraph('D', 'optD');

const q16Snippet = `    id: 2022,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 16,
    domain: 'Advanced Math',
    skill: 'Graphing Non-linear Functions',
    passageHtml: \`<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    ${ratMain}
  </div>
</div>\`,
    questionText: \`The graph of the rational function f is shown, where y = f(x). Which of the following is the graph of y = f(x) + 5?\`,
    options: [
      { id: 'A', text: \`<div class="flex flex-col items-center p-1">${ratA}</div>\` },
      { id: 'B', text: \`<div class="flex flex-col items-center p-1">${ratB}</div>\` },
      { id: 'C', text: \`<div class="flex flex-col items-center p-1">${ratC}</div>\` },
      { id: 'D', text: \`<div class="flex flex-col items-center p-1">${ratD}</div>\` }
    ],`;

m1Content = m1Content.replace(
  /id: 2022,[\s\S]*?correctAnswer: 'D',/,
  `${q16Snippet}\n    correctAnswer: 'D',`
);

fs.writeFileSync(m1Path, m1Content, 'utf8');
console.log("Updated test5_math_module1.ts");

// 2. UPDATE src/data/test5_rw_module1.ts
const rw1Path = path.resolve('src/data/test5_rw_module1.ts');
let rw1Content = fs.readFileSync(rw1Path, 'utf8');

const rw1q16Svg = makeRW1Q16Svg();
rw1Content = rw1Content.replace(
  /id: 1956,[\s\S]*?questionNumber: 16,[\s\S]*?passageHtml: `[\s\S]*?`,\n    questionText:/,
  `id: 1956,
    testId: 'test5',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 16,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    passageHtml: \`${rw1q16Svg}\`,
    questionText:`
);
fs.writeFileSync(rw1Path, rw1Content, 'utf8');
console.log("Updated test5_rw_module1.ts");

// 3. UPDATE src/data/test5_rw_module2.ts
const rw2Path = path.resolve('src/data/test5_rw_module2.ts');
let rw2Content = fs.readFileSync(rw2Path, 'utf8');

const rw2q12Svg = makeRW2Q12Svg();
rw2Content = rw2Content.replace(
  /id: 1985,[\s\S]*?questionNumber: 12,[\s\S]*?passageHtml: `[\s\S]*?`,\n    questionText:/,
  `id: 1985,
    testId: 'test5',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 12,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    passageHtml: \`${rw2q12Svg}\`,
    questionText:`
);

const rw2q14Svg = makeRW2Q14Svg();
rw2Content = rw2Content.replace(
  /id: 1987,[\s\S]*?questionNumber: 14,[\s\S]*?passageHtml: `<p class="mb-3">Inés Ibáñez/,
  `id: 1987,
    testId: 'test5',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 14,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    passageHtml: \`${rw2q14Svg}
<p class="mb-3">Inés Ibáñez`
);

fs.writeFileSync(rw2Path, rw2Content, 'utf8');
console.log("Updated test5_rw_module2.ts");

console.log("All updates complete!");
