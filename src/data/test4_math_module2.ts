import { Question } from "../types";

function makeTest4M2Q1Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 290 230" class="w-full max-w-[280px] bg-white select-none">
      <!-- Rotated Y-axis label -->
      <g transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" fill="#000000" text-anchor="middle">
        <text x="-90" y="16">Estimated number</text>
        <text x="-90" y="29">of chipmunks</text>
      </g>

      <!-- Horizontal gridlines & Y-axis labels -->
      <!-- 200 -->
      <line x1="62" y1="30" x2="258" y2="30" stroke="#000000" stroke-width="0.85" />
      <text x="57" y="33.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">200</text>

      <!-- 150 -->
      <line x1="62" y1="60" x2="258" y2="60" stroke="#000000" stroke-width="0.85" />
      <text x="57" y="63.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">150</text>

      <!-- 100 -->
      <line x1="62" y1="90" x2="258" y2="90" stroke="#000000" stroke-width="0.85" />
      <text x="57" y="93.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">100</text>

      <!-- 50 -->
      <line x1="62" y1="120" x2="258" y2="120" stroke="#000000" stroke-width="0.85" />
      <text x="57" y="123.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">50</text>

      <!-- 0 -->
      <line x1="62" y1="150" x2="258" y2="150" stroke="#000000" stroke-width="0.85" />
      <text x="57" y="153.5" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="end" fill="#000000">0</text>

      <!-- Vertical gridlines for each year (from y=26 to y=154) -->
      <g stroke="#000000" stroke-width="0.85">
        <line x1="70" y1="26" x2="70" y2="154" />   <!-- 1989 -->
        <line x1="88" y1="26" x2="88" y2="154" />   <!-- 1990 -->
        <line x1="106" y1="26" x2="106" y2="154" /> <!-- 1991 -->
        <line x1="124" y1="26" x2="124" y2="154" /> <!-- 1992 -->
        <line x1="142" y1="26" x2="142" y2="154" /> <!-- 1993 -->
        <line x1="160" y1="26" x2="160" y2="154" /> <!-- 1994 -->
        <line x1="178" y1="26" x2="178" y2="154" /> <!-- 1995 -->
        <line x1="196" y1="26" x2="196" y2="154" /> <!-- 1996 -->
        <line x1="214" y1="26" x2="214" y2="154" /> <!-- 1997 -->
        <line x1="232" y1="26" x2="232" y2="154" /> <!-- 1998 -->
        <line x1="250" y1="26" x2="250" y2="154" /> <!-- 1999 -->
      </g>

      <!-- Data Line: 1989(~38), 1990(~38), 1991(99), 1992(101), 1993(53), 1994(157), 1995(50), 1996(98), 1997(93), 1998(53), 1999(113) -->
      <polyline
        points="70,127.2 88,127.2 106,90.6 124,89.4 142,118.2 160,55.8 178,120 196,91.2 214,94.2 232,118.2 250,82.2"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- Year Labels (Angled ~45 degrees) -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000" text-anchor="start">
        <text x="68" y="160" transform="rotate(45, 68, 160)">1989</text>
        <text x="86" y="160" transform="rotate(45, 86, 160)">1990</text>
        <text x="104" y="160" transform="rotate(45, 104, 160)">1991</text>
        <text x="122" y="160" transform="rotate(45, 122, 160)">1992</text>
        <text x="140" y="160" transform="rotate(45, 140, 160)">1993</text>
        <text x="158" y="160" transform="rotate(45, 158, 160)">1994</text>
        <text x="176" y="160" transform="rotate(45, 176, 160)">1995</text>
        <text x="194" y="160" transform="rotate(45, 194, 160)">1996</text>
        <text x="212" y="160" transform="rotate(45, 212, 160)">1997</text>
        <text x="230" y="160" transform="rotate(45, 230, 160)">1998</text>
        <text x="248" y="160" transform="rotate(45, 248, 160)">1999</text>
      </g>

      <!-- Centered "Year" Label -->
      <text x="160" y="210" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Year</text>
    </svg>
  </div>`;
}

function makeTest4M2Q8Table(v1: string | number, v2: string | number, v3: string | number): string {
  return `<table class="border border-black border-collapse text-center text-sm font-serif my-1 inline-table" style="min-width: 220px;">
    <tbody>
      <tr class="border-b border-black">
        <td class="border-r border-black px-3 py-1 w-1/4 italic">x</td>
        <td class="border-r border-black px-3 py-1 w-1/4">1</td>
        <td class="border-r border-black px-3 py-1 w-1/4">2</td>
        <td class="px-3 py-1 w-1/4">3</td>
      </tr>
      <tr>
        <td class="border-r border-black px-3 py-1 w-1/4"><i>h</i>(<i>x</i>)</td>
        <td class="border-r border-black px-3 py-1 w-1/4">${v1}</td>
        <td class="border-r border-black px-3 py-1 w-1/4">${v2}</td>
        <td class="px-3 py-1 w-1/4">${v3}</td>
      </tr>
    </tbody>
  </table>`;
}

function makeTest4M2Q16Svg(): string {
  // Intersection 1 on line m (y=58): (103.2, 58)
  // Intersection 2 on line n (y=122): (177.8, 122)
  // Transversal line t: from (52, 14) to (236, 172)
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 280 185" class="w-full max-w-[280px] bg-white select-none">
      <!-- Line m -->
      <line x1="45" y1="58" x2="235" y2="58" stroke="#000000" stroke-width="1.1" />
      <text x="246" y="62.5" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="15" fill="#000000">m</text>

      <!-- Line n -->
      <line x1="45" y1="122" x2="235" y2="122" stroke="#000000" stroke-width="1.1" />
      <text x="246" y="126.5" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="15" fill="#000000">n</text>

      <!-- Transversal Line t -->
      <line x1="52" y1="14" x2="236" y2="172" stroke="#000000" stroke-width="1.1" />
      <text x="53" y="10" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="15" text-anchor="middle" fill="#000000">t</text>

      <!-- Angle Labels (no curves/arcs, exactly placed at the angles) -->
      <!-- Angle x°: above line m, right of transversal t -->
      <text x="110" y="53" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" fill="#000000"><tspan font-style="italic">x</tspan><tspan font-style="normal">°</tspan></text>

      <!-- Angle y°: below line m, left of transversal t -->
      <text x="96" y="69" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" text-anchor="end" fill="#000000"><tspan font-style="italic">y</tspan><tspan font-style="normal">°</tspan></text>

      <!-- Angle z°: above line n, left of transversal t -->
      <text x="168" y="117" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" text-anchor="end" fill="#000000"><tspan font-style="italic">z</tspan><tspan font-style="normal">°</tspan></text>
    </svg>
    <p class="mt-2 text-center text-sm font-serif">Note: Figure not drawn to scale.</p>
  </div>`;
}

function makeTest4M2Q22Svg(): string {
  // Grid: x from -10 to 10 (step 1, each 8px wide = 160px), y from -10 to 10 (step 1, each 8px high = 160px)
  // Origin (0,0) at (135, 125)
  // x-range on svg: 55 to 215, y-range on svg: 45 to 205
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 270 260" class="w-full max-w-[270px] bg-white select-none">
      <!-- Gridlines (every 1 unit) -->
      <g stroke="#777777" stroke-width="0.7">
        <!-- Horizontal gridlines: y = 10 to -10 (step 1) -->
        <line x1="50" y1="45" x2="220" y2="45" />   <!-- 10 -->
        <line x1="50" y1="53" x2="220" y2="53" />   <!-- 9 -->
        <line x1="50" y1="61" x2="220" y2="61" />   <!-- 8 -->
        <line x1="50" y1="69" x2="220" y2="69" />   <!-- 7 -->
        <line x1="50" y1="77" x2="220" y2="77" />   <!-- 6 -->
        <line x1="50" y1="85" x2="220" y2="85" />   <!-- 5 -->
        <line x1="50" y1="93" x2="220" y2="93" />   <!-- 4 -->
        <line x1="50" y1="101" x2="220" y2="101" /> <!-- 3 -->
        <line x1="50" y1="109" x2="220" y2="109" /> <!-- 2 -->
        <line x1="50" y1="117" x2="220" y2="117" /> <!-- 1 -->
        <!-- y = 0 is x-axis -->
        <line x1="50" y1="133" x2="220" y2="133" /> <!-- -1 -->
        <line x1="50" y1="141" x2="220" y2="141" /> <!-- -2 -->
        <line x1="50" y1="149" x2="220" y2="149" /> <!-- -3 -->
        <line x1="50" y1="157" x2="220" y2="157" /> <!-- -4 -->
        <line x1="50" y1="165" x2="220" y2="165" /> <!-- -5 -->
        <line x1="50" y1="173" x2="220" y2="173" /> <!-- -6 -->
        <line x1="50" y1="181" x2="220" y2="181" /> <!-- -7 -->
        <line x1="50" y1="189" x2="220" y2="189" /> <!-- -8 -->
        <line x1="50" y1="197" x2="220" y2="197" /> <!-- -9 -->
        <line x1="50" y1="205" x2="220" y2="205" /> <!-- -10 -->

        <!-- Vertical gridlines: x = -10 to 10 (step 1) -->
        <line x1="55" y1="40" x2="55" y2="210" />   <!-- -10 -->
        <line x1="63" y1="40" x2="63" y2="210" />   <!-- -9 -->
        <line x1="71" y1="40" x2="71" y2="210" />   <!-- -8 -->
        <line x1="79" y1="40" x2="79" y2="210" />   <!-- -7 -->
        <line x1="87" y1="40" x2="87" y2="210" />   <!-- -6 -->
        <line x1="95" y1="40" x2="95" y2="210" />   <!-- -5 -->
        <line x1="103" y1="40" x2="103" y2="210" /> <!-- -4 -->
        <line x1="111" y1="40" x2="111" y2="210" /> <!-- -3 -->
        <line x1="119" y1="40" x2="119" y2="210" /> <!-- -2 -->
        <line x1="127" y1="40" x2="127" y2="210" /> <!-- -1 -->
        <!-- x = 0 is y-axis -->
        <line x1="143" y1="40" x2="143" y2="210" /> <!-- 1 -->
        <line x1="151" y1="40" x2="151" y2="210" /> <!-- 2 -->
        <line x1="159" y1="40" x2="159" y2="210" /> <!-- 3 -->
        <line x1="167" y1="40" x2="167" y2="210" /> <!-- 4 -->
        <line x1="175" y1="40" x2="175" y2="210" /> <!-- 5 -->
        <line x1="183" y1="40" x2="183" y2="210" /> <!-- 6 -->
        <line x1="191" y1="40" x2="191" y2="210" /> <!-- 7 -->
        <line x1="199" y1="40" x2="199" y2="210" /> <!-- 8 -->
        <line x1="207" y1="40" x2="207" y2="210" /> <!-- 9 -->
        <line x1="215" y1="40" x2="215" y2="210" /> <!-- 10 -->
      </g>

      <!-- x-axis -->
      <line x1="46" y1="125" x2="225" y2="125" stroke="#000000" stroke-width="1.3" />
      <polygon points="224,122.5 230,125 224,127.5" fill="#000000" />
      <text x="235" y="128.5" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" fill="#000000">x</text>

      <!-- y-axis -->
      <line x1="135" y1="214" x2="135" y2="35" stroke="#000000" stroke-width="1.3" />
      <polygon points="132.5,36 135,30 137.5,36" fill="#000000" />
      <text x="135" y="24" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="12" text-anchor="middle" fill="#000000">y</text>

      <!-- System Line 1: y = 2 -->
      <line x1="49" y1="109" x2="221" y2="109" stroke="#000000" stroke-width="1.8" />

      <!-- System Line 2: x + 4y = 16 (slope -1/4, passes through (-4, 5) and (8, 2)) -->
      <line x1="49" y1="71.75" x2="221" y2="114.75" stroke="#000000" stroke-width="1.8" />

      <!-- Plotted Points -->
      <circle cx="103" cy="85" r="3.2" fill="#000000" />   <!-- (-4, 5) -->
      <circle cx="199" cy="109" r="3.2" fill="#000000" />  <!-- (8, 2) -->

      <!-- Labels: Origin and Y-axis -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="9.5" fill="#000000" text-anchor="end">
        <text x="131" y="122.5" font-style="italic">O</text>
        <text x="131" y="48.5">10</text>
        <text x="131" y="64.5">8</text>
        <text x="131" y="80.5">6</text>
        <text x="131" y="96.5">4</text>
        <text x="131" y="112.5">2</text>
        <text x="131" y="144.5">-2</text>
        <text x="131" y="160.5">-4</text>
        <text x="131" y="176.5">-6</text>
        <text x="131" y="192.5">-8</text>
        <text x="131" y="208.5">-10</text>
      </g>

      <!-- Labels: X-axis -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="9.5" fill="#000000" text-anchor="middle">
        <text x="55" y="136.5">-10</text>
        <text x="71" y="136.5">-8</text>
        <text x="87" y="136.5">-6</text>
        <text x="103" y="136.5">-4</text>
        <text x="119" y="136.5">-2</text>
        <text x="151" y="136.5">2</text>
        <text x="167" y="136.5">4</text>
        <text x="183" y="136.5">6</text>
        <text x="199" y="136.5">8</text>
        <text x="215" y="136.5">10</text>
      </g>
    </svg>
  </div>`;
}

export const TEST4_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 1401,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 1,
    domain: "Problem Solving and Data Analysis",
    skill: "Two-Variable Data: Models and Scatterplots",
    passageHtml: `<p class="mb-3">The line graph shows the estimated number of chipmunks in a state park on April 1 of each year from 1989 to 1999.</p>${makeTest4M2Q1Svg()}<p class="mb-3">Based on the line graph, in which year was the estimated number of chipmunks in the state park the greatest?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "1989" },
      { id: "B", text: "1994" },
      { id: "C", text: "1995" },
      { id: "D", text: "1998" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. The highest point on the line graph occurs at the year 1994, with approximately 160 chipmunks."
  },
  {
    id: 1402,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 2,
    domain: "Problem Solving and Data Analysis",
    skill: "Ratios, Rates, Proportional Relationships, and Units",
    passageHtml: `<p class="mb-3">A fish swam a distance of 5,104 yards. How far did the fish swim, in miles? (1 mile = 1,760 yards)</p>`,
    questionText: "",
    options: [
      { id: "A", text: "0.3" },
      { id: "B", text: "2.9" },
      { id: "C", text: "3,344" },
      { id: "D", text: "6,864" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. \\(5{,}104 / 1{,}760 = 2.9\\) miles."
  },
  {
    id: 1403,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 3,
    domain: "Advanced Math",
    skill: "Equivalent Expressions",
    passageHtml: `<p class="mb-3">Which expression is equivalent to \\(12x^3 - 5x^3\\)?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "7x⁶" },
      { id: "B", text: "17x³" },
      { id: "C", text: "7x³" },
      { id: "D", text: "17x⁶" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Combining like terms: \\(12x^3 - 5x^3 = (12 - 5)x^3 = 7x^3\\)."
  },
  {
    id: 1404,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 4,
    domain: "Algebra",
    skill: "Linear Systems in Two Variables",
    passageHtml: `<p class="mb-3">\\(x + y = 18\\)<br/>\\(5y = x\\)</p><p class="mb-3">What is the solution \\((x, y)\\) to the given system of equations?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "(15, 3)" },
      { id: "B", text: "(16, 2)" },
      { id: "C", text: "(17, 1)" },
      { id: "D", text: "(18, 0)" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. Substitute \\(x = 5y\\) into \\(x + y = 18 \\implies 5y + y = 18 \\implies 6y = 18 \\implies y = 3\\). Then \\(x = 5(3) = 15\\)."
  },
  {
    id: 1405,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 5,
    domain: "Algebra",
    skill: "Linear Inequalities in One or Two Variables",
    passageHtml: `<p class="mb-3">The point (8, 2) in the xy-plane is a solution to which of the following systems of inequalities?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "x > 0; y > 0" },
      { id: "B", text: "x > 0; y < 0" },
      { id: "C", text: "x < 0; y > 0" },
      { id: "D", text: "x < 0; y < 0" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. For (8, 2), both \\(x = 8 > 0\\) and \\(y = 2 > 0\\) are true."
  },
  {
    id: 1406,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 6,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">\\(|x - 5| = 10\\)</p><p class="mb-3">What is one possible solution to the given equation?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "15",
    explanation: "The correct answer is 15 (or -5). \\(x - 5 = 10 \\implies x = 15\\), or \\(x - 5 = -10 \\implies x = -5\\)."
  },
  {
    id: 1407,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 7,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<p class="mb-3">\\(f(x) = 7x + 1\\)</p><p class="mb-3">The function gives the total number of people on a company retreat with <i>x</i> managers. What is the total number of people on a company retreat with 7 managers?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "50",
    explanation: "The correct answer is 50. Substitute \\(x = 7\\): \\(f(7) = 7(7) + 1 = 49 + 1 = 50\\)."
  },
  {
    id: 1408,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 8,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<div class="my-4 text-center text-lg">\\[h(x) = x^2 - 3\\]</div><p class="mb-3">Which table gives three values of <i>x</i> and their corresponding values of <i>h(x)</i> for the given function <i>h</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: makeTest4M2Q8Table(4, 5, 6) },
      { id: "B", text: makeTest4M2Q8Table("−2", 1, 6) },
      { id: "C", text: makeTest4M2Q8Table("−1", 1, 3) },
      { id: "D", text: makeTest4M2Q8Table("−2", 1, 3) }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. \\(h(1) = 1^2 - 3 = -2\\), \\(h(2) = 2^2 - 3 = 1\\), \\(h(3) = 3^2 - 3 = 6\\)."
  },
  {
    id: 1409,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 9,
    domain: "Advanced Math",
    skill: "Exponential Functions",
    passageHtml: `<p class="mb-3">The function <i>f</i> is defined by \\(f(x) = 270(0.1)^x\\). What is the value of <i>f(0)</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "27" },
      { id: "D", text: "270" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. \\(f(0) = 270(0.1)^0 = 270(1) = 270\\)."
  },
  {
    id: 1410,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 10,
    domain: "Problem Solving and Data Analysis",
    skill: "Inference from Sample Statistics and Margin of Error",
    passageHtml: `<p class="mb-3">To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.49, with an associated margin of error of 0.04. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "It is plausible that the proportion is between 0.45 and 0.53." },
      { id: "B", text: "It is plausible that the proportion is less than 0.45." },
      { id: "C", text: "The proportion is exactly 0.49." },
      { id: "D", text: "It is plausible that the proportion is greater than 0.53." }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. The plausible range for the population proportion is \\(0.49 \\pm 0.04\\), which is between 0.45 and 0.53."
  },
  {
    id: 1411,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 11,
    domain: "Algebra",
    skill: "Linear Inequalities in One or Two Variables",
    passageHtml: `<p class="mb-3">A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,600 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 500 pounds if each box weighs 120 pounds?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "34" },
      { id: "B", text: "35" },
      { id: "C", text: "38" },
      { id: "D", text: "39" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. \\(500 + 120n \\le 4600 \\implies 120n \\le 4100 \\implies n \\le 34.166\\dots\\). The maximum integer number of boxes is 34."
  },
  {
    id: 1412,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 12,
    domain: "Advanced Math",
    skill: "Nonlinear Equations in One Variable and Systems",
    passageHtml: `<p class="mb-3">\\(-4x^2 - 7x = -36\\)</p><p class="mb-3">What is the positive solution to the given equation?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "7/4" },
      { id: "B", text: "9/4" },
      { id: "C", text: "4" },
      { id: "D", text: "7" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. \\(4x^2 + 7x - 36 = 0 \\implies (4x - 9)(x + 4) = 0\\). The positive solution is \\(x = 9/4\\)."
  },
  {
    id: 1413,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 13,
    domain: "Problem Solving and Data Analysis",
    skill: "Probability and Conditional Probability",
    passageHtml: `<div class="my-3 flex flex-col items-center"><p class="text-xs font-semibold mb-2">Color and Shape Distribution of 100 Tiles</p><table class="text-sm border border-black rounded"><thead class="bg-gray-100"><tr><th class="p-2 border-r border-b"></th><th class="p-2 border-r border-b">Red</th><th class="p-2 border-r border-b">Blue</th><th class="p-2 border-r border-b">Yellow</th><th class="p-2 border-b">Total</th></tr></thead><tbody><tr class="border-b"><td class="p-2 border-r">Square</td><td class="p-2 border-r text-center">10</td><td class="p-2 border-r text-center">20</td><td class="p-2 border-r text-center">25</td><td class="p-2 text-center">55</td></tr><tr class="border-b"><td class="p-2 border-r">Pentagon</td><td class="p-2 border-r text-center">20</td><td class="p-2 border-r text-center">10</td><td class="p-2 border-r text-center">15</td><td class="p-2 text-center">45</td></tr><tr><td class="p-2 border-r">Total</td><td class="p-2 border-r text-center">30</td><td class="p-2 border-r text-center">30</td><td class="p-2 border-r text-center">40</td><td class="p-2 text-center">100</td></tr></tbody></table></div><p class="mb-3">If one of these tiles is selected at random, what is the probability of selecting a red tile?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "3/10",
    explanation: "The correct answer is 3/10 (or 0.3). There are 30 red tiles out of 100 total tiles, so probability = 30 / 100 = 3/10."
  },
  {
    id: 1414,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 14,
    domain: "Algebra",
    skill: "Linear Functions",
    passageHtml: `<p class="mb-3">\\(f(x) = 2x + 3\\)</p><p class="mb-3">For the given function <i>f</i>, the graph of \\(y = f(x)\\) in the xy-plane is parallel to line <i>j</i>. What is the slope of line <i>j</i>?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "2",
    explanation: "The correct answer is 2. Parallel lines have equal slopes. The slope of \\(y = 2x + 3\\) is 2, so line <i>j</i> also has slope 2."
  },
  {
    id: 1415,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 15,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">A proposal for a new library was included on an election ballot. A radio show stated that 3 times as many people voted in favor of the proposal as people who voted against it. A social media post reported that 15,000 more people voted in favor of the proposal than voted against it. Based on these data, how many people voted against the proposal?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "7,500" },
      { id: "B", text: "15,000" },
      { id: "C", text: "22,500" },
      { id: "D", text: "45,000" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. Let <i>A</i> be the number of people voting against. Votes in favor \\(F = 3A\\). We are given \\(F - A = 15{,}000 \\implies 3A - A = 15{,}000 \\implies 2A = 15{,}000 \\implies A = 7{,}500\\)."
  },
  {
    id: 1416,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 16,
    domain: "Geometry and Trigonometry",
    skill: "Lines, Angles, and Triangles",
    passageHtml: `${makeTest4M2Q16Svg()}<p class="mb-3">In the figure, lines <i>m</i> and <i>n</i> are parallel. If <i>x</i> = 6<i>k</i> + 13 and <i>y</i> = 8<i>k</i> − 29, what is the value of <i>z</i> ?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "21" },
      { id: "C", text: "41" },
      { id: "D", text: "139" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Angles <i>x</i> and <i>y</i> are vertical angles, so \\(x = y \\implies 6k + 13 = 8k - 29 \\implies 2k = 42 \\implies k = 21\\). Then \\(x = 6(21) + 13 = 139^\\circ\\). Angle <i>z</i> is supplementary to the corresponding angle to <i>x</i>, so \\(z = 180^\\circ - 139^\\circ = 41^\\circ\\)."
  },
  {
    id: 1417,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 17,
    domain: "Algebra",
    skill: "Linear Equations in One Variable",
    passageHtml: `<p class="mb-3">\\(-3x + 21px = 84\\)</p><p class="mb-3">In the given equation, <i>p</i> is a constant. The equation has no solution. What is the value of <i>p</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1/7" },
      { id: "C", text: "4/3" },
      { id: "D", text: "4" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. Rewriting: \\((-3 + 21p)x = 84\\). An equation of the form \\(0 \\cdot x = C\\) (where \\(C \\neq 0\\)) has no solution. Setting \\(-3 + 21p = 0 \\implies 21p = 3 \\implies p = 1/7\\)."
  },
  {
    id: 1418,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 18,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<p class="mb-3">\\(f(x) = (x - 10)(x + 13)\\)</p><p class="mb-3">The function <i>f</i> is defined by the given equation. For what value of <i>x</i> does <i>f(x)</i> reach its minimum?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "−130" },
      { id: "B", text: "−13" },
      { id: "C", text: "−23/2" },
      { id: "D", text: "−3/2" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. The roots of the parabola are at \\(x = 10\\) and \\(x = -13\\). The vertex (minimum) occurs at the midpoint of the roots: \\(x = \\frac{10 + (-13)}{2} = -\\frac{3}{2}\\)."
  },
  {
    id: 1419,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 19,
    domain: "Advanced Math",
    skill: "Nonlinear Functions",
    passageHtml: `<p class="mb-3">The function \\(f(x) = \\frac{1}{9}(x - 7)^2 + 3\\) gives a metal ball’s height above the ground <i>f(x)</i>, in inches, <i>x</i> seconds after it started moving on a track, where \\(0 \\le x \\le 10\\). Which of the following is the best interpretation of the vertex of the graph of \\(y = f(x)\\) in the xy-plane?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "The metal ball’s minimum height was 3 inches above the ground." },
      { id: "B", text: "The metal ball’s minimum height was 7 inches above the ground." },
      { id: "C", text: "The metal ball’s height was 3 inches above the ground when it started moving." },
      { id: "D", text: "The metal ball’s height was 7 inches above the ground when it started moving." }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. The vertex of \\(f(x) = \\frac{1}{9}(x - 7)^2 + 3\\) is (7, 3). Since the parabola opens upward, the minimum y-value is 3, meaning the minimum height was 3 inches above the ground (at time x = 7 seconds)."
  },
  {
    id: 1420,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 20,
    domain: "Geometry and Trigonometry",
    skill: "Right Triangles and Trigonometry",
    passageHtml: `<p class="mb-3">In triangle JKL, \\(\\cos(K) = \\frac{24}{51}\\) and angle J is a right angle. What is the value of \\(\\cos(L)\\)?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "15/17",
    explanation: "The correct answer is 15/17 (or 45/51, approximately 0.8824). Since angle J is 90°, \\(K\\) and \\(L\\) are complementary, so \\(\\cos(L) = \\sin(K)\\). \\(\\sin(K) = \\sqrt{1 - (24/51)^2} = \\sqrt{\\frac{2601 - 576}{2601}} = \\sqrt{\\frac{2025}{2601}} = \\frac{45}{51} = \\frac{15}{17}\\)."
  },
  {
    id: 1421,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 21,
    domain: "Advanced Math",
    skill: "Nonlinear Equations in One Variable and Systems",
    passageHtml: `<p class="mb-3">\\(-x^2 + bx - 676 = 0\\)</p><p class="mb-3">In the given equation, <i>b</i> is a positive integer. The equation has no real solution. What is the greatest possible value of <i>b</i>?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "51",
    explanation: "The correct answer is 51. For no real solution, discriminant \\(b^2 - 4(-1)(-676) < 0 \\implies b^2 - 2704 < 0 \\implies b < 52\\). The greatest integer value for positive <i>b</i> is 51."
  },
  {
    id: 1422,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 22,
    domain: "Algebra",
    skill: "Linear Systems in Two Variables",
    passageHtml: `${makeTest4M2Q22Svg()}<p class="mb-3">If a new graph of three linear equations is created using the system of equations shown and the equation \\(x + 4y = -16\\), how many solutions \\((x, y)\\) will the resulting system of three equations have?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      { id: "C", text: "Exactly two" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "Choice A is correct. One of the existing lines in the system has equation \\(x + 4y = 16\\). The line \\(x + 4y = -16\\) is parallel to it (same slope, different y-intercept), so they never intersect. Thus, no single point can satisfy all three equations."
  },
  {
    id: 1423,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 23,
    domain: "Advanced Math",
    skill: "Exponential Functions",
    passageHtml: `<p class="mb-3">\\(f(x) = 5{,}470(0.64)^{x/12}\\)</p><p class="mb-3">The function <i>f</i> gives the value, in dollars, of a certain piece of equipment after <i>x</i> months of use. If the value of the equipment decreases each year by <i>p</i>% of its value the preceding year, what is the value of <i>p</i>?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "36" },
      { id: "D", text: "64" }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. One year corresponds to \\(x = 12\\) months, so \\(f(12) = 5470(0.64)^1 = 5470(1 - 0.36)\\). The value decreases by 36% each year, so \\(p = 36\\)."
  },
  {
    id: 1424,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 24,
    domain: "Problem Solving and Data Analysis",
    skill: "Center and Spread of Data",
    passageHtml: `<div class="my-3 flex flex-col items-center"><p class="text-xs font-semibold mb-2">Data Set A</p><div class="w-full max-w-xs"><svg viewBox="0 0 200 80" class="w-full"><line x1="20" y1="60" x2="180" y2="60" stroke="#000" stroke-width="1.5"/><line x1="30" y1="55" x2="30" y2="65" stroke="#000"/><line x1="60" y1="55" x2="60" y2="65" stroke="#000"/><line x1="90" y1="55" x2="90" y2="65" stroke="#000"/><line x1="120" y1="55" x2="120" y2="65" stroke="#000"/><line x1="150" y1="55" x2="150" y2="65" stroke="#000"/><g font-size="8" fill="#000" text-anchor="middle"><text x="30" y="73">22</text><text x="60" y="73">23</text><text x="90" y="73">24</text><text x="120" y="73">25</text><text x="150" y="73">26</text></g><circle cx="30" cy="50" r="2.5" fill="#000"/><circle cx="30" cy="43" r="2.5" fill="#000"/><circle cx="30" cy="36" r="2.5" fill="#000"/><circle cx="30" cy="29" r="2.5" fill="#000"/><circle cx="30" cy="22" r="2.5" fill="#000"/><circle cx="60" cy="50" r="2.5" fill="#000"/><circle cx="60" cy="43" r="2.5" fill="#000"/><circle cx="60" cy="36" r="2.5" fill="#000"/><circle cx="60" cy="29" r="2.5" fill="#000"/><circle cx="90" cy="50" r="2.5" fill="#000"/><circle cx="90" cy="43" r="2.5" fill="#000"/><circle cx="90" cy="36" r="2.5" fill="#000"/><circle cx="120" cy="50" r="2.5" fill="#000"/><circle cx="120" cy="43" r="2.5" fill="#000"/><circle cx="150" cy="50" r="2.5" fill="#000"/></svg></div></div><p class="mb-3">The dot plot represents the 15 values in data set A. Data set B is created by adding 56 to each of the values in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A." },
      { id: "B", text: "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A." },
      { id: "C", text: "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A." },
      { id: "D", text: "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A." }
    ],
    correctAnswer: "C",
    explanation: "Choice C is correct. Adding a positive constant to every value in a data set shifts the median up by that constant (Median B > Median A) but leaves the difference between max and min unchanged (Range B = Range A)."
  },
  {
    id: 1425,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 25,
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    passageHtml: `<p class="mb-3">The equation \\(x^2 + (y - 1)^2 = 49\\) represents circle A. Circle B is obtained by shifting circle A down 2 units in the xy-plane. Which of the following equations represents circle B?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "(x − 2)² + (y − 1)² = 49" },
      { id: "B", text: "x² + (y − 3)² = 49" },
      { id: "C", text: "(x + 2)² + (y − 1)² = 49" },
      { id: "D", text: "x² + (y + 1)² = 49" }
    ],
    correctAnswer: "D",
    explanation: "Choice D is correct. Circle A has center (0, 1). Shifting down 2 units moves the center to \\((0, 1 - 2) = (0, -1)\\). The equation becomes \\(x^2 + (y - (-1))^2 = 49 \\implies x^2 + (y + 1)^2 = 49\\)."
  },
  {
    id: 1426,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 26,
    domain: "Geometry and Trigonometry",
    skill: "Area and Volume",
    passageHtml: `<p class="mb-3">Two identical rectangular prisms each have a height of 90 centimeters (cm). The base of each prism is a square, and the surface area of each prism is <i>K</i> cm². If the prisms are glued together along a square base, the resulting prism has a surface area of \\(\\frac{92}{47}K\\) cm². What is the side length, in cm, of each square base?</p>`,
    questionText: "",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "16" }
    ],
    correctAnswer: "B",
    explanation: "Choice B is correct. Surface area of one prism \\(K = 2s^2 + 4s(90) = 2s^2 + 360s\\). When glued together at a square base, 2 square bases are hidden, so combined surface area is \\(2K - 2s^2 = \\frac{92}{47}K \\implies 2s^2 = \\frac{2}{47}K \\implies K = 47s^2\\). Equating: \\(2s^2 + 360s = 47s^2 \\implies 45s^2 = 360s \\implies s = 8\\) cm."
  },
  {
    id: 1427,
    testId: "test4",
    moduleKey: "Math_2",
    section: "Math",
    type: "Math",
    moduleNumber: 2,
    questionNumber: 27,
    domain: "Problem Solving and Data Analysis",
    skill: "Percentages",
    passageHtml: `<p class="mb-3">210 is <i>p</i>% greater than 30. What is the value of <i>p</i>?</p>`,
    questionText: "",
    options: [],
    correctAnswer: "600",
    explanation: "The correct answer is 600. \\(210 = 30 + \\frac{p}{100}(30) \\implies 180 = 0.3p \\implies p = 600\\)."
  }
];
