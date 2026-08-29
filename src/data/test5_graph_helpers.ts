import fs from 'fs';

// ==========================================
// 1. MATH MODULE 1 - QUESTION 1 (Image 1 match)
// ==========================================
export function makeM1Q1Svg() {
  const padL = 44, padT = 30, step = 22;
  const toX = (x: number) => padL + (x - (-2)) * step;
  const toY = (y: number) => padT + (9 - y) * step;

  let grid = '';
  for (let x = -2; x <= 9; x++) {
    grid += `        <line x1="${toX(x)}" y1="${toY(9)}" x2="${toX(x)}" y2="${toY(-2)}" stroke="#000" stroke-width="0.75"/>\n`;
  }
  for (let y = -2; y <= 9; y++) {
    grid += `        <line x1="${toX(-2)}" y1="${toY(y)}" x2="${toX(9)}" y2="${toY(y)}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let ticks = '';
  for (let x = -2; x <= 9; x++) {
    ticks += `        <line x1="${toX(x)}" y1="${toY(0) - 3}" x2="${toX(x)}" y2="${toY(0) + 3}" stroke="#000" stroke-width="1.2"/>\n`;
  }
  for (let y = -2; y <= 9; y++) {
    ticks += `        <line x1="${toX(0) - 3}" y1="${toY(y)}" x2="${toX(0) + 3}" y2="${toY(y)}" stroke="#000" stroke-width="1.2"/>\n`;
  }

  let labels = '';
  for (let x = -2; x <= 9; x++) {
    if (x === 0) continue;
    labels += `        <text x="${toX(x)}" y="${toY(0) + 14}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  }
  for (let y = -2; y <= 9; y++) {
    if (y === 0) continue;
    labels += `        <text x="${toX(0) - 5}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  }

  // Generate smooth exponential curve points: y = 4 + 2^(x - 4)
  let expPoints: string[] = [];
  for (let x = -2; x <= 6.35; x += 0.1) {
    const y = 4 + Math.pow(2, x - 4);
    expPoints.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  const expPath = `M ${expPoints.join(' L ')}`;

  // Linear line: y = -4x + 21 from x = 2.95 to x = 5.8
  const lineX1 = toX(2.95), lineY1 = toY(-4 * 2.95 + 21);
  const lineX2 = toX(5.8), lineY2 = toY(-4 * 5.8 + 21);

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 320 320" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 1/1;">
      <defs>
        <marker id="arrow1_axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <!-- Axes -->
      <line x1="${toX(-2.4)}" y1="${toY(0)}" x2="${toX(9.6)}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow1_axis)"/>
      <text x="${toX(9.7)}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      <line x1="${toX(0)}" y1="${toY(-2.4)}" x2="${toX(0)}" y2="${toY(9.6)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow1_axis)"/>
      <text x="${toX(0)}" y="${toY(9.8)}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      <!-- Ticks -->
      <g stroke="#000" stroke-width="1.2">
${ticks}      </g>
      <!-- Origin & Labels -->
      <text x="${toX(0) - 5}" y="${toY(0) + 14}" font-family="Georgia, serif" font-style="italic" font-size="11" text-anchor="end" fill="#000">O</text>
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labels}      </g>
      <!-- Exponential Curve -->
      <path d="${expPath}" fill="none" stroke="#000" stroke-width="2.2" />
      <!-- Linear Line -->
      <line x1="${lineX1}" y1="${lineY1}" x2="${lineX2}" y2="${lineY2}" stroke="#000" stroke-width="2.2" />
      <!-- Intersection Point (4, 5) -->
      <circle cx="${toX(4)}" cy="${toY(5)}" r="3.5" fill="#000" />
    </svg>
  </div>
</div>`;
}

// ==========================================
// 2. MATH MODULE 1 - QUESTION 3
// ==========================================
export function makeM1Q3Svg() {
  const padL = 40, padT = 24, stepX = 15, stepY = 18;
  const toX = (x: number) => padL + (x - (-2)) * stepX;
  const toY = (y: number) => padT + (9 - y) * stepY;

  let grid = '';
  for (let x = -2; x <= 14; x++) {
    grid += `        <line x1="${toX(x)}" y1="${toY(9)}" x2="${toX(x)}" y2="${toY(-1)}" stroke="#000" stroke-width="0.75"/>\n`;
  }
  for (let y = -1; y <= 9; y++) {
    grid += `        <line x1="${toX(-2)}" y1="${toY(y)}" x2="${toX(14)}" y2="${toY(y)}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let ticks = '';
  for (let x = -2; x <= 14; x++) {
    ticks += `        <line x1="${toX(x)}" y1="${toY(0) - 3}" x2="${toX(x)}" y2="${toY(0) + 3}" stroke="#000" stroke-width="1.2"/>\n`;
  }
  for (let y = -1; y <= 9; y++) {
    ticks += `        <line x1="${toX(0) - 3}" y1="${toY(y)}" x2="${toX(0) + 3}" y2="${toY(y)}" stroke="#000" stroke-width="1.2"/>\n`;
  }

  let labels = '';
  [-2, 2, 4, 6, 8, 10, 12, 14].forEach(x => {
    labels += `        <text x="${toX(x)}" y="${toY(0) + 14}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  });
  [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(y => {
    labels += `        <text x="${toX(0) - 5}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  });

  // Linear function: y = -1.5x + 8 (passes through (0, 8), (2, 5), (4, 2), (6, -1))
  const xStart = -0.75, yStart = -1.5 * (-0.75) + 8; // y = 9.125
  const xEnd = 6.35, yEnd = -1.5 * 6.35 + 8; // y = -1.525

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 310 230" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 31/23;">
      <defs>
        <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <line x1="${toX(-2.4)}" y1="${toY(0)}" x2="${toX(14.6)}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow3)"/>
      <text x="${toX(14.7)}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      <line x1="${toX(0)}" y1="${toY(-1.4)}" x2="${toX(0)}" y2="${toY(9.6)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow3)"/>
      <text x="${toX(0)}" y="${toY(9.8)}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      <g stroke="#000" stroke-width="1.2">
${ticks}      </g>
      <text x="${toX(0) - 5}" y="${toY(0) + 14}" font-family="Georgia, serif" font-style="italic" font-size="10" text-anchor="end" fill="#000">O</text>
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labels}      </g>
      <!-- Plotted Line (No arrows on function lines) -->
      <line x1="${toX(xStart)}" y1="${toY(yStart)}" x2="${toX(xEnd)}" y2="${toY(yEnd)}" stroke="#000" stroke-width="2.2"/>
    </svg>
  </div>
</div>`;
}

// ==========================================
// 3. MATH MODULE 1 - QUESTION 6
// ==========================================
export function makeM1Q6Svg() {
  const padL = 40, padT = 24, stepX = 22, stepY = 22;
  const toX = (x: number) => padL + (x - (-1)) * stepX;
  const toY = (y: number) => padT + (5 - y) * stepY;

  let grid = '';
  for (let x = -1; x <= 9; x++) {
    grid += `        <line x1="${toX(x)}" y1="${toY(5)}" x2="${toX(x)}" y2="${toY(-2)}" stroke="#000" stroke-width="0.75"/>\n`;
  }
  for (let y = -2; y <= 5; y++) {
    grid += `        <line x1="${toX(-1)}" y1="${toY(y)}" x2="${toX(9)}" y2="${toY(y)}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let ticks = '';
  for (let x = -1; x <= 9; x++) {
    ticks += `        <line x1="${toX(x)}" y1="${toY(0) - 3}" x2="${toX(x)}" y2="${toY(0) + 3}" stroke="#000" stroke-width="1.2"/>\n`;
  }
  for (let y = -2; y <= 5; y++) {
    ticks += `        <line x1="${toX(0) - 3}" y1="${toY(y)}" x2="${toX(0) + 3}" y2="${toY(y)}" stroke="#000" stroke-width="1.2"/>\n`;
  }

  let labels = '';
  [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(x => {
    labels += `        <text x="${toX(x)}" y="${toY(0) + 14}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  });
  [-2, -1, 1, 2, 3, 4, 5].forEach(y => {
    labels += `        <text x="${toX(0) - 5}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  });

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 290 205" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 29/20.5;">
      <defs>
        <marker id="arrow6" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <line x1="${toX(-1.4)}" y1="${toY(0)}" x2="${toX(9.6)}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow6)"/>
      <text x="${toX(9.7)}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      <line x1="${toX(0)}" y1="${toY(-2.4)}" x2="${toX(0)}" y2="${toY(5.6)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrow6)"/>
      <text x="${toX(0)}" y="${toY(5.8)}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      <g stroke="#000" stroke-width="1.2">
${ticks}      </g>
      <text x="${toX(0) - 5}" y="${toY(0) + 14}" font-family="Georgia, serif" font-style="italic" font-size="10" text-anchor="end" fill="#000">O</text>
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labels}      </g>
      <!-- Plotted Linear Equations: Intersection at (4, 1), NO arrows on lines -->
      <line x1="${toX(2.8)}" y1="${toY(-2.6)}" x2="${toX(5.35)}" y2="${toY(5.05)}" stroke="#000" stroke-width="2.2"/>
      <line x1="${toX(2.8)}" y1="${toY(4.6)}" x2="${toX(5.35)}" y2="${toY(-3.05)}" stroke="#000" stroke-width="2.2"/>
    </svg>
  </div>
</div>`;
}

// ==========================================
// 4. MATH MODULE 1 - QUESTION 16
// ==========================================
export function makeRationalGraph(curveType: string, uniqueKey: string) {
  const padL = 32, padT = 18, stepX = 17, stepY = 10;
  const toX = (x: number) => padL + x * stepX;
  const toY = (y: number) => padT + (12 - y) * stepY;

  let grid = '';
  for (let x = 0; x <= 10; x++) {
    grid += `        <line x1="${toX(x)}" y1="${toY(12) - 4}" x2="${toX(x)}" y2="${toY(-4)}" stroke="#000" stroke-width="0.7"/>\n`;
  }
  for (let y = -4; y <= 12; y += 1) {
    grid += `        <line x1="${toX(0)}" y1="${toY(y)}" x2="${toX(10) + 4}" y2="${toY(y)}" stroke="#000" stroke-width="0.7"/>\n`;
  }

  let labelsX = '';
  [2, 4, 6, 8, 10].forEach(x => {
    labelsX += `        <text x="${toX(x)}" y="${toY(0) + 12}" font-family="Georgia, serif" font-size="8" text-anchor="middle" fill="#000">${x}</text>\n`;
  });
  let labelsY = '';
  [-4, -2, 2, 4, 6, 8, 10, 12].forEach(y => {
    labelsY += `        <text x="${toX(0) - 4}" y="${toY(y) + 3}" font-family="Georgia, serif" font-size="8" text-anchor="end" fill="#000">${y}</text>\n`;
  });

  // Calculate curve points: rational function y = 12 / x
  let pts: string[] = [];
  if (curveType === 'main') {
    for (let x = 1; x <= 10; x += 0.2) {
      const y = 12 / x;
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  } else if (curveType === 'A') {
    for (let x = 1; x <= 10; x += 0.2) {
      const y = 12 / x - 5;
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  } else if (curveType === 'B') {
    for (let x = 0.35; x <= 10; x += 0.2) {
      const y = Math.min(12, 4 / x);
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  } else if (curveType === 'C') {
    for (let x = 2; x <= 10; x += 0.2) {
      const y = 24 / x;
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  } else if (curveType === 'D') {
    for (let x = 1.72; x <= 10; x += 0.2) {
      const y = 12 / x + 5;
      pts.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    }
  }

  const svgId = 'arr_rat_' + uniqueKey;

  return `<svg viewBox="0 0 220 190" class="w-full max-w-[190px] bg-white p-1 border border-slate-200 rounded font-serif" style="aspect-ratio: 22/19;">
      <defs>
        <marker id="${svgId}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <g stroke="#000" stroke-width="0.7">
${grid}      </g>
      <line x1="${toX(0)}" y1="${toY(0)}" x2="${toX(10) + 10}" y2="${toY(0)}" stroke="#000" stroke-width="1.5" marker-end="url(#${svgId})"/>
      <text x="${toX(10) + 14}" y="${toY(0) + 3}" font-style="italic" font-size="10" fill="#000">x</text>
      <line x1="${toX(0)}" y1="${toY(-4)}" x2="${toX(0)}" y2="${toY(12) - 8}" stroke="#000" stroke-width="1.5" marker-end="url(#${svgId})"/>
      <text x="${toX(0)}" y="${toY(12) - 10}" font-style="italic" font-size="10" text-anchor="middle" fill="#000">y</text>
      <text x="${toX(0) - 4}" y="${toY(0) + 10}" font-style="italic" font-size="8.5" text-anchor="end" fill="#000">O</text>
      <g font-family="Georgia, serif" font-size="8" fill="#000">
${labelsX}${labelsY}      </g>
      <!-- Plotted curve -->
      <path d="M ${pts.join(' L ')}" fill="none" stroke="#000" stroke-width="1.8"/>
    </svg>`;
}

// ==========================================
// 5. MATH MODULE 2 - QUESTION 2 (Argon Gas Pressure vs Temperature)
// ==========================================
export function makeM2Q2Svg() {
  const padL = 50, padT = 24;
  const gridW = 238, gridH = 168;
  const toX = (x: number) => padL + (x / 850) * gridW;
  const toY = (y: number) => (padT + gridH) - (y / 36) * gridH;

  let grid = '';
  // Vertical gridlines every 50 from 0 to 850
  for (let x = 0; x <= 850; x += 50) {
    const gx = toX(x);
    grid += `        <line x1="${gx}" y1="${padT - 6}" x2="${gx}" y2="${padT + gridH}" stroke="#000" stroke-width="0.75"/>\n`;
  }
  // Horizontal gridlines every 3 from 0 to 36
  for (let y = 0; y <= 36; y += 3) {
    const gy = toY(y);
    grid += `        <line x1="${padL}" y1="${gy}" x2="${padL + gridW + 6}" y2="${gy}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let labelsX = '';
  [100, 200, 300, 400, 500, 600, 700, 800].forEach(x => {
    labelsX += `        <text x="${toX(x)}" y="${toY(0) + 15}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  });

  let labelsY = '';
  [6, 12, 18, 24, 30, 36].forEach(y => {
    labelsY += `        <text x="${padL - 6}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  });

  // Plotted line starts around x = 80, y = 1.6 and goes to x = 850, y = 17 (passes through 600, 12)
  const lineStart = { x: toX(80), y: toY(1.6) };
  const lineEnd = { x: toX(850), y: toY(17) };

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 340 260" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 34/26;">
      <defs>
        <marker id="arrowM2Q2_new" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <!-- Axes -->
      <line x1="${padL}" y1="${toY(0)}" x2="${padL + gridW + 18}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q2_new)"/>
      <text x="${padL + gridW + 24}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      
      <line x1="${padL}" y1="${toY(0)}" x2="${padL}" y2="${padT - 18}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q2_new)"/>
      <text x="${padL}" y="${padT - 22}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      
      <!-- Axis Titles -->
      <text x="${padL + gridW / 2}" y="${toY(0) + 32}" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000">Temperature (kelvins)</text>
      <text transform="rotate(-90)" x="${-(padT + gridH / 2)}" y="16" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000">Pressure (psi)</text>
      
      <!-- Origin -->
      <text x="${padL - 6}" y="${toY(0) + 15}" font-family="Georgia, serif" font-style="italic" font-size="10" text-anchor="end" fill="#000">O</text>
      
      <!-- Axis Numbers -->
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labelsX}${labelsY}      </g>
      
      <!-- Plotted Line -->
      <line x1="${lineStart.x}" y1="${lineStart.y}" x2="${lineEnd.x}" y2="${lineEnd.y}" stroke="#000" stroke-width="2.5"/>
    </svg>
  </div>
</div>`;
}

// ==========================================
// 6. MATH MODULE 2 - QUESTION 9 (Diver Height vs Time)
// ==========================================
export function makeM2Q9Svg() {
  const padL = 48, padT = 24;
  const gridW = 216, gridH = 168; // 3 columns of 72px each, 12 rows of 14px each
  // x: 0 to 3 (gridlines ONLY at x = 1, 2, 3)
  // y: 0 to 12 (gridlines every 1 unit from y = 1 to 12)
  const toX = (x: number) => padL + (x / 3) * gridW;
  const toY = (y: number) => (padT + gridH) - (y / 12) * gridH;

  let grid = '';
  // Vertical gridlines at x = 1, 2, 3 (plus grid boundary)
  [1, 2, 3].forEach(x => {
    const gx = toX(x);
    grid += `        <line x1="${gx}" y1="${padT - 6}" x2="${gx}" y2="${padT + gridH}" stroke="#000" stroke-width="0.75"/>\n`;
  });
  // Horizontal gridlines every 1 unit from y = 1 to 12
  for (let y = 1; y <= 12; y += 1) {
    const gy = toY(y);
    grid += `        <line x1="${padL}" y1="${gy}" x2="${padL + gridW + 6}" y2="${gy}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let labelsX = '';
  [1, 2, 3].forEach(x => {
    labelsX += `        <text x="${toX(x)}" y="${toY(0) + 15}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  });

  let labelsY = '';
  [3, 6, 9, 12].forEach(y => {
    labelsY += `        <text x="${padL - 6}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  });

  // Diver curve: exact quadratic matching the official SAT test
  // Starts at (0, 10), peak at vertex (0.223, 10.27), crosses (1, 7), lands at (1.6, 0)
  // Equation: y = -5.4167 * t^2 + 2.4167 * t + 10
  let pts: string[] = [];
  for (let t = 0; t <= 1.6; t += 0.02) {
    const y = Math.max(0, -5.4167 * t * t + 2.4167 * t + 10);
    pts.push(`${toX(t).toFixed(1)},${toY(y).toFixed(1)}`);
  }
  // Ensure the terminal point lands precisely on (1.6, 0)
  pts.push(`${toX(1.6).toFixed(1)},${toY(0).toFixed(1)}`);

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 320 250" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 32/25;">
      <defs>
        <marker id="arrowM2Q9_new" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <!-- Axes -->
      <line x1="${padL}" y1="${toY(0)}" x2="${padL + gridW + 18}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q9_new)"/>
      <text x="${padL + gridW + 24}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      
      <line x1="${padL}" y1="${toY(0)}" x2="${padL}" y2="${padT - 18}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q9_new)"/>
      <text x="${padL}" y="${padT - 22}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      
      <!-- Axis Titles -->
      <text x="${padL + gridW / 2}" y="${toY(0) + 32}" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000">Time (seconds)</text>
      <text transform="rotate(-90)" x="${-(padT + gridH / 2)}" y="16" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000">Height (meters)</text>
      
      <!-- Origin -->
      <text x="${padL - 6}" y="${toY(0) + 15}" font-family="Georgia, serif" font-style="italic" font-size="10" text-anchor="end" fill="#000">O</text>
      
      <!-- Axis Numbers -->
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labelsX}${labelsY}      </g>
      
      <!-- Plotted Parabola Path -->
      <path d="M ${pts.join(' L ')}" fill="none" stroke="#000" stroke-width="2.5"/>
    </svg>
  </div>
</div>`;
}

// ==========================================
// 7. MATH MODULE 2 - QUESTION 11 (Scatterplot & Line of Best Fit)
// ==========================================
export function makeM2Q11Svg() {
  const padL = 40, padT = 24;
  const gridW = 220, gridH = 220;
  // x: 0 to 10, y: 0 to 10
  const toX = (x: number) => padL + (x / 10) * gridW;
  const toY = (y: number) => (padT + gridH) - (y / 10) * gridH;

  let grid = '';
  for (let x = 0; x <= 10; x++) {
    const gx = toX(x);
    grid += `        <line x1="${gx}" y1="${padT - 6}" x2="${gx}" y2="${padT + gridH}" stroke="#000" stroke-width="0.75"/>\n`;
  }
  for (let y = 0; y <= 10; y++) {
    const gy = toY(y);
    grid += `        <line x1="${padL}" y1="${gy}" x2="${padL + gridW + 6}" y2="${gy}" stroke="#000" stroke-width="0.75"/>\n`;
  }

  let labelsX = '';
  for (let x = 1; x <= 10; x++) {
    labelsX += `        <text x="${toX(x)}" y="${toY(0) + 15}" font-family="Georgia, serif" font-size="10" text-anchor="middle" fill="#000">${x}</text>\n`;
  }

  let labelsY = '';
  for (let y = 1; y <= 10; y++) {
    labelsY += `        <text x="${padL - 6}" y="${toY(y) + 3.5}" font-family="Georgia, serif" font-size="10" text-anchor="end" fill="#000">${y}</text>\n`;
  }

  // Line of best fit from (0, 0) to (10, 10)
  const lineStart = { x: toX(0), y: toY(0) };
  const lineEnd = { x: toX(10), y: toY(10) };

  // 10 data points exact to the original SAT test image:
  // Points: (0.35, 0.9), (1.0, 1.5), (1.9, 2.6), (2.8, 1.5), (3.7, 3.3), (4.25, 4.7), (4.85, 4.1), (6.15, 6.5), (7.4, 6.9), (9.2, 10.0)
  const points = [
    [0.35, 0.9],
    [1.0, 1.5],
    [1.9, 2.6],
    [2.8, 1.5],
    [3.7, 3.3],
    [4.25, 4.7],
    [4.85, 4.1],
    [6.15, 6.5],
    [7.4, 6.9],
    [9.2, 10.0]
  ];

  const pointCircles = points.map(([px, py]) => `        <circle cx="${toX(px)}" cy="${toY(py)}" r="3.5" fill="#000"/>`).join('\n');

  return `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 300 300" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 1/1;">
      <defs>
        <marker id="arrowM2Q11_new" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#000000" />
        </marker>
      </defs>
      <!-- Grid -->
      <g stroke="#000" stroke-width="0.75">
${grid}      </g>
      <!-- Axes -->
      <line x1="${padL}" y1="${toY(0)}" x2="${padL + gridW + 18}" y2="${toY(0)}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q11_new)"/>
      <text x="${padL + gridW + 24}" y="${toY(0) + 4}" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#000">x</text>
      
      <line x1="${padL}" y1="${toY(0)}" x2="${padL}" y2="${padT - 18}" stroke="#000" stroke-width="1.8" marker-end="url(#arrowM2Q11_new)"/>
      <text x="${padL}" y="${padT - 22}" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle" fill="#000">y</text>
      
      <!-- Origin -->
      <text x="${padL - 6}" y="${toY(0) + 15}" font-family="Georgia, serif" font-style="italic" font-size="10" text-anchor="end" fill="#000">O</text>
      
      <!-- Axis Numbers -->
      <g font-family="Georgia, serif" font-size="10" fill="#000">
${labelsX}${labelsY}      </g>
      
      <!-- Line of Best Fit -->
      <line x1="${lineStart.x}" y1="${lineStart.y}" x2="${lineEnd.x}" y2="${lineEnd.y}" stroke="#000" stroke-width="2"/>
      
      <!-- Data Points -->
      <g>
${pointCircles}
      </g>
    </svg>
  </div>
</div>`;
}

// ==========================================
// 5. RW MODULE 1 - QUESTION 16 (Alboran Sea & Mauritanian Coast)
// ==========================================
export function makeRW1Q16Svg() {
  const padL = 45, padR = 25, padT = 25, padB = 40;
  const width = 340, height = 240;
  const toX = x => padL + ((x - 2) / (20 - 2)) * (width - padL - padR);
  const toY = y => (height - padB) - (y / 100) * (height - padB - padT);

  let grid = '';
  for (let x = 2; x <= 20; x += 2) {
    grid += `        <line x1="${toX(x)}" y1="${toY(100)}" x2="${toX(x)}" y2="${toY(0)}" stroke="#e2e8f0" stroke-width="0.8"/>\n`;
  }
  for (let y = 0; y <= 100; y += 10) {
    grid += `        <line x1="${toX(2)}" y1="${toY(y)}" x2="${toX(20)}" y2="${toY(y)}" stroke="#e2e8f0" stroke-width="0.8"/>\n`;
  }

  let labelsX = '';
  for (let x = 2; x <= 20; x += 2) {
    labelsX += `        <text x="${toX(x)}" y="${toY(0) + 14}" font-size="9" text-anchor="middle" fill="#000">${x}</text>\n`;
  }
  let labelsY = '';
  for (let y = 0; y <= 100; y += 10) {
    labelsY += `        <text x="${toX(2) - 5}" y="${toY(y) + 3.5}" font-size="9" text-anchor="end" fill="#000">${y}</text>\n`;
  }

  // Alboran Sea Data: [year, ratio]
  const alboran = [
    [2, 60], [4, 98], [6, 68], [8, 85], [10, 32],
    [12, 58], [14, 56], [16, 65], [18, 52], [20, 42]
  ];
  let alboranPts = alboran.map(([x, y]) => `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  let alboranMarkers = alboran.map(([x, y]) => {
    const cx = toX(x), cy = toY(y);
    return `        <polygon points="${cx},${cy - 4} ${cx - 3.5},${cy + 3} ${cx + 3.5},${cy + 3}" fill="#000"/>`;
  }).join('\n');

  // Mauritanian Coast Data: [year, ratio]
  const mauritania = [
    [2, 16], [4, 17], [6, 16], [8, 16], [10, 17],
    [12, 17], [14, 18], [16, 15], [18, 15], [20, 15]
  ];
  let mauritaniaPts = mauritania.map(([x, y]) => `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
  let mauritaniaMarkers = mauritania.map(([x, y]) => {
    const cx = toX(x), cy = toY(y);
    return `        <rect x="${cx - 3}" y="${cy - 3}" width="6" height="6" fill="#fff" stroke="#000" stroke-width="1.2"/>`;
  }).join('\n');

  return `<div class="my-4 flex flex-col items-center font-sans">
  <div class="text-center font-bold text-xs md:text-sm mb-2 max-w-xs md:max-w-md">
    Ratio of Manganese to Calcium in Samples from Alboran Sea and Mauritanian Coast
  </div>
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 350 250" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm">
      <!-- Grid -->
      <g stroke="#e2e8f0" stroke-width="0.8">
${grid}      </g>
      <!-- Border Box -->
      <rect x="${toX(2)}" y="${toY(100)}" width="${toX(20) - toX(2)}" height="${toY(0) - toY(100)}" fill="none" stroke="#000" stroke-width="1"/>
      
      <!-- Axis Labels -->
      <text x="${(toX(2) + toX(20)) / 2}" y="${toY(0) + 28}" font-size="9.5" text-anchor="middle" fill="#000">Approximate years before present (in thousands)</text>
      <text transform="rotate(-90)" x="${-(toY(0) + toY(100)) / 2}" y="13" font-size="9" text-anchor="middle" fill="#000">Manganese to calcium ratio (µmol/mol)</text>
      
      <!-- Numbers -->
      <g font-size="9" fill="#000">
${labelsX}${labelsY}      </g>
      
      <!-- Mauritanian Coast Series (dashed line) -->
      <polyline points="${mauritaniaPts.join(' ')}" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
      <g>
${mauritaniaMarkers}
      </g>
      
      <!-- Alboran Sea Series (solid line) -->
      <polyline points="${alboranPts.join(' ')}" fill="none" stroke="#000" stroke-width="1.8"/>
      <g>
${alboranMarkers}
      </g>
    </svg>
  </div>
  <!-- Legend -->
  <div class="flex items-center justify-center gap-6 mt-2 text-xs">
    <div class="flex items-center gap-1.5">
      <svg width="24" height="12" viewBox="0 0 24 12" class="inline-block">
        <line x1="0" y1="6" x2="24" y2="6" stroke="#000" stroke-width="1.8"/>
        <polygon points="12,2 8.5,9 15.5,9" fill="#000"/>
      </svg>
      <span>Alboran Sea</span>
    </div>
    <div class="flex items-center gap-1.5">
      <svg width="24" height="12" viewBox="0 0 24 12" class="inline-block">
        <line x1="0" y1="6" x2="24" y2="6" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="9" y="3" width="6" height="6" fill="#fff" stroke="#000" stroke-width="1.2"/>
      </svg>
      <span>Mauritanian coast</span>
    </div>
  </div>
</div>`;
}

// ==========================================
// 6. RW MODULE 2 - QUESTION 12 (Science Research Submissions)
// ==========================================
export function makeRW2Q12Svg() {
  const padL = 45, padR = 25, padT = 20, padB = 35;
  const width = 320, height = 230;
  const years = [2016, 2017, 2018, 2019];
  const toX = yr => padL + ((yr - 2016) / 3) * (width - padL - padR);
  const toY = val => (height - padB) - (val / 350) * (height - padB - padT);

  let grid = '';
  years.forEach(yr => {
    grid += `        <line x1="${toX(yr)}" y1="${toY(350)}" x2="${toX(yr)}" y2="${toY(0)}" stroke="#e2e8f0" stroke-width="0.8"/>\n`;
  });
  for (let val = 0; val <= 350; val += 50) {
    grid += `        <line x1="${toX(2016)}" y1="${toY(val)}" x2="${toX(2019)}" y2="${toY(val)}" stroke="#e2e8f0" stroke-width="0.8"/>\n`;
  }

  let labelsX = '';
  years.forEach(yr => {
    labelsX += `        <text x="${toX(yr)}" y="${toY(0) + 14}" font-size="9.5" text-anchor="middle" fill="#000">${yr}</text>\n`;
  });
  let labelsY = '';
  for (let val = 0; val <= 350; val += 50) {
    labelsY += `        <text x="${toX(2016) - 5}" y="${toY(val) + 3.5}" font-size="9" text-anchor="end" fill="#000">${val}</text>\n`;
  }

  // 1. Cellular and molecular biology: [100, 100, 100, 105] (solid + triangle)
  const cellPts = [2016, 2017, 2018, 2019].map((yr, i) => [toX(yr), toY([100, 100, 100, 105][i])]);
  // 2. Physics and space science: [200, 205, 230, 280] (dashed + square)
  const physPts = [2016, 2017, 2018, 2019].map((yr, i) => [toX(yr), toY([200, 205, 230, 280][i])]);
  // 3. Medicine and health: [210, 300, 280, 285] (dotted + circle)
  const medPts = [2016, 2017, 2018, 2019].map((yr, i) => [toX(yr), toY([210, 300, 280, 285][i])]);
  // 4. Animal science: [95, 90, 95, 100] (solid + diamond)
  const animPts = [2016, 2017, 2018, 2019].map((yr, i) => [toX(yr), toY([95, 90, 95, 100][i])]);

  return `<div class="my-4 flex flex-col items-center font-sans">
  <div class="text-center font-bold text-xs md:text-sm mb-2">
    Total Science Research Submissions by Topic, 2016–2019
  </div>
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 330 240" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm">
      <g stroke="#e2e8f0" stroke-width="0.8">
${grid}      </g>
      <rect x="${toX(2016)}" y="${toY(350)}" width="${toX(2019) - toX(2016)}" height="${toY(0) - toY(350)}" fill="none" stroke="#000" stroke-width="1"/>
      
      <text x="${(toX(2016) + toX(2019)) / 2}" y="${toY(0) + 26}" font-size="9.5" text-anchor="middle" fill="#000">Year</text>
      <text transform="rotate(-90)" x="${-(toY(0) + toY(350)) / 2}" y="12" font-size="9" text-anchor="middle" fill="#000">Number of submissions</text>
      
      <g font-size="9" fill="#000">
${labelsX}${labelsY}      </g>
      
      <!-- Cellular -->
      <polyline points="${cellPts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#000" stroke-width="1.8"/>
      ${cellPts.map(([x, y]) => `<polygon points="${x},${y - 4} ${x - 3.5},${y + 3} ${x + 3.5},${y + 3}" fill="#000"/>`).join('')}
      
      <!-- Physics -->
      <polyline points="${physPts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
      ${physPts.map(([x, y]) => `<rect x="${x - 3}" y="${y - 3}" width="6" height="6" fill="#fff" stroke="#000" stroke-width="1.2"/>`).join('')}
      
      <!-- Medicine -->
      <polyline points="${medPts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="2,3"/>
      ${medPts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#fff" stroke="#000" stroke-width="1.2"/>`).join('')}
      
      <!-- Animal -->
      <polyline points="${animPts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#000" stroke-width="1.5"/>
      ${animPts.map(([x, y]) => `<polygon points="${x},${y - 4} ${x + 4},${y} ${x},${y + 4} ${x - 4},${y}" fill="#fff" stroke="#000" stroke-width="1.2"/>`).join('')}
    </svg>
  </div>
  <!-- Legend -->
  <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-2 text-[11px]">
    <div class="flex items-center gap-1.5">
      <svg width="20" height="10" viewBox="0 0 20 10"><line x1="0" y1="5" x2="20" y2="5" stroke="#000" stroke-width="1.8"/><polygon points="10,1 6.5,8 13.5,8" fill="#000"/></svg>
      <span>cellular and molecular biology</span>
    </div>
    <div class="flex items-center gap-1.5">
      <svg width="20" height="10" viewBox="0 0 20 10"><line x1="0" y1="5" x2="20" y2="5" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="7" y="2" width="6" height="6" fill="#fff" stroke="#000" stroke-width="1.2"/></svg>
      <span>physics and space science</span>
    </div>
    <div class="flex items-center gap-1.5">
      <svg width="20" height="10" viewBox="0 0 20 10"><line x1="0" y1="5" x2="20" y2="5" stroke="#000" stroke-width="1.5" stroke-dasharray="2,2"/><circle cx="10" cy="5" r="3" fill="#fff" stroke="#000" stroke-width="1.2"/></svg>
      <span>medicine and health</span>
    </div>
    <div class="flex items-center gap-1.5">
      <svg width="20" height="10" viewBox="0 0 20 10"><line x1="0" y1="5" x2="20" y2="5" stroke="#000" stroke-width="1.5"/><polygon points="10,1 14,5 10,9 6,5" fill="#fff" stroke="#000" stroke-width="1.2"/></svg>
      <span>animal science</span>
    </div>
  </div>
</div>`;
}

// ==========================================
// 7. RW MODULE 2 - QUESTION 14 (Modeled Radial Growth of Sugar Maple Trees)
// ==========================================
export function makeRW2Q14Svg() {
  const padL = 45, padR = 20, padT = 20, padB = 45;
  const width = 310, height = 230;
  const toY = val => (height - padB) - (val / 0.25) * (height - padB - padT);

  let grid = '';
  for (let val = 0; val <= 0.25; val += 0.05) {
    const y = toY(val);
    grid += `        <line x1="${padL}" y1="${y}" x2="${width - padR}" y2="${y}" stroke="#e2e8f0" stroke-width="0.8"/>\n`;
  }

  let labelsY = '';
  for (let val = 0; val <= 0.25; val += 0.05) {
    labelsY += `        <text x="${padL - 5}" y="${toY(val) + 3.5}" font-size="9" text-anchor="end" fill="#000">${val.toFixed(2)}</text>\n`;
  }

  // Categories: Current, Moderate, Extreme
  const catCenters = [
    { name: 'current', cx: padL + 45, withN: 0.21, withoutN: 0.16 },
    { name: 'moderate change', cx: padL + 125, withN: 0.185, withoutN: 0.15 },
    { name: 'extreme change', cx: padL + 205, withN: 0.06, withoutN: 0.04 }
  ];

  const barW = 20;
  let bars = '';
  let labelsX = '';

  catCenters.forEach(cat => {
    const xWith = cat.cx - barW;
    const xWithout = cat.cx;
    const yWith = toY(cat.withN);
    const yWithout = toY(cat.withoutN);
    const hWith = toY(0) - yWith;
    const hWithout = toY(0) - yWithout;

    bars += `        <!-- ${cat.name} with nitrogen -->
        <rect x="${xWith}" y="${yWith}" width="${barW}" height="${hWith}" fill="#e2e8f0" stroke="#000" stroke-width="1.2"/>
        <!-- ${cat.name} without nitrogen -->
        <rect x="${xWithout}" y="${yWithout}" width="${barW}" height="${hWithout}" fill="#475569" stroke="#000" stroke-width="1.2"/>\n`;

    labelsX += `        <text x="${cat.cx}" y="${toY(0) + 14}" font-size="9" text-anchor="middle" fill="#000">${cat.name}</text>\n`;
  });

  return `<div class="my-4 flex flex-col items-center font-sans">
  <div class="text-center font-bold text-xs md:text-sm mb-2">
    Modeled Radial Growth of Sugar Maple Trees
  </div>
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 320 240" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm">
      <g stroke="#e2e8f0" stroke-width="0.8">
${grid}      </g>
      <line x1="${padL}" y1="${toY(0)}" x2="${width - padR}" y2="${toY(0)}" stroke="#000" stroke-width="1.2"/>
      <line x1="${padL}" y1="${toY(0.25)}" x2="${padL}" y2="${toY(0)}" stroke="#000" stroke-width="1.2"/>
      
      <text x="${(padL + width - padR) / 2}" y="${toY(0) + 30}" font-size="9.5" text-anchor="middle" fill="#000">Climate scenario</text>
      <text transform="rotate(-90)" x="${-(toY(0) + toY(0.25)) / 2}" y="12" font-size="9" text-anchor="middle" fill="#000">Radial growth (cm/yr)</text>
      
      <g font-size="9" fill="#000">
${labelsY}${labelsX}      </g>
      
      ${bars}
    </svg>
  </div>
  <!-- Legend -->
  <div class="flex items-center justify-center gap-6 mt-2 text-xs">
    <div class="flex items-center gap-1.5">
      <div class="w-4 h-4 bg-slate-200 border border-black inline-block"></div>
      <span>with nitrogen</span>
    </div>
    <div class="flex items-center gap-1.5">
      <div class="w-4 h-4 bg-slate-600 border border-black inline-block"></div>
      <span>without nitrogen</span>
    </div>
  </div>
</div>`;
}
