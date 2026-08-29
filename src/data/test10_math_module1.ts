import { Question } from '../types';

export const TEST2_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 267,
    type: "Math",
    module: 1,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Used Car Lot Model Year Line Graph",
    passageHtml: `<p class="mb-4 text-black font-serif leading-relaxed text-[15px] md:text-[16px]">The line graph shows the percent of cars for sale at a used car lot on a given day by model year.</p>
    <div class="my-3 flex flex-col items-center justify-center">
      <svg width="340" height="220" viewBox="0 0 340 220" class="font-sans">
        <!-- Solid Grid lines (Horizontal from 0% to 15%) -->
        <path d="M 60 25 L 310 25 M 60 34 L 310 34 M 60 43 L 310 43 M 60 52 L 310 52 M 60 61 L 310 61 M 60 70 L 310 70 M 60 79 L 310 79 M 60 88 L 310 88 M 60 97 L 310 97 M 60 106 L 310 106 M 60 115 L 310 115 M 60 124 L 310 124 M 60 133 L 310 133 M 60 142 L 310 142 M 60 151 L 310 151 M 60 160 L 310 160" stroke="#000000" stroke-width="0.75" />

        <!-- Solid Grid lines (Vertical for years 2010 to 2019 + boundary) -->
        <path d="M 60 25 L 60 160 M 70 25 L 70 160 M 94 25 L 94 160 M 118 25 L 118 160 M 142 25 L 142 160 M 166 25 L 166 160 M 190 25 L 190 160 M 214 25 L 214 160 M 238 25 L 238 160 M 262 25 L 262 160 M 286 25 L 286 160 M 310 25 L 310 160" stroke="#000000" stroke-width="0.75" />

        <!-- Axes Frame -->
        <rect x="60" y="25" width="250" height="135" fill="none" stroke="#000000" stroke-width="1.5" />

        <!-- Y Axis Ticks & Labels -->
        <text x="52" y="164" text-anchor="end" font-size="10" fill="#000000">0%</text>
        <text x="52" y="119" text-anchor="end" font-size="10" fill="#000000">5%</text>
        <text x="52" y="74" text-anchor="end" font-size="10" fill="#000000">10%</text>
        <text x="52" y="29" text-anchor="end" font-size="10" fill="#000000">15%</text>

        <!-- Y Axis Title -->
        <text x="18" y="92.5" text-anchor="middle" font-size="10" font-weight="bold" fill="#000000" transform="rotate(-90 18 92.5)">Percent of cars for sale</text>

        <!-- Line Points: 2010:12%, 2011:12%, 2012:12%, 2013:8%, 2014:4%, 2015:9%, 2016:10%, 2017:10%, 2018:11%, 2019:11% -->
        <polyline points="70,52 94,52 118,52 142,88 166,124 190,79 214,70 238,70 262,61 286,61" fill="none" stroke="#000000" stroke-width="2.5" />
        
        <!-- Data Dots -->
        <circle cx="70" cy="52" r="3.5" fill="#000000" />
        <circle cx="94" cy="52" r="3.5" fill="#000000" />
        <circle cx="118" cy="52" r="3.5" fill="#000000" />
        <circle cx="142" cy="88" r="3.5" fill="#000000" />
        <circle cx="166" cy="124" r="3.5" fill="#000000" />
        <circle cx="190" cy="79" r="3.5" fill="#000000" />
        <circle cx="214" cy="70" r="3.5" fill="#000000" />
        <circle cx="238" cy="70" r="3.5" fill="#000000" />
        <circle cx="262" cy="61" r="3.5" fill="#000000" />
        <circle cx="286" cy="61" r="3.5" fill="#000000" />

        <!-- X Labels -->
        <text x="70" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 70 175)">2010</text>
        <text x="94" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 94 175)">2011</text>
        <text x="118" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 118 175)">2012</text>
        <text x="142" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 142 175)">2013</text>
        <text x="166" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 166 175)">2014</text>
        <text x="190" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 190 175)">2015</text>
        <text x="214" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 214 175)">2016</text>
        <text x="238" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 238 175)">2017</text>
        <text x="262" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 262 175)">2018</text>
        <text x="286" y="175" text-anchor="end" font-size="9" fill="#000000" transform="rotate(-45 286 175)">2019</text>
      </svg>
      <div class="mt-2 text-xs font-semibold text-black">Model year</div>
    </div>`,
    questionText: "For what model year is the percent of cars for sale the smallest?",
    options: [
      { id: "A", text: "2012" },
      { id: "B", text: "2013" },
      { id: "C", text: "2014" },
      { id: "D", text: "2015" }
    ],
    correctAnswer: "C",
    explanation: "The lowest point on the line graph occurs at model year 2014, where the percentage drops to approximately 4%."
  },
  {
    id: 268,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "System of Linear Equations Graph",
    passageHtml: `<div class="my-3 flex flex-col items-center justify-center">
      <svg width="300" height="300" viewBox="0 0 300 300" class="font-sans select-none bg-white">
        <!-- Solid Grid lines (-6 to 6, step = 18px, origin at 150, 150) -->
        <path d="M 42 42 L 258 42 M 42 60 L 258 60 M 42 78 L 258 78 M 42 96 L 258 96 M 42 114 L 258 114 M 42 132 L 258 132 M 42 150 L 258 150 M 42 168 L 258 168 M 42 186 L 258 186 M 42 204 L 258 204 M 42 222 L 258 222 M 42 240 L 258 240 M 42 258 L 258 258" stroke="#000000" stroke-width="0.8" />
        <path d="M 42 42 L 42 258 M 60 42 L 60 258 M 78 42 L 78 258 M 96 42 L 96 258 M 114 42 L 114 258 M 132 42 L 132 258 M 150 42 L 150 258 M 168 42 L 168 258 M 186 42 L 186 258 M 204 42 L 204 258 M 222 42 L 222 258 M 240 42 L 240 258 M 258 42 L 258 258" stroke="#000000" stroke-width="0.8" />

        <!-- Main Axes with Arrows -->
        <line x1="32" y1="150" x2="274" y2="150" stroke="#000000" stroke-width="1.8" />
        <polygon points="280,150 272,146 272,154" fill="#000000" />

        <line x1="150" y1="268" x2="150" y2="26" stroke="#000000" stroke-width="1.8" />
        <polygon points="150,20 146,28 154,28" fill="#000000" />

        <!-- Axis Labels -->
        <text x="283" y="154" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-style="italic" font-weight="bold" fill="#000000">x</text>
        <text x="150" y="14" font-family="Georgia, 'Times New Roman', serif" text-anchor="middle" font-size="12" font-style="italic" font-weight="bold" fill="#000000">y</text>
        <text x="140" y="146" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-style="italic" fill="#000000">O</text>

        <!-- X Axis Tick Numbers (-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6) -->
        <text x="42" y="163" text-anchor="middle" font-size="10" fill="#000000">−6</text>
        <text x="60" y="163" text-anchor="middle" font-size="10" fill="#000000">−5</text>
        <text x="78" y="163" text-anchor="middle" font-size="10" fill="#000000">−4</text>
        <text x="96" y="163" text-anchor="middle" font-size="10" fill="#000000">−3</text>
        <text x="114" y="163" text-anchor="middle" font-size="10" fill="#000000">−2</text>
        <text x="132" y="163" text-anchor="middle" font-size="10" fill="#000000">−1</text>
        <text x="168" y="163" text-anchor="middle" font-size="10" fill="#000000">1</text>
        <text x="186" y="163" text-anchor="middle" font-size="10" fill="#000000">2</text>
        <text x="204" y="163" text-anchor="middle" font-size="10" fill="#000000">3</text>
        <text x="222" y="163" text-anchor="middle" font-size="10" fill="#000000">4</text>
        <text x="240" y="163" text-anchor="middle" font-size="10" fill="#000000">5</text>
        <text x="258" y="163" text-anchor="middle" font-size="10" fill="#000000">6</text>

        <!-- Y Axis Tick Numbers (6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6) -->
        <text x="144" y="46" text-anchor="end" font-size="10" fill="#000000">6</text>
        <text x="144" y="64" text-anchor="end" font-size="10" fill="#000000">5</text>
        <text x="144" y="82" text-anchor="end" font-size="10" fill="#000000">4</text>
        <text x="144" y="100" text-anchor="end" font-size="10" fill="#000000">3</text>
        <text x="144" y="118" text-anchor="end" font-size="10" fill="#000000">2</text>
        <text x="144" y="136" text-anchor="end" font-size="10" fill="#000000">1</text>
        <text x="144" y="172" text-anchor="end" font-size="10" fill="#000000">−1</text>
        <text x="144" y="190" text-anchor="end" font-size="10" fill="#000000">−2</text>
        <text x="144" y="208" text-anchor="end" font-size="10" fill="#000000">−3</text>
        <text x="144" y="226" text-anchor="end" font-size="10" fill="#000000">−4</text>
        <text x="144" y="244" text-anchor="end" font-size="10" fill="#000000">−5</text>
        <text x="144" y="262" text-anchor="end" font-size="10" fill="#000000">−6</text>

        <!-- Line 1: y = -0.75x - 2, passes through (-6, 2.5) [42, 105], (0, -2) [150, 186], (4, -5) [222, 240], (5.5, -6.125) [249, 260] -->
        <line x1="36" y1="101" x2="252" y2="263" stroke="#000000" stroke-width="2.3" stroke-linecap="round" />

        <!-- Line 2: y = -2x + 3, passes through (-1.5, 6) [123, 42], (0, 3) [150, 96], (1.5, 0) [177, 150], (4, -5) [222, 240], (4.5, -6) [231, 258] -->
        <line x1="120" y1="36" x2="234" y2="264" stroke="#000000" stroke-width="2.3" stroke-linecap="round" />
      </svg>
    </div>
    <p class="mt-4 text-black font-serif leading-relaxed text-[15px] md:text-[16px]">The graph of a system of linear equations is shown.</p>`,
    questionText: "What is the solution (<i>x</i>, <i>y</i>) to the system?",
    options: [
      { id: "A", text: "(4, -5)" },
      { id: "B", text: "(0, 3)" },
      { id: "C", text: "(0, -2)" },
      { id: "D", text: "(-2, 3)" }
    ],
    correctAnswer: "A",
    explanation: "The solution to a system of linear equations is the point where the two lines intersect. Looking at the grid, the two lines intersect at x = 4 and y = -5, which corresponds to the point (4, -5)."
  },
  {
    id: 269,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Surfboard Rental Cost Inequality",
    questionText: "The total cost, in dollars, to rent a surfboard consists of a $25 service fee and a $10 per hour rental fee. A person rents a surfboard for \\(t\\) hours and intends to spend a maximum of $75 to rent the surfboard. Which inequality represents this situation?",
    options: [
      { id: "A", text: "\\(10t \\le 75\\)" },
      { id: "B", text: "\\(10 + 25t \\le 75\\)" },
      { id: "C", text: "\\(25t \\le 75\\)" },
      { id: "D", text: "\\(25 + 10t \\le 75\\)" }
    ],
    correctAnswer: "D",
    explanation: "The total cost is the flat fee of $25 plus $10 times the number of hours \\(t\\), which is \\(25 + 10t\\). Spending a maximum of $75 means \\(25 + 10t \\le 75\\)."
  },
  {
    id: 270,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Vertical Translation of Quadratic Graph",
    passageHtml: `<p class="mb-4 text-black font-serif leading-relaxed text-[15px] md:text-[16px]">The graph shown will be translated up 4 units. Which of the following will be the resulting graph?</p>
    <div class="my-3 flex flex-col items-center justify-center">
      <svg width="260" height="220" viewBox="0 0 260 220" class="font-sans">
        <!-- Solid Grid lines -->
        <path d="M 32 30 L 240 30 M 32 43 L 240 43 M 32 56 L 240 56 M 32 69 L 240 69 M 32 82 L 240 82 M 32 95 L 240 95 M 32 108 L 240 108 M 32 121 L 240 121 M 32 134 L 240 134 M 32 147 L 240 147 M 32 160 L 240 160 M 32 173 L 240 173 M 32 186 L 240 186 M 32 199 L 240 199" stroke="#000000" stroke-width="0.75" />
        <path d="M 32 30 L 32 199 M 45 30 L 45 199 M 58 30 L 58 199 M 71 30 L 71 199 M 84 30 L 84 199 M 97 30 L 97 199 M 110 30 L 110 199 M 123 30 L 123 199 M 136 30 L 136 199 M 149 30 L 149 199 M 162 30 L 162 199 M 175 30 L 175 199 M 188 30 L 188 199 M 201 30 L 201 199 M 214 30 L 214 199 M 227 30 L 227 199 M 240 30 L 240 199" stroke="#000000" stroke-width="0.75" />

        <!-- Axes (Origin at 110, 95) -->
        <line x1="20" y1="95" x2="250" y2="95" stroke="#000000" stroke-width="1.8" />
        <polygon points="255,95 248,91 248,99" fill="#000000" />

        <line x1="110" y1="208" x2="110" y2="15" stroke="#000000" stroke-width="1.8" />
        <polygon points="110,10 106,17 114,17" fill="#000000" />

        <!-- Axis Labels -->
        <text x="257" y="99" font-size="11" font-style="italic" font-weight="bold" fill="#000000">x</text>
        <text x="110" y="8" text-anchor="middle" font-size="11" font-style="italic" font-weight="bold" fill="#000000">y</text>
        <text x="103" y="91" font-size="10" font-style="italic" fill="#000000">O</text>

        <!-- X Tick Numbers -->
        <text x="32" y="105" text-anchor="middle" font-size="9" fill="#000000">−6</text>
        <text x="58" y="105" text-anchor="middle" font-size="9" fill="#000000">−4</text>
        <text x="84" y="105" text-anchor="middle" font-size="9" fill="#000000">−2</text>
        <text x="136" y="105" text-anchor="middle" font-size="9" fill="#000000">2</text>
        <text x="162" y="105" text-anchor="middle" font-size="9" fill="#000000">4</text>
        <text x="188" y="105" text-anchor="middle" font-size="9" fill="#000000">6</text>
        <text x="214" y="105" text-anchor="middle" font-size="9" fill="#000000">8</text>
        <text x="240" y="105" text-anchor="middle" font-size="9" fill="#000000">10</text>

        <!-- Y Tick Numbers -->
        <text x="106" y="46" text-anchor="end" font-size="9" fill="#000000">4</text>
        <text x="106" y="72" text-anchor="end" font-size="9" fill="#000000">2</text>
        <text x="106" y="124" text-anchor="end" font-size="9" fill="#000000">−2</text>
        <text x="106" y="150" text-anchor="end" font-size="9" fill="#000000">−4</text>
        <text x="106" y="176" text-anchor="end" font-size="9" fill="#000000">−6</text>
        <text x="106" y="202" text-anchor="end" font-size="9" fill="#000000">−8</text>

        <!-- Ticks on Axes -->
        <line x1="32" y1="93" x2="32" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="58" y1="93" x2="58" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="84" y1="93" x2="84" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="136" y1="93" x2="136" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="162" y1="93" x2="162" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="188" y1="93" x2="188" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="214" y1="93" x2="214" y2="97" stroke="#000000" stroke-width="1.2" />
        <line x1="240" y1="93" x2="240" y2="97" stroke="#000000" stroke-width="1.2" />

        <line x1="108" y1="43" x2="112" y2="43" stroke="#000000" stroke-width="1.2" />
        <line x1="108" y1="69" x2="112" y2="69" stroke="#000000" stroke-width="1.2" />
        <line x1="108" y1="121" x2="112" y2="121" stroke="#000000" stroke-width="1.2" />
        <line x1="108" y1="147" x2="112" y2="147" stroke="#000000" stroke-width="1.2" />
        <line x1="108" y1="173" x2="112" y2="173" stroke="#000000" stroke-width="1.2" />
        <line x1="108" y1="199" x2="112" y2="199" stroke="#000000" stroke-width="1.2" />

        <!-- Parabola y = (x-2)^2 - 2 => vertex at (2, -2) [136, 121] -->
        <path d="M 101.55 30 Q 136 212 170.45 30" fill="none" stroke="#000000" stroke-width="2.5" />
      </svg>
    </div>`,
    questionText: "Which of the following will be the resulting graph?",
    options: [
      {
        id: "A",
        text: `<div class="py-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 260 220" class="font-sans">
            <path d="M 32 30 L 240 30 M 32 43 L 240 43 M 32 56 L 240 56 M 32 69 L 240 69 M 32 82 L 240 82 M 32 95 L 240 95 M 32 108 L 240 108 M 32 121 L 240 121 M 32 134 L 240 134 M 32 147 L 240 147 M 32 160 L 240 160 M 32 173 L 240 173 M 32 186 L 240 186 M 32 199 L 240 199" stroke="#000000" stroke-width="0.75" />
            <path d="M 32 30 L 32 199 M 45 30 L 45 199 M 58 30 L 58 199 M 71 30 L 71 199 M 84 30 L 84 199 M 97 30 L 97 199 M 110 30 L 110 199 M 123 30 L 123 199 M 136 30 L 136 199 M 149 30 L 149 199 M 162 30 L 162 199 M 175 30 L 175 199 M 188 30 L 188 199 M 201 30 L 201 199 M 214 30 L 214 199 M 227 30 L 227 199 M 240 30 L 240 199" stroke="#000000" stroke-width="0.75" />
            <line x1="20" y1="95" x2="250" y2="95" stroke="#000000" stroke-width="1.8" />
            <polygon points="255,95 248,91 248,99" fill="#000000" />
            <line x1="110" y1="208" x2="110" y2="15" stroke="#000000" stroke-width="1.8" />
            <polygon points="110,10 106,17 114,17" fill="#000000" />
            <text x="257" y="99" font-size="11" font-style="italic" font-weight="bold" fill="#000000">x</text>
            <text x="110" y="8" text-anchor="middle" font-size="11" font-style="italic" font-weight="bold" fill="#000000">y</text>
            <text x="103" y="91" font-size="10" font-style="italic" fill="#000000">O</text>
            <text x="32" y="105" text-anchor="middle" font-size="9" fill="#000000">−6</text>
            <text x="58" y="105" text-anchor="middle" font-size="9" fill="#000000">−4</text>
            <text x="84" y="105" text-anchor="middle" font-size="9" fill="#000000">−2</text>
            <text x="136" y="105" text-anchor="middle" font-size="9" fill="#000000">2</text>
            <text x="162" y="105" text-anchor="middle" font-size="9" fill="#000000">4</text>
            <text x="188" y="105" text-anchor="middle" font-size="9" fill="#000000">6</text>
            <text x="214" y="105" text-anchor="middle" font-size="9" fill="#000000">8</text>
            <text x="240" y="105" text-anchor="middle" font-size="9" fill="#000000">10</text>
            <text x="106" y="46" text-anchor="end" font-size="9" fill="#000000">4</text>
            <text x="106" y="72" text-anchor="end" font-size="9" fill="#000000">2</text>
            <text x="106" y="124" text-anchor="end" font-size="9" fill="#000000">−2</text>
            <text x="106" y="150" text-anchor="end" font-size="9" fill="#000000">−4</text>
            <text x="106" y="176" text-anchor="end" font-size="9" fill="#000000">−6</text>
            <text x="106" y="202" text-anchor="end" font-size="9" fill="#000000">−8</text>
            <!-- Vertex at (2, 2) [136, 69] -->
            <path d="M 106.5 30 Q 136 108 165.5 30" fill="none" stroke="#000000" stroke-width="2.5" />
          </svg>
        </div>`
      },
      {
        id: "B",
        text: `<div class="py-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 260 220" class="font-sans">
            <path d="M 32 30 L 240 30 M 32 43 L 240 43 M 32 56 L 240 56 M 32 69 L 240 69 M 32 82 L 240 82 M 32 95 L 240 95 M 32 108 L 240 108 M 32 121 L 240 121 M 32 134 L 240 134 M 32 147 L 240 147 M 32 160 L 240 160 M 32 173 L 240 173 M 32 186 L 240 186 M 32 199 L 240 199" stroke="#000000" stroke-width="0.75" />
            <path d="M 32 30 L 32 199 M 45 30 L 45 199 M 58 30 L 58 199 M 71 30 L 71 199 M 84 30 L 84 199 M 97 30 L 97 199 M 110 30 L 110 199 M 123 30 L 123 199 M 136 30 L 136 199 M 149 30 L 149 199 M 162 30 L 162 199 M 175 30 L 175 199 M 188 30 L 188 199 M 201 30 L 201 199 M 214 30 L 214 199 M 227 30 L 227 199 M 240 30 L 240 199" stroke="#000000" stroke-width="0.75" />
            <line x1="20" y1="95" x2="250" y2="95" stroke="#000000" stroke-width="1.8" />
            <polygon points="255,95 248,91 248,99" fill="#000000" />
            <line x1="110" y1="208" x2="110" y2="15" stroke="#000000" stroke-width="1.8" />
            <polygon points="110,10 106,17 114,17" fill="#000000" />
            <text x="257" y="99" font-size="11" font-style="italic" font-weight="bold" fill="#000000">x</text>
            <text x="110" y="8" text-anchor="middle" font-size="11" font-style="italic" font-weight="bold" fill="#000000">y</text>
            <text x="103" y="91" font-size="10" font-style="italic" fill="#000000">O</text>
            <text x="32" y="105" text-anchor="middle" font-size="9" fill="#000000">−6</text>
            <text x="58" y="105" text-anchor="middle" font-size="9" fill="#000000">−4</text>
            <text x="84" y="105" text-anchor="middle" font-size="9" fill="#000000">−2</text>
            <text x="136" y="105" text-anchor="middle" font-size="9" fill="#000000">2</text>
            <text x="162" y="105" text-anchor="middle" font-size="9" fill="#000000">4</text>
            <text x="188" y="105" text-anchor="middle" font-size="9" fill="#000000">6</text>
            <text x="214" y="105" text-anchor="middle" font-size="9" fill="#000000">8</text>
            <text x="240" y="105" text-anchor="middle" font-size="9" fill="#000000">10</text>
            <text x="106" y="46" text-anchor="end" font-size="9" fill="#000000">4</text>
            <text x="106" y="72" text-anchor="end" font-size="9" fill="#000000">2</text>
            <text x="106" y="124" text-anchor="end" font-size="9" fill="#000000">−2</text>
            <text x="106" y="150" text-anchor="end" font-size="9" fill="#000000">−4</text>
            <text x="106" y="176" text-anchor="end" font-size="9" fill="#000000">−6</text>
            <text x="106" y="202" text-anchor="end" font-size="9" fill="#000000">−8</text>
            <!-- Vertex at (2, -6) [136, 173] -->
            <path d="M 94.9 43 Q 136 303 177.1 43" fill="none" stroke="#000000" stroke-width="2.5" />
          </svg>
        </div>`
      },
      {
        id: "C",
        text: `<div class="py-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 260 220" class="font-sans">
            <path d="M 32 30 L 240 30 M 32 43 L 240 43 M 32 56 L 240 56 M 32 69 L 240 69 M 32 82 L 240 82 M 32 95 L 240 95 M 32 108 L 240 108 M 32 121 L 240 121 M 32 134 L 240 134 M 32 147 L 240 147 M 32 160 L 240 160 M 32 173 L 240 173 M 32 186 L 240 186 M 32 199 L 240 199" stroke="#000000" stroke-width="0.75" />
            <path d="M 32 30 L 32 199 M 45 30 L 45 199 M 58 30 L 58 199 M 71 30 L 71 199 M 84 30 L 84 199 M 97 30 L 97 199 M 110 30 L 110 199 M 123 30 L 123 199 M 136 30 L 136 199 M 149 30 L 149 199 M 162 30 L 162 199 M 175 30 L 175 199 M 188 30 L 188 199 M 201 30 L 201 199 M 214 30 L 214 199 M 227 30 L 227 199 M 240 30 L 240 199" stroke="#000000" stroke-width="0.75" />
            <line x1="20" y1="95" x2="250" y2="95" stroke="#000000" stroke-width="1.8" />
            <polygon points="255,95 248,91 248,99" fill="#000000" />
            <line x1="110" y1="208" x2="110" y2="15" stroke="#000000" stroke-width="1.8" />
            <polygon points="110,10 106,17 114,17" fill="#000000" />
            <text x="257" y="99" font-size="11" font-style="italic" font-weight="bold" fill="#000000">x</text>
            <text x="110" y="8" text-anchor="middle" font-size="11" font-style="italic" font-weight="bold" fill="#000000">y</text>
            <text x="103" y="91" font-size="10" font-style="italic" fill="#000000">O</text>
            <text x="32" y="105" text-anchor="middle" font-size="9" fill="#000000">−6</text>
            <text x="58" y="105" text-anchor="middle" font-size="9" fill="#000000">−4</text>
            <text x="84" y="105" text-anchor="middle" font-size="9" fill="#000000">−2</text>
            <text x="136" y="105" text-anchor="middle" font-size="9" fill="#000000">2</text>
            <text x="162" y="105" text-anchor="middle" font-size="9" fill="#000000">4</text>
            <text x="188" y="105" text-anchor="middle" font-size="9" fill="#000000">6</text>
            <text x="214" y="105" text-anchor="middle" font-size="9" fill="#000000">8</text>
            <text x="240" y="105" text-anchor="middle" font-size="9" fill="#000000">10</text>
            <text x="106" y="46" text-anchor="end" font-size="9" fill="#000000">4</text>
            <text x="106" y="72" text-anchor="end" font-size="9" fill="#000000">2</text>
            <text x="106" y="124" text-anchor="end" font-size="9" fill="#000000">−2</text>
            <text x="106" y="150" text-anchor="end" font-size="9" fill="#000000">−4</text>
            <text x="106" y="176" text-anchor="end" font-size="9" fill="#000000">−6</text>
            <text x="106" y="202" text-anchor="end" font-size="9" fill="#000000">−8</text>
            <!-- Vertex at (-2, -2) [84, 121] -->
            <path d="M 49.55 30 Q 84 212 118.45 30" fill="none" stroke="#000000" stroke-width="2.5" />
          </svg>
        </div>`
      },
      {
        id: "D",
        text: `<div class="py-1 flex justify-center">
          <svg width="220" height="180" viewBox="0 0 260 220" class="font-sans">
            <path d="M 32 30 L 240 30 M 32 43 L 240 43 M 32 56 L 240 56 M 32 69 L 240 69 M 32 82 L 240 82 M 32 95 L 240 95 M 32 108 L 240 108 M 32 121 L 240 121 M 32 134 L 240 134 M 32 147 L 240 147 M 32 160 L 240 160 M 32 173 L 240 173 M 32 186 L 240 186 M 32 199 L 240 199" stroke="#000000" stroke-width="0.75" />
            <path d="M 32 30 L 32 199 M 45 30 L 45 199 M 58 30 L 58 199 M 71 30 L 71 199 M 84 30 L 84 199 M 97 30 L 97 199 M 110 30 L 110 199 M 123 30 L 123 199 M 136 30 L 136 199 M 149 30 L 149 199 M 162 30 L 162 199 M 175 30 L 175 199 M 188 30 L 188 199 M 201 30 L 201 199 M 214 30 L 214 199 M 227 30 L 227 199 M 240 30 L 240 199" stroke="#000000" stroke-width="0.75" />
            <line x1="20" y1="95" x2="250" y2="95" stroke="#000000" stroke-width="1.8" />
            <polygon points="255,95 248,91 248,99" fill="#000000" />
            <line x1="110" y1="208" x2="110" y2="15" stroke="#000000" stroke-width="1.8" />
            <polygon points="110,10 106,17 114,17" fill="#000000" />
            <text x="257" y="99" font-size="11" font-style="italic" font-weight="bold" fill="#000000">x</text>
            <text x="110" y="8" text-anchor="middle" font-size="11" font-style="italic" font-weight="bold" fill="#000000">y</text>
            <text x="103" y="91" font-size="10" font-style="italic" fill="#000000">O</text>
            <text x="32" y="105" text-anchor="middle" font-size="9" fill="#000000">−6</text>
            <text x="58" y="105" text-anchor="middle" font-size="9" fill="#000000">−4</text>
            <text x="84" y="105" text-anchor="middle" font-size="9" fill="#000000">−2</text>
            <text x="136" y="105" text-anchor="middle" font-size="9" fill="#000000">2</text>
            <text x="162" y="105" text-anchor="middle" font-size="9" fill="#000000">4</text>
            <text x="188" y="105" text-anchor="middle" font-size="9" fill="#000000">6</text>
            <text x="214" y="105" text-anchor="middle" font-size="9" fill="#000000">8</text>
            <text x="240" y="105" text-anchor="middle" font-size="9" fill="#000000">10</text>
            <text x="106" y="46" text-anchor="end" font-size="9" fill="#000000">4</text>
            <text x="106" y="72" text-anchor="end" font-size="9" fill="#000000">2</text>
            <text x="106" y="124" text-anchor="end" font-size="9" fill="#000000">−2</text>
            <text x="106" y="150" text-anchor="end" font-size="9" fill="#000000">−4</text>
            <text x="106" y="176" text-anchor="end" font-size="9" fill="#000000">−6</text>
            <text x="106" y="202" text-anchor="end" font-size="9" fill="#000000">−8</text>
            <!-- Vertex at (6, -2) [188, 121] -->
            <path d="M 153.55 30 Q 188 212 222.45 30" fill="none" stroke="#000000" stroke-width="2.5" />
          </svg>
        </div>`
      }
    ],
    correctAnswer: "A",
    explanation: "Translating a graph up by 4 units increases the y-coordinate of every point on the graph by 4. The original vertex at \\((2, -2)\\) moves to \\((2, -2 + 4) = (2, 2)\\)."
  },
  {
    id: 271,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Accelerating Car Speed Equation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(s = 40 + 3t\\)
    </div>
    <p class="mb-3">The equation gives the speed \\(s\\), in miles per hour, of a certain car \\(t\\) seconds after it began to accelerate. What is the speed, in miles per hour, of the car 5 seconds after it began to accelerate?</p>`,
    options: [
      { id: "A", text: "40" },
      { id: "B", text: "43" },
      { id: "C", text: "45" },
      { id: "D", text: "55" }
    ],
    correctAnswer: "D",
    explanation: "Substitute \\(t = 5\\) into the equation: \\(s = 40 + 3(5) = 40 + 15 = 55\\) miles per hour."
  },
  {
    id: 272,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Evaluating Quadratic Function",
    questionText: "The function \\(f\\) is defined by \\(f(x) = x^2 + x + 71\\).<br /><br />What is the value of \\(f(2)\\) ?",
    options: [],
    correctAnswer: "77",
    explanation: "Substitute \\(x = 2\\) into \\(f(x)\\): \\(f(2) = 2^2 + 2 + 71 = 4 + 2 + 71 = 77\\)."
  },
  {
    id: 273,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Party Venue Budget Linear Inequality",
    questionText: `<p class="mb-3">An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event planner has a budget of $300. What is the greatest number of attendees possible without exceeding the budget?</p>`,
    options: [],
    correctAnswer: "25",
    explanation: "Set up the inequality: \\(35 + 10.25x \\le 300 \\implies 10.25x \\le 265 \\implies x \\le 25.85\\). The maximum whole number of attendees is 25."
  },
  {
    id: 274,
    type: "Math",
    module: 1,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "School Mascot Votes Table",
    passageHtml: `<p class="mb-4 text-black font-serif leading-relaxed text-[15px] md:text-[16px]">The table gives the distribution of votes for a new school mascot and grade level for 80 students.</p>
    
    <div class="my-4 flex justify-center overflow-x-auto">
      <table class="border-collapse border border-black font-serif text-sm text-black">
        <thead>
          <tr class="border-b border-black">
            <th class="p-2 border-r border-black font-normal"></th>
            <th colspan="4" class="p-2 text-center border-black font-normal">Grade level</th>
          </tr>
          <tr class="border-b border-black">
            <th class="p-2 px-4 text-left border-r border-black font-normal">Mascot</th>
            <th class="p-2 px-4 text-center border-r border-black font-normal">Sixth</th>
            <th class="p-2 px-4 text-center border-r border-black font-normal">Seventh</th>
            <th class="p-2 px-4 text-center border-r border-black font-normal">Eighth</th>
            <th class="p-2 px-4 text-center font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="p-2 px-4 text-left border-r border-black">Badger</td>
            <td class="p-2 px-4 text-center border-r border-black">4</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center">22</td>
          </tr>
          <tr class="border-b border-black">
            <td class="p-2 px-4 text-left border-r border-black">Lion</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center border-r border-black">2</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center">20</td>
          </tr>
          <tr class="border-b border-black">
            <td class="p-2 px-4 text-left border-r border-black">Longhorn</td>
            <td class="p-2 px-4 text-center border-r border-black">4</td>
            <td class="p-2 px-4 text-center border-r border-black">6</td>
            <td class="p-2 px-4 text-center border-r border-black">4</td>
            <td class="p-2 px-4 text-center">14</td>
          </tr>
          <tr class="border-b border-black">
            <td class="p-2 px-4 text-left border-r border-black">Tiger</td>
            <td class="p-2 px-4 text-center border-r border-black">6</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center border-r border-black">9</td>
            <td class="p-2 px-4 text-center">24</td>
          </tr>
          <tr>
            <td class="p-2 px-4 text-left border-r border-black">Total</td>
            <td class="p-2 px-4 text-center border-r border-black">23</td>
            <td class="p-2 px-4 text-center border-r border-black">26</td>
            <td class="p-2 px-4 text-center border-r border-black">31</td>
            <td class="p-2 px-4 text-center">80</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    questionText: "If one of these students is selected at random, what is the probability of selecting a student whose vote for new mascot was for a lion?",
    options: [
      { id: "A", text: "\\(\\frac{1}{9}\\)" },
      { id: "B", text: "\\(\\frac{1}{5}\\)" },
      { id: "C", text: "\\(\\frac{1}{4}\\)" },
      { id: "D", text: "\\(\\frac{2}{3}\\)" }
    ],
    correctAnswer: "C",
    explanation: "The total number of students who voted for Lion is 20 out of 80 total students. The probability is \\(20 / 80 = \\frac{1}{4}\\)."
  },
  {
    id: 275,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    passageTitle: "Congruent Triangles Angle Measures",
    questionText: `<p class="mb-3">Triangles \\(ABC\\) and \\(DEF\\) are congruent, where \\(A\\) corresponds to \\(D\\), and \\(B\\) and \\(E\\) are right angles. The measure of angle \\(A\\) is 18°. What is the measure of angle \\(F\\)?</p>`,
    options: [
      { id: "A", text: "18°" },
      { id: "B", text: "72°" },
      { id: "C", text: "90°" },
      { id: "D", text: "162°" }
    ],
    correctAnswer: "B",
    explanation: "Since \\(\\triangle ABC \\cong \\triangle DEF\\), \\(D = 18^\\circ\\), \\(E = 90^\\circ\\). The sum of angles in \\(\\triangle DEF\\) is 180°, so angle \\(F = 180^\\circ - 90^\\circ - 18^\\circ = 72^\\circ\\)."
  },
  {
    id: 276,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Equation Substitution",
    questionText: `<p class="mb-3">If \\(4x + 2 = 12\\), what is the value of \\(16x + 8\\)?</p>`,
    options: [
      { id: "A", text: "40" },
      { id: "B", text: "48" },
      { id: "C", text: "56" },
      { id: "D", text: "60" }
    ],
    correctAnswer: "B",
    explanation: "Notice that \\(16x + 8 = 4(4x + 2)\\). Since \\(4x + 2 = 12\\), \\(16x + 8 = 4(12) = 48\\)."
  },
  {
    id: 277,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Exponent Rules Equivalence",
    questionText: "Which expression is equivalent to \\((m^4 q^4 z^{-1})(m q^5 z^3)\\), where \\(m\\), \\(q\\), and \\(z\\) are positive?",
    options: [
      { id: "A", text: "\\(m^4 q^{20} z^{-3}\\)" },
      { id: "B", text: "\\(m^5 q^9 z^2\\)" },
      { id: "C", text: "\\(m^6 q^8 z^{-1}\\)" },
      { id: "D", text: "\\(m^{20} q^{12} z^{-2}\\)" }
    ],
    correctAnswer: "B",
    explanation: "Using the product rule for exponents: \\((m^4 q^4 z^{-1})(m q^5 z^3) = m^{4+1} q^{4+5} z^{-1+3} = m^5 q^9 z^2\\)."
  },
  {
    id: 278,
    type: "Math",
    module: 1,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Airplane Descent Function Model",
    questionText: `<p class="mb-3">An airplane descends from an altitude of 9,500 feet to 5,000 feet at a constant rate of 400 feet per minute. What type of function best models the relationship between the descending airplane’s altitude and time?</p>`,
    options: [
      { id: "A", text: "Decreasing exponential" },
      { id: "B", text: "Decreasing linear" },
      { id: "C", text: "Increasing exponential" },
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "B",
    explanation: "A constant rate of change per unit of time indicates a linear function, and since the altitude is decreasing, it is a decreasing linear function."
  },
  {
    id: 279,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "System of Equations Elimination",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(3x + 6 = 4y\\)<br />
      \\(3x + 4 = 2y\\)
    </div>
    <p class="mb-3">The solution to the given system of equations is \\((x, y)\\). What is the value of \\(y\\) ?</p>`,
    options: [],
    correctAnswer: "1",
    explanation: "Subtract the second equation from the first: \\((3x + 6) - (3x + 4) = 4y - 2y \\implies 2 = 2y \\implies y = 1\\)."
  },
  {
    id: 280,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Cubic Polynomial Translation",
    questionText: "The function \\(f\\) is defined by<br />\\(f(x) = (x - 6)(x - 2)(x + 6)\\). In the \\(xy\\)-plane, the graph of \\(y = g(x)\\) is the result of translating the graph of \\(y = f(x)\\) up 4 units. What is the value of \\(g(0)\\) ?",
    options: [],
    correctAnswer: "76",
    explanation: "First evaluate \\(f(0)\\): \\(f(0) = (0 - 6)(0 - 2)(0 + 6) = (-6)(-2)(6) = 72\\). Since \\(y = g(x)\\) is \\(y = f(x)\\) translated up 4 units, \\(g(x) = f(x) + 4\\). Therefore, \\(g(0) = f(0) + 4 = 72 + 4 = 76\\)."
  },
  {
    id: 281,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Rectangle Area Function Interpretation",
    questionText: "The function \\(f(w) = 6w^2\\) gives the area of a rectangle, in square feet (\\(\\text{ft}^2\\)), if its width is \\(w\\) ft and its length is 6 times its width. Which of the following is the best interpretation of \\(f(14) = 1{,}176\\) ?",
    options: [
      { id: "A", text: "If the width of the rectangle is 14 ft, then the area of the rectangle is \\(1{,}176\\text{ ft}^2\\)." },
      { id: "B", text: "If the width of the rectangle is 14 ft, then the length of the rectangle is 1,176 ft." },
      { id: "C", text: "If the width of the rectangle is 1,176 ft, then the length of the rectangle is 14 ft." },
      { id: "D", text: "If the width of the rectangle is 1,176 ft, then the area of the rectangle is \\(14\\text{ ft}^2\\)." }
    ],
    correctAnswer: "A",
    explanation: "In the function \\(f(w) = 6w^2\\), the input \\(w\\) represents the width in feet, and the output \\(f(w)\\) represents the area in square feet. Therefore, \\(f(14) = 1,176\\) means that if the width of the rectangle is 14 ft, then the area of the rectangle is 1,176 ft²."
  },
  {
    id: 282,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Bacteria Doubling Exponential Model",
    questionText: "The number of bacteria in a liquid medium doubles every day. There are 44,000 bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, \\(y\\), in the liquid medium \\(t\\) days after the start of the observation?",
    options: [
      { id: "A", text: "\\(y = \\frac{1}{2}(44{,}000)^t\\)" },
      { id: "B", text: "\\(y = 2(44{,}000)^t\\)" },
      { id: "C", text: "\\(y = 44{,}000\\left(\\frac{1}{2}\\right)^t\\)" },
      { id: "D", text: "\\(y = 44{,}000(2)^t\\)" }
    ],
    correctAnswer: "D",
    explanation: "An initial amount of 44,000 that doubles (multiplies by 2) every day \\(t\\) is modeled by \\(y = 44{,}000(2)^t\\)."
  },
  {
    id: 283,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Pole Vault Exponential Growth Table",
    passageHtml: `<div class="my-4 flex justify-center overflow-x-auto">
      <table class="border-collapse border border-black font-serif text-sm text-black">
        <thead>
          <tr class="border-b border-black">
            <th class="p-2 px-5 text-center border-r border-black font-normal italic">x</th>
            <th class="p-2 px-5 text-center font-normal italic">h(x)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="p-2 px-5 text-center border-r border-black font-serif">0</td>
            <td class="p-2 px-5 text-center font-serif">1.23</td>
          </tr>
          <tr class="border-b border-black">
            <td class="p-2 px-5 text-center border-r border-black font-serif">2</td>
            <td class="p-2 px-5 text-center font-serif">1.54</td>
          </tr>
          <tr>
            <td class="p-2 px-5 text-center border-r border-black font-serif">4</td>
            <td class="p-2 px-5 text-center font-serif">1.94</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    questionText: "The table shows the exponential relationship between the number of years, \\(x\\), since Hana started training in pole vault, and the estimated height \\(h(x)\\), in meters, of her best pole vault for that year. Which of the following functions best represents this relationship, where \\(x \\le 4\\) ?",
    options: [
      { id: "A", text: "\\(h(x) = 1.12(0.23)^x\\)" },
      { id: "B", text: "\\(h(x) = 1.12(1.23)^x\\)" },
      { id: "C", text: "\\(h(x) = 1.23(0.12)^x\\)" },
      { id: "D", text: "\\(h(x) = 1.23(1.12)^x\\)" }
    ],
    correctAnswer: "D",
    explanation: "At \\(x = 0\\), \\(h(0) = 1.23\\), so the initial value \\(a\\) in \\(h(x) = a(b)^x\\) must be 1.23. At \\(x = 2\\), \\(1.23(1.12)^2 \\approx 1.23(1.2544) \\approx 1.54\\), matching the table."
  },
  {
    id: 284,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Function Intercepts Sum",
    questionText: "The function \\(h\\) is defined by \\(h(x) = 4x + 28\\). The graph of \\(y = h(x)\\) in the \\(xy\\)-plane has an \\(x\\)-intercept at \\((a, 0)\\) and a \\(y\\)-intercept at \\((0, b)\\), where \\(a\\) and \\(b\\) are constants. What is the value of \\(a + b\\) ?",
    options: [
      { id: "A", text: "21" },
      { id: "B", text: "28" },
      { id: "C", text: "32" },
      { id: "D", text: "35" }
    ],
    correctAnswer: "A",
    explanation: "\\(x\\)-intercept: \\(4a + 28 = 0 \\implies a = -7\\). \\(y\\)-intercept: \\(b = 4(0) + 28 = 28\\). Therefore, \\(a + b = -7 + 28 = 21\\)."
  },
  {
    id: 285,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Inequality Solutions Table",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(y < 5x + 6\\)
    </div><p class="mt-3">For which of the following tables are all the values of \\(x\\) and their corresponding values of \\(y\\) solutions to the given inequality?</p>`,
    options: [
      { id: "A", text: `<div class="inline-block border border-black rounded overflow-hidden my-1"><table class="min-w-[120px] text-center border-collapse"><thead><tr class="bg-white border-b border-black"><th class="px-3 py-1 border-r border-black text-black font-semibold font-serif">x</th><th class="px-3 py-1 text-black font-semibold font-serif">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">3</td><td class="px-3 py-1 text-black font-serif">17</td></tr><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">5</td><td class="px-3 py-1 text-black font-serif">27</td></tr><tr><td class="px-3 py-1 border-r border-black text-black font-serif">7</td><td class="px-3 py-1 text-black font-serif">37</td></tr></tbody></table></div>` },
      { id: "B", text: `<div class="inline-block border border-black rounded overflow-hidden my-1"><table class="min-w-[120px] text-center border-collapse"><thead><tr class="bg-white border-b border-black"><th class="px-3 py-1 border-r border-black text-black font-semibold font-serif">x</th><th class="px-3 py-1 text-black font-semibold font-serif">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">3</td><td class="px-3 py-1 text-black font-serif">17</td></tr><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">5</td><td class="px-3 py-1 text-black font-serif">35</td></tr><tr><td class="px-3 py-1 border-r border-black text-black font-serif">7</td><td class="px-3 py-1 text-black font-serif">37</td></tr></tbody></table></div>` },
      { id: "C", text: `<div class="inline-block border border-black rounded overflow-hidden my-1"><table class="min-w-[120px] text-center border-collapse"><thead><tr class="bg-white border-b border-black"><th class="px-3 py-1 border-r border-black text-black font-semibold font-serif">x</th><th class="px-3 py-1 text-black font-semibold font-serif">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">3</td><td class="px-3 py-1 text-black font-serif">25</td></tr><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">5</td><td class="px-3 py-1 text-black font-serif">35</td></tr><tr><td class="px-3 py-1 border-r border-black text-black font-serif">7</td><td class="px-3 py-1 text-black font-serif">45</td></tr></tbody></table></div>` },
      { id: "D", text: `<div class="inline-block border border-black rounded overflow-hidden my-1"><table class="min-w-[120px] text-center border-collapse"><thead><tr class="bg-white border-b border-black"><th class="px-3 py-1 border-r border-black text-black font-semibold font-serif">x</th><th class="px-3 py-1 text-black font-semibold font-serif">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">3</td><td class="px-3 py-1 text-black font-serif">21</td></tr><tr class="border-b border-black"><td class="px-3 py-1 border-r border-black text-black font-serif">5</td><td class="px-3 py-1 text-black font-serif">31</td></tr><tr><td class="px-3 py-1 border-r border-black text-black font-serif">7</td><td class="px-3 py-1 text-black font-serif">41</td></tr></tbody></table></div>` }
    ],
    correctAnswer: "A",
    explanation: "For x=3: 5(3)+6=21 (17<21). For x=5: 5(5)+6=31 (27<31). For x=7: 5(7)+6=41 (37<41). All points in Table A satisfy \\(y < 5x + 6\\)."
  },
  {
    id: 286,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "System of Linear Equations Value Difference",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(y = 4x + 1\\)<br />
      \\(4y = 15x - 8\\)
    </div>
    <p class="mb-3">The solution to the given system of equations is \\((x, y)\\). What is the value of \\(x - y\\) ?</p>`,
    options: [],
    correctAnswer: "35",
    explanation: "Substitute \\(y = 4x+1\\) into second equation: \\(4(4x+1) = 15x - 8 \\implies 16x + 4 = 15x - 8 \\implies x = -12\\). Then \\(y = 4(-12) + 1 = -47\\). So \\(x - y = -12 - (-47) = 35\\)."
  },
  {
    id: 287,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    passageTitle: "Right Triangle Hypotenuse Radical Form",
    questionText: "A right triangle has legs with lengths of 24 centimeters and 21 centimeters. If the length of this triangle’s hypotenuse, in centimeters, can be written in the form \\(3\\sqrt{d}\\), where \\(d\\) is an integer, what is the value of \\(d\\) ?",
    options: [],
    correctAnswer: "113",
    explanation: "\\(\\text{Hypotenuse} = \\sqrt{24^2 + 21^2} = \\sqrt{576 + 441} = \\sqrt{1017} = \\sqrt{9 \\times 113} = 3\\sqrt{113}\\). Thus \\(d = 113\\)."
  },
  {
    id: 288,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    passageTitle: "Scale Model Ballroom Floor Area",
    questionText: "The floor of a ballroom has an area of 600 square meters. An architect creates a scale model of the floor of the ballroom, where the length of each side of the model is \\(\\frac{1}{10}\\) times the length of the corresponding side of the actual floor of the ballroom. What is the area, in square meters, of the scale model?",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "10" },
      { id: "C", text: "60" },
      { id: "D", text: "150" }
    ],
    correctAnswer: "A",
    explanation: "Area scales by the square of the linear scale factor: \\(\\text{Scale Area} = 600 \\times \\left(\\frac{1}{10}\\right)^2 = 600 \\times \\frac{1}{100} = 6\\) square meters."
  },
  {
    id: 289,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    passageTitle: "Circle Intersecting Y-Axis at One Point",
    questionText: "Which of the following equations represents a circle in the \\(xy\\)-plane that intersects the \\(y\\)-axis at exactly one point?",
    options: [
      { id: "A", text: "\\((x - 8)^2 + (y - 8)^2 = 16\\)" },
      { id: "B", text: "\\((x - 8)^2 + (y - 4)^2 = 16\\)" },
      { id: "C", text: "\\((x - 4)^2 + (y - 9)^2 = 16\\)" },
      { id: "D", text: "\\(x^2 + (y - 9)^2 = 16\\)" }
    ],
    correctAnswer: "C",
    explanation: "A circle intersects the y-axis (where x=0) at exactly one point if the absolute value of the x-coordinate of its center equals its radius \\(r = \\sqrt{16} = 4\\). Center of \\((x - 4)^2 + (y - 9)^2 = 16\\) is \\((4, 9)\\), so distance to y-axis is 4."
  },
  {
    id: 290,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    passageTitle: "Triangle Congruence Criteria",
    questionText: "In triangles \\(ABC\\) and \\(DEF\\), angles \\(B\\) and \\(E\\) each have measure 27° and angles \\(C\\) and \\(F\\) each have measure 41°. Which additional piece of information is sufficient to determine whether triangle ABC is congruent to triangle DEF?",
    options: [
      { id: "A", text: "The measure of angle A" },
      { id: "B", text: "The length of side AB" },
      { id: "C", text: "The lengths of sides BC and EF" },
      { id: "D", text: "No additional information is necessary." }
    ],
    correctAnswer: "C",
    explanation: "Knowing two corresponding angle measures gives AA similarity. To prove congruence, we need corresponding side lengths (e.g. ASA criterion with sides BC and EF)."
  },
  {
    id: 291,
    type: "Math",
    module: 1,
    domain: "Problem Solving and Data Analysis",
    passageTitle: "Percentage Increase Calculation",
    questionText: "The result of increasing the quantity \\(x\\) by 1,800% is 684. What is the value of \\(x\\) ?",
    options: [
      { id: "A", text: "12,996" },
      { id: "B", text: "12,312" },
      { id: "C", text: "38" },
      { id: "D", text: "36" }
    ],
    correctAnswer: "D",
    explanation: "Increasing \\(x\\) by 1,800% means \\(x + 18x = 19x = 684 \\implies x = 684 / 19 = 36\\)."
  },
  {
    id: 292,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Window Repair Total Cost Function",
    questionText: "A window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 5 hours of repair is $400. Which function \\(f\\) gives the total cost, in dollars, for \\(x\\) hours of repair, where \\(x \\ge 2\\)?",
    options: [
      { id: "A", text: "\\(f(x) = 60x + 100\\)" },
      { id: "B", text: "\\(f(x) = 60x + 220\\)" },
      { id: "C", text: "\\(f(x) = 80x\\)" },
      { id: "D", text: "\\(f(x) = 80x + 220\\)" }
    ],
    correctAnswer: "A",
    explanation: "The first 2 hours cost $220. The next 3 hours cost \\(\\$400 - \\$220 = \\$180\\), so hourly rate is \\(\\$60/\\text{hr}\\). Total cost \\(f(x) = 220 + 60(x - 2) = 60x + 100\\)."
  },
  {
    id: 293,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Quadratic Equation Sum of Solutions",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">
      \\(x(x + 1) - 56 = 4x(x - 7)\\)
    </div><p class="mt-3">What is the sum of the solutions to the given equation?</p>`,
    options: [],
    correctAnswer: "29/3; 9.666; 9.667",
    explanation: "Expand: \\(x^2 + x - 56 = 4x^2 - 28x \\implies 3x^2 - 29x + 56 = 0\\). The sum of solutions for \\(ax^2 + bx + c = 0\\) is \\(-b/a = -(-29)/3 = 29/3 \\approx 9.667\\)."
  }
];
