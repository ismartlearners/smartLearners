import { Question } from '../types';

function makeTest6M2Q2Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 240 120" class="w-full max-w-[200px] bg-white select-none">
      <!-- Line from top-left to bottom-right -->
      <line x1="30" y1="20" x2="210" y2="100" stroke="#000000" stroke-width="1.8" />
      <!-- Line from bottom-left to top-right -->
      <line x1="30" y1="100" x2="210" y2="20" stroke="#000000" stroke-width="1.8" />
      <!-- Angle 1 label (left side) -->
      <text x="104" y="64" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#000000" text-anchor="middle">1</text>
      <!-- Angle 2 label (right side) -->
      <text x="136" y="64" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#000000" text-anchor="middle">2</text>
    </svg>
    <div class="mt-2 text-center text-xs font-serif text-slate-800">Note: Figure not drawn to scale.</div>
  </div>`;
}

function makeTest6M2Q4Svg(): string {
  const cx = 140;
  const cy = 140;
  const step = 10; // 10px per unit => 22 units = 220px

  const toX = (x: number) => cx + x * step;
  const toY = (y: number) => cy - y * step;

  // Grid lines: x from -11 to 11, y from -11 to 11
  let gridLines = '';
  for (let x = -11; x <= 11; x++) {
    gridLines += `<line x1="${toX(x)}" y1="${toY(11)}" x2="${toX(x)}" y2="${toY(-11)}" stroke="#777777" stroke-width="0.75" />\n`;
  }
  for (let y = -11; y <= 11; y++) {
    gridLines += `<line x1="${toX(-11)}" y1="${toY(y)}" x2="${toX(11)}" y2="${toY(y)}" stroke="#777777" stroke-width="0.75" />\n`;
  }

  // Ticks and labels
  let labels = '';
  // x-axis labels
  const xVals = [-10, -8, -6, -4, -2, 2, 4, 6, 8, 10];
  for (const x of xVals) {
    labels += `<text x="${toX(x)}" y="${toY(0) + 12}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="middle" fill="#000000">${x}</text>\n`;
  }
  // Origin 'O'
  labels += `<text x="${toX(0) - 7}" y="${toY(0) + 12}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="middle" fill="#000000">O</text>\n`;

  // y-axis labels
  const yVals = [10, 8, 6, 4, 2, -2, -4, -6, -8, -10];
  for (const y of yVals) {
    labels += `<text x="${toX(0) - 4}" y="${toY(y) + 3.5}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">${y}</text>\n`;
  }

  // Line passes through origin (0, 0), slope = 1/2. Points from x = -10.5 to x = 10.5
  const x1 = -10.5, y1 = 0.5 * (-10.5);
  const x2 = 10.5, y2 = 0.5 * 10.5;

  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 280 280" class="w-full max-w-[280px] bg-white select-none">
      <defs>
        <marker id="t6m2q4_arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g>
        ${gridLines}
      </g>
      <!-- Main Axes -->
      <line x1="${toX(-11) - 8}" y1="${toY(0)}" x2="${toX(11) + 8}" y2="${toY(0)}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q4_arrow)" />
      <line x1="${toX(0)}" y1="${toY(-11) + 8}" x2="${toX(0)}" y2="${toY(11) - 8}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q4_arrow)" />
      <!-- Axis Labels -->
      <text x="${toX(11) + 12}" y="${toY(0) + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000">x</text>
      <text x="${toX(0)}" y="${toY(11) - 12}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000" text-anchor="middle">y</text>
      <!-- Number Labels -->
      ${labels}
      <!-- Graph Line: passes through (0,0) with slope 1/2 -->
      <line x1="${toX(x1)}" y1="${toY(y1)}" x2="${toX(x2)}" y2="${toY(y2)}" stroke="#000000" stroke-width="2.2" stroke-linecap="round" />
    </svg>
  </div>`;
}

function makeTest6M2Q5Svg(): string {
  const padL = 36;
  const padT = 28;
  const step = 28;
  const toX = (x: number) => padL + (x + 1) * step;
  const toY = (y: number) => padT + (1 - y) * step;

  // Grid lines: x from -1 to 4, y from -9 to 1
  let gridLines = '';
  for (let x = -1; x <= 4; x++) {
    gridLines += `<line x1="${toX(x)}" y1="${toY(1)}" x2="${toX(x)}" y2="${toY(-9)}" stroke="#777777" stroke-width="0.75" />\n`;
  }
  for (let y = -9; y <= 1; y++) {
    gridLines += `<line x1="${toX(-1)}" y1="${toY(y)}" x2="${toX(4)}" y2="${toY(y)}" stroke="#777777" stroke-width="0.75" />\n`;
  }

  // Ticks and labels
  let labels = '';
  // x-axis labels at 2, 4
  labels += `<text x="${toX(2)}" y="${toY(0) + 13}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="middle" fill="#000000">2</text>\n`;
  labels += `<text x="${toX(4)}" y="${toY(0) + 13}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="middle" fill="#000000">4</text>\n`;
  labels += `<text x="${toX(0) - 6}" y="${toY(0) + 12}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="11" text-anchor="middle" fill="#000000">O</text>\n`;

  // y-axis labels at -2, -4, -6, -8
  for (let y = -2; y >= -8; y -= 2) {
    labels += `<text x="${toX(0) - 4}" y="${toY(y) + 3.5}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">${y}</text>\n`;
  }

  // Line: passes through (-1, -8), (0, -4), and (1, 0) => y = 4x - 4
  const lineX1 = -1, lineY1 = -8;
  const lineX2 = 1.3, lineY2 = 1.2;

  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 220 340" class="w-full max-w-[200px] bg-white select-none">
      <defs>
        <marker id="t6m2q5_arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g>
        ${gridLines}
      </g>
      <!-- Main Axes -->
      <line x1="${toX(-1) - 6}" y1="${toY(0)}" x2="${toX(4) + 10}" y2="${toY(0)}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q5_arrow)" />
      <line x1="${toX(0)}" y1="${toY(-9) + 4}" x2="${toX(0)}" y2="${toY(1) - 10}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q5_arrow)" />
      <!-- Axis Labels -->
      <text x="${toX(4) + 14}" y="${toY(0) + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000">x</text>
      <text x="${toX(0)}" y="${toY(1) - 14}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000" text-anchor="middle">y</text>
      <!-- Number Labels -->
      ${labels}
      <!-- Graph Line: passes through (-1, -8), (0, -4), (1, 0) -->
      <line x1="${toX(lineX1)}" y1="${toY(lineY1)}" x2="${toX(lineX2)}" y2="${toY(lineY2)}" stroke="#000000" stroke-width="2.2" stroke-linecap="round" />
    </svg>
  </div>`;
}

function makeTest6M2Q19Table(): string {
  return `<div class="my-4 flex justify-center">
    <table class="border-collapse border border-black text-center font-serif text-sm">
      <thead>
        <tr class="border-b border-black">
          <th class="border-r border-black px-4 py-2 font-normal">Number of cars</th>
          <th class="px-4 py-2 font-normal">Maximum number of<br />passengers and crew</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-black">
          <td class="border-r border-black px-4 py-1.5">3</td>
          <td class="px-4 py-1.5">174</td>
        </tr>
        <tr class="border-b border-black">
          <td class="border-r border-black px-4 py-1.5">5</td>
          <td class="px-4 py-1.5">284</td>
        </tr>
        <tr>
          <td class="border-r border-black px-4 py-1.5">10</td>
          <td class="px-4 py-1.5">559</td>
        </tr>
      </tbody>
    </table>
  </div>`;
}

function makeTest6M2Q26ScatterSvg(): string {
  const padL = 36;
  const padT = 24;
  const colW = 18; // 18px per 2 units on x => 11 cols = 198px
  const rowH = 18; // 18px per 5 units on y => 10 rows = 180px
  const w = 11 * colW; // 198px
  const h = 10 * rowH; // 180px

  const toX = (x: number) => padL + (x / 22) * w;
  const toY = (y: number) => padT + ((50 - y) / 50) * h;

  // Grid lines: vertical lines every 2 units from x=0 to x=22
  let gridLines = '';
  for (let x = 0; x <= 22; x += 2) {
    gridLines += `<line x1="${toX(x)}" y1="${toY(50) - 4}" x2="${toX(x)}" y2="${toY(0) + 4}" stroke="#777777" stroke-width="0.75" />\n`;
  }
  // Horizontal lines every 5 units from y=0 to y=50
  for (let y = 0; y <= 50; y += 5) {
    gridLines += `<line x1="${toX(0) - 4}" y1="${toY(y)}" x2="${toX(22) + 4}" y2="${toY(y)}" stroke="#777777" stroke-width="0.75" />\n`;
  }

  // Ticks and labels
  let labels = '';
  for (let x = 4; x <= 20; x += 4) {
    labels += `<text x="${toX(x)}" y="${toY(0) + 13}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="middle" fill="#000000">${x}</text>\n`;
  }
  labels += `<text x="${toX(0) - 6}" y="${toY(0) + 12}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="11" text-anchor="middle" fill="#000000">O</text>\n`;

  for (let y = 10; y <= 50; y += 10) {
    labels += `<text x="${toX(0) - 5}" y="${toY(y) + 3.5}" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">${y}</text>\n`;
  }

  // Data points from original test
  const points = [
    [1.0, 14.0],
    [2.0, 15.0],
    [4.0, 18.0],
    [6.0, 21.6],
    [10.0, 26.5],
    [11.0, 28.8],
    [14.0, 33.5],
    [17.0, 38.0],
    [18.0, 40.0],
    [20.0, 42.5]
  ];

  const pointCircles = points.map(([px, py]) => 
    `<circle cx="${toX(px)}" cy="${toY(py)}" r="2.7" fill="#000000" />`
  ).join('\n');

  // Line of best fit from (0, 12) to (21.4, 44.1)
  const lineX1 = 0, lineY1 = 12;
  const lineX2 = 21.4, lineY2 = 12 + 1.5 * 21.4;

  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 270 250" class="w-full max-w-[260px] bg-white select-none">
      <defs>
        <marker id="t6m2q26_arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g>
        ${gridLines}
      </g>
      <!-- Main Axes -->
      <line x1="${toX(0) - 5}" y1="${toY(0)}" x2="${toX(22) + 12}" y2="${toY(0)}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q26_arrow)" />
      <line x1="${toX(0)}" y1="${toY(0) + 5}" x2="${toX(0)}" y2="${toY(50) - 12}" stroke="#000000" stroke-width="1.6" marker-end="url(#t6m2q26_arrow)" />
      <!-- Axis Labels -->
      <text x="${toX(22) + 16}" y="${toY(0) + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000">x</text>
      <text x="${toX(0)}" y="${toY(50) - 15}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000" text-anchor="middle">y</text>
      <!-- Number Labels -->
      ${labels}
      <!-- Data Points -->
      ${pointCircles}
      <!-- Line of best fit -->
      <line x1="${toX(lineX1)}" y1="${toY(lineY1)}" x2="${toX(lineX2)}" y2="${toY(lineY2)}" stroke="#000000" stroke-width="2" stroke-linecap="round" />
    </svg>
  </div>`;
}

export const TEST6_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 1914,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear Functions',
    questionText: `The function \\(f\\) is defined by \\(f(x) = 8x\\). For what value of \\(x\\) does \\(f(x) = 72\\) ?`,
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '9' },
      { id: 'C', text: '64' },
      { id: 'D', text: '80' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Given \\(f(x) = 8x\\), setting \\(f(x) = 72\\) gives the linear equation \\(72 = 8x\\). Dividing both sides of the equation by 8 yields \\(x = \\frac{72}{8} = 9\\).'
  },
  {
    id: 1915,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 2,
    domain: 'Geometry and Trigonometry',
    skill: 'Lines, Angles, and Triangles',
    questionText: `${makeTest6M2Q2Svg()}\n\nIn the figure, two lines intersect at a point. Angle 1 and angle 2 are vertical angles. The measure of angle 1 is \\(72^{\\circ}\\). What is the measure of angle 2?`,
    options: [
      { id: 'A', text: '72°' },
      { id: 'B', text: '108°' },
      { id: 'C', text: '144°' },
      { id: 'D', text: '288°' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Vertical angles are the opposite angles formed by two intersecting lines, and vertical angles are always congruent (equal in measure). Since angle 1 and angle 2 are vertical angles and the measure of angle 1 is \\(72^{\\circ}\\), the measure of angle 2 is also \\(72^{\\circ}\\).'
  },
  {
    id: 1916,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 3,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Probability and Conditional Probability',
    questionText: `On a street with 7 houses, 2 houses are blue. If a house from this street is selected at random, what is the probability of selecting a house that is blue?`,
    options: [
      { id: 'A', text: '1/7' },
      { id: 'B', text: '2/7' },
      { id: 'C', text: '5/7' },
      { id: 'D', text: '7/7' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The probability of selecting a blue house at random is the number of blue houses divided by the total number of houses on the street, which is \\(\\frac{2}{7}\\).'
  },
  {
    id: 1917,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 4,
    domain: 'Algebra',
    skill: 'Linear Functions and Graphs',
    questionText: `The graph of function \\(f\\) is shown, where \\(y = f(x)\\).\n\n${makeTest6M2Q4Svg()}\n\nWhich of the following describes function \\(f\\) ?`,
    options: [
      { id: 'A', text: 'Increasing linear' },
      { id: 'B', text: 'Decreasing linear' },
      { id: 'C', text: 'Increasing exponential' },
      { id: 'D', text: 'Decreasing exponential' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The graph is a straight line with a positive slope (it rises from left to right as \\(x\\) increases), which represents an increasing linear function.'
  },
  {
    id: 1918,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 5,
    domain: 'Algebra',
    skill: 'Linear Functions and Intercepts',
    questionText: `${makeTest6M2Q5Svg()}\n\nThe graph of the function \\(f\\) is shown, where \\(y = f(x)\\). What is the y-intercept of the graph?`,
    options: [
      { id: 'A', text: '(0, -1)' },
      { id: 'B', text: '(0, -4)' },
      { id: 'C', text: '(0, 1)' },
      { id: 'D', text: '(0, 4)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The y-intercept of a graph is the point where the graph crosses the y-axis (where \\(x = 0\\)). From the given graph, the line intersects the vertical y-axis at \\((0, -4)\\).'
  },
  {
    id: 1919,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 6,
    domain: 'Algebra',
    skill: 'Systems of Two Linear Equations',
    questionText: `\\(x = 8\\)\n\\(x + 3y = 26\\)\n\nThe solution to the given system of equations is \\((x, y)\\). What is the value of \\(y\\) ?`,
    options: [],
    correctAnswer: '6',
    explanation: 'The correct answer is 6. Substituting \\(x = 8\\) into the second equation gives \\(8 + 3y = 26\\). Subtracting 8 from both sides gives \\(3y = 18\\). Dividing both sides by 3 gives \\(y = 6\\).'
  },
  {
    id: 1920,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 7,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages',
    questionText: `The amount of Hanna’s bill for a food order was $50. Hanna gave a tip of 20% of the amount of the bill. What is the amount, in dollars, of the tip Hanna gave?`,
    options: [],
    correctAnswer: '10',
    explanation: 'The correct answer is 10. The tip is 20% of $50, which is calculated as \\(0.20 \\times 50 = 10\\). Therefore, Hanna gave a tip of $10.'
  },
  {
    id: 1921,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 8,
    domain: 'Advanced Math',
    skill: 'Equivalent Expressions and Factoring',
    questionText: `Which expression is equivalent to \\(5x^5 - 6x^4 + 8x^3\\) ?`,
    options: [
      { id: 'A', text: 'x⁴(5x - 6)' },
      { id: 'B', text: 'x³(5x² - 6x + 8)' },
      { id: 'C', text: '8x³(5x² - 6x + 1)' },
      { id: 'D', text: '6x⁵(-6x⁴ + 8x³ + 1)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Factoring out the greatest common factor \\(x^3\\) from each term in \\(5x^5 - 6x^4 + 8x^3\\) gives \\(x^3(5x^2 - 6x + 8)\\).'
  },
  {
    id: 1922,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 9,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Ratios, Rates, and Proportions',
    questionText: `The ratio of the length of line segment XY to the length of line segment ZV is 6 to 1. If the length of line segment XY is 102 inches, what is the length, in inches, of line segment ZV ?`,
    options: [
      { id: 'A', text: '17' },
      { id: 'B', text: '96' },
      { id: 'C', text: '102' },
      { id: 'D', text: '612' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Let the length of line segment ZV be \\(z\\). The ratio of \\(XY\\) to \\(ZV\\) is \\(\\frac{6}{1}\\), so \\(\\frac{102}{z} = \\frac{6}{1}\\). Cross-multiplying gives \\(6z = 102\\), and dividing both sides by 6 yields \\(z = 17\\) inches.'
  },
  {
    id: 1923,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 10,
    domain: 'Algebra',
    skill: 'Linear Equations in One Variable',
    questionText: `\\(7(2x - 3) = 63\\)\n\nWhich equation has the same solution as the given equation?`,
    options: [
      { id: 'A', text: '2x - 3 = 9' },
      { id: 'B', text: '2x - 3 = 56' },
      { id: 'C', text: '2x - 21 = 63' },
      { id: 'D', text: '2x - 21 = 70' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Dividing both sides of the given equation \\(7(2x - 3) = 63\\) by 7 yields \\(2x - 3 = \\frac{63}{7} = 9\\). Therefore, \\(2x - 3 = 9\\) has the same solution as the given equation.'
  },
  {
    id: 1924,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 11,
    domain: 'Algebra',
    skill: 'Linear Functions in Context',
    questionText: `The function \\(f\\) defined by \\(f(t) = 14t + 9\\) gives the estimated length, in inches, of a vine plant \\(t\\) months after Tavon purchased it. Which of the following is the best interpretation of 9 in this context?`,
    options: [
      { id: 'A', text: 'Tavon will keep the vine plant for 9 months.' },
      { id: 'B', text: 'The vine plant is expected to grow 9 inches each month.' },
      { id: 'C', text: 'The vine plant is expected to grow to a maximum length of 9 inches.' },
      { id: 'D', text: 'The estimated length of the vine plant was 9 inches when Tavon purchased it.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. In the linear function \\(f(t) = 14t + 9\\), when \\(t = 0\\) (the time Tavon purchased the vine plant), \\(f(0) = 14(0) + 9 = 9\\). Thus, 9 represents the estimated initial length, in inches, of the vine plant at the time of purchase.'
  },
  {
    id: 1925,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Polynomial Factors and Zeros',
    questionText: `\\((x + 2)(x - 5)(x + 9) = 0\\)\n\nWhat is a positive solution to the given equation?`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '18' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. By the zero product property, setting each factor equal to zero gives \\(x + 2 = 0 \\implies x = -2\\), \\(x - 5 = 0 \\implies x = 5\\), and \\(x + 9 = 0 \\implies x = -9\\). The only positive solution is \\(x = 5\\).'
  },
  {
    id: 1926,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 13,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Fractions and Rates',
    questionText: `Brian saves \\(\\frac{2}{5}\\) of the $215 he earns each week from his job. If Brian continues to save at this rate, how much money, in dollars, will Brian save in 9 weeks?`,
    options: [],
    correctAnswer: '774',
    explanation: 'The correct answer is 774. Each week Brian saves \\(\\frac{2}{5} \\times 215 = 2 \\times 43 = 86\\) dollars. In 9 weeks, Brian will save \\(86 \\times 9 = 774\\) dollars.'
  },
  {
    id: 1927,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 14,
    domain: 'Advanced Math',
    skill: 'Quadratic Equations in Context',
    questionText: `A rectangle has an area of 155 square inches. The length of the rectangle is 4 inches less than 7 times the width of the rectangle. What is the width of the rectangle, in inches?`,
    options: [],
    correctAnswer: '5',
    explanation: 'The correct answer is 5. Let \\(w\\) be the width of the rectangle in inches. The length is \\(7w - 4\\). The area is \\(w(7w - 4) = 155\\), which gives \\(7w^2 - 4w - 155 = 0\\). Factoring the quadratic equation yields \\((w - 5)(7w + 31) = 0\\). Since width must be a positive number, \\(w = 5\\) inches.'
  },
  {
    id: 1928,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 15,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Measures of Center (Median)',
    questionText: `4, 10, 18, 4, 4, 5, 6, 5\n\nWhat is the median of the data set shown?`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '14' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Arranging the 8 values in ascending order gives 4, 4, 4, 5, 5, 6, 10, 18. Since there are 8 values (an even count), the median is the average of the 4th and 5th values: \\(\\frac{5 + 5}{2} = 5\\).'
  },
  {
    id: 1929,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 16,
    domain: 'Geometry and Trigonometry',
    skill: 'Volume Formulas',
    questionText: `A right circular cylinder has a volume of 432 cubic centimeters. The area of the base of the cylinder is 24 square centimeters. What is the height, in centimeters, of the cylinder?`,
    options: [
      { id: 'A', text: '18' },
      { id: 'B', text: '24' },
      { id: 'C', text: '216' },
      { id: 'D', text: '10,368' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The volume \\(V\\) of a cylinder is equal to the area of the base \\(B\\) multiplied by the height \\(h\\): \\(V = B \\times h\\). Substituting the given values gives \\(432 = 24h\\). Dividing both sides by 24 gives \\(h = \\frac{432}{24} = 18\\) centimeters.'
  },
  {
    id: 1930,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 17,
    domain: 'Advanced Math',
    skill: 'Quadratic and Nonlinear Equations',
    questionText: `\\(x^2 = -841\\)\n\nHow many distinct real solutions does the given equation have?`,
    options: [
      { id: 'A', text: 'Exactly one' },
      { id: 'B', text: 'Exactly two' },
      { id: 'C', text: 'Infinitely many' },
      { id: 'D', text: 'Zero' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The square of any real number is non-negative (\\(x^2 \\ge 0\\)). Since \\(-841 < 0\\), there is no real number \\(x\\) such that \\(x^2 = -841\\). Therefore, the equation has zero real solutions.'
  },
  {
    id: 1931,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Parallel and Perpendicular Lines',
    questionText: `Line \\(k\\) is defined by \\(y = 7x + \\frac{1}{8}\\). Line \\(j\\) is perpendicular to line \\(k\\) in the \\(xy\\)-plane. What is the slope of line \\(j\\) ?`,
    options: [
      { id: 'A', text: '-8' },
      { id: 'B', text: '-1/7' },
      { id: 'C', text: '1/8' },
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The slope of line \\(k\\) is 7. Two non-vertical lines in the \\(xy\\)-plane are perpendicular if and only if their slopes are negative reciprocals of each other. The negative reciprocal of 7 is \\(-\\frac{1}{7}\\), so the slope of line \\(j\\) is \\(-\\frac{1}{7}\\).'
  },
  {
    id: 1932,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 19,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    questionText: `${makeTest6M2Q19Table()}\n\nThe table shows the linear relationship between the number of cars, \\(c\\), on a commuter train and the maximum number of passengers and crew, \\(p\\), that the train can carry. Which equation represents the linear relationship between \\(c\\) and \\(p\\) ?`,
    options: [
      { id: 'A', text: '55c - p = -9' },
      { id: 'B', text: '55c - p = 9' },
      { id: 'C', text: '55p - c = -9' },
      { id: 'D', text: '55p - c = 9' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The slope \\(m\\) is \\(\\frac{284 - 174}{5 - 3} = \\frac{110}{2} = 55\\). Using the point-slope form with \\((c, p) = (3, 174)\\): \\(p - 174 = 55(c - 3) \\implies p - 174 = 55c - 165\\). Rearranging terms gives \\(55c - p = -9\\).'
  },
  {
    id: 1933,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 20,
    domain: 'Advanced Math',
    skill: 'Radicals and Rational Exponents',
    questionText: `If \\(4^{8c} = \\sqrt[3]{4^7}\\), what is the value of \\(c\\) ?`,
    options: [],
    correctAnswer: '7/24',
    explanation: 'The correct answer is 7/24 (or approximately 0.2917). By exponent rules, \\(\\sqrt[3]{4^7} = 4^{\\frac{7}{3}}\\). Since the bases are equal, the exponents must be equal: \\(8c = \\frac{7}{3}\\). Dividing both sides by 8 gives \\(c = \\frac{7}{24}\\).'
  },
  {
    id: 1934,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 21,
    domain: 'Algebra',
    skill: 'Systems of Two Linear Equations',
    questionText: `\\((x - 2) - 4(y + 7) = 117\\)\n\\((x - 2) + 4(y + 7) = 442\\)\n\nThe solution to the given system of equations is \\((x, y)\\). What is the value of \\(6(x - 2)\\) ?`,
    options: [],
    correctAnswer: '1677',
    explanation: 'The correct answer is 1677. Let \\(A = x - 2\\) and \\(B = y + 7\\). The system becomes \\(A - 4B = 117\\) and \\(A + 4B = 442\\). Adding the two equations eliminates \\(4B\\): \\(2A = 559\\). Multiplying both sides by 3 gives \\(6A = 6(x - 2) = 3 \\times 559 = 1677\\).'
  },
  {
    id: 1935,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 22,
    domain: 'Geometry and Trigonometry',
    skill: 'Pythagorean Theorem and Right Triangles',
    questionText: `In triangle ABC, angle B is a right angle. The length of side AB is \\(10\\sqrt{37}\\) and the length of side BC is \\(24\\sqrt{37}\\). What is the length of side AC ?`,
    options: [
      { id: 'A', text: '14√37' },
      { id: 'B', text: '26√37' },
      { id: 'C', text: '34√37' },
      { id: 'D', text: '√(34 · 37)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. In right triangle ABC with right angle at B, AC is the hypotenuse. By the Pythagorean theorem, \\(AC^2 = AB^2 + BC^2 = (10\\sqrt{37})^2 + (24\\sqrt{37})^2 = 100(37) + 576(37) = (100 + 576)(37) = 676(37)\\). Taking the square root gives \\(AC = \\sqrt{676}\\sqrt{37} = 26\\sqrt{37}\\).'
  },
  {
    id: 1936,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 23,
    domain: 'Advanced Math',
    skill: 'Exponential Growth and Decay',
    questionText: `\\(f(x) = (1.84)^{\\frac{x}{4}}\\)\n\nThe function \\(f\\) is defined by the given equation. The equation can be rewritten as \\(f(x) = \\left(1 + \\frac{p}{100}\\right)^x\\), where \\(p\\) is a constant. Which of the following is closest to the value of \\(p\\) ?`,
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '21' },
      { id: 'C', text: '46' },
      { id: 'D', text: '96' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Using exponent rules, \\((1.84)^{\\frac{x}{4}} = \\left((1.84)^{\\frac{1}{4}}\\right)^x\\). Calculating \\((1.84)^{0.25} \\approx 1.16467\\). Setting \\(1 + \\frac{p}{100} \\approx 1.16467\\) gives \\(\\frac{p}{100} \\approx 0.16467 \\implies p \\approx 16.47\\). The value closest to \\(p\\) among the choices is 16.'
  },
  {
    id: 1937,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 24,
    domain: 'Advanced Math',
    skill: 'Radical Functions and Transformations',
    questionText: `The function \\(f\\) is defined by \\(f(x) = a\\sqrt{x + b}\\), where \\(a\\) and \\(b\\) are constants. In the \\(xy\\)-plane, the graph of \\(y = f(x)\\) passes through the point \\((-24, 0)\\), and \\(f(24) < 0\\). Which of the following must be true?`,
    options: [
      { id: 'A', text: '\\(f(0) = 24\\)' },
      { id: 'B', text: '\\(f(0) = -24\\)' },
      { id: 'C', text: '\\(a > b\\)' },
      { id: 'D', text: '\\(a < b\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Since the graph of \\(y = f(x)\\) passes through \\((-24, 0)\\), substituting \\(x = -24\\) into \\(f(x) = a\\sqrt{x + b}\\) yields \\(a\\sqrt{-24 + b} = 0\\). Because \\(f(24) < 0\\), \\(a \\neq 0\\), which requires \\(\\sqrt{-24 + b} = 0\\), so \\(b = 24\\). The function is then \\(f(x) = a\\sqrt{x + 24}\\). Since \\(f(24) = a\\sqrt{24 + 24} = a\\sqrt{48} < 0\\) and \\(\\sqrt{48} > 0\\), it follows that \\(a < 0\\). Since \\(a < 0\\) and \\(b = 24\\), it must be true that \\(a < b\\).'
  },
  {
    id: 1938,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 25,
    domain: 'Geometry and Trigonometry',
    skill: 'Circle Geometry and Triangles',
    questionText: `In the \\(xy\\)-plane, a circle has center \\(C\\) with coordinates \\((h, k)\\). Points \\(A\\) and \\(B\\) lie on the circle. Point \\(A\\) has coordinates \\((h + 1, k + \\sqrt{102})\\), and \\(\\angle ACB\\) is a right angle. What is the length of \\(\\overline{AB}\\) ?`,
    options: [
      { id: 'A', text: '√206' },
      { id: 'B', text: '2√102' },
      { id: 'C', text: '103√2' },
      { id: 'D', text: '103√3' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The radius \\(r\\) of the circle is the distance from center \\(C(h, k)\\) to point \\(A(h + 1, k + \\sqrt{102})\\): \\(r^2 = (h + 1 - h)^2 + (k + \\sqrt{102} - k)^2 = 1^2 + (\\sqrt{102})^2 = 1 + 102 = 103\\), so \\(r = \\sqrt{103}\\). Since point \\(B\\) also lies on the circle, \\(CB = r = \\sqrt{103}\\). In right triangle \\(ACB\\) with legs \\(CA = \\sqrt{103}\\) and \\(CB = \\sqrt{103}\\) and right angle at \\(C\\), by the Pythagorean theorem: \\(AB = \\sqrt{CA^2 + CB^2} = \\sqrt{103 + 103} = \\sqrt{206}\\).'
  },
  {
    id: 1939,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 26,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Scatterplots and Lines of Best Fit',
    questionText: `${makeTest6M2Q26ScatterSvg()}\n\nThe scatterplot shows the relationship between two variables, \\(x\\) and \\(y\\), for data set E. A line of best fit is shown. Data set F is created by multiplying the \\(y\\)-coordinate of each data point from data set E by 3.9. Which of the following could be an equation of a line of best fit for data set F?`,
    options: [
      { id: 'A', text: 'y = 46.8 + 5.9x' },
      { id: 'B', text: 'y = 46.8 + 1.5x' },
      { id: 'C', text: 'y = 12 + 5.9x' },
      { id: 'D', text: 'y = 12 + 1.5x' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. From the given scatterplot for data set E, the line of best fit has a y-intercept of approximately 12 and passes through roughly \\((20, 42)\\), giving a slope of \\(\\frac{42 - 12}{20} = \\frac{30}{20} = 1.5\\). Thus, the line of best fit for data set E is approximately \\(y = 12 + 1.5x\\). When every y-coordinate is multiplied by 3.9, both the y-intercept and the slope of the line of best fit are multiplied by 3.9: new y-intercept = \\(12 \\times 3.9 = 46.8\\), and new slope = \\(1.5 \\times 3.9 = 5.85 \\approx 5.9\\). Therefore, an equation for the line of best fit for data set F is \\(y = 46.8 + 5.9x\\).'
  },
  {
    id: 1940,
    testId: 'test6',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: "Math",
    moduleNumber: 2,
    questionNumber: 27,
    domain: 'Algebra',
    skill: 'Systems of Two Linear Equations with No Solution',
    questionText: `\\(48x - 64y = 48y + 24\\)\n\\(ry = \\frac{1}{8} - 12x\\)\n\nIn the given system of equations, \\(r\\) is a constant. If the system has no solution, what is the value of \\(r\\) ?`,
    options: [],
    correctAnswer: '-28',
    explanation: 'The correct answer is -28. Simplifying the first equation: \\(48x - 64y = 48y + 24 \\implies 48x - 112y = 24\\). Dividing both sides by 4 yields \\(12x - 28y = 6\\), or \\(-28y = 6 - 12x\\). The second equation is \\(ry = \\frac{1}{8} - 12x\\). For the system to have no solution, the lines must have the same slope (matching coefficients for \\(x\\) and \\(y\\)) but different y-intercepts (different constants). Matching the \\(-12x\\) term, the coefficient of \\(y\\) must be equal: \\(r = -28\\). Since the constant terms \\(6 \\neq \\frac{1}{8}\\), the lines are parallel and distinct, resulting in no solution.'
  }
];
