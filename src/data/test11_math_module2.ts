import { Question } from '../types';

export const MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 94,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Simplifying Algebraic Expression",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(6x + 5x + 4y\\)
    </div>
    <p class="mt-3">Which expression is equivalent to \\(6x + 5x + 4y\\)?</p>`,
    options: [
      { id: "A", text: "\\(15x\\)" },
      { id: "B", text: "\\(15y\\)" },
      { id: "C", text: "\\(11x + 4y\\)" },
      { id: "D", text: "\\(30x + 4y\\)" }
    ],
    correctAnswer: "C",
    explanation: "Combine like terms: \\(6x + 5x = 11x\\), so the expression simplifies to \\(11x + 4y\\)."
  },
  {
    id: 95,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Sea Stars Dot Plot Analysis",
    passageHtml: `<p class="mb-4">To study the characteristics of sea stars in a group of tide pools, researchers measured the diameter of the sea stars within the tide pools. The dot plot gives the diameter, to the nearest inch, of each of the sea stars in these tide pools.</p>
    <div class="my-4 flex flex-col items-center justify-center">
      <svg width="260" height="175" viewBox="0 0 260 175" class="max-w-full font-serif select-none">
        <!-- Number Line -->
        <line x1="45" y1="110" x2="215" y2="110" stroke="#000000" stroke-width="1.5" />
        
        <!-- 16 -->
        <line x1="60" y1="104" x2="60" y2="116" stroke="#000000" stroke-width="1.5" />
        <text x="60" y="130" font-size="14" fill="#000000" text-anchor="middle">16</text>
        <circle cx="60" cy="96" r="4.5" fill="#000000" />
        <circle cx="60" cy="82" r="4.5" fill="#000000" />
        <circle cx="60" cy="68" r="4.5" fill="#000000" />
        <circle cx="60" cy="54" r="4.5" fill="#000000" />
        <circle cx="60" cy="40" r="4.5" fill="#000000" />
        <circle cx="60" cy="26" r="4.5" fill="#000000" />

        <!-- 17 -->
        <line x1="95" y1="104" x2="95" y2="116" stroke="#000000" stroke-width="1.5" />
        <text x="95" y="130" font-size="14" fill="#000000" text-anchor="middle">17</text>
        <circle cx="95" cy="96" r="4.5" fill="#000000" />
        <circle cx="95" cy="82" r="4.5" fill="#000000" />
        <circle cx="95" cy="68" r="4.5" fill="#000000" />
        <circle cx="95" cy="54" r="4.5" fill="#000000" />

        <!-- 18 -->
        <line x1="130" y1="104" x2="130" y2="116" stroke="#000000" stroke-width="1.5" />
        <text x="130" y="130" font-size="14" fill="#000000" text-anchor="middle">18</text>
        <circle cx="130" cy="96" r="4.5" fill="#000000" />

        <!-- 19 -->
        <line x1="165" y1="104" x2="165" y2="116" stroke="#000000" stroke-width="1.5" />
        <text x="165" y="130" font-size="14" fill="#000000" text-anchor="middle">19</text>
        <circle cx="165" cy="96" r="4.5" fill="#000000" />
        <circle cx="165" cy="82" r="4.5" fill="#000000" />

        <!-- 20 -->
        <line x1="200" y1="104" x2="200" y2="116" stroke="#000000" stroke-width="1.5" />
        <text x="200" y="130" font-size="14" fill="#000000" text-anchor="middle">20</text>
        <circle cx="200" cy="96" r="4.5" fill="#000000" />
        <circle cx="200" cy="82" r="4.5" fill="#000000" />
        <circle cx="200" cy="68" r="4.5" fill="#000000" />

        <!-- Axis Label -->
        <text x="130" y="156" font-size="14" fill="#000000" text-anchor="middle">Diameter (inches)</text>
      </svg>
    </div>`,
    questionText: "Based on the dot plot, how many sea stars had a diameter, to the nearest inch, of 16 inches?",
    options: [
      { id: "A", text: "16" },
      { id: "B", text: "6" },
      { id: "C", text: "4" },
      { id: "D", text: "1" }
    ],
    correctAnswer: "B",
    explanation: "To find how many sea stars had a diameter of 16 inches to the nearest inch, count the number of dots vertically stacked above 16 on the horizontal axis. There are 6 dots above 16, representing 6 sea stars."
  },
  {
    id: 96,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    passageTitle: "Rectangle Area Calculation",
    questionText: "A rectangle has a length of 56 inches and a width of 28 inches. What is the area, in square inches, of the rectangle?",
    options: [
      { id: "A", text: "28" },
      { id: "B", text: "84" },
      { id: "C", text: "168" },
      { id: "D", text: "1,568" }
    ],
    correctAnswer: "D",
    explanation: "Area = \\(\\text{length} \\times \\text{width} = 56 \\times 28 = 1{,}568\\) square inches."
  },
  {
    id: 97,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "System of Linear Equations Solution",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium  space-y-1">
      <div>\\(10x = 110\\)</div>
      <div>\\(6x - 63 = y\\)</div>
    </div>
    <p class="mt-3">The solution to the given system is \\((x, y)\\). What is the value of \\(y\\)?</p>`,
    options: [
      { id: "A", text: "63" },
      { id: "B", text: "11" },
      { id: "C", text: "10" },
      { id: "D", text: "3" }
    ],
    correctAnswer: "D",
    explanation: "From \\(10x = 110\\), \\(x = 11\\). Substituting into \\(6(11) - 63 = 66 - 63 = 3 = y\\)."
  },
  {
    id: 98,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Linear Function Input Evaluation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(f(x) = 9(2x + 3)\\)
    </div>
    <p class="mt-3">For what value of \\(x\\) does \\(f(x) = 63\\)?</p>`,
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "5" },
      { id: "C", text: "7" },
      { id: "D", text: "30" }
    ],
    correctAnswer: "A",
    explanation: "\\(9(2x + 3) = 63 \\implies 2x + 3 = 7 \\implies 2x = 4 \\implies x = 2\\)."
  },
  {
    id: 99,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Simple Linear Equation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(10x = 86\\)
    </div>
    <p class="mt-3">What value of \\(x\\) is the solution to the given equation?</p>`,
    options: [],
    correctAnswer: "8.6; 43/5",
    explanation: "\\(x = 86 / 10 = 8.6 = \\frac{43}{5}\\)."
  },
  {
    id: 100,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Exponential Growth Initial Population",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(y = 3{,}600(a)^x\\)
    </div>
    <p class="mb-3">The equation gives the predicted number of bacteria \\(y\\) in a growth medium \\(x\\) hours after measurement began. What was the predicted number of bacteria initially measured (at \\(x = 0\\))?</p>`,
    options: [],
    correctAnswer: "3600",
    explanation: "At \\(x = 0\\), \\(y = 3{,}600(a)^0 = 3{,}600(1) = 3{,}600\\)."
  },
  {
    id: 101,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Packing Supplies Inequality Constraint",
    questionText: "Leo has $15 to buy containers costing $1.87 each (\\(c\\)) and tape rolls costing $2.40 each (\\(t\\)). Which inequality represents the relationship between containers \\(c\\) and tape rolls \\(t\\) Leo can buy?",
    options: [
      { id: "A", text: "\\(1.87c + 2.40t \\le 15\\)" },
      { id: "B", text: "\\(1.87c + 2.40t \\ge 15\\)" },
      { id: "C", text: "\\(2.40c + 1.87t \\le 15\\)" },
      { id: "D", text: "\\(2.40c + 1.87t \\ge 15\\)" }
    ],
    correctAnswer: "A",
    explanation: "Total cost is \\(1.87c + 2.40t\\), which must not exceed $15 (\\(\\le 15\\))."
  },
  {
    id: 102,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Graph Classification",
    passageHtml: `<p class="mb-4">The graph of the function \\(f\\) is shown, where \\(y = f(x)\\).</p>
    <div class="my-4 flex flex-col items-center justify-center">
      <svg width="280" height="250" viewBox="0 0 280 250" class="max-w-full font-serif select-none">
        <!-- Grid Lines -->
        <!-- Vertical grid lines: x = -6 to 3 (step = 22px, origin x = 168) -->
        <g stroke="#000000" stroke-width="0.75">
          <line x1="36" y1="28" x2="36" y2="204" />
          <line x1="58" y1="28" x2="58" y2="204" />
          <line x1="80" y1="28" x2="80" y2="204" />
          <line x1="102" y1="28" x2="102" y2="204" />
          <line x1="124" y1="28" x2="124" y2="204" />
          <line x1="146" y1="28" x2="146" y2="204" />
          <line x1="168" y1="28" x2="168" y2="204" />
          <line x1="190" y1="28" x2="190" y2="204" />
          <line x1="212" y1="28" x2="212" y2="204" />
          <line x1="234" y1="28" x2="234" y2="204" />

          <!-- Horizontal grid lines: y = -2 to 6 (step = 22px, origin y = 160) -->
          <line x1="36" y1="28" x2="234" y2="28" />
          <line x1="36" y1="50" x2="234" y2="50" />
          <line x1="36" y1="72" x2="234" y2="72" />
          <line x1="36" y1="94" x2="234" y2="94" />
          <line x1="36" y1="116" x2="234" y2="116" />
          <line x1="36" y1="138" x2="234" y2="138" />
          <line x1="36" y1="160" x2="234" y2="160" />
          <line x1="36" y1="182" x2="234" y2="182" />
          <line x1="36" y1="204" x2="234" y2="204" />
        </g>

        <!-- Axes with arrows -->
        <!-- X Axis -->
        <line x1="30" y1="160" x2="246" y2="160" stroke="#000000" stroke-width="2" />
        <polygon points="252,160 244,156 244,164" fill="#000000" />
        <text x="256" y="164" font-size="14" font-style="italic" fill="#000000">x</text>

        <!-- Y Axis -->
        <line x1="168" y1="208" x2="168" y2="20" stroke="#000000" stroke-width="2" />
        <polygon points="168,14 164,22 172,22" fill="#000000" />
        <text x="168" y="10" font-size="14" font-style="italic" text-anchor="middle" fill="#000000">y</text>

        <!-- Axis Labels & Tick Marks -->
        <text x="36" y="174" font-size="12" text-anchor="middle" fill="#000000">-6</text>
        <text x="80" y="174" font-size="12" text-anchor="middle" fill="#000000">-4</text>
        <text x="124" y="174" font-size="12" text-anchor="middle" fill="#000000">-2</text>
        <text x="162" y="174" font-size="13" font-style="italic" text-anchor="end" fill="#000000">O</text>
        <text x="212" y="174" font-size="12" text-anchor="middle" fill="#000000">2</text>

        <text x="162" y="32" font-size="12" text-anchor="end" fill="#000000">6</text>
        <text x="162" y="76" font-size="12" text-anchor="end" fill="#000000">4</text>
        <text x="162" y="120" font-size="12" text-anchor="end" fill="#000000">2</text>
        <text x="162" y="208" font-size="12" text-anchor="end" fill="#000000">-2</text>

        <!-- Exponential Curve -->
        <path d="M 32 159.6 Q 115 159.2 142 155 Q 160 151 168 138 Q 178 108 190 28" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    </div>`,
    questionText: "Which of the following best describes the function \\(f\\)?",
    options: [
      { id: "A", text: "Decreasing exponential" },
      { id: "B", text: "Increasing exponential" },
      { id: "C", text: "Decreasing linear" },
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "B",
    explanation: "The graph shows a non-linear curve that approaches a horizontal asymptote \\(y = 0\\) as \\(x\\) decreases to the left, and grows upward at an accelerating rate as \\(x\\) increases to the right. Therefore, the function \\(f\\) is an **increasing exponential** function."
  },
  {
    id: 103,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Graph Inequality Shaded Region",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="270" height="310" viewBox="0 0 270 310" class="max-w-full font-serif select-none">
        <!-- Shaded region above y = 36 -->
        <rect x="32" y="24" width="196" height="96" fill="#b8bcc4" />

        <!-- Grid Lines -->
        <g stroke="#000000" stroke-width="0.75">
          <!-- Vertical grid lines (x = -15 to 15, step 28px, x=0 at 130) -->
          <line x1="32" y1="24" x2="32" y2="250" />
          <line x1="46" y1="24" x2="46" y2="250" />
          <line x1="74" y1="24" x2="74" y2="250" />
          <line x1="102" y1="24" x2="102" y2="250" />
          <line x1="130" y1="24" x2="130" y2="250" />
          <line x1="158" y1="24" x2="158" y2="250" />
          <line x1="186" y1="24" x2="186" y2="250" />
          <line x1="214" y1="24" x2="214" y2="250" />
          <line x1="228" y1="24" x2="228" y2="250" />

          <!-- Horizontal grid lines (y = 5 to 60, step 18px per 5 units, y=0 at 250) -->
          <line x1="32" y1="34" x2="228" y2="34" />
          <line x1="32" y1="52" x2="228" y2="52" />
          <line x1="32" y1="70" x2="228" y2="70" />
          <line x1="32" y1="88" x2="228" y2="88" />
          <line x1="32" y1="106" x2="228" y2="106" />
          <line x1="32" y1="124" x2="228" y2="124" />
          <line x1="32" y1="142" x2="228" y2="142" />
          <line x1="32" y1="160" x2="228" y2="160" />
          <line x1="32" y1="178" x2="228" y2="178" />
          <line x1="32" y1="196" x2="228" y2="196" />
          <line x1="32" y1="214" x2="228" y2="214" />
          <line x1="32" y1="232" x2="228" y2="232" />
        </g>

        <!-- Thick Boundary line y = 36 -->
        <line x1="32" y1="120" x2="228" y2="120" stroke="#000000" stroke-width="2.8" />

        <!-- Axes with arrows -->
        <!-- X Axis -->
        <line x1="24" y1="250" x2="236" y2="250" stroke="#000000" stroke-width="2" />
        <polygon points="242,250 234,246 234,254" fill="#000000" />
        <text x="246" y="254" font-size="14" font-style="italic" fill="#000000">x</text>

        <!-- Y Axis -->
        <line x1="130" y1="258" x2="130" y2="18" stroke="#000000" stroke-width="2" />
        <polygon points="130,12 126,20 134,20" fill="#000000" />
        <text x="130" y="8" font-size="14" font-style="italic" text-anchor="middle" fill="#000000">y</text>

        <!-- Y-Axis Labels -->
        <text x="124" y="38" font-size="11" text-anchor="end" fill="#000000">60</text>
        <text x="124" y="56" font-size="11" text-anchor="end" fill="#000000">55</text>
        <text x="124" y="74" font-size="11" text-anchor="end" fill="#000000">50</text>
        <text x="124" y="92" font-size="11" text-anchor="end" fill="#000000">45</text>
        <text x="124" y="110" font-size="11" text-anchor="end" fill="#000000">40</text>
        <text x="124" y="128" font-size="11" text-anchor="end" fill="#000000">35</text>
        <text x="124" y="146" font-size="11" text-anchor="end" fill="#000000">30</text>
        <text x="124" y="164" font-size="11" text-anchor="end" fill="#000000">25</text>
        <text x="124" y="182" font-size="11" text-anchor="end" fill="#000000">20</text>
        <text x="124" y="200" font-size="11" text-anchor="end" fill="#000000">15</text>
        <text x="124" y="218" font-size="11" text-anchor="end" fill="#000000">10</text>
        <text x="124" y="236" font-size="11" text-anchor="end" fill="#000000">5</text>

        <!-- X-Axis Labels -->
        <text x="46" y="264" font-size="11" text-anchor="middle" fill="#000000">-15</text>
        <text x="74" y="264" font-size="11" text-anchor="middle" fill="#000000">-10</text>
        <text x="102" y="264" font-size="11" text-anchor="middle" fill="#000000">-5</text>
        <text x="124" y="264" font-size="12" font-style="italic" text-anchor="end" fill="#000000">O</text>
        <text x="158" y="264" font-size="11" text-anchor="middle" fill="#000000">5</text>
        <text x="186" y="264" font-size="11" text-anchor="middle" fill="#000000">10</text>
        <text x="214" y="264" font-size="11" text-anchor="middle" fill="#000000">15</text>
      </svg>
    </div>`,
    questionText: "The shaded region shown in the graph represents all the solutions to which inequality?",
    options: [
      { id: "A", text: "\\(x \\le 36\\)" },
      { id: "B", text: "\\(x \\ge 36\\)" },
      { id: "C", text: "\\(y \\le 36\\)" },
      { id: "D", text: "\\(y \\ge 36\\)" }
    ],
    correctAnswer: "D",
    explanation: "The graph features a solid horizontal boundary line at \\(y = 36\\) (just above \\(y = 35\\)). Since the region above the line is shaded and the boundary line is solid, this represents all points where \\(y \\ge 36\\)."
  },
  {
    id: 104,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Tournament Player Elimination Function",
    questionText: "There are 240 players in a tournament of 4 rounds. Losers are eliminated each round, cutting remaining active players in half. Which equation gives the number of players \\(p\\) eliminated at the end of round \\(r\\) (where \\(r \\le 4\\))?",
    options: [
      { id: "A", text: "\\(p = 15\\left(\\frac{1}{2}\\right)^r\\)" },
      { id: "B", text: "\\(p = 15(2)^r\\)" },
      { id: "C", text: "\\(p = 240\\left(\\frac{1}{2}\\right)^r\\)" },
      { id: "D", text: "\\(p = 240(2)^r\\)" }
    ],
    correctAnswer: "C",
    explanation: "In round 1, half of 240 (120) are eliminated: \\(240(1/2)^1 = 120\\). In round 2, half of remaining are eliminated: \\(240(1/2)^2 = 60\\)."
  },
  {
    id: 105,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Parallel Line Equation",
    questionText: "Line \\(k\\) is defined by \\(y = 6x + 4\\). Line \\(j\\) is parallel to line \\(k\\) and passes through the point \\((0, 5)\\). Which equation defines line \\(j\\)?",
    options: [
      { id: "A", text: "\\(y = 6x + 5\\)" },
      { id: "B", text: "\\(y = -5x + 5\\)" },
      { id: "C", text: "\\(y = -6x + 5\\)" },
      { id: "D", text: "\\(y = 5x + 5\\)" }
    ],
    correctAnswer: "A",
    explanation: "Parallel lines have equal slopes (\\(m = 6\\)). Passing through y-intercept \\((0, 5)\\) gives \\(y = 6x + 5\\)."
  },
  {
    id: 106,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    passageTitle: "Isosceles Right Triangle Angle",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="260" height="210" viewBox="0 0 260 210" class="max-w-full font-serif select-none">
        <!-- Triangle -->
        <polygon points="35,170 215,170 215,25" stroke="#000000" stroke-width="2.2" fill="none" stroke-linejoin="miter" />

        <!-- Right Angle Marker -->
        <polyline points="203,170 203,158 215,158" stroke="#000000" stroke-width="1.8" fill="none" />

        <!-- Angle x° at Top Vertex -->
        <text x="195" y="52" font-size="16" font-style="italic" fill="#000000">x<tspan font-style="normal" font-size="11" dy="-5">°</tspan></text>

        <!-- Vertical Leg Label: 15 -->
        <text x="222" y="105" font-size="18" fill="#000000">15</text>

        <!-- Horizontal Leg Label: 15 -->
        <text x="125" y="194" font-size="18" fill="#000000" text-anchor="middle">15</text>
      </svg>
      <p class="text-sm font-serif text-center mt-1">Note: Figure not drawn to scale.</p>
    </div>`,
    questionText: "In the triangle shown, what is the value of \\(x\\)?",
    options: [],
    correctAnswer: "45",
    explanation: "The given figure shows a right triangle where both legs have equal lengths of 15. Because the two legs are congruent, the triangle is an isosceles right triangle (a 45°-45°-90° special right triangle). The two acute angles are equal and each measure \\(45^\\circ\\). Therefore, \\(x = 45\\)."
  },
  {
    id: 107,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    passageTitle: "Circle Radius from Standard Form",
    questionText: "What is the radius of the circle in the \\(xy\\)-plane defined by \\((x + 2)^2 + (y + 5)^2 = 169\\)?",
    options: [],
    correctAnswer: "13",
    explanation: "The standard equation of a circle in the \\(xy\\)-plane is \\((x - h)^2 + (y - k)^2 = r^2\\), where \\((h, k)\\) is the center of the circle and \\(r\\) is the radius.\n\nComparing \\((x + 2)^2 + (y + 5)^2 = 169\\) to the standard form:\n\\[r^2 = 169\\]\nTaking the square root of both sides (since the radius must be positive):\n\\[r = \\sqrt{169} = 13\\]\n\nTherefore, the radius of the circle is **13**."
  },
  {
    id: 108,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Graph Coordinate Pair Interpretation",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="290" height="320" viewBox="0 0 290 320" class="max-w-full font-serif select-none">
        <!-- Grid Lines -->
        <g stroke="#000000" stroke-width="0.6" opacity="0.65">
          <!-- Vertical grid lines (every 25 units: 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275) -->
          <line x1="60" y1="28" x2="60" y2="284" />
          <line x1="78" y1="28" x2="78" y2="284" />
          <line x1="96" y1="28" x2="96" y2="284" />
          <line x1="114" y1="28" x2="114" y2="284" />
          <line x1="132" y1="28" x2="132" y2="284" />
          <line x1="150" y1="28" x2="150" y2="284" />
          <line x1="168" y1="28" x2="168" y2="284" />
          <line x1="186" y1="28" x2="186" y2="284" />
          <line x1="204" y1="28" x2="204" y2="284" />
          <line x1="222" y1="28" x2="222" y2="284" />
          <line x1="240" y1="28" x2="240" y2="284" />
          <line x1="258" y1="28" x2="258" y2="284" />

          <!-- Horizontal grid lines (every 50 units: 350 to -200) -->
          <line x1="60" y1="36" x2="258" y2="36" />
          <line x1="60" y1="58" x2="258" y2="58" />
          <line x1="60" y1="80" x2="258" y2="80" />
          <line x1="60" y1="102" x2="258" y2="102" />
          <line x1="60" y1="124" x2="258" y2="124" />
          <line x1="60" y1="146" x2="258" y2="146" />
          <line x1="60" y1="168" x2="258" y2="168" />
          <line x1="60" y1="190" x2="258" y2="190" />
          <line x1="60" y1="212" x2="258" y2="212" />
          <line x1="60" y1="234" x2="258" y2="234" />
          <line x1="60" y1="256" x2="258" y2="256" />
          <line x1="60" y1="278" x2="258" y2="278" />
        </g>

        <!-- Axes with arrows -->
        <!-- X Axis -->
        <line x1="50" y1="190" x2="268" y2="190" stroke="#000000" stroke-width="1.8" />
        <polygon points="274,190 266,186 266,194" fill="#000000" />
        <text x="278" y="194" font-size="14" font-style="italic" fill="#000000">x</text>

        <!-- Y Axis -->
        <line x1="60" y1="290" x2="60" y2="20" stroke="#000000" stroke-width="1.8" />
        <polygon points="60,14 56,22 64,22" fill="#000000" />
        <text x="60" y="10" font-size="14" font-style="italic" text-anchor="middle" fill="#000000">y</text>

        <!-- Y-Axis Labels -->
        <text x="54" y="40" font-size="11" text-anchor="end" fill="#000000">350</text>
        <text x="54" y="62" font-size="11" text-anchor="end" fill="#000000">300</text>
        <text x="54" y="84" font-size="11" text-anchor="end" fill="#000000">250</text>
        <text x="54" y="106" font-size="11" text-anchor="end" fill="#000000">200</text>
        <text x="54" y="128" font-size="11" text-anchor="end" fill="#000000">150</text>
        <text x="54" y="150" font-size="11" text-anchor="end" fill="#000000">100</text>
        <text x="54" y="172" font-size="11" text-anchor="end" fill="#000000">50</text>
        <text x="54" y="202" font-size="12" font-style="italic" text-anchor="end" fill="#000000">O</text>
        <text x="54" y="216" font-size="11" text-anchor="end" fill="#000000">-50</text>
        <text x="54" y="238" font-size="11" text-anchor="end" fill="#000000">-100</text>
        <text x="54" y="260" font-size="11" text-anchor="end" fill="#000000">-150</text>
        <text x="54" y="282" font-size="11" text-anchor="end" fill="#000000">-200</text>

        <!-- X-Axis Labels -->
        <text x="96" y="204" font-size="11" text-anchor="middle" fill="#000000">50</text>
        <text x="132" y="204" font-size="11" text-anchor="middle" fill="#000000">100</text>
        <text x="168" y="204" font-size="11" text-anchor="middle" fill="#000000">150</text>
        <text x="204" y="204" font-size="11" text-anchor="middle" fill="#000000">200</text>
        <text x="240" y="204" font-size="11" text-anchor="middle" fill="#000000">250</text>

        <!-- Curve -->
        <path d="M 60 268 Q 110 185 145 135 Q 170 100 205 78 Q 230 62 258 46" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" />

        <!-- Highlighted Point (149.02, 186.05) -->
        <circle cx="167.3" cy="108" r="4" fill="#000000" />
      </svg>
    </div>
    <p class="mb-4">The graph shows the estimated boiling point \\(y\\), in degrees Celsius, of a normal paraffin with a molecular weight of \\(x\\) grams per mole, where \\(1 \\le x \\le 280\\). Which statement is the best interpretation of the point \\((149.02, 186.05)\\)?</p>`,
    questionText: "Which statement is the best interpretation of the point \\((149.02, 186.05)\\)?",
    options: [
      { id: "A", text: "A normal paraffin with a molecular weight of 186.05 grams per mole has an estimated boiling point of 149.02 degrees Celsius." },
      { id: "B", text: "A normal paraffin with a molecular weight of 149.02 grams per mole has an estimated boiling point of 186.05 degrees Celsius." },
      { id: "C", text: "The minimum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole and an estimated boiling point of 186.05 degrees Celsius." },
      { id: "D", text: "The maximum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole and an estimated boiling point of 186.05 degrees Celsius." }
    ],
    correctAnswer: "B",
    explanation: "In the coordinate plane:\n- The horizontal axis \\(x\\) represents the molecular weight in grams per mole.\n- The vertical axis \\(y\\) represents the estimated boiling point in degrees Celsius.\n\nTherefore, the point \\((x, y) = (149.02, 186.05)\\) means that a normal paraffin with a molecular weight of 149.02 grams per mole has an estimated boiling point of 186.05 degrees Celsius."
  },
  {
    id: 109,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Polynomial Root Factor Theorem",
    questionText: "For the polynomial function \\(f\\), the graph of \\(y = f(x)\\) in the \\(xy\\)-plane passes through points \\((-5, 0)\\), \\((1, 0)\\), and \\((4, 0)\\). Which of the following must be a factor of \\(f(x)\\)?",
    options: [
      { id: "A", text: "\\(x + 1\\)" },
      { id: "B", text: "\\(x + 4\\)" },
      { id: "C", text: "\\(x - 1\\)" },
      { id: "D", text: "\\(x - 5\\)" }
    ],
    correctAnswer: "C",
    explanation: "By the Factor Theorem, if \\(f(1) = 0\\), then \\((x - 1)\\) must be a factor of \\(f(x)\\)."
  },
  {
    id: 110,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Linear Table Y-Intercept Constant b",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <table class="border-collapse border border-black font-serif text-center text-base">
        <thead>
          <tr class="border-b border-black">
            <th class="border-r border-black px-6 py-1.5 font-normal italic">\\(x\\)</th>
            <th class="px-6 py-1.5 font-normal italic">\\(g(x)\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="border-r border-black px-6 py-1.5">1</td>
            <td class="px-6 py-1.5">32</td>
          </tr>
          <tr class="border-b border-black">
            <td class="border-r border-black px-6 py-1.5">2</td>
            <td class="px-6 py-1.5">28</td>
          </tr>
          <tr class="border-b border-black">
            <td class="border-r border-black px-6 py-1.5">3</td>
            <td class="px-6 py-1.5">24</td>
          </tr>
          <tr>
            <td class="border-r border-black px-6 py-1.5">4</td>
            <td class="px-6 py-1.5">20</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    questionText: "For the linear function \\(g\\), the table shows four values of \\(x\\) and their corresponding values of \\(g(x)\\). The function can be written as \\(g(x) = mx + b\\), where \\(m\\) and \\(b\\) are constants. What is the value of \\(b\\)?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "16" },
      { id: "C", text: "32" },
      { id: "D", text: "36" }
    ],
    correctAnswer: "D",
    explanation: "For the linear function \\(g(x) = mx + b\\), we can first find the slope \\(m\\) using any two points from the table, such as \\((1, 32)\\) and \\((2, 28)\\):\n\\[m = \\frac{28 - 32}{2 - 1} = \\frac{-4}{1} = -4\\]\n\nNow, substitute \\(m = -4\\) and the point \\((1, 32)\\) into the function equation:\n\\[g(1) = -4(1) + b\\]\n\\[32 = -4 + b\\]\n\\[b = 32 + 4 = 36\\]\n\nTherefore, the value of \\(b\\) is **36** (Choice D)."
  },
  {
    id: 111,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Quadratic Table Form",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <table class="border-collapse border border-black font-serif text-center text-base">
        <tbody>
          <tr class="border-b border-black">
            <td class="border-r border-black px-6 py-1.5 italic font-normal">\\(x\\)</td>
            <td class="border-r border-black px-6 py-1.5">24</td>
            <td class="border-r border-black px-6 py-1.5">30</td>
            <td class="px-6 py-1.5">32</td>
          </tr>
          <tr>
            <td class="border-r border-black px-6 py-1.5 italic font-normal">\\(f(x)\\)</td>
            <td class="border-r border-black px-6 py-1.5">-8</td>
            <td class="border-r border-black px-6 py-1.5">-8</td>
            <td class="px-6 py-1.5">8</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    questionText: "For the quadratic function \\(f\\), the table shows three values of \\(x\\) and their corresponding values of \\(f(x)\\). Which equation defines \\(f\\)?",
    options: [
      { id: "A", text: "\\(f(x) = (x - 24)(x - 30) + 4\\)" },
      { id: "B", text: "\\(f(x) = (x - 24)(x - 30) - 8\\)" },
      { id: "C", text: "\\(f(x) = (x - 8)(x - 32) + 32\\)" },
      { id: "D", text: "\\(f(x) = (x - 8)(x - 32) - 32\\)" }
    ],
    correctAnswer: "B",
    explanation: "From the given table, we observe that \\(f(24) = -8\\) and \\(f(30) = -8\\). Because the quadratic function outputs \\(-8\\) at both \\(x = 24\\) and \\(x = 30\\), the equation can be expressed in the form:\n\\[f(x) = a(x - 24)(x - 30) - 8\\]\n\nLooking at the third given point, \\(f(32) = 8\\):\n\\[8 = a(32 - 24)(32 - 30) - 8\\]\n\\[8 = a(8)(2) - 8\\]\n\\[8 = 16a - 8\\]\n\\[16 = 16a \\implies a = 1\\]\n\nSubstituting \\(a = 1\\) yields:\n\\[f(x) = (x - 24)(x - 30) - 8\\]\n\nTherefore, Choice B correctly defines \\(f\\)."
  },
  {
    id: 112,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Star Cluster Mass Ratio",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="320" height="320" viewBox="0 0 320 320" class="max-w-full font-serif select-none">
        <!-- Y-Axis Title -->
        <text x="24" y="165" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90 24,165)">Number of K-type stars</text>

        <!-- Grid lines (every 10 units: 10 to 170) -->
        <g stroke="#000000" stroke-width="0.6" opacity="0.65">
          <!-- Vertical grid lines -->
          <line x1="91" y1="73" x2="91" y2="260" />
          <line x1="102" y1="73" x2="102" y2="260" />
          <line x1="113" y1="73" x2="113" y2="260" />
          <line x1="124" y1="73" x2="124" y2="260" />
          <line x1="135" y1="73" x2="135" y2="260" />
          <line x1="146" y1="73" x2="146" y2="260" />
          <line x1="157" y1="73" x2="157" y2="260" />
          <line x1="168" y1="73" x2="168" y2="260" />
          <line x1="179" y1="73" x2="179" y2="260" />
          <line x1="190" y1="73" x2="190" y2="260" />
          <line x1="201" y1="73" x2="201" y2="260" />
          <line x1="212" y1="73" x2="212" y2="260" />
          <line x1="223" y1="73" x2="223" y2="260" />
          <line x1="234" y1="73" x2="234" y2="260" />
          <line x1="245" y1="73" x2="245" y2="260" />
          <line x1="256" y1="73" x2="256" y2="260" />
          <line x1="267" y1="73" x2="267" y2="260" />

          <!-- Horizontal grid lines -->
          <line x1="80" y1="73" x2="267" y2="73" />
          <line x1="80" y1="84" x2="267" y2="84" />
          <line x1="80" y1="95" x2="267" y2="95" />
          <line x1="80" y1="106" x2="267" y2="106" />
          <line x1="80" y1="117" x2="267" y2="117" />
          <line x1="80" y1="128" x2="267" y2="128" />
          <line x1="80" y1="139" x2="267" y2="139" />
          <line x1="80" y1="150" x2="267" y2="150" />
          <line x1="80" y1="161" x2="267" y2="161" />
          <line x1="80" y1="172" x2="267" y2="172" />
          <line x1="80" y1="183" x2="267" y2="183" />
          <line x1="80" y1="194" x2="267" y2="194" />
          <line x1="80" y1="205" x2="267" y2="205" />
          <line x1="80" y1="216" x2="267" y2="216" />
          <line x1="80" y1="227" x2="267" y2="227" />
          <line x1="80" y1="238" x2="267" y2="238" />
          <line x1="80" y1="249" x2="267" y2="249" />
        </g>

        <!-- Axes with arrows -->
        <!-- X Axis -->
        <line x1="75" y1="260" x2="276" y2="260" stroke="#000000" stroke-width="1.8" />
        <polygon points="282,260 274,256 274,264" fill="#000000" />
        <text x="286" y="264" font-size="14" font-style="italic" fill="#000000">x</text>

        <!-- Y Axis -->
        <line x1="80" y1="265" x2="80" y2="55" stroke="#000000" stroke-width="1.8" />
        <polygon points="80,49 76,57 84,57" fill="#000000" />
        <text x="80" y="44" font-size="14" font-style="italic" text-anchor="middle" fill="#000000">y</text>

        <!-- Y-Axis Labels -->
        <text x="74" y="88" font-size="11" text-anchor="end" fill="#000000">160</text>
        <text x="74" y="110" font-size="11" text-anchor="end" fill="#000000">140</text>
        <text x="74" y="132" font-size="11" text-anchor="end" fill="#000000">120</text>
        <text x="74" y="154" font-size="11" text-anchor="end" fill="#000000">100</text>
        <text x="74" y="176" font-size="11" text-anchor="end" fill="#000000">80</text>
        <text x="74" y="198" font-size="11" text-anchor="end" fill="#000000">60</text>
        <text x="74" y="220" font-size="11" text-anchor="end" fill="#000000">40</text>
        <text x="74" y="242" font-size="11" text-anchor="end" fill="#000000">20</text>
        <text x="74" y="272" font-size="12" font-style="italic" text-anchor="end" fill="#000000">O</text>

        <!-- X-Axis Labels -->
        <text x="102" y="274" font-size="11" text-anchor="middle" fill="#000000">20</text>
        <text x="124" y="274" font-size="11" text-anchor="middle" fill="#000000">40</text>
        <text x="146" y="274" font-size="11" text-anchor="middle" fill="#000000">60</text>
        <text x="168" y="274" font-size="11" text-anchor="middle" fill="#000000">80</text>
        <text x="190" y="274" font-size="11" text-anchor="middle" fill="#000000">100</text>
        <text x="212" y="274" font-size="11" text-anchor="middle" fill="#000000">120</text>
        <text x="234" y="274" font-size="11" text-anchor="middle" fill="#000000">140</text>
        <text x="256" y="274" font-size="11" text-anchor="middle" fill="#000000">160</text>

        <!-- X-Axis Title -->
        <text x="175" y="296" font-size="13" fill="#000000" text-anchor="middle">Number of M-type stars</text>

        <!-- Linear Function Line from (0, ~136.3) to (~157.7, 0) -->
        <line x1="80" y1="110" x2="253.5" y2="260" stroke="#000000" stroke-width="2.4" stroke-linecap="round" />
      </svg>
    </div>
    <p class="mb-3">A certain open star cluster contains M-type stars and K-type stars. The estimated total mass of M-type and K-type stars in this open star cluster is 127,882 quettagrams. The graph shown models the possible combinations of the number of M-type stars, \\(x\\), and K-type stars, \\(y\\), that could be in this open star cluster if all the M-type stars have the same estimated mass and all the K-type stars have the same estimated mass.</p>`,
    questionText: "Based on the graph, which of the following is closest to the estimated mass, in quettagrams, of each M-type star in this cluster?",
    options: [
      { id: "A", text: "811" },
      { id: "B", text: "938" },
      { id: "C", text: "51,904" },
      { id: "D", text: "75,978" }
    ],
    correctAnswer: "A",
    explanation: "From the graph, the horizontal axis \\(x\\) represents the number of M-type stars and the vertical axis \\(y\\) represents the number of K-type stars.\n\nWhen \\(y = 0\\) (there are no K-type stars in the cluster), all 127,882 quettagrams of mass come solely from M-type stars. Looking at the \\(x\\)-intercept on the graph, the number of M-type stars is slightly less than 160 (approximately 157.7 stars).\n\nTo find the estimated mass of each M-type star:\n\\[\\text{Mass per M-type star} \\approx \\frac{127{,}882}{157.7} \\approx 810.9 \\text{ quettagrams}\\]\n\nAmong the choices, **811** (Choice A) is the closest."
  },
  {
    id: 113,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Fractional Exponents Variable Solvability",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center text-center text-xl font-serif">
      <div class="py-2">\\[\\sqrt[3]{p^2} = t^{\\frac{9}{7}}\\]</div>
    </div>`,
    questionText: "In the given equation, \\(p > 1\\) and \\(t > 1\\). If \\(t = p^{3n - 1}\\), where \\(n\\) is a constant, what is the value of \\(n\\)?",
    options: [],
    correctAnswer: ".5061; .5062; 41/81",
    explanation: "Given the equation:\n\\[\\sqrt[3]{p^2} = t^{\\frac{9}{7}}\\]\n\nRewrite the left side using fractional exponents:\n\\[p^{\\frac{2}{3}} = t^{\\frac{9}{7}}\\]\n\nRaise both sides to the reciprocal power of \\(\\frac{7}{9}\\) to solve for \\(t\\):\n\\[t = \\left(p^{\\frac{2}{3}}\\right)^{\\frac{7}{9}} = p^{\\frac{2}{3} \\cdot \\frac{7}{9}} = p^{\\frac{14}{27}}\\]\n\nWe are given that \\(t = p^{3n - 1}\\). Setting the exponents equal:\n\\[3n - 1 = \\frac{14}{27}\\]\n\\[3n = 1 + \\frac{14}{27} = \\frac{41}{27}\\]\n\\[n = \\frac{41}{27 \\cdot 3} = \\frac{41}{81} \\approx 0.50617\\dots\\]\n\nTherefore, the value of \\(n\\) is **41/81** (or **.5061**, **.5062**)."
  },
  {
    id: 114,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Percentage Change Multi-Step Calculation",
    questionText: "The number \\(a\\) is 55% less than the number \\(b\\). The number \\(b\\) is 320% greater than 160. What is the value of \\(a\\)?",
    options: [],
    correctAnswer: "1512/5; 302.4",
    explanation: "\\(b = 160 + (3.20 \\times 160) = 160(4.20) = 672\\).\n\\[a = 672 \\times (1 - 0.55) = 672 \\times 0.45 = 302.4 = \\frac{1512}{5}\\]"
  },
  {
    id: 115,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Vertex Form Maximum Value Display",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center text-center text-xl font-serif">
      <div class="py-2">\\[f(x) = -6x^2 + 60x - 126\\]</div>
    </div>`,
    questionText: "The function \\(f\\) is defined by the given equation. Which of the following equivalent forms of the equation displays the maximum value of the function as a constant or coefficient?",
    options: [
      { id: "A", text: "\\(f(x) = -6x^2 + 42x + 18x - 126\\)" },
      { id: "B", text: "\\(f(x) = -6x(x - 7) + 18(x - 7)\\)" },
      { id: "C", text: "\\(f(x) = -6(x - 5)^2 + 24\\)" },
      { id: "D", text: "\\(f(x) = -6(x - 7)(x - 3)\\)" }
    ],
    correctAnswer: "C",
    explanation: "The vertex form of a quadratic function is \\(f(x) = a(x - h)^2 + k\\), where \\((h, k)\\) represents the coordinates of the vertex.\n\nSince the coefficient \\(a = -6\\) is negative, the parabola opens downward, meaning the vertex is the absolute maximum point of the parabola, and the value \\(k\\) is the maximum value of the function.\n\nTo convert \\(f(x) = -6x^2 + 60x - 126\\) into vertex form by completing the square:\n\\[f(x) = -6(x^2 - 10x) - 126\\]\n\\[f(x) = -6((x - 5)^2 - 25) - 126\\]\n\\[f(x) = -6(x - 5)^2 + 150 - 126\\]\n\\[f(x) = -6(x - 5)^2 + 24\\]\n\nIn this form, the maximum value of the function (24) is explicitly displayed as a constant. Therefore, **Choice C** is correct."
  },
  {
    id: 116,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    passageTitle: "Similar Triangles Segment Length",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center">
      <svg width="300" height="180" viewBox="0 0 300 180" class="max-w-full font-serif select-none">
        <!-- Segments -->
        <line x1="70" y1="42" x2="40" y2="150" stroke="#000000" stroke-width="1.8" />
        <line x1="70" y1="42" x2="260" y2="136" stroke="#000000" stroke-width="1.8" />
        <line x1="40" y1="150" x2="230" y2="38" stroke="#000000" stroke-width="1.8" />
        <line x1="230" y1="38" x2="260" y2="136" stroke="#000000" stroke-width="1.8" />

        <!-- Angle arcs and labels -->
        <!-- Angle at W -->
        <path d="M 64 63 A 22 22 0 0 0 90 52" fill="none" stroke="#000000" stroke-width="1.2" />
        <text x="73" y="58" font-size="14" font-style="italic" fill="#000000">a°</text>

        <!-- Angle at Y -->
        <path d="M 211 49 A 22 22 0 0 0 236 59" fill="none" stroke="#000000" stroke-width="1.2" />
        <text x="226" y="54" font-size="14" font-style="italic" text-anchor="end" fill="#000000">a°</text>

        <!-- Vertex and Point Labels -->
        <text x="70" y="28" font-size="16" font-style="italic" text-anchor="middle" fill="#000000">W</text>
        <text x="35" y="172" font-size="16" font-style="italic" text-anchor="middle" fill="#000000">X</text>
        <text x="230" y="24" font-size="16" font-style="italic" text-anchor="middle" fill="#000000">Y</text>
        <text x="265" y="156" font-size="16" font-style="italic" text-anchor="middle" fill="#000000">Z</text>
        <text x="153" y="106" font-size="16" font-style="italic" text-anchor="middle" fill="#000000">Q</text>
      </svg>
      <div class="mt-2 text-sm font-serif text-black">Note: Figure not drawn to scale.</div>
    </div>`,
    questionText: "In the figure shown, \\(\\overline{WZ}\\) and \\(\\overline{XY}\\) intersect at point \\(Q\\), \\(YQ = 21\\), \\(WQ = 70\\), \\(WX = 60\\), and \\(XQ = 120\\). What is the length of \\(\\overline{YZ}\\)?",
    options: [
      { id: "A", text: "18" },
      { id: "B", text: "36" },
      { id: "C", text: "120" },
      { id: "D", text: "200" }
    ],
    correctAnswer: "A",
    explanation: "In triangles \\(\\triangle WQX\\) and \\(\\triangle YQZ\\):\n1. \\(\\angle W = \\angle Y = a^\\circ\\) (given).\n2. \\(\\angle WQX = \\angle YQZ\\) (vertical angles are congruent).\n\nBy Angle-Angle (AA) similarity criterion, \\(\\triangle WQX \\sim \\triangle YQZ\\).\n\nThe corresponding sides are proportional:\n\\[\\frac{YZ}{WX} = \\frac{YQ}{WQ}\\]\n\nSubstitute the given values (\\(WX = 60\\), \\(WQ = 70\\), \\(YQ = 21\\)):\n\\[\\frac{YZ}{60} = \\frac{21}{70}\\]\n\\[\\frac{YZ}{60} = \\frac{3}{10}\\]\n\\[YZ = 60 \\cdot \\frac{3}{10} = 18\\]\n\nTherefore, the length of \\(\\overline{YZ}\\) is **18** (Choice A)."
  },
  {
    id: 117,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    passageTitle: "Distinct Real Solutions Count",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-bold ">
      \\(52(x^3 + 64)(x^4 - 81) = 0\\)
    </div>
    <p class="mt-3">How many distinct real solutions does the given equation have?</p>`,
    options: [
      { id: "A", text: "Exactly two" },
      { id: "B", text: "Exactly three" },
      { id: "C", text: "Exactly five" },
      { id: "D", text: "Exactly seven" }
    ],
    correctAnswer: "B",
    explanation: "\\(x^3 + 64 = 0\\) gives \\(x = -4\\) (1 real solution). \\(x^4 - 81 = 0\\) gives \\(x^2 = 9 \\implies x = 3\\) and \\(x = -3\\) (2 real solutions). Total = 1 + 2 = 3 distinct real solutions."
  },
  {
    id: 118,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Histogram Data Set Comparison",
    passageHtml: `<div class="my-4 flex flex-col items-center justify-center select-none">
      <svg width="280" height="190" viewBox="0 0 280 190" class="max-w-full font-serif">
        <!-- Horizontal Grid Lines -->
        <line x1="85" y1="25" x2="242" y2="25" stroke="#000000" stroke-width="0.9" />
        <line x1="85" y1="42.5" x2="242" y2="42.5" stroke="#000000" stroke-width="0.9" />
        <line x1="85" y1="60" x2="242" y2="60" stroke="#000000" stroke-width="0.9" />
        <line x1="85" y1="77.5" x2="242" y2="77.5" stroke="#000000" stroke-width="0.9" />
        <line x1="85" y1="95" x2="242" y2="95" stroke="#000000" stroke-width="0.9" />
        <line x1="85" y1="112.5" x2="242" y2="112.5" stroke="#000000" stroke-width="0.9" />

        <!-- Histogram Bars for Data Set A:
             30-40: 4, 40-50: 7, 50-60: 27, 60-70: 12 (Total = 50) -->
        <!-- 30 to 40 (Frequency = 4) -->
        <rect x="151" y="116" width="22" height="14" fill="#B0B4B8" stroke="#000000" stroke-width="1.1" />
        <!-- 40 to 50 (Frequency = 7) -->
        <rect x="173" y="105.5" width="22" height="24.5" fill="#B0B4B8" stroke="#000000" stroke-width="1.1" />
        <!-- 50 to 60 (Frequency = 27) -->
        <rect x="195" y="35.5" width="22" height="94.5" fill="#B0B4B8" stroke="#000000" stroke-width="1.1" />
        <!-- 60 to 70 (Frequency = 12) -->
        <rect x="217" y="88" width="22" height="42" fill="#B0B4B8" stroke="#000000" stroke-width="1.1" />

        <!-- Axes -->
        <!-- X-Axis Line -->
        <line x1="80" y1="130" x2="244" y2="130" stroke="#000000" stroke-width="1.2" />
        <!-- Y-Axis Line -->
        <line x1="85" y1="20" x2="85" y2="135" stroke="#000000" stroke-width="1.2" />

        <!-- Y-Axis Ticks -->
        <line x1="80" y1="25" x2="85" y2="25" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="42.5" x2="85" y2="42.5" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="60" x2="85" y2="60" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="77.5" x2="85" y2="77.5" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="95" x2="85" y2="95" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="112.5" x2="85" y2="112.5" stroke="#000000" stroke-width="1.1" />
        <line x1="80" y1="130" x2="85" y2="130" stroke="#000000" stroke-width="1.1" />

        <!-- X-Axis Ticks -->
        <line x1="85" y1="126" x2="85" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="107" y1="126" x2="107" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="129" y1="126" x2="129" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="151" y1="126" x2="151" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="173" y1="126" x2="173" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="195" y1="126" x2="195" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="217" y1="126" x2="217" y2="134" stroke="#000000" stroke-width="1.1" />
        <line x1="239" y1="126" x2="239" y2="134" stroke="#000000" stroke-width="1.1" />

        <!-- Y-Axis Labels -->
        <text x="75" y="28.5" font-size="11.5" text-anchor="end" fill="#000000">30</text>
        <text x="75" y="46" font-size="11.5" text-anchor="end" fill="#000000">25</text>
        <text x="75" y="63.5" font-size="11.5" text-anchor="end" fill="#000000">20</text>
        <text x="75" y="81" font-size="11.5" text-anchor="end" fill="#000000">15</text>
        <text x="75" y="98.5" font-size="11.5" text-anchor="end" fill="#000000">10</text>
        <text x="75" y="116" font-size="11.5" text-anchor="end" fill="#000000">5</text>
        <text x="75" y="133.5" font-size="11.5" text-anchor="end" fill="#000000">0</text>

        <!-- Y-Axis Title -->
        <text x="-77.5" y="48" transform="rotate(-90)" font-size="13" text-anchor="middle" fill="#000000">Frequency</text>

        <!-- X-Axis Numbers -->
        <text x="85" y="146" font-size="11.5" text-anchor="middle" fill="#000000">0</text>
        <text x="107" y="146" font-size="11.5" text-anchor="middle" fill="#000000">10</text>
        <text x="129" y="146" font-size="11.5" text-anchor="middle" fill="#000000">20</text>
        <text x="151" y="146" font-size="11.5" text-anchor="middle" fill="#000000">30</text>
        <text x="173" y="146" font-size="11.5" text-anchor="middle" fill="#000000">40</text>
        <text x="195" y="146" font-size="11.5" text-anchor="middle" fill="#000000">50</text>
        <text x="217" y="146" font-size="11.5" text-anchor="middle" fill="#000000">60</text>
        <text x="239" y="146" font-size="11.5" text-anchor="middle" fill="#000000">70</text>

        <!-- X-Axis Title -->
        <text x="162" y="166" font-size="13" text-anchor="middle" fill="#000000">Number of points</text>
      </svg>
    </div>
    <p class="mb-3 font-serif">The histogram summarizes data set A, which represents the number of points per player earned by 50 players of a game. A new player earns 18 points playing the game, and this number of points is added to data set A to create data set B with 51 values. Which of the following must be true?</p>
    <div class="my-4 space-y-2.5 ml-2 sm:ml-4 font-serif text-[15px]">
      <div class="flex items-start">
        <span class="w-8 shrink-0 font-serif font-medium">I.</span>
        <span>The median number of points per player for data set B is less than the median number of points per player for data set A.</span>
      </div>
      <div class="flex items-start">
        <span class="w-8 shrink-0 font-serif font-medium">II.</span>
        <span>The mean number of points per player for data set B is less than the mean number of points per player for data set A.</span>
      </div>
    </div>`,
    questionText: "Which of the following must be true?",
    options: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "I and II" },
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "B",
    explanation: "1. **Median Analysis:**\n- In data set A (50 values), the median is the average of the 25th and 26th values.\n- Cumulative frequency from the histogram:\n  - 30–40: 4 values (cum: 4)\n  - 40–50: 7 values (cum: 11)\n  - 50–60: 27 values (cum: 38)\n  - 60–70: 12 values (cum: 50)\n- The 25th and 26th values are both within the 50–60 interval.\n- In data set B (51 values), adding 18 (in 10–20 interval) shifts the values. The new median is the 26th value.\n- Counting for data set B: 1 value at 18 (cum: 1), 4 in 30–40 (cum: 5), 7 in 40–50 (cum: 12), and 27 in 50–60 (cum: 39).\n- The 26th value still lies in the 50–60 interval. It is possible for the median to remain unchanged (for example, if values in that interval are identical). Therefore, Statement I is not necessarily true.\n\n2. **Mean Analysis:**\n- All 50 players in data set A earned 30 or more points (mean > 50).\n- Adding 18 points (which is strictly less than every value in data set A and well below its mean) must decrease the overall mean.\n- Therefore, the mean of data set B is strictly less than the mean of data set A. Statement II must be true.\n\nHence, **Choice B (II only)** is correct."
  },
  {
    id: 119,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    passageTitle: "Right Triangle Altitude Tangent Relation",
    questionText: "In triangle \\(XYZ\\), the measure of angle \\(X\\) is \\(90^\\circ\\). Point \\(W\\) lies on segment \\(YZ\\), and segment \\(WX\\) is perpendicular to segment \\(YZ\\). The length of segment \\(WY\\) is \\(572\\), and the length of segment \\(WX\\) is \\(429\\). What is the value of \\(\\tan Z\\)?",
    options: [
      { id: "A", text: "\\(\\frac{3}{5}\\)" },
      { id: "B", text: "\\(\\frac{3}{4}\\)" },
      { id: "C", text: "\\(\\frac{4}{5}\\)" },
      { id: "D", text: "\\(\\frac{4}{3}\\)" }
    ],
    correctAnswer: "D",
    explanation: "In right triangle \\(\\triangle XYZ\\), \\(\\angle X = 90^\\circ\\), so \\(\\overline{YZ}\\) is the hypotenuse.\n\nSince \\(\\overline{WX} \\perp \\overline{YZ}\\), \\(\\triangle WXY\\) and \\(\\triangle WZX\\) are right triangles with \\(\\angle XWY = \\angle XWZ = 90^\\circ\\).\n\nIn right triangle \\(\\triangle WXY\\):\n\\[\\tan Y = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{WX}{WY} = \\frac{429}{572}\\]\n\nSimplifying by dividing numerator and denominator by 143:\n\\[429 = 143 \\times 3\\]\n\\[572 = 143 \\times 4\\]\n\\[\\tan Y = \\frac{3}{4}\\]\n\nIn right triangle \\(\\triangle XYZ\\), the acute angles \\(\\angle Y\\) and \\(\\angle Z\\) are complementary (\\(\\angle Y + \\angle Z = 90^\\circ\\)).\n\nFor complementary angles in a right triangle:\n\\[\\tan Z = \\cot Y = \\frac{1}{\\tan Y} = \\frac{1}{\\frac{3}{4}} = \\frac{4}{3}\\]\n\nAlternatively, using similar triangles (\\(\\triangle WZX \\sim \\triangle WXY\\)):\n\\[\\frac{WZ}{WX} = \\frac{WX}{WY} \\implies WZ = \\frac{WX^2}{WY} = \\frac{429^2}{572} = \\frac{(3 \\times 143)^2}{4 \\times 143} = \\frac{9 \\times 143}{4}\\]\n\\[\\tan Z = \\frac{WX}{WZ} = \\frac{3 \\times 143}{\\frac{9 \\times 143}{4}} = \\frac{3 \\times 4}{9} = \\frac{4}{3}\\]\n\nTherefore, the value of \\(\\tan Z\\) is **\\(\\frac{4}{3}\\)** (Choice D)."
  },
  {
    id: 120,
    type: "Math",
    module: 2,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Unit Conversion Area Conversion",
    questionText: "An area of 46.00 square nautical miles is equivalent to \\(k\\) square kilometers. To the nearest tenth, what is the value of \\(k\\)? (1 nautical mile = 1.852 kilometers)",
    options: [],
    correctAnswer: "157.8; 789/5",
    explanation: "Given that \\(1\\text{ nautical mile} = 1.852\\text{ kilometers}\\), determine the area conversion factor by squaring both sides:\n\\[1\\text{ square nautical mile} = (1.852\\text{ km})^2 = 3.429904\\text{ square kilometers}\\]\n\nConvert \\(46.00\\) square nautical miles to square kilometers:\n\\[k = 46.00 \\times 3.429904 = 157.775584\\]\n\nRounding to the nearest tenth:\n\\[k \\approx 157.8 = \\frac{789}{5}\\]\n\nTherefore, the value of \\(k\\) is **157.8** (or **789/5**)."
  }
];
