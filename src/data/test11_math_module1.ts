import { Question } from '../types';

export const MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 67,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    passageTitle: "Isosceles Triangle Base Angle",
    passageHtml: `<div class="my-4 p-4 bg-white  flex flex-col items-center justify-center ">
      <svg width="300" height="160" viewBox="0 0 300 160" class="max-w-full font-serif">
        <!-- Triangle PQR -->
        <polygon points="40,125 150,25 260,125" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" />
        
        <!-- Inner Angle Arcs and Values -->
        <path d="M 135.2 38.4 A 20 20 0 0 0 164.8 38.4" fill="none" stroke="#000000" stroke-width="1.2" />
        <text x="150" y="54" text-anchor="middle" font-size="12" fill="#000000">132°</text>
        <path d="M 62 125 A 22 22 0 0 0 56.3 110.2" fill="none" stroke="#000000" stroke-width="1.2" />
        <text x="74" y="118" font-size="12" fill="#000000">24°</text>
        <path d="M 243.7 110.2 A 22 22 0 0 0 238 125" fill="none" stroke="#000000" stroke-width="1.2" />
        <text x="226" y="118" font-size="12" font-style="italic" fill="#000000">x°</text>

        <!-- Vertex Labels -->
        <text x="25" y="135" font-size="14" font-style="italic" fill="#000000">P</text>
        <text x="150" y="16" font-size="14" font-style="italic" fill="#000000" text-anchor="middle">Q</text>
        <text x="268" y="135" font-size="14" font-style="italic" fill="#000000">R</text>
      </svg>
      <div class="mt-2 text-xs font-serif text-black italic">Note: Figure not drawn to scale.</div>
    </div>`,
    questionText: "In the triangle shown, \\(PQ = QR\\). What is the value of \\(x\\)?",
    options: [
      { id: "A", text: "156" },
      { id: "B", text: "66" },
      { id: "C", text: "48" },
      { id: "D", text: "24" }
    ],
    correctAnswer: "D",
    explanation: "Because PQ = QR, triangle PQR is isosceles with base angles ∠P and ∠R equal. Since ∠P = 24°, x = 24."
  },
  {
    id: 68,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Equivalent Equation Solution",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(4x + 1 = 33\\)
    </div><p class="mt-3">Which equation has the same solution as the given equation?</p>`,
    options: [
      { id: "A", text: "\\(4x = 32\\)" },
      { id: "B", text: "\\(4x = 5\\)" },
      { id: "C", text: "\\(4x = 1\\)" },
      { id: "D", text: "\\(4x = -32\\)" }
    ],
    correctAnswer: "A",
    explanation: "Subtracting 1 from both sides of \\(4x + 1 = 33\\) yields \\(4x = 32\\). Both yield \\(x = 8\\)."
  },
  {
    id: 69,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Function Definition",
    questionText: "For the linear function \\(f\\), the graph of \\(y = f(x)\\) in the \\(xy\\)-plane has a slope of 7 and passes through the point \\((0, 5)\\). Which equation defines \\(f\\)?",
    options: [
      { id: "A", text: "\\(f(x) = 5x\\)" },
      { id: "B", text: "\\(f(x) = 35x\\)" },
      { id: "C", text: "\\(f(x) = 7x + 5\\)" },
      { id: "D", text: "\\(f(x) = 12x + 5\\)" }
    ],
    correctAnswer: "C",
    explanation: "Using slope-intercept form \\(f(x) = mx + b\\) with slope \\(m = 7\\) and \\(y\\)-intercept \\((0, 5)\\), \\(f(x) = 7x + 5\\)."
  },
  {
    id: 70,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Positive Quadratic Solution",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(8x^2 - 40 = 32\\)
    </div><p class="mt-3">What is the positive solution to the given equation?</p>`,
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "9" },
      { id: "D", text: "72" }
    ],
    correctAnswer: "A",
    explanation: "\\(8x^2 - 40 = 32 \\implies 8x^2 = 72 \\implies x^2 = 9 \\implies x = 3\\)."
  },
  {
    id: 71,
    type: "Math",
    module: 1,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Summer Camp Sandwich Selection",
    passageHtml: `<p class="mb-3">A total of 50 children attended a summer camp and were offered 4 types of sandwiches:</p>
    <div class="my-3 overflow-x-auto">
      <table class="w-full text-sm text-left text-black border border-black">
        <thead class="bg-white font-semibold border-b border-black">
          <tr><th class="p-2 border-r border-black">Type of sandwich</th><th class="p-2">Number of children</th></tr>
        </thead>
        <tbody>
          <tr class="border-b border-black"><td class="p-2 border-r border-black">Turkey</td><td class="p-2">15</td></tr>
          <tr class="border-b border-black"><td class="p-2 border-r border-black">Chicken</td><td class="p-2">23</td></tr>
          <tr class="border-b border-black"><td class="p-2 border-r border-black">Ham</td><td class="p-2">3</td></tr>
          <tr class="border-b border-black"><td class="p-2 border-r border-black">Vegetarian</td><td class="p-2">9</td></tr>
          <tr class="bg-white"><td class="p-2 border-r border-black">Total</td><td class="p-2">50</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "If one of these children is selected at random, what is the probability of selecting a child who chose a vegetarian sandwich?",
    options: [
      { id: "A", text: "\\(\\frac{9}{100}\\)" },
      { id: "B", text: "\\(\\frac{9}{50}\\)" },
      { id: "C", text: "\\(\\frac{1}{4}\\)" },
      { id: "D", text: "\\(\\frac{9}{10}\\)" }
    ],
    correctAnswer: "B",
    explanation: "Probability = (Number of vegetarian choices) / (Total children) = 9 / 50."
  },
  {
    id: 72,
    type: "Math",
    module: 1,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Tomato Harvest Percentage",
    questionText: "Amara grows cherry tomatoes in her backyard. This year, she harvested 750 cherry tomatoes and gave 10% of them to her neighbor. How many of the harvested cherry tomatoes did Amara give to her neighbor?",
    options: [],
    correctAnswer: "75",
    explanation: "10% of 750 = 0.10 × 750 = 75."
  },
  {
    id: 73,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "System of Equations Substitution",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium  space-y-1">
      <div>\\(x + y = 125\\)</div>
      <div>\\(x + y + y = 155\\)</div>
    </div><p class="mt-3">The solution to the given system of equations is \\((x, y)\\). What is the value of \\(y\\)?</p>`,
    options: [],
    correctAnswer: "30",
    explanation: "Substitute \\((x + y) = 125\\) into the second equation: \\(125 + y = 155 \\implies y = 30\\)."
  },
  {
    id: 74,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Chess Tournament Points Linear Model",
    questionText: "In a chess tournament, each participant earns 1 point for each game that ends in a draw and 3 points for each game won. A certain participant has earned 41 points. Which equation represents this situation, where \\(d\\) represents draws and \\(w\\) represents wins?",
    options: [
      { id: "A", text: "\\(d + 3w = 41\\)" },
      { id: "B", text: "\\(3d + w = 41\\)" },
      { id: "C", text: "\\(d + \\frac{w}{3} = 41\\)" },
      { id: "D", text: "\\(\\frac{d}{3} + w = 41\\)" }
    ],
    correctAnswer: "A",
    explanation: "Total points = \\(1(d) + 3(w) = 41\\)."
  },
  {
    id: 75,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Radical Function Evaluation",
    questionText: "The function \\(g\\) is defined by \\(g(x) = \\sqrt{x} + 300\\). What is the value of \\(g(x)\\) when \\(x = 81\\)?",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "300" },
      { id: "C", text: "309" },
      { id: "D", text: "381" }
    ],
    correctAnswer: "C",
    explanation: "\\(g(81) = \\sqrt{81} + 300 = 9 + 300 = 309\\)."
  },
  {
    id: 76,
    type: "Math",
    module: 1,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Customer Interest Population Estimate",
    questionText: "A cable provider wanted to know how many of its 30,000 customers would be interested in a new service plan. The provider selected 300 customers at random and surveyed them. Of those surveyed, 8 said they would be interested. Which of the following is the best estimate of the total number of customers who would be interested in the new service plan?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "80" },
      { id: "C", text: "800" },
      { id: "D", text: "8,000" }
    ],
    correctAnswer: "C",
    explanation: "\\((8 / 300) \\times 30{,}000 = 800\\)."
  },
  {
    id: 77,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Algebraic Factoring",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(64t^2s^3 - 56t^3s^3\\)
    </div><p class="mt-3">Which expression is equivalent to \\(64t^2s^3 - 56t^3s^3\\)?</p>`,
    options: [
      { id: "A", text: "\\(4ts(16s^2 - 14ts)\\)" },
      { id: "B", text: "\\(4ts(16t^{2}s^2 - 14t)\\)" },
      { id: "C", text: "\\(4t^{2}s(16ts - 14s)\\)" },
      { id: "D", text: "\\(4t^{2}s^3(16 - 14t)\\)" }
    ],
    correctAnswer: "D",
    explanation: "Factoring out \\(4t^2s^3\\) gives \\(4t^2s^3(16 - 14t)\\)."
  },
  {
    id: 78,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "System Intersection Point",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium  space-y-1">
      <div>\\(x + 5 = 14\\)</div>
      <div>\\(y = 4x^2 + 4\\)</div>
    </div><p class="mt-3">At what point \\((x, y)\\) do the graphs of the equations in the given system intersect?</p>`,
    options: [
      { id: "A", text: "(9, 324)" },
      { id: "B", text: "(9, 328)" },
      { id: "C", text: "(14, 4)" },
      { id: "D", text: "(14, 788)" }
    ],
    correctAnswer: "B",
    explanation: "\\(x + 5 = 14 \\implies x = 9\\). Substituting \\(x = 9\\) into \\(y = 4(9)^2 + 4 = 4(81) + 4 = 328\\). Point is \\((9, 328)\\)."
  },
  {
    id: 79,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Coin Value Equation",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium ">
      \\(8x + 11y = 170\\)
    </div>
    <p class="mb-3">The equation gives the possible combinations of 2009 premium grade Log Cabin Pennies, \\(x\\), and 1996 select grade Lincoln Pennies, \\(y\\), in a collection worth $170. If there are 6 1996 select grade Lincoln Pennies in the collection, how many 2009 premium grade Log Cabin Pennies are in the collection?</p>`,
    options: [],
    correctAnswer: "13",
    explanation: "Substitute \\(y = 6\\): \\(8x + 11(6) = 170 \\implies 8x + 66 = 170 \\implies 8x = 104 \\implies x = 13\\)."
  },
  {
    id: 80,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Exponential Population Doubling",
    questionText: "The population of Smithville doubled every 75 years from 1659 to 1959. The population was 240,000 in 1959. What was the population of this town in 1659?",
    options: [],
    correctAnswer: "15000",
    explanation: "From 1659 to 1959 is 300 years, which equals \\(300 / 75 = 4\\) doubling periods. Initial population = \\(240{,}000 / 2^4 = 240{,}000 / 16 = 15{,}000\\)."
  },
  {
    id: 81,
    type: "Math",
    module: 1,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Scatterplot Line of Best Fit Slope",
    passageHtml: `<p class="mb-3">The scatterplot shows the relationship between \(x\) and \(y\). A line of best fit is also shown.</p>
    <div class="my-4 p-4 bg-white  flex flex-col items-center justify-center ">
      <svg width="280" height="280" viewBox="0 0 280 280" class="max-w-full">
        <!-- Grid lines (10x10 grid: 20px per unit, x from 40 to 240, y from 40 to 240) -->
        <!-- Horizontal grid lines y = 1..10 -->
        <line x1="40" y1="220" x2="240" y2="220" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="200" x2="240" y2="200" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="180" x2="240" y2="180" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="160" x2="240" y2="160" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="140" x2="240" y2="140" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="120" x2="240" y2="120" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="100" x2="240" y2="100" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="80" x2="240" y2="80" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="60" x2="240" y2="60" stroke="#000000" stroke-width="0.8" />
        <line x1="40" y1="40" x2="240" y2="40" stroke="#000000" stroke-width="0.8" />

        <!-- Vertical grid lines x = 1..10 -->
        <line x1="60" y1="40" x2="60" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="80" y1="40" x2="80" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="100" y1="40" x2="100" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="120" y1="40" x2="120" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="140" y1="40" x2="140" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="160" y1="40" x2="160" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="180" y1="40" x2="180" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="200" y1="40" x2="200" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="220" y1="40" x2="220" y2="240" stroke="#000000" stroke-width="0.8" />
        <line x1="240" y1="40" x2="240" y2="240" stroke="#000000" stroke-width="0.8" />

        <!-- Axes -->
        <!-- y-axis -->
        <line x1="40" y1="25" x2="40" y2="245" stroke="#000000" stroke-width="2" />
        <!-- x-axis -->
        <line x1="35" y1="240" x2="255" y2="240" stroke="#000000" stroke-width="2" />

        <!-- Axis Arrows -->
        <polygon points="40,20 36,27 44,27" fill="#000000" />
        <polygon points="260,240 253,236 253,244" fill="#000000" />

        <!-- Axis Labels x and y -->
        <text x="265" y="244" font-size="13" font-style="italic" font-weight="bold" fill="#000000">x</text>
        <text x="38" y="14" font-size="13" font-style="italic" font-weight="bold" fill="#000000">y</text>
        <text x="28" y="252" font-size="12" font-style="italic" fill="#000000">O</text>

        <!-- y-axis labels: 2, 4, 6, 8, 10 -->
        <text x="28" y="204" font-size="11" fill="#000000" text-anchor="end">2</text>
        <text x="28" y="164" font-size="11" fill="#000000" text-anchor="end">4</text>
        <text x="28" y="124" font-size="11" fill="#000000" text-anchor="end">6</text>
        <text x="28" y="84" font-size="11" fill="#000000" text-anchor="end">8</text>
        <text x="28" y="44" font-size="11" fill="#000000" text-anchor="end">10</text>

        <!-- x-axis labels: 2, 4, 6, 8, 10 -->
        <text x="80" y="256" font-size="11" fill="#000000" text-anchor="middle">2</text>
        <text x="120" y="256" font-size="11" fill="#000000" text-anchor="middle">4</text>
        <text x="160" y="256" font-size="11" fill="#000000" text-anchor="middle">6</text>
        <text x="200" y="256" font-size="11" fill="#000000" text-anchor="middle">8</text>
        <text x="240" y="256" font-size="11" fill="#000000" text-anchor="middle">10</text>

        <!-- Line of Best Fit from (0, 3.2) to (10, 9.2) -->
        <line x1="40" y1="176" x2="240" y2="56" stroke="#000000" stroke-width="2.5" />

        <!-- Data Points: (1,4), (3,4), (5,7), (7,8), (9,8) -->
        <circle cx="60" cy="160" r="4" fill="#000000" />
        <circle cx="100" cy="160" r="4" fill="#000000" />
        <circle cx="140" cy="100" r="4" fill="#000000" />
        <circle cx="180" cy="80" r="4" fill="#000000" />
        <circle cx="220" cy="80" r="4" fill="#000000" />
      </svg>
    </div>`,
    questionText: "Which of the following is closest to the slope of this line of best fit?",
    options: [
      { id: "A", text: "0.60" },
      { id: "B", text: "2.50" },
      { id: "C", text: "7.80" },
      { id: "D", text: "8.00" }
    ],
    correctAnswer: "A",
    explanation: "Slope = (9.4 - 4) / (10 - 1) = 5.4 / 9 = 0.60."
  },
  {
    id: 82,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Single Real Solution Quadratic",
    questionText: "Which quadratic equation has exactly one distinct real solution?",
    options: [
      { id: "A", text: "\\((x + 15)^2 = 0\\)" },
      { id: "B", text: "\\((x + 15)^2 = -45\\)" },
      { id: "C", text: "\\((x + 15)^2 = 45\\)" },
      { id: "D", text: "\\((x + 15)^2 = 135\\)" }
    ],
    correctAnswer: "A",
    explanation: "\\((x + 15)^2 = 0\\) has a discriminant of 0, yielding exactly one repeated real solution \\(x = -15\\)."
  },
  {
    id: 83,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Bus Rental Cost Linear Function",
    questionText: "The cost to rent a bus from Company X is $950 for the first 3 hours and an additional $50 per hour for each hour after the first 3 hours. The total cost for \\(t\\) hours (where \\(t > 3\\)) is $1,150. Which equation represents this situation?",
    options: [
      { id: "A", text: "\\(950(t - 3) + 50t = 1{,}150\\)" },
      { id: "B", text: "\\(950(3t) + 50t = 1{,}150\\)" },
      { id: "C", text: "\\(950 + 50(t - 3) = 1{,}150\\)" },
      { id: "D", text: "\\(950 + 50(3t) = 1{,}150\\)" }
    ],
    correctAnswer: "C",
    explanation: "Base cost is $950, and additional hours beyond 3 are \\((t - 3)\\) at $50 per hour: \\(950 + 50(t - 3) = 1{,}150\\)."
  },
  {
    id: 84,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear System Systems Graphing",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-xl font-medium  space-y-1">
      <div>\(x + y = 53\)</div>
      <div>\(11x + 18y = 730\)</div>
    </div>
    <p class="mb-3">The given equations represent the possible numbers of beach chairs, x, and umbrellas, y, rented at a park last month and the total spent, in dollars, to rent those beach chairs and umbrellas. Which of the following graphs represents this situation? Which graph represents the system of equations?</p>`,
    options: [
      { 
        id: "A", 
        text: `<div class="flex flex-col items-center gap-1">
          <div class="font-bold text-xs font-serif text-black">Graph A</div>
          <svg width="220" height="220" viewBox="0 0 240 240" class="  bg-white font-serif">
            <!-- Grid Lines (10 to 80) -->
            <line x1="65" y1="25" x2="65" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="85" y1="25" x2="85" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="105" y1="25" x2="105" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="125" y1="25" x2="125" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="145" y1="25" x2="145" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="165" y1="25" x2="165" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="185" y1="25" x2="185" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="205" y1="25" x2="205" y2="195" stroke="#000000" stroke-width="0.75" />

            <line x1="45" y1="175" x2="205" y2="175" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="155" x2="205" y2="155" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="135" x2="205" y2="135" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="115" x2="205" y2="115" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="95" x2="205" y2="95" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="75" x2="205" y2="75" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="55" x2="205" y2="55" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="35" x2="205" y2="35" stroke="#000000" stroke-width="0.75" />

            <!-- Main Axes -->
            <line x1="45" y1="195" x2="215" y2="195" stroke="#000000" stroke-width="1.8" />
            <line x1="45" y1="25" x2="45" y2="195" stroke="#000000" stroke-width="1.8" />

            <!-- Arrow Heads -->
            <polygon points="222,195 215,191 215,199" fill="#000000" />
            <polygon points="45,18 41,25 49,25" fill="#000000" />

            <!-- Axis Labels & Origin -->
            <text x="228" y="199" font-size="12" font-style="italic" fill="#000000">x</text>
            <text x="45" y="12" font-size="12" font-style="italic" fill="#000000" text-anchor="middle">y</text>
            <text x="35" y="206" font-size="12" font-style="italic" fill="#000000">O</text>

            <!-- Ticks & Numbers x-axis -->
            <line x1="65" y1="195" x2="65" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="65" y="210" font-size="10" fill="#000000" text-anchor="middle">10</text>
            <line x1="85" y1="195" x2="85" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="85" y="210" font-size="10" fill="#000000" text-anchor="middle">20</text>
            <line x1="105" y1="195" x2="105" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="105" y="210" font-size="10" fill="#000000" text-anchor="middle">30</text>
            <line x1="125" y1="195" x2="125" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="125" y="210" font-size="10" fill="#000000" text-anchor="middle">40</text>
            <line x1="145" y1="195" x2="145" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="145" y="210" font-size="10" fill="#000000" text-anchor="middle">50</text>
            <line x1="165" y1="195" x2="165" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="165" y="210" font-size="10" fill="#000000" text-anchor="middle">60</text>
            <line x1="185" y1="195" x2="185" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="185" y="210" font-size="10" fill="#000000" text-anchor="middle">70</text>
            <line x1="205" y1="195" x2="205" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="205" y="210" font-size="10" fill="#000000" text-anchor="middle">80</text>

            <!-- Ticks & Numbers y-axis -->
            <line x1="41" y1="175" x2="45" y2="175" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="178" font-size="10" fill="#000000" text-anchor="end">10</text>
            <line x1="41" y1="155" x2="45" y2="155" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="158" font-size="10" fill="#000000" text-anchor="end">20</text>
            <line x1="41" y1="135" x2="45" y2="135" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="138" font-size="10" fill="#000000" text-anchor="end">30</text>
            <line x1="41" y1="115" x2="45" y2="115" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="118" font-size="10" fill="#000000" text-anchor="end">40</text>
            <line x1="41" y1="95" x2="45" y2="95" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="98" font-size="10" fill="#000000" text-anchor="end">50</text>
            <line x1="41" y1="75" x2="45" y2="75" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="78" font-size="10" fill="#000000" text-anchor="end">60</text>
            <line x1="41" y1="55" x2="45" y2="55" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="58" font-size="10" fill="#000000" text-anchor="end">70</text>
            <line x1="41" y1="35" x2="45" y2="35" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="38" font-size="10" fill="#000000" text-anchor="end">80</text>

            <!-- Lines for Graph A -->
            <!-- Line 1: negative slope from (0, 40.5) to (66.4, 0) -->
            <line x1="45" y1="114" x2="178" y2="195" stroke="#000000" stroke-width="2" />
            <!-- Line 2: positive slope from (0, 0) to (85, 85) -->
            <line x1="45" y1="195" x2="215" y2="25" stroke="#000000" stroke-width="2" />
          </svg>
        </div>` 
      },
      { 
        id: "B", 
        text: `<div class="flex flex-col items-center gap-1">
          <div class="font-bold text-xs font-serif text-black">Graph B</div>
          <svg width="220" height="220" viewBox="0 0 240 240" class="  bg-white font-serif">
            <!-- Grid Lines (10 to 80) -->
            <line x1="65" y1="25" x2="65" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="85" y1="25" x2="85" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="105" y1="25" x2="105" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="125" y1="25" x2="125" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="145" y1="25" x2="145" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="165" y1="25" x2="165" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="185" y1="25" x2="185" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="205" y1="25" x2="205" y2="195" stroke="#000000" stroke-width="0.75" />

            <line x1="45" y1="175" x2="205" y2="175" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="155" x2="205" y2="155" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="135" x2="205" y2="135" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="115" x2="205" y2="115" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="95" x2="205" y2="95" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="75" x2="205" y2="75" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="55" x2="205" y2="55" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="35" x2="205" y2="35" stroke="#000000" stroke-width="0.75" />

            <!-- Main Axes -->
            <line x1="45" y1="195" x2="215" y2="195" stroke="#000000" stroke-width="1.8" />
            <line x1="45" y1="25" x2="45" y2="195" stroke="#000000" stroke-width="1.8" />

            <!-- Arrow Heads -->
            <polygon points="222,195 215,191 215,199" fill="#000000" />
            <polygon points="45,18 41,25 49,25" fill="#000000" />

            <!-- Axis Labels & Origin -->
            <text x="228" y="199" font-size="12" font-style="italic" fill="#000000">x</text>
            <text x="45" y="12" font-size="12" font-style="italic" fill="#000000" text-anchor="middle">y</text>
            <text x="35" y="206" font-size="12" font-style="italic" fill="#000000">O</text>

            <!-- Ticks & Numbers x-axis -->
            <line x1="65" y1="195" x2="65" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="65" y="210" font-size="10" fill="#000000" text-anchor="middle">10</text>
            <line x1="85" y1="195" x2="85" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="85" y="210" font-size="10" fill="#000000" text-anchor="middle">20</text>
            <line x1="105" y1="195" x2="105" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="105" y="210" font-size="10" fill="#000000" text-anchor="middle">30</text>
            <line x1="125" y1="195" x2="125" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="125" y="210" font-size="10" fill="#000000" text-anchor="middle">40</text>
            <line x1="145" y1="195" x2="145" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="145" y="210" font-size="10" fill="#000000" text-anchor="middle">50</text>
            <line x1="165" y1="195" x2="165" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="165" y="210" font-size="10" fill="#000000" text-anchor="middle">60</text>
            <line x1="185" y1="195" x2="185" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="185" y="210" font-size="10" fill="#000000" text-anchor="middle">70</text>
            <line x1="205" y1="195" x2="205" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="205" y="210" font-size="10" fill="#000000" text-anchor="middle">80</text>

            <!-- Ticks & Numbers y-axis -->
            <line x1="41" y1="175" x2="45" y2="175" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="178" font-size="10" fill="#000000" text-anchor="end">10</text>
            <line x1="41" y1="155" x2="45" y2="155" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="158" font-size="10" fill="#000000" text-anchor="end">20</text>
            <line x1="41" y1="135" x2="45" y2="135" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="138" font-size="10" fill="#000000" text-anchor="end">30</text>
            <line x1="41" y1="115" x2="45" y2="115" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="118" font-size="10" fill="#000000" text-anchor="end">40</text>
            <line x1="41" y1="95" x2="45" y2="95" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="98" font-size="10" fill="#000000" text-anchor="end">50</text>
            <line x1="41" y1="75" x2="45" y2="75" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="78" font-size="10" fill="#000000" text-anchor="end">60</text>
            <line x1="41" y1="55" x2="45" y2="55" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="58" font-size="10" fill="#000000" text-anchor="end">70</text>
            <line x1="41" y1="35" x2="45" y2="35" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="38" font-size="10" fill="#000000" text-anchor="end">80</text>

            <!-- Lines for Graph B -->
            <!-- Line 1: x + y = 53 (from (0,53) to (53,0)) -->
            <line x1="45" y1="89" x2="151" y2="195" stroke="#000000" stroke-width="2" />
            <!-- Line 2: 11x + 18y = 730 (from (0, 40.5) to (66.4, 0)) -->
            <line x1="45" y1="114" x2="178" y2="195" stroke="#000000" stroke-width="2" />
          </svg>
        </div>` 
      },
      { 
        id: "C", 
        text: `<div class="flex flex-col items-center gap-1">
          <div class="font-bold text-xs font-serif text-black">Graph C</div>
          <svg width="220" height="220" viewBox="0 0 240 240" class="  bg-white font-serif">
            <!-- Grid Lines (10 to 80) -->
            <line x1="65" y1="25" x2="65" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="85" y1="25" x2="85" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="105" y1="25" x2="105" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="125" y1="25" x2="125" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="145" y1="25" x2="145" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="165" y1="25" x2="165" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="185" y1="25" x2="185" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="205" y1="25" x2="205" y2="195" stroke="#000000" stroke-width="0.75" />

            <line x1="45" y1="175" x2="205" y2="175" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="155" x2="205" y2="155" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="135" x2="205" y2="135" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="115" x2="205" y2="115" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="95" x2="205" y2="95" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="75" x2="205" y2="75" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="55" x2="205" y2="55" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="35" x2="205" y2="35" stroke="#000000" stroke-width="0.75" />

            <!-- Main Axes -->
            <line x1="45" y1="195" x2="215" y2="195" stroke="#000000" stroke-width="1.8" />
            <line x1="45" y1="25" x2="45" y2="195" stroke="#000000" stroke-width="1.8" />

            <!-- Arrow Heads -->
            <polygon points="222,195 215,191 215,199" fill="#000000" />
            <polygon points="45,18 41,25 49,25" fill="#000000" />

            <!-- Axis Labels & Origin -->
            <text x="228" y="199" font-size="12" font-style="italic" fill="#000000">x</text>
            <text x="45" y="12" font-size="12" font-style="italic" fill="#000000" text-anchor="middle">y</text>
            <text x="35" y="206" font-size="12" font-style="italic" fill="#000000">O</text>

            <!-- Ticks & Numbers x-axis -->
            <line x1="65" y1="195" x2="65" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="65" y="210" font-size="10" fill="#000000" text-anchor="middle">10</text>
            <line x1="85" y1="195" x2="85" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="85" y="210" font-size="10" fill="#000000" text-anchor="middle">20</text>
            <line x1="105" y1="195" x2="105" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="105" y="210" font-size="10" fill="#000000" text-anchor="middle">30</text>
            <line x1="125" y1="195" x2="125" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="125" y="210" font-size="10" fill="#000000" text-anchor="middle">40</text>
            <line x1="145" y1="195" x2="145" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="145" y="210" font-size="10" fill="#000000" text-anchor="middle">50</text>
            <line x1="165" y1="195" x2="165" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="165" y="210" font-size="10" fill="#000000" text-anchor="middle">60</text>
            <line x1="185" y1="195" x2="185" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="185" y="210" font-size="10" fill="#000000" text-anchor="middle">70</text>
            <line x1="205" y1="195" x2="205" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="205" y="210" font-size="10" fill="#000000" text-anchor="middle">80</text>

            <!-- Ticks & Numbers y-axis -->
            <line x1="41" y1="175" x2="45" y2="175" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="178" font-size="10" fill="#000000" text-anchor="end">10</text>
            <line x1="41" y1="155" x2="45" y2="155" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="158" font-size="10" fill="#000000" text-anchor="end">20</text>
            <line x1="41" y1="135" x2="45" y2="135" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="138" font-size="10" fill="#000000" text-anchor="end">30</text>
            <line x1="41" y1="115" x2="45" y2="115" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="118" font-size="10" fill="#000000" text-anchor="end">40</text>
            <line x1="41" y1="95" x2="45" y2="95" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="98" font-size="10" fill="#000000" text-anchor="end">50</text>
            <line x1="41" y1="75" x2="45" y2="75" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="78" font-size="10" fill="#000000" text-anchor="end">60</text>
            <line x1="41" y1="55" x2="45" y2="55" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="58" font-size="10" fill="#000000" text-anchor="end">70</text>
            <line x1="41" y1="35" x2="45" y2="35" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="38" font-size="10" fill="#000000" text-anchor="end">80</text>

            <!-- Lines for Graph C -->
            <!-- Line 1: negative slope from (0, 53) to (53, 0) -->
            <line x1="45" y1="89" x2="151" y2="195" stroke="#000000" stroke-width="2" />
            <!-- Line 2: positive slope starting at (0, 40) -->
            <line x1="45" y1="114" x2="190" y2="25" stroke="#000000" stroke-width="2" />
          </svg>
        </div>` 
      },
      { 
        id: "D", 
        text: `<div class="flex flex-col items-center gap-1">
          <div class="font-bold text-xs font-serif text-black">Graph D</div>
          <svg width="220" height="220" viewBox="0 0 240 240" class="  bg-white font-serif">
            <!-- Grid Lines (10 to 80) -->
            <line x1="65" y1="25" x2="65" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="85" y1="25" x2="85" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="105" y1="25" x2="105" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="125" y1="25" x2="125" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="145" y1="25" x2="145" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="165" y1="25" x2="165" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="185" y1="25" x2="185" y2="195" stroke="#000000" stroke-width="0.75" />
            <line x1="205" y1="25" x2="205" y2="195" stroke="#000000" stroke-width="0.75" />

            <line x1="45" y1="175" x2="205" y2="175" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="155" x2="205" y2="155" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="135" x2="205" y2="135" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="115" x2="205" y2="115" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="95" x2="205" y2="95" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="75" x2="205" y2="75" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="55" x2="205" y2="55" stroke="#000000" stroke-width="0.75" />
            <line x1="45" y1="35" x2="205" y2="35" stroke="#000000" stroke-width="0.75" />

            <!-- Main Axes -->
            <line x1="45" y1="195" x2="215" y2="195" stroke="#000000" stroke-width="1.8" />
            <line x1="45" y1="25" x2="45" y2="195" stroke="#000000" stroke-width="1.8" />

            <!-- Arrow Heads -->
            <polygon points="222,195 215,191 215,199" fill="#000000" />
            <polygon points="45,18 41,25 49,25" fill="#000000" />

            <!-- Axis Labels & Origin -->
            <text x="228" y="199" font-size="12" font-style="italic" fill="#000000">x</text>
            <text x="45" y="12" font-size="12" font-style="italic" fill="#000000" text-anchor="middle">y</text>
            <text x="35" y="206" font-size="12" font-style="italic" fill="#000000">O</text>

            <!-- Ticks & Numbers x-axis -->
            <line x1="65" y1="195" x2="65" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="65" y="210" font-size="10" fill="#000000" text-anchor="middle">10</text>
            <line x1="85" y1="195" x2="85" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="85" y="210" font-size="10" fill="#000000" text-anchor="middle">20</text>
            <line x1="105" y1="195" x2="105" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="105" y="210" font-size="10" fill="#000000" text-anchor="middle">30</text>
            <line x1="125" y1="195" x2="125" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="125" y="210" font-size="10" fill="#000000" text-anchor="middle">40</text>
            <line x1="145" y1="195" x2="145" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="145" y="210" font-size="10" fill="#000000" text-anchor="middle">50</text>
            <line x1="165" y1="195" x2="165" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="165" y="210" font-size="10" fill="#000000" text-anchor="middle">60</text>
            <line x1="185" y1="195" x2="185" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="185" y="210" font-size="10" fill="#000000" text-anchor="middle">70</text>
            <line x1="205" y1="195" x2="205" y2="199" stroke="#000000" stroke-width="1.5" />
            <text x="205" y="210" font-size="10" fill="#000000" text-anchor="middle">80</text>

            <!-- Ticks & Numbers y-axis -->
            <line x1="41" y1="175" x2="45" y2="175" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="178" font-size="10" fill="#000000" text-anchor="end">10</text>
            <line x1="41" y1="155" x2="45" y2="155" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="158" font-size="10" fill="#000000" text-anchor="end">20</text>
            <line x1="41" y1="135" x2="45" y2="135" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="138" font-size="10" fill="#000000" text-anchor="end">30</text>
            <line x1="41" y1="115" x2="45" y2="115" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="118" font-size="10" fill="#000000" text-anchor="end">40</text>
            <line x1="41" y1="95" x2="45" y2="95" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="98" font-size="10" fill="#000000" text-anchor="end">50</text>
            <line x1="41" y1="75" x2="45" y2="75" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="78" font-size="10" fill="#000000" text-anchor="end">60</text>
            <line x1="41" y1="55" x2="45" y2="55" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="58" font-size="10" fill="#000000" text-anchor="end">70</text>
            <line x1="41" y1="35" x2="45" y2="35" stroke="#000000" stroke-width="1.5" />
            <text x="38" y="38" font-size="10" fill="#000000" text-anchor="end">80</text>

            <!-- Lines for Graph D -->
            <!-- Horizontal line y = 53 -->
            <line x1="45" y1="89" x2="205" y2="89" stroke="#000000" stroke-width="2.2" />
            <!-- Line 2: positive slope starting at (0, 40) -->
            <line x1="45" y1="114" x2="190" y2="25" stroke="#000000" stroke-width="2" />
          </svg>
        </div>` 
      }
    ],
    correctAnswer: "B",
    explanation: "Both linear equations have negative slopes and positive y-intercepts: x + y = 53 has y-intercept 53 and x-intercept 53. 11x + 18y = 730 has y-intercept 40.55 and x-intercept 66.36. Graph B correctly shows two downward-sloping lines intersecting in the first quadrant at (32, 21)."
  },
  {
    id: 85,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    passageTitle: "Right Triangle Trigonometric Expression",
    passageHtml: `<p class="mb-3">In triangle \\(QRS\\) shown, \\(QR < RS\\). Which expression represents the length of \\(\\overline{QS}\\)?</p>
    <div class="my-4 p-4 bg-white  flex flex-col items-center justify-center ">
      <svg width="280" height="180" viewBox="0 0 280 180" class="max-w-full font-serif">
        <!-- Right Triangle QRS -->
        <polygon points="230,30 230,140 40,140" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" />
        
        <!-- Right angle mark at R (230, 140) -->
        <rect x="218" y="128" width="12" height="12" fill="none" stroke="#000000" stroke-width="1.5" />

        <!-- Labels -->
        <text x="230" y="20" font-size="14" font-style="italic" fill="#000000" text-anchor="middle">Q</text>
        <text x="238" y="152" font-size="14" font-style="italic" fill="#000000">R</text>
        <text x="25" y="152" font-size="14" font-style="italic" fill="#000000">S</text>

        <!-- Side SR label = 18 -->
        <text x="135" y="158" font-size="13" fill="#000000" text-anchor="middle">18</text>
      </svg>
      <div class="mt-2 text-xs font-serif text-black italic">Note: Figure not drawn to scale.</div>
    </div>`,
    questionText: "Which expression represents the length of \\(\\overline{QS}\\)?",
    options: [
      { id: "A", text: "\\(18 \\cos Q\\)" },
      { id: "B", text: "\\(18 \\sin Q\\)" },
      { id: "C", text: "\\(\\frac{18}{\\cos Q}\\)" },
      { id: "D", text: "\\(\\frac{18}{\\sin Q}\\)" }
    ],
    correctAnswer: "D",
    explanation: "In right triangle \\(QRS\\) with right angle at \\(R\\), \\(\\sin Q = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{RS}{QS} = \\frac{18}{QS}\\). Rearranging gives \\(QS = \\frac{18}{\\sin Q}\\)."
  },
  {
    id: 86,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    passageTitle: "Concentric Circles Radius Relation",
    questionText: "Circle A in the \\(xy\\)-plane has equation \\((x + 5)^2 + (y - 5)^2 = 25\\). Circle B has the same center as circle A, but its radius is two times the radius of circle A. The equation defining circle B is \\((x + 5)^2 + (y - 5)^2 = k\\). What is the value of \\(k\\)?",
    options: [],
    correctAnswer: "100",
    explanation: "Circle A radius \\(r_A = \\sqrt{25} = 5\\). Circle B radius \\(r_B = 2 \\times 5 = 10\\). Thus \\(k = r_B^2 = 10^2 = 100\\)."
  },
  {
    id: 87,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Quadratic Formula Constant k",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl font-mono text-center text-lg font-bold ">
      \\(x^2 + 7x + 5 = 0\\)
    </div>
    <p class="mb-3">One solution can be written as \\(x = \\frac{-7 + \\sqrt{k}}{2}\\), where \\(k\\) is a constant. What is the value of \\(k\\)?</p>`,
    options: [],
    correctAnswer: "29",
    explanation: "Quadratic formula: \\(b^2 - 4ac = 7^2 - 4(1)(5) = 49 - 20 = 29\\). So \\(k = 29\\)."
  },
  {
    id: 88,
    type: "Math",
    module: 1,
    domain: "Problem Solving & Data Analysis",
    passageTitle: "Weighted Mean Gray Seals Length",
    questionText: "A scientist measured lengths of 240 gray seals from Muskeget Island (mean length 88 inches) and 120 gray seals from Sable Island (mean length 94 inches). What was the mean length of all 360 gray seals measured?",
    options: [
      { id: "A", text: "89" },
      { id: "B", text: "90" },
      { id: "C", text: "91" },
      { id: "D", text: "92" }
    ],
    correctAnswer: "B",
    explanation: "Weighted mean = \\([240(88) + 120(94)] / 360 = (21{,}120 + 11{,}280) / 360 = 32{,}400 / 360 = 90\\)."
  },
  {
    id: 89,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    passageTitle: "Transformed Exponential Graph Function",
    passageHtml: `<p class="mb-3">The graph of \\(y = f(x) + 4\\) is shown.</p>
    <div class="my-4 p-4 bg-white  flex flex-col items-center justify-center ">
      <svg width="300" height="340" viewBox="0 0 300 340" class="max-w-full font-serif">
        <!-- Grid Lines -->
        <line x1="50" y1="20" x2="50" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="85" y1="20" x2="85" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="120" y1="20" x2="120" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="155" y1="20" x2="155" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="190" y1="20" x2="190" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="225" y1="20" x2="225" y2="310" stroke="#000000" stroke-width="0.8" />
        <line x1="260" y1="20" x2="260" y2="310" stroke="#000000" stroke-width="0.8" />

        <line x1="35" y1="40" x2="275" y2="40" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="58" x2="275" y2="58" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="76" x2="275" y2="76" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="94" x2="275" y2="94" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="112" x2="275" y2="112" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="130" x2="275" y2="130" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="148" x2="275" y2="148" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="166" x2="275" y2="166" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="184" x2="275" y2="184" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="202" x2="275" y2="202" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="220" x2="275" y2="220" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="238" x2="275" y2="238" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="256" x2="275" y2="256" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="274" x2="275" y2="274" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="292" x2="275" y2="292" stroke="#000000" stroke-width="0.8" />
        <line x1="35" y1="310" x2="275" y2="310" stroke="#000000" stroke-width="0.8" />

        <!-- Main Axes -->
        <line x1="30" y1="220" x2="282" y2="220" stroke="#000000" stroke-width="1.8" />
        <polygon points="288,220 281,216 281,224" fill="#000000" />
        <text x="294" y="224" font-size="13" font-style="italic" fill="#000000">x</text>

        <line x1="85" y1="315" x2="85" y2="18" stroke="#000000" stroke-width="1.8" />
        <polygon points="85,12 81,19 89,19" fill="#000000" />
        <text x="85" y="6" font-size="13" font-style="italic" fill="#000000" text-anchor="middle">y</text>

        <!-- Origin O -->
        <text x="76" y="231" font-size="12" font-style="italic" fill="#000000" text-anchor="end">O</text>

        <!-- x-axis tick marks and labels -->
        <line x1="50" y1="216" x2="50" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="50" y="234" font-size="11" fill="#000000" text-anchor="middle">-1</text>

        <line x1="120" y1="216" x2="120" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="120" y="234" font-size="11" fill="#000000" text-anchor="middle">1</text>

        <line x1="155" y1="216" x2="155" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="155" y="234" font-size="11" fill="#000000" text-anchor="middle">2</text>

        <line x1="190" y1="216" x2="190" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="190" y="234" font-size="11" fill="#000000" text-anchor="middle">3</text>

        <line x1="225" y1="216" x2="225" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="225" y="234" font-size="11" fill="#000000" text-anchor="middle">4</text>

        <line x1="260" y1="216" x2="260" y2="224" stroke="#000000" stroke-width="1.5" />
        <text x="260" y="234" font-size="11" fill="#000000" text-anchor="middle">5</text>

        <!-- y-axis tick marks and labels -->
        <line x1="81" y1="292" x2="89" y2="292" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="296" font-size="11" fill="#000000" text-anchor="end">-4</text>

        <line x1="81" y1="256" x2="89" y2="256" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="260" font-size="11" fill="#000000" text-anchor="end">-2</text>

        <line x1="81" y1="184" x2="89" y2="184" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="188" font-size="11" fill="#000000" text-anchor="end">2</text>

        <line x1="81" y1="148" x2="89" y2="148" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="152" font-size="11" fill="#000000" text-anchor="end">4</text>

        <line x1="81" y1="112" x2="89" y2="112" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="116" font-size="11" fill="#000000" text-anchor="end">6</text>

        <line x1="81" y1="76" x2="89" y2="76" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="80" font-size="11" fill="#000000" text-anchor="end">8</text>

        <line x1="81" y1="40" x2="89" y2="40" stroke="#000000" stroke-width="1.5" />
        <text x="78" y="44" font-size="11" fill="#000000" text-anchor="end">10</text>

        <!-- Curve y = -3^x + 9 -->
        <path d="M 35,60.5 C 50,63 67,68 85,76 C 102.5,89 113,100 120,112 C 137.5,151.5 147,187.5 155,220 C 160,240 163.75,289 166.2,313" fill="none" stroke="#000000" stroke-width="2.2" />
      </svg>
    </div>`,
    questionText: "Which equation defines function \\(f\\)?",
    options: [
      { id: "A", text: "\\(f(x) = -3^x + 1\\)" },
      { id: "B", text: "\\(f(x) = -3^x + 5\\)" },
      { id: "C", text: "\\(f(x) = -3^x + 8\\)" },
      { id: "D", text: "\\(f(x) = -3^x + 9\\)" }
    ],
    correctAnswer: "B",
    explanation: "If \\(f(x) = -3^x + 5\\), then \\(y = f(x) + 4 = -3^x + 9\\). At \\(x = 0\\), \\(y = -1 + 9 = 8\\), matching the curve behavior."
  },
  {
    id: 90,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    passageTitle: "Intersecting Lines Angle Sums",
    questionText: "Two lines intersect at one point, forming two acute angles and two obtuse angles. One angle measures \\((9x - 140)^\\circ\\). Which of the following could NOT be the sum of the measures of any two of these angles?",
    options: [
      { id: "A", text: "\\((-18x + 280)^\\circ\\)" },
      { id: "B", text: "\\((-18x + 640)^\\circ\\)" },
      { id: "C", text: "\\((18x - 280)^\\circ\\)" },
      { id: "D", text: "180°" }
    ],
    correctAnswer: "A",
    explanation: "Sum of vertical angles is \\(2(9x - 140) = 18x - 280\\). Sum of adjacent supplementary angles is 180°. \\((-18x + 280)^\\circ\\) cannot be a valid sum of two angle measures."
  },
  {
    id: 91,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear System Solvability Conditions",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl font-mono text-center text-lg font-bold ">
      \\(2x + 9y = 7\\)
    </div>
    <p class="mb-3">Which of the following equations could be the second equation in a system with at least one solution?</p>
    <p class="text-xs font-mono bg-white p-2.5 rounded border border-black">I. \\(3x + 13.5y = 10.5\\)<br />II. \\(3x - 13.5y = 10.5\\)</p>`,
    options: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "I and II" },
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "C",
    explanation: "Equation I is 1.5 times the first equation (infinitely many solutions). Equation II has a different slope (one unique solution). Both have at least one solution."
  },
  {
    id: 92,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    passageTitle: "Right Rectangular Prism Surface Area",
    questionText: "A right rectangular prism has a base area of \\(24t\\text{ cm}^2\\), base length \\(\\frac{8}{3}\\text{ cm}\\), and height 15 cm. Which expression represents the surface area, in cm², of the right rectangular prism?",
    options: [
      { id: "A", text: "\\(48t + 160\\)" },
      { id: "B", text: "\\(318t + 80\\)" },
      { id: "C", text: "\\(1{,}968t + 80\\)" },
      { id: "D", text: "\\(360t\\)" }
    ],
    correctAnswer: "B",
    explanation: "Width \\(w = 24t / (8/3) = 9t\\). \\(\\text{SA} = 2(24t) + 2(8/3 \\times 15) + 2(9t \\times 15) = 48t + 80 + 270t = 318t + 80\\)."
  },
  {
    id: 93,
    type: "Math",
    module: 1,
    domain: "Algebra",
    passageTitle: "Linear Engine Horsepower Function",
    questionText: `<p class="mb-3">For a particular car, the linear function \\(f\\) gives the predicted power, in brake horsepower (bhp), for engine speeds between 1,000 revolutions per minute (rpm) and 6,000 rpm. According to this function, the car’s predicted power is 433 bhp at an engine speed of 3,331 rpm and 600 bhp at an engine speed of 4,500 rpm. The equation \\(f(x) = \\frac{1}{7}(x - a) + 433\\) defines \\(f\\), where \\(x\\) is the engine speed, in rpm, and \\(a\\) is a constant.</p><p>What is the value of \\(a\\)?</p>`,
    options: [],
    correctAnswer: "3331",
    explanation: "According to the function, when the engine speed is \\(x = 3{,}331\\text{ rpm}\\), the predicted power is \\(f(3{,}331) = 433\\text{ bhp}\\).\n\nSubstituting \\(x = 3{,}331\\) and \\(f(x) = 433\\) into the given equation:\n\\[433 = \\frac{1}{7}(3{,}331 - a) + 433\\]\n\nSubtracting 433 from both sides:\n\\[0 = \\frac{1}{7}(3{,}331 - a)\\]\n\\[0 = 3{,}331 - a\\]\n\\[a = 3{,}331\\]\n\nWe can also verify using the second point \\((4{,}500, 600)\\):\n\\[f(4{,}500) = \\frac{1}{7}(4{,}500 - 3{,}331) + 433 = \\frac{1}{7}(1{,}169) + 433 = 167 + 433 = 600\\]\n\nTherefore, the value of \\(a\\) is **3331** (or 3,331)."
  }
];
