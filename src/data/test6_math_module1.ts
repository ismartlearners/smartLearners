import { Question } from '../types';

function makeTest6M1Q2ScatterSvg(type: 'base' | 'A' | 'B' | 'C' | 'D' = 'base'): string {
  const x0 = 48;
  const y0 = 155;
  const dx = 20; // 7 units = 140px, so x spans 48 to 188
  const yTop = 30; // 5 units = 125px (25px per 1000), y spans 155 to 30
  const dy = 25;

  const pts = [
    [0.45, 120],
    [2.0, 200],
    [2.7, 200],
    [3.5, 920],
    [4.2, 800],
    [5.1, 2200],
    [5.7, 2680],
    [6.4, 4780],
  ];

  const gridLines: string[] = [];
  for (let i = 1; i <= 7; i++) {
    const x = x0 + i * dx;
    gridLines.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${y0}" stroke="#000" stroke-width="0.75" />`);
  }
  for (let i = 0; i <= 5; i++) {
    const y = yTop + i * dy;
    gridLines.push(`<line x1="${x0}" y1="${y}" x2="${x0 + 7 * dx}" y2="${y}" stroke="#000" stroke-width="0.75" />`);
  }

  const ptCircles = pts.map(([px, py]) => {
    const cx = x0 + px * dx;
    const cy = y0 - (py / 5000) * (5 * dy);
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3" fill="#000" />`;
  }).join('');

  const xLabels = [1, 2, 3, 4, 5, 6, 7].map(i => 
    `<text x="${x0 + i * dx}" y="${y0 + 13}" font-family="Georgia, serif" font-size="10" text-anchor="middle">${i}</text>`
  ).join('');

  const yLabels = [
    { val: 1000, label: '1,000' },
    { val: 2000, label: '2,000' },
    { val: 3000, label: '3,000' },
    { val: 4000, label: '4,000' },
    { val: 5000, label: '5,000' },
  ].map((item, idx) => {
    const y = y0 - (idx + 1) * dy;
    return `<text x="${x0 - 4}" y="${y + 3.5}" font-family="Georgia, serif" font-size="9.5" text-anchor="end">${item.label}</text>`;
  }).join('');

  let modelShape = '';
  if (type === 'A') {
    modelShape = `<line x1="${x0}" y1="${y0}" x2="${x0 + 7 * dx}" y2="${yTop}" stroke="#000" stroke-width="1.8" stroke-linecap="round" />`;
  } else if (type === 'B') {
    modelShape = `<line x1="${x0}" y1="${yTop}" x2="${x0 + 7 * dx}" y2="${y0}" stroke="#000" stroke-width="1.8" stroke-linecap="round" />`;
  } else if (type === 'C') {
    const startY = y0 - (1100 / 5000) * (5 * dy);
    modelShape = `<path d="M ${x0} ${startY.toFixed(1)} C ${x0 + 37} ${startY.toFixed(1)} ${x0 + 70} ${startY - 7.5} ${x0 + 87} ${startY - 27.5} C ${x0 + 102} ${startY - 45.5} ${x0 + 115} ${startY - 73.5} ${x0 + 126} ${yTop - 8}" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" />`;
  } else if (type === 'D') {
    modelShape = `<path d="M ${x0} ${y0} C ${x0 + 42} ${y0} ${x0 + 67} ${y0 - 7} ${x0 + 84} ${y0 - 25} C ${x0 + 100} ${y0 - 43} ${x0 + 117} ${y0 - 83} ${x0 + 130} ${yTop - 8}" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" />`;
  }

  return `<svg viewBox="0 0 216 178" class="w-full max-w-[190px] bg-white font-serif"><g>${gridLines.join('')}</g><line x1="${x0 - 5}" y1="${y0}" x2="${x0 + 7 * dx + 12}" y2="${y0}" stroke="#000" stroke-width="1.4" /><polygon points="${x0 + 7 * dx + 12},${y0} ${x0 + 7 * dx + 6},${y0 - 3} ${x0 + 7 * dx + 6},${y0 + 3}" fill="#000" /><text x="${x0 + 7 * dx + 16}" y="${y0 + 4}" font-family="Georgia, serif" font-style="italic" font-size="12">x</text><line x1="${x0}" y1="${y0 + 5}" x2="${x0}" y2="${yTop - 12}" stroke="#000" stroke-width="1.4" /><polygon points="${x0},${yTop - 12} ${x0 - 3},${yTop - 6} ${x0 + 3},${yTop - 6}" fill="#000" /><text x="${x0}" y="${yTop - 15}" font-family="Georgia, serif" font-style="italic" font-size="12" text-anchor="middle">y</text><text x="${x0 - 4}" y="${y0 + 10}" font-family="Georgia, serif" font-style="italic" font-size="11" text-anchor="end">O</text>${xLabels}${yLabels}${ptCircles}${modelShape}</svg>`;
}

function makeTest6M1Q5ParabolaSvg(): string {
  const x0 = 56;
  const y0 = 175;
  const dx = 16; // 10 units = 160px (x spans 56 to 216)
  const yTop = 25; // 6 units (0 to 60) = 150px (25px per 10 units), y spans 175 to 25
  const dy = 25;

  const gridLines: string[] = [];
  // Vertical grid lines for x = 1..10
  for (let i = 1; i <= 10; i++) {
    const x = x0 + i * dx;
    gridLines.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${y0}" stroke="#000" stroke-width="0.75" />`);
  }
  // Horizontal grid lines for y = 10..60
  for (let i = 0; i <= 6; i++) {
    const y = yTop + i * dy;
    gridLines.push(`<line x1="${x0}" y1="${y}" x2="${x0 + 10 * dx}" y2="${y}" stroke="#000" stroke-width="0.75" />`);
  }

  // Curve points: y = -5(x-2)^2 + 28
  // x goes from 0 to 4.366 (where y=0)
  const curvePts: string[] = [];
  for (let x = 0; x <= 4.366; x += 0.05) {
    const yVal = -5 * Math.pow(x - 2, 2) + 28;
    const px = x0 + x * dx;
    const py = y0 - (yVal / 60) * (6 * dy);
    curvePts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const endX = x0 + 4.366 * dx;
  curvePts.push(`${endX.toFixed(1)},${y0}`);

  // Vertex point at (2, 28)
  const vx = x0 + 2 * dx;
  const vy = y0 - (28 / 60) * 150;

  const xLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
    `<text x="${x0 + i * dx}" y="${y0 + 13}" font-family="Georgia, serif" font-size="10" text-anchor="middle">${i}</text>`
  ).join('');

  const yLabels = [10, 20, 30, 40, 50, 60].map(val => {
    const y = y0 - (val / 60) * 150;
    return `<text x="${x0 - 4}" y="${y + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end">${val}</text>`;
  }).join('');

  return `<svg viewBox="0 0 256 220" class="w-full max-w-[240px] bg-white font-serif"><g>${gridLines.join('')}</g><line x1="${x0 - 5}" y1="${y0}" x2="${x0 + 10 * dx + 12}" y2="${y0}" stroke="#000" stroke-width="1.4" /><polygon points="${x0 + 10 * dx + 12},${y0} ${x0 + 10 * dx + 6},${y0 - 3} ${x0 + 10 * dx + 6},${y0 + 3}" fill="#000" /><text x="${x0 + 10 * dx + 16}" y="${y0 + 4}" font-family="Georgia, serif" font-style="italic" font-size="12">x</text><line x1="${x0}" y1="${y0 + 5}" x2="${x0}" y2="${yTop - 12}" stroke="#000" stroke-width="1.4" /><polygon points="${x0},${yTop - 12} ${x0 - 3},${yTop - 6} ${x0 + 3},${yTop - 6}" fill="#000" /><text x="${x0}" y="${yTop - 15}" font-family="Georgia, serif" font-style="italic" font-size="12" text-anchor="middle">y</text><text x="${x0 - 4}" y="${y0 + 10}" font-family="Georgia, serif" font-style="italic" font-size="11" text-anchor="end">O</text>${xLabels}${yLabels}<text x="${x0 + 5 * dx}" y="${y0 + 29}" font-family="Georgia, serif" font-size="11" text-anchor="middle">Time (seconds)</text><text transform="rotate(-90)" x="${-(yTop + 75)}" y="${x0 - 32}" font-family="Georgia, serif" font-size="11" text-anchor="middle">Height above ground (meters)</text><path d="M ${curvePts.join(' L ')}" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" /><circle cx="${vx.toFixed(1)}" cy="${vy.toFixed(1)}" r="3" fill="#000" /></svg>`;
}

function makeTest6M1Q15ProjectsSvg(): string {
  const x0 = 36;
  const y0 = 230;
  const dx = 29; // 6 units: x spans 36 to 210
  const dy = 16; // 13 units: y spans 230 to 22
  const yTop = y0 - 13 * dy; // 22
  const xRight = x0 + 6 * dx; // 210

  const gridLines: string[] = [];
  // Horizontal grid lines for y = 1..13 (extending 4px left past y-axis as tick marks)
  for (let i = 1; i <= 13; i++) {
    const y = y0 - i * dy;
    gridLines.push(`<line x1="${x0 - 4}" y1="${y}" x2="${xRight}" y2="${y}" stroke="#000000" stroke-width="0.8" />`);
  }
  // Vertical grid lines for x = 1..6 (extending 4px down past x-axis as tick marks)
  for (let i = 1; i <= 6; i++) {
    const x = x0 + i * dx;
    gridLines.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${y0 + 4}" stroke="#000000" stroke-width="0.8" />`);
  }

  // X labels (1 to 6)
  const xLabels = [1, 2, 3, 4, 5, 6].map(i =>
    `<text x="${x0 + i * dx}" y="${y0 + 16}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="middle">${i}</text>`
  ).join('');

  // Y labels (1 to 13)
  const yLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(val => {
    const y = y0 - val * dy;
    return `<text x="${x0 - 6}" y="${y + 4}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="end">${val}</text>`;
  }).join('');

  // Curve points: y = -0.25*(x - 4)^2 + 9 for x in [0, 6.2]
  const curvePts: string[] = [];
  for (let x = 0; x <= 6.2; x += 0.05) {
    const yVal = -0.25 * Math.pow(x - 4, 2) + 9;
    const px = x0 + x * dx;
    const py = y0 - yVal * dy;
    curvePts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return `<svg viewBox="0 0 248 256" class="w-full max-w-[210px] bg-white font-serif select-none">
    <!-- Grid Lines -->
    <g>${gridLines.join('')}</g>
    <!-- x-axis -->
    <line x1="${x0 - 5}" y1="${y0}" x2="${xRight + 14}" y2="${y0}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${xRight + 14},${y0} ${xRight + 7},${y0 - 3.5} ${xRight + 7},${y0 + 3.5}" fill="#000000" />
    <text x="${xRight + 18}" y="${y0 + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" fill="#000000">x</text>
    <!-- y-axis -->
    <line x1="${x0}" y1="${y0 + 5}" x2="${x0}" y2="${yTop - 14}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${x0},${yTop - 14} ${x0 - 3.5},${yTop - 7} ${x0 + 3.5},${yTop - 7}" fill="#000000" />
    <text x="${x0}" y="${yTop - 17}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000000">y</text>
    <!-- Origin O -->
    <text x="${x0 - 4}" y="${y0 + 10}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" text-anchor="end" fill="#000000">O</text>
    <!-- Numeric Labels -->
    ${xLabels}
    ${yLabels}
    <!-- Parabola Curve -->
    <path d="M ${curvePts.join(' L ')}" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;
}

function makeTest6M1Q21ParabolaSvg(): string {
  const x0 = 135;
  const y0 = 115;
  const dx = 18;
  const dy = 18;

  const xMin = -6;
  const xMax = 5;
  const yMin = -11;
  const yMax = 5;

  const left = x0 + xMin * dx;   // 27
  const right = x0 + xMax * dx;  // 225
  const top = y0 - yMax * dy;    // 25
  const bottom = y0 - yMin * dy; // 313

  // Grid lines (extending 3.5px past the outer box)
  const gridLines: string[] = [];
  for (let yVal = yMin; yVal <= yMax; yVal++) {
    const y = y0 - yVal * dy;
    gridLines.push(`<line x1="${left - 3.5}" y1="${y}" x2="${right + 3.5}" y2="${y}" stroke="#000000" stroke-width="0.75" />`);
  }
  for (let xVal = xMin; xVal <= xMax; xVal++) {
    const x = x0 + xVal * dx;
    gridLines.push(`<line x1="${x}" y1="${top - 3.5}" x2="${x}" y2="${bottom + 3.5}" stroke="#000000" stroke-width="0.75" />`);
  }

  // X labels: -6, -4, -2, 2, 4
  const xLabels = [-6, -4, -2, 2, 4].map(val =>
    `<text x="${x0 + val * dx}" y="${y0 + 13}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="middle">${val}</text>`
  ).join('');

  // Y labels: 4, 2, -2, -4, -6, -8, -10
  const yLabels = [4, 2, -2, -4, -6, -8, -10].map(val =>
    `<text x="${x0 - 5}" y="${y0 - val * dy + 4}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="end">${val}</text>`
  ).join('');

  // Curve points: y = 2(x + 1)^2 - 8 for x in [-3.55, 1.55]
  const curvePts: string[] = [];
  for (let x = -3.55; x <= 1.55; x += 0.04) {
    const yVal = 2 * Math.pow(x + 1, 2) - 8;
    const px = x0 + x * dx;
    const py = y0 - yVal * dy;
    curvePts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  // Three solid dots at (-2, -6), (-1, -8), (0, -6)
  const p1 = { cx: x0 - 2 * dx, cy: y0 - (-6) * dy };
  const p2 = { cx: x0 - 1 * dx, cy: y0 - (-8) * dy };
  const p3 = { cx: x0 + 0 * dx, cy: y0 - (-6) * dy };

  return `<svg viewBox="0 0 262 334" class="w-full max-w-[210px] bg-white font-serif select-none">
    <!-- Grid -->
    <g>${gridLines.join('')}</g>
    <!-- x-axis -->
    <line x1="${left - 5}" y1="${y0}" x2="${right + 14}" y2="${y0}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${right + 14},${y0} ${right + 7},${y0 - 3.5} ${right + 7},${y0 + 3.5}" fill="#000000" />
    <text x="${right + 17}" y="${y0 + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" fill="#000000">x</text>
    <!-- y-axis -->
    <line x1="${x0}" y1="${bottom + 5}" x2="${x0}" y2="${top - 14}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${x0},${top - 14} ${x0 - 3.5},${top - 7} ${x0 + 3.5},${top - 7}" fill="#000000" />
    <text x="${x0}" y="${top - 17}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000000">y</text>
    <!-- Origin O -->
    <text x="${x0 - 4}" y="${y0 - 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="11.5" text-anchor="end" fill="#000000">O</text>
    <!-- Labels -->
    ${xLabels}
    ${yLabels}
    <!-- Parabola Curve -->
    <path d="M ${curvePts.join(' L ')}" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Highlighted Points -->
    <circle cx="${p1.cx}" cy="${p1.cy}" r="3.6" fill="#000000" />
    <circle cx="${p2.cx}" cy="${p2.cy}" r="3.6" fill="#000000" />
    <circle cx="${p3.cx}" cy="${p3.cy}" r="3.6" fill="#000000" />
  </svg>`;
}

function makeTest6M1Q23CircleSvg(): string {
  const x0 = 162;
  const y0 = 150;
  const dx = 18;
  const dy = 18;

  const xMin = -7;
  const xMax = 4;
  const yMin = -7;
  const yMax = 7;

  const left = x0 + xMin * dx;   // 36
  const right = x0 + xMax * dx;  // 234
  const top = y0 - yMax * dy;    // 24
  const bottom = y0 - yMin * dy; // 276

  // Grid lines
  const gridLines: string[] = [];
  for (let yVal = yMin; yVal <= yMax; yVal++) {
    const y = y0 - yVal * dy;
    gridLines.push(`<line x1="${left - 3.5}" y1="${y}" x2="${right + 3.5}" y2="${y}" stroke="#000000" stroke-width="0.75" />`);
  }
  for (let xVal = xMin; xVal <= xMax; xVal++) {
    const x = x0 + xVal * dx;
    gridLines.push(`<line x1="${x}" y1="${top - 3.5}" x2="${x}" y2="${bottom + 3.5}" stroke="#000000" stroke-width="0.75" />`);
  }

  // X labels: -6, -4, -2, 2
  const xLabels = [-6, -4, -2, 2].map(val =>
    `<text x="${x0 + val * dx}" y="${y0 + 13}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="middle">${val}</text>`
  ).join('');

  // Y labels: 6, 4, 2, -2, -4, -6
  const yLabels = [6, 4, 2, -2, -4, -6].map(val =>
    `<text x="${x0 - 5}" y="${y0 - val * dy + 4}" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="end">${val}</text>`
  ).join('');

  return `<svg viewBox="0 0 270 298" class="w-full max-w-[210px] bg-white font-serif select-none">
    <!-- Grid -->
    <g>${gridLines.join('')}</g>
    <!-- x-axis -->
    <line x1="${left - 5}" y1="${y0}" x2="${right + 14}" y2="${y0}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${right + 14},${y0} ${right + 7},${y0 - 3.5} ${right + 7},${y0 + 3.5}" fill="#000000" />
    <text x="${right + 17}" y="${y0 + 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" fill="#000000">x</text>
    <!-- y-axis -->
    <line x1="${x0}" y1="${bottom + 5}" x2="${x0}" y2="${top - 14}" stroke="#000000" stroke-width="1.8" />
    <polygon points="${x0},${top - 14} ${x0 - 3.5},${top - 7} ${x0 + 3.5},${top - 7}" fill="#000000" />
    <text x="${x0}" y="${top - 17}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000000">y</text>
    <!-- Origin O -->
    <text x="${x0 - 4}" y="${y0 - 4}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="11.5" text-anchor="end" fill="#000000">O</text>
    <!-- Labels -->
    ${xLabels}
    ${yLabels}
    <!-- Circle A -->
    <circle cx="${x0 - 2 * dx}" cy="${y0}" r="${3 * dx}" fill="none" stroke="#000000" stroke-width="2.2" />
    <!-- Center Dot -->
    <circle cx="${x0 - 2 * dx}" cy="${y0}" r="3.6" fill="#000000" />
  </svg>`;
}

export const TEST6_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 1887,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear Equations in One Variable',
    questionText: `(p + 3) + 8 = 10\n\nWhat value of p is the solution to the given equation?`,
    options: [
      { id: 'A', text: '-1' },
      { id: 'B', text: '5' },
      { id: 'C', text: '15' },
      { id: 'D', text: '21' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Subtracting 8 from both sides yields p + 3 = 2, so p = 2 - 3 = -1.'
  },
  {
    id: 1888,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 2,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Two-Variable Data: Models and Scatterplots',
    passageHtml: `<p class="mb-3">The scatterplot shows the relationship between two variables, <i>x</i> and <i>y</i>.</p><div class="my-4 flex justify-center">${makeTest6M1Q2ScatterSvg('base')}</div>`,
    questionText: `Which of the following graphs shows the most appropriate model for the data?`,
    options: [
      { id: 'A', text: `<div class="py-1 flex justify-center">${makeTest6M1Q2ScatterSvg('A')}</div>` },
      { id: 'B', text: `<div class="py-1 flex justify-center">${makeTest6M1Q2ScatterSvg('B')}</div>` },
      { id: 'C', text: `<div class="py-1 flex justify-center">${makeTest6M1Q2ScatterSvg('C')}</div>` },
      { id: 'D', text: `<div class="py-1 flex justify-center">${makeTest6M1Q2ScatterSvg('D')}</div>` }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The data points show an exponential growth pattern that starts near 0 when x is between 0 and 2, and increases at an accelerating rate as x increases toward 7. The exponential curve in choice D starts near (0, 0) and accurately passes through the trend of the data points.'
  },
  {
    id: 1889,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Nonlinear Equations',
    questionText: `k² - 53 = 91\n\nWhat is the positive solution to the given equation?`,
    options: [
      { id: 'A', text: '144' },
      { id: 'B', text: '72' },
      { id: 'C', text: '38' },
      { id: 'D', text: '12' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Adding 53 to both sides yields k² = 144, so k = √144 = 12.'
  },
  {
    id: 1890,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 4,
    domain: 'Algebra',
    skill: 'Linear Inequalities in One Variable',
    questionText: `During a portion of a flight, a small airplane’s cruising speed varied between 150 miles per hour and 170 miles per hour. Which inequality best represents this situation, where s is the cruising speed, in miles per hour, during this portion of the flight?`,
    options: [
      { id: 'A', text: 's ≤ 20' },
      { id: 'B', text: 's ≤ 150' },
      { id: 'C', text: 's ≤ 170' },
      { id: 'D', text: '150 ≤ s ≤ 170' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. "Varied between 150 and 170 miles per hour" means cruising speed s is greater than or equal to 150 and less than or equal to 170.'
  },
  {
    id: 1891,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 5,
    domain: 'Advanced Math',
    skill: 'Nonlinear Functions',
    questionText: `<div class="my-3 flex flex-col items-center"><div class="w-full max-w-sm flex justify-center">${makeTest6M1Q5ParabolaSvg()}</div></div>\n\nAn object was launched upward from a platform. The graph shown models the height above ground, <i>y</i>, in meters, of the object <i>x</i> seconds after it was launched. For which of the following intervals of time was the height of the object increasing for the entire interval?`,
    options: [
      { id: 'A', text: 'From x = 0 to x = 2' },
      { id: 'B', text: 'From x = 0 to x = 4' },
      { id: 'C', text: 'From x = 2 to x = 3' },
      { id: 'D', text: 'From x = 3 to x = 4' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The height increases continuously from x = 0 until reaching its maximum height (vertex at (2, 28)) at x = 2 seconds.'
  },
  {
    id: 1892,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 6,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Unit Conversions',
    questionText: `How many yards are equivalent to 1,116 inches? (1 yard = 36 inches)`,
    options: [],
    correctAnswer: '31',
    explanation: 'The correct answer is 31. Dividing 1,116 inches by 36 inches per yard gives 1,116 / 36 = 31 yards.'
  },
  {
    id: 1893,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 7,
    domain: 'Algebra',
    skill: 'Linear Functions in Context',
    questionText: `f(x) = 14 + 4x\n\nThe function f represents the total cost, in dollars, of attending an arcade when x games are played. How many games can be played for a total cost of $58?`,
    options: [],
    correctAnswer: '11',
    explanation: 'The correct answer is 11. Setting f(x) = 58 yields 14 + 4x = 58 => 4x = 44 => x = 11 games.'
  },
  {
    id: 1894,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 8,
    domain: 'Algebra',
    skill: 'Linear Functions',
    questionText: `f(x) = x + b\n\nFor the linear function f, b is a constant. When x = 0, f(x) = 30. What is the value of b ?`,
    options: [
      { id: 'A', text: '-30' },
      { id: 'B', text: '-1/30' },
      { id: 'C', text: '1/30' },
      { id: 'D', text: '30' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Substituting x = 0 gives f(0) = 0 + b = 30, so b = 30.'
  },
  {
    id: 1895,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 9,
    domain: 'Advanced Math',
    skill: 'Exponential Growth and Decay',
    questionText: `\\(P(t) = 1{,}800(1.02)^t\\)\n\nThe function \\(P\\) gives the estimated number of marine mammals in a certain area, where \\(t\\) is the number of years since a study began. What is the best interpretation of \\(P(0) = 1{,}800\\) in this context?`,
    options: [
      { id: 'A', text: 'The estimated number of marine mammals in the area was 102 when the study began.' },
      { id: 'B', text: 'The estimated number of marine mammals in the area was 1,800 when the study began.' },
      { id: 'C', text: 'The estimated number of marine mammals in the area increased by 102 each year during the study.' },
      { id: 'D', text: 'The estimated number of marine mammals in the area increased by 1,800 each year during the study.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. \\(t = 0\\) corresponds to the start of the study, so \\(P(0) = 1{,}800\\) represents the initial population when the study began.'
  },
  {
    id: 1896,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 10,
    domain: 'Algebra',
    skill: 'Linear Equations in Context',
    questionText: `A manager is responsible for ordering supplies for a shaved ice shop. The shop’s inventory starts with 4,500 paper cups, and the manager estimates that 70 of these paper cups are used each day. Based on this estimate, in how many days will the supply of paper cups reach 1,700?`,
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '40' },
      { id: 'C', text: '60' },
      { id: 'D', text: '80' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Setting up 4,500 - 70d = 1,700 => 70d = 2,800 => d = 40 days.'
  },
  {
    id: 1897,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 11,
    domain: 'Algebra',
    skill: 'Linear Inequalities in Two Variables',
    questionText: `<div class="my-3 text-center font-serif text-base"><p><i>y</i> &gt; 4<i>x</i> + 8</p></div><p class="mt-3">For which of the following tables are all the values of <i>x</i> and their corresponding values of <i>y</i> solutions to the given inequality?</p>`,
    options: [
      {
        id: 'A',
        text: `<table class="border-collapse border border-black font-serif text-center text-xs inline-table my-1"><colgroup><col class="w-12"><col class="w-12"></colgroup><thead><tr><th class="border border-black px-2.5 py-1 font-normal"><i>x</i></th><th class="border border-black px-2.5 py-1 font-normal"><i>y</i></th></tr></thead><tbody><tr><td class="border border-black px-2.5 py-1">2</td><td class="border border-black px-2.5 py-1">19</td></tr><tr><td class="border border-black px-2.5 py-1">4</td><td class="border border-black px-2.5 py-1">30</td></tr><tr><td class="border border-black px-2.5 py-1">6</td><td class="border border-black px-2.5 py-1">41</td></tr></tbody></table>`
      },
      {
        id: 'B',
        text: `<table class="border-collapse border border-black font-serif text-center text-xs inline-table my-1"><colgroup><col class="w-12"><col class="w-12"></colgroup><thead><tr><th class="border border-black px-2.5 py-1 font-normal"><i>x</i></th><th class="border border-black px-2.5 py-1 font-normal"><i>y</i></th></tr></thead><tbody><tr><td class="border border-black px-2.5 py-1">2</td><td class="border border-black px-2.5 py-1">8</td></tr><tr><td class="border border-black px-2.5 py-1">4</td><td class="border border-black px-2.5 py-1">16</td></tr><tr><td class="border border-black px-2.5 py-1">6</td><td class="border border-black px-2.5 py-1">24</td></tr></tbody></table>`
      },
      {
        id: 'C',
        text: `<table class="border-collapse border border-black font-serif text-center text-xs inline-table my-1"><colgroup><col class="w-12"><col class="w-12"></colgroup><thead><tr><th class="border border-black px-2.5 py-1 font-normal"><i>x</i></th><th class="border border-black px-2.5 py-1 font-normal"><i>y</i></th></tr></thead><tbody><tr><td class="border border-black px-2.5 py-1">2</td><td class="border border-black px-2.5 py-1">13</td></tr><tr><td class="border border-black px-2.5 py-1">4</td><td class="border border-black px-2.5 py-1">18</td></tr><tr><td class="border border-black px-2.5 py-1">6</td><td class="border border-black px-2.5 py-1">23</td></tr></tbody></table>`
      },
      {
        id: 'D',
        text: `<table class="border-collapse border border-black font-serif text-center text-xs inline-table my-1"><colgroup><col class="w-12"><col class="w-12"></colgroup><thead><tr><th class="border border-black px-2.5 py-1 font-normal"><i>x</i></th><th class="border border-black px-2.5 py-1 font-normal"><i>y</i></th></tr></thead><tbody><tr><td class="border border-black px-2.5 py-1">2</td><td class="border border-black px-2.5 py-1">13</td></tr><tr><td class="border border-black px-2.5 py-1">4</td><td class="border border-black px-2.5 py-1">21</td></tr><tr><td class="border border-black px-2.5 py-1">6</td><td class="border border-black px-2.5 py-1">29</td></tr></tbody></table>`
      }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. For the table in choice A, substituting each pair into \\(y > 4x + 8\\):\n- For \\(x = 2, y = 19\\): \\(19 > 4(2) + 8 = 16\\) (True)\n- For \\(x = 4, y = 30\\): \\(30 > 4(4) + 8 = 24\\) (True)\n- For \\(x = 6, y = 41\\): \\(41 > 4(6) + 8 = 32\\) (True)\nAll values are solutions to the given inequality.'
  },
  {
    id: 1898,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Polynomial Operations and Equivalent Expressions',
    questionText: `Which expression is equivalent to (x² + 11)² + (x - 5)(x + 5) ?`,
    options: [
      { id: 'A', text: 'x⁴ + 23x² - 14' },
      { id: 'B', text: 'x⁴ + 23x² + 96' },
      { id: 'C', text: 'x⁴ + 12x² + 121' },
      { id: 'D', text: 'x⁴ + x² + 146' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Expanding yields (x⁴ + 22x² + 121) + (x² - 25) = x⁴ + 23x² + 96.'
  },
  {
    id: 1899,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 13,
    domain: 'Advanced Math',
    skill: 'Rational Functions',
    questionText: `The function \\(h\\) is defined by \\(h(x) = \\frac{8}{5x + 6}\\). What is the value of \\(h(2)\\) ?`,
    options: [],
    correctAnswer: '1/2',
    explanation: 'The correct answer is \\(1/2\\) (or \\(0.5\\)). Substituting \\(x = 2\\) into the definition of \\(h\\) gives \\(h(2) = \\frac{8}{5(2) + 6} = \\frac{8}{10 + 6} = \\frac{8}{16} = \\frac{1}{2}\\).'
  },
  {
    id: 1900,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 14,
    domain: 'Geometry and Trigonometry',
    skill: 'Right Triangles and Area',
    questionText: `<div class="my-3 flex flex-col items-center"><div class="w-full max-w-sm flex justify-center"><svg viewBox="0 0 200 140" class="w-full max-w-xs bg-white p-2"><polygon points="30,20 30,110 170,110" fill="none" stroke="#000" stroke-width="2"/><rect x="30" y="100" width="10" height="10" fill="none" stroke="#000" stroke-width="1"/><text x="15" y="70" font-family="Georgia, serif" font-size="12">3</text><text x="100" y="128" font-family="Georgia, serif" font-size="12">5</text></svg></div></div>\n\nThe figure shows the lengths, in inches, of two sides of a right triangle: base = 5 and leg = 3. What is the area of the triangle, in square inches?`,
    options: [],
    correctAnswer: '7.5',
    explanation: 'The correct answer is 7.5 (or 15/2). Area = (1/2) × base × height = (1/2) × 3 × 5 = 7.5 square inches.'
  },
  {
    id: 1901,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 15,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Two-Variable Data / Models',
    questionText: `<div class="my-3 flex justify-center">${makeTest6M1Q15ProjectsSvg()}</div>\n\nThe graph models the number of active projects a company was working on \\(x\\) months after the end of November 2012, where \\(0 \\le x \\le 6\\). According to the model, what is the predicted number of active projects the company was working on at the end of November 2012?`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '5' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. At \\(x = 0\\) (the end of November 2012), the graph intersects the y-axis at \\(y = 5\\), which represents 5 active projects.'
  },
  {
    id: 1902,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 16,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    questionText: `The relationship between two variables, x and y, is linear. For every increase in the value of x by 1, the value of y increases by 8. When the value of x is 2, the value of y is 18. Which equation represents this relationship?`,
    options: [
      { id: 'A', text: 'y = 2x + 18' },
      { id: 'B', text: 'y = 2x + 8' },
      { id: 'C', text: 'y = 8x + 2' },
      { id: 'D', text: 'y = 3x + 26' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The slope m = 8. Substituting (2, 18) into y = 8x + b gives 18 = 8(2) + b => b = 2, so y = 8x + 2.'
  },
  {
    id: 1903,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 17,
    domain: 'Algebra',
    skill: 'Rearranging Formulas',
    questionText: `<div class="my-3 text-center font-serif text-base"><p>\\(P = N(19 - C)\\)</p></div><p class="mt-3">The given equation relates the positive numbers \\(P\\), \\(N\\), and \\(C\\). Which equation correctly expresses \\(C\\) in terms of \\(P\\) and \\(N\\) ?</p>`,
    options: [
      { id: 'A', text: '\\(C = \\frac{19 + P}{N}\\)' },
      { id: 'B', text: '\\(C = \\frac{19 - P}{N}\\)' },
      { id: 'C', text: '\\(C = 19 + \\frac{P}{N}\\)' },
      { id: 'D', text: '\\(C = 19 - \\frac{P}{N}\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Dividing both sides of \\(P = N(19 - C)\\) by \\(N\\) gives \\(\\frac{P}{N} = 19 - C\\). Subtracting 19 from both sides gives \\(\\frac{P}{N} - 19 = -C\\), and multiplying both sides by \\(-1\\) gives \\(C = 19 - \\frac{P}{N}\\).'
  },
  {
    id: 1904,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 18,
    domain: 'Advanced Math',
    skill: 'Quadratic Formula',
    questionText: `\\(w^2 + 12w - 40 = 0\\)\n\nWhich of the following is a solution to the given equation?`,
    options: [
      { id: 'A', text: '\\(6 - 2\\sqrt{19}\\)' },
      { id: 'B', text: '\\(2\\sqrt{19}\\)' },
      { id: 'C', text: '\\(\\sqrt{19}\\)' },
      { id: 'D', text: '\\(-6 + 2\\sqrt{19}\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. By quadratic formula, \\(w = \\frac{-12 \\pm \\sqrt{144 + 160}}{2} = \\frac{-12 \\pm \\sqrt{304}}{2} = \\frac{-12 \\pm 4\\sqrt{19}}{2} = -6 \\pm 2\\sqrt{19}\\).'
  },
  {
    id: 1905,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 19,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'One-Variable Data: Distributions and Measures',
    questionText: `<p>The table shown summarizes the number of employees at each of the 17 restaurants in a town.</p><div class="my-3 flex justify-center"><table class="border-collapse border border-black font-serif text-center text-sm inline-table"><colgroup><col class="w-48"><col class="w-48"></colgroup><thead><tr><th class="border border-black px-3 py-1.5 font-normal">Number of employees</th><th class="border border-black px-3 py-1.5 font-normal">Number of restaurants</th></tr></thead><tbody><tr><td class="border border-black px-3 py-1.5">2 to 7</td><td class="border border-black px-3 py-1.5">2</td></tr><tr><td class="border border-black px-3 py-1.5">8 to 13</td><td class="border border-black px-3 py-1.5">4</td></tr><tr><td class="border border-black px-3 py-1.5">14 to 19</td><td class="border border-black px-3 py-1.5">2</td></tr><tr><td class="border border-black px-3 py-1.5">20 to 25</td><td class="border border-black px-3 py-1.5">7</td></tr><tr><td class="border border-black px-3 py-1.5">26 to 31</td><td class="border border-black px-3 py-1.5">2</td></tr></tbody></table></div><p class="mt-3">Which of the following could be the median number of employees for the restaurants in this town?</p>`,
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '9' },
      { id: 'C', text: '15' },
      { id: 'D', text: '21' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The median of 17 sorted values is the 9th value. Accumulating counts: 2 + 4 + 2 = 8 restaurants have 19 or fewer employees, so the 9th restaurant lies in the "20 to 25" range. 21 is the only option in this range.'
  },
  {
    id: 1906,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 20,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    questionText: `What is the y-coordinate of the y-intercept of the graph of \\(\\frac{3x}{7} = -\\frac{5y}{9} + 21\\) in the xy-plane?`,
    options: [],
    correctAnswer: '189/5',
    explanation: 'The correct answer is \\(\\frac{189}{5}\\) (or 37.8). Setting \\(x = 0\\) gives \\(0 = -\\frac{5y}{9} + 21 \\implies \\frac{5y}{9} = 21 \\implies 5y = 189 \\implies y = \\frac{189}{5}\\).'
  },
  {
    id: 1907,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 21,
    domain: 'Advanced Math',
    skill: 'Quadratic Functions',
    questionText: `<div class="my-3 flex justify-center">${makeTest6M1Q21ParabolaSvg()}</div>\n\nThe graph of \\(y = 2x^2 + bx + c\\) is shown, where \\(b\\) and \\(c\\) are constants. What is the value of \\(bc\\) ?`,
    options: [],
    correctAnswer: '-24',
    explanation: 'The correct answer is -24. From the graph, the y-intercept is at \\((0, -6)\\), so \\(c = -6\\). The vertex of the parabola is at \\((-1, -8)\\). Using the vertex form of a quadratic function \\(y = a(x - h)^2 + k\\) with \\(a = 2\\), \\(h = -1\\), and \\(k = -8\\):\n\n\\[y = 2(x + 1)^2 - 8 = 2(x^2 + 2x + 1) - 8 = 2x^2 + 4x - 6\\]\n\nComparing this to \\(y = 2x^2 + bx + c\\), we see that \\(b = 4\\) and \\(c = -6\\). Therefore, the value of \\(bc\\) is \\(4(-6) = -24\\).'
  },
  {
    id: 1908,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 22,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages',
    questionText: `In 2008, Zinah earned 14% more than in 2007, and in 2009 Zinah earned 4% more than in 2008. If Zinah earned y times as much in 2009 as in 2007, what is the value of y ?`,
    options: [
      { id: 'A', text: '0.5600' },
      { id: 'B', text: '1.0056' },
      { id: 'C', text: '1.1800' },
      { id: 'D', text: '1.1856' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Earnings ratio y = (1 + 0.14) × (1 + 0.04) = 1.14 × 1.04 = 1.1856.'
  },
  {
    id: 1909,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 23,
    domain: 'Geometry and Trigonometry',
    skill: 'Circle Transformations',
    questionText: `<div class="my-3 flex justify-center">${makeTest6M1Q23CircleSvg()}</div>\n\nCircle \\(A\\) (shown) is defined by the equation \\((x + 2)^2 + y^2 = 9\\). Circle \\(B\\) (not shown) is the result of shifting circle \\(A\\) down 6 units and increasing the radius so that the radius of circle \\(B\\) is 2 times the radius of circle \\(A\\). Which equation defines circle \\(B\\) ?`,
    options: [
      { id: 'A', text: '\\((x + 2)^2 + (y + 6)^2 = (4)(9)\\)' },
      { id: 'B', text: '\\(2(x + 2)^2 + 2(y + 6)^2 = 9\\)' },
      { id: 'C', text: '\\((x + 2)^2 + (y - 6)^2 = (4)(9)\\)' },
      { id: 'D', text: '\\(2(x + 2)^2 + 2(y - 6)^2 = 9\\)' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The standard equation of a circle is \\((x - h)^2 + (y - k)^2 = r^2\\), where \\((h, k)\\) is the center and \\(r\\) is the radius. Circle \\(A\\) has center \\((-2, 0)\\) and radius \\(r_A = \\sqrt{9} = 3\\). Shifting circle \\(A\\) down 6 units changes its center to \\((-2, 0 - 6) = (-2, -6)\\), which gives the expression \\((x + 2)^2 + (y + 6)^2\\). Increasing the radius so that \\(r_B = 2r_A = 2(3) = 6\\) means the right side of the equation becomes \\(r_B^2 = (2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = (4)(9)\\) (or 36). Therefore, the equation defining circle \\(B\\) is \\((x + 2)^2 + (y + 6)^2 = (4)(9)\\).'
  },
  {
    id: 1910,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 24,
    domain: 'Geometry and Trigonometry',
    skill: 'Right Triangles and Trigonometry',
    questionText: `<div class="my-3 flex flex-col items-center"><div class="w-full max-w-sm flex justify-center"><svg viewBox="0 0 220 140" class="w-full max-w-xs bg-white p-2"><polygon points="30,20 30,110 180,110" fill="none" stroke="#000" stroke-width="2"/><rect x="30" y="100" width="10" height="10" fill="none" stroke="#000" stroke-width="1"/><text x="20" y="20" font-family="Georgia, serif" font-size="12">A</text><text x="20" y="120" font-family="Georgia, serif" font-size="12">C</text><text x="190" y="120" font-family="Georgia, serif" font-size="12">B</text><text x="110" y="60" font-family="Georgia, serif" font-size="11">54</text><text x="145" y="105" font-family="Georgia, serif" font-size="10">30°</text></svg></div></div>\n\nRight triangle ABC is shown with hypotenuse AB = 54, right angle C, and angle B = 30°. What is the value of tan A ?`,
    options: [
      { id: 'A', text: '√3 / 54' },
      { id: 'B', text: '1 / √3' },
      { id: 'C', text: '√3' },
      { id: 'D', text: '27√3' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. Since angle C = 90° and angle B = 30°, angle A = 60°. Therefore, tan A = tan 60° = √3.'
  },
  {
    id: 1911,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 25,
    domain: 'Advanced Math',
    skill: 'Exponential Growth and Percentages',
    questionText: `At the time that an article was first featured on the home page of a news website, there were 40 comments on the article. An exponential model estimates that at the end of each hour after the article was first featured on the home page, the number of comments on the article had increased by 190% of the number of comments on the article at the end of the previous hour. Which of the following equations best represents this model, where \\(C\\) is the estimated number of comments on the article \\(t\\) hours after the article was first featured on the home page and \\(t \\le 4\\)?`,
    options: [
      { id: 'A', text: '\\(C = 40(1.19)^t\\)' },
      { id: 'B', text: '\\(C = 40(1.9)^t\\)' },
      { id: 'C', text: '\\(C = 40(19)^t\\)' },
      { id: 'D', text: '\\(C = 40(2.9)^t\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. An increase of 190% of the previous value means the new value is \\(100\\% + 190\\% = 290\\%\\) of the previous value, which corresponds to multiplying by a growth factor of \\(1 + 1.90 = 2.9\\) each hour. Since there were initially 40 comments at \\(t = 0\\), the exponential model is \\(C = 40(2.9)^t\\).'
  },
  {
    id: 1912,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 26,
    domain: 'Advanced Math',
    skill: 'Function Transformation and Composition',
    questionText: `<div class="my-3 flex justify-center">
  <table class="border-collapse border border-black text-center font-serif text-base">
    <thead>
      <tr class="border-b border-black">
        <th class="border-r border-black px-6 py-1.5 font-normal italic">x</th>
        <th class="px-6 py-1.5 font-normal italic">g(x)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black">
        <td class="border-r border-black px-6 py-1.5">−27</td>
        <td class="px-6 py-1.5">3</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-6 py-1.5">−9</td>
        <td class="px-6 py-1.5">0</td>
      </tr>
      <tr>
        <td class="border-r border-black px-6 py-1.5">21</td>
        <td class="px-6 py-1.5">5</td>
      </tr>
    </tbody>
  </table>
</div>

The table shows three values of \\(x\\) and their corresponding values of \\(g(x)\\), where \\(g(x) = \\frac{f(x)}{x + 3}\\) and \\(f\\) is a linear function. What is the \\(y\\)-intercept of the graph of \\(y = f(x)\\) in the \\(xy\\)-plane?`,
    options: [
      { id: 'A', text: '(0, 36)' },
      { id: 'B', text: '(0, 12)' },
      { id: 'C', text: '(0, 4)' },
      { id: 'D', text: '(0, −9)' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. From the given definition \\(g(x) = \\frac{f(x)}{x + 3}\\), multiplying both sides by \\(x + 3\\) yields \\(f(x) = g(x)(x + 3)\\). Using the values from the table:\n\n• For \\(x = -27\\): \\(f(-27) = g(-27)(-27 + 3) = 3(-24) = -72\\)\n• For \\(x = -9\\): \\(f(-9) = g(-9)(-9 + 3) = 0(-6) = 0\\)\n• For \\(x = 21\\): \\(f(21) = g(21)(21 + 3) = 5(24) = 120\\)\n\nSince \\(f\\) is a linear function, its slope \\(m\\) is \\(m = \\frac{120 - 0}{21 - (-9)} = \\frac{120}{30} = 4\\). Using point-slope form with the point \\((-9, 0)\\), \\(f(x) - 0 = 4(x - (-9)) \\implies f(x) = 4x + 36\\). Setting \\(x = 0\\) gives \\(f(0) = 36\\), so the \\(y\\)-intercept of the graph of \\(y = f(x)\\) is \\((0, 36)\\).'
  },
  {
    id: 1913,
    testId: 'test6',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: "Math",
    moduleNumber: 1,
    questionNumber: 27,
    domain: 'Geometry and Trigonometry',
    skill: 'Similar Triangles',
    questionText: `In right triangle ABC, angle C is the right angle and BC = 162. Point D on side AB is connected by a line segment with point E on side AC such that line segment DE is parallel to side BC and CE = 2AE. What is the length of line segment DE ?`,
    options: [],
    correctAnswer: '54',
    explanation: 'The correct answer is 54. Since DE is parallel to BC, △ADE ~ △ACB. Side AC = AE + CE = AE + 2AE = 3AE. The scale factor is AE / AC = 1/3, so DE = BC / 3 = 162 / 3 = 54.'
  }
];
