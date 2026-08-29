import { Question } from '../types';

function makeTest4RW1Q13Svg(): string {
  return `<div class="my-4 flex flex-col items-center">
    <svg viewBox="0 0 350 375" class="w-full max-w-[340px] bg-white select-none">
      <!-- Title -->
      <text x="195" y="16" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">US States with the Greatest Number of</text>
      <text x="195" y="31" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Organic Farms in 2016</text>

      <!-- Y-axis Title -->
      <text x="-155" y="16" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Number of organic farms</text>

      <!-- Grid lines & Y-axis labels -->
      <!-- 2,800 -->
      <text x="75" y="53.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2,800</text>
      <line x1="80" y1="50" x2="305" y2="50" stroke="#777777" stroke-width="0.75" />

      <!-- 2,600 -->
      <text x="75" y="68.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2,600</text>
      <line x1="80" y1="65" x2="305" y2="65" stroke="#777777" stroke-width="0.75" />

      <!-- 2,400 -->
      <text x="75" y="83.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2,400</text>
      <line x1="80" y1="80" x2="305" y2="80" stroke="#777777" stroke-width="0.75" />

      <!-- 2,200 -->
      <text x="75" y="98.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2,200</text>
      <line x1="80" y1="95" x2="305" y2="95" stroke="#777777" stroke-width="0.75" />

      <!-- 2,000 -->
      <text x="75" y="113.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2,000</text>
      <line x1="80" y1="110" x2="305" y2="110" stroke="#777777" stroke-width="0.75" />

      <!-- 1,800 -->
      <text x="75" y="128.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1,800</text>
      <line x1="80" y1="125" x2="305" y2="125" stroke="#777777" stroke-width="0.75" />

      <!-- 1,600 -->
      <text x="75" y="143.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1,600</text>
      <line x1="80" y1="140" x2="305" y2="140" stroke="#777777" stroke-width="0.75" />

      <!-- 1,400 -->
      <text x="75" y="158.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1,400</text>
      <line x1="80" y1="155" x2="305" y2="155" stroke="#777777" stroke-width="0.75" />

      <!-- 1,200 -->
      <text x="75" y="173.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1,200</text>
      <line x1="80" y1="170" x2="305" y2="170" stroke="#777777" stroke-width="0.75" />

      <!-- 1,000 -->
      <text x="75" y="188.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1,000</text>
      <line x1="80" y1="185" x2="305" y2="185" stroke="#777777" stroke-width="0.75" />

      <!-- 800 -->
      <text x="75" y="203.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">800</text>
      <line x1="80" y1="200" x2="305" y2="200" stroke="#777777" stroke-width="0.75" />

      <!-- 600 -->
      <text x="75" y="218.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">600</text>
      <line x1="80" y1="215" x2="305" y2="215" stroke="#777777" stroke-width="0.75" />

      <!-- 400 -->
      <text x="75" y="233.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">400</text>
      <line x1="80" y1="230" x2="305" y2="230" stroke="#777777" stroke-width="0.75" />

      <!-- 200 -->
      <text x="75" y="248.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">200</text>
      <line x1="80" y1="245" x2="305" y2="245" stroke="#777777" stroke-width="0.75" />

      <!-- 0 -->
      <text x="75" y="263.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0</text>
      <line x1="80" y1="260" x2="305" y2="260" stroke="#000000" stroke-width="1.2" />

      <!-- Y-Axis Vertical Line -->
      <line x1="80" y1="50" x2="80" y2="260" stroke="#000000" stroke-width="1.2" />

      <!-- Bars (Fill #b8bcc0, Stroke #000) -->
      <!-- California: ~2,710 (y = 56.5, height = 203.5) -->
      <rect x="98" y="56.5" width="18" height="203.5" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Wisconsin: ~1,280 (y = 164, height = 96) -->
      <rect x="131" y="164" width="18" height="96" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- New York: ~1,065 (y = 180, height = 80) -->
      <rect x="164" y="180.1" width="18" height="79.9" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Pennsylvania: 800 (y = 200, height = 60 - touches 800 gridline exactly) -->
      <rect x="197" y="200" width="18" height="60" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Iowa: ~730 (y = 205.2, height = 54.8) -->
      <rect x="230" y="205.2" width="18" height="54.8" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- Washington: ~675 (y = 209.4, height = 50.6) -->
      <rect x="263" y="209.4" width="18" height="50.6" fill="#b8bcc0" stroke="#000000" stroke-width="0.8" />

      <!-- State Names (Rotated ~42 degrees downward to the right) -->
      <g font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000" text-anchor="start">
        <text x="100" y="268" transform="rotate(42, 100, 268)">California</text>
        <text x="133" y="268" transform="rotate(42, 133, 268)">Wisconsin</text>
        <text x="166" y="268" transform="rotate(42, 166, 268)">New York</text>
        <text x="199" y="268" transform="rotate(42, 199, 268)">Pennsylvania</text>
        <text x="232" y="268" transform="rotate(42, 232, 268)">Iowa</text>
        <text x="265" y="268" transform="rotate(42, 265, 268)">Washington</text>
      </g>

      <!-- Legend Box -->
      <rect x="165" y="342" width="58" height="18" fill="#ffffff" stroke="#777777" stroke-width="0.8" />
      <rect x="171" y="346" width="12" height="10" fill="#b8bcc0" stroke="#000000" stroke-width="0.75" />
      <text x="187" y="354.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#000000">State</text>
    </svg>
  </div>`;
}

export const TEST4_RW_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 1101,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">The spacecraft OSIRIS-REx briefly made contact with the asteroid 101955 Bennu in 2020. NASA scientist Daniella DellaGiustina reports that despite facing the unexpected obstacle of a surface mostly covered in boulders, OSIRIS-REx successfully _______ a sample of the surface, gathering pieces of it to bring back to Earth.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'attached' },
      { id: 'B', text: 'collected' },
      { id: 'C', text: 'followed' },
      { id: 'D', text: 'replaced' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. "Collected" means gathered or retrieved, which fits the context of gathering pieces of the asteroid\'s surface to bring back to Earth.'
  },
  {
    id: 1102,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Research conducted by planetary scientist Katarina Miljkovic suggests that the Moon’s surface may not accurately _______ early impact events. When the Moon was still forming, its surface was softer, and asteroid or meteoroid impacts would have left less of an impression; thus, evidence of early impacts may no longer be present.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'reflect' },
      { id: 'B', text: 'receive' },
      { id: 'C', text: 'evaluate' },
      { id: 'D', text: 'mimic' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "Reflect" here means to show or represent accurately. The text states that early impacts left less impression, so the surface doesn\'t reflect those early events.'
  },
  {
    id: 1103,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">Handedness, a preferential use of either the right or left hand, typically is easy to observe in humans. Because this trait is present but less _______ in many other animals, animal-behavior researchers often employ tasks specially designed to reveal individual animals’ preferences for a certain hand or paw.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'recognizable' },
      { id: 'B', text: 'intriguing' },
      { id: 'C', text: 'significant' },
      { id: 'D', text: 'useful' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The text contrasts humans, in whom handedness is "easy to observe," with other animals in whom it is "less recognizable," requiring specially designed tasks to detect.'
  },
  {
    id: 1104,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passageHtml: `<p class="mb-3">It is by no means _______ to recognize the influence of Dutch painter Hieronymus Bosch on Ali Banisadr’s paintings; indeed, Banisadr himself cites Bosch as an inspiration. However, some scholars have suggested that the ancient Mesopotamian poem <i>Epic of Gilgamesh</i> may have had a far greater impact on Banisadr’s work.</p>`,
    questionText: `Which choice completes the text with the most logical and precise word or phrase?`,
    options: [
      { id: 'A', text: 'substantial' },
      { id: 'B', text: 'satisfying' },
      { id: 'C', text: 'unimportant' },
      { id: 'D', text: 'appropriate' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. "By no means unimportant" emphasizes that Bosch\'s influence is indeed significant, especially since Banisadr cites him as an inspiration, before introducing an even greater proposed influence.'
  },
  {
    id: 1105,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    passageHtml: `<p class="mb-3">The following text is adapted from Susan Glaspell’s 1912 short story “Out There.” An elderly shop owner is looking at a picture that he recently acquired and hopes to sell.</p><p class="mb-3">It did seem that the picture failed to fit in with the rest of the shop. A persuasive young fellow who claimed he was closing out his stock let the old man have it for what he called a song. It was only a little out-of-the-way store which subsisted chiefly on the framing of pictures. The old man looked around at his views of the city, his pictures of cats and dogs, his flaming bits of landscape. “Don’t belong in here,” he fumed. And yet the old man was secretly proud of his acquisition. There was a hidden dignity in his scowling as he shuffled about pondering the least ridiculous place for the picture.</p>`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      { id: 'A', text: 'To reveal the shop owner’s conflicted feelings about the new picture' },
      { id: 'B', text: 'To convey the shop owner’s resentment of the person he got the new picture from' },
      { id: 'C', text: 'To describe the items that the shop owner most highly prizes' },
      { id: 'D', text: 'To explain differences between the new picture and other pictures in the shop' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. The text shows the shop owner fuming that the picture "doesn\'t belong," yet simultaneously feeling "secretly proud of his acquisition," demonstrating his conflicted emotions.'
  },
  {
    id: 1106,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    passageHtml: `<p class="mb-3">The following text is from the 1923 poem “Black Finger” by Angelina Weld Grimké, a Black American writer. A cypress is a type of evergreen tree.</p><p class="mb-3">I have just seen a most beautiful thing,<br/>Slim and still,<br/>Against a gold, gold sky,<br/>A straight black cypress,<br/>Sensitive,<br/>Exquisite,<br/>A black finger<br/>Pointing upwards.<br/>Why, beautiful still finger, are you black?<br/>And why are you pointing upwards?</p>`,
    questionText: `Which choice best describes the overall structure of the text?`,
    options: [
      { id: 'A', text: 'The speaker assesses a natural phenomenon, then questions the accuracy of her assessment.' },
      { id: 'B', text: 'The speaker describes a distinctive sight in nature, then ponders what meaning to attribute to that sight.' },
      { id: 'C', text: 'The speaker presents an outdoor scene, then considers a human behavior occurring within that scene.' },
      { id: 'D', text: 'The speaker examines her surroundings, then speculates about their influence on her emotional state.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The speaker first describes a cypress tree pointing upward against the sky, and then asks why it is black and pointing upward, pondering its deeper meaning.'
  },
  {
    id: 1107,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 7,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    passageHtml: `<p class="mb-3">The following text is from Walt Whitman’s 1860 poem “Calamus 24.”</p><p class="mb-3">I HEAR it is charged against me that I seek to destroy institutions;<br/>But really I am neither for nor against institutions<br/>(What indeed have I in common with them?—<br/>Or what with the destruction of them?),<br/>Only I will establish in the Mannahatta [Manhattan] and in every city of These States, inland and seaboard,<br/>And in the fields and woods, and above every keel [ship] little or large, that dents the water,<br/>Without edifices, or rules, or trustees, or any argument,<br/>The institution of the dear love of comrades.</p>`,
    questionText: `Which choice best describes the overall structure of the text?`,
    options: [
      { id: 'A', text: 'The speaker questions an increasingly prevalent attitude, then summarizes his worldview.' },
      { id: 'B', text: 'The speaker regrets his isolation from others, then predicts a profound change in society.' },
      { id: 'C', text: 'The speaker concedes his personal shortcomings, then boasts of his many achievements.' },
      { id: 'D', text: 'The speaker addresses a criticism leveled against him, then announces a grand ambition of his.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Whitman opens by addressing a criticism ("I HEAR it is charged against me that I seek to destroy institutions") and then declares his ambitious vision ("I will establish... The institution of the dear love of comrades").'
  },
  {
    id: 1108,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 8,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    passageHtml: `<p class="mb-3">The mimosa tree evolved in East Asia, where the beetle <i>Bruchidius terrenus</i> preys on its seeds. In 1785, mimosa trees were introduced to North America, far from any <i>B. terrenus</i>. <u>But evolutionary links between predators and their prey can persist across centuries and continents.</u> Around 2001, <i>B. terrenus</i> was introduced in southeastern North America near where botanist Shu-Mei Chang and colleagues had been monitoring mimosa trees. Within a year, 93 percent of the trees had been attacked by the beetles.</p>`,
    questionText: `Which choice best describes the function of the third sentence in the overall structure of the text?`,
    options: [
      { id: 'A', text: 'It states the hypothesis that Chang and colleagues had set out to investigate using mimosa trees and B. terrenus.' },
      { id: 'B', text: 'It presents a generalization that is exemplified by the discussion of the mimosa trees and B. terrenus.' },
      { id: 'C', text: 'It offers an alternative explanation for the findings of Chang and colleagues.' },
      { id: 'D', text: 'It provides context that clarifies why the species mentioned spread to new locations.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. The underlined sentence makes a general statement about evolutionary links persisting across time and space, which is then illustrated by the specific case of mimosa trees and beetles in North America.'
  },
  {
    id: 1109,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 9,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    passageHtml: `<p class="mb-3"><b>Text 1</b><br/>Conventional wisdom long held that human social systems evolved in stages, beginning with hunter-gatherers forming small bands of members with roughly equal status. The shift to agriculture about 12,000 years ago sparked population growth that led to the emergence of groups with hierarchical structures: associations of clans first, then chiefdoms, and finally, bureaucratic states.</p><p class="mb-3"><b>Text 2</b><br/>In a 2021 book, anthropologist David Graeber and archaeologist David Wengrow maintain that humans have always been socially flexible, alternately forming systems based on hierarchy and collective ones with decentralized leadership. The authors point to evidence that as far back as 50,000 years ago some hunter-gatherers adjusted their social structures seasonally, at times dispersing in small groups but also assembling into communities that included esteemed individuals.</p>`,
    questionText: `Based on the texts, how would Graeber and Wengrow (Text 2) most likely respond to the “conventional wisdom” presented in Text 1?`,
    options: [
      { id: 'A', text: 'By conceding the importance of hierarchical systems but asserting the greater significance of decentralized collective societies' },
      { id: 'B', text: 'By disputing the idea that developments in social structures have followed a linear progression through distinct stages' },
      { id: 'C', text: 'By acknowledging that hierarchical roles likely weren’t a part of social systems before the rise of agriculture' },
      { id: 'D', text: 'By challenging the assumption that groupings of hunter-gatherers were among the earliest forms of social structure' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. Text 1 describes a linear progression of distinct stages (small equal bands -> chiefdoms -> states). Text 2 argues humans "have always been socially flexible," forming hierarchical and collective systems fluidly, thus disputing the linear progression model.'
  },
  {
    id: 1110,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    passageHtml: `<p class="mb-3">The following text is adapted from Frances Hodgson Burnett’s 1911 novel <i>The Secret Garden</i>. Mary, a young girl, recently found an overgrown hidden garden.</p><p class="mb-3">Mary was an odd, determined little person, and now she had something interesting to be determined about, she was very much absorbed, indeed. She worked and dug and pulled up weeds steadily, only becoming more pleased with her work every hour instead of tiring of it. It seemed to her like a fascinating sort of play.</p>`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      { id: 'A', text: 'Mary hides in the garden to avoid doing her chores.' },
      { id: 'B', text: 'Mary is getting bored with pulling up so many weeds in the garden.' },
      { id: 'C', text: 'Mary is clearing out the garden to create a space to play.' },
      { id: 'D', text: 'Mary feels very satisfied when she’s taking care of the garden.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The text notes Mary becomes "more pleased with her work every hour" and finds it "like a fascinating sort of play," showing deep satisfaction in gardening.'
  },
  {
    id: 1111,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 11,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    passageHtml: `<p class="mb-3">The following text is from Ezra Pound’s 1909 poem “Hymn III,” based on the work of Marcantonio Flaminio.</p><p class="mb-3">As a fragile and lovely flower unfolds its gleaming<br/>foliage on the breast of the fostering earth, if<br/>the dew and the rain draw it forth;<br/>So doth my tender mind flourish, if it be fed with the<br/>sweet dew of the fostering spirit,<br/>Lacking this, it beginneth straightway to languish,<br/>even as a floweret born upon dry earth, if the<br/>dew and the rain tend it not.</p>`,
    questionText: `Based on the text, in what way is the human mind like a flower?`,
    options: [
      { id: 'A', text: 'It becomes increasingly vigorous with the passage of time.' },
      { id: 'B', text: 'It draws strength from changes in the weather.' },
      { id: 'C', text: 'It requires proper nourishment in order to thrive.' },
      { id: 'D', text: 'It perseveres despite challenging circumstances.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The speaker states that just as a flower needs dew and rain to unfold, the mind flourishes when "fed with the sweet dew of the fostering spirit" and languishes without it.'
  },
  {
    id: 1112,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 12,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    passageHtml: `<p class="mb-3">The following text is adapted from Jack London’s 1903 novel <i>The Call of the Wild</i>. Buck is a sled dog living with John Thornton in Yukon, Canada.</p><p class="mb-3">Thornton alone held [Buck]. The rest of mankind was as nothing. Chance travellers might praise or pet him; but he was cold under it all, and from a too demonstrative man he would get up and walk away. When Thornton’s partners, Hans and Pete, arrived on the long-expected raft, Buck refused to notice them till he learned they were close to Thornton; after that he tolerated them in a passive sort of way, accepting favors from them as though he favored them by accepting.</p>`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      { id: 'A', text: 'Buck has become less social since he began living with Thornton.' },
      { id: 'B', text: 'Buck mistrusts humans and does his best to avoid them.' },
      { id: 'C', text: 'Buck has been especially well liked by most of Thornton’s friends.' },
      { id: 'D', text: 'Buck holds Thornton in higher regard than any other person.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The text explicitly states that "Thornton alone held [Buck]" and "The rest of mankind was as nothing," establishing that Buck values Thornton far above anyone else.'
  },
  {
    id: 1113,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 13,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `${makeTest4RW1Q13Svg()}<p class="mb-3">Organic farming is a method of growing food that tries to reduce environmental harm by using natural forms of pest control and avoiding fertilizers made with synthetic materials. Organic farms are still a small fraction of the total farms in the United States, but they have been becoming more popular. According to the US Department of Agriculture, in 2016 California had between 2,600 and 2,800 organic farms and _______</p>`,
    questionText: `Which choice most effectively uses data from the graph to complete the text?`,
    options: [
      { id: 'A', text: 'Washington had between 600 and 800 organic farms.' },
      { id: 'B', text: 'New York had fewer than 800 organic farms.' },
      { id: 'C', text: 'Wisconsin and Iowa each had between 1,200 and 1,400 organic farms.' },
      { id: 'D', text: 'Pennsylvania had more than 1,200 organic farms.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. As the graph shows, Washington had approximately 675 organic farms in 2016, which is between 600 and 800 organic farms.'
  },
  {
    id: 1114,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 14,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3">Biologist Valentina Gómez-Bahamón and her team have investigated two subspecies of the fork-tailed flycatcher bird that live in the same region in Colombia, but one subspecies migrates south for part of the year, and the other doesn’t. The researchers found that, due to slight differences in feather shape, the feathers of migratory forked-tailed flycatcher males make a sound during flight that is higher pitched than that made by the feathers of nonmigratory males. The researchers hypothesize that fork-tailed flycatcher females are attracted to the specific sound made by the males of their own subspecies, and that over time the females’ preference will drive further genetic and anatomical divergence between the subspecies.</p>`,
    questionText: `Which finding, if true, would most directly support Gómez-Bahamón and her team’s hypothesis?`,
    options: [
      { id: 'A', text: 'The feathers located on the wings of the migratory fork-tailed flycatchers have a narrower shape than those of the nonmigratory birds, which allows them to fly long distances.' },
      { id: 'B', text: 'Over several generations, the sound made by the feathers of migratory male fork-tailed flycatchers grows progressively higher pitched relative to that made by the feathers of nonmigratory males.' },
      { id: 'C', text: 'Fork-tailed flycatchers communicate different messages to each other depending on whether their feathers create high-pitched or low-pitched sounds.' },
      { id: 'D', text: 'The breeding habits of the migratory and nonmigratory fork-tailed flycatchers remained generally the same over several generations.' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. If females prefer males that produce the sound characteristic of their subspecies, female mate selection will reinforce and exaggerate that trait over generations, driving further pitch divergence.'
  },
  {
    id: 1115,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 15,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<div class="my-3 flex flex-col items-center"><p class="text-xs font-semibold mb-2">Ablation Rates for Three Elements in Cosmic Dust, by Dust Source</p><table class="text-sm border border-black rounded"><thead class="bg-gray-100"><tr><th class="p-2 border-r border-b">Element</th><th class="p-2 border-r border-b">SPC</th><th class="p-2 border-r border-b">AST</th><th class="p-2 border-r border-b">HTC</th><th class="p-2 border-b">OCC</th></tr></thead><tbody><tr class="border-b"><td class="p-2 border-r">iron</td><td class="p-2 border-r text-center">20%</td><td class="p-2 border-r text-center">28%</td><td class="p-2 border-r text-center">90%</td><td class="p-2 text-center">98%</td></tr><tr class="border-b"><td class="p-2 border-r">potassium</td><td class="p-2 border-r text-center">44%</td><td class="p-2 border-r text-center">74%</td><td class="p-2 border-r text-center">97%</td><td class="p-2 text-center">100%</td></tr><tr><td class="p-2 border-r">sodium</td><td class="p-2 border-r text-center">45%</td><td class="p-2 border-r text-center">75%</td><td class="p-2 border-r text-center">99%</td><td class="p-2 text-center">100%</td></tr></tbody></table></div><p class="mb-3">Earth’s atmosphere is bombarded by cosmic dust originating from several sources: short-period comets (SPCs), particles from the asteroid belt (ASTs), Halley-type comets (HTCs), and Oort cloud comets (OCCs). Some of the dust’s material vaporizes in the atmosphere in a process called ablation, and the faster the particles move, the higher the rate of ablation. Astrophysicist Juan Diego Carrillo-Sánchez led a team that calculated average ablation rates for elements in the dust (such as iron and potassium) and showed that material in slower-moving SPC or AST dust has a lower rate than the same material in faster-moving HTC or OCC dust. For example, whereas the average ablation rate for iron from AST dust is 28%, the average rate for _______</p>`,
    questionText: `Which choice most effectively uses data from the table to complete the example?`,
    options: [
      { id: 'A', text: 'iron from SPC dust is 20%.' },
      { id: 'B', text: 'sodium from OCC dust is 100%.' },
      { id: 'C', text: 'iron from HTC dust is 90%.' },
      { id: 'D', text: 'sodium from AST dust is 75%.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. To complete the example contrasting slower-moving AST dust (28%) with faster-moving HTC dust for the same element (iron), 90% for iron from HTC dust directly illustrates the point.'
  },
  {
    id: 1116,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 16,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<p class="mb-3">Art collectives, like the United States- and Vietnam-based collective The Propeller Group or Cuba’s Los Carpinteros, are groups of artists who agree to work together: perhaps for stylistic reasons, or to advance certain shared political ideals, or to help mitigate the costs of supplies and studio space. Regardless of the reasons, art collectives usually involve some collaboration among the artists. Based on a recent series of interviews with various art collectives, an arts journalist claims that this can be difficult for artists who are often used to having sole control over their work.</p>`,
    questionText: `Which quotation from the interviews best illustrates the journalist’s claim?`,
    options: [
      { id: 'A', text: '“The first collective I joined included many amazingly talented artists, and we enjoyed each other’s company, but because we had a hard time sharing credit and responsibility for our work, the collective didn’t last.”' },
      { id: 'B', text: '“We work together, but that doesn’t mean that individual projects are equally the work of all of us. Many of our projects are primarily the responsibility of whoever originally proposed the work to the group.”' },
      { id: 'C', text: '“Having worked as a member of a collective for several years, it’s sometimes hard to recall what it was like to work alone without the collective’s support. But that support encourages my individual expression rather than limits it.”' },
      { id: 'D', text: '“Sometimes an artist from outside the collective will choose to collaborate with us on a project, but all of those projects fit within the larger themes of the work the collective does on its own.”' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Having "a hard time sharing credit and responsibility" directly illustrates the journalist\'s claim that collaboration is difficult for artists accustomed to sole control.'
  },
  {
    id: 1117,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 17,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence',
    passageHtml: `<div class="my-3 flex flex-col items-center"><p class="text-xs font-semibold mb-2">Effects of Mycorrhizal Fungi on 3 Plant Species</p><table class="text-sm border border-black rounded"><thead class="bg-gray-100"><tr><th class="p-2 border-r border-b">Plant species</th><th class="p-2 border-r border-b">Mycorrhizal host</th><th class="p-2 border-r border-b">Average mass of plants grown in soil containing mycorrhizal fungi (in grams)</th><th class="p-2 border-b">Average mass of plants grown in soil treated to kill fungi (in grams)</th></tr></thead><tbody><tr class="border-b"><td class="p-2 border-r">Corn</td><td class="p-2 border-r text-center">yes</td><td class="p-2 border-r text-center">15.1</td><td class="p-2 text-center">3.8</td></tr><tr class="border-b"><td class="p-2 border-r">Marigold</td><td class="p-2 border-r text-center">yes</td><td class="p-2 border-r text-center">10.2</td><td class="p-2 text-center">2.4</td></tr><tr><td class="p-2 border-r">Broccoli</td><td class="p-2 border-r text-center">no</td><td class="p-2 border-r text-center">7.5</td><td class="p-2 text-center">7</td></tr></tbody></table></div><p class="mb-3">Mycorrhizal fungi in soil benefits many plants, substantially increasing the mass of some. A student conducted an experiment to illustrate this effect. The student chose three plant species for the experiment, including two that are mycorrhizal hosts (species known to benefit from mycorrhizal fungi) and one nonmycorrhizal species (a species that doesn’t benefit from and may even be harmed by mycorrhizal fungi). The student then grew several plants from each species both in soil containing mycorrhizal fungi and in soil that had been treated to kill mycorrhizal and other fungi. After several weeks, the student measured the plants’ average mass and was surprised to discover that _______</p>`,
    questionText: `Which choice most effectively uses data from the table to complete the statement?`,
    options: [
      { id: 'A', text: 'broccoli grown in soil containing mycorrhizal fungi had a slightly higher average mass than broccoli grown in soil that had been treated to kill fungi.' },
      { id: 'B', text: 'corn grown in soil containing mycorrhizal fungi had a higher average mass than broccoli grown in soil containing mycorrhizal fungi.' },
      { id: 'C', text: 'marigolds grown in soil containing mycorrhizal fungi had a much higher average mass than marigolds grown in soil that had been treated to kill fungi.' },
      { id: 'D', text: 'corn had the highest average mass of all three species grown in soil that had been treated to kill fungi, while marigolds had the lowest.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. Broccoli is nonmycorrhizal (not supposed to benefit), so discovering that broccoli grown with mycorrhizal fungi was slightly heavier (7.5 g) than without (7 g) was surprising.'
  },
  {
    id: 1118,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 18,
    domain: 'Information and Ideas',
    skill: 'Inference',
    passageHtml: `<p class="mb-3">Several artworks found among the ruins of the ancient Roman city of Pompeii depict a female figure fishing with a cupid nearby. Some scholars have asserted that the figure is the goddess Venus, since she is known to have been linked with cupids in Roman culture, but University of Leicester archaeologist Carla Brain suggests that cupids may have also been associated with fishing generally. The fact that a cupid is shown near the female figure, therefore, _______</p>`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      { id: 'A', text: 'is not conclusive evidence that the figure is Venus.' },
      { id: 'B', text: 'suggests that Venus was often depicted fishing.' },
      { id: 'C', text: 'eliminates the possibility that the figure is Venus.' },
      { id: 'D', text: 'would be difficult to account for if the figure is not Venus.' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. If cupids were associated with fishing generally as well as Venus, the presence of a cupid in a fishing scene is not conclusive proof that the female figure is Venus.'
  },
  {
    id: 1119,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 19,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">Literary agents estimate that more than half of all nonfiction books credited to a celebrity or other public figure are in fact written by ghostwriters, professional authors who are paid to write other _______ but whose names never appear on book covers.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'people’s stories' },
      { id: 'B', text: 'peoples story’s' },
      { id: 'C', text: 'peoples stories' },
      { id: 'D', text: 'people’s story’s' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "People’s" is the possessive form of the plural noun "people", and "stories" is the simple plural noun object of the verb "write".'
  },
  {
    id: 1120,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 20,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">Like other amphibians, the wood frog (<i>Rana sylvatica</i>) is unable to generate its own heat, so during periods of subfreezing temperatures, it _______ by producing large amounts of glucose, a sugar that helps prevent damaging ice from forming inside its cells.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'had survived' },
      { id: 'B', text: 'survived' },
      { id: 'C', text: 'would survive' },
      { id: 'D', text: 'survives' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. Present simple "survives" matches the general scientific truth and present-tense context ("is unable").'
  },
  {
    id: 1121,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 21,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">After a spate of illnesses as a child, Wilma Rudolph was told she might never walk again. Defying all odds, Rudolph didn’t just walk, she _______ the 1960 Summer Olympics in Rome, she won both the 100- and 200-meter dashes and clinched first place for her team in the 4 ×100-meter relay, becoming the first US woman to win three gold medals in a single Olympics.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'ran—fast—during' },
      { id: 'B', text: 'ran—fast during' },
      { id: 'C', text: 'ran—fast, during' },
      { id: 'D', text: 'ran—fast. During' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. A period correctly separates the first independent clause ("...she ran—fast.") from the second independent clause beginning with "During the 1960 Summer Olympics...".'
  },
  {
    id: 1122,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 22,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">In many of her landscape paintings from the 1970s and 1980s, Lebanese American artist Etel Adnan worked to capture the essence of California’s fog-shrouded Mount Tamalpais region through abstraction, using splotches of color to represent the area’s features. Interestingly, the triangle representing the mountain itself _______ among the few defined figures in her paintings.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'are' },
      { id: 'B', text: 'have been' },
      { id: 'C', text: 'were' },
      { id: 'D', text: 'is' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. The singular subject "the triangle" requires the singular verb "is".'
  },
  {
    id: 1123,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 23,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">Seneca sculptor Marie Watt’s blanket art comes in a range of shapes and sizes. In 2004, Watt sewed strips of blankets together to craft a 10-by-13-inch _______ in 2014, she arranged folded blankets into two large stacks and then cast them in bronze, creating two curving 18-foot-tall blue-bronze pillars.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'sampler later,' },
      { id: 'B', text: 'sampler;' },
      { id: 'C', text: 'sampler,' },
      { id: 'D', text: 'sampler, later,' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. A semicolon appropriately links the two independent clauses ("In 2004, Watt sewed..." and "in 2014, she arranged...").'
  },
  {
    id: 1124,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 24,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passageHtml: `<p class="mb-3">African American Percy Julian was a scientist and entrepreneur whose work helped people around the world to see. Named in 1999 as one of the greatest achievements by a US chemist in the past hundred years, _______ led to the first mass-produced treatment for glaucoma.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'Julian synthesized the alkaloid physostigmine in 1935; it' },
      { id: 'B', text: 'in 1935 Julian synthesized the alkaloid physostigmine, which' },
      { id: 'C', text: 'Julian’s 1935 synthesis of the alkaloid physostigmine' },
      { id: 'D', text: 'the alkaloid physostigmine was synthesized by Julian in 1935 and' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. The introductory modifier "Named in 1999 as one of the greatest achievements..." must logically modify "Julian’s 1935 synthesis of the alkaloid physostigmine".'
  },
  {
    id: 1125,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 25,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">The Arctic-Alpine Botanic Garden in Norway and the Jardim Botânico of Rio de Janeiro in Brazil are two of many botanical gardens around the world dedicated to growing diverse plant _______ fostering scientific research; and educating the public about plant conservation.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'species, both native and nonnative,' },
      { id: 'B', text: 'species, both native and nonnative;' },
      { id: 'C', text: 'species; both native and nonnative,' },
      { id: 'D', text: 'species both native and nonnative,' }
    ],
    correctAnswer: 'B',
    explanation: 'Choice B is correct. In a list where items contain internal commas ("species, both native and nonnative"), semicolons are used to separate the list items ("growing...; fostering...; and educating...").'
  },
  {
    id: 1126,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 26,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passageHtml: `<p class="mb-3">Sociologist Alton Okinaka sits on the review board tasked with adding new sites to the Hawai‘i Register of Historic Places, which includes Pi‘ilanihale Heiau and the ‘Ōpaeka‘a Road Bridge. Okinaka doesn’t make such decisions _______ all historical designations must be approved by a group of nine other experts from the fields of architecture, archaeology, history, and Hawaiian culture.</p>`,
    questionText: `Which choice completes the text so that it conforms to the conventions of Standard English?`,
    options: [
      { id: 'A', text: 'single-handedly, however;' },
      { id: 'B', text: 'single-handedly; however,' },
      { id: 'C', text: 'single-handedly, however,' },
      { id: 'D', text: 'single-handedly however' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "single-handedly, however;" sets off the transition "however" with a comma within the first clause and uses a semicolon to separate the two independent clauses.'
  },
  {
    id: 1127,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 27,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">In 1968, US Congressman John Conyers introduced a bill to establish a national holiday in honor of Dr. Martin Luther King Jr. The bill didn’t make it to a vote, but Conyers was determined. He teamed up with Shirley Chisholm, the first Black woman to be elected to Congress, and they resubmitted the bill every session for the next fifteen years. _______ in 1983, the bill passed.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Instead,' },
      { id: 'B', text: 'Likewise,' },
      { id: 'C', text: 'Finally,' },
      { id: 'D', text: 'Additionally,' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. "Finally" indicates the culmination after a long fifteen-year effort when the bill eventually passed.'
  },
  {
    id: 1128,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 28,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">Geoscientists have long considered Hawaii’s Mauna Loa volcano to be Earth’s largest shield volcano by volume, measuring approximately 74,000 cubic kilometers. _______ according to a 2020 study by local geoscientist Michael Garcia, Hawaii’s Pūhāhonu shield volcano is significantly larger, boasting a volume of about 148,000 cubic kilometers.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Secondly,' },
      { id: 'B', text: 'Consequently,' },
      { id: 'C', text: 'Moreover,' },
      { id: 'D', text: 'However,' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. "However" signals a contrast between long-held beliefs about Mauna Loa and Garcia’s new finding about Pūhāhonu.'
  },
  {
    id: 1129,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 29,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">Samuel Coleridge-Taylor was a prominent classical music composer from England who toured the US three times in the early 1900s. The child of a West African father and an English mother, Coleridge-Taylor emphasized his mixed-race ancestry. For example, he referred to himself as Anglo-African. _______ he incorporated the sounds of traditional African music into his classical music compositions.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'In addition,' },
      { id: 'B', text: 'Actually,' },
      { id: 'C', text: 'However,' },
      { id: 'D', text: 'Regardless,' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "In addition" adds another example of how Coleridge-Taylor emphasized his African heritage in his life and work.'
  },
  {
    id: 1130,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 30,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    passageHtml: `<p class="mb-3">In 2019, researcher Patricia Jurado Gonzalez and food historian Nawal Nasrallah prepared a stew from a 4,000-year-old recipe found on a Mesopotamian clay tablet. When they tasted the dish, known as <i>pašrūtum</i> (“unwinding”), they found that it had a mild taste and inspired a sense of calm. _______ the researchers, knowing that dishes were sometimes named after their intended effects, theorized that the dish’s name, “unwinding,” referred to its function: to help ancient diners relax.</p>`,
    questionText: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Therefore,' },
      { id: 'B', text: 'Alternately,' },
      { id: 'C', text: 'Nevertheless,' },
      { id: 'D', text: 'Likewise,' }
    ],
    correctAnswer: 'A',
    explanation: 'Choice A is correct. "Therefore" indicates that the researchers’ theory was a logical consequence of tasting the dish and experiencing its calming effect.'
  },
  {
    id: 1131,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 31,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>Chemical leavening agents cause carbon dioxide to be released within a liquid batter, making the batter rise as it bakes.</li><li>Baking soda and baking powder are chemical leavening agents.</li><li>Baking soda is pure sodium bicarbonate.</li><li>To produce carbon dioxide, baking soda needs to be mixed with liquid and an acidic ingredient such as honey.</li><li>Baking powder is a mixture of sodium bicarbonate and an acid.</li><li>To produce carbon dioxide, baking powder needs to be mixed with liquid but not with an acidic ingredient.</li></ul>`,
    questionText: `The student wants to emphasize a difference between baking soda and baking powder. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'To make batters rise, bakers use chemical leavening agents such as baking soda and baking powder.' },
      { id: 'B', text: 'Baking soda and baking powder are chemical leavening agents that, when mixed with other ingredients, cause carbon dioxide to be released within a batter.' },
      { id: 'C', text: 'Baking soda is pure sodium bicarbonate, and honey is a type of acidic ingredient.' },
      { id: 'D', text: 'To produce carbon dioxide within a liquid batter, baking soda needs to be mixed with an acidic ingredient, whereas baking powder does not.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. It directly contrasts baking soda (needs an acidic ingredient) with baking powder (does not need an acidic ingredient).'
  },
  {
    id: 1132,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 32,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>Soo Sunny Park is a Korean American artist who uses light as her primary medium of expression.</li><li>She created her work <i>Unwoven Light</i> in 2013.</li><li><i>Unwoven Light</i> featured a chain-link fence fitted with iridescent plexiglass tiles.</li><li>When light passed through the fence, colorful prisms formed.</li></ul>`,
    questionText: `The student wants to describe <i>Unwoven Light</i> to an audience unfamiliar with Soo Sunny Park. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'Park’s 2013 installation Unwoven Light, which included a chain-link fence and iridescent tiles made from plexiglass, featured light as its primary medium of expression.' },
      { id: 'B', text: 'Korean American light artist Soo Sunny Park created Unwoven Light in 2013.' },
      { id: 'C', text: 'The chain-link fence in Soo Sunny Park’s Unwoven Light was fitted with tiles made from iridescent plexiglass.' },
      { id: 'D', text: 'In Unwoven Light, a 2013 work by Korean American artist Soo Sunny Park, light formed colorful prisms as it passed through a fence Park had fitted with iridescent tiles.' }
    ],
    correctAnswer: 'D',
    explanation: 'Choice D is correct. It introduces Soo Sunny Park as a Korean American artist to an unfamiliar audience and describes how light formed prisms in her 2013 work <i>Unwoven Light</i>.'
  },
  {
    id: 1133,
    testId: 'test4',
    moduleKey: 'RW_1',
    section: 'Reading and Writing',
    type: "Reading and Writing",
    moduleNumber: 1,
    questionNumber: 33,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>Cambodia’s Angkor Wat was built in the 1100s to honor the Hindu god Vishnu.</li><li>It has been a Buddhist temple since the sixteenth century.</li><li>Decorrelation stretch analysis is a novel digital imaging technique that enhances the contrast between colors in a photograph.</li><li>Archaeologist Noel Hidalgo Tan applied decorrelation stretch analysis to photographs he had taken of Angkor Wat’s plaster walls.</li><li>Tan’s analysis revealed hundreds of images unknown to researchers.</li></ul>`,
    questionText: `The student wants to present Tan’s research to an audience unfamiliar with Angkor Wat. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
    options: [
      { id: 'A', text: 'Tan photographed Angkor Wat’s plaster walls and then applied decorrelation stretch analysis to the photographs.' },
      { id: 'B', text: 'Decorrelation stretch analysis is a novel digital imaging technique that Tan used to enhance the contrast between colors in a photograph.' },
      { id: 'C', text: 'Using a novel digital imaging technique, Tan revealed hundreds of images hidden on the walls of Angkor Wat, a Cambodian temple.' },
      { id: 'D', text: 'Built to honor a Hindu god before becoming a Buddhist temple, Cambodia’s Angkor Wat concealed hundreds of images on its plaster walls.' }
    ],
    correctAnswer: 'C',
    explanation: 'Choice C is correct. It presents Tan’s research outcome while introducing Angkor Wat as "a Cambodian temple" to an unfamiliar audience.'
  }
];
