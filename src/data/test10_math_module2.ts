import { Question } from '../types';

export const TEST2_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 294,
    type: "Math",
    module: 2,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Unit Conversion Speed",
    questionText: `<p class="mb-3">An object’s speed is 64 yards per second. What is the object’s speed, in feet per second?</p>`,
    options: [
      { id: "A", text: "61" },
      { id: "B", text: "67" },
      { id: "C", text: "94" },
      { id: "D", text: "192" }
    ],
    correctAnswer: "D",
    explanation: "\\(64\\text{ yards/sec} \\times 3\\text{ feet/yard} = 192\\text{ feet/sec}\\)."
  },
  {
    id: 295,
    type: "Math",
    module: 2,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Scatterplot Line of Best Fit",
    passageHtml: `<p class="mb-4 text-black font-serif leading-relaxed text-[15px] md:text-[16px]">The scatterplot shows the relationship between two variables, \\(x\\) and \\(y\\). A line of best fit is also shown.</p>
    <div class="my-4 flex flex-col items-center justify-center">
      <svg width="270" height="260" viewBox="0 0 270 260" class="font-serif bg-white select-none">
        <!-- Solid Grid lines -->
        <!-- Horizontal grid lines from y=20 down to y=2 (step 18px) extending from x=48 to x=208 -->
        <line x1="48" y1="36" x2="208" y2="36" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="54" x2="208" y2="54" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="72" x2="208" y2="72" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="90" x2="208" y2="90" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="108" x2="208" y2="108" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="126" x2="208" y2="126" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="144" x2="208" y2="144" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="162" x2="208" y2="162" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="180" x2="208" y2="180" stroke="#000000" stroke-width="0.8" />
        <line x1="48" y1="198" x2="208" y2="198" stroke="#000000" stroke-width="0.8" />

        <!-- Vertical grid lines at x=2, 4, 6, 8, 10, 12, 14 extending from y=30 to y=216 -->
        <line x1="70" y1="30" x2="70" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="92" y1="30" x2="92" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="114" y1="30" x2="114" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="136" y1="30" x2="136" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="158" y1="30" x2="158" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="180" y1="30" x2="180" y2="216" stroke="#000000" stroke-width="0.8" />
        <line x1="202" y1="30" x2="202" y2="216" stroke="#000000" stroke-width="0.8" />

        <!-- Main X-Axis with Arrow -->
        <line x1="48" y1="216" x2="216" y2="216" stroke="#000000" stroke-width="1.8" />
        <polygon points="222,216 215,212.5 215,219.5" fill="#000000" />

        <!-- Main Y-Axis with Arrow -->
        <line x1="48" y1="216" x2="48" y2="22" stroke="#000000" stroke-width="1.8" />
        <polygon points="48,16 44.5,23 51.5,23" fill="#000000" />

        <!-- Axis Labels -->
        <text x="226" y="220" font-size="13" font-style="italic" fill="#000000">x</text>
        <text x="48" y="12" text-anchor="middle" font-size="13" font-style="italic" fill="#000000">y</text>
        <text x="43" y="222" font-size="12" font-style="italic" text-anchor="end" fill="#000000">O</text>

        <!-- Y Axis Ticks & Numbers -->
        <line x1="44" y1="198" x2="48" y2="198" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="202" text-anchor="end" font-size="11" fill="#000000">2</text>

        <line x1="44" y1="180" x2="48" y2="180" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="184" text-anchor="end" font-size="11" fill="#000000">4</text>

        <line x1="44" y1="162" x2="48" y2="162" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="166" text-anchor="end" font-size="11" fill="#000000">6</text>

        <line x1="44" y1="144" x2="48" y2="144" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="148" text-anchor="end" font-size="11" fill="#000000">8</text>

        <line x1="44" y1="126" x2="48" y2="126" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="130" text-anchor="end" font-size="11" fill="#000000">10</text>

        <line x1="44" y1="108" x2="48" y2="108" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="112" text-anchor="end" font-size="11" fill="#000000">12</text>

        <line x1="44" y1="90" x2="48" y2="90" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="94" text-anchor="end" font-size="11" fill="#000000">14</text>

        <line x1="44" y1="72" x2="48" y2="72" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="76" text-anchor="end" font-size="11" fill="#000000">16</text>

        <line x1="44" y1="54" x2="48" y2="54" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="58" text-anchor="end" font-size="11" fill="#000000">18</text>

        <line x1="44" y1="36" x2="48" y2="36" stroke="#000000" stroke-width="1.2" />
        <text x="41" y="40" text-anchor="end" font-size="11" fill="#000000">20</text>

        <!-- X Axis Ticks & Numbers -->
        <line x1="70" y1="216" x2="70" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="70" y="232" text-anchor="middle" font-size="11" fill="#000000">2</text>

        <line x1="92" y1="216" x2="92" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="92" y="232" text-anchor="middle" font-size="11" fill="#000000">4</text>

        <line x1="114" y1="216" x2="114" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="114" y="232" text-anchor="middle" font-size="11" fill="#000000">6</text>

        <line x1="136" y1="216" x2="136" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="136" y="232" text-anchor="middle" font-size="11" fill="#000000">8</text>

        <line x1="158" y1="216" x2="158" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="158" y="232" text-anchor="middle" font-size="11" fill="#000000">10</text>

        <line x1="180" y1="216" x2="180" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="180" y="232" text-anchor="middle" font-size="11" fill="#000000">12</text>

        <line x1="202" y1="216" x2="202" y2="220" stroke="#000000" stroke-width="1.2" />
        <text x="202" y="232" text-anchor="middle" font-size="11" fill="#000000">14</text>

        <!-- Line of Best Fit: y = x + 3.4 (from x=0, y=3.4 to x=14.3, y=17.7) -->
        <line x1="48" y1="185.4" x2="206" y2="56.5" stroke="#000000" stroke-width="2.4" />

        <!-- 6 Data Points (circles) -->
        <!-- Point (4, 6.2) -->
        <circle cx="92" cy="160.2" r="3.3" fill="#000000" />
        <!-- Point (6, 10.0) -->
        <circle cx="114" cy="126" r="3.3" fill="#000000" />
        <!-- Point (8, 11.0) -->
        <circle cx="136" cy="117" r="3.3" fill="#000000" />
        <!-- Point (10, 13.6) -->
        <circle cx="158" cy="93.6" r="3.3" fill="#000000" />
        <!-- Point (12, 15.0) -->
        <circle cx="180" cy="81" r="3.3" fill="#000000" />
        <!-- Point (14, 16.0) -->
        <circle cx="202" cy="72" r="3.3" fill="#000000" />
      </svg>
    </div>`,
    questionText: "Which of the following equations best represents the line of best fit shown?",
    options: [
      { id: "A", text: "\\(y = x + 3.4\\)" },
      { id: "B", text: "\\(y = x - 3.4\\)" },
      { id: "C", text: "\\(y = -x + 3.4\\)" },
      { id: "D", text: "\\(y = -x - 3.4\\)" }
    ],
    correctAnswer: "A",
    explanation: "The line of best fit has a positive y-intercept (at approximately 3.4) and a positive slope of 1 (rising from \\(y \\approx 3.4\\) at \\(x = 0\\) to \\(y \\approx 17.4\\) at \\(x = 14\\)). Therefore, \\(y = x + 3.4\\) best represents the line of best fit."
  },
  {
    id: 296,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Linear Graph Values Table",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="320" height="290" viewBox="0 0 320 290" class="font-serif bg-white select-none">
        <!-- Grid lines (16 columns x from -8 to 8, 16 rows y from -6 to 10) -->
        <!-- Horizontal Grid Lines every 14px from y=10 (28px) to y=-6 (252px) -->
        <line x1="45" y1="28" x2="275" y2="28" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="42" x2="275" y2="42" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="56" x2="275" y2="56" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="70" x2="275" y2="70" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="84" x2="275" y2="84" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="98" x2="275" y2="98" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="112" x2="275" y2="112" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="126" x2="275" y2="126" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="140" x2="275" y2="140" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="154" x2="275" y2="154" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="182" x2="275" y2="182" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="196" x2="275" y2="196" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="210" x2="275" y2="210" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="224" x2="275" y2="224" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="238" x2="275" y2="238" stroke="#000000" stroke-width="0.75" />
        <line x1="45" y1="252" x2="275" y2="252" stroke="#000000" stroke-width="0.75" />

        <!-- Vertical Grid Lines every 14px from x=-8 (48px) to x=8 (272px) -->
        <line x1="48" y1="25" x2="48" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="62" y1="25" x2="62" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="76" y1="25" x2="76" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="90" y1="25" x2="90" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="104" y1="25" x2="104" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="118" y1="25" x2="118" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="132" y1="25" x2="132" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="146" y1="25" x2="146" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="174" y1="25" x2="174" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="188" y1="25" x2="188" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="202" y1="25" x2="202" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="216" y1="25" x2="216" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="230" y1="25" x2="230" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="244" y1="25" x2="244" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="258" y1="25" x2="258" y2="255" stroke="#000000" stroke-width="0.75" />
        <line x1="272" y1="25" x2="272" y2="255" stroke="#000000" stroke-width="0.75" />

        <!-- Main X-Axis (y=168) with Arrow -->
        <line x1="38" y1="168" x2="284" y2="168" stroke="#000000" stroke-width="1.8" />
        <polygon points="289,168 282,164.5 282,171.5" fill="#000000" />

        <!-- Main Y-Axis (x=160) with Arrow -->
        <line x1="160" y1="262" x2="160" y2="18" stroke="#000000" stroke-width="1.8" />
        <polygon points="160,12 156.5,19 163.5,19" fill="#000000" />

        <!-- Axis Labels -->
        <text x="293" y="172" font-size="13" font-style="italic" fill="#000000">x</text>
        <text x="160" y="8" text-anchor="middle" font-size="13" font-style="italic" fill="#000000">y</text>
        <text x="156" y="179" font-size="11" font-style="italic" text-anchor="end" fill="#000000">O</text>

        <!-- Y Axis Ticks & Numbers -->
        <line x1="156" y1="28" x2="160" y2="28" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="32" text-anchor="end" font-size="11" fill="#000000">10</text>

        <line x1="156" y1="56" x2="160" y2="56" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="60" text-anchor="end" font-size="11" fill="#000000">8</text>

        <line x1="156" y1="84" x2="160" y2="84" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="88" text-anchor="end" font-size="11" fill="#000000">6</text>

        <line x1="156" y1="112" x2="160" y2="112" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="116" text-anchor="end" font-size="11" fill="#000000">4</text>

        <line x1="156" y1="140" x2="160" y2="140" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="144" text-anchor="end" font-size="11" fill="#000000">2</text>

        <line x1="156" y1="196" x2="160" y2="196" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="200" text-anchor="end" font-size="11" fill="#000000">–2</text>

        <line x1="156" y1="224" x2="160" y2="224" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="228" text-anchor="end" font-size="11" fill="#000000">–4</text>

        <line x1="156" y1="252" x2="160" y2="252" stroke="#000000" stroke-width="1.2" />
        <text x="154" y="256" text-anchor="end" font-size="11" fill="#000000">–6</text>

        <!-- X Axis Ticks & Numbers -->
        <line x1="48" y1="168" x2="48" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="183" text-anchor="middle" font-size="11" fill="#000000">–8</text>

        <line x1="76" y1="168" x2="76" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="76" y="183" text-anchor="middle" font-size="11" fill="#000000">–6</text>

        <line x1="104" y1="168" x2="104" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="104" y="183" text-anchor="middle" font-size="11" fill="#000000">–4</text>

        <line x1="132" y1="168" x2="132" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="132" y="183" text-anchor="middle" font-size="11" fill="#000000">–2</text>

        <line x1="188" y1="168" x2="188" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="188" y="183" text-anchor="middle" font-size="11" fill="#000000">2</text>

        <line x1="216" y1="168" x2="216" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="216" y="183" text-anchor="middle" font-size="11" fill="#000000">4</text>

        <line x1="244" y1="168" x2="244" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="244" y="183" text-anchor="middle" font-size="11" fill="#000000">6</text>

        <line x1="272" y1="168" x2="272" y2="172" stroke="#000000" stroke-width="1.2" />
        <text x="272" y="183" text-anchor="middle" font-size="11" fill="#000000">8</text>

        <!-- Line of Graph y = 2x - 5 from (x=-0.75, y=-6.5) to (x=7.75, y=10.5) -->
        <line x1="149.5" y1="259" x2="268.5" y2="21" stroke="#000000" stroke-width="2.5" />

        <!-- 3 Data Points: (0, -5), (1, -3), (2, -1) -->
        <circle cx="160" cy="238" r="3.6" fill="#000000" />
        <circle cx="174" cy="210" r="3.6" fill="#000000" />
        <circle cx="188" cy="182" r="3.6" fill="#000000" />
      </svg>
    </div>`,
    questionText: "The graph shows the linear relationship between \\(x\\) and \\(y\\). Which table gives three values of \\(x\\) and their corresponding values of \\(y\\) for this relationship?",
    options: [
      { id: "A", text: `<div class="inline-block border border-black font-serif text-black my-1"><table class="min-w-[95px] text-center border-collapse"><thead><tr class="border-b border-black"><th class="px-4 py-1 border-r border-black font-normal italic">x</th><th class="px-4 py-1 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">0</td><td class="px-4 py-1">0</td></tr><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">1</td><td class="px-4 py-1">–7</td></tr><tr><td class="px-4 py-1 border-r border-black">2</td><td class="px-4 py-1">–9</td></tr></tbody></table></div>` },
      { id: "B", text: `<div class="inline-block border border-black font-serif text-black my-1"><table class="min-w-[95px] text-center border-collapse"><thead><tr class="border-b border-black"><th class="px-4 py-1 border-r border-black font-normal italic">x</th><th class="px-4 py-1 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">0</td><td class="px-4 py-1">0</td></tr><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">1</td><td class="px-4 py-1">–3</td></tr><tr><td class="px-4 py-1 border-r border-black">2</td><td class="px-4 py-1">–1</td></tr></tbody></table></div>` },
      { id: "C", text: `<div class="inline-block border border-black font-serif text-black my-1"><table class="min-w-[95px] text-center border-collapse"><thead><tr class="border-b border-black"><th class="px-4 py-1 border-r border-black font-normal italic">x</th><th class="px-4 py-1 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">0</td><td class="px-4 py-1">–5</td></tr><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">1</td><td class="px-4 py-1">–7</td></tr><tr><td class="px-4 py-1 border-r border-black">2</td><td class="px-4 py-1">–9</td></tr></tbody></table></div>` },
      { id: "D", text: `<div class="inline-block border border-black font-serif text-black my-1"><table class="min-w-[95px] text-center border-collapse"><thead><tr class="border-b border-black"><th class="px-4 py-1 border-r border-black font-normal italic">x</th><th class="px-4 py-1 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">0</td><td class="px-4 py-1">–5</td></tr><tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">1</td><td class="px-4 py-1">–3</td></tr><tr><td class="px-4 py-1 border-r border-black">2</td><td class="px-4 py-1">–1</td></tr></tbody></table></div>` }
    ],
    correctAnswer: "D",
    explanation: "From the graph, when \\(x = 0\\), \\(y = -5\\); when \\(x = 1\\), \\(y = -3\\); and when \\(x = 2\\), \\(y = -1\\). The table in option D contains exactly these three pairs of coordinates \\((0, -5)\\), \\((1, -3)\\), and \\((2, -1)\\)."
  },
  {
    id: 297,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    passageTitle: "Rectangle Perimeter Calculation",
    questionText: `<p class="mb-3">What is the perimeter, in inches, of a rectangle with a length of 4 inches and a width of 9 inches?</p>`,
    options: [
      { id: "A", text: "13" },
      { id: "B", text: "17" },
      { id: "C", text: "22" },
      { id: "D", text: "26" }
    ],
    correctAnswer: "D",
    explanation: "\(\\text{Perimeter} = 2(\\text{length} + \\text{width}) = 2(4 + 9) = 2(13) = 26\) inches."
  },
  {
    id: 298,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Rearranging Variable Equation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(7m = 2(n + p)\\)
    </div>
    <p class="mb-3">The given equation relates the positive numbers \\(m, n,\\) and \\(p\\). Which equation correctly gives \\(m\\) in terms of \\(n\\) and \\(p\\)?</p>`,
    options: [
      { id: "A", text: "\\(m = \\frac{2(n + p)}{7}\\)" },
      { id: "B", text: "\\(m = 2(n + p)\\)" },
      { id: "C", text: "\\(m = 2(n + p) - 7\\)" },
      { id: "D", text: "\\(m = 2 - n - p - 7\\)" }
    ],
    correctAnswer: "A",
    explanation: "Divide both sides by 7: \\(m = \\frac{2(n + p)}{7}\\)."
  },
  {
    id: 299,
    type: "Math",
    module: 2,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Finding Data Set Median",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      73, 74, 75, 77, 79, 82, 84, 85, 91
    </div><p class="mt-3">What is the median of the data shown?</p>`,
    options: [],
    correctAnswer: "79",
    explanation: "There are 9 ordered values. The median is the 5th value, which is 79."
  },
  {
    id: 300,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Evaluating Linear Function Input",
    questionText: "The function \\(f\\) is defined by \\(f(x) = 4x\\). For what value of \\(x\\) does \\(f(x) = 8\\) ?",
    options: [],
    correctAnswer: "2",
    explanation: "\\(4x = 8 \\implies x = 2\\)."
  },
  {
    id: 301,
    type: "Math",
    module: 2,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Percentage of Paper Clips",
    questionText: "Of 300,000 paper clips, 234,000 are size large. What percentage of the paper clips are size large?",
    options: [
      { id: "A", text: "22%" },
      { id: "B", text: "33%" },
      { id: "C", text: "66%" },
      { id: "D", text: "78%" }
    ],
    correctAnswer: "D",
    explanation: "\\((234{,}000 / 300{,}000) \\times 100\\% = 0.78 \\times 100\\% = 78\\%\\)."
  },
  {
    id: 302,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Tree Growth Linear Model Interpretation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(f(x) = 8x + 4\\)
    </div>
    <p class="mb-3">The function \\(f\\) gives the estimated height, in feet, of a willow tree \\(x\\) years after its height was first measured. Which statement is the best interpretation of 4 in this context?</p>`,
    options: [
      { id: "A", text: "The tree will be measured each year for 4 years." },
      { id: "B", text: "The tree is estimated to grow to a maximum height of 4 feet." },
      { id: "C", text: "The estimated height of the tree increased by 4 feet each year." },
      { id: "D", text: "The estimated height of the tree was 4 feet when it was first measured." }
    ],
    correctAnswer: "D",
    explanation: "4 is the \\(y\\)-intercept (value when \\(x=0\\)), representing the initial height of the tree when first measured."
  },
  {
    id: 303,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "System of Non-Linear Equations",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(y = 76\\)<br />
      \\(y = x^2 - 5\\)
    </div>
    <p class="mb-3">The graphs of the given equations in the \\(xy\\)-plane intersect at the point \\((x, y)\\). What is a possible value of \\(x\\) ?</p>`,
    options: [
      { id: "A", text: "\\(-\\frac{76}{5}\\)" },
      { id: "B", text: "-9" },
      { id: "C", text: "5" },
      { id: "D", text: "76" }
    ],
    correctAnswer: "B",
    explanation: "Set \\(x^2 - 5 = 76 \\implies x^2 = 81 \\implies x = 9\\) or \\(x = -9\\)."
  },
  {
    id: 304,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    passageTitle: "Equilateral Triangle Scale Factor",
    questionText: "Each side of equilateral triangle \\(S\\) is multiplied by a scale factor of \\(k\\) to create equilateral triangle \\(T\\). The length of each side of triangle \\(T\\) is greater than the length of each side of triangle \\(S\\). Which of the following could be the value of \\(k\\) ?",
    options: [
      { id: "A", text: "\\(\\frac{29}{28}\\)" },
      { id: "B", text: "1" },
      { id: "C", text: "\\(\\frac{28}{29}\\)" },
      { id: "D", text: "0" }
    ],
    correctAnswer: "A",
    explanation: "For triangle \\(T\\)'s side lengths to be strictly greater than triangle \\(S\\)'s, the scale factor \\(k\\) must be greater than 1. \\(\\frac{29}{28} > 1\\)."
  },
  {
    id: 305,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Identity Linear Equation Solutions",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(66x = 66x\\)
    </div><p class="mt-3">How many solutions does the given equation have?</p>`,
    options: [
      { id: "A", text: "Exactly one" },
      { id: "B", text: "Exactly two" },
      { id: "C", text: "Infinitely many" },
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "C",
    explanation: "The equation \\(66x = 66x\\) is an identity true for all real numbers \\(x\\), so it has infinitely many solutions."
  },
  {
    id: 306,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Party Hats and Cupcakes Word Problem",
    questionText: "Vivian bought party hats and cupcakes for $71. Each package of party hats cost $3, and each cupcake cost $1. If Vivian bought 10 packages of party hats, how many cupcakes did she buy?",
    options: [],
    correctAnswer: "41",
    explanation: "Cost of party hats = \\(10 \\times 3 = \\$30\\). Money remaining for cupcakes = \\(\\$71 - \\$30 = \\$41\\). At $1 each, she bought 41 cupcakes."
  },
  {
    id: 307,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Exponential Function Value Calculation",
    questionText: "The exponential function \\(g\\) is defined by \\(g(x) = 19 \\cdot a^x\\), where \\(a\\) is a positive constant. If \\(g(3) = 2{,}375\\), what is the value of \\(g(4)\\) ?",
    options: [],
    correctAnswer: "11875",
    explanation: "\\(19 \\cdot a^3 = 2375 \\implies a^3 = 125 \\implies a = 5\\). Then \\(g(4) = 19 \\cdot 5^4 = 19 \\cdot 625 = 11{,}875\\)."
  },
  {
    id: 308,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    passageTitle: "Right Triangle Cofunction Identity",
    questionText: "In right triangle \\(RST\\), the sum of the measures of angle \\(R\\) and angle \\(S\\) is 90 degrees. The value of \\(\\sin(R)\\) is \\(\\frac{\\sqrt{15}}{4}\\). What is the value of \\(\\cos(S)\\) ?",
    options: [
      { id: "A", text: "\\(\\frac{\\sqrt{15}}{15}\\)" },
      { id: "B", text: "\\(\\frac{\\sqrt{15}}{4}\\)" },
      { id: "C", text: "\\(\\frac{4\\sqrt{15}}{15}\\)" },
      { id: "D", text: "\\(\\sqrt{15}\\)" }
    ],
    correctAnswer: "B",
    explanation: "For complementary angles \\(R + S = 90^\\circ\\), \\(\\cos(S) = \\sin(R) = \\frac{\\sqrt{15}}{4}\\)."
  },
  {
    id: 309,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Stock Purchases Linear Graph Equation",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="315" height="195" viewBox="0 0 315 195" class="font-serif bg-white select-none">
        <!-- Horizontal Grid lines (y = 5 to 50 every 5 units / 11px) extending from x=55 to x=278 -->
        <line x1="55" y1="35" x2="278" y2="35" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="46" x2="278" y2="46" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="57" x2="278" y2="57" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="68" x2="278" y2="68" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="79" x2="278" y2="79" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="90" x2="278" y2="90" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="101" x2="278" y2="101" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="112" x2="278" y2="112" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="123" x2="278" y2="123" stroke="#000000" stroke-width="0.75" />
        <line x1="55" y1="134" x2="278" y2="134" stroke="#000000" stroke-width="0.75" />

        <!-- Vertical Grid lines (x = 5 to 100 every 5 units / 11px) extending from y=32 to y=145 -->
        <line x1="66" y1="32" x2="66" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="77" y1="32" x2="77" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="88" y1="32" x2="88" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="99" y1="32" x2="99" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="110" y1="32" x2="110" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="121" y1="32" x2="121" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="132" y1="32" x2="132" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="143" y1="32" x2="143" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="154" y1="32" x2="154" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="165" y1="32" x2="165" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="176" y1="32" x2="176" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="187" y1="32" x2="187" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="198" y1="32" x2="198" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="209" y1="32" x2="209" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="220" y1="32" x2="220" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="231" y1="32" x2="231" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="242" y1="32" x2="242" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="253" y1="32" x2="253" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="264" y1="32" x2="264" y2="145" stroke="#000000" stroke-width="0.75" />
        <line x1="275" y1="32" x2="275" y2="145" stroke="#000000" stroke-width="0.75" />

        <!-- Main X-Axis with Arrow -->
        <line x1="55" y1="145" x2="286" y2="145" stroke="#000000" stroke-width="1.8" />
        <polygon points="291,145 284,141.5 284,148.5" fill="#000000" />

        <!-- Main Y-Axis with Arrow -->
        <line x1="55" y1="145" x2="55" y2="22" stroke="#000000" stroke-width="1.8" />
        <polygon points="55,16 51.5,23 58.5,23" fill="#000000" />

        <!-- Axis Labels -->
        <text x="295" y="149" font-size="13" font-style="italic" fill="#000000">x</text>
        <text x="55" y="10" text-anchor="middle" font-size="13" font-style="italic" fill="#000000">y</text>
        <text x="50" y="151" font-size="11" font-style="italic" text-anchor="end" fill="#000000">O</text>

        <!-- Y Axis Ticks & Numbers -->
        <line x1="51" y1="123" x2="55" y2="123" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="127" text-anchor="end" font-size="10" fill="#000000">10</text>

        <line x1="51" y1="101" x2="55" y2="101" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="105" text-anchor="end" font-size="10" fill="#000000">20</text>

        <line x1="51" y1="79" x2="55" y2="79" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="83" text-anchor="end" font-size="10" fill="#000000">30</text>

        <line x1="51" y1="57" x2="55" y2="57" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="61" text-anchor="end" font-size="10" fill="#000000">40</text>

        <line x1="51" y1="35" x2="55" y2="35" stroke="#000000" stroke-width="1.2" />
        <text x="48" y="39" text-anchor="end" font-size="10" fill="#000000">50</text>

        <!-- X Axis Ticks & Numbers -->
        <line x1="77" y1="145" x2="77" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="77" y="159" text-anchor="middle" font-size="10" fill="#000000">10</text>

        <line x1="99" y1="145" x2="99" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="99" y="159" text-anchor="middle" font-size="10" fill="#000000">20</text>

        <line x1="121" y1="145" x2="121" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="121" y="159" text-anchor="middle" font-size="10" fill="#000000">30</text>

        <line x1="143" y1="145" x2="143" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="143" y="159" text-anchor="middle" font-size="10" fill="#000000">40</text>

        <line x1="165" y1="145" x2="165" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="165" y="159" text-anchor="middle" font-size="10" fill="#000000">50</text>

        <line x1="187" y1="145" x2="187" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="187" y="159" text-anchor="middle" font-size="10" fill="#000000">60</text>

        <line x1="209" y1="145" x2="209" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="209" y="159" text-anchor="middle" font-size="10" fill="#000000">70</text>

        <line x1="231" y1="145" x2="231" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="231" y="159" text-anchor="middle" font-size="10" fill="#000000">80</text>

        <line x1="253" y1="145" x2="253" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="253" y="159" text-anchor="middle" font-size="10" fill="#000000">90</text>

        <line x1="275" y1="145" x2="275" y2="149" stroke="#000000" stroke-width="1.2" />
        <text x="275" y="159" text-anchor="middle" font-size="10" fill="#000000">100</text>

        <!-- Graph Line connecting (0, 40) at (55, 57) to (60, 0) at (187, 145) -->
        <line x1="55" y1="57" x2="187" y2="145" stroke="#000000" stroke-width="2.3" />

        <!-- Axis Titles -->
        <text x="18" y="90" text-anchor="middle" font-size="11" fill="#000000" transform="rotate(-90 18 90)">Company B</text>
        <text x="165" y="180" text-anchor="middle" font-size="11" fill="#000000">Company A</text>
      </svg>
    </div>`,
    questionText: "The graph shows the relationship between the number of shares of stock from Company A, \\(x\\), and the number of shares of stock from Company B, \\(y\\), that Simone can purchase. Which equation could represent this relationship?",
    options: [
      { id: "A", text: "\\(y = 8x + 12\\)" },
      { id: "B", text: "\\(8x + 12y = 480\\)" },
      { id: "C", text: "\\(y = 12x + 8\\)" },
      { id: "D", text: "\\(12x + 8y = 480\\)" }
    ],
    correctAnswer: "B",
    explanation: "The graph shows a line with a \\(y\\)-intercept at \\((0, 40)\\) and an \\(x\\)-intercept at \\((60, 0)\\). Testing \\(8x + 12y = 480\\): when \\(x = 0\\), \\(12y = 480 \\implies y = 40\\); when \\(y = 0\\), \\(8x = 480 \\implies x = 60\\). This matches both intercepts from the graph."
  },
  {
    id: 310,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Simplifying Algebraic Fraction",
    questionText: "Which expression is equivalent to \\(\\frac{8x(x - 7) - 3(x - 7)}{2x - 14}\\), where \\(x > 7\\)?",
    options: [
      { id: "A", text: "\\(\\frac{x - 7}{5}\\)" },
      { id: "B", text: "\\(\\frac{8x - 3}{2}\\)" },
      { id: "C", text: "\\(\\frac{8x^2 - 3x - 14}{2x - 14}\\)" },
      { id: "D", text: "\\(\\frac{8x^2 - 3x - 77}{2x - 14}\\)" }
    ],
    correctAnswer: "B",
    explanation: "Factor numerator: \\((8x - 3)(x - 7)\\). Factor denominator: \\(2(x - 7)\\). Cancel \\((x - 7)\\): \\(\\frac{8x - 3}{2}\\)."
  },
  {
    id: 311,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Exponential Y-Intercept",
    questionText: "The function \\(f\\) is defined by \\(f(x) = (-8)(2)^x + 22\\). What is the \\(y\\)-intercept of the graph of \\(y = f(x)\\) in the \\(xy\\)-plane?",
    options: [
      { id: "A", text: "(0, 14)" },
      { id: "B", text: "(0, 2)" },
      { id: "C", text: "(0, 22)" },
      { id: "D", text: "(0, -8)" }
    ],
    correctAnswer: "A",
    explanation: "Evaluate at \\(x=0\\): \\(f(0) = (-8)(2)^0 + 22 = -8(1) + 22 = 14\\). The \\(y\\)-intercept is \\((0, 14)\\)."
  },
  {
    id: 312,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Vegetable Broth Word Problem",
    questionText: "Keenan made 32 cups of vegetable broth. Keenan then filled \\(x\\) small jars and \\(y\\) large jars with all the vegetable broth he made. The equation \\(3x + 5y = 32\\) represents this situation. Which is the best interpretation of \\(5y\\) in this context?",
    options: [
      { id: "A", text: "The number of large jars Keenan filled" },
      { id: "B", text: "The number of small jars Keenan filled" },
      { id: "C", text: "The total number of cups of vegetable broth in the large jars" },
      { id: "D", text: "The total number of cups of vegetable broth in the small jars" }
    ],
    correctAnswer: "C",
    explanation: "Since 5 is the number of cups per large jar and \\(y\\) is the number of large jars, \\(5y\\) represents the total cups of broth in all large jars."
  },
  {
    id: 313,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    passageTitle: "Circle Diameter Radius",
    questionText: "A circle in the \\(xy\\)-plane has a diameter with endpoints \\((2, 4)\\) and \\((2, 14)\\). An equation of this circle is \\((x - 2)^2 + (y - 9)^2 = r^2\\), where \\(r\\) is a positive constant. What is the value of \\(r\\) ?",
    options: [],
    correctAnswer: "5",
    explanation: "The diameter length is the distance between \\((2, 4)\\) and \\((2, 14)\\), which is \\(14 - 4 = 10\\). The radius \\(r\\) is half the diameter, so \\(r = 5\\)."
  },
  {
    id: 314,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Perpendicular Lines Slope",
    questionText: "Line \\(\\ell\\) is defined by \\(3y + 12x = 5\\). Line \\(n\\) is perpendicular to line \\(\\ell\\) in the \\(xy\\)-plane. What is the slope of line \\(n\\) ?",
    options: [],
    correctAnswer: "0.25; 1/4",
    explanation: "Rewrite line \\(\\ell\\): \\(3y = -12x + 5 \\implies y = -4x + 5/3\\). Slope of \\(\\ell\\) is \\(-4\\). A perpendicular line has negative reciprocal slope \\(1/4 = 0.25\\)."
  },
  {
    id: 315,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Absolute Value Sum of Solutions",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(|-5x + 13| = 73\\)
    </div><p class="mt-3">What is the sum of the solutions to the given equation?</p>`,
    options: [
      { id: "A", text: "\\(-\\frac{146}{5}\\)" },
      { id: "B", text: "-12" },
      { id: "C", text: "0" },
      { id: "D", text: "\\(\\frac{26}{5}\\)" }
    ],
    correctAnswer: "D",
    explanation: "Case 1: \\(-5x + 13 = 73 \\implies -5x = 60 \\implies x = -12\\). Case 2: \\(-5x + 13 = -73 \\implies -5x = -86 \\implies x = 86/5\\). Sum \\(= -12 + 86/5 = (-60 + 86)/5 = 26/5\\)."
  },
  {
    id: 316,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Exponential Function Equivalent Forms",
    questionText: "For the exponential function \\(f\\), the value of \\(f(1)\\) is \\(k\\), where \\(k\\) is a constant. Which of the following equivalent forms of the function \\(f\\) shows the value of \\(k\\) as the coefficient or the base?",
    options: [
      { id: "A", text: "\\(f(x) = 50(1.6)^{x+1}\\)" },
      { id: "B", text: "\\(f(x) = 80(1.6)^x\\)" },
      { id: "C", text: "\\(f(x) = 128(1.6)^{x-1}\\)" },
      { id: "D", text: "\\(f(x) = 204.8(1.6)^{x-2}\\)" }
    ],
    correctAnswer: "C",
    explanation: "In \\(f(x) = 128(1.6)^{x-1}\\), at \\(x = 1\\), \\(f(1) = 128(1.6)^0 = 128\\), so \\(k = 128\\), which appears directly as the coefficient."
  },
  {
    id: 317,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Quadratic Equation Discriminant",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(-9x^2 + 30x + c = 0\\)
    </div>
    <p class="mb-3">In the given equation, \\(c\\) is a constant. The equation has exactly one solution. What is the value of \\(c\\) ?</p>`,
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "0" },
      { id: "C", text: "-25" },
      { id: "D", text: "-53" }
    ],
    correctAnswer: "C",
    explanation: "A quadratic has exactly 1 solution when discriminant \\(b^2 - 4ac = 0\\). \\(30^2 - 4(-9)(c) = 0 \\implies 900 + 36c = 0 \\implies c = -25\\)."
  },
  {
    id: 318,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Factoring Quadratic Polynomials",
    questionText: "Which of the following expressions has a factor of \\(x + 2b\\), where \\(b\\) is a positive integer constant?",
    options: [
      { id: "A", text: "\\(3x^2 + 7x + 14b\\)" },
      { id: "B", text: "\\(3x^2 + 28x + 14b\\)" },
      { id: "C", text: "\\(3x^2 + 42x + 14b\\)" },
      { id: "D", text: "\\(3x^2 + 49x + 14b\\)" }
    ],
    correctAnswer: "D",
    explanation: "If \\(x + 2b\\) is a factor, then substituting \\(x = -2b\\) yields 0. \\(3(-2b)^2 + 49(-2b) + 14b = 12b^2 - 98b + 14b = 12b^2 - 84b\\). Setting \\(12b(b - 7) = 0\\) yields integer \\(b = 7\\), so \\(3x^2 + 49x + 98 = (x + 14)(3x + 7)\\) where factor is \\(x + 2(7) = x + 14\\)."
  },
  {
    id: 319,
    type: "Math",
    module: 2,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Comparing Histograms Smallest Difference",
    passageHtml: `<div class="my-4 flex flex-col md:flex-row gap-6 items-center justify-center font-serif text-black select-none">
      <!-- Data Set A -->
      <div class="flex flex-col items-center">
        <div class="text-sm font-normal mb-1">Data Set A</div>
        <svg width="210" height="185" viewBox="0 0 210 185" class="bg-white">
          <!-- Horizontal Grid Lines every 1 unit from y=12 down to y=1 (every 9px from y=32 to y=131) -->
          <line x1="42" y1="32" x2="175" y2="32" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="41" x2="175" y2="41" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="50" x2="175" y2="50" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="59" x2="175" y2="59" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="68" x2="175" y2="68" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="77" x2="175" y2="77" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="86" x2="175" y2="86" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="95" x2="175" y2="95" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="104" x2="175" y2="104" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="113" x2="175" y2="113" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="122" x2="175" y2="122" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="131" x2="175" y2="131" stroke="#000000" stroke-width="0.75" />

          <!-- Bars for Data Set A: [20,30)=3, [30,40)=4, [40,50)=7, [50,60)=9 -->
          <rect x="66" y="113" width="24" height="27" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="90" y="104" width="24" height="36" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="114" y="77" width="24" height="63" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="138" y="59" width="24" height="81" fill="#bdbdbd" stroke="#000000" stroke-width="1" />

          <!-- Axes -->
          <line x1="42" y1="140" x2="180" y2="140" stroke="#000000" stroke-width="1.5" />
          <line x1="42" y1="140" x2="42" y2="28" stroke="#000000" stroke-width="1.5" />

          <!-- Y Ticks and Labels (0, 2, 4, 6, 8, 10, 12) -->
          <line x1="38" y1="140" x2="42" y2="140" stroke="#000000" stroke-width="1" />
          <text x="35" y="144" text-anchor="end" font-size="11" fill="#000000">0</text>

          <line x1="38" y1="122" x2="42" y2="122" stroke="#000000" stroke-width="1" />
          <text x="35" y="126" text-anchor="end" font-size="11" fill="#000000">2</text>

          <line x1="38" y1="104" x2="42" y2="104" stroke="#000000" stroke-width="1" />
          <text x="35" y="108" text-anchor="end" font-size="11" fill="#000000">4</text>

          <line x1="38" y1="86" x2="42" y2="86" stroke="#000000" stroke-width="1" />
          <text x="35" y="90" text-anchor="end" font-size="11" fill="#000000">6</text>

          <line x1="38" y1="68" x2="42" y2="68" stroke="#000000" stroke-width="1" />
          <text x="35" y="72" text-anchor="end" font-size="11" fill="#000000">8</text>

          <line x1="38" y1="50" x2="42" y2="50" stroke="#000000" stroke-width="1" />
          <text x="35" y="54" text-anchor="end" font-size="11" fill="#000000">10</text>

          <line x1="38" y1="32" x2="42" y2="32" stroke="#000000" stroke-width="1" />
          <text x="35" y="36" text-anchor="end" font-size="11" fill="#000000">12</text>

          <!-- X Ticks and Labels (10, 20, 30, 40, 50, 60) -->
          <line x1="42" y1="140" x2="42" y2="144" stroke="#000000" stroke-width="1" />
          <text x="42" y="155" text-anchor="middle" font-size="11" fill="#000000">10</text>

          <line x1="66" y1="140" x2="66" y2="144" stroke="#000000" stroke-width="1" />
          <text x="66" y="155" text-anchor="middle" font-size="11" fill="#000000">20</text>

          <line x1="90" y1="140" x2="90" y2="144" stroke="#000000" stroke-width="1" />
          <text x="90" y="155" text-anchor="middle" font-size="11" fill="#000000">30</text>

          <line x1="114" y1="140" x2="114" y2="144" stroke="#000000" stroke-width="1" />
          <text x="114" y="155" text-anchor="middle" font-size="11" fill="#000000">40</text>

          <line x1="138" y1="140" x2="138" y2="144" stroke="#000000" stroke-width="1" />
          <text x="138" y="155" text-anchor="middle" font-size="11" fill="#000000">50</text>

          <line x1="162" y1="140" x2="162" y2="144" stroke="#000000" stroke-width="1" />
          <text x="162" y="155" text-anchor="middle" font-size="11" fill="#000000">60</text>

          <!-- Axis Titles -->
          <text x="14" y="86" text-anchor="middle" font-size="12" fill="#000000" transform="rotate(-90 14 86)">Frequency</text>
          <text x="102" y="172" text-anchor="middle" font-size="12" fill="#000000">Integer</text>
        </svg>
      </div>

      <!-- Data Set B -->
      <div class="flex flex-col items-center">
        <div class="text-sm font-normal mb-1">Data Set B</div>
        <svg width="210" height="185" viewBox="0 0 210 185" class="bg-white">
          <!-- Horizontal Grid Lines every 1 unit from y=12 down to y=1 (every 9px from y=32 to y=131) -->
          <line x1="42" y1="32" x2="175" y2="32" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="41" x2="175" y2="41" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="50" x2="175" y2="50" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="59" x2="175" y2="59" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="68" x2="175" y2="68" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="77" x2="175" y2="77" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="86" x2="175" y2="86" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="95" x2="175" y2="95" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="104" x2="175" y2="104" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="113" x2="175" y2="113" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="122" x2="175" y2="122" stroke="#000000" stroke-width="0.75" />
          <line x1="42" y1="131" x2="175" y2="131" stroke="#000000" stroke-width="0.75" />

          <!-- Bars for Data Set B: [10,20)=3, [20,30)=4, [30,40)=7, [40,50)=9 -->
          <rect x="42" y="113" width="24" height="27" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="66" y="104" width="24" height="36" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="90" y="77" width="24" height="63" fill="#bdbdbd" stroke="#000000" stroke-width="1" />
          <rect x="114" y="59" width="24" height="81" fill="#bdbdbd" stroke="#000000" stroke-width="1" />

          <!-- Axes -->
          <line x1="42" y1="140" x2="180" y2="140" stroke="#000000" stroke-width="1.5" />
          <line x1="42" y1="140" x2="42" y2="28" stroke="#000000" stroke-width="1.5" />

          <!-- Y Ticks and Labels (0, 2, 4, 6, 8, 10, 12) -->
          <line x1="38" y1="140" x2="42" y2="140" stroke="#000000" stroke-width="1" />
          <text x="35" y="144" text-anchor="end" font-size="11" fill="#000000">0</text>

          <line x1="38" y1="122" x2="42" y2="122" stroke="#000000" stroke-width="1" />
          <text x="35" y="126" text-anchor="end" font-size="11" fill="#000000">2</text>

          <line x1="38" y1="104" x2="42" y2="104" stroke="#000000" stroke-width="1" />
          <text x="35" y="108" text-anchor="end" font-size="11" fill="#000000">4</text>

          <line x1="38" y1="86" x2="42" y2="86" stroke="#000000" stroke-width="1" />
          <text x="35" y="90" text-anchor="end" font-size="11" fill="#000000">6</text>

          <line x1="38" y1="68" x2="42" y2="68" stroke="#000000" stroke-width="1" />
          <text x="35" y="72" text-anchor="end" font-size="11" fill="#000000">8</text>

          <line x1="38" y1="50" x2="42" y2="50" stroke="#000000" stroke-width="1" />
          <text x="35" y="54" text-anchor="end" font-size="11" fill="#000000">10</text>

          <line x1="38" y1="32" x2="42" y2="32" stroke="#000000" stroke-width="1" />
          <text x="35" y="36" text-anchor="end" font-size="11" fill="#000000">12</text>

          <!-- X Ticks and Labels (10, 20, 30, 40, 50, 60) -->
          <line x1="42" y1="140" x2="42" y2="144" stroke="#000000" stroke-width="1" />
          <text x="42" y="155" text-anchor="middle" font-size="11" fill="#000000">10</text>

          <line x1="66" y1="140" x2="66" y2="144" stroke="#000000" stroke-width="1" />
          <text x="66" y="155" text-anchor="middle" font-size="11" fill="#000000">20</text>

          <line x1="90" y1="140" x2="90" y2="144" stroke="#000000" stroke-width="1" />
          <text x="90" y="155" text-anchor="middle" font-size="11" fill="#000000">30</text>

          <line x1="114" y1="140" x2="114" y2="144" stroke="#000000" stroke-width="1" />
          <text x="114" y="155" text-anchor="middle" font-size="11" fill="#000000">40</text>

          <line x1="138" y1="140" x2="138" y2="144" stroke="#000000" stroke-width="1" />
          <text x="138" y="155" text-anchor="middle" font-size="11" fill="#000000">50</text>

          <line x1="162" y1="140" x2="162" y2="144" stroke="#000000" stroke-width="1" />
          <text x="162" y="155" text-anchor="middle" font-size="11" fill="#000000">60</text>

          <!-- Axis Titles -->
          <text x="14" y="86" text-anchor="middle" font-size="12" fill="#000000" transform="rotate(-90 14 86)">Frequency</text>
          <text x="102" y="172" text-anchor="middle" font-size="12" fill="#000000">Integer</text>
        </svg>
      </div>
    </div>`,
    questionText: "Two data sets of 23 integers each are summarized in the histograms shown. For each of the histograms, the first interval represents the frequency of integers greater than or equal to 10, but less than 20. The second interval represents the frequency of integers greater than or equal to 20, but less than 30, and so on. What is the smallest possible difference between the mean of data set A and the mean of data set B?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "10" },
      { id: "D", text: "23" }
    ],
    correctAnswer: "B",
    explanation: "To find the smallest possible difference between the means, we minimize the mean of Data Set A and maximize the mean of Data Set B:\\n- In Data Set A, the minimum possible sum of the 23 integers is achieved by choosing the lowest integer in each interval: \\(3(20) + 4(30) + 7(40) + 9(50) = 60 + 120 + 280 + 450 = 910\\).\\n- In Data Set B, the maximum possible sum of the 23 integers is achieved by choosing the highest integer in each interval: \\(3(19) + 4(29) + 7(39) + 9(49) = 57 + 116 + 273 + 441 = 887\\).\\n- The minimum difference between the sums is \\(910 - 887 = 23\\).\\n- Therefore, the smallest possible difference between the means is \\(\\frac{23}{23} = 1\\)."
  },
  {
    id: 320,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    passageTitle: "Equilateral Triangle Height Calculation",
    questionText: `<p class="mb-3">The perimeter of an equilateral triangle is 624 centimeters. The height of this triangle is \\(k\\sqrt{3}\\) centimeters, where \\(k\\) is a constant. What is the value of \\(k\\)?</p>`,
    options: [],
    correctAnswer: "104",
    explanation: "Side length \\(s = 624 / 3 = 208\\) cm. In a 30-60-90 triangle, \\(\\text{height} = \\frac{s\\sqrt{3}}{2} = \\frac{208\\sqrt{3}}{2} = 104\\sqrt{3}\\). Thus \\(k = 104\\)."
  }
];
