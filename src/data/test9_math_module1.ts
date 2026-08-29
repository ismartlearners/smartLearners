import { Question } from "../types";

function makeTest9M1Q12Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 200 190" class="w-44 h-44 select-none">
      <!-- Circle -->
      <circle cx="100" cy="95" r="62" fill="none" stroke="#000000" stroke-width="1.75" />
      
      <!-- Diameter PR (bottom-left to top-right) -->
      <line x1="68" y1="149" x2="132" y2="41" stroke="#000000" stroke-width="1.5" />
      
      <!-- Diameter QS (top-left to bottom-right) -->
      <line x1="68" y1="41" x2="132" y2="149" stroke="#000000" stroke-width="1.5" />
      
      <!-- Point Labels -->
      <text x="64" y="30" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" text-anchor="middle" fill="#000000">S</text>
      <text x="136" y="30" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" text-anchor="middle" fill="#000000">R</text>
      <text x="62" y="169" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" text-anchor="middle" fill="#000000">P</text>
      <text x="138" y="169" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" text-anchor="middle" fill="#000000">Q</text>
      <text x="93" y="99" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" text-anchor="end" fill="#000000">O</text>
    </svg>
    <div class="text-center font-serif text-[13.5px] text-black mt-1">Note: Figure not drawn to scale.</div>
  </div>`;
}

export const TEST9_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 967,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "The lengths of two sides of a triangle are 4 centimeters and 6 centimeters. If the perimeter of the triangle is 18 centimeters, what is the length, in centimeters, of the third side of this triangle?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "8" },
      { id: "C", text: "10" },
      { id: "D", text: "24" }
    ],
    correctAnswer: "B",
    explanation: "The perimeter is the sum of all three side lengths. Let \(s\) be the third side: \(4 + 6 + s = 18 \\Rightarrow 10 + s = 18 \\Rightarrow s = 8\)."
  },
  {
    id: 968,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(16x + 30 = 190\\)</div><p class="mt-3">Which equation has the same solution as the given equation?</p>`,
    options: [
      { id: "A", text: "\\(16x = 30\\)" },
      { id: "B", text: "\\(16x = 130\\)" },
      { id: "C", text: "\\(16x = 160\\)" },
      { id: "D", text: "\\(16x = 190\\)" }
    ],
    correctAnswer: "C",
    explanation: "Subtract 30 from both sides: \\(16x = 190 - 30 \\Rightarrow 16x = 160\\)."
  },
  {
    id: 969,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "Ty set a goal to walk at least 24 kilometers every day to prepare for a multiday hike. On a certain day, Ty plans to walk at an average speed of 4 kilometers per hour. What is the minimum number of hours Ty must walk on that day to fulfill the daily goal?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "6" },
      { id: "C", text: "20" },
      { id: "D", text: "24" }
    ],
    correctAnswer: "B",
    explanation: "Distance = rate \\(\\times\\) time. \\(24 = 4 \\times t \\Rightarrow t = 6\\) hours."
  },
  {
    id: 970,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "The function \\(g\\) is defined by \\(g(x) = x^2 + 9\\). For which value of \\(x\\) is \\(g(x) = 25\\)?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "9" },
      { id: "D", text: "13" }
    ],
    correctAnswer: "A",
    explanation: "Set \\(g(x) = 25\\): \\(x^2 + 9 = 25 \\Rightarrow x^2 = 16 \\Rightarrow x = 4\\) or \\(x = -4\\)."
  },
  {
    id: 971,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "Which expression is equivalent to \\(9x^2 + 5x\\)?",
    options: [
      { id: "A", text: "\\(x(9x + 5)\\)" },
      { id: "B", text: "\\(5x(9x + 1)\\)" },
      { id: "C", text: "\\(9x(x + 5)\\)" },
      { id: "D", text: "\\(x^2(9x + 5)\\)" }
    ],
    correctAnswer: "A",
    explanation: "Factor out \\(x\\): \\(9x^2 + 5x = x(9x + 5)\\)."
  },
  {
    id: 972,
    type: "Math",
    module: 1,
    domain: "Problem-Solving and Data Analysis",
    questionText: `Each value in the data set shown represents the height, in centimeters, of a plant.\n\n<div class="my-3 text-center font-medium text-black">6, 10, 13, 2, 15, 22, 10, 4, 4, 4</div>\n\nWhat is the mean height, in centimeters, of these plants?`,
    options: [],
    correctAnswer: "9",
    explanation: "Sum = \\(6 + 10 + 13 + 2 + 15 + 22 + 10 + 4 + 4 + 4 = 90\\). Mean = \\(90 / 10 = 9\\)."
  },
  {
    id: 973,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "A student council group is selling school posters for a fundraiser. They use the function \\(p(x) = 5x - 220\\) to determine their profit \\(p(x)\\), in dollars, for selling \\(x\\) school posters. In order to earn a profit of $900, how many school posters must they sell?",
    options: [],
    correctAnswer: "224",
    explanation: "Set \\(p(x) = 900\\): \\(5x - 220 = 900 \\Rightarrow 5x = 1120 \\Rightarrow x = 224\\)."
  },
  {
    id: 974,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "Jay walks at a speed of 3 miles per hour and runs at a speed of 5 miles per hour. He walks for \\(w\\) hours and runs for \\(r\\) hours for a combined total of 14 miles. Which equation represents this situation?",
    options: [
      { id: "A", text: "\\(3w + 5r = 14\\)" },
      { id: "B", text: "\\(\\frac{1}{3}w + \\frac{1}{5}r = 14\\)" },
      { id: "C", text: "\\(\\frac{1}{3}w + \\frac{1}{5}r = 112\\)" },
      { id: "D", text: "\\(3w + 5r = 112\\)" }
    ],
    correctAnswer: "A",
    explanation: "Walking distance = \\(3w\\), running distance = \\(5r\\). Total distance = \\(3w + 5r = 14\\)."
  },
  {
    id: 975,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "John paid a total of $165 for a microscope by making a down payment of $37 plus \\(p\\) monthly payments of $16 each. Which of the following equations represents this situation?",
    options: [
      { id: "A", text: "\\(16p - 37 = 165\\)" },
      { id: "B", text: "\\(37p - 16 = 165\\)" },
      { id: "C", text: "\\(16p + 37 = 165\\)" },
      { id: "D", text: "\\(37p + 16 = 165\\)" }
    ],
    correctAnswer: "C",
    explanation: "The total paid is the down payment plus \\(p\\) payments of $16: \\(16p + 37 = 165\\)."
  },
  {
    id: 976,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(y - 57 = px\\)</div><p class="mt-3">The given equation relates the positive numbers \\(p\\), \\(x\\), and \\(y\\). Which equation correctly expresses \\(y\\) in terms of \\(p\\) and \\(x\\)?</p>`,
    options: [
      { id: "A", text: "\\(y = 57x + p\\)" },
      { id: "B", text: "\\(y = px + 57\\)" },
      { id: "C", text: "\\(y = 57px\\)" },
      { id: "D", text: "\\(y = \\frac{px}{57}\\)" }
    ],
    correctAnswer: "B",
    explanation: "Add 57 to both sides of the equation: \\(y = px + 57\\)."
  },
  {
    id: 977,
    type: "Math",
    module: 1,
    domain: "Problem-Solving and Data Analysis",
    questionText: "A company opens an account with an initial balance of $36,100.00. The account earns interest, and no additional deposits or withdrawals are made. The account balance is given by an exponential function \\(A\\), where \\(A(t)\\) is the account balance, in dollars, \\(t\\) years after the account is opened. The account balance after 13 years is $68,071.93. Which equation could define \\(A\\)?",
    options: [
      { id: "A", text: "\\(A(t) = 36{,}100.00(1.05)^t\\)" },
      { id: "B", text: "\\(A(t) = 31{,}971.93(1.05)^t\\)" },
      { id: "C", text: "\\(A(t) = 31{,}971.93(0.05)^t\\)" },
      { id: "D", text: "\\(A(t) = 36{,}100.00(0.05)^t\\)" }
    ],
    correctAnswer: "A",
    explanation: "Initial balance is $36,100.00, so \\(A(0) = 36{,}100.00\\). Testing option A with \\(t = 13\\): \\(36{,}100(1.05)^{13} \\approx 68{,}071.93\\)."
  },
  {
    id: 978,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    questionText: `${makeTest9M1Q12Svg()}<p class="mt-4">The circle shown has center \\(O\\), circumference \\(144\\pi\\), and diameters \\(\\overline{PR}\\) and \\(\\overline{QS}\\). The length of arc \\(PS\\) is twice the length of arc \\(PQ\\). What is the length of arc \\(QR\\) ?</p>`,
    options: [
      { id: "A", text: "\\(24\\pi\\)" },
      { id: "B", text: "\\(48\\pi\\)" },
      { id: "C", text: "\\(72\\pi\\)" },
      { id: "D", text: "\\(96\\pi\\)" }
    ],
    correctAnswer: "B",
    explanation: "Semicircle \\(PQR\\) has arc length \\(72\\pi\\). Arc \\(PS\\) and arc \\(QR\\) are vertical central arcs, so length of arc \\(QR\\) = arc \\(PS\\). Since arc \\(PS = 2 \\times\\) arc \\(PQ\\), let arc \\(PQ = x\\). Then arc \\(QR = 2x\\). \\(x + 2x = 72\\pi \\Rightarrow 3x = 72\\pi \\Rightarrow x = 24\\pi\\). Thus arc \\(QR = 2(24\\pi) = 48\\pi\\)."
  },
  {
    id: 979,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(y = -2x\\)<br />\\(3x + y = 40\\)</div><p class="mt-3">The solution to the given system of equations is \\((x, y)\\). What is the value of \\(x\\)?</p>`,
    options: [],
    correctAnswer: "40",
    explanation: "Substitute \\(y = -2x\\) into the second equation: \\(3x + (-2x) = 40 \\Rightarrow x = 40\\)."
  },
  {
    id: 980,
    type: "Math",
    module: 1,
    domain: "Problem-Solving and Data Analysis",
    passageTitle: "Frequency Table",
    passageHtml: `<div class="my-3 overflow-x-auto flex justify-center">
      <table class="text-sm text-black border border-black border-collapse min-w-[200px]">
        <thead class="bg-white font-bold border-b border-black">
          <tr><th class="px-4 py-1.5 text-left border-r border-black text-black">Data value</th><th class="px-4 py-1.5 text-right text-black">Frequency</th></tr>
        </thead>
        <tbody>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">6</td><td class="px-4 py-1 text-right">3</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">7</td><td class="px-4 py-1 text-right">3</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">8</td><td class="px-4 py-1 text-right">8</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">9</td><td class="px-4 py-1 text-right">8</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">10</td><td class="px-4 py-1 text-right">9</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">11</td><td class="px-4 py-1 text-right">11</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">12</td><td class="px-4 py-1 text-right">9</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1 border-r border-black">13</td><td class="px-4 py-1 text-right">0</td></tr>
          <tr><td class="px-4 py-1 border-r border-black">14</td><td class="px-4 py-1 text-right">6</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "The frequency table summarizes the 57 data values in a data set. What is the maximum data value in the data set?",
    options: [],
    correctAnswer: "14",
    explanation: "The largest data value with a non-zero frequency is 14 (frequency = 6)."
  },
  {
    id: 981,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "One leg of a right triangle has a length of 43.2 millimeters. The hypotenuse of the triangle has a length of 196.8 millimeters. What is the length of the other leg of the triangle, in millimeters?",
    options: [
      { id: "A", text: "43.2" },
      { id: "B", text: "120" },
      { id: "C", text: "192" },
      { id: "D", text: "201.5" }
    ],
    correctAnswer: "C",
    explanation: "Pythagorean theorem: \\(a^2 + 43.2^2 = 196.8^2 \\Rightarrow a^2 = 38{,}730.24 - 1{,}866.24 = 36{,}864 \\Rightarrow a = 192\\)."
  },
  {
    id: 982,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "A wire with a length of 106 inches is cut into two parts. One part has a length of \\(x\\) inches, and the other part has a length of \\(y\\) inches. The value of \\(x\\) is 6 more than 4 times the value of \\(y\\). What is the value of \\(x\\)?",
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "28" },
      { id: "C", text: "56" },
      { id: "D", text: "86" }
    ],
    correctAnswer: "D",
    explanation: "System: \\(x + y = 106\\) and \\(x = 4y + 6\\). Substitute: \\(4y + 6 + y = 106 \\Rightarrow 5y = 100 \\Rightarrow y = 20\\). Then \\(x = 4(20) + 6 = 86\\)."
  },
  {
    id: 983,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<div class="my-4 text-center font-serif text-lg">\\(f(x) = (x + 6)(x + 5)(x - 4)\\)</div><p class="mt-3">The function \\(f\\) is given. Which table of values represents \\(y = f(x) - 3\\) ?</p>`,
    options: [
      {
        id: "A",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif min-w-[100px]"><thead><tr class="border-b border-black"><th class="border-r border-black px-4 py-1 italic font-normal">x</th><th class="px-4 py-1 italic font-normal">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-6</td><td class="px-4 py-1">-9</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-5</td><td class="px-4 py-1">-8</td></tr><tr><td class="border-r border-black px-4 py-1">4</td><td class="px-4 py-1">1</td></tr></tbody></table>`
      },
      {
        id: "B",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif min-w-[100px]"><thead><tr class="border-b border-black"><th class="border-r border-black px-4 py-1 italic font-normal">x</th><th class="px-4 py-1 italic font-normal">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-6</td><td class="px-4 py-1">-3</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-5</td><td class="px-4 py-1">-3</td></tr><tr><td class="border-r border-black px-4 py-1">4</td><td class="px-4 py-1">-3</td></tr></tbody></table>`
      },
      {
        id: "C",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif min-w-[100px]"><thead><tr class="border-b border-black"><th class="border-r border-black px-4 py-1 italic font-normal">x</th><th class="px-4 py-1 italic font-normal">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-6</td><td class="px-4 py-1">-3</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-5</td><td class="px-4 py-1">-2</td></tr><tr><td class="border-r border-black px-4 py-1">4</td><td class="px-4 py-1">7</td></tr></tbody></table>`
      },
      {
        id: "D",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif min-w-[100px]"><thead><tr class="border-b border-black"><th class="border-r border-black px-4 py-1 italic font-normal">x</th><th class="px-4 py-1 italic font-normal">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-6</td><td class="px-4 py-1">3</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">-5</td><td class="px-4 py-1">3</td></tr><tr><td class="border-r border-black px-4 py-1">4</td><td class="px-4 py-1">3</td></tr></tbody></table>`
      }
    ],
    correctAnswer: "B",
    explanation: "Since \\(f(x) = (x + 6)(x + 5)(x - 4)\\), the values of \\(f(-6)\\), \\(f(-5)\\), and \\(f(4)\\) are all 0 because each makes one factor equal to 0. Therefore, for \\(y = f(x) - 3\\), when \\(x = -6\\), \\(y = 0 - 3 = -3\\); when \\(x = -5\\), \\(y = 0 - 3 = -3\\); and when \\(x = 4\\), \\(y = 0 - 3 = -3\\). Table B correctly displays these values."
  },
  {
    id: 984,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "A landscaper uses a hose that puts \\(88x\\) ounces of water in a bucket in \\(5y\\) minutes. Which expression represents the number of ounces of water the hose puts in the bucket in \\(9y\\) minutes at this rate?",
    options: [
      { id: "A", text: "\\(\\frac{9x}{440}\\)" },
      { id: "B", text: "\\(\\frac{440x}{9}\\)" },
      { id: "C", text: "\\(\\frac{5x}{792}\\)" },
      { id: "D", text: "\\(\\frac{792x}{5}\\)" }
    ],
    correctAnswer: "D",
    explanation: "Rate = \\(\\frac{88x}{5y}\\). In \\(9y\\) minutes: \\(\\frac{88x}{5y} \\times 9y = \\frac{792x}{5}\\)."
  },
  {
    id: 985,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(4x - 9y = 9y + 5\\)<br />\\(hy = 2 + 4x\\)</div><p class="mt-3">In the given system of equations, \\(h\\) is a constant. If the system has no solution, what is the value of \\(h\\)?</p>`,
    options: [
      { id: "A", text: "-9" },
      { id: "B", text: "0" },
      { id: "C", text: "9" },
      { id: "D", text: "18" }
    ],
    correctAnswer: "D",
    explanation: "First equation: \\(4x - 18y = 5\\). Second equation: \\(4x - hy = -2\\). For parallel lines with no solution, the coefficients must match: \\(-h = -18 \\Rightarrow h = 18\\)."
  },
  {
    id: 986,
    type: "Math",
    module: 1,
    domain: "Problem-Solving and Data Analysis",
    questionText: "13 is \\(p\\)% of 25. What is the value of \\(p\\)?",
    options: [],
    correctAnswer: "52",
    explanation: "\\(\\frac{13}{25} = 0.52 = 52\\%\\), so \\(p = 52\\)."
  },
  {
    id: 987,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(\\sqrt{(x - 2)^2} = \\sqrt{3x + 34}\\)</div><p class="mt-3">What is the smallest solution to the given equation?</p>`,
    options: [],
    correctAnswer: "-3",
    explanation: "Square both sides: \\((x - 2)^2 = 3x + 34 \\Rightarrow x^2 - 4x + 4 = 3x + 34 \\Rightarrow x^2 - 7x - 30 = 0 \\Rightarrow (x - 10)(x + 3) = 0\\). Solutions are \\(x = 10\\) and \\(x = -3\\). Checking \\(x = -3\\) yields valid equal values. Smallest solution is -3."
  },
  {
    id: 988,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "Function \\(f\\) is defined by \\(f(x) = (x + 6)(x + 5)(x + 1)\\). Function \\(g\\) is defined by \\(g(x) = f(x - 1)\\). The graph of \\(y = g(x)\\) in the xy-plane has x-intercepts at \\((a, 0)\\), \\((b, 0)\\), and \\((c, 0)\\), where \\(a\\), \\(b\\), and \\(c\\) are distinct constants. What is the value of \\(a + b + c\\)?",
    options: [
      { id: "A", text: "-15" },
      { id: "B", text: "-9" },
      { id: "C", text: "11" },
      { id: "D", text: "15" }
    ],
    correctAnswer: "B",
    explanation: "\\(g(x) = f(x - 1) = (x + 5)(x + 4)x\\). The roots are \\(x = -5, -4, 0\\). Their sum is \\(-5 + (-4) + 0 = -9\\)."
  },
  {
    id: 989,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "For \\(x > 0\\), the function \\(f\\) is defined as follows:\n\n\\(f(x)\\) equals 201% of \\(x\\)\n\nWhich of the following could describe this function?",
    options: [
      { id: "A", text: "Decreasing exponential" },
      { id: "B", text: "Decreasing linear" },
      { id: "C", text: "Increasing exponential" },
      { id: "D", text: "Increasing linear" }
    ],
    correctAnswer: "D",
    explanation: "\\(f(x) = 2.01x\\), which is a linear function with a positive slope (2.01), so it is an increasing linear function."
  },
  {
    id: 990,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(f(x) = 4x^2 + 64x + 262\\)</div><p class="mt-3">The function \\(g\\) is defined by \\(g(x) = f(x + 5)\\). For what value of \\(x\\) does \\(g(x)\\) reach its minimum?</p>`,
    options: [
      { id: "A", text: "-13" },
      { id: "B", text: "-8" },
      { id: "C", text: "-5" },
      { id: "D", text: "-3" }
    ],
    correctAnswer: "A",
    explanation: "Vertex of \\(f\\) is at \\(x = -\\frac{64}{2(4)} = -8\\). \\(g(x) = f(x + 5)\\), so minimum occurs when \\(x + 5 = -8 \\Rightarrow x = -13\\)."
  },
  {
    id: 991,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "One gallon of stain will cover 170 square feet of a surface. A yard has a total fence area of \\(w\\) square feet. Which equation represents the total amount of stain \\(S\\), in gallons, needed to stain the fence in this yard twice?",
    options: [
      { id: "A", text: "\\(S = \\frac{w}{170}\\)" },
      { id: "B", text: "\\(S = 170w\\)" },
      { id: "C", text: "\\(S = 340w\\)" },
      { id: "D", text: "\\(S = \\frac{w}{85}\\)" }
    ],
    correctAnswer: "D",
    explanation: "Staining twice requires \\(2w\\) sq ft. \\(S = \\frac{2w}{170} = \\frac{w}{85}\\)."
  },
  {
    id: 992,
    type: "Math",
    module: 1,
    domain: "Problem-Solving and Data Analysis",
    passageTitle: "Poll Results",
    passageHtml: `<div class="my-3 overflow-x-auto flex justify-center">
      <table class="text-sm text-black border border-black border-collapse min-w-[220px]">
        <thead class="bg-white font-bold border-b border-black">
          <tr><th colspan="2" class="px-4 py-1.5 text-center border-b border-black text-black">Poll Results</th></tr>
        </thead>
        <tbody>
          <tr class="border-b border-black"><td class="px-4 py-1.5 border-r border-black text-black text-left">Angel Cruz</td><td class="px-4 py-1.5 text-black text-right">483</td></tr>
          <tr><td class="px-4 py-1.5 border-r border-black text-black text-left">Terry Smith</td><td class="px-4 py-1.5 text-black text-right">320</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "The table shows the results of a poll. A total of 803 voters selected at random were asked which candidate they would vote for in the upcoming election. According to the poll, if 6,424 people vote in the election, by how many votes would Angel Cruz be expected to win?",
    options: [
      { id: "A", text: "163" },
      { id: "B", text: "1,304" },
      { id: "C", text: "3,864" },
      { id: "D", text: "5,621" }
    ],
    correctAnswer: "B",
    explanation: "Margin in sample = \\(483 - 320 = 163\\). Total population multiplier = \\(\\frac{6424}{803} = 8\\). Expected margin = \\(163 \\times 8 = 1{,}304\\)."
  },
  {
    id: 993,
    type: "Math",
    module: 1,
    domain: "Geometry and Trigonometry",
    questionText: "Right rectangular prism X is similar to right rectangular prism Y. The surface area of right rectangular prism X is 58 square centimeters (\\(\\text{cm}^2\\)), and the surface area of right rectangular prism Y is 1,450 \\(\\text{cm}^2\\). The volume of right rectangular prism Y is 1,250 cubic centimeters (\\(\\text{cm}^3\\)). What is the sum of the volumes, in \\(\\text{cm}^3\\), of right rectangular prism X and right rectangular prism Y?",
    options: [],
    correctAnswer: "1260",
    explanation: "Area ratio = \\(\\frac{1450}{58} = 25 \\Rightarrow k = 5\\). Volume ratio = \\(5^3 = 125\\). Volume X = \\(\\frac{1250}{125} = 10\\). Sum = \\(10 + 1250 = 1260\\)."
  }
];
