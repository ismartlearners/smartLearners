import { Question } from '../types';
import { makeM2Q2Svg, makeM2Q9Svg, makeM2Q11Svg } from './test5_graph_helpers';

export const TEST5_MATH_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 2034,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 1,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages',
    questionText: `What is 20% of 440?`,
    options: [
      { id: 'A', text: '44' },
      { id: 'B', text: '88' },
      { id: 'C', text: '880' },
      { id: 'D', text: '1,760' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. 0.20 × 440 = 88.'
  },
  {
    id: 2035,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 2,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Linear Graphs in Context',
    passageHtml: makeM2Q2Svg(),
    questionText: `Argon is placed inside a container with a constant volume. The graph shows the estimated pressure y, in pounds per square inch (psi), of the argon when its temperature is x kelvins. What is the estimated pressure of the argon, in psi, when the temperature is 600 kelvins?`,
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '12' },
      { id: 'C', text: '300' },
      { id: 'D', text: '600' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Looking at x = 600 on the horizontal axis, the corresponding line value on the vertical axis is y = 12.'
  },
  {
    id: 2036,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Evaluating Linear Functions',
    questionText: `The function \\(f\\) is defined by \\(f(x) = 4x − 3\\). What is the value of \\(f(10)\\)?`,
    options: [
      { id: 'A', text: '−30' },
      { id: 'B', text: '37' },
      { id: 'C', text: '40' },
      { id: 'D', text: '43' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. f(10) = 4(10) - 3 = 40 - 3 = 37.'
  },
  {
    id: 2037,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 4,
    domain: 'Advanced Math',
    skill: 'Equivalent Expressions',
    questionText: `Which expression is equivalent to \\(16x^3y^2 + 14xy\\)?`,
    options: [
      { id: 'A', text: '\\(2xy(8xy + 7)\\)' },
      { id: 'B', text: '\\(2xy(8x^2y + 7)\\)' },
      { id: 'C', text: '\\(14xy(2x^2y + 1)\\)' },
      { id: 'D', text: '\\(14xy(8x^2y + 1)\\)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Factoring out the greatest common factor 2xy yields 2xy(8x²y + 7).'
  },
  {
    id: 2038,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 5,
    domain: 'Algebra',
    skill: 'Linear Equations in Context',
    questionText: `A veterinarian recommends that each day a certain rabbit should eat 25 calories per pound of the rabbit’s weight, plus an additional 11 calories. Which equation represents this situation, where c is the total number of calories the veterinarian recommends the rabbit should eat each day if the rabbit’s weight is x pounds?`,
    options: [
      { id: 'A', text: 'c = 25x' },
      { id: 'B', text: 'c = 36x' },
      { id: 'C', text: 'c = 11x + 25' },
      { id: 'D', text: 'c = 25x + 11' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. 25 calories per pound (25x) plus an additional 11 calories yields c = 25x + 11.'
  },
  {
    id: 2039,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 6,
    domain: 'Algebra',
    skill: 'Linear Equations in One Variable',
    questionText: `If \\(6n = 12\\), what is the value of \\(n + 4\\)?`,
    options: [],
    correctAnswer: '6',
    explanation: '6n = 12 => n = 2. Then n + 4 = 2 + 4 = 6.'
  },
  {
    id: 2040,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 7,
    domain: 'Advanced Math',
    skill: 'Quadratic Equations',
    passageHtml: `<p class="mb-2 font-mono text-center">\\((d - 30)(d + 30) - 7 = -7\\)</p>`,
    questionText: `What is a solution to the given equation?`,
    options: [],
    correctAnswer: '30',
    explanation: 'Adding 7 to both sides yields (d - 30)(d + 30) = 0. Thus d = 30 or d = -30. Either 30 or -30 is correct.'
  },
  {
    id: 2041,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 8,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    questionText: `Line r in the xy-plane has a slope of 4 and passes through the point (0, 6). Which equation defines line r?`,
    options: [
      { id: 'A', text: 'y = −6x + 4' },
      { id: 'B', text: 'y = 6x + 4' },
      { id: 'C', text: 'y = 4x − 6' },
      { id: 'D', text: 'y = 4x + 6' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Using slope-intercept form y = mx + b with slope m = 4 and y-intercept b = 6 yields y = 4x + 6.'
  },
  {
    id: 2042,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 9,
    domain: 'Algebra',
    skill: 'Interpreting Graphs in Context',
    passageHtml: makeM2Q9Svg(),
    questionText: `A competitive diver dives from a platform into the water. The graph shown gives the height above the water y, in meters, of the diver x seconds after diving from the platform. What is the best interpretation of the x-intercept of the graph?`,
    options: [
      { id: 'A', text: 'The diver reaches a maximum height above the water at 1.6 seconds.' },
      { id: 'B', text: 'The diver hits the water at 1.6 seconds.' },
      { id: 'C', text: 'The diver reaches a maximum height above the water at 0.2 seconds.' },
      { id: 'D', text: 'The diver hits the water at 0.2 seconds.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The x-intercept occurs where y = 0 (height above water is 0 meters), which represents the time (1.6 seconds) when the diver hits the water.'
  },
  {
    id: 2043,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 10,
    domain: 'Advanced Math',
    skill: 'Evaluating Functions in Context',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(K(v) = \\frac{9}{2} v^2\\)</p>`,
    questionText: `The kinetic energy, in joules, of an object with mass 9 kilograms traveling at a speed of v meters per second is given by the function K. Which of the following is the best interpretation of \\(K(34) = 5,202\\) in this context?`,
    options: [
      { id: 'A', text: 'The object traveling at 34 meters per second has a kinetic energy of 5,202 joules.' },
      { id: 'B', text: 'The object traveling at 340 meters per second has a kinetic energy of 5,202 joules.' },
      { id: 'C', text: 'The object traveling at 5,202 meters per second has a kinetic energy of 34 joules.' },
      { id: 'D', text: 'The object traveling at 23,409 meters per second has a kinetic energy of 34 joules.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. In K(v) = 5,202, the input v = 34 represents the speed in meters per second and the output 5,202 represents kinetic energy in joules.'
  },
  {
    id: 2044,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 11,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Scatterplots and Lines of Best Fit',
    passageHtml: makeM2Q11Svg(),
    questionText: `The scatterplot shows the relationship between two variables x and y. A line of best fit for the data is also shown. For how many of the 10 data points is the actual y-value greater than the y-value predicted by the line of best fit?`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '6' },
      { id: 'D', text: '7' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The question asks for how many of the 10 data points the actual y-value is greater than the y-value predicted by the line of best fit. This corresponds to the number of points located above the line of best fit. By counting the points lying above the line, there are 6 such data points.'
  },
  {
    id: 2045,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 12,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Probability',
    questionText: `At a movie theater, there are a total of 350 customers. Each customer is located in either theater A, theater B, or theater C. If one of these customers is selected at random, the probability of selecting a customer who is located in theater A is 0.48, and the probability of selecting a customer who is located in theater B is 0.24. How many customers are located in theater C?`,
    options: [
      { id: 'A', text: '28' },
      { id: 'B', text: '40' },
      { id: 'C', text: '84' },
      { id: 'D', text: '98' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. P(Theater C) = 1 - 0.48 - 0.24 = 0.28. The number of customers in theater C is 0.28 × 350 = 98.'
  },
  {
    id: 2046,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 13,
    domain: 'Algebra',
    skill: 'Linear Equations in Two Variables',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(y = \\frac{1}{3}(29x + 10) + 5x\\)</p>`,
    questionText: `What is the slope of the graph of the given equation in the xy-plane?`,
    options: [],
    correctAnswer: '44/3',
    explanation: 'Expanding gives y = (29/3)x + 10/3 + 5x = (29/3 + 15/3)x + 10/3 = (44/3)x + 10/3. The slope is 44/3.'
  },
  {
    id: 2047,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 14,
    domain: 'Geometry and Trigonometry',
    skill: 'Volume and Surface Area',
    questionText: `The length of each edge of a box is 29 inches. Each side of the box is in the shape of a square. The box does not have a lid. What is the exterior surface area, in square inches, of this box without a lid?`,
    options: [],
    correctAnswer: '4205',
    explanation: 'A cube box without a lid has 5 square faces. Area = 5 × (29²) = 5 × 841 = 4,205.'
  },
  {
    id: 2048,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 15,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Center and Spread',
    passageHtml: `<p class="mb-2">The table shows the number of eggs in 5 sea turtle nests.</p>
<div class="my-4 flex justify-center">
  <table class="border-collapse border border-black font-serif text-center text-sm md:text-base">
    <thead>
      <tr class="border-b border-black">
        <th class="border-r border-black px-4 py-1.5 font-normal">Nest</th>
        <th class="px-4 py-1.5 font-normal">Number of eggs</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1 font-sans">A</td>
        <td class="px-4 py-1">149</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1 font-sans">B</td>
        <td class="px-4 py-1">144</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1 font-sans">C</td>
        <td class="px-4 py-1">148</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black px-4 py-1 font-sans">D</td>
        <td class="px-4 py-1">136</td>
      </tr>
      <tr>
        <td class="border-r border-black px-4 py-1 font-sans">E</td>
        <td class="px-4 py-1">139</td>
      </tr>
    </tbody>
  </table>
</div>`,
    questionText: `A sixth nest with 121 eggs is added to create a new data set. Which of the following correctly compares the means of the two data sets?`,
    options: [
      { id: 'A', text: 'The mean of the original data set is greater than the mean of the new data set.' },
      { id: 'B', text: 'The mean of the original data set is less than the mean of the new data set.' },
      { id: 'C', text: 'The means of both data sets are equal.' },
      { id: 'D', text: 'There is not enough information to compare the means.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The mean of the original 5 nests is (149 + 144 + 148 + 136 + 139) / 5 = 143.2. Adding a value (121) that is strictly less than the mean lowers the overall mean.'
  },
  {
    id: 2049,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 16,
    domain: 'Geometry and Trigonometry',
    skill: 'Lines and Angles',
    questionText: `In \\(\\triangle RST\\), the measure of \\(\\angle R\\) is \\(63^\\circ\\). Which of the following could be the measure, in degrees, of \\(\\angle S\\)?`,
    options: [
      { id: 'A', text: '116' },
      { id: 'B', text: '118' },
      { id: 'C', text: '126' },
      { id: 'D', text: '180' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The sum of all three interior angles in △RST is 180°. Thus ∠S + ∠T = 180° - 63° = 117°. Since ∠T > 0°, ∠S must be strictly less than 117°. Only 116° satisfies this condition.'
  },
  {
    id: 2050,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 17,
    domain: 'Advanced Math',
    skill: 'Polynomial Operations',
    passageHtml: `<p class="mb-2 font-mono text-center">\\((8x^3 + 8) - (x^3 - 2)\\)</p>`,
    questionText: `Which expression is equivalent to the given expression?`,
    options: [
      { id: 'A', text: '\\(8x^3 + 6\\)' },
      { id: 'B', text: '\\(7x^3 + 10\\)' },
      { id: 'C', text: '\\(8x^3 + 10\\)' },
      { id: 'D', text: '\\(7x^3 + 6\\)' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. (8x³ + 8) - (x³ - 2) = 8x³ + 8 - x³ + 2 = 7x³ + 10.'
  },
  {
    id: 2051,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 18,
    domain: 'Advanced Math',
    skill: 'Radical Equations',
    questionText: `If \\(4\\sqrt{2x} = 16\\), what is the value of \\(6x\\)?`,
    options: [
      { id: 'A', text: '24' },
      { id: 'B', text: '48' },
      { id: 'C', text: '72' },
      { id: 'D', text: '96' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Dividing by 4 gives \\(\\sqrt{2x} = 4 \\implies 2x = 16 \\implies x = 8\\). Then \\(6x = 6(8) = 48\\).'
  },
  {
    id: 2052,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 19,
    domain: 'Algebra',
    skill: 'Linear Inequalities in Two Variables',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(2x - y > 883\\)</p>`,
    questionText: `For which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality?`,
    options: [
      { id: 'A', text: `<table class="inline-table border-collapse border border-black font-serif text-center text-xs">
  <thead>
    <tr class="border-b border-black">
      <th class="border-r border-black px-3 py-1 font-normal italic">x</th>
      <th class="px-3 py-1 font-normal italic">y</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-black"><td class="border-r border-black px-3 py-1">440</td><td class="px-3 py-1">0</td></tr><tr class="border-b border-black"><td class="border-r border-black px-3 py-1">441</td><td class="px-3 py-1">−2</td></tr><tr class=""><td class="border-r border-black px-3 py-1">442</td><td class="px-3 py-1">−4</td></tr>
  </tbody>
</table>` },
      { id: 'B', text: `<table class="inline-table border-collapse border border-black font-serif text-center text-xs">
  <thead>
    <tr class="border-b border-black">
      <th class="border-r border-black px-3 py-1 font-normal italic">x</th>
      <th class="px-3 py-1 font-normal italic">y</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-black"><td class="border-r border-black px-3 py-1">440</td><td class="px-3 py-1">0</td></tr><tr class="border-b border-black"><td class="border-r border-black px-3 py-1">442</td><td class="px-3 py-1">−2</td></tr><tr class=""><td class="border-r border-black px-3 py-1">441</td><td class="px-3 py-1">−4</td></tr>
  </tbody>
</table>` },
      { id: 'C', text: `<table class="inline-table border-collapse border border-black font-serif text-center text-xs">
  <thead>
    <tr class="border-b border-black">
      <th class="border-r border-black px-3 py-1 font-normal italic">x</th>
      <th class="px-3 py-1 font-normal italic">y</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-black"><td class="border-r border-black px-3 py-1">442</td><td class="px-3 py-1">0</td></tr><tr class="border-b border-black"><td class="border-r border-black px-3 py-1">440</td><td class="px-3 py-1">−2</td></tr><tr class=""><td class="border-r border-black px-3 py-1">441</td><td class="px-3 py-1">−4</td></tr>
  </tbody>
</table>` },
      { id: 'D', text: `<table class="inline-table border-collapse border border-black font-serif text-center text-xs">
  <thead>
    <tr class="border-b border-black">
      <th class="border-r border-black px-3 py-1 font-normal italic">x</th>
      <th class="px-3 py-1 font-normal italic">y</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-black"><td class="border-r border-black px-3 py-1">442</td><td class="px-3 py-1">0</td></tr><tr class="border-b border-black"><td class="border-r border-black px-3 py-1">441</td><td class="px-3 py-1">−2</td></tr><tr class=""><td class="border-r border-black px-3 py-1">440</td><td class="px-3 py-1">−4</td></tr>
  </tbody>
</table>` }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Testing pairs in Table D: 2(442) - 0 = 884 > 883; 2(441) - (-2) = 884 > 883; 2(440) - (-4) = 884 > 883. All points satisfy 2x - y > 883.'
  },
  {
    id: 2053,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 20,
    domain: 'Algebra',
    skill: 'Systems of Linear Equations',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(5y = 10x + 11\\)<br/>\\(-5y = 5x - 21\\)</p>`,
    questionText: `The solution to the given system of equations is \\((x, y)\\). What is the value of \\(30x\\)?`,
    options: [],
    correctAnswer: '20',
    explanation: 'Adding the two equations yields 0 = 15x - 10 => 15x = 10 => x = 10 / 15 = 2/3. Therefore, 30x = 30 × (2/3) = 20.'
  },
  {
    id: 2054,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 21,
    domain: 'Geometry and Trigonometry',
    skill: 'Right Triangles and Circles',
    questionText: `A rectangle is inscribed in a circle, such that each vertex of the rectangle lies on the circumference of the circle. The diagonal of the rectangle is twice the length of the shortest side of the rectangle. The area of the rectangle is \\(1,089\\sqrt{3}\\) square units. What is the length, in units, of the diameter of the circle?`,
    options: [],
    correctAnswer: '66',
    explanation: 'Let s be the shortest side. The diagonal is d = 2s (which equals the diameter of the circle). The other side is L = √(4s² - s²) = s√3. Area = L × s = s²√3 = 1,089√3 => s² = 1,089 => s = 33. The diameter d = 2s = 66.'
  },
  {
    id: 2055,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 22,
    domain: 'Geometry and Trigonometry',
    skill: 'Similar Figures and Area',
    questionText: `Rectangles ABCD and EFGH are similar. The length of each side of EFGH is 6 times the length of the corresponding side of ABCD. The area of ABCD is 54 square units. What is the area, in square units, of EFGH?`,
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '36' },
      { id: 'C', text: '324' },
      { id: 'D', text: '1,944' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. When linear dimensions scale by 6, the area scales by 6² = 36. Area of EFGH = 54 × 36 = 1,944.'
  },
  {
    id: 2056,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 23,
    domain: 'Advanced Math',
    skill: 'Equivalent Expressions',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(\\frac{42a}{k} + 42ak\\), where \\(a > 0\\) and \\(k > 0\\)</p>`,
    questionText: `Which expression is equivalent to the given expression?`,
    options: [
      { id: 'A', text: '\\(\\frac{84a}{k}\\)' },
      { id: 'B', text: '\\(\\frac{84ak^2}{k}\\)' },
      { id: 'C', text: '\\(\\frac{42a(k + 1)}{k}\\)' },
      { id: 'D', text: '\\(\\frac{42a(k^2 + 1)}{k}\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Finding a common denominator k yields \\(\\frac{42a + 42ak^2}{k} = \\frac{42a(k^2 + 1)}{k}\\).'
  },
  {
    id: 2057,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 24,
    domain: 'Advanced Math',
    skill: 'Quadratic Equations and Discriminant',
    questionText: `Which quadratic equation has no real solutions?`,
    options: [
      { id: 'A', text: '\\(x^2 + 14x - 49 = 0\\)' },
      { id: 'B', text: '\\(x^2 - 14x + 49 = 0\\)' },
      { id: 'C', text: '\\(5x^2 - 14x - 49 = 0\\)' },
      { id: 'D', text: '\\(5x^2 - 14x + 49 = 0\\)' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The discriminant b² - 4ac = (-14)² - 4(5)(49) = 196 - 980 = -784 < 0, so 5x² - 14x + 49 = 0 has no real solutions.'
  },
  {
    id: 2058,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 25,
    domain: 'Advanced Math',
    skill: 'Exponential Growth Models',
    passageHtml: `<p class="mb-2 font-mono text-center">\\(P(t) = 260(1.04)^{\\left(\\frac{6}{4}\\right)t}\\)</p>`,
    questionText: `The function \\(P\\) models the population, in thousands, of a certain city \\(t\\) years after 2003. According to the model, the population is predicted to increase by 4% every \\(n\\) months. What is the value of \\(n\\)?`,
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '12' },
      { id: 'C', text: '18' },
      { id: 'D', text: '72' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The exponent (6/4)t = t / (4/6) = t / (2/3) years. 2/3 of a year corresponds to (2/3) × 12 = 8 months.'
  },
  {
    id: 2059,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 26,
    domain: 'Geometry and Trigonometry',
    skill: 'Circles and Tangent Lines',
    questionText: `A circle in the xy-plane has its center at \\((-1, 1)\\). Line \\(t\\) is tangent to this circle at the point \\((5, -4)\\). Which of the following points also lies on line \\(t\\)?`,
    options: [
      { id: 'A', text: '\\(\\left(0, \\frac{6}{5}\\right)\\)' },
      { id: 'B', text: '\\((4, 7)\\)' },
      { id: 'C', text: '\\((10, 2)\\)' },
      { id: 'D', text: '\\((11, 1)\\)' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The radius vector from center (-1, 1) to point of tangency (5, -4) has slope (-4 - 1)/(5 - (-1)) = -5/6. The tangent line is perpendicular, so its slope is 6/5. Equation: y - (-4) = (6/5)(x - 5) => y = (6/5)x - 10. Testing point (10, 2): 2 = (6/5)(10) - 10 = 12 - 10 = 2, which is true.'
  },
  {
    id: 2060,
    testId: 'test5',
    moduleKey: 'MATH_2',
    section: 'Math',
    type: 'Math',
    moduleNumber: 2,
    questionNumber: 27,
    domain: 'Geometry and Trigonometry',
    skill: 'Area and Applied Word Problems',
    questionText: `For an electric field passing through a flat surface perpendicular to it, the electric flux of the electric field through the surface is the product of the electric field’s strength and the area of the surface. A certain flat surface consists of two adjacent squares, where the side length, in meters, of the larger square is 3 times the side length, in meters, of the smaller square. An electric field with strength 29.00 volts per meter passes uniformly through this surface, which is perpendicular to the electric field. If the total electric flux of the electric field through this surface is 4,640 volts · meters, what is the electric flux, in volts · meters, of the electric field through the larger square?`,
    options: [],
    correctAnswer: '4176',
    explanation: 'Let s be the side length of the smaller square. Area of smaller square = s², area of larger square = (3s)² = 9s². Total area = 10s². Total flux = 29.00 × 10s² = 290s² = 4,640 => s² = 16. The flux through the larger square is 29.00 × 9s² = 29 × 9 × 16 = 4,176.'
  }
];
