import { Question } from "../types";

function makeTest9M2Q6Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 260 160" class="w-64 h-40 select-none">
      <!-- Line s (top horizontal) -->
      <line x1="30" y1="50" x2="210" y2="50" stroke="#000000" stroke-width="1.75" />
      <text x="220" y="55" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="#000000">s</text>

      <!-- Line t (bottom horizontal) -->
      <line x1="30" y1="105" x2="210" y2="105" stroke="#000000" stroke-width="1.75" />
      <text x="220" y="110" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="#000000">t</text>

      <!-- Transversal Line c -->
      <line x1="55" y1="145" x2="195" y2="15" stroke="#000000" stroke-width="1.75" />
      <text x="200" y="16" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="#000000">c</text>

      <!-- 110° text above line t and left of line c -->
      <text x="80" y="99" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="#000000">110°</text>

      <!-- x° text above line s and right of line c -->
      <text x="172" y="44" font-style="italic" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="#000000">x°</text>
    </svg>
    <div class="text-center font-serif text-[13.5px] text-black mt-1">Note: Figure not drawn to scale.</div>
  </div>`;
}

export const TEST9_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 994,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">w + 7 = 357</div><p class="mt-3">What value of w is the solution to the given equation?</p>`,
    options: [
      { id: "A", text: "51" },
      { id: "B", text: "350" },
      { id: "C", text: "364" },
      { id: "D", text: "3,577" }
    ],
    correctAnswer: "B",
    explanation: "Subtract 7 from both sides: w = 357 - 7 = 350."
  },
  {
    id: 995,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "Which expression is equivalent to 16(x + 15)?",
    options: [
      { id: "A", text: "16x + 31" },
      { id: "B", text: "16x + 240" },
      { id: "C", text: "16x + 1" },
      { id: "D", text: "16x + 15" }
    ],
    correctAnswer: "B",
    explanation: "Distribute 16: 16 · x + 16 · 15 = 16x + 240."
  },
  {
    id: 996,
    type: "Math",
    module: 2,
    domain: "Problem-Solving and Data Analysis",
    passageTitle: "Member Demographics",
    passageHtml: `<div class="my-3 overflow-x-auto flex justify-center">
      <table class="text-sm text-black border border-black border-collapse min-w-[320px]">
        <thead class="bg-white font-bold border-b border-black">
          <tr>
            <th class="px-3 py-1.5 border-r border-black"></th>
            <th class="px-3 py-1.5 border-r border-black text-center">Live east of the river</th>
            <th class="px-3 py-1.5 border-r border-black text-center">Live west of the river</th>
            <th class="px-3 py-1.5 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="px-3 py-1.5 border-r border-black">Less than 40 years old</td>
            <td class="px-3 py-1.5 border-r border-black text-center">17</td>
            <td class="px-3 py-1.5 border-r border-black text-center">11</td>
            <td class="px-3 py-1.5 text-center">28</td>
          </tr>
          <tr class="border-b border-black">
            <td class="px-3 py-1.5 border-r border-black">At least 40 years old</td>
            <td class="px-3 py-1.5 border-r border-black text-center">18</td>
            <td class="px-3 py-1.5 border-r border-black text-center">89</td>
            <td class="px-3 py-1.5 text-center">107</td>
          </tr>
          <tr class="bg-white">
            <td class="px-3 py-1.5 border-r border-black">Total</td>
            <td class="px-3 py-1.5 border-r border-black text-center">35</td>
            <td class="px-3 py-1.5 border-r border-black text-center">100</td>
            <td class="px-3 py-1.5 text-center">135</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    questionText: "The table summarizes members of a local organization by age and whether they live east or west of the river. If a member of the organization is selected at random, what is the probability that the selected member is at least 40 years old?",
    options: [
      { id: "A", text: "\\(\\frac{28}{135}\\)" },
      { id: "B", text: "\\(\\frac{35}{135}\\)" },
      { id: "C", text: "\\(\\frac{100}{135}\\)" },
      { id: "D", text: "\\(\\frac{107}{135}\\)" }
    ],
    correctAnswer: "D",
    explanation: "Total members = 135. Members who are at least 40 years old = 107. Probability = \\(\\frac{107}{135}\\)."
  },
  {
    id: 997,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">3x = 12<br />-3x + y = -6</div><p class="mt-3">The solution to the given system of equations is (x, y). What is the value of y?</p>`,
    options: [
      { id: "A", text: "-3" },
      { id: "B", text: "6" },
      { id: "C", text: "18" },
      { id: "D", text: "30" }
    ],
    correctAnswer: "B",
    explanation: "From first equation: 3x = 12 ⇒ x = 4. Substitute into second equation: -3(4) + y = -6 ⇒ -12 + y = -6 ⇒ y = 6."
  },
  {
    id: 998,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "A line in the \\(xy\\)-plane has a slope of \\(\\frac{1}{9}\\) and passes through the point \\((0, 14)\\). Which equation represents this line?",
    options: [
      { id: "A", text: "\\(y = -\\frac{1}{9}x - 14\\)" },
      { id: "B", text: "\\(y = -\\frac{1}{9}x + 14\\)" },
      { id: "C", text: "\\(y = \\frac{1}{9}x - 14\\)" },
      { id: "D", text: "\\(y = \\frac{1}{9}x + 14\\)" }
    ],
    correctAnswer: "D",
    explanation: "Slope-intercept form is \\(y = mx + b\\). Given slope \\(m = \\frac{1}{9}\\) and y-intercept \\((0, 14)\\) where \\(b = 14\\), the equation of the line is \\(y = \\frac{1}{9}x + 14\\)."
  },
  {
    id: 999,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    questionText: `${makeTest9M2Q6Svg()}<p class="mt-4">In the figure shown, line \\(c\\) intersects parallel lines \\(s\\) and \\(t\\). What is the value of \\(x\\) ?</p>`,
    options: [],
    correctAnswer: "70",
    explanation: "Since lines \\(s\\) and \\(t\\) are parallel, the angle supplementary to \\(110^\\circ\\) along transversal \\(c\\) corresponds to \\(x^\\circ\\). Therefore, \\(x + 110 = 180 \\implies x = 70\\)."
  },
  {
    id: 1000,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif text-lg">\\(f(x) = x + \\frac{8}{11}\\)</div><p class="mt-4">The function \\(f\\) is defined by the given equation.</p><p class="mt-3">What is the value of \\(f(x)\\) when \\(x = \\frac{3}{11}\\) ?</p>`,
    options: [],
    correctAnswer: "1",
    explanation: "\\(f\\left(\\frac{3}{11}\\right) = \\frac{3}{11} + \\frac{8}{11} = \\frac{11}{11} = 1\\)."
  },
  {
    id: 1001,
    type: "Math",
    module: 2,
    domain: "Algebra",
    passageTitle: "Linear Function Values",
    passageHtml: `<div class="my-3 overflow-x-auto flex justify-center">
      <table class="text-sm text-black border border-black border-collapse min-w-[160px]">
        <thead class="bg-white font-bold border-b border-black">
          <tr><th class="px-4 py-1.5 text-center border-r border-black">x</th><th class="px-4 py-1.5 text-center">y</th></tr>
        </thead>
        <tbody>
          <tr class="border-b border-black"><td class="px-4 py-1.5 text-center border-r border-black">0</td><td class="px-4 py-1.5 text-center">18</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1.5 text-center border-r border-black">1</td><td class="px-4 py-1.5 text-center">13</td></tr>
          <tr><td class="px-4 py-1.5 text-center border-r border-black">2</td><td class="px-4 py-1.5 text-center">8</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "The table shows three values of x and their corresponding values of y. There is a linear relationship between x and y. Which of the following equations represents this relationship?",
    options: [
      { id: "A", text: "y = 18x + 13" },
      { id: "B", text: "y = 18x + 18" },
      { id: "C", text: "y = -5x + 13" },
      { id: "D", text: "y = -5x + 18" }
    ],
    correctAnswer: "D",
    explanation: "y-intercept is (0, 18), so b = 18. Slope m = (13 - 18)/(1 - 0) = -5. The equation is y = -5x + 18."
  },
  {
    id: 1002,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">x + 7 = 10<br />(x + 7)² = y</div><p class="mt-3">Which ordered pair (x, y) is a solution to the given system of equations?</p>`,
    options: [
      { id: "A", text: "(3, 100)" },
      { id: "B", text: "(3, 3)" },
      { id: "C", text: "(3, 10)" },
      { id: "D", text: "(3, 70)" }
    ],
    correctAnswer: "A",
    explanation: "From first equation: x = 3. Substitute x + 7 = 10 into second equation: \(y = 10^2 = 100\). The ordered pair is (3, 100)."
  },
  {
    id: 1003,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "The function f is defined by f(x) = 7x - 84. What is the x-intercept of the graph of y = f(x) in the xy-plane?",
    options: [
      { id: "A", text: "(-12, 0)" },
      { id: "B", text: "(-7, 0)" },
      { id: "C", text: "(7, 0)" },
      { id: "D", text: "(12, 0)" }
    ],
    correctAnswer: "D",
    explanation: "Set f(x) = 0 ⇒ 7x - 84 = 0 ⇒ 7x = 84 ⇒ x = 12. The x-intercept is (12, 0)."
  },
  {
    id: 1004,
    type: "Math",
    module: 2,
    domain: "Problem-Solving and Data Analysis",
    passageTitle: "Savings Account",
    passageHtml: `<div class="my-3 overflow-x-auto flex justify-center">
      <table class="text-sm text-black border border-black border-collapse min-w-[260px]">
        <thead class="bg-white font-bold border-b border-black">
          <tr><th class="px-4 py-1.5 text-center border-r border-black">Time (years)</th><th class="px-4 py-1.5 text-center">Total amount (dollars)</th></tr>
        </thead>
        <tbody>
          <tr class="border-b border-black"><td class="px-4 py-1.5 text-center border-r border-black">0</td><td class="px-4 py-1.5 text-center">604.00</td></tr>
          <tr class="border-b border-black"><td class="px-4 py-1.5 text-center border-r border-black">1</td><td class="px-4 py-1.5 text-center">606.42</td></tr>
          <tr><td class="px-4 py-1.5 text-center border-r border-black">2</td><td class="px-4 py-1.5 text-center">608.84</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "Rosa opened a savings account at a bank. The table shows the exponential relationship between the time t, in years, since Rosa opened the account and the total amount n, in dollars, in the account. If Rosa made no additional deposits or withdrawals, which of the following equations best represents the relationship between t and n?",
    options: [
      { id: "A", text: "n = (1 + 604)ᵗ" },
      { id: "B", text: "n = (1 + 0.004)ᵗ" },
      { id: "C", text: "n = 604(1 + 0.004)ᵗ" },
      { id: "D", text: "n = 0.004(1 + 604)ᵗ" }
    ],
    correctAnswer: "C",
    explanation: "Initial amount \(n(0) = 604.00\). Growth multiplier per year = \(\frac{606.42}{604.00} = 1.004 = 1 + 0.004\). Thus, \(n = 604(1 + 0.004)^t\)."
  },
  {
    id: 1005,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">w(t) = 300 - 4t</div><p class="mt-3">The function w models the volume of liquid, in milliliters, in a container \(t\) seconds after it begins draining from a hole at the bottom. According to the model, what is the predicted volume, in milliliters, draining from the container each second?</p>`,
    options: [
      { id: "A", text: "300" },
      { id: "B", text: "296" },
      { id: "C", text: "75" },
      { id: "D", text: "4" }
    ],
    correctAnswer: "D",
    explanation: "The slope is -4, meaning 4 milliliters drain from the container each second."
  },
  {
    id: 1006,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">h(x) = x + b</div><p class="mt-3">For the linear function h, b is a constant and h(0) = 45. What is the value of b?</p>`,
    options: [],
    correctAnswer: "45",
    explanation: "h(0) = 0 + b = 45 \\Rightarrow b = 45\)."
  },
  {
    id: 1007,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">z² + 10z - 24 = 0</div><p class="mt-3">What is one of the solutions to the given equation?</p>`,
    options: [],
    correctAnswer: "2",
    explanation: "Factor: (z + 12)(z - 2) = 0 ⇒ z = -12 or z = 2."
  },
  {
    id: 1008,
    type: "Math",
    module: 2,
    domain: "Geometry and Trigonometry",
    questionText: "Triangle \\(FGH\\) is similar to triangle \\(JKL\\), where angle \\(F\\) corresponds to angle \\(J\\) and angles \\(G\\) and \\(K\\) are right angles. If \\(\\sin(F) = \\frac{308}{317}\\), what is the value of \\(\\sin(J)\\) ?",
    options: [
      { id: "A", text: "\\(\\frac{75}{317}\\)" },
      { id: "B", text: "\\(\\frac{308}{317}\\)" },
      { id: "C", text: "\\(\\frac{317}{308}\\)" },
      { id: "D", text: "\\(\\frac{317}{75}\\)" }
    ],
    correctAnswer: "B",
    explanation: "In similar triangles, corresponding angles are equal in measure, so \\(m\\angle J = m\\angle F\\). Therefore, \\(\\sin(J) = \\sin(F) = \\frac{308}{317}\\)."
  },
  {
    id: 1009,
    type: "Math",
    module: 2,
    domain: "Problem-Solving and Data Analysis",
    questionText: "The population of Greenville increased by 7% from 2015 to 2016. If the 2016 population is k times the 2015 population, what is the value of k?",
    options: [
      { id: "A", text: "0.07" },
      { id: "B", text: "0.7" },
      { id: "C", text: "1.07" },
      { id: "D", text: "1.7" }
    ],
    correctAnswer: "C",
    explanation: "An increase of 7% means the new population is 1 + 0.07 = 1.07 times the original population, so k = 1.07."
  },
  {
    id: 1010,
    type: "Math",
    module: 2,
    domain: "Problem-Solving and Data Analysis",
    passageTitle: "Dot Plots",
    passageHtml: `<div class="my-3 p-4 bg-white  flex flex-col items-center justify-center  gap-4">
      <div class="flex flex-col md:flex-row gap-8 items-center justify-center text-center">
        <div>
          <div class="font-bold text-black mb-1 text-sm">Class A</div>
          <svg width="180" height="100" viewBox="0 0 180 100" class="font-sans">
            <line x1="20" y1="80" x2="160" y2="80" stroke="#000000" stroke-width="1.5" />
            <text x="30" y="95" text-anchor="middle" font-size="11">1</text>
            <text x="50" y="95" text-anchor="middle" font-size="11">2</text>
            <text x="70" y="95" text-anchor="middle" font-size="11">3</text>
            <text x="90" y="95" text-anchor="middle" font-size="11">4</text>
            <text x="110" y="95" text-anchor="middle" font-size="11">5</text>
            <text x="130" y="95" text-anchor="middle" font-size="11">6</text>
            <text x="150" y="95" text-anchor="middle" font-size="11">7</text>
            <circle cx="30" cy="70" r="3" fill="#000000" />
            <circle cx="50" cy="70" r="3" fill="#000000" /><circle cx="50" cy="60" r="3" fill="#000000" />
            <circle cx="70" cy="70" r="3" fill="#000000" /><circle cx="70" cy="60" r="3" fill="#000000" /><circle cx="70" cy="50" r="3" fill="#000000" />
            <circle cx="90" cy="70" r="3" fill="#000000" /><circle cx="90" cy="60" r="3" fill="#000000" /><circle cx="90" cy="50" r="3" fill="#000000" /><circle cx="90" cy="40" r="3" fill="#000000" />
            <circle cx="110" cy="70" r="3" fill="#000000" /><circle cx="110" cy="60" r="3" fill="#000000" /><circle cx="110" cy="50" r="3" fill="#000000" /><circle cx="110" cy="40" r="3" fill="#000000" /><circle cx="110" cy="30" r="3" fill="#000000" />
            <circle cx="130" cy="70" r="3" fill="#000000" /><circle cx="130" cy="60" r="3" fill="#000000" /><circle cx="130" cy="50" r="3" fill="#000000" /><circle cx="130" cy="40" r="3" fill="#000000" /><circle cx="130" cy="30" r="3" fill="#000000" /><circle cx="130" cy="20" r="3" fill="#000000" />
            <circle cx="150" cy="70" r="3" fill="#000000" /><circle cx="150" cy="60" r="3" fill="#000000" /><circle cx="150" cy="50" r="3" fill="#000000" /><circle cx="150" cy="40" r="3" fill="#000000" /><circle cx="150" cy="30" r="3" fill="#000000" /><circle cx="150" cy="20" r="3" fill="#000000" /><circle cx="150" cy="10" r="3" fill="#000000" />
          </svg>
        </div>
        <div>
          <div class="font-bold text-black mb-1 text-sm">Class B</div>
          <svg width="180" height="100" viewBox="0 0 180 100" class="font-sans">
            <line x1="20" y1="80" x2="160" y2="80" stroke="#000000" stroke-width="1.5" />
            <text x="30" y="95" text-anchor="middle" font-size="11">14</text>
            <text x="50" y="95" text-anchor="middle" font-size="11">15</text>
            <text x="70" y="95" text-anchor="middle" font-size="11">16</text>
            <text x="90" y="95" text-anchor="middle" font-size="11">17</text>
            <text x="110" y="95" text-anchor="middle" font-size="11">18</text>
            <text x="130" y="95" text-anchor="middle" font-size="11">19</text>
            <text x="150" y="95" text-anchor="middle" font-size="11">20</text>
            <circle cx="30" cy="70" r="3" fill="#000000" />
            <circle cx="50" cy="70" r="3" fill="#000000" /><circle cx="50" cy="60" r="3" fill="#000000" />
            <circle cx="70" cy="70" r="3" fill="#000000" /><circle cx="70" cy="60" r="3" fill="#000000" /><circle cx="70" cy="50" r="3" fill="#000000" />
            <circle cx="90" cy="70" r="3" fill="#000000" /><circle cx="90" cy="60" r="3" fill="#000000" /><circle cx="90" cy="50" r="3" fill="#000000" /><circle cx="90" cy="40" r="3" fill="#000000" />
            <circle cx="110" cy="70" r="3" fill="#000000" /><circle cx="110" cy="60" r="3" fill="#000000" /><circle cx="110" cy="50" r="3" fill="#000000" /><circle cx="110" cy="40" r="3" fill="#000000" /><circle cx="110" cy="30" r="3" fill="#000000" />
            <circle cx="130" cy="70" r="3" fill="#000000" /><circle cx="130" cy="60" r="3" fill="#000000" /><circle cx="130" cy="50" r="3" fill="#000000" /><circle cx="130" cy="40" r="3" fill="#000000" /><circle cx="130" cy="30" r="3" fill="#000000" /><circle cx="130" cy="20" r="3" fill="#000000" />
            <circle cx="150" cy="70" r="3" fill="#000000" /><circle cx="150" cy="60" r="3" fill="#000000" /><circle cx="150" cy="50" r="3" fill="#000000" /><circle cx="150" cy="40" r="3" fill="#000000" /><circle cx="150" cy="30" r="3" fill="#000000" /><circle cx="150" cy="20" r="3" fill="#000000" /><circle cx="150" cy="10" r="3" fill="#000000" />
          </svg>
        </div>
      </div>
    </div>`,
    questionText: "Each of the dot plots shown represents the number of glue sticks brought in by each student for two classes, class A and class B. Which statement best compares the standard deviations of the numbers of glue sticks brought in by each student for these two classes?",
    options: [
      { id: "A", text: "The standard deviation of the number of glue sticks brought in by each student for class A is less than the standard deviation of the number of glue sticks brought in by each student for class B." },
      { id: "B", text: "The standard deviation of the number of glue sticks brought in by each student for class A is equal to the standard deviation of the number of glue sticks brought in by each student for class B." },
      { id: "C", text: "The standard deviation of the number of glue sticks brought in by each student for class A is greater than the standard deviation of the number of glue sticks brought in by each student for class B." },
      { id: "D", text: "There is not enough information to compare these standard deviations." }
    ],
    correctAnswer: "B",
    explanation: "The two distributions have identical shapes and dot counts relative to their minimum values (just shifted horizontally by 13 units). Horizontal shifts do not affect spread, so standard deviations are equal."
  },
  {
    id: 1011,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(m(t) = -0.0274\\left(\\frac{t}{7}\\right)^2 + 7.3873\\left(\\frac{t}{7}\\right) + 75.032\\)</div><p class="mt-3">The function \\(m\\) gives the predicted body mass \\(m(t)\\), in kilograms (kg), of a certain animal \\(t\\) days after it was born in a wildlife reserve, where \\(t \\le 390\\). Which of the following is the best interpretation of the statement "m(330) is approximately equal to 362" in this context?</p>`,
    options: [
      { id: "A", text: "The predicted body mass of the animal was approximately 330 kg 362 days after it was born." },
      { id: "B", text: "The predicted body mass of the animal was approximately 362 kg 330 days after it was born." },
      { id: "C", text: "The predicted body mass of the animal was approximately 362 kg \\(\\frac{330}{7}\\) days after it was born." },
      { id: "D", text: "The predicted body mass of the animal was approximately \\(\\frac{330}{7}\\) kg 362 days after it was born." }
    ],
    correctAnswer: "B",
    explanation: "\\(t = 330\\) represents 330 days after birth, and \\(m(330) = 362\\) represents a predicted body mass of 362 kg."
  },
  {
    id: 1012,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "Triangle XYZ is similar to triangle RST such that X, Y, and Z correspond to R, S, and T, respectively. The measure of \\(\\angle Z\\) is \\(20^\\circ\\) and \\(2XY = RS\\). What is the measure of \\(\\angle T\\)?",
    options: [
      { id: "A", text: "2°" },
      { id: "B", text: "10°" },
      { id: "C", text: "20°" },
      { id: "D", text: "40°" }
    ],
    correctAnswer: "C",
    explanation: "Corresponding angles in similar triangles are equal in measure, so \\(m\\angle T = m\\angle Z = 20^\\circ\\)."
  },
  {
    id: 1013,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(f(t) = 60{,}000(2)^{\\frac{t}{410}}\\)</div><p class="mt-3">The function \\(f(t) = 60{,}000(2)^{\\frac{t}{410}}\\) gives the number of bacteria in a population \\(t\\) minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?</p>`,
    options: [],
    correctAnswer: "410",
    explanation: "The base of the exponent is 2, and the exponent is \\(\\frac{t}{410}\\), meaning the population doubles when \\(t = 410\\) minutes."
  },
  {
    id: 1014,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "The function \\(f\\) is defined by \\(f(x) = a^x + b\\), where \\(a\\) and \\(b\\) are constants and \\(a > 0\\). In the xy-plane, the graph of \\(y = f(x)\\) has a y-intercept at \\((0, -25)\\) and passes through the point \\((2, 23)\\). What is the value of \\(a + b\\)?",
    options: [],
    correctAnswer: "-19",
    explanation: "y-intercept: \\(f(0) = a^0 + b = 1 + b = -25 \\implies b = -26\\). At (2, 23): \\(a^2 - 26 = 23 \\implies a^2 = 49 \\implies a = 7\\). Thus \\(a + b = 7 + (-26) = -19\\)."
  },
  {
    id: 1015,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif text-lg">\\(y > 13x - 18\\)</div><p class="mt-4">For which of the following tables are all the values of \\(x\\) and their corresponding values of \\(y\\) solutions to the given inequality?</p>`,
    options: [
      {
        id: "A",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif w-24 my-1"><thead><tr class="border-b border-black"><th class="border-r border-black py-0.5 px-2 font-normal italic">x</th><th class="py-0.5 px-2 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">3</td><td class="py-0.5 px-2">21</td></tr><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">5</td><td class="py-0.5 px-2">47</td></tr><tr><td class="border-r border-black py-0.5 px-2">8</td><td class="py-0.5 px-2">86</td></tr></tbody></table>`
      },
      {
        id: "B",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif w-24 my-1"><thead><tr class="border-b border-black"><th class="border-r border-black py-0.5 px-2 font-normal italic">x</th><th class="py-0.5 px-2 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">3</td><td class="py-0.5 px-2">26</td></tr><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">5</td><td class="py-0.5 px-2">42</td></tr><tr><td class="border-r border-black py-0.5 px-2">8</td><td class="py-0.5 px-2">86</td></tr></tbody></table>`
      },
      {
        id: "C",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif w-24 my-1"><thead><tr class="border-b border-black"><th class="border-r border-black py-0.5 px-2 font-normal italic">x</th><th class="py-0.5 px-2 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">3</td><td class="py-0.5 px-2">16</td></tr><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">5</td><td class="py-0.5 px-2">42</td></tr><tr><td class="border-r border-black py-0.5 px-2">8</td><td class="py-0.5 px-2">81</td></tr></tbody></table>`
      },
      {
        id: "D",
        text: `<table class="border border-black border-collapse text-center text-sm font-serif w-24 my-1"><thead><tr class="border-b border-black"><th class="border-r border-black py-0.5 px-2 font-normal italic">x</th><th class="py-0.5 px-2 font-normal italic">y</th></tr></thead><tbody><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">3</td><td class="py-0.5 px-2">26</td></tr><tr class="border-b border-black"><td class="border-r border-black py-0.5 px-2">5</td><td class="py-0.5 px-2">52</td></tr><tr><td class="border-r border-black py-0.5 px-2">8</td><td class="py-0.5 px-2">91</td></tr></tbody></table>`
      }
    ],
    correctAnswer: "D",
    explanation: "Substitute values into \\(y > 13x - 18\\):\n- At \\(x = 3\\): \\(y > 13(3) - 18 = 21\\). In table D, \\(26 > 21\\) (True).\n- At \\(x = 5\\): \\(y > 13(5) - 18 = 47\\). In table D, \\(52 > 47\\) (True).\n- At \\(x = 8\\): \\(y > 13(8) - 18 = 86\\). In table D, \\(91 > 86\\) (True)."
  },
  {
    id: 1016,
    type: "Math",
    module: 2,
    domain: "Problem-Solving and Data Analysis",
    questionText: "A certain town has an area of 4.36 square miles. What is the area, in square yards, of this town? (1 mile = 1,760 yards)",
    options: [
      { id: "A", text: "404" },
      { id: "B", text: "7,674" },
      { id: "C", text: "710,459" },
      { id: "D", text: "13,505,536" }
    ],
    correctAnswer: "D",
    explanation: "\\(1 \\text{ sq mile} = (1,760)^2 = 3,097,600 \\text{ sq yards}\\). Area = \\(4.36 \\times 3,097,600 = 13,505,536\\)."
  },
  {
    id: 1017,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "A square is inscribed in a circle. The radius of the circle is \\(\\frac{20\\sqrt{2}}{2}\\) inches. What is the side length, in inches, of the square?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "\\(\\frac{20\\sqrt{2}}{2}\\)" },
      { id: "C", text: "\\(20\\sqrt{2}\\)" },
      { id: "D", text: "40" }
    ],
    correctAnswer: "A",
    explanation: "Radius \\(r = 10\\sqrt{2}\\). Diameter of circle = diagonal of inscribed square = \\(2(10\\sqrt{2}) = 20\\sqrt{2}\\). Side length \\(s = \\frac{\\text{diagonal}}{\\sqrt{2}} = \\frac{20\\sqrt{2}}{\\sqrt{2}} = 20\\)."
  },
  {
    id: 1018,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "Which expression is equivalent to \\(\\frac{y + 12}{x - 8} + \\frac{y(x - 8)}{x^2y - 8xy}\\)?",
    options: [
      { id: "A", text: "\\(\\frac{xy + y + 4}{x^3y - 16x^2y + 64xy}\\)" },
      { id: "B", text: "\\(\\frac{xy + 9y + 12}{x^2y - 8xy + x - 8}\\)" },
      { id: "C", text: "\\(\\frac{xy^2 + 13xy - 8y}{x^2y - 8xy}\\)" },
      { id: "D", text: "\\(\\frac{xy^2 + 13xy - 8y}{x^3y - 16x^2y + 64xy}\\)" }
    ],
    correctAnswer: "C",
    explanation: "Notice that \\(x^2y - 8xy = xy(x - 8)\\). Multiply the first fraction by \\(\\frac{xy}{xy}\\):\n\\[\\frac{xy(y + 12)}{xy(x - 8)} + \\frac{y(x - 8)}{xy(x - 8)} = \\frac{xy^2 + 12xy + xy - 8y}{x^2y - 8xy} = \\frac{xy^2 + 13xy - 8y}{x^2y - 8xy}\\]\nThis matches Option C."
  },
  {
    id: 1019,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "The function \\(f\\) is defined by \\(f(x) = a(2.2^x + 2.2^b)\\), where \\(a\\) and \\(b\\) are integer constants and \\(0 < a < b\\). The functions \\(g\\) and \\(h\\) are equivalent to function \\(f\\), where \\(k\\) and \\(m\\) are constants. Which of the following equations displays the y-coordinate of the y-intercept of the graph of \\(y = f(x)\\) in the xy-plane as a constant or coefficient?\n\nI. \\(g(x) = a(2.2^x + k)\\)\nII. \\(h(x) = a(2.2)^x + m\\)",
    options: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "I and II" },
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "D",
    explanation: "The y-intercept of \\(y = f(x)\\) occurs at \\(x = 0\\), where \\(f(0) = a(2.2^0 + 2.2^b) = a(1 + 2.2^b) = a + a(2.2^b)\\).\n- For equation I, \\(k = 2.2^b\\), so \\(k\\) is not the y-intercept \\(a(1 + 2.2^b)\\).\n- For equation II, expanding gives \\(f(x) = a(2.2)^x + a(2.2)^b\\), so \\(m = a(2.2)^b\\). The y-intercept is \\(a + m\\), so \\(m\\) alone does not display the y-intercept.\nTherefore, neither equation displays the y-coordinate of the y-intercept as a constant or coefficient (Option D)."
  },
  {
    id: 1020,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: `<div class="my-3 p-4 bg-white border border-black text-black rounded-xl text-center text-lg font-medium ">\\(x(kx - 56) = -16\\)</div><p class="mt-3">In the given equation, \\(k\\) is an integer constant. If the equation has no real solution, what is the least possible value of \\(k\\)?</p>`,
    options: [],
    correctAnswer: "50",
    explanation: "Rewrite: \\(kx^2 - 56x + 16 = 0\\). For no real solution: \\(b^2 - 4ac < 0 \\implies 56^2 - 4(k)(16) < 0 \\implies 3136 - 64k < 0 \\implies 64k > 3136 \\implies k > 49\\). The least integer value for \\(k\\) is 50."
  }
];
