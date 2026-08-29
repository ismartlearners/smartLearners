import { Question } from '../types';
import { makeM1Q1Svg, makeM1Q3Svg, makeM1Q6Svg, makeRationalGraph } from './test5_graph_helpers';

export const TEST5_MATH_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 2007,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    passageHtml: makeM1Q1Svg(),
    questionText: `The graph of a system of a linear equation and a nonlinear equation is shown. What is the solution (x, y) to this system?`,
    options: [
      { id: 'A', text: '(0, 0)' },
      { id: 'B', text: '(0, 4)' },
      { id: 'C', text: '(4, 5)' },
      { id: 'D', text: '(5, 0)' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct because the two curves intersect at the point (4, 5).'
  },
  {
    id: 2008,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 2,
    domain: 'Algebra',
    skill: 'Linear Word Problems',
    questionText: `On the first day of a semester, a film club has 90 members. Each day after the first day of the semester, 10 new members join the film club. If no members leave the film club, how many total members will the film club have 4 days after the first day of the semester?`,
    options: [
      { id: 'A', text: '400' },
      { id: 'B', text: '130' },
      { id: 'C', text: '94' },
      { id: 'D', text: '90' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. 90 + 10(4) = 90 + 40 = 130.'
  },
  {
    id: 2009,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Linear Functions',
    passageHtml: makeM1Q3Svg(),
    questionText: `The graph of the linear function f is shown, where y = f(x). What is the y-intercept of the graph of f?`,
    options: [
      { id: 'A', text: '\\((0, 0)\\)' },
      { id: 'B', text: '\\((0, -\\frac{16}{11})\\)' },
      { id: 'C', text: '\\((0, -8)\\)' },
      { id: 'D', text: '\\((0, 8)\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct because the line crosses the y-axis at y = 8, corresponding to point (0, 8).'
  },
  {
    id: 2010,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 4,
    domain: 'Algebra',
    skill: 'Systems of Linear Equations',
    passageHtml: `<p class="mb-2 font-mono text-center">s + 7r = 27<br/>r = 3</p>`,
    questionText: `What is the solution (r, s) to the given system of equations?`,
    options: [
      { id: 'A', text: '(6, 3)' },
      { id: 'B', text: '(3, 6)' },
      { id: 'C', text: '(3, 27)' },
      { id: 'D', text: '(27, 3)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Substituting r = 3 into s + 7(3) = 27 gives s + 21 = 27, so s = 6. The ordered pair (r, s) is (3, 6).'
  },
  {
    id: 2011,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 5,
    domain: 'Algebra',
    skill: 'Linear and Exponential Functions',
    passageHtml: `<div class="my-4 flex justify-center">
  <table class="border-collapse border border-black font-serif text-center text-sm md:text-base">
    <thead>
      <tr class="border-b border-black">
        <th class="border-r border-black px-4 py-1.5 font-normal italic">x</th>
        <th class="px-4 py-1.5 font-normal italic">f(x)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1">−1</td>
        <td class="px-4 py-1">16</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1">0</td>
        <td class="px-4 py-1">17</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1">1</td>
        <td class="px-4 py-1">18</td>
      </tr>
      <tr>
        <td class="border-r border-black px-4 py-1">2</td>
        <td class="px-4 py-1">19</td>
      </tr>
    </tbody>
  </table>
</div>`,
    questionText: `The table shows selected values from function f. Which of the following is the best description of function f?`,
    options: [
      { id: 'A', text: 'Decreasing linear' },
      { id: 'B', text: 'Increasing linear' },
      { id: 'C', text: 'Decreasing exponential' },
      { id: 'D', text: 'Increasing exponential' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct because f(x) increases by a constant amount (+1) for every increase of 1 in x, which represents an increasing linear function.'
  },
  {
    id: 2012,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 6,
    domain: 'Algebra',
    skill: 'Systems of Linear Equations',
    passageHtml: makeM1Q6Svg(),
    questionText: `The graph of a system of linear equations is shown. The solution to the system is (x, y). What is the value of x?`,
    options: [],
    correctAnswer: '4',
    explanation: 'The solution is x = 4, corresponding to the x-coordinate of the intersection point of the two lines.'
  },
  {
    id: 2013,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 7,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Center and Spread',
    passageHtml: `<p class="mb-2 font-mono text-center">23, 27, 27, 32, 35, 36, 52</p>`,
    questionText: `What is the range of the 7 scores shown?`,
    options: [],
    correctAnswer: '29',
    explanation: 'The range is the maximum score minus the minimum score: 52 - 23 = 29.'
  },
  {
    id: 2014,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 8,
    domain: 'Geometry and Trigonometry',
    skill: 'Lines and Angles',
    passageHtml: `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 280 180" class="w-full max-w-xs md:max-w-sm bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 28/18;">
      <!-- Line m -->
      <line x1="35" y1="55" x2="230" y2="55" stroke="#000" stroke-width="1.6"/>
      <text x="242" y="59" font-style="italic" font-size="14" fill="#000">m</text>
      
      <!-- Line n -->
      <line x1="35" y1="120" x2="230" y2="120" stroke="#000" stroke-width="1.6"/>
      <text x="242" y="124" font-style="italic" font-size="14" fill="#000">n</text>
      
      <!-- Line k -->
      <line x1="45" y1="155" x2="230" y2="18" stroke="#000" stroke-width="1.6"/>
      <text x="236" y="16" font-style="italic" font-size="14" fill="#000">k</text>
      
      <!-- Angle Labels (no arc curves, matching original test) -->
      <text x="84" y="114" font-size="12" text-anchor="end" fill="#000"><tspan font-style="italic">x</tspan>°</text>
      <text x="96" y="136" font-size="12" text-anchor="start" fill="#000">145°</text>
    </svg>
  </div>
  <p class="mt-2 text-xs text-slate-500 italic">Note: Figure not drawn to scale.</p>
</div>`,
    questionText: `In the figure, line m is parallel to line n, and line k intersects both lines. Which of the following statements is true?`,
    options: [
      { id: 'A', text: 'The value of x is less than 145.' },
      { id: 'B', text: 'The value of x is greater than 145.' },
      { id: 'C', text: 'The value of x is equal to 145.' },
      { id: 'D', text: 'The value of x cannot be determined.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct because corresponding (or vertical) angles formed by parallel lines intersected by a transversal are equal, so x = 145.'
  },
  {
    id: 2015,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 9,
    domain: 'Algebra',
    skill: 'Linear Word Problems',
    questionText: `The equation x + y = 1,440 represents the number of minutes of daylight (between sunrise and sunset), x, and the number of minutes of non-daylight, y, on a particular day in Oak Park, Illinois. If this day has 670 minutes of daylight, how many minutes of non-daylight does it have?`,
    options: [
      { id: 'A', text: '670' },
      { id: 'B', text: '770' },
      { id: 'C', text: '1,373' },
      { id: 'D', text: '1,440' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. 670 + y = 1,440 => y = 1,440 - 670 = 770.'
  },
  {
    id: 2016,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 10,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Sample Statistics and Population Estimates',
    questionText: `Scott selected 20 employees at random from all 400 employees at a company. He found that 16 of the employees in this sample are enrolled in exactly three professional development courses this year. Based on Scott’s findings, which of the following is the best estimate of the number of employees at the company who are enrolled in exactly three professional development courses this year?`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '320' },
      { id: 'C', text: '380' },
      { id: 'D', text: '384' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The sample proportion is 16 / 20 = 0.80. Estimating for the population of 400 yields 0.80 × 400 = 320.'
  },
  {
    id: 2017,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 11,
    domain: 'Algebra',
    skill: 'Linear Equations in One Variable',
    questionText: `If 4x − 28 = −24, what is the value of x − 7?`,
    options: [
      { id: 'A', text: '−24' },
      { id: 'B', text: '−22' },
      { id: 'C', text: '−6' },
      { id: 'D', text: '−1' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. Dividing both sides of 4x - 28 = -24 by 4 yields x - 7 = -6.'
  },
  {
    id: 2018,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 12,
    domain: 'Algebra',
    skill: 'Linear Inequalities',
    questionText: `For a snowstorm in a certain town, the minimum rate of snowfall recorded was 0.6 inches per hour, and the maximum rate of snowfall recorded was 1.8 inches per hour. Which inequality is true for all values of s, where s represents a rate of snowfall, in inches per hour, recorded for this snowstorm?`,
    options: [
      { id: 'A', text: 's ≥ 2.4' },
      { id: 'B', text: 's ≥ 1.8' },
      { id: 'C', text: '0 ≤ s ≤ 0.6' },
      { id: 'D', text: '0.6 ≤ s ≤ 1.8' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct because the snowfall rate s is bounded between the minimum (0.6) and maximum (1.8), so 0.6 ≤ s ≤ 1.8.'
  },
  {
    id: 2019,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 13,
    domain: 'Advanced Math',
    skill: 'Nonlinear Systems',
    passageHtml: `<p class="mb-2 font-mono text-center">y = 4x<br/>y = x² − 12</p>`,
    questionText: `A solution to the given system of equations is (x, y), where x > 0. What is the value of x?`,
    options: [],
    correctAnswer: '6',
    explanation: 'Setting 4x = x² - 12 gives x² - 4x - 12 = 0 => (x - 6)(x + 2) = 0. Since x > 0, x = 6.'
  },
  {
    id: 2020,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 14,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    questionText: `A store sells two different-sized containers of blueberries. The store’s sales of these blueberries totaled 896.86 dollars last month. The equation 4.51x + 6.07y = 896.86 represents this situation, where x is the number of smaller containers sold and y is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?`,
    options: [],
    correctAnswer: '4.51',
    explanation: 'In the equation 4.51x + 6.07y = 896.86, the coefficient of x (4.51) represents the unit price in dollars of each smaller container.'
  },
  {
    id: 2021,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 15,
    domain: 'Geometry and Trigonometry',
    skill: 'Volume and Surface Area',
    questionText: `A right circular cylinder has a base diameter of 22 centimeters and a height of 6 centimeters. What is the volume, in cubic centimeters, of the cylinder?`,
    options: [
      { id: 'A', text: '132π' },
      { id: 'B', text: '264π' },
      { id: 'C', text: '726π' },
      { id: 'D', text: '2,904π' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The radius r is 22 / 2 = 11 cm. Volume = π r² h = π (11²) (6) = π (121) (6) = 726π.'
  },
  {
        id: 2022,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 16,
    domain: 'Advanced Math',
    skill: 'Graphing Non-linear Functions',
    passageHtml: `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    ${makeRationalGraph('main', 'main')}
  </div>
</div>`,
    questionText: `The graph of the rational function f is shown, where y = f(x) and x ≥ 0. Which of the following is the graph of y = f(x) + 5, where x ≥ 0 ?`,
    options: [
      { id: 'A', text: `<div class="flex flex-col items-center p-1">${makeRationalGraph('A', 'optA')}</div>` },
      { id: 'B', text: `<div class="flex flex-col items-center p-1">${makeRationalGraph('B', 'optB')}</div>` },
      { id: 'C', text: `<div class="flex flex-col items-center p-1">${makeRationalGraph('C', 'optC')}</div>` },
      { id: 'D', text: `<div class="flex flex-col items-center p-1">${makeRationalGraph('D', 'optD')}</div>` }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct because adding 5 to f(x) shifts the entire graph vertically upward by 5 units, moving the y-intercept from 4 to 9.'
  },
  {
    id: 2023,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 17,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Ratios, Rates, and Proportions',
    questionText: `At a particular track meet, the ratio of coaches to athletes is 1 to 26. If there are x coaches at the track meet, which of the following expressions represents the number of athletes at the track meet?`,
    options: [
      { id: 'A', text: '\\(\\frac{x}{26}\\)' },
      { id: 'B', text: '\\(26x\\)' },
      { id: 'C', text: '\\(x + 26\\)' },
      { id: 'D', text: '\\(\\frac{26}{x}\\)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Since there are 26 athletes for every 1 coach, x coaches correspond to 26x athletes.'
  },
  {
    id: 2024,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Linear Functions in Context',
    questionText: `Kaylani used fabric measuring 5 yards in length to make each suit for a men’s choir. The relationship between the number of suits that Kaylani made, x, and the total length of fabric that she purchased y, in yards, is represented by the equation y − 5x = 6. What is the best interpretation of 6 in this context?`,
    options: [
      { id: 'A', text: 'Kaylani made 6 suits.' },
      { id: 'B', text: 'Kaylani purchased a total of 6 yards of fabric.' },
      { id: 'C', text: 'Kaylani used a total of 6 yards of fabric to make the suits.' },
      { id: 'D', text: 'Kaylani purchased 6 yards more fabric than she used to make the suits.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Rewriting as y = 5x + 6 shows that the total fabric purchased (y) equals the fabric used for x suits (5x) plus 6 extra yards.'
  },
  {
    id: 2025,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 19,
    domain: 'Geometry and Trigonometry',
    skill: 'Trigonometric Functions',
    questionText: `What is the value of \\(\\tan \\frac{92\\pi}{3}\\)?`,
    options: [
      { id: 'A', text: '\\(-\\sqrt{3}\\)' },
      { id: 'B', text: '\\(-\\frac{\\sqrt{3}}{3}\\)' },
      { id: 'C', text: '\\(\\frac{\\sqrt{3}}{3}\\)' },
      { id: 'D', text: '\\(\\sqrt{3}\\)' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. \\(\\frac{92\\pi}{3} = 30\\pi + \\frac{2\\pi}{3}\\). Since \\(\\tan\\) is periodic with period \\(\\pi\\), \\(\\tan \\frac{92\\pi}{3} = \\tan \\frac{2\\pi}{3} = -\\sqrt{3}\\).'
  },
  {
    id: 2026,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 20,
    domain: 'Geometry and Trigonometry',
    skill: 'Right Triangle Trigonometry',
    passageHtml: `<div class="my-4 flex flex-col items-center">
  <div class="w-full max-w-sm flex justify-center">
    <svg viewBox="0 0 240 180" class="w-full max-w-xs bg-white p-2 border border-slate-200 rounded-lg shadow-sm font-serif" style="aspect-ratio: 24/18;">
      <polygon points="50,25 50,145 205,145" fill="none" stroke="#000" stroke-width="2"/>
      <polyline points="50,133 62,133 62,145" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="35" y="90" font-size="13" text-anchor="end" fill="#000">11</text>
      <text x="135" y="78" font-size="13" text-anchor="start" fill="#000">28</text>
      <text x="56" y="52" font-size="12" fill="#000"><tspan font-style="italic">x</tspan>°</text>
    </svg>
  </div>
  <p class="mt-2 text-xs text-slate-500 italic">Note: Figure not drawn to scale.</p>
</div>`,
    questionText: `In the triangle shown, what is the value of \\(\\cos x^\\circ\\)?`,
    options: [],
    correctAnswer: '11/28',
    explanation: 'For angle \\(x^\\circ\\), the adjacent side is 11 and the hypotenuse is 28. Therefore, \\(\\cos x^\\circ = \\frac{11}{28}\\).'
  },
  {
    id: 2027,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 21,
    domain: 'Advanced Math',
    skill: 'Evaluating Polynomial Functions',
    questionText: `The function \\(g\\) is defined by \\(g(x) = (x + 14)(t - x)\\), where \\(t\\) is a constant. In the xy-plane, the graph of \\(y = g(x)\\) passes through the point \\((24, 0)\\). What is the value of \\(g(0)\\)?`,
    options: [],
    correctAnswer: '336',
    explanation: 'Since (24, 0) is a point on the graph, g(24) = (24 + 14)(t - 24) = 0 => 38(t - 24) = 0 => t = 24. Then g(0) = (0 + 14)(24 - 0) = 14 × 24 = 336.'
  },
  {
    id: 2028,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 22,
    domain: 'Geometry and Trigonometry',
    skill: 'Circles',
    passageHtml: `<p class="mb-2 font-mono text-center">\\((x + 4)^2 + (y - 19)^2 = 121\\)</p>`,
    questionText: `The graph of the given equation is a circle in the xy-plane. The point (a, b) lies on the circle. Which of the following is a possible value for a?`,
    options: [
      { id: 'A', text: '−16' },
      { id: 'B', text: '−14' },
      { id: 'C', text: '11' },
      { id: 'D', text: '19' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The circle has center (-4, 19) and radius √121 = 11. Any point on the circle has an x-coordinate in the range [-4 - 11, -4 + 11] = [-15, 7]. The value -14 lies in this interval.'
  },
  {
    id: 2029,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 23,
    domain: 'Advanced Math',
    skill: 'Volume Expressions',
    questionText: `A right rectangular prism has a height of 9 inches. The length of the prism’s base is x inches, which is 7 inches more than the width of the prism’s base. Which function V gives the volume of the prism, in cubic inches, in terms of the length of the prism’s base?`,
    options: [
      { id: 'A', text: 'V(x) = x(x + 9)(x + 7)' },
      { id: 'B', text: 'V(x) = x(x + 9)(x − 7)' },
      { id: 'C', text: 'V(x) = 9x(x + 7)' },
      { id: 'D', text: 'V(x) = 9x(x − 7)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Length = x, width = x - 7, height = 9. Volume = length × width × height = x(x - 7)(9) = 9x(x - 7).'
  },
  {
    id: 2030,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 24,
    domain: 'Advanced Math',
    skill: 'Exponential Functions',
    passageHtml: `<div class="my-3 text-left max-w-xs mx-auto font-serif text-base space-y-1">
  <p>I. \\(f(x) = -6(3)^x - 3\\)</p>
  <p>II. \\(g(x) = -3(6)^x\\)</p>
</div>`,
    questionText: `Which of the following functions has(have) a minimum value at −3?`,
    options: [
      { id: 'A', text: 'I only' },
      { id: 'B', text: 'II only' },
      { id: 'C', text: 'I and II' },
      { id: 'D', text: 'Neither I nor II' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Neither function has a minimum value; as x increases, both functions decrease toward negative infinity.'
  },
  {
    id: 2031,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 25,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages',
    questionText: `The result of increasing the quantity x by 400% is 60. What is the value of x?`,
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '15' },
      { id: 'C', text: '240' },
      { id: 'D', text: '340' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Increasing x by 400% gives x + 4.00x = 5x. Setting 5x = 60 yields x = 12.'
  },
  {
    id: 2032,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 26,
    domain: 'Advanced Math',
    skill: 'Quadratic Functions',
    questionText: `The function \\(f\\) is defined by \\(f(x) = ax^2 + bx + c\\), where \\(a\\), \\(b\\), and \\(c\\) are constants. The graph of \\(y = f(x)\\) in the xy-plane passes through the points \\((7, 0)\\) and \\((-3, 0)\\). If \\(a\\) is an integer greater than 1, which of the following could be the value of \\(a + b\\)?`,
    options: [
      { id: 'A', text: '−6' },
      { id: 'B', text: '−3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Since 7 and -3 are roots, f(x) = a(x - 7)(x + 3) = a(x² - 4x - 21) = ax² - 4ax - 21a. Thus b = -4a. Then a + b = a - 4a = -3a. For a = 2, a + b = -3(2) = -6.'
  },
  {
    id: 2033,
    testId: 'test5',
    moduleKey: 'MATH_1',
    section: 'Math',
    type: 'Math',
    moduleNumber: 1,
    questionNumber: 27,
    domain: 'Advanced Math',
    skill: 'Polynomial Factors and Zeros',
    questionText: `The function \\(g\\) is defined by \\(g(x) = x(x - 2)(x + 6)^2\\). The value of \\(g(7 - w)\\) is 0, where \\(w\\) is a constant. What is the sum of all possible values of \\(w\\)?`,
    options: [],
    correctAnswer: '25',
    explanation: 'The roots of g(x) are x = 0, x = 2, and x = -6. Setting 7 - w equal to each root gives: 7 - w = 0 => w = 7; 7 - w = 2 => w = 5; 7 - w = -6 => w = 13. The sum of all possible values of w is 7 + 5 + 13 = 25.'
  }
];
