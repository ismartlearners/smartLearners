import { Question } from '../types';

export const TEST8_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 1894,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<p class="mb-3">What is the <i>y</i>-intercept of the line graphed?</p><div class="my-4 flex justify-center"><svg width="300" height="295" viewBox="0 0 310 305" class="bg-white font-serif"><g stroke="#000000" stroke-width="0.75"><line x1="35" y1="27" x2="35" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="53" y1="27" x2="53" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="71" y1="27" x2="71" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="89" y1="27" x2="89" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="107" y1="27" x2="107" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="125" y1="27" x2="125" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="143" y1="27" x2="143" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="161" y1="27" x2="161" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="179" y1="27" x2="179" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="197" y1="27" x2="197" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="215" y1="27" x2="215" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="233" y1="27" x2="233" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="251" y1="27" x2="251" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="269" y1="27" x2="269" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="279" x2="269" y2="279" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="261" x2="269" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="243" x2="269" y2="243" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="225" x2="269" y2="225" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="207" x2="269" y2="207" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="189" x2="269" y2="189" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="171" x2="269" y2="171" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="153" x2="269" y2="153" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="135" x2="269" y2="135" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="117" x2="269" y2="117" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="99" x2="269" y2="99" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="81" x2="269" y2="81" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="63" x2="269" y2="63" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="45" x2="269" y2="45" stroke="#000000" stroke-width="0.75"/><line x1="35" y1="27" x2="269" y2="27" stroke="#000000" stroke-width="0.75"/></g>
<line x1="21" y1="225" x2="285" y2="225" stroke="#000000" stroke-width="1.8"/>
<polygon points="285,225 279,221.5 279,228.5" fill="#000000"/>
<text x="290" y="229" font-family="Georgia, serif" font-style="italic" font-size="13">x</text>

<line x1="215" y1="287" x2="215" y2="11" stroke="#000000" stroke-width="1.8"/>
<polygon points="215,11 211.5,17 218.5,17" fill="#000000"/>
<text x="215" y="7" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle">y</text>
<text x="210" y="238" font-family="Georgia, serif" font-style="italic" font-size="11" text-anchor="end">O</text><g font-family="Georgia, serif" fill="#000000"><text x="35" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-10</text><text x="71" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-8</text><text x="107" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-6</text><text x="143" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-4</text><text x="179" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-2</text><text x="251" y="239" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">2</text></g><g font-family="Georgia, serif" fill="#000000"><text x="212" y="48.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">10</text><text x="212" y="84.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">8</text><text x="212" y="120.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">6</text><text x="212" y="156.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">4</text><text x="212" y="192.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">2</text><text x="212" y="264.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-2</text></g><line x1="24.2" y1="241" x2="265.4" y2="107" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/></svg></div>`,
    options: [
      { id: "A", text: "(-5, 0)" },
      { id: "B", text: "(0, 0)" },
      { id: "C", text: "(0, 5)" },
      { id: "D", text: "(0, 9)" }
    ],
    correctAnswer: "C",
    explanation: "The line crosses the y-axis at \\((0, 5)\\), so its y-intercept is \\((0, 5)\\)."
  },
  {
    id: 1895,
    type: "Math",
    module: 2,
    domain: "Problem-Solving & Data Analysis",
    questionText: `<div class="my-3 overflow-x-auto"><table class="w-full text-xs "><thead><tr class="bg-white"><th class="p-2 border-b border-r text-left">Type of store</th><th class="p-2 border-b text-right">Average number of employees</th></tr></thead><tbody><tr class="border-b"><td class="p-2 border-r">Warehouse store</td><td class="p-2 text-right">365</td></tr><tr class="border-b"><td class="p-2 border-r">Department store</td><td class="p-2 text-right">213</td></tr><tr><td class="p-2 border-r">Supermarket</td><td class="p-2 text-right">130</td></tr></tbody></table></div><p class="mt-2">For a certain region, the table shows the average number of store employees in 2016 by type of store. Based on the table, how much greater was the average number of store employees in warehouse stores than in supermarkets?</p>`,
    options: [
      { id: "A", text: "83" },
      { id: "B", text: "152" },
      { id: "C", text: "235" },
      { id: "D", text: "495" }
    ],
    correctAnswer: "C",
    explanation: "Subtract the average number of supermarket employees from warehouse store employees: \\(365 - 130 = 235\\)."
  },
  {
    id: 1896,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: `<div class="my-4 flex flex-col items-center"><svg width="260" height="230" viewBox="0 0 260 230" class="font-serif"><line x1="105" y1="30" x2="105" y2="210" stroke="#000000" stroke-width="1.2"/><line x1="165" y1="30" x2="165" y2="210" stroke="#000000" stroke-width="1.2"/><line x1="60" y1="30" x2="210" y2="200" stroke="#000000" stroke-width="1.2"/><text x="48" y="22" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="middle">t</text><text x="105" y="20" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="middle">m</text><text x="165" y="20" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="middle">n</text><text x="100" y="88" font-family="Georgia, serif" font-size="14" text-anchor="end"><tspan font-style="italic">x</tspan>°</text><text x="169" y="174" font-family="Georgia, serif" font-size="13.5" text-anchor="start">33°</text></svg><p class="mt-2 text-xs font-serif text-black">Note: Figure not drawn to scale.</p></div><p class="mt-3">In the figure, line \\(m\\) is parallel to line \\(n\\), and line \\(t\\) intersects both lines. What is the value of \\(x\\)?</p>`,
    options: [
      { id: "A", text: "33" },
      { id: "B", text: "57" },
      { id: "C", text: "123" },
      { id: "D", text: "147" }
    ],
    correctAnswer: "D",
    explanation: "Since lines \\(m\\) and \\(n\\) are parallel, consecutive interior angles along transversal \\(t\\) are supplementary: \\(x + 33 = 180 \\Rightarrow x = 147\\)."
  },
  {
    id: 1897,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "Sean rents a tent at a cost of $11 per day plus a onetime insurance fee of $10. Which equation represents the total cost \\(c\\), in dollars, to rent the tent with insurance for \\(d\\) days?",
    options: [
      { id: "A", text: "c = 11(d + 10)" },
      { id: "B", text: "c = 10(d + 11)" },
      { id: "C", text: "c = 11d + 10" },
      { id: "D", text: "c = 10d + 11" }
    ],
    correctAnswer: "C",
    explanation: "The daily fee is $11 per day (represented by \\(11d\\)), and the one-time insurance fee is $10. Thus, total cost \\(c = 11d + 10\\)."
  },
  {
    id: 1898,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: `<div class="my-4 flex flex-col items-center"><svg width="260" height="190" viewBox="0 0 260 190" class="font-serif"><polygon points="35,20 35,150 225,150" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><rect x="35" y="137" width="13" height="13" fill="none" stroke="#000000" stroke-width="1.2"/><text x="24" y="90" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="end">a</text><text x="130" y="172" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="middle">b</text><text x="135" y="78" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="start">c</text></svg><p class="mt-1 text-xs font-serif text-black">Note: Figure not drawn to scale.</p></div><p class="mt-3">For the right triangle shown, \\(a = 4\\) and \\(b = 5\\). Which expression represents the value of \\(c\\)?</p>`,
    options: [
      { id: "A", text: "4 + 5" },
      { id: "B", text: "\\sqrt{(4)(5)}" },
      { id: "C", text: "\\sqrt{4 + 5}" },
      { id: "D", text: "\\sqrt{4^2 + 5^2}" }
    ],
    correctAnswer: "D",
    explanation: "By the Pythagorean theorem, the hypotenuse \\(c = \\sqrt{a^2 + b^2} = \\sqrt{4^2 + 5^2}\\)."
  },
  {
    id: 1899,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">g(x) = 6x</div><p class="mt-3">The function <i>g</i> is defined by <i>g</i>(<i>x</i>) = 6<i>x</i>. For what value of <i>x</i> is <i>g</i>(<i>x</i>) = 54?</p>`,
    options: [],
    correctAnswer: "9",
    explanation: "Set \\(g(x) = 54\\): \\(6x = 54 \\Rightarrow x = \\frac{54}{6} = 9\\)."
  },
  {
    id: 1900,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "The function \\(f\\) is defined by \\(f(x) = 8x^3 + 4\\). What is the value of \\(f(2)\\)?",
    options: [],
    correctAnswer: "68",
    explanation: "Substitute \\(x = 2\\): \\(f(2) = 8(2)^3 + 4 = 8(8) + 4 = 64 + 4 = 68\\)."
  },
  {
    id: 1901,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "The function \\(f\\) is defined by \\(f(x) = \\frac{1}{10}x - 2\\). What is the \\(y\\)-intercept of the graph of \\(y = f(x)\\) in the \\(xy\\)-plane?",
    options: [
      { id: "A", text: "\\((-2, 0)\\)" },
      { id: "B", text: "\\((0, -2)\\)" },
      { id: "C", text: "\\(\\left(0, \\frac{1}{10}\\right)\\)" },
      { id: "D", text: "\\(\\left(\\frac{1}{10}, 0\\right)\\)" }
    ],
    correctAnswer: "B",
    explanation: "The \\(y\\)-intercept occurs where \\(x = 0\\): \\(f(0) = \\frac{1}{10}(0) - 2 = -2\\), so the \\(y\\)-intercept is \\((0, -2)\\)."
  },
  {
    id: 1902,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "A producer is creating a video with a length of 70 minutes. The video will consist of segments that are 1 minute long and segments that are 3 minutes long. Which equation represents this situation, where \\(x\\) represents the number of 1-minute segments and \\(y\\) represents the number of 3-minute segments?",
    options: [
      { id: "A", text: "4xy = 70" },
      { id: "B", text: "4(x + y) = 70" },
      { id: "C", text: "3x + y = 70" },
      { id: "D", text: "x + 3y = 70" }
    ],
    correctAnswer: "D",
    explanation: "Total length is \\(1x + 3y = 70\\) minutes, so \\(x + 3y = 70\\)."
  },
  {
    id: 1903,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "The function \\(f\\) is defined by \\(f(x) = 7x^3\\). In the xy-plane, the graph of \\(y = g(x)\\) is the result of shifting the graph of \\(y = f(x)\\) down 2 units. Which equation defines function \\(g\\)?",
    options: [
      { id: "A", text: "\\(g(x) = \\frac{7}{2}x^3\\)" },
      { id: "B", text: "\\(g(x) = 7x^{\\frac{3}{2}}\\)" },
      { id: "C", text: "\\(g(x) = 7x^3 + 2\\)" },
      { id: "D", text: "\\(g(x) = 7x^3 - 2\\)" }
    ],
    correctAnswer: "D",
    explanation: "Shifting a graph down by 2 units subtracts 2 from the output: \\(g(x) = f(x) - 2 = 7x^3 - 2\\)."
  },
  {
    id: 1904,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">y = -3x<br/>4x + y = 15</div><p class="mt-3">The solution to the given system of equations is (<i>x</i>, <i>y</i>). What is the value of <i>x</i>?</p>`,
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "5" },
      { id: "C", text: "15" },
      { id: "D", text: "45" }
    ],
    correctAnswer: "C",
    explanation: "Substitute \\(y = -3x\\) into \\(4x + y = 15\\): \\(4x + (-3x) = 15 \\Rightarrow x = 15\\)."
  },
  {
    id: 1905,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: `<div class="my-4 flex flex-col items-center"><svg width="260" height="205" viewBox="0 0 260 205" class="font-serif"><polygon points="50,22 50,165 220,165" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><rect x="50" y="152" width="13" height="13" fill="none" stroke="#000000" stroke-width="1.2"/><text x="44" y="18" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="end">B</text><text x="44" y="182" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="end">C</text><text x="222" y="182" font-family="Georgia, serif" font-style="italic" font-size="16" text-anchor="start">A</text><text x="38" y="98" font-family="Georgia, serif" font-size="16" text-anchor="end">35</text><text x="142" y="82" font-family="Georgia, serif" font-size="16" text-anchor="start">171</text></svg><p class="mt-1 text-xs font-serif text-black">Note: Figure not drawn to scale.</p></div><p class="mt-3">In the right triangle shown, what is the value of \\(\\sin A\\)?</p>`,
    options: [
      { id: "A", text: "\\(\\frac{1}{171}\\)" },
      { id: "B", text: "\\(\\frac{35}{171}\\)" },
      { id: "C", text: "\\(\\frac{171}{35}\\)" },
      { id: "D", text: "171" }
    ],
    correctAnswer: "B",
    explanation: "In right triangle \\(ABC\\), \\(\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{AB} = \\frac{35}{171}\\)."
  },
  {
    id: 1906,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "What is the area, in square centimeters, of a rectangle with a length of 34 centimeters (cm) and a width of 29 cm?",
    options: [],
    correctAnswer: "986",
    explanation: "\\(\\text{Area} = \\text{length} \\times \\text{width} = 34 \\times 29 = 986\\) square centimeters."
  },
  {
    id: 1907,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "If \\(\\frac{x}{y} = 4\\) and \\(\\frac{24x}{ny} = 4\\), what is the value of \\(n\\)?",
    options: [],
    correctAnswer: "24",
    explanation: "Rewrite \\(\\frac{24x}{ny} = \\frac{24}{n}\\left(\\frac{x}{y}\\right) = \\frac{24}{n}(4) = 4 \\implies \\frac{24}{n} = 1 \\implies n = 24\\)."
  },
  {
    id: 1908,
    type: "Math",
    module: 2,
    domain: "Problem-Solving & Data Analysis",
    questionText: "A bowl contains 20 ounces of water. When the bowl is uncovered, the amount of water in the bowl decreases by 1 ounce every 4 days. If 9 ounces of water remain in this bowl, for how many days has it been uncovered?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "7" },
      { id: "C", text: "36" },
      { id: "D", text: "44" }
    ],
    correctAnswer: "D",
    explanation: "Ounces lost = \\(20 - 9 = 11\\) ounces. Since 1 ounce is lost every 4 days, the number of days = \\(11 \\times 4 = 44\\) days."
  },
  {
    id: 1909,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: "If \\(9(4 - 3x) + 2 = 8(4 - 3x) + 18\\), what is the value of \\(4 - 3x\\)?",
    options: [
      { id: "A", text: "-16" },
      { id: "B", text: "-4" },
      { id: "C", text: "4" },
      { id: "D", text: "16" }
    ],
    correctAnswer: "D",
    explanation: "Treat \\((4 - 3x)\\) as a single variable \\(u\\): \\(9u + 2 = 8u + 18 \\Rightarrow u = 16\\)."
  },
  {
    id: 1910,
    type: "Math",
    module: 2,
    domain: "Problem-Solving & Data Analysis",
    questionText: "A certain township consists of a 5-hectare industrial park and a 24-hectare neighborhood. The total number of trees in the township is 4,529. The equation \\(5x + 24y = 4{,}529\\) represents this situation. Which of the following is the best interpretation of \\(x\\) in this context?",
    options: [
      { id: "A", text: "The average number of trees per hectare in the industrial park" },
      { id: "B", text: "The average number of trees per hectare in the neighborhood" },
      { id: "C", text: "The total number of trees in the industrial park" },
      { id: "D", text: "The total number of trees in the neighborhood" }
    ],
    correctAnswer: "A",
    explanation: "Since 5 is the area of the industrial park in hectares, \\(x\\) is multiplied by 5 to equal the total trees in the industrial park, making \\(x\\) the average number of trees per hectare in the industrial park."
  },
  {
    id: 1911,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "Which expression is equivalent to \\(a^{\\frac{11}{12}}\\), where \\(a > 0\\)?",
    options: [
      { id: "A", text: "\\(\\sqrt[12]{a^{121}}\\)" },
      { id: "B", text: "\\(\\sqrt[144]{a^{121}}\\)" },
      { id: "C", text: "\\(\\sqrt[121]{a^{121}}\\)" },
      { id: "D", text: "\\(\\sqrt[11]{a^{121}}\\)" }
    ],
    correctAnswer: "B",
    explanation: "\\(\\sqrt[144]{a^{121}} = a^{\\frac{11}{12}}\\)."
  },
  {
    id: 1912,
    type: "Math",
    module: 2,
    domain: "Problem-Solving & Data Analysis",
    questionText: `<p class="mb-4">The dot plots represent the distributions of values in data sets A and B.</p><div class="my-4 flex flex-wrap justify-center gap-8 items-start"><div class="flex flex-col items-center"><span class="font-serif text-sm mb-1">Data Set A</span><svg width="180" height="135" viewBox="0 0 180 135" class="font-serif"><circle cx="25" cy="88" r="2.8" fill="#000000"/><circle cx="47" cy="88" r="2.8" fill="#000000"/><circle cx="47" cy="79.5" r="2.8" fill="#000000"/><circle cx="47" cy="71" r="2.8" fill="#000000"/><circle cx="47" cy="62.5" r="2.8" fill="#000000"/><circle cx="69" cy="88" r="2.8" fill="#000000"/><circle cx="69" cy="79.5" r="2.8" fill="#000000"/><circle cx="91" cy="88" r="2.8" fill="#000000"/><circle cx="91" cy="79.5" r="2.8" fill="#000000"/><circle cx="91" cy="71" r="2.8" fill="#000000"/><circle cx="113" cy="88" r="2.8" fill="#000000"/><circle cx="113" cy="79.5" r="2.8" fill="#000000"/><circle cx="135" cy="88" r="2.8" fill="#000000"/><circle cx="135" cy="79.5" r="2.8" fill="#000000"/><circle cx="135" cy="71" r="2.8" fill="#000000"/><circle cx="135" cy="62.5" r="2.8" fill="#000000"/><circle cx="157" cy="88" r="2.8" fill="#000000"/><line x1="15" y1="95" x2="167" y2="95" stroke="#000000" stroke-width="0.9"/><line x1="25" y1="91" x2="25" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="47" y1="91" x2="47" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="69" y1="91" x2="69" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="91" y1="91" x2="91" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="113" y1="91" x2="113" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="135" y1="91" x2="135" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="157" y1="91" x2="157" y2="99" stroke="#000000" stroke-width="0.8"/><text x="25" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">10</text><text x="47" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">11</text><text x="69" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">12</text><text x="91" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">13</text><text x="113" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">14</text><text x="135" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">15</text><text x="157" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">16</text><text x="91" y="127" font-family="Georgia, serif" font-size="11.5" text-anchor="middle" fill="#000000">Value</text></svg></div><div class="flex flex-col items-center"><span class="font-serif text-sm mb-1">Data Set B</span><svg width="180" height="135" viewBox="0 0 180 135" class="font-serif"><circle cx="25" cy="88" r="2.8" fill="#000000"/><circle cx="25" cy="79.5" r="2.8" fill="#000000"/><circle cx="47" cy="88" r="2.8" fill="#000000"/><circle cx="47" cy="79.5" r="2.8" fill="#000000"/><circle cx="47" cy="71" r="2.8" fill="#000000"/><circle cx="47" cy="62.5" r="2.8" fill="#000000"/><circle cx="69" cy="88" r="2.8" fill="#000000"/><circle cx="69" cy="79.5" r="2.8" fill="#000000"/><circle cx="91" cy="88" r="2.8" fill="#000000"/><circle cx="113" cy="88" r="2.8" fill="#000000"/><circle cx="113" cy="79.5" r="2.8" fill="#000000"/><circle cx="135" cy="88" r="2.8" fill="#000000"/><circle cx="135" cy="79.5" r="2.8" fill="#000000"/><circle cx="135" cy="71" r="2.8" fill="#000000"/><circle cx="135" cy="62.5" r="2.8" fill="#000000"/><circle cx="157" cy="88" r="2.8" fill="#000000"/><circle cx="157" cy="79.5" r="2.8" fill="#000000"/><line x1="15" y1="95" x2="167" y2="95" stroke="#000000" stroke-width="0.9"/><line x1="25" y1="91" x2="25" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="47" y1="91" x2="47" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="69" y1="91" x2="69" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="91" y1="91" x2="91" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="113" y1="91" x2="113" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="135" y1="91" x2="135" y2="99" stroke="#000000" stroke-width="0.8"/><line x1="157" y1="91" x2="157" y2="99" stroke="#000000" stroke-width="0.8"/><text x="25" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">10</text><text x="47" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">11</text><text x="69" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">12</text><text x="91" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">13</text><text x="113" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">14</text><text x="135" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">15</text><text x="157" y="111" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="#000000">16</text><text x="91" y="127" font-family="Georgia, serif" font-size="11.5" text-anchor="middle" fill="#000000">Value</text></svg></div></div><p class="mt-4 mb-3">Which of the following statements must be true?</p><div class="space-y-2 ml-4"><p><span class="inline-block w-6 font-serif">I.</span>The median of data set A is equal to the median of data set B.</p><p><span class="inline-block w-6 font-serif">II.</span>The standard deviation of data set A is equal to the standard deviation of data set B.</p></div>`,
    options: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "I and II" },
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "A",
    explanation: "Both distributions are symmetric about 13 with 17 values each, so the median for both data sets is the 9th value, which is 13 (Statement I is true). Data Set B has higher frequencies at the extreme values (10 and 16) and fewer values at the center (13) compared to Data Set A, so the standard deviation of Data Set B is greater than that of Data Set A (Statement II is false). Thus, only statement I must be true."
  },
  {
    id: 1913,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "A circle has center O, and points R and S lie on the circle. In triangle ORS, the measure of \\(\\angle ROS\\) is 88°. What is the measure of \\(\\angle RSO\\), in degrees? (Disregard the degree symbol when entering your answer.)",
    options: [],
    correctAnswer: "46",
    explanation: "Since OR and OS are radii of the circle, triangle ORS is isosceles with \\(OR = OS\\). The base angles are equal: \\(\\angle RSO = \\frac{180^\\circ - 88^\\circ}{2} = \\frac{92^\\circ}{2} = 46^\\circ\\)."
  },
  {
    id: 1914,
    type: "Math",
    module: 2,
    domain: "Problem-Solving & Data Analysis",
    questionText: "The regular price of a shirt at a store is $11.70. The sale price of the shirt is 80% less than the regular price, and the sale price is 30% greater than the store’s cost for the shirt. What was the store’s cost, in dollars, for the shirt? (Disregard the $ sign when entering your answer. For example, if your answer is $4.97, enter 4.97)",
    options: [],
    correctAnswer: "1.80",
    explanation: "Sale price = \\(11.70 \\times (1 - 0.80) = 11.70 \\times 0.20 = 2.34\\). Since sale price is 30% greater than cost \\(C\\): \\(1.30C = 2.34 \\Rightarrow C = \\frac{2.34}{1.30} = 1.80\\)."
  },
  {
    id: 1915,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "A cube has an edge length of 68 inches. A solid sphere with a radius of 34 inches is inside the cube, such that the sphere touches the center of each face of the cube. To the nearest cubic inch, what is the volume of the space in the cube <u>not</u> taken up by the sphere?",
    options: [
      { id: "A", text: "149,796" },
      { id: "B", text: "164,500" },
      { id: "C", text: "190,955" },
      { id: "D", text: "310,800" }
    ],
    correctAnswer: "A",
    explanation: "Volume of the cube = \\(68^3 = 314{,}432\\). Volume of the sphere = \\(\\frac{4}{3}\\pi (34)^3 \\approx 164{,}636.2\\). The volume not taken up by the sphere is \\(314{,}432 - 164{,}636.2 = 149{,}795.8 \\approx 149{,}796\\) cubic inches."
  },
  {
    id: 1916,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">y = 6x + 18</div><p class="mt-3">One of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?</p>`,
    options: [
      { id: "A", text: "-6x + y = 18" },
      { id: "B", text: "-6x + y = 22" },
      { id: "C", text: "-12x + y = 36" },
      { id: "D", text: "-12x + y = 18" }
    ],
    correctAnswer: "B",
    explanation: "Rewrite \\(y = 6x + 18\\) as \\(-6x + y = 18\\). A system of linear equations has no solution if the lines are parallel (same slope) with different y-intercepts. \\(-6x + y = 22\\) has the same slope but a different constant."
  },
  {
    id: 1917,
    type: "Math",
    module: 2,
    domain: "Geometry & Trigonometry",
    questionText: "Triangles PQR and LMN are graphed in the xy-plane. Triangle PQR has vertices P, Q, and R at (4, 5), (4, 7), and (6, 5), respectively. Triangle LMN has vertices L, M, and N at (4, 5), (4, 7 + k), and (6 + k, 5), respectively, where k is a positive constant. If the measure of \\(\\angle Q\\) is \\(t^\\circ\\), what is the measure of \\(\\angle N\\)?",
    options: [
      { id: "A", text: "\\((90 - (t - k))^\\circ\\)" },
      { id: "B", text: "\\((90 - (t + k))^\\circ\\)" },
      { id: "C", text: "\\((90 - t)^\\circ\\)" },
      { id: "D", text: "\\((90 + k)^\\circ\\)" }
    ],
    correctAnswer: "C",
    explanation: "Both PQR and LMN are right triangles with right angles at (4, 5). Since LMN is a scaling of PQR, corresponding angles are equal: \\(\\angle M = \\angle Q = t^\\circ\\). In right triangle LMN, \\(\\angle N = 90^\\circ - \\angle M = (90 - t)^\\circ\\)."
  },
  {
    id: 1918,
    type: "Math",
    module: 2,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">2x + 3y = 7<br/>10x + 15y = 35</div><p class="mt-3">For each real number <i>r</i>, which of the following points lies on the graph of each equation in the <i>xy</i>-plane for the given system?</p>`,
    options: [
      { id: "A", text: "\\(\\left(\\frac{r}{5} + 7, -\\frac{r}{5} + 35\\right)\\)" },
      { id: "B", text: "\\(\\left(-\\frac{3r}{2} + \\frac{7}{2}, r\\right)\\)" },
      { id: "C", text: "\\(\\left(r, \\frac{2r}{3} + \\frac{7}{3}\\right)\\)" },
      { id: "D", text: "\\(\\left(r, -\\frac{2r}{3} + \\frac{7}{3}\\right)\\)" }
    ],
    correctAnswer: "B",
    explanation: "Both equations represent the same line \\(2x + 3y = 7\\). If \\(y = r\\), solving for \\(x\\) gives \\(2x + 3r = 7 \\implies 2x = 7 - 3r \\implies x = -\\frac{3r}{2} + \\frac{7}{2}\\). Thus, the point \\(\\left(-\\frac{3r}{2} + \\frac{7}{2}, r\\right)\\) lies on the line for any real number \\(r\\)."
  },
  {
    id: 1919,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: `<div class="my-4 text-center">\\[\\frac{x^2}{\\sqrt{x^2 - c^2}} = \\frac{c^2}{\\sqrt{x^2 - c^2}} + 39\\]</div><p class="mt-3">In the given equation, \\(c\\) is a positive constant. Which of the following is one of the solutions to the given equation?</p>`,
    options: [
      { id: "A", text: "\\(-c\\)" },
      { id: "B", text: "\\(-c^2 - 39^2\\)" },
      { id: "C", text: "\\(-\\sqrt{39^2 - c^2}\\)" },
      { id: "D", text: "\\(-\\sqrt{c^2 + 39^2}\\)" }
    ],
    correctAnswer: "D",
    explanation: "Subtract \\(\\frac{c^2}{\\sqrt{x^2 - c^2}}\\) from both sides: \\(\\frac{x^2 - c^2}{\\sqrt{x^2 - c^2}} = 39 \\implies \\sqrt{x^2 - c^2} = 39\\). Square both sides: \\(x^2 - c^2 = 39^2 \\implies x^2 = c^2 + 39^2 \\implies x = -\\sqrt{c^2 + 39^2}\\)."
  },
  {
    id: 1920,
    type: "Math",
    module: 2,
    domain: "Advanced Math",
    questionText: "The quadratic function \\(g\\) models the depth, in meters, below the surface of the water of a seal \\(t\\) minutes after the seal entered the water during a dive. The function estimates that the seal reached its maximum depth of 302.4 meters 6 minutes after it entered the water and then reached the surface of the water 12 minutes after it entered the water. Based on the function, what was the estimated depth, to the nearest meter, of the seal 10 minutes after it entered the water?",
    options: [],
    correctAnswer: "168",
    explanation: "Vertex form: \\(g(t) = a(t - 6)^2 + 302.4\\). Since \\(g(12) = 0\\), \\(a(12 - 6)^2 + 302.4 = 0 \\Rightarrow 36a = -302.4 \\Rightarrow a = -8.4\\). At \\(t = 10\\): \\(g(10) = -8.4(10 - 6)^2 + 302.4 = -8.4(16) + 302.4 = -134.4 + 302.4 = 168\\) meters."
  }
];
