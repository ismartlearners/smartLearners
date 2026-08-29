import { Question } from "../types";

function makeTest4M1Q1Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 260 250" class="w-full max-w-[260px] bg-white select-none">
      <!-- Gridlines spanning from tick mark on left (x=45) across to right (x=230) -->
      <!-- 50 -->
      <line x1="45" y1="40" x2="230" y2="40" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="43.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">50</text>

      <!-- 45 -->
      <line x1="45" y1="55" x2="230" y2="55" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="58.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">45</text>

      <!-- 40 -->
      <line x1="45" y1="70" x2="230" y2="70" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="73.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">40</text>

      <!-- 35 -->
      <line x1="45" y1="85" x2="230" y2="85" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="88.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">35</text>

      <!-- 30 -->
      <line x1="45" y1="100" x2="230" y2="100" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="103.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">30</text>

      <!-- 25 -->
      <line x1="45" y1="115" x2="230" y2="115" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="118.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">25</text>

      <!-- 20 -->
      <line x1="45" y1="130" x2="230" y2="130" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="133.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">20</text>

      <!-- 15 -->
      <line x1="45" y1="145" x2="230" y2="145" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="148.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">15</text>

      <!-- 10 -->
      <line x1="45" y1="160" x2="230" y2="160" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="163.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">10</text>

      <!-- 5 -->
      <line x1="45" y1="175" x2="230" y2="175" stroke="#777777" stroke-width="0.75" />
      <text x="40" y="178.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">5</text>

      <!-- 0 / Baseline -->
      <line x1="45" y1="190" x2="230" y2="190" stroke="#000000" stroke-width="1.2" />
      <text x="40" y="193.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">0</text>

      <!-- Y-Axis Vertical Line (starts slightly above 50 at y=25 and extends to y=193) -->
      <line x1="50" y1="25" x2="50" y2="193" stroke="#000000" stroke-width="1.2" />

      <!-- Bars (Fill: #b8bcc0, Stroke: #000000) -->
      <!-- Activity 1: 29 students (top = 103, height = 87) -->
      <rect x="58" y="103" width="22" height="87" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Activity 2: 31 students (top = 97, height = 93) -->
      <rect x="92" y="97" width="22" height="93" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Activity 3: 39 students (top = 73, height = 117) -->
      <rect x="126" y="73" width="22" height="117" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Activity 4: 43 students (top = 61, height = 129) -->
      <rect x="160" y="61" width="22" height="129" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Activity 5: 48 students (top = 46, height = 144) -->
      <rect x="194" y="46" width="22" height="144" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- X-axis Labels (1 to 5) -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000" text-anchor="middle">
        <text x="69" y="206">1</text>
        <text x="103" y="206">2</text>
        <text x="137" y="206">3</text>
        <text x="171" y="206">4</text>
        <text x="205" y="206">5</text>
      </g>

      <!-- X-axis Title -->
      <text x="137" y="226" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Activity</text>

      <!-- Y-axis Title (Rotated) -->
      <text x="-108" y="15" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Number of students</text>
    </svg>
  </div>`;
}

function makeTest4M1Q12Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 270 280" class="w-full max-w-[270px] bg-white select-none">
      <!-- Gridlines (Every 2 units) -->
      <!-- Horizontal gridlines: y = 16 to -16 (step 2) -->
      <g stroke="#777777" stroke-width="0.75">
        <line x1="58" y1="54" x2="222" y2="54" />   <!-- 16 -->
        <line x1="58" y1="66" x2="222" y2="66" />   <!-- 14 -->
        <line x1="58" y1="78" x2="222" y2="78" />   <!-- 12 -->
        <line x1="58" y1="90" x2="222" y2="90" />   <!-- 10 -->
        <line x1="58" y1="102" x2="222" y2="102" /> <!-- 8 -->
        <line x1="58" y1="114" x2="222" y2="114" /> <!-- 6 -->
        <line x1="58" y1="126" x2="222" y2="126" /> <!-- 4 -->
        <line x1="58" y1="138" x2="222" y2="138" /> <!-- 2 -->
        <!-- y = 0 is x-axis -->
        <line x1="58" y1="162" x2="222" y2="162" /> <!-- -2 -->
        <line x1="58" y1="174" x2="222" y2="174" /> <!-- -4 -->
        <line x1="58" y1="186" x2="222" y2="186" /> <!-- -6 -->
        <line x1="58" y1="198" x2="222" y2="198" /> <!-- -8 -->
        <line x1="58" y1="210" x2="222" y2="210" /> <!-- -10 -->
        <line x1="58" y1="222" x2="222" y2="222" /> <!-- -12 -->
        <line x1="58" y1="234" x2="222" y2="234" /> <!-- -14 -->
        <line x1="58" y1="246" x2="222" y2="246" /> <!-- -16 -->

        <!-- Vertical gridlines: x = -10 to 10 (step 2) -->
        <line x1="65" y1="48" x2="65" y2="252" />   <!-- -10 -->
        <line x1="80" y1="48" x2="80" y2="252" />   <!-- -8 -->
        <line x1="95" y1="48" x2="95" y2="252" />   <!-- -6 -->
        <line x1="110" y1="48" x2="110" y2="252" /> <!-- -4 -->
        <line x1="125" y1="48" x2="125" y2="252" /> <!-- -2 -->
        <!-- x = 0 is y-axis -->
        <line x1="155" y1="48" x2="155" y2="252" /> <!-- 2 -->
        <line x1="170" y1="48" x2="170" y2="252" /> <!-- 4 -->
        <line x1="185" y1="48" x2="185" y2="252" /> <!-- 6 -->
        <line x1="200" y1="48" x2="200" y2="252" /> <!-- 8 -->
        <line x1="215" y1="48" x2="215" y2="252" /> <!-- 10 -->
      </g>

      <!-- x-axis -->
      <line x1="54" y1="150" x2="228" y2="150" stroke="#000000" stroke-width="1.3" />
      <polygon points="227,147.5 233,150 227,152.5" fill="#000000" />
      <text x="238" y="153.5" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000">x</text>

      <!-- y-axis -->
      <line x1="140" y1="256" x2="140" y2="44" stroke="#000000" stroke-width="1.3" />
      <polygon points="137.5,45 140,39 142.5,45" fill="#000000" />
      <text x="140" y="33" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" text-anchor="middle" fill="#000000">y</text>

      <!-- The Line: y = -x - 8 -->
      <!-- Starts at (-10, 2) -> (65, 138), crosses (0, -8) -> (140, 198), (8, -16) -> (200, 246), ends at (8.7, -16.7) -> (205, 250) -->
      <line x1="65" y1="138" x2="205" y2="250" stroke="#000000" stroke-width="2.2" stroke-linecap="round" />

      <!-- Labels: Origin and Y-axis -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="9.5" fill="#000000" text-anchor="end">
        <text x="136" y="147.5" font-style="italic">O</text>
        <text x="136" y="57.5">16</text>
        <text x="136" y="69.5">14</text>
        <text x="136" y="81.5">12</text>
        <text x="136" y="93.5">10</text>
        <text x="136" y="105.5">8</text>
        <text x="136" y="117.5">6</text>
        <text x="136" y="129.5">4</text>
        <text x="136" y="141.5">2</text>
        <text x="136" y="165.5">-2</text>
        <text x="136" y="177.5">-4</text>
        <text x="136" y="189.5">-6</text>
        <text x="136" y="201.5">-8</text>
        <text x="136" y="213.5">-10</text>
        <text x="136" y="225.5">-12</text>
        <text x="136" y="237.5">-14</text>
        <text x="136" y="249.5">-16</text>
      </g>

      <!-- Labels: X-axis -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="9.5" fill="#000000" text-anchor="middle">
        <text x="65" y="161.5">-10</text>
        <text x="80" y="161.5">-8</text>
        <text x="95" y="161.5">-6</text>
        <text x="110" y="161.5">-4</text>
        <text x="125" y="161.5">-2</text>
        <text x="155" y="161.5">2</text>
        <text x="170" y="161.5">4</text>
        <text x="185" y="161.5">6</text>
        <text x="200" y="161.5">8</text>
        <text x="215" y="161.5">10</text>
      </g>
    </svg>
  </div>`;
}

export const TEST4_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 1301,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 1,
    domain: "Problem Solving and Data Analysis",
    skill: "Two-Variable Data: Models and Scatterplots",
    passageHtml: `<p class="mb-3">A group of students voted on five after-school activities. The bar graph shows the number of students who voted for each of the five activities.</p>${makeTest4M1Q1Svg()}<p class="mb-3">How many students chose activity 3?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "39" },
      { id: "C", text: "48" },
      { id: "D", text: "50" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. Looking at bar 3, its top aligns just below the line for 40 at 39 students."
  },
  {
    id: 1302,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 2,
    domain: "Problem Solving and Data Analysis",
    skill: "Percentages",
    passageHtml: `<p class="mb-3">What percentage of 300 is 75?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "25%" },
      { id: "B", text: "50%" },
      { id: "C", text: "75%" },
      { id: "D", text: "225%" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. 75 / 300 = 0.25, which corresponds to 25%."
  },
  {
    id: 1303,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 3,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">\\(\\frac{x^2}{25} = 36\\)</p><p class="mb-3">What is a solution to the given equation?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "30" },
      { id: "C", text: "450" },
      { id: "D", text: "900" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. Multiplying both sides by 25 yields \\(x^2 = 36 \\times 25 = 900\\). Taking the square root gives \\(x = \\pm 30\\). Thus, 30 is a solution."
  },
  {
    id: 1304,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 4,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">3 more than 8 times a number <i>x</i> is equal to 83. Which equation represents this situation?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "(3)(8)x = 83" },
      { id: "B", text: "8x = 83 + 3" },
      { id: "C", text: "3x + 8 = 83" },
      { id: "D", text: "8x + 3 = 83" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. \"8 times a number x\" is \\(8x\\), and \"3 more than\" that is \\(8x + 3\\). Setting this equal to 83 gives \\(8x + 3 = 83\\)."
  },
  {
    id: 1305,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 5,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<p class="mb-3">Hana deposited a fixed amount into her bank account each month. The function \\(f(t) = 100 + 25t\\) gives the amount, in dollars, in Hana’s bank account after <i>t</i> monthly deposits. What is the best interpretation of 25 in this context?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "With each monthly deposit, the amount in Hana’s bank account increased by $25." },
      { id: "B", text: "Before Hana made any monthly deposits, the amount in her bank account was $25." },
      { id: "C", text: "After 1 monthly deposit, the amount in Hana’s bank account was $25." },
      { id: "D", text: "Hana made a total of 25 monthly deposits." }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. The coefficient 25 is the rate of change per month <i>t</i>, meaning each monthly deposit increases the account balance by $25."
  },
  {
    id: 1306,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 6,
    domain: "Problem Solving and Data Analysis",
    skill: "Ratios, Rates, Proportional Relationships, and Units",
    passageHtml: `<p class="mb-3">A customer spent $27 to purchase oranges at $3 per pound. How many pounds of oranges did the customer purchase?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "9",
    explanation: "The correct answer is 9. Dividing total cost by cost per pound: \\(27 / 3 = 9\\) pounds."
  },
  {
    id: 1307,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 7,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">Nasir bought 9 storage bins that were each the same price. He used a coupon for $63 off the entire purchase. The cost for the entire purchase after using the coupon was $27. What was the original price, in dollars, for 1 storage bin?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "10",
    explanation: "The correct answer is 10. Let <i>p</i> be the original price per bin. \\(9p - 63 = 27 \\implies 9p = 90 \\implies p = 10\\)."
  },
  {
    id: 1308,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 8,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<div class="my-3 flex flex-col items-center"><table class="text-sm border border-black rounded"><thead class="bg-gray-100"><tr><th class="p-2 border-r border-b">x</th><th class="p-2 border-b">f(x)</th></tr></thead><tbody><tr class="border-b"><td class="p-2 border-r text-center">0</td><td class="p-2 text-center">29</td></tr><tr class="border-b"><td class="p-2 border-r text-center">1</td><td class="p-2 text-center">32</td></tr><tr><td class="p-2 border-r text-center">2</td><td class="p-2 text-center">35</td></tr></tbody></table></div><p class="mb-3">For the linear function <i>f</i>, the table shows three values of <i>x</i> and their corresponding values of <i>f(x)</i>. Which equation defines <i>f(x)</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "f(x) = 3x + 29" },
      { id: "B", text: "f(x) = 29x + 32" },
      { id: "C", text: "f(x) = 35x + 29" },
      { id: "D", text: "f(x) = 32x + 35" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. The y-intercept is 29 (when \\(x = 0\\)), and the slope is \\((32 - 29) / (1 - 0) = 3\\). Thus, \\(f(x) = 3x + 29\\)."
  },
  {
    id: 1309,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 9,
    domain: "Geometry and Trigonometry",
    skill: "Lines, Angles, and Triangles",
    passageHtml: `<div class="my-3 flex flex-col items-center"><svg viewBox="0 0 240 100" class="w-full max-w-xs"><polygon points="20,80 100,80 100,30" fill="none" stroke="#000" stroke-width="1.5"/><polygon points="130,80 190,80 190,42.5" fill="none" stroke="#000" stroke-width="1.5"/><rect x="92" y="72" width="8" height="8" fill="none" stroke="#000" stroke-width="1"/><rect x="182" y="72" width="8" height="8" fill="none" stroke="#000" stroke-width="1"/><text x="15" y="85" font-size="10">P</text><text x="100" y="25" font-size="10">Q</text><text x="104" y="85" font-size="10">R</text><text x="125" y="85" font-size="10">S</text><text x="190" y="38" font-size="10">T</text><text x="194" y="85" font-size="10">U</text></svg><p class="text-xs text-black mt-1">Note: Figures not drawn to scale.</p></div><p class="mb-3">Right triangles PQR and STU are similar, where P corresponds to S. If the measure of \\(\\angle Q\\) is 18°, what is the measure of \\(\\angle S\\)?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "18°" },
      { id: "B", text: "72°" },
      { id: "C", text: "82°" },
      { id: "D", text: "162°" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. In right triangle PQR, \\(\\angle P = 90^\\circ - 18^\\circ = 72^\\circ\\). Since P corresponds to S in similar triangles, \\(\\angle S = \\angle P = 72^\\circ\\)."
  },
  {
    id: 1310,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 10,
    domain: "Problem Solving and Data Analysis",
    skill: "Two-Variable Data: Models and Scatterplots",
    passageHtml: `<p class="mb-3">The scatterplot shows the relationship between two variables, <i>x</i> and <i>y</i>.</p><div class="my-3 flex flex-col items-center"><div class="w-full max-w-sm flex justify-center"><svg viewBox="0 0 300 280" class="w-full max-w-xs bg-white p-2" style="aspect-ratio: 1/1;"><g stroke="#cbd5e1" stroke-width="0.8"><line x1="40" y1="40" x2="40" y2="240"/><line x1="40" y1="240" x2="260" y2="240"/><line x1="62" y1="40" x2="62" y2="240"/><line x1="40" y1="220" x2="260" y2="220"/><line x1="84" y1="40" x2="84" y2="240"/><line x1="40" y1="200" x2="260" y2="200"/><line x1="106" y1="40" x2="106" y2="240"/><line x1="40" y1="180" x2="260" y2="180"/><line x1="128" y1="40" x2="128" y2="240"/><line x1="40" y1="160" x2="260" y2="160"/><line x1="150" y1="40" x2="150" y2="240"/><line x1="40" y1="140" x2="260" y2="140"/><line x1="172" y1="40" x2="172" y2="240"/><line x1="40" y1="120" x2="260" y2="120"/><line x1="194" y1="40" x2="194" y2="240"/><line x1="40" y1="100" x2="260" y2="100"/><line x1="216" y1="40" x2="216" y2="240"/><line x1="40" y1="80" x2="260" y2="80"/><line x1="238" y1="40" x2="238" y2="240"/><line x1="40" y1="60" x2="260" y2="60"/><line x1="260" y1="40" x2="260" y2="240"/><line x1="40" y1="40" x2="260" y2="40"/></g><line x1="30" y1="240" x2="275" y2="240" stroke="#000" stroke-width="1.8"/><path d="M 273 236 L 281 240 L 273 244 Z" fill="#000"/><text x="286" y="244" font-family="Georgia, serif" font-style="italic" font-size="13">x</text><line x1="40" y1="250" x2="40" y2="25" stroke="#000" stroke-width="1.8"/><path d="M 36 27 L 40 19 L 44 27 Z" fill="#000"/><text x="40" y="14" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle">y</text><g fill="#000"><circle cx="40" cy="40" r="3.5"/><circle cx="66.4" cy="60" r="3.5"/><circle cx="92.8" cy="80" r="3.5"/><circle cx="108.2" cy="140" r="3.5"/><circle cx="143.4" cy="140" r="3.5"/><circle cx="156.6" cy="180" r="3.5"/><circle cx="183" cy="180" r="3.5"/><circle cx="198.4" cy="180" r="3.5"/><circle cx="231.39999999999998" cy="220" r="3.5"/><circle cx="251.2" cy="200" r="3.5"/></g><g font-family="Georgia, serif" font-size="10" fill="#000" text-anchor="middle"><text x="32" y="252">O</text><text x="62" y="254">1</text><text x="30" y="223">1</text><text x="84" y="254">2</text><text x="30" y="203">2</text><text x="106" y="254">3</text><text x="30" y="183">3</text><text x="128" y="254">4</text><text x="30" y="163">4</text><text x="150" y="254">5</text><text x="30" y="143">5</text><text x="172" y="254">6</text><text x="30" y="123">6</text><text x="194" y="254">7</text><text x="30" y="103">7</text><text x="216" y="254">8</text><text x="30" y="83">8</text><text x="238" y="254">9</text><text x="30" y="63">9</text><text x="260" y="254">10</text><text x="30" y="43">10</text></g></svg></div></div><p class="mb-3">Which of the following equations is the most appropriate linear model for the data shown?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "y = 0.9 + 9.4x" },
      { id: "B", text: "y = 0.9 − 9.4x" },
      { id: "C", text: "y = 9.4 + 0.9x" },
      { id: "D", text: "y = 9.4 − 0.9x" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. The scatterplot shows a negative linear trend with a y-intercept near 9.4 and a slope of approximately -0.9. Therefore, the equation \\(y = 9.4 - 0.9x\\) is the most appropriate model."
  },
  {
    id: 1311,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 11,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<p class="mb-3">The graph of the linear function <i>f</i> in the xy-plane passes through the points (0, 2) and (3, 8). Which equation defines <i>f</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "f(x) = 2x + 2" },
      { id: "B", text: "f(x) = 2x + 3" },
      { id: "C", text: "f(x) = 3x + 2" },
      { id: "D", text: "f(x) = 6x + 2" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. The slope m of the line passing through (0, 2) and (3, 8) is \\((8 - 2) / (3 - 0) = 6 / 3 = 2\\). The y-intercept is (0, 2), so \\(b = 2\\). Thus, \\(f(x) = 2x + 2\\)."
  },
  {
    id: 1312,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 12,
    domain: "Algebra",
    skill: "Linear Equations in Two Variables",
    passageHtml: `${makeTest4M1Q12Svg()}<p class="mb-3">What is an equation of the graph shown?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "y = −2x − 8" },
      { id: "B", text: "y = x − 8" },
      { id: "C", text: "y = −x − 8" },
      { id: "D", text: "y = 2x − 8" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. The graph passes through (0, -8) and (-8, 0). The slope is \\((-8 - 0) / (0 - (-8)) = -1\\), and the y-intercept is -8. Thus, \\(y = -x - 8\\)."
  },
  {
    id: 1313,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 13,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">If \\(\\frac{x}{8} = 5\\), what is the value of \\(\\frac{8}{x}\\)?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "1/5",
    explanation: "The correct answer is 1/5 (or 0.2). Taking the reciprocal of both sides gives \\(\\frac{8}{x} = \\frac{1}{5}\\)."
  },
  {
    id: 1314,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 14,
    domain: "Algebra",
    skill: "Linear Systems in Two Variables",
    passageHtml: `<p class="mb-3">\\(24x + y = 48\\)<br/>\\(6x + y = 72\\)</p><p class="mb-3">The solution to the given system of equations is \\((x, y)\\). What is the value of <i>y</i>?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "80",
    explanation: "The correct answer is 80. Subtracting the second equation from the first: \\(18x = -24 \\implies x = -4/3\\). Substituting into the second equation: \\(6(-4/3) + y = 72 \\implies -8 + y = 72 \\implies y = 80\\)."
  },
  {
    id: 1315,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 15,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<p class="mb-3">Line <i>t</i> in the xy-plane has a slope of \\(-\\frac{1}{3}\\) and passes through the point (9, 10). Which equation defines line <i>t</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "y = 13x − 1/3" },
      { id: "B", text: "y = 9x + 10" },
      { id: "C", text: "y = −x/3 + 10" },
      { id: "D", text: "y = −x/3 + 13" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. Using point-slope form: \\(y - 10 = -\\frac{1}{3}(x - 9) \\implies y - 10 = -\\frac{x}{3} + 3 \\implies y = -\\frac{x}{3} + 13\\)."
  },
  {
    id: 1316,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 16,
    domain: "Advanced Math",
    skill: "Exponential Functions",
    passageHtml: `<p class="mb-3">The function \\(f(x) = 206(1.034)^x\\) models the value, in dollars, of a certain bank account by the end of each year from 1957 through 1972, where <i>x</i> is the number of years after 1957. Which of the following is the best interpretation of “<i>f(5)</i> is approximately equal to 243” in this context?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "The value of the bank account is estimated to be approximately 5 dollars greater in 1962 than in 1957." },
      { id: "B", text: "The value of the bank account is estimated to be approximately 243 dollars in 1962." },
      { id: "C", text: "The value, in dollars, of the bank account is estimated to be approximately 5 times greater in 1962 than in 1957." },
      { id: "D", text: "The value of the bank account is estimated to increase by approximately 243 dollars every 5 years between 1957 and 1972." }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. \\(x = 5\\) corresponds to 5 years after 1957, which is 1962. \\(f(5) \\approx 243\\) means the account value was approximately $243 in 1962."
  },
  {
    id: 1317,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 17,
    domain: "Problem Solving and Data Analysis",
    skill: "Ratios, Rates, Proportional Relationships, and Units",
    passageHtml: `<p class="mb-3">For a certain rectangular region, the ratio of its length to its width is 35 to 10. If the width of the rectangular region increases by 7 units, how must the length change to maintain this ratio?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "It must decrease by 24.5 units." },
      { id: "B", text: "It must increase by 24.5 units." },
      { id: "C", text: "It must decrease by 7 units." },
      { id: "D", text: "It must increase by 7 units." }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. The ratio of length to width is \\(35 / 10 = 3.5\\). To maintain this ratio when width increases by 7, length must increase by \\(3.5 \\times 7 = 24.5\\) units."
  },
  {
    id: 1318,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 18,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<p class="mb-3">Square P has a side length of <i>x</i> inches. Square Q has a perimeter that is 176 inches greater than the perimeter of square P. The function <i>f</i> gives the area of square Q, in square inches. Which of the following defines <i>f</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "f(x) = (x + 44)²" },
      { id: "B", text: "f(x) = (x + 176)²" },
      { id: "C", text: "f(x) = (176x + 44)²" },
      { id: "D", text: "f(x) = (176x + 176)²" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. Perimeter of Square P is \\(4x\\). Perimeter of Square Q is \\(4x + 176\\). Side length of Square Q is \\((4x + 176) / 4 = x + 44\\). Thus area \\(f(x) = (x + 44)^2\\)."
  },
  {
    id: 1319,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 19,
    domain: "Advanced Math",
    skill: "Equivalent Expressions",
    passageHtml: `<div class="my-4 text-center text-lg">\\[\\frac{14x}{7y} = 2\\sqrt{w + 19}\\]</div><p class="mb-3">The given equation relates the distinct positive real numbers <i>w</i>, <i>x</i>, and <i>y</i>. Which equation correctly expresses <i>w</i> in terms of <i>x</i> and <i>y</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "\\(w = \\sqrt{\\frac{x}{y}} - 19\\)" },
      { id: "B", text: "\\(w = \\sqrt{\\frac{28x}{14y}} - 19\\)" },
      { id: "C", text: "\\(w = \\left(\\frac{x}{y}\\right)^2 - 19\\)" },
      { id: "D", text: "\\(w = \\left(\\frac{28x}{14y}\\right)^2 - 19\\)" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Simplifying LHS: \\(\\frac{14x}{7y} = \\frac{2x}{y}\\). Then \\(\\frac{2x}{y} = 2\\sqrt{w+19} \\implies \\frac{x}{y} = \\sqrt{w+19}\\). Squaring both sides: \\(\\left(\\frac{x}{y}\\right)^2 = w + 19 \\implies w = \\left(\\frac{x}{y}\\right)^2 - 19\\)."
  },
  {
    id: 1320,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 20,
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    passageHtml: `<p class="mb-3">Point O is the center of a circle. The measure of arc RS on this circle is 100°. What is the measure, in degrees, of its associated angle ROS?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "100",
    explanation: "The correct answer is 100. The measure of a central angle in a circle equals the measure of its intercepted arc."
  },
  {
    id: 1321,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 21,
    domain: "Advanced Math",
    skill: "Equivalent Expressions",
    passageHtml: `<p class="mb-3">The expression \\(6\\sqrt[5]{3^5 x^{45}} \\cdot \\sqrt[8]{2^8 x}\\) is equivalent to \\(a x^b\\), where <i>a</i> and <i>b</i> are positive constants and \\(x > 1\\). What is the value of \\(a + b\\)?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "361/8",
    explanation: "The correct answer is 361/8 (or 45.125). \\(6 \\sqrt[5]{3^5 x^{45}} = 6 \\times 3 x^9 = 18 x^9\\). \\(\\sqrt[8]{2^8 x} = 2 x^{1/8}\\). Multiplying: \\(18 x^9 \\times 2 x^{1/8} = 36 x^{9 + 1/8} = 36 x^{73/8}\\). Thus \\(a = 36\\) and \\(b = 73/8\\), so \\(a + b = 36 + 73/8 = 361/8 = 45.125\\)."
  },
  {
    id: 1322,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 22,
    domain: "Geometry and Trigonometry",
    skill: "Right Triangles and Trigonometry",
    passageHtml: `<p class="mb-3">A right triangle has sides of length \\(2\\sqrt{2}\\), \\(6\\sqrt{2}\\), and \\(\\sqrt{80}\\) units. What is the area of the triangle, in square units?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "8√2 + √80" },
      { id: "B", text: "12" },
      { id: "C", text: "24√80" },
      { id: "D", text: "24" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. Check hypotenuse: \\((2\\sqrt{2})^2 + (6\\sqrt{2})^2 = 8 + 72 = 80 = (\\sqrt{80})^2\\). The two legs are \\(2\\sqrt{2}\\) and \\(6\\sqrt{2}\\). Area = \\(\\frac{1}{2} \\times 2\\sqrt{2} \\times 6\\sqrt{2} = 12\\)."
  },
  {
    id: 1323,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 23,
    domain: "Advanced Math",
    skill: "Nonlinear Equations in One Variable and Systems",
    passageHtml: `<p class="mb-3">The expression \\(4x^2 + bx - 45\\), where <i>b</i> is a constant, can be rewritten as \\((hx + k)(x + j)\\), where <i>h</i>, <i>k</i>, and <i>j</i> are integer constants. Which of the following must be an integer?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "b/h" },
      { id: "B", text: "b/k" },
      { id: "C", text: "45/h" },
      { id: "D", text: "45/k" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. Expanding \\((hx + k)(x + j) = hx^2 + (hj + k)x + kj\\). Equating coefficients: \\(h = 4\\) and \\(kj = -45\\). Since <i>j</i> is an integer, \\(j = -45 / k\\) must be an integer, so \\(45 / k\\) must be an integer."
  },
  {
    id: 1324,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 24,
    domain: "Advanced Math",
    skill: "Nonlinear Equations in One Variable and Systems",
    passageHtml: `<p class="mb-3">\\(y = 2x^2 - 21x + 64\\)<br/>\\(y = 3x + a\\)</p><p class="mb-3">In the given system of equations, <i>a</i> is a constant. The graphs of the equations in the given system intersect at exactly one point, \\((x, y)\\), in the xy-plane. What is the value of <i>x</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "−8" },
      { id: "B", text: "−6" },
      { id: "C", text: "6" },
      { id: "D", text: "8" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Equating the two expressions for y: \\(2x^2 - 21x + 64 = 3x + a \\implies 2x^2 - 24x + (64 - a) = 0\\). Since there is exactly one point of intersection, the discriminant must be 0: \\((-24)^2 - 4(2)(64 - a) = 0 \\implies 576 - 8(64 - a) = 0 \\implies 64 + 8a = 0 \\implies a = -8\\). Substituting \\(a = -8\\) gives \\(2x^2 - 24x + 72 = 0 \\implies 2(x - 6)^2 = 0 \\implies x = 6\\)."
  },
  {
    id: 1325,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 25,
    domain: "Geometry and Trigonometry",
    skill: "Right Triangles and Trigonometry",
    passageHtml: `<p class="mb-3">An isosceles right triangle has a hypotenuse of length 58 inches. What is the perimeter, in inches, of this triangle?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "29√2" },
      { id: "B", text: "58√2" },
      { id: "C", text: "58 + 58√2" },
      { id: "D", text: "58 + 116√2" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Let leg length be <i>x</i>. \\(x^2 + x^2 = 58^2 \\implies 2x^2 = 3364 \\implies x = 29\\sqrt{2}\\). Perimeter = \\(2x + 58 = 58 + 58\\sqrt{2}\\)."
  },
  {
    id: 1326,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 26,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<p class="mb-3">In the xy-plane, a parabola has vertex (9, −14) and intersects the x-axis at two points. If the equation of the parabola is written in the form \\(y = ax^2 + bx + c\\), where <i>a</i>, <i>b</i>, and <i>c</i> are constants, which of the following could be the value of \\(a + b + c\\)?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "−23" },
      { id: "B", text: "−19" },
      { id: "C", text: "−14" },
      { id: "D", text: "−12" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. \\(a + b + c\\) is the value of \\(y\\) when \\(x = 1\\). In vertex form, \\(y = a(x - 9)^2 - 14\\). For \\(x = 1\\), \\(y = a(1 - 9)^2 - 14 = 64a - 14\\). Since the parabola opens upward and intersects the x-axis, \\(a > 0\\), so \\(64a - 14 > -14\\). The only choice greater than -14 is -12."
  },
  {
    id: 1327,
    testId: "test4",
    moduleKey: "Math_1",
    section: "Math",
    type: "Math",
    moduleNumber: 1,
    questionNumber: 27,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<p class="mb-3">Function <i>f</i> is defined by \\(f(x) = -a^x + b\\), where <i>a</i> and <i>b</i> are constants. In the xy-plane, the graph of \\(y = f(x) - 15\\) has a y-intercept at \\(\\left(0, -\\frac{99}{7}\\right)\\). The product of <i>a</i> and <i>b</i> is \\(\\frac{65}{7}\\). What is the value of <i>a</i>?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "5",
    explanation: "The correct answer is 5. \\(y = f(0) - 15 = -a^0 + b - 15 = -1 + b - 15 = b - 16\\). Setting \\(b - 16 = -99/7 \\implies b = 16 - 99/7 = 13/7\\). Given \\(ab = 65/7 \\implies a(13/7) = 65/7 \\implies 13a = 65 \\implies a = 5\\)."
  }
];
