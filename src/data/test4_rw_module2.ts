import { Question } from '../types';

function makeTest4RW2Q13Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 360 380" class="w-full max-w-[340px] bg-white select-none">
      <!-- Title -->
      <text x="200" y="16" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Economic Policy Uncertainty in</text>
      <text x="200" y="30" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">the United Kingdom, 2005–2010</text>

      <!-- Y-axis Label -->
      <g transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="9.5" fill="#000000" text-anchor="middle">
        <text x="-140" y="15">Uncertainty</text>
        <text x="-140" y="27">(larger values = more uncertainty)</text>
      </g>

      <!-- Gridlines & Y-axis labels -->
      <!-- 200 -->
      <text x="70" y="53.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">200</text>
      <line x1="75" y1="50" x2="325" y2="50" stroke="#777777" stroke-width="0.75" />

      <!-- 150 -->
      <text x="70" y="98.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">150</text>
      <line x1="75" y1="95" x2="325" y2="95" stroke="#777777" stroke-width="0.75" />

      <!-- 100 -->
      <text x="70" y="143.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">100</text>
      <line x1="75" y1="140" x2="325" y2="140" stroke="#777777" stroke-width="0.75" />

      <!-- 50 -->
      <text x="70" y="188.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">50</text>
      <line x1="75" y1="185" x2="325" y2="185" stroke="#777777" stroke-width="0.75" />

      <!-- 0 -->
      <text x="70" y="233.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0</text>
      <line x1="75" y1="230" x2="325" y2="230" stroke="#000000" stroke-width="1.2" />

      <!-- Y-Axis Vertical Line -->
      <line x1="75" y1="50" x2="75" y2="230" stroke="#000000" stroke-width="1.2" />

      <!-- Bars (3 per year: Medium gray #7f8389, Light gray #d8dadd, Black #222224) -->
      <!-- 2005 (tax: 98, trade: 160, general: 90) -->
      <rect x="83" y="141.8" width="10" height="88.2" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="93" y="86.0" width="10" height="144.0" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="103" y="149.0" width="10" height="81.0" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- 2006 (tax: 65, trade: 105, general: 72) -->
      <rect x="123" y="171.5" width="10" height="58.5" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="133" y="135.5" width="10" height="94.5" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="143" y="165.2" width="10" height="64.8" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- 2007 (tax: 61, trade: 75, general: 77) -->
      <rect x="163" y="175.1" width="10" height="54.9" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="173" y="162.5" width="10" height="67.5" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="183" y="160.7" width="10" height="69.3" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- 2008 (tax: 90, trade: 72, general: 73) -->
      <rect x="203" y="149.0" width="10" height="81.0" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="213" y="165.2" width="10" height="64.8" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="223" y="164.3" width="10" height="65.7" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- 2009 (tax: 76, trade: 70, general: 81) -->
      <rect x="243" y="161.6" width="10" height="68.4" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="253" y="167.0" width="10" height="63.0" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="263" y="157.1" width="10" height="72.9" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- 2010 (tax: 165, trade: 71, general: 118) -->
      <rect x="283" y="81.5" width="10" height="148.5" fill="#7f8389" stroke="#000000" stroke-width="0.8" />
      <rect x="293" y="166.1" width="10" height="63.9" fill="#d8dadd" stroke="#000000" stroke-width="0.8" />
      <rect x="303" y="123.8" width="10" height="106.2" fill="#222224" stroke="#000000" stroke-width="0.8" />

      <!-- Year Labels (Angled downward ~42 degrees) -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000" text-anchor="start">
        <text x="88" y="238" transform="rotate(42, 88, 238)">2005</text>
        <text x="128" y="238" transform="rotate(42, 128, 238)">2006</text>
        <text x="168" y="238" transform="rotate(42, 168, 238)">2007</text>
        <text x="208" y="238" transform="rotate(42, 208, 238)">2008</text>
        <text x="248" y="238" transform="rotate(42, 248, 238)">2009</text>
        <text x="288" y="238" transform="rotate(42, 288, 238)">2010</text>
      </g>

      <!-- Centered "Year" label -->
      <text x="200" y="285" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" text-anchor="middle" fill="#000000">Year</text>

      <!-- Legend Box -->
      <rect x="75" y="298" width="250" height="74" fill="#ffffff" stroke="#777777" stroke-width="0.8" />
      
      <!-- Row 1: Tax & spending -->
      <rect x="83" y="306" width="12" height="10" fill="#7f8389" stroke="#000000" stroke-width="0.75" />
      <text x="101" y="314.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000">tax and public spending policy</text>

      <!-- Row 2: Trade policy -->
      <rect x="83" y="326" width="12" height="10" fill="#d8dadd" stroke="#000000" stroke-width="0.75" />
      <text x="101" y="334.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000">trade policy</text>

      <!-- Row 3: General economic policy -->
      <rect x="83" y="346" width="12" height="10" fill="#222224" stroke="#000000" stroke-width="0.75" />
      <text x="101" y="354.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000">general economic policy</text>
    </svg>
  </div>`;
}

export const TEST4_RW_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 1201,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">The fashion resale market, in which consumers purchase secondhand clothing from stores and online sellers, generated nearly $30 billion globally in 2019. Expecting to see continued growth, some analysts _______ that revenues will more than double by 2028.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'produced' },
      { id: 'B', text: 'denied' },
      { id: 'C', text: 'worried' },
      { id: 'D', text: 'predicted' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. "Predicted" means forecasted or expected future results, which fits "Expecting to see continued growth, some analysts predicted that revenues will more than double".'
  },
  {
    id: 1202,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Artificially delivering biomolecules to plant cells is an important component of protecting plants from pathogens, but it is difficult to transmit biomolecules through the layers of the plant cell wall. Markita del Carpio Landry and her colleagues have shown that it may be possible to _______ this problem by transmitting molecules through carbon nanotubes, which can cross cell walls.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'conceptualize' },
      { id: 'B', text: 'neglect' },
      { id: 'C', text: 'illustrate' },
      { id: 'D', text: 'overcome' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. "Overcome" means to resolve or surmount a difficulty, fitting the context of bypassing the obstacle of cell wall transmission.'
  },
  {
    id: 1203,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Particle physicists like Ayana Holloway Arce and Aida El-Khadra spend much of their time _______ what is invisible to the naked eye: using sophisticated technology, they closely examine the behavior of subatomic particles, the smallest detectable parts of matter.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'selecting' },
      { id: 'B', text: 'inspecting' },
      { id: 'C', text: 'creating' },
      { id: 'D', text: 'deciding' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Inspecting" means examining closely, matching "they closely examine the behavior of subatomic particles".'
  },
  {
    id: 1204,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Anthropologist Kristian J. Carlson and colleagues examined the fossilized clavicle and shoulder bones of a 3.6-million-year-old early hominin known as “Little Foot.” They found that these bones were _______ the clavicle and shoulder bones of modern apes that are frequent climbers, such as gorillas and chimpanzees, suggesting that Little Foot had adapted to life in the trees.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'surpassed by' },
      { id: 'B', text: 'comparable to' },
      { id: 'C', text: 'independent of' },
      { id: 'D', text: 'obtained from' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Comparable to" means similar to, supporting the inference that Little Foot had adapted to tree climbing like modern apes.'
  },
  {
    id: 1205,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Rydra Wong, the protagonist of Samuel R. Delany’s 1966 novel <i>Babel-17</i>, is a poet, an occupation which, in Delany’s work, is not _______: nearly a dozen of the characters that populate his novels are poets or writers.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'infallible' },
      { id: 'B', text: 'atypical' },
      { id: 'C', text: 'lucrative' },
      { id: 'D', text: 'tedious' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Not atypical" means common or unusual, supported by the explanation that "nearly a dozen of the characters... are poets or writers".'
  },
  {
    id: 1206,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">For a 2020 exhibition, photographer and neurobiologist Okunola Jeyifous _______ a series of new images based on a series of alphabet posters from the 1970s known as the “Black ABCs,” which featured Black children from Chicago. Jeyifous photographed the now-adult models and layered the photos over magnified images of the models’ cells, resulting in what he called “micro and macro portraiture.”</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'validated' },
      { id: 'B', text: 'created' },
      { id: 'C', text: 'challenged' },
      { id: 'D', text: 'restored' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Created" means produced or made, fitting Jeyifous making a new series of images.'
  },
  {
    id: 1207,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 7,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">In addition to being an accomplished psychologist himself, Francis Cecil Sumner was a _______ increasing the opportunity for Black students to study psychology, helping to found the psychology department at Howard University, a historically Black university, in 1930.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'proponent of' },
      { id: 'B', text: 'supplement to' },
      { id: 'C', text: 'beneficiary of' },
      { id: 'D', text: 'distraction for' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. A "proponent of" means an advocate for, supported by Sumner’s work helping to establish a psychology department for Black students.'
  },
  {
    id: 1208,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 8,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Whether the reign of a French monarch such as Hugh Capet or Henry I was historically consequential or relatively uneventful, its trajectory was shaped by questions of legitimacy and therefore cannot be understood without a corollary understanding of the factors that allowed the monarch to _______ his right to hold the throne.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'reciprocate' },
      { id: 'B', text: 'annotate' },
      { id: 'C', text: 'buttress' },
      { id: 'D', text: 'disengage' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. "Buttress" means to strengthen or support, fitting how monarchs established and supported their legitimate right to the throne.'
  },
  {
    id: 1209,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 9,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    passageHtml: `<p class="mb-3">Some bird species don’t raise their own chicks. Instead, adult females lay their eggs in other nests, next to another bird species’ own eggs. <u>Female cuckoos have been seen quickly laying eggs in the nests of other bird species when those birds are out looking for food.</u> After the eggs hatch, the noncuckoo parents will typically raise the cuckoo chicks as if they were their own offspring, even if the cuckoos look very different from the other chicks.</p>`,
    questionText: `Which choice best describes the function of the underlined sentence in the text as a whole?`,
    options: [
      { id: 'A', text: 'It introduces a physical feature of female cuckoos that is described later in the text.' },
      { id: 'B', text: 'It describes the appearance of the cuckoo nests mentioned earlier in the text.' },
      { id: 'C', text: 'It offers a detail about how female cuckoos carry out the behavior discussed in the text.' },
      { id: 'D', text: 'It explains how other birds react to the female cuckoo behavior discussed in the text.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The text discusses brood parasitism, and the underlined sentence explains the specific detail of how female cuckoos lay eggs when host birds are away.'
  },
  {
    id: 1210,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    passageHtml: `<p class="mb-3">Cats can judge unseen people’s positions in space by the sound of their voices and thus react with surprise when the same person calls to them from two different locations in a short span of time. Saho Takagi and colleagues reached this conclusion by measuring cats’ levels of surprise based on their ear and head movements while the cats heard recordings of their owners’ voices from two speakers spaced far apart. Cats exhibited a low level of surprise when owners’ voices were played twice from the same speaker, but they showed a high level of surprise when the voice was played once each from the two different speakers.</p>`,
    questionText: `According to the text, how did the researchers determine the level of surprise displayed by the cats in the study?`,
    options: [
      { id: 'A', text: 'They watched how each cat moved its ears and head.' },
      { id: 'B', text: 'They examined how each cat reacted to the voice of a stranger.' },
      { id: 'C', text: 'They studied how each cat physically interacted with its owner.' },
      { id: 'D', text: 'They tracked how each cat moved around the room.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The text states researchers measured surprise "based on their ear and head movements".'
  },
  {
    id: 1211,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 11,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3">A student performs an experiment testing her hypothesis that a slightly acidic soil environment is more beneficial for the growth of the plant <i>Brassica rapa parachinensis</i> (a vegetable commonly known as choy sum) than a neutral soil environment. She plants sixteen seeds of choy sum in a mixture of equal amounts of coffee grounds (which are highly acidic) and potting soil and another sixteen seeds in potting soil without coffee grounds as the control for the experiment. The two groups of seeds were exposed to the same growing conditions and monitored for three weeks.</p>`,
    questionText: `Which finding, if true, would most directly weaken the student’s hypothesis?`,
    options: [
      { id: 'A', text: 'The choy sum planted in the soil without coffee grounds were significantly taller at the end of the experiment than the choy sum planted in the mixture of soil and coffee grounds.' },
      { id: 'B', text: 'The choy sum grown in the soil without coffee grounds weighed significantly less at the end of the experiment than the choy sum grown in the mixture of soil and coffee grounds.' },
      { id: 'C', text: 'The choy sum seeds planted in the soil without coffee grounds sprouted significantly later in the experiment than did the seeds planted in the mixture of soil and coffee grounds.' },
      { id: 'D', text: 'Significantly fewer of the choy sum seeds planted in the soil without coffee grounds sprouted plants than did the seeds planted in the mixture of soil and coffee grounds.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. If plants in neutral soil (without coffee grounds) grew significantly taller than those in acidic soil, it directly weakens the hypothesis that acidic soil is more beneficial.'
  },
  {
    id: 1212,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 12,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3">“The Young Girl” is a 1920 short story by Katherine Mansfield. In the story, the narrator takes an unnamed seventeen-year-old girl and her younger brother out for a meal. In describing the teenager, Mansfield frequently contrasts the character’s pleasant appearance with her unpleasant attitude, as when Mansfield writes of the teenager, _______</p>`,
    questionText: `Which quotation from “The Young Girl” most effectively illustrates the claim?`,
    options: [
      { id: 'A', text: '“I heard her murmur, ‘I can’t bear flowers on a table.’ They had evidently been giving her intense pain, for she positively closed her eyes as I moved them away.”' },
      { id: 'B', text: '“While we waited she took out a little, gold powder-box with a mirror in the lid, shook the poor little puff as though she loathed it, and dabbed her lovely nose.”' },
      { id: 'C', text: '“I saw, after that, she couldn’t stand this place a moment longer, and, indeed, she jumped up and turned away while I went through the vulgar act of paying for the tea.”' },
      { id: 'D', text: '“She didn’t even take her gloves off. She lowered her eyes and drummed on the table. When a faint violin sounded she winced and bit her lip again. Silence.”' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. In Choice B, "dabbed her lovely nose" describes pleasant appearance while "shook the poor little puff as though she loathed it" depicts her unpleasant attitude.'
  },
  {
    id: 1213,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 13,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `${makeTest4RW2Q13Svg()}<p class="mb-3">High levels of public uncertainty about which economic policies a country will adopt can make planning difficult for businesses, but measures of such uncertainty have not tended to be very detailed. Recently, however, economist Sandile Hlatshwayo analyzed trends in news reports to derive measures not only for general economic policy uncertainty but also for uncertainty related to specific areas of economic policy, like tax or trade policy. One revelation of her work is that a general measure may not fully reflect uncertainty about specific areas of policy, as in the case of the United Kingdom, where general economic policy uncertainty _______</p>`,
    questionText: `Which choice most effectively uses data from the graph to illustrate the claim?`,
    options: [
      { id: 'A', text: 'aligned closely with uncertainty about tax and public spending policy in 2005 but differed from uncertainty about tax and public spending policy by a large amount in 2009.' },
      { id: 'B', text: 'was substantially lower than uncertainty about tax and public spending policy each year from 2005 to 2010.' },
      { id: 'C', text: 'reached its highest level between 2005 and 2010 in the same year that uncertainty about trade policy and tax and public spending policy reached their lowest levels.' },
      { id: 'D', text: 'was substantially lower than uncertainty about trade policy in 2005 and substantially higher than uncertainty about trade policy in 2010.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. It accurately uses the data from the graph to show that general economic policy uncertainty varied significantly relative to specific policy domains (trade policy in 2005 vs. 2010), demonstrating that a general measure does not consistently reflect specific areas.'
  },
  {
    id: 1214,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 14,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3">Linguist Deborah Tannen has cautioned against framing contentious issues in terms of two highly competitive perspectives, such as pro versus con. According to Tannen, this debate-driven approach can strip issues of their complexity and, when used in front of an audience, can be less informative than the presentation of multiple perspectives in a noncompetitive format. To test Tannen’s hypothesis, students conducted a study in which they showed participants one of three different versions of local news commentary about the same issue. Each version featured a debate between two commentators with opposing views, a panel of three commentators with various views, or a single commentator.</p>`,
    questionText: `Which finding from the students’ study, if true, would most strongly support Tannen’s hypothesis?`,
    options: [
      { id: 'A', text: 'On average, participants perceived commentators in the debate as more knowledgeable about the issue than commentators in the panel.' },
      { id: 'B', text: 'On average, participants perceived commentators in the panel as more knowledgeable about the issue than the single commentator.' },
      { id: 'C', text: 'On average, participants who watched the panel correctly answered more questions about the issue than those who watched the debate or the single commentator did.' },
      { id: 'D', text: 'On average, participants who watched the single commentator correctly answered more questions about the issue than those who watched the debate did.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. Tannen hypothesized that a panel with multiple noncompetitive perspectives is more informative than a two-sided debate; answering more comprehension questions correctly after watching the panel directly supports this.'
  },
  {
    id: 1215,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 15,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3"><i>King Lear</i> is a circa 1606 play by William Shakespeare. In the play, the character of King Lear attempts to test his three daughters’ devotion to him. He later expresses regret for his actions, as is evident when he _______</p>`,
    questionText: `Which choice most effectively uses a quotation from <i>King Lear</i> to illustrate the claim?`,
    options: [
      { id: 'A', text: 'says of himself, “I am a man / more sinned against than sinning.”' },
      { id: 'B', text: 'says during a growing storm, “This tempest will not give me leave to ponder / On things would hurt me more.”' },
      { id: 'C', text: 'says to himself while striking his head, “Beat at this gate that let thy folly in / And thy dear judgement out!”' },
      { id: 'D', text: 'says of himself, “I will do such things— / What they are yet, I know not; but they shall be / The terrors of the earth!”' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. Striking his head and saying "Beat at this gate that let thy folly in / And thy dear judgement out!" directly expresses regret over his foolish decision regarding his daughters.'
  },
  {
    id: 1216,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 16,
    domain: 'Information and Ideas',
    skill: 'Inference',
    passageHtml: `<p class="mb-3">Many of William Shakespeare’s tragedies address broad themes that still appeal to today’s audiences. For instance, <i>Romeo and Juliet</i>, which is set in the Italy of Shakespeare’s time, tackles the themes of parents versus children and love versus hate, and the play continues to be read and produced widely around the world. But understanding Shakespeare’s so-called history plays can require a knowledge of several centuries of English history. Consequently, _______</p>`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'many theatergoers and readers today are likely to find Shakespeare’s history plays less engaging than the tragedies.' },
      { id: 'B', text: 'some of Shakespeare’s tragedies are more relevant to today’s audiences than twentieth-century plays.' },
      { id: 'C', text: 'Romeo and Juliet is the most thematically accessible of all Shakespeare’s tragedies.' },
      { id: 'D', text: 'experts in English history tend to prefer Shakespeare’s history plays to his other works.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Since history plays require specialized knowledge of centuries of English history, today’s general theatergoers are likely to find them less accessible and engaging than the universally themed tragedies.'
  },
  {
    id: 1217,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 17,
    domain: 'Information and Ideas',
    skill: 'Inference',
    passageHtml: `<p class="mb-3">Ancestral Puebloans, the civilization from which present-day Pueblo tribes descended, emerged as early as 1500 B.C.E. in an area of what is now the southwestern United States and dispersed suddenly in the late 1200s C.E., abandoning established villages with systems for farming crops and turkeys. Recent analysis comparing turkey remains at Mesa Verde, one such village in southern Colorado, to samples from modern turkey populations in the Rio Grande Valley of north central New Mexico determined that the latter birds descended in part from turkeys cultivated at Mesa Verde, with shared genetic markers appearing only after 1280. Thus, researchers concluded that _______</p>`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'conditions of the terrains in the Rio Grande Valley and Mesa Verde had greater similarities in the past than they do today.' },
      { id: 'B', text: 'some Ancestral Puebloans migrated to the Rio Grande Valley in the late 1200s and carried farming practices with them.' },
      { id: 'C', text: 'Indigenous peoples living in the Rio Grande Valley primarily planted crops and did not cultivate turkeys before 1280.' },
      { id: 'D', text: 'the Ancestral Puebloans of Mesa Verde likely adopted the farming practices of Indigenous peoples living in other regions.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Genetic evidence linking post-1280 Rio Grande Valley turkeys to Mesa Verde turkeys shows that when Ancestral Puebloans abandoned Mesa Verde in the late 1200s, some migrated to the Rio Grande Valley with their turkeys.'
  },
  {
    id: 1218,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 18,
    domain: 'Information and Ideas',
    skill: 'Inference',
    passageHtml: `<p class="mb-3">One challenge when researching whether holding elected office changes a person’s behavior is the problem of ensuring that the experiment has an appropriate control group. To reveal the effect of holding office, researchers must compare people who hold elected office with people who do not hold office but who are otherwise similar to the office-holders. Since researchers are unable to control which politicians win elections, they therefore _______</p>`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'struggle to find valid data about the behavior of politicians who do not currently hold office.' },
      { id: 'B', text: 'can only conduct valid studies with people who have previously held office rather than people who presently hold office.' },
      { id: 'C', text: 'should select a control group of people who differ from office holders in several significant ways.' },
      { id: 'D', text: 'will find it difficult to identify a group of people who can function as an appropriate control group for their studies.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Because researchers cannot randomly assign who wins elections, finding non-office-holders who are identical in all other relevant respects to winners is inherently difficult.'
  },
  {
    id: 1219,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 19,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">In his groundbreaking book <i>Bengali Harlem and the Lost Histories of South Asian America</i>, Vivek Bald uses newspaper articles, census records, ships’ logs, and memoirs to tell the _______ who made New York City their home in the early twentieth century.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'story’s of the South Asian immigrants' },
      { id: 'B', text: 'story’s of the South Asian immigrants’' },
      { id: 'C', text: 'stories of the South Asian immigrants' },
      { id: 'D', text: 'stories’ of the South Asian immigrant’s' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. "Stories" is the plural noun object of "tell", and "South Asian immigrants" is the plural noun object of the preposition "of". Neither requires an apostrophe.'
  },
  {
    id: 1220,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 20,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">In her two major series “Memory Test” and “Autobiography,” painter Howardena Pindell explored themes _______ healing, self-discovery, and memory by cutting and sewing back together pieces of canvas and inserting personal artifacts, such as postcards, into some of the paintings.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'of' },
      { id: 'B', text: 'of,' },
      { id: 'C', text: 'of—' },
      { id: 'D', text: 'of:' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. No punctuation is needed between the preposition "of" and its noun phrase objects ("healing, self-discovery, and memory").'
  },
  {
    id: 1221,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 21,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">Both Sona Charaipotra, an Indian American, and Dhonielle Clayton, an African American, grew up frustrated by the lack of diverse characters in books for young people. In 2011, these two writers joined forces to found CAKE Literary, a book packaging _______ specializes in the creation and promotion of stories told from diverse perspectives for children and young adults.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'company,' },
      { id: 'B', text: 'company that' },
      { id: 'C', text: 'company' },
      { id: 'D', text: 'company, that' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Company that" introduces an essential restrictive relative clause modifying "a book packaging company". No comma precedes "that".'
  },
  {
    id: 1222,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 22,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">A study led by scientist Rebecca Kirby at the University of Wisconsin–Madison found that black bears that eat human food before hibernation have increased levels of a rare carbon isotope, _______ due to the higher <sup>13</sup>C levels in corn and cane sugar. Bears with these elevated levels were also found to have much shorter hibernation periods on average.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'carbon-13, (¹³C)' },
      { id: 'B', text: 'carbon-13 (¹³C)' },
      { id: 'C', text: 'carbon-13, (¹³C),' },
      { id: 'D', text: 'carbon-13 (¹³C),' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Parentheses immediately follow "carbon-13" without a preceding comma, and a comma follows the parenthetical abbreviation "(¹³C)," to separate the main clause from the nonrestrictive modifier "due to...".'
  },
  {
    id: 1223,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 23,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">In 2010, archaeologist Noel Hidalgo Tan was visiting the twelfth-century temple of Angkor Wat in Cambodia when he noticed markings of red paint on the temple _______ the help of digital imaging techniques, he discovered the markings to be part of an elaborate mural containing over 200 paintings.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'walls, with' },
      { id: 'B', text: 'walls with' },
      { id: 'C', text: 'walls so with' },
      { id: 'D', text: 'walls. With' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. A period correctly separates the two independent clauses ("In 2010... on the temple walls." and "With the help...").'
  },
  {
    id: 1224,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 24,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">Working from an earlier discovery of Charpentier’s, chemists Emmanuelle Charpentier and Jennifer Doudna—winners of the 2020 Nobel Prize in Chemistry—re-created and then reprogrammed the so-called “genetic scissors” of a species of DNA-cleaving bacteria _______ a tool that is revolutionizing the field of gene technology.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'to forge' },
      { id: 'B', text: 'forging' },
      { id: 'C', text: 'forged' },
      { id: 'D', text: 'and forging' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The infinitive "to forge" correctly expresses purpose and completes the predicate structure.'
  },
  {
    id: 1225,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 25,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">In 2016, engineer Vanessa Galvez oversaw the installation of 164 bioswales, vegetated channels designed to absorb and divert stormwater, along the streets of Queens, New York. By reducing the runoff flowing into city sewers, _______</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'the mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved by bioswales.' },
      { id: 'B', text: 'the bioswales have mitigated both street flooding and the resulting pollution of nearby waterways.' },
      { id: 'C', text: 'the bioswales’ mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved.' },
      { id: 'D', text: 'both street flooding and the resulting pollution of nearby waterways have been mitigated by bioswales.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The introductory modifying phrase "By reducing the runoff..." logically modifies "the bioswales", which perform the action of reducing runoff.'
  },
  {
    id: 1226,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 26,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">A study published by Rice University geoscientist Ming Tang in 2019 offers a new explanation for the origin of Earth’s _______ structures called arcs, towering ridges that form when a dense oceanic plate subducts under a less dense continental plate, melts in the mantle below, and then rises and bursts through the continental crust above.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'continents geological' },
      { id: 'B', text: 'continents: geological' },
      { id: 'C', text: 'continents; geological' },
      { id: 'D', text: 'continents. Geological' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. A colon correctly introduces an elaboration/explanation specifying what "Earth’s continents" origin refers to: "geological structures called arcs...".'
  },
  {
    id: 1227,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 27,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">During a 2021 launch, Rocket Labs’ Electron rocket experienced an unexpected failure: its second-stage booster shut down suddenly after ignition. _______ instead of downplaying the incident, Rocket Labs’ CEO publicly acknowledged what happened and apologized for the loss of the rocket’s payload, which had consisted of two satellites.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Afterward,' },
      { id: 'B', text: 'Additionally,' },
      { id: 'C', text: 'Indeed,' },
      { id: 'D', text: 'Similarly,' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "Afterward" logically indicates the sequence of events that took place after the rocket failure occurred.'
  },
  {
    id: 1228,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 28,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">When soil becomes contaminated by toxic metals, it can be removed from the ground and disposed of in a landfill. _______ contaminated soil can be detoxified via phytoremediation: plants that can withstand high concentrations of metals absorb the pollutants and store them in their shoots, which are then cut off and safely disposed of, preserving the health of the plants.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Alternatively,' },
      { id: 'B', text: 'Specifically,' },
      { id: 'C', text: 'For example,' },
      { id: 'D', text: 'As a result,' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "Alternatively" introduces phytoremediation as an alternative method to landfill disposal for managing contaminated soil.'
  },
  {
    id: 1229,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 29,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>The calendar used by most of the world (the Gregorian calendar) has 365 days.</li><li>Because 365 days can’t be divided evenly by 7 (the number of days in a week), calendar dates fall on a different day of the week each year.</li><li>The Hanke-Henry permanent calendar, developed as an alternative to the Gregorian calendar, has 364 days.</li><li>Because 364 can be divided evenly by 7, calendar dates fall on the same day of the week each year, which supports more predictable scheduling.</li></ul>`,
    questionText: `The student wants to explain an advantage of the Hanke-Henry calendar. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'The Gregorian calendar has 365 days, which is one day longer than the Hanke-Henry permanent calendar.' },
      { id: 'B', text: 'Adopting the Hanke-Henry permanent calendar would help solve a problem with the Gregorian calendar.' },
      { id: 'C', text: 'Designed so calendar dates would occur on the same day of the week each year, the Hanke-Henry calendar supports more predictable scheduling than does the Gregorian calendar.' },
      { id: 'D', text: 'The Hanke-Henry permanent calendar was developed as an alternative to the Gregorian calendar, which is currently the most-used calendar in the world.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. It directly articulates the key advantage: dates fall on the same day of the week every year, supporting more predictable scheduling.'
  },
  {
    id: 1230,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 30,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>The Haudenosaunee Confederacy is a nearly 1,000-year-old alliance of six Native nations in the northeastern US.</li><li>The members are bound by a centuries-old agreement known as the Great Law of Peace.</li><li>Historian Bruce Johansen is one of several scholars who believe that the principles of the Great Law of Peace influenced the US Constitution.</li><li>This theory is called the influence theory.</li><li>Johansen cites the fact that Benjamin Franklin and Thomas Jefferson both studied the Haudenosaunee Confederacy.</li></ul>`,
    questionText: `The student wants to present the influence theory to an audience unfamiliar with the Haudenosaunee Confederacy. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'Historian Bruce Johansen believes that the Great Law of Peace was very influential.' },
      { id: 'B', text: 'The influence theory is supported by the fact that Benjamin Franklin and Thomas Jefferson both studied the Haudenosaunee Confederacy.' },
      { id: 'C', text: 'The influence theory holds that the principles of the Great Law of Peace, a centuries-old agreement binding six Native nations in the northeastern US, influenced the US Constitution.' },
      { id: 'D', text: 'Native people, including the members of the Haudenosaunee Confederacy, influenced the founding of the US in many different ways.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. It defines the influence theory while providing necessary introductory context about the Haudenosaunee Confederacy for an unfamiliar audience.'
  },
  {
    id: 1231,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 31,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>In 1999, astronomer Todd Henry studied the differences in surface temperature between the Sun and nearby stars.</li><li>His team mapped all stars within 10 parsecs (approximately 200 trillion miles) of the Sun.</li><li>The surface temperature of the Sun is around 9,800°F, which classifies it as a G star.</li><li>327 of the 357 stars in the study were classified as K or M stars, with surface temperatures under 8,900°F (cooler than the Sun).</li><li>11 of the 357 stars in the study were classified as A or F stars, with surface temperatures greater than 10,300°F (hotter than the Sun).</li></ul>`,
    questionText: `The student wants to emphasize how hot the Sun is relative to nearby stars. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'At around 9,800°F, which classifies it as a G star, the Sun is hotter than most but not all of the stars within 10 parsecs of it.' },
      { id: 'B', text: 'Astronomer Todd Henry determined that the Sun, at around 9,800°F, is a G star, and several other stars within a 10-parsec range are A or F stars.' },
      { id: 'C', text: 'Of the 357 stars within ten parsecs of the Sun, 327 are classified as K or M stars, with surface temperatures under 8,900°F.' },
      { id: 'D', text: 'While most of the stars within 10 parsecs of the Sun are classified as K, M, A, or F stars, the Sun is classified as a G star due to its surface temperature of 9,800°F.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. It directly compares the Sun’s temperature (~9,800°F) to nearby stars, pointing out that it is hotter than most (327 out of 357) but not all.'
  },
  {
    id: 1232,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 32,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>The Atlantic Monthly magazine was first published in 1857.</li><li>The magazine focused on politics, art, and literature.</li><li>In 2019, historian Cathryn Halverson published the book <i>Faraway Women and the “Atlantic Monthly.”</i></li><li>Its subject is female authors whose autobiographies appeared in the magazine in the early 1900s.</li><li>One of the authors discussed is Juanita Harrison.</li></ul>`,
    questionText: `The student wants to introduce Cathryn Halverson’s book to an audience already familiar with the <i>Atlantic Monthly</i>. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'Cathryn Halverson’s Faraway Women and the “Atlantic Monthly” discusses female authors whose autobiographies appeared in the magazine in the early 1900s.' },
      { id: 'B', text: 'A magazine called the Atlantic Monthly, referred to in Cathryn Halverson’s book title, was first published in 1857.' },
      { id: 'C', text: 'Faraway Women and the “Atlantic Monthly” features contributors to the Atlantic Monthly, first published in 1857 as a magazine focusing on politics, art, and literature.' },
      { id: 'D', text: 'An author discussed by Cathryn Halverson is Juanita Harrison, whose autobiography appeared in the Atlantic Monthly in the early 1900s.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Assuming the audience already knows the <i>Atlantic Monthly</i>, it directly introduces Halverson’s book title and its main subject without repeating general background about the magazine.'
  },
  {
    id: 1233,
    testId: 'test4',
    moduleKey: 'RW_2',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 2,
    questionNumber: 33,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>The magnificent frigatebird (<i>fregata magnificens</i>) is a species of seabird that feeds mainly on fish, tuna, squid, and other small sea animals.</li><li>It is unusual among seabirds in that it doesn’t dive into the water for prey.</li><li>One way it acquires food is by using its hook-tipped bill to snatch prey from the surface of the water.</li><li>Another way it acquires food is by taking it from weaker birds by force.</li><li>This behavior is known as kleptoparasitism.</li></ul>`,
    questionText: `The student wants to emphasize a similarity between the two ways a magnificent frigatebird acquires food. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'A magnificent frigatebird never dives into the water, instead using its hook-tipped bill to snatch prey from the surface.' },
      { id: 'B', text: 'Neither of a magnificent frigatebird’s two ways of acquiring food requires the bird to dive into the water.' },
      { id: 'C', text: 'Of the magnificent frigatebird’s two ways of acquiring food, only one is known as kleptoparasitism.' },
      { id: 'D', text: 'In addition to snatching prey from the water with its hook-tipped bill, a magnificent frigatebird takes food from other birds by force.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. It directly emphasizes a shared characteristic (similarity) between the two food-gathering methods: neither requires diving into the water.'
  }
];
