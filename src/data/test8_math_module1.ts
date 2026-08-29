import { Question } from '../types';

export const TEST8_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 1867,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "A bus is traveling at a constant speed along a straight portion of road. The equation \\(d = 30t\\) gives the distance \\(d\\), in feet from a road marker, that the bus will be \\(t\\) seconds after passing the marker. How many feet from the marker will the bus be 2 seconds after passing the marker?",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "32" },
      { id: "C", text: "60" },
      { id: "D", text: "90" }
    ],
    correctAnswer: "C",
    explanation: "Substitute \\(t = 2\\) into \\(d = 30t\\): \\(d = 30(2) = 60\\) feet."
  },
  {
    id: 1868,
    type: "Math",
    module: 1,
    domain: "Problem-Solving & Data Analysis",
    questionText: "For a particular machine that produces beads, 29 out of every 100 beads it produces have a defect. A bead produced by the machine will be selected at random. What is the probability of selecting a bead that has a defect?",
    options: [
      { id: "A", text: "\\(\\frac{1}{2,900}\\)" },
      { id: "B", text: "\\(\\frac{1}{29}\\)" },
      { id: "C", text: "\\(\\frac{29}{100}\\)" },
      { id: "D", text: "\\(\\frac{29}{10}\\)" }
    ],
    correctAnswer: "C",
    explanation: "The probability is the number of defective beads divided by the total number of beads: \\(\\frac{29}{100}\\)."
  },
  {
    id: 1869,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<p class="mb-3">What is the <i>y</i>-intercept of the graph shown?</p><div class="my-4 flex justify-center"><svg width="320" height="230" viewBox="0 0 320 230" class="bg-white font-serif"><g stroke="#000000" stroke-width="0.6"><line x1="45" y1="25" x2="45" y2="179"/><line x1="56" y1="25" x2="56" y2="179"/><line x1="67" y1="25" x2="67" y2="179"/><line x1="78" y1="25" x2="78" y2="179"/><line x1="89" y1="25" x2="89" y2="179"/><line x1="100" y1="25" x2="100" y2="179"/><line x1="111" y1="25" x2="111" y2="179"/><line x1="122" y1="25" x2="122" y2="179"/><line x1="133" y1="25" x2="133" y2="179"/><line x1="144" y1="25" x2="144" y2="179"/><line x1="155" y1="25" x2="155" y2="179"/><line x1="166" y1="25" x2="166" y2="179"/><line x1="177" y1="25" x2="177" y2="179"/><line x1="188" y1="25" x2="188" y2="179"/><line x1="199" y1="25" x2="199" y2="179"/><line x1="210" y1="25" x2="210" y2="179"/><line x1="221" y1="25" x2="221" y2="179"/><line x1="232" y1="25" x2="232" y2="179"/><line x1="243" y1="25" x2="243" y2="179"/><line x1="254" y1="25" x2="254" y2="179"/><line x1="265" y1="25" x2="265" y2="179"/><line x1="45" y1="25" x2="265" y2="25"/><line x1="45" y1="36" x2="265" y2="36"/><line x1="45" y1="47" x2="265" y2="47"/><line x1="45" y1="58" x2="265" y2="58"/><line x1="45" y1="69" x2="265" y2="69"/><line x1="45" y1="80" x2="265" y2="80"/><line x1="45" y1="91" x2="265" y2="91"/><line x1="45" y1="102" x2="265" y2="102"/><line x1="45" y1="113" x2="265" y2="113"/><line x1="45" y1="124" x2="265" y2="124"/><line x1="45" y1="135" x2="265" y2="135"/><line x1="45" y1="146" x2="265" y2="146"/><line x1="45" y1="157" x2="265" y2="157"/><line x1="45" y1="168" x2="265" y2="168"/><line x1="45" y1="179" x2="265" y2="179"/></g><line x1="33" y1="179" x2="278" y2="179" stroke="#000000" stroke-width="1.3"/><polygon points="277,176 285,179 277,182" fill="#000000"/><text x="291" y="183" font-family="Georgia, serif" font-style="italic" font-size="12">x</text><line x1="155" y1="189" x2="155" y2="17" stroke="#000000" stroke-width="1.3"/><polygon points="152,18 155,10 158,18" fill="#000000"/><text x="155" y="6" font-family="Georgia, serif" font-style="italic" font-size="12" text-anchor="middle">y</text><text x="149" y="189" font-family="Georgia, serif" font-style="italic" font-size="11" text-anchor="end">O</text><g font-family="Georgia, serif" font-size="10" fill="#000000" text-anchor="middle"><text x="45" y="193">-10</text><text x="67" y="193">-8</text><text x="89" y="193">-6</text><text x="111" y="193">-4</text><text x="133" y="193">-2</text><text x="177" y="193">2</text><text x="199" y="193">4</text><text x="221" y="193">6</text><text x="243" y="193">8</text><text x="265" y="193">10</text></g><g font-family="Georgia, serif" font-size="10" fill="#000000" text-anchor="end"><text x="150" y="161">2</text><text x="150" y="139">4</text><text x="150" y="117">6</text><text x="150" y="95">8</text><text x="150" y="73">10</text><text x="150" y="51">12</text><text x="150" y="29">14</text></g><path d="M 45,112.5 C 100,112 135,107 155,91 C 172,77 186,55 197,18" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/></svg></div>`,
    options: [
      { id: "A", text: "(-8, 0)" },
      { id: "B", text: "(-6, 0)" },
      { id: "C", text: "(0, 6)" },
      { id: "D", text: "(0, 8)" }
    ],
    correctAnswer: "D",
    explanation: "Looking at the graph, the curve crosses the y-axis at \\((0, 8)\\)."
  },
  {
    id: 1870,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "Which expression is equivalent to \\((2x^2 + x - 9) + (x^2 + 6x + 1)\\)?",
    options: [
      { id: "A", text: "\\(2x^2 + 7x + 10\\)" },
      { id: "B", text: "\\(2x^2 + 6x - 8\\)" },
      { id: "C", text: "\\(3x^2 + 7x - 10\\)" },
      { id: "D", text: "\\(3x^2 + 7x - 8\\)" }
    ],
    correctAnswer: "D",
    explanation: "Combine like terms: \\((2x^2 + x^2) + (x + 6x) + (-9 + 1) = 3x^2 + 7x - 8\\)."
  },
  {
    id: 1871,
    type: "Math",
    module: 1,
    domain: "Problem-Solving & Data Analysis",
    questionText: "An analyst collected data on the price of a carton of grape tomatoes at 30 locations selected at random in Utah. The mean price of a carton of grape tomatoes in Utah was estimated to be $4.23, with an associated margin of error of $0.08. Which of the following is a plausible statement about the mean price of a carton of grape tomatoes for all locations that sell this product in Utah?",
    options: [
      { id: "A", text: "It is between $4.15 and $4.31." },
      { id: "B", text: "It is either less than $4.15 or greater than $4.31." },
      { id: "C", text: "It is less than $4.15." },
      { id: "D", text: "It is greater than $4.31." }
    ],
    correctAnswer: "A",
    explanation: "The confidence interval is mean \\(\\pm\\) margin of error: \\(4.23 - 0.08 = 4.15\\) and \\(4.23 + 0.08 = 4.31\\). A plausible value is between $4.15 and $4.31."
  },
  {
    id: 1872,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">2.6 + x = 2.8</div><p class="mt-3">What value of <i>x</i> is the solution to the given equation?</p>`,
    options: [],
    correctAnswer: "0.2",
    explanation: "Subtract 2.6 from both sides: \\(x = 2.8 - 2.6 = 0.2\\)."
  },
  {
    id: 1873,
    type: "Math",
    module: 1,
    domain: "Problem-Solving & Data Analysis",
    questionText: "Out of 300 seeds that were planted, 80% sprouted. How many of these seeds sprouted?",
    options: [],
    correctAnswer: "240",
    explanation: "80% of 300 = \\(0.80 \\times 300 = 240\\) seeds."
  },
  {
    id: 1874,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">f(x) = 4x + b</div><p class="mt-3">For the linear function <i>f</i>, <i>b</i> is a constant and <i>f</i>(7) = 28. What is the value of <i>b</i> ?</p>`,
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "4" },
      { id: "D", text: "7" }
    ],
    correctAnswer: "A",
    explanation: "For the linear function \\(f(x) = 4x + b\\), we have \\(f(7) = 4(7) + b = 28 + b\\). Since \\(f(7) = 28\\), we have \\(28 + b = 28\\), which gives \\(b = 0\\)."
  },
  {
    id: 1875,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "Right triangles LMN and PQR are similar, where L and M correspond to P and Q, respectively. Angle M has a measure of 53°. What is the measure of angle Q?",
    options: [
      { id: "A", text: "37°" },
      { id: "B", text: "53°" },
      { id: "C", text: "127°" },
      { id: "D", text: "143°" }
    ],
    correctAnswer: "B",
    explanation: "Corresponding angles in similar triangles are congruent. Since angle M corresponds to angle Q, measure of angle Q = 53°."
  },
  {
    id: 1876,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "What is the equation of the line that passes through the point (0, 5) and is parallel to the graph of \\(y = 7x + 4\\) in the \\(xy\\)-plane?",
    options: [
      { id: "A", text: "y = 5x" },
      { id: "B", text: "y = 7x + 5" },
      { id: "C", text: "y = 7x" },
      { id: "D", text: "y = 5x + 7" }
    ],
    correctAnswer: "B",
    explanation: "Parallel lines have equal slopes, so slope \\(m = 7\\). Since the y-intercept is (0, 5), the equation is \\(y = 7x + 5\\)."
  },
  {
    id: 1877,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<p class="mb-3">Which of the following equations is the most appropriate linear model for the data shown in the scatterplot?</p><div class="my-4 flex justify-center"><svg width="320" height="280" viewBox="0 0 320 280" class="bg-white font-serif"><g stroke="#e5e5e5" stroke-width="0.8"><line x1="62" y1="35" x2="62" y2="240"/><line x1="84" y1="35" x2="84" y2="240"/><line x1="106" y1="35" x2="106" y2="240"/><line x1="128" y1="35" x2="128" y2="240"/><line x1="150" y1="35" x2="150" y2="240"/><line x1="172" y1="35" x2="172" y2="240"/><line x1="194" y1="35" x2="194" y2="240"/><line x1="216" y1="35" x2="216" y2="240"/><line x1="238" y1="35" x2="238" y2="240"/><line x1="260" y1="35" x2="260" y2="240"/><line x1="40" y1="221" x2="275" y2="221"/><line x1="40" y1="202" x2="275" y2="202"/><line x1="40" y1="183" x2="275" y2="183"/><line x1="40" y1="164" x2="275" y2="164"/><line x1="40" y1="145" x2="275" y2="145"/><line x1="40" y1="126" x2="275" y2="126"/><line x1="40" y1="107" x2="275" y2="107"/><line x1="40" y1="88" x2="275" y2="88"/><line x1="40" y1="69" x2="275" y2="69"/><line x1="40" y1="50" x2="275" y2="50"/></g><g stroke="#000000" stroke-width="1.2"><line x1="62" y1="237" x2="62" y2="243"/><line x1="84" y1="237" x2="84" y2="243"/><line x1="106" y1="237" x2="106" y2="243"/><line x1="128" y1="237" x2="128" y2="243"/><line x1="150" y1="237" x2="150" y2="243"/><line x1="172" y1="237" x2="172" y2="243"/><line x1="194" y1="237" x2="194" y2="243"/><line x1="216" y1="237" x2="216" y2="243"/><line x1="238" y1="237" x2="238" y2="243"/><line x1="260" y1="237" x2="260" y2="243"/><line x1="37" y1="221" x2="43" y2="221"/><line x1="37" y1="202" x2="43" y2="202"/><line x1="37" y1="183" x2="43" y2="183"/><line x1="37" y1="164" x2="43" y2="164"/><line x1="37" y1="145" x2="43" y2="145"/><line x1="37" y1="126" x2="43" y2="126"/><line x1="37" y1="107" x2="43" y2="107"/><line x1="37" y1="88" x2="43" y2="88"/><line x1="37" y1="69" x2="43" y2="69"/><line x1="37" y1="50" x2="43" y2="50"/></g><line x1="25" y1="240" x2="282" y2="240" stroke="#000" stroke-width="1.8"/><polygon points="282,240 275,236 275,244" fill="#000"/><text x="288" y="244" font-family="Georgia, serif" font-style="italic" font-size="13">x</text><line x1="40" y1="252" x2="40" y2="22" stroke="#000" stroke-width="1.8"/><polygon points="40,22 36,29 44,22" fill="#000"/><polygon points="40,22 36,29 44,29" fill="#000"/><text x="40" y="15" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle">y</text><text x="30" y="252" font-family="Georgia, serif" font-style="italic" font-size="12">O</text><g font-family="Georgia, serif" font-size="11.5" fill="#000000" text-anchor="middle"><text x="62" y="255">1</text><text x="84" y="255">2</text><text x="106" y="255">3</text><text x="128" y="255">4</text><text x="150" y="255">5</text><text x="172" y="255">6</text><text x="194" y="255">7</text><text x="216" y="255">8</text><text x="238" y="255">9</text><text x="260" y="255">10</text></g><g font-family="Georgia, serif" font-size="11.5" fill="#000000" text-anchor="end"><text x="34" y="225">1</text><text x="34" y="206">2</text><text x="34" y="187">3</text><text x="34" y="168">4</text><text x="34" y="149">5</text><text x="34" y="130">6</text><text x="34" y="111">7</text><text x="34" y="92">8</text><text x="34" y="73">9</text><text x="34" y="54">10</text></g><g fill="#000000"><circle cx="47" cy="58" r="3.5"/><circle cx="58" cy="73" r="3.5"/><circle cx="69" cy="96" r="3.5"/><circle cx="82" cy="115" r="3.5"/><circle cx="91" cy="128" r="3.5"/><circle cx="102" cy="143" r="3.5"/><circle cx="113" cy="172" r="3.5"/><circle cx="130" cy="187" r="3.5"/><circle cx="141" cy="210" r="3.5"/><circle cx="152" cy="227" r="3.5"/></g></svg></div>`,
    options: [
      { id: "A", text: "y = -1.9x - 10.1" },
      { id: "B", text: "y = -1.9x + 10.1" },
      { id: "C", text: "y = 1.9x - 10.1" },
      { id: "D", text: "y = 1.9x + 10.1" }
    ],
    correctAnswer: "B",
    explanation: "The scatterplot shows a downward trend with a y-intercept near 10.1 and a negative slope of approximately -1.9, so \\(y = -1.9x + 10.1\\) is the correct model."
  },
  {
    id: 1878,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "A model predicts that the population of Bergen was 15,000 in 2005. The model also predicts that each year for the next 5 years, the population \\(p\\) increased by 4% of the previous year’s population. Which equation best represents this model, where \\(x\\) is the number of years after 2005, for \\(x \\le 5\\)?",
    options: [
      { id: "A", text: "\\(p = 0.96(15{,}000)^x\\)" },
      { id: "B", text: "\\(p = 1.04(15{,}000)^x\\)" },
      { id: "C", text: "\\(p = 15{,}000(0.96)^x\\)" },
      { id: "D", text: "\\(p = 15{,}000(1.04)^x\\)" }
    ],
    correctAnswer: "D",
    explanation: "An exponential growth of 4% per year is modeled by \\(p = P_0(1 + r)^x = 15{,}000(1.04)^x\\)."
  },
  {
    id: 1879,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">2a + 8b = 198<br/>2a + 4b = 98</div><p class="mt-3">The solution to the given system of equations is (<i>a</i>, <i>b</i>). What is the value of <i>b</i>?</p>`,
    options: [],
    correctAnswer: "25",
    explanation: "Subtract the second equation from the first: \\((2a + 8b) - (2a + 4b) = 198 - 98 \\Rightarrow 4b = 100 \\Rightarrow b = 25\\)."
  },
  {
    id: 1880,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "The expression \\(90y^5 - 54y^4\\) is equivalent to \\(ry^4(15y - 9)\\), where \\(r\\) is a constant. What is the value of \\(r\\)?",
    options: [],
    correctAnswer: "6",
    explanation: "Expand \\(ry^4(15y - 9) = 15ry^5 - 9ry^4\\). Equating coefficients with \\(90y^5 - 54y^4\\) gives \\(15r = 90 \\Rightarrow r = 6\\)."
  },
    {
    id: 1881,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<p class="mb-3">The graph of \\(y = f(x)\\) is shown, where the function \\(f\\) is defined by \\(f(x) = ax^3 + bx^2 + cx + d\\) and \\(a, b, c,\\) and \\(d\\) are constants. For how many values of \\(x\\) does \\(f(x) = 0\\)?</p><div class="my-4 flex justify-center"><svg width="300" height="290" viewBox="0 0 300 290" class="bg-white font-serif"><g stroke="#000000" stroke-width="0.75"><line x1="29" y1="29" x2="29" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="43.5" y1="29" x2="43.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="58" y1="29" x2="58" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="72.5" y1="29" x2="72.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="87" y1="29" x2="87" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="101.5" y1="29" x2="101.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="116" y1="29" x2="116" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="130.5" y1="29" x2="130.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="145" y1="29" x2="145" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="159.5" y1="29" x2="159.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="174" y1="29" x2="174" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="188.5" y1="29" x2="188.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="203" y1="29" x2="203" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="217.5" y1="29" x2="217.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="232" y1="29" x2="232" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="246.5" y1="29" x2="246.5" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="261" y1="29" x2="261" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="261" x2="261" y2="261" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="246.5" x2="261" y2="246.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="232" x2="261" y2="232" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="217.5" x2="261" y2="217.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="203" x2="261" y2="203" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="188.5" x2="261" y2="188.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="174" x2="261" y2="174" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="159.5" x2="261" y2="159.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="145" x2="261" y2="145" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="130.5" x2="261" y2="130.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="116" x2="261" y2="116" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="101.5" x2="261" y2="101.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="87" x2="261" y2="87" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="72.5" x2="261" y2="72.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="58" x2="261" y2="58" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="43.5" x2="261" y2="43.5" stroke="#000000" stroke-width="0.75"/><line x1="29" y1="29" x2="261" y2="29" stroke="#000000" stroke-width="0.75"/></g><line x1="15" y1="145" x2="277" y2="145" stroke="#000000" stroke-width="1.8"/><polygon points="277,145 271,141.5 271,148.5" fill="#000000"/><text x="282" y="149" font-family="Georgia, serif" font-style="italic" font-size="13">x</text><line x1="145" y1="269" x2="145" y2="13" stroke="#000000" stroke-width="1.8"/><polygon points="145,13 141.5,19 148.5,19" fill="#000000"/><text x="145" y="9" font-family="Georgia, serif" font-style="italic" font-size="13" text-anchor="middle">y</text><text x="149" y="142" font-family="Georgia, serif" font-style="italic" font-size="12">O</text><g font-family="Georgia, serif" fill="#000000"><text x="29" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-8</text><text x="58" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-6</text><text x="87" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-4</text><text x="116" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">-2</text><text x="174" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">2</text><text x="203" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">4</text><text x="232" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">6</text><text x="261" y="158" font-family="Georgia, serif" font-size="11" fill="#000000" text-anchor="middle">8</text></g><g font-family="Georgia, serif" fill="#000000"><text x="148" y="134" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">2</text><text x="148" y="119.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">4</text><text x="148" y="105" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">6</text><text x="148" y="90.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">8</text><text x="148" y="76" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">10</text><text x="148" y="61.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">12</text><text x="148" y="47" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">14</text><text x="148" y="32.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="start">16</text><text x="142" y="264.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-16</text><text x="142" y="250" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-14</text><text x="142" y="235.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-12</text><text x="142" y="221" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-10</text><text x="142" y="206.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-8</text><text x="142" y="192" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-6</text><text x="142" y="177.5" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-4</text><text x="142" y="163" font-family="Georgia, serif" font-size="10.5" fill="#000000" text-anchor="end">-2</text></g><path d="M 127.31 21.65 L 127.6 24.44 L 127.89 27.19 L 128.18 29.91 L 128.47 32.61 L 128.76 35.29 L 129.05 37.93 L 129.34 40.55 L 129.63 43.14 L 129.92 45.7 L 130.21 48.24 L 130.5 50.75 L 130.79 53.23 L 131.08 55.69 L 131.37 58.12 L 131.66 60.53 L 131.95 62.91 L 132.24 65.26 L 132.53 67.59 L 132.82 69.9 L 133.11 72.17 L 133.4 74.43 L 133.69 76.65 L 133.98 78.85 L 134.27 81.03 L 134.56 83.18 L 134.85 85.31 L 135.14 87.41 L 135.43 89.49 L 135.72 91.54 L 136.01 93.57 L 136.3 95.58 L 136.59 97.56 L 136.88 99.51 L 137.17 101.44 L 137.46 103.35 L 137.75 105.24 L 138.04 107.1 L 138.33 108.94 L 138.62 110.75 L 138.91 112.54 L 139.2 114.31 L 139.49 116.06 L 139.78 117.78 L 140.07 119.48 L 140.36 121.16 L 140.65 122.81 L 140.94 124.44 L 141.23 126.05 L 141.52 127.64 L 141.81 129.21 L 142.1 130.75 L 142.39 132.27 L 142.68 133.77 L 142.97 135.25 L 143.26 136.71 L 143.55 138.14 L 143.84 139.55 L 144.13 140.95 L 144.42 142.32 L 144.71 143.67 L 145 145 L 145.29 146.31 L 145.58 147.6 L 145.87 148.87 L 146.16 150.11 L 146.45 151.34 L 146.74 152.55 L 147.03 153.73 L 147.32 154.9 L 147.61 156.05 L 147.9 157.18 L 148.19 158.29 L 148.48 159.37 L 148.77 160.44 L 149.06 161.49 L 149.35 162.52 L 149.64 163.54 L 149.93 164.53 L 150.22 165.5 L 150.51 166.46 L 150.8 167.39 L 151.09 168.31 L 151.38 169.21 L 151.67 170.09 L 151.96 170.96 L 152.25 171.8 L 152.54 172.63 L 152.83 173.44 L 153.12 174.23 L 153.41 175.01 L 153.7 175.76 L 153.99 176.5 L 154.28 177.23 L 154.57 177.93 L 154.86 178.62 L 155.15 179.29 L 155.44 179.95 L 155.73 180.58 L 156.02 181.2 L 156.31 181.81 L 156.6 182.4 L 156.89 182.97 L 157.18 183.53 L 157.47 184.07 L 157.76 184.59 L 158.05 185.1 L 158.34 185.59 L 158.63 186.07 L 158.92 186.53 L 159.21 186.98 L 159.5 187.41 L 159.79 187.83 L 160.08 188.23 L 160.37 188.62 L 160.66 188.99 L 160.95 189.35 L 161.24 189.69 L 161.53 190.02 L 161.82 190.33 L 162.11 190.63 L 162.4 190.92 L 162.69 191.19 L 162.98 191.45 L 163.27 191.69 L 163.56 191.92 L 163.85 192.14 L 164.14 192.35 L 164.43 192.54 L 164.72 192.71 L 165.01 192.88 L 165.3 193.03 L 165.59 193.17 L 165.88 193.29 L 166.17 193.41 L 166.46 193.51 L 166.75 193.6 L 167.04 193.67 L 167.33 193.74 L 167.62 193.79 L 167.91 193.83 L 168.2 193.86 L 168.49 193.88 L 168.78 193.88 L 169.07 193.87 L 169.36 193.86 L 169.65 193.83 L 169.94 193.79 L 170.23 193.74 L 170.52 193.68 L 170.81 193.6 L 171.1 193.52 L 171.39 193.43 L 171.68 193.32 L 171.97 193.21 L 172.26 193.08 L 172.55 192.95 L 172.84 192.8 L 173.13 192.65 L 173.42 192.48 L 173.71 192.31 L 174 192.13 L 174.29 191.93 L 174.58 191.73 L 174.87 191.52 L 175.16 191.3 L 175.45 191.07 L 175.74 190.83 L 176.03 190.58 L 176.32 190.33 L 176.61 190.06 L 176.9 189.79 L 177.19 189.51 L 177.48 189.22 L 177.77 188.92 L 178.06 188.61 L 178.35 188.3 L 178.64 187.98 L 178.93 187.65 L 179.22 187.32 L 179.51 186.97 L 179.8 186.62 L 180.09 186.26 L 180.38 185.9 L 180.67 185.53 L 180.96 185.15 L 181.25 184.76 L 181.54 184.37 L 181.83 183.97 L 182.12 183.57 L 182.41 183.16 L 182.7 182.74 L 182.99 182.31 L 183.28 181.89 L 183.57 181.45 L 183.86 181.01 L 184.15 180.56 L 184.44 180.11 L 184.73 179.65 L 185.02 179.19 L 185.31 178.72 L 185.6 178.25 L 185.89 177.77 L 186.18 177.29 L 186.47 176.8 L 186.76 176.31 L 187.05 175.82 L 187.34 175.32 L 187.63 174.81 L 187.92 174.3 L 188.21 173.79 L 188.5 173.27 L 188.79 172.75 L 189.08 172.23 L 189.37 171.7 L 189.66 171.17 L 189.95 170.64 L 190.24 170.1 L 190.53 169.56 L 190.82 169.02 L 191.11 168.47 L 191.4 167.92 L 191.69 167.37 L 191.98 166.82 L 192.27 166.26 L 192.56 165.7 L 192.85 165.14 L 193.14 164.58 L 193.43 164.01 L 193.72 163.44 L 194.01 162.87 L 194.3 162.3 L 194.59 161.73 L 194.88 161.16 L 195.17 160.58 L 195.46 160.01 L 195.75 159.43 L 196.04 158.85 L 196.33 158.28 L 196.62 157.7 L 196.91 157.12 L 197.2 156.54 L 197.49 155.96 L 197.78 155.37 L 198.07 154.79 L 198.36 154.21 L 198.65 153.63 L 198.94 153.05 L 199.23 152.47 L 199.52 151.89 L 199.81 151.31 L 200.1 150.73 L 200.39 150.15 L 200.68 149.57 L 200.97 149 L 201.26 148.42 L 201.55 147.85 L 201.84 147.28 L 202.13 146.7 L 202.42 146.13 L 202.71 145.57 L 203 145 L 203.29 144.44 L 203.58 143.87 L 203.87 143.31 L 204.16 142.75 L 204.45 142.2 L 204.74 141.65 L 205.03 141.09 L 205.32 140.55 L 205.61 140 L 205.9 139.46 L 206.19 138.92 L 206.48 138.38 L 206.77 137.85 L 207.06 137.32 L 207.35 136.79 L 207.64 136.27 L 207.93 135.75 L 208.22 135.24 L 208.51 134.73 L 208.8 134.22 L 209.09 133.71 L 209.38 133.22 L 209.67 132.72 L 209.96 132.23 L 210.25 131.75 L 210.54 131.27 L 210.83 130.79 L 211.12 130.32 L 211.41 129.85 L 211.7 129.39 L 211.99 128.94 L 212.28 128.49 L 212.57 128.04 L 212.86 127.6 L 213.15 127.17 L 213.44 126.74 L 213.73 126.32 L 214.02 125.91 L 214.31 125.5 L 214.6 125.09 L 214.89 124.7 L 215.18 124.31 L 215.47 123.92 L 215.76 123.55 L 216.05 123.18 L 216.34 122.82 L 216.63 122.46 L 216.92 122.11 L 217.21 121.77 L 217.5 121.44 L 217.79 121.11 L 218.08 120.79 L 218.37 120.48 L 218.66 120.18 L 218.95 119.88 L 219.24 119.6 L 219.53 119.32 L 219.82 119.05 L 220.11 118.79 L 220.4 118.53 L 220.69 118.29 L 220.98 118.05 L 221.27 117.83 L 221.56 117.61 L 221.85 117.4 L 222.14 117.2 L 222.43 117.01 L 222.72 116.83 L 223.01 116.66 L 223.3 116.5 L 223.59 116.35 L 223.88 116.21 L 224.17 116.07 L 224.46 115.95 L 224.75 115.84 L 225.04 115.74 L 225.33 115.65 L 225.62 115.57 L 225.91 115.5 L 226.2 115.44 L 226.49 115.4 L 226.78 115.36 L 227.07 115.33 L 227.36 115.32 L 227.65 115.32 L 227.94 115.33 L 228.23 115.35 L 228.52 115.38 L 228.81 115.42 L 229.1 115.48 L 229.39 115.55 L 229.68 115.63 L 229.97 115.72 L 230.26 115.83 L 230.55 115.95 L 230.84 116.08 L 231.13 116.22 L 231.42 116.37 L 231.71 116.54 L 232 116.72 L 232.29 116.92 L 232.58 117.13 L 232.87 117.35 L 233.16 117.59 L 233.45 117.83 L 233.74 118.1 L 234.03 118.37 L 234.32 118.66 L 234.61 118.97 L 234.9 119.29 L 235.19 119.62 L 235.48 119.97 L 235.77 120.33 L 236.06 120.71 L 236.35 121.1 L 236.64 121.51 L 236.93 121.93 L 237.22 122.37 L 237.51 122.82 L 237.8 123.28 L 238.09 123.77 L 238.38 124.27 L 238.67 124.78 L 238.96 125.31 L 239.25 125.86 L 239.54 126.42 L 239.83 127 L 240.12 127.59 L 240.41 128.2 L 240.7 128.83 L 240.99 129.47 L 241.28 130.13 L 241.57 130.81 L 241.86 131.5 L 242.15 132.21 L 242.44 132.94 L 242.73 133.69 L 243.02 134.45 L 243.31 135.23 L 243.6 136.03 L 243.89 136.84 L 244.18 137.68 L 244.47 138.53 L 244.76 139.4 L 245.05 140.29 L 245.34 141.19 L 245.63 142.12 L 245.92 143.06 L 246.21 144.02 L 246.5 145 L 246.79 146 L 247.08 147.02 L 247.37 148.05 L 247.66 149.11 L 247.95 150.19 L 248.24 151.28 L 248.53 152.4 L 248.82 153.53 L 249.11 154.68 L 249.4 155.86 L 249.69 157.05 L 249.98 158.27 L 250.27 159.5 L 250.56 160.75 L 250.85 162.03 L 251.14 163.32 L 251.43 164.64 L 251.72 165.98 L 252.01 167.33 L 252.3 168.71 L 252.59 170.11 L 252.88 171.53 L 253.17 172.98 L 253.46 174.44 L 253.75 175.93 L 254.04 177.43 L 254.33 178.96 L 254.62 180.51 L 254.91 182.09 L 255.2 183.68 L 255.49 185.3 L 255.78 186.94 L 256.07 188.6 L 256.36 190.28 L 256.65 191.99 L 256.94 193.72 L 257.23 195.47 L 257.52 197.25 L 257.81 199.05 L 258.1 200.87 L 258.39 202.72" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    options: [
      { id: "A", text: "One" },
      { id: "B", text: "Two" },
      { id: "C", text: "Three" },
      { id: "D", text: "Four" }
    ],
    correctAnswer: "C",
    explanation: "The graph of a cubic polynomial crosses the x-axis at 3 distinct points, so there are three values of \\(x\\) where \\(f(x) = 0\\)."
  },
  {
    id: 1882,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "The area \\(A\\), in square centimeters, of a rectangular cutting board can be represented by the expression \\(w(w + 9)\\), where \\(w\\) is the width, in centimeters, of the cutting board. Which expression represents the length, in centimeters, of the cutting board?",
    options: [
      { id: "A", text: "w(w + 9)" },
      { id: "B", text: "w" },
      { id: "C", text: "9" },
      { id: "D", text: "w + 9" }
    ],
    correctAnswer: "D",
    explanation: "Since Area = width \\(\\times\\) length, if Area = \\(w(w + 9)\\) and width = \\(w\\), then length = \\(w + 9\\)."
  },
  {
    id: 1883,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">p = \\frac{k}{4j + 9}</div><p class="mt-3">The given equation relates the distinct positive numbers <i>p</i>, <i>k</i>, and <i>j</i>. Which equation correctly expresses 4<i>j</i> + 9 in terms of <i>p</i> and <i>k</i>?</p>`,
    options: [
      { id: "A", text: "4j + 9 = \\frac{k}{p}" },
      { id: "B", text: "4j + 9 = kp" },
      { id: "C", text: "4j + 9 = k - p" },
      { id: "D", text: "4j + 9 = \\frac{p}{k}" }
    ],
    correctAnswer: "A",
    explanation: "Multiply both sides by \\((4j + 9)\\) and divide by \\(p\\) to get \\(4j + 9 = \\frac{k}{p}\\)."
  },
  {
    id: 1884,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "Circle A has a radius of \\(3n\\) and circle B has a radius of \\(129n\\), where \\(n\\) is a positive constant. The area of circle B is how many times the area of circle A?",
    options: [
      { id: "A", text: "43" },
      { id: "B", text: "86" },
      { id: "C", text: "129" },
      { id: "D", text: "1,849" }
    ],
    correctAnswer: "D",
    explanation: "The ratio of areas of two similar figures is the square of the ratio of their linear dimensions: \\(\\left(\\frac{129n}{3n}\\right)^2 = 43^2 = 1{,}849\\)."
  },
  {
    id: 1885,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "The measure of angle R is \\(\\frac{2\\pi}{3}\\) radians. The measure of angle T is \\(\\frac{5\\pi}{12}\\) radians greater than the measure of angle R. What is the measure of angle T, in degrees?",
    options: [
      { id: "A", text: "75" },
      { id: "B", text: "120" },
      { id: "C", text: "195" },
      { id: "D", text: "390" }
    ],
    correctAnswer: "C",
    explanation: "Angle T = \\(\\frac{2\\pi}{3} + \\frac{5\\pi}{12} = \\frac{8\\pi + 5\\pi}{12} = \\frac{13\\pi}{12}\\) radians. Convert to degrees: \\(\\frac{13\\pi}{12} \\times \\frac{180^\\circ}{\\pi} = 13 \\times 15^\\circ = 195^\\circ\\)."
  },
  {
    id: 1886,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<div class="my-4 text-center font-serif text-lg">\\(y = x^2 - 14x + 22\\)</div><p class="mt-3">The given equation relates the variables \\(x\\) and \\(y\\). For what value of \\(x\\) does the value of \\(y\\) reach its minimum?</p>`,
    options: [],
    correctAnswer: "7",
    explanation: "The vertex x-coordinate for a quadratic \\(y = ax^2 + bx + c\\) is \\(x = -\\frac{b}{2a} = -\\frac{-14}{2(1)} = 7\\)."
  },
  {
    id: 1887,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: "A small business owner budgets $2,200 to purchase candles. The owner must purchase a minimum of 200 candles to maintain the discounted pricing. If the owner pays $4.90 per candle to purchase small candles and $11.60 per candle to purchase large candles, what is the maximum number of large candles the owner can purchase to stay within the budget and maintain the discounted pricing?",
    options: [],
    correctAnswer: "182",
    explanation: "Let \\(s\\) be small and \\(l\\) be large candles. \\(s + l \\ge 200 \\Rightarrow s \\ge 200 - l\\). Budget: \\(4.90s + 11.60l \\le 2200\\). Substituting \\(s = 200 - l\\) gives \\(4.90(200 - l) + 11.60l \\le 2200 \\Rightarrow 980 + 6.70l \\le 2200 \\Rightarrow 6.70l \\le 1220 \\Rightarrow l \\le 182.089\\). The maximum whole number of large candles is 182."
  },
  {
    id: 1888,
    type: "Math",
    module: 1,
    domain: "Algebra",
    questionText: `<div class="my-4 text-center font-serif text-lg space-y-1"><div>\\(y \\le x + 7\\)</div><div>\\(y \\ge -2x - 1\\)</div></div><p class="mt-3">Which point \\((x, y)\\) is a solution to the given system of inequalities in the \\(xy\\)-plane?</p>`,
    options: [
      { id: "A", text: "(-14, 0)" },
      { id: "B", text: "(0, -14)" },
      { id: "C", text: "(0, 14)" },
      { id: "D", text: "(14, 0)" }
    ],
    correctAnswer: "D",
    explanation: "Test (14, 0): \\(0 \\le 14 + 7 = 21\\) (True) and \\(0 \\ge -2(14) - 1 = -29\\) (True). Thus (14, 0) is a solution."
  },
  {
    id: 1889,
    type: "Math",
    module: 1,
    domain: "Problem-Solving & Data Analysis",
    questionText: `<div class="my-4 flex justify-center"><table class="border-collapse border border-black font-serif text-sm"><thead><tr class="border-b border-black"><th class="border-r border-black px-4 py-1.5 font-normal text-center">Weight (pounds)</th><th class="px-4 py-1.5 font-normal text-center">Frequency</th></tr></thead><tbody class="text-center"><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">13</td><td class="px-4 py-1">12</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">14</td><td class="px-4 py-1">8</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">15</td><td class="px-4 py-1">5</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">16</td><td class="px-4 py-1">7</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">17</td><td class="px-4 py-1">9</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">18</td><td class="px-4 py-1">10</td></tr><tr class="border-b border-black"><td class="border-r border-black px-4 py-1">19</td><td class="px-4 py-1">13</td></tr><tr><td class="border-r border-black px-4 py-1">20</td><td class="px-4 py-1">7</td></tr></tbody></table></div><p class="mt-4">The frequency table summarizes a data set of the weights, rounded to the nearest pound, of 71 tortoises. A weight of 39 pounds is added to the original data set, creating a new data set of the weights, rounded to the nearest pound, of 72 tortoises. Which statement best compares the mean and median of the new data set to the mean and median of the original data set?</p>`,
    options: [
      { id: "A", text: "The mean of the new data set is greater than the mean of the original data set, and the median of the new data set is greater than the median of the original data set." },
      { id: "B", text: "The mean of the new data set is greater than the mean of the original data set, and the medians of the two data sets are equal." },
      { id: "C", text: "The mean of the new data set is less than the mean of the original data set, and the median of the new data set is less than the median of the original data set." },
      { id: "D", text: "The mean of the new data set is less than the mean of the original data set, and the medians of the two data sets are equal." }
    ],
    correctAnswer: "B",
    explanation: "Adding a 39-pound value (which is significantly larger than all current values 13–20) increases the mean. The median of the original 71 values was 17 (the 36th value); with 72 values, the 36th and 37th values are both still 17, so the median remains equal to 17."
  },
  {
    id: 1890,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: `<div class="my-4 text-center font-serif italic text-lg">x - 29 = (x - a)(x - 29)</div><p class="mt-3">Which of the following are solutions to the given equation, where <i>a</i> is a constant and <i>a</i> &gt; 30?<br/>I. <i>a</i><br/>II. <i>a</i> + 1<br/>III. 29</p>`,
    options: [
      { id: "A", text: "I and II only" },
      { id: "B", text: "I and III only" },
      { id: "C", text: "II and III only" },
      { id: "D", text: "I, II, and III" }
    ],
    correctAnswer: "C",
    explanation: "Rearranging: \\((x - 29)[1 - (x - a)] = 0\\). So either \\(x - 29 = 0 \\Rightarrow x = 29\\) (III) or \\(1 - x + a = 0 \\Rightarrow x = a + 1\\) (II)."
  },
  {
    id: 1891,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "In the <i>xy</i>-plane, the graph of the equation \\(y = -x^2 + 9x - 100\\) intersects the line \\(y = c\\) at exactly one point. What is the value of \\(c\\)?",
    options: [
      { id: "A", text: "-\\frac{481}{4}" },
      { id: "B", text: "-100" },
      { id: "C", text: "-\\frac{319}{4}" },
      { id: "D", text: "-\\frac{9}{2}" }
    ],
    correctAnswer: "C",
    explanation: "A horizontal line intersects a parabola at exactly one point at its vertex. Vertex y-value: \\(x = -\\frac{9}{2(-1)} = \\frac{9}{2}\\). \\(c = -\\left(\\frac{9}{2}\\right)^2 + 9\\left(\\frac{9}{2}\\right) - 100 = -\\frac{81}{4} + \\frac{162}{4} - \\frac{400}{4} = -\\frac{319}{4}\\)."
  },
  {
    id: 1892,
    type: "Math",
    module: 1,
    domain: "Advanced Math",
    questionText: "The functions \\(f\\) and \\(g\\) are defined by the given equations, where \\(x \\ge 0\\). Which of the following equations displays, as a constant or coefficient, the maximum value of the function it defines, where \\(x \\ge 0\\)?\n\nI. \\(f(x) = 18(1.25)^x + 41\\)\nII. \\(g(x) = 9(0.73)^x\\)",
    options: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "I and II" },
      { id: "D", text: "Neither I nor II" }
    ],
    correctAnswer: "B",
    explanation: "For \\(x \\ge 0\\), \\(f(x)\\) increases without bound. \\(g(x) = 9(0.73)^x\\) is decreasing for \\(x \\ge 0\\), so its maximum is at \\(x = 0\\), which is 9 (displayed as the coefficient 9)."
  },
  {
    id: 1893,
    type: "Math",
    module: 1,
    domain: "Geometry & Trigonometry",
    questionText: "The perimeter of an equilateral triangle is 852 centimeters. The three vertices of the triangle lie on a circle. The radius of the circle is \\(w\\sqrt{3}\\) centimeters. What is the value of \\(w\\)?",
    options: [],
    correctAnswer: "284/3",
    explanation: "Side length of equilateral triangle \\(s = \\frac{852}{3} = 284\\) cm. The circumradius \\(R = \\frac{s}{\\sqrt{3}} = \\frac{284}{\\sqrt{3}} = \\frac{284}{3}\\sqrt{3}\\). Since \\(R = w\\sqrt{3}\\), \\(w = \\frac{284}{3}\\)."
  }
];
