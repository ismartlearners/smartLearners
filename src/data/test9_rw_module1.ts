import { Question } from '../types';

function makeTest9RW1Q13Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 350 390" class="w-full max-w-[340px] bg-white select-none">
      <!-- Title -->
      <text x="190" y="18" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Metal Content of Plants with</text>
      <text x="190" y="33" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">and without Kanamycin</text>
      <text x="190" y="48" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Exposure</text>

      <!-- Y-axis Title -->
      <text x="-155" y="18" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Metal content</text>
      <text x="-155" y="32" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">(parts per million)</text>

      <!-- Grid lines & Y-axis labels -->
      <!-- 700 -->
      <text x="63" y="68.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">700</text>
      <line x1="68" y1="65" x2="310" y2="65" stroke="#777777" stroke-width="0.75" />

      <!-- 600 -->
      <text x="63" y="93.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">600</text>
      <line x1="68" y1="90" x2="310" y2="90" stroke="#777777" stroke-width="0.75" />

      <!-- 500 -->
      <text x="63" y="118.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">500</text>
      <line x1="68" y1="115" x2="310" y2="115" stroke="#777777" stroke-width="0.75" />

      <!-- 400 -->
      <text x="63" y="143.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">400</text>
      <line x1="68" y1="140" x2="310" y2="140" stroke="#777777" stroke-width="0.75" />

      <!-- 300 -->
      <text x="63" y="168.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">300</text>
      <line x1="68" y1="165" x2="310" y2="165" stroke="#777777" stroke-width="0.75" />

      <!-- 200 -->
      <text x="63" y="193.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">200</text>
      <line x1="68" y1="190" x2="310" y2="190" stroke="#777777" stroke-width="0.75" />

      <!-- 100 -->
      <text x="63" y="218.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">100</text>
      <line x1="68" y1="215" x2="310" y2="215" stroke="#777777" stroke-width="0.75" />

      <!-- 0 -->
      <text x="63" y="243.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0</text>
      <line x1="68" y1="240" x2="310" y2="240" stroke="#777777" stroke-width="0.75" />

      <!-- Y-axis line -->
      <line x1="68" y1="65" x2="68" y2="240" stroke="#000000" stroke-width="1" />

      <!-- Bars: without kanamycin -->
      <!-- zinc (390) -->
      <rect x="100" y="142.5" width="28" height="97.5" fill="#bebebe" stroke="#000000" stroke-width="1" />
      <!-- iron (625) -->
      <rect x="128" y="83.75" width="28" height="156.25" fill="#555555" stroke="#000000" stroke-width="1" />

      <!-- Bars: with kanamycin -->
      <!-- zinc (300) -->
      <rect x="208" y="165" width="28" height="75" fill="#bebebe" stroke="#000000" stroke-width="1" />
      <!-- iron (225) -->
      <rect x="236" y="183.75" width="28" height="56.25" fill="#555555" stroke="#000000" stroke-width="1" />

      <!-- X-axis Labels (Rotated) -->
      <g transform="translate(128, 252) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">without kanamycin</text>
      </g>
      <g transform="translate(236, 252) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">with kanamycin</text>
      </g>

      <!-- X-axis Title -->
      <text x="189" y="342" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Experimental condition</text>

      <!-- Legend -->
      <rect x="133" y="354" width="112" height="22" fill="none" stroke="#777777" stroke-width="0.75" />
      <!-- Zinc swatch & label -->
      <rect x="141" y="360" width="12" height="10" fill="#bebebe" stroke="#000000" stroke-width="0.75" />
      <text x="158" y="369" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000">zinc</text>
      <!-- Iron swatch & label -->
      <rect x="193" y="360" width="12" height="10" fill="#555555" stroke="#000000" stroke-width="0.75" />
      <text x="210" y="369" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000">iron</text>
    </svg>
  </div>`;
}

function makeTest9RW1Q15Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 350 415" class="w-full max-w-[340px] bg-white select-none">
      <!-- Title -->
      <text x="190" y="18" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Percentage of Nonhexagonal Cells in</text>
      <text x="190" y="33" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Hives of Three Honeybee Species</text>

      <!-- Y-axis Title -->
      <text x="-135" y="16" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Average percentage of</text>
      <text x="-135" y="30" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">nonhexagonal cells by shape</text>

      <!-- Grid lines & Y-axis labels -->
      <!-- 3.0 -->
      <text x="58" y="58.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">3.0</text>
      <line x1="63" y1="55" x2="310" y2="55" stroke="#777777" stroke-width="0.75" />

      <!-- 2.5 -->
      <text x="58" y="86.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2.5</text>
      <line x1="63" y1="83" x2="310" y2="83" stroke="#777777" stroke-width="0.75" />

      <!-- 2.0 -->
      <text x="58" y="114.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2.0</text>
      <line x1="63" y1="111" x2="310" y2="111" stroke="#777777" stroke-width="0.75" />

      <!-- 1.5 -->
      <text x="58" y="142.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1.5</text>
      <line x1="63" y1="139" x2="310" y2="139" stroke="#777777" stroke-width="0.75" />

      <!-- 1.0 -->
      <text x="58" y="170.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">1.0</text>
      <line x1="63" y1="167" x2="310" y2="167" stroke="#777777" stroke-width="0.75" />

      <!-- 0.5 -->
      <text x="58" y="198.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0.5</text>
      <line x1="63" y1="195" x2="310" y2="195" stroke="#777777" stroke-width="0.75" />

      <!-- 0 -->
      <text x="58" y="226.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0</text>
      <line x1="63" y1="223" x2="310" y2="223" stroke="#777777" stroke-width="0.75" />

      <!-- Y-axis line -->
      <line x1="63" y1="55" x2="63" y2="223" stroke="#000000" stroke-width="1" />

      <!-- Group 1: black dwarf honeybee -->
      <!-- 5-sided (2.5) -->
      <rect x="84" y="83" width="16" height="140" fill="#7f8287" stroke="#000000" stroke-width="0.8" />
      <!-- 7-sided (2.4) -->
      <rect x="100" y="88.6" width="16" height="134.4" fill="#d6d8db" stroke="#000000" stroke-width="0.8" />

      <!-- Group 2: dwarf honeybee -->
      <!-- 5-sided (2.6) -->
      <rect x="160" y="77.4" width="16" height="145.6" fill="#7f8287" stroke="#000000" stroke-width="0.8" />
      <!-- 7-sided (2.1) -->
      <rect x="176" y="105.4" width="16" height="117.6" fill="#d6d8db" stroke="#000000" stroke-width="0.8" />
      <!-- 8-sided (0.2) -->
      <rect x="192" y="211.8" width="16" height="11.2" fill="#111111" stroke="#000000" stroke-width="0.8" />

      <!-- Group 3: western honeybee -->
      <!-- 5-sided (0.45) -->
      <rect x="238" y="197.8" width="16" height="25.2" fill="#7f8287" stroke="#000000" stroke-width="0.8" />
      <!-- 7-sided (0.38) -->
      <rect x="254" y="201.7" width="16" height="21.3" fill="#d6d8db" stroke="#000000" stroke-width="0.8" />
      <!-- 8-sided (0.08) -->
      <rect x="270" y="218.5" width="16" height="4.5" fill="#111111" stroke="#000000" stroke-width="0.8" />

      <!-- X-axis Labels (Rotated) -->
      <g transform="translate(100, 233) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">black dwarf honeybee</text>
      </g>
      <g transform="translate(176, 233) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">dwarf honeybee</text>
      </g>
      <g transform="translate(254, 233) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">western honeybee</text>
      </g>

      <!-- X-axis Title -->
      <text x="187" y="322" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Species</text>

      <!-- Legend (Vertically stacked) -->
      <rect x="130" y="334" width="114" height="66" fill="none" stroke="#777777" stroke-width="0.75" />
      <!-- 5-sided -->
      <rect x="138" y="341" width="12" height="10" fill="#7f8287" stroke="#000000" stroke-width="0.75" />
      <text x="156" y="350" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" fill="#000000">5-sided cells</text>
      <!-- 7-sided -->
      <rect x="138" y="361" width="12" height="10" fill="#d6d8db" stroke="#000000" stroke-width="0.75" />
      <text x="156" y="370" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" fill="#000000">7-sided cells</text>
      <!-- 8-sided -->
      <rect x="138" y="381" width="12" height="10" fill="#111111" stroke="#000000" stroke-width="0.75" />
      <text x="156" y="390" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" fill="#000000">8-sided cells</text>
    </svg>
  </div>`;
}

export const TEST9_RW_MODULE_1_QUESTIONS: Question[] = [
  {
    id: 901,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Autobiography A Crusade for Justice",
    passageHtml: `<p class="mb-4">The following text is adapted from Ida B. Wells’s 1970 autobiography <i>A Crusade for Justice</i>. Mr. Watts is a reference to George Frederic Watts, an English painter.</p><div class="pl-8 mb-4"><p class="mb-2">[Manchester’s] art galleries are so <u>arranged</u> that the name of every picture is plainly seen and one has no need of a catalogue to pick out the name and the artist. This is a convenience to the general public, which other art galleries, which shall be nameless, might copy to advantage. To her treasure of art Manchester has added Mr. Watts’ latest picture, the Good Samaritan.</p><p class="text-right text-xs text-slate-700">©1970 by the University of Chicago Press</p></div>`,
    questionText: "As used in the text, what does the word “arranged” most nearly mean?",
    options: [
      { id: "A", text: "Organized" },
      { id: "B", text: "Ranked" },
      { id: "C", text: "Scheduled" },
      { id: "D", text: "Discussed" }
    ],
    correctAnswer: "A",
    explanation: "In the context of setting up art galleries so that titles and artists are clearly displayed, 'arranged' most nearly means 'organized'."
  },
  {
    id: 902,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Ocean Wave Electricity Generation",
    passageHtml: `<p class="mb-3">One challenge of generating electricity from ocean waves is that wave power isn’t _______: it varies in unpredictable ways that pose technological and planning problems for electricity generation.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "accidental" },
      { id: "B", text: "confident" },
      { id: "C", text: "expensive" },
      { id: "D", text: "consistent" }
    ],
    correctAnswer: "D",
    explanation: "The text explains that wave power 'varies in unpredictable ways,' indicating that it lacks predictability or consistency. Thus, 'consistent' is the correct choice."
  },
  {
    id: 903,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "John Ashbery's Poetry",
    passageHtml: `<p class="mb-3">Due to their often strange images, highly experimental syntax, and opaque subject matter, many of John Ashbery’s poems can be quite difficult to _______ and thus are the object of heated debate among scholars.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "delegate" },
      { id: "B", text: "compose" },
      { id: "C", text: "interpret" },
      { id: "D", text: "renounce" }
    ],
    correctAnswer: "C",
    explanation: "Poems with 'strange images, highly experimental syntax, and opaque subject matter' are difficult to analyze or 'interpret', leading to scholar debates."
  },
  {
    id: 904,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Diego Velázquez's Global Influence",
    passageHtml: `<p class="mb-3">Diego Velázquez was the leading artist in the court of King Philip IV of Spain during the seventeenth century, but his influence was hardly _______ Spain: realist and impressionist painters around the world employed his techniques and echoed elements of his style.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "derived from" },
      { id: "B", text: "recognized in" },
      { id: "C", text: "confined to" },
      { id: "D", text: "repressed by" }
    ],
    correctAnswer: "C",
    explanation: "Because painters 'around the world' adopted his style, his influence was not restricted or 'confined to' Spain."
  },
  {
    id: 905,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Octavia Butler's Literary Career",
    passageHtml: `<p class="mb-3">Although science fiction was dominated mostly by white male authors when Octavia Butler, a Black woman, began writing, she did not view the genre as _______: Butler broke into the field with the publication of several short stories and her 1976 novel <i>Patternmaster</i>, and she later became the first science fiction writer to win a prestigious MacArthur Fellowship.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "legitimate" },
      { id: "B", text: "impenetrable" },
      { id: "C", text: "compelling" },
      { id: "D", text: "indecipherable" }
    ],
    correctAnswer: "B",
    explanation: "The text contrasts the male-dominated field with Butler's ability to 'break into the field,' meaning she did not see the genre as impossible to enter ('impenetrable')."
  },
  {
    id: 906,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Kira-Kira Novel Excerpt",
    passageHtml: `<p class="mb-3">The following text is adapted from Cynthia Kadohata’s 2004 novel <i>Kira-Kira</i>.</p><p class="mb-3"><u>[Uncle Katsuhisa] was as loud as my father was quiet.</u> Even when he wasn’t talking, he made a lot of noise, clearing his throat and sniffing and tapping his fingers.</p>`,
    questionText: "Which choice best describes the function of the underlined sentence?",
    options: [
      { id: "A", text: "It lists the kinds of topics Uncle Katsuhisa enjoys discussing." },
      { id: "B", text: "It suggests that Uncle Katsuhisa dislikes meeting new people." },
      { id: "C", text: "It contrasts Uncle Katsuhisa with the narrator’s father." },
      { id: "D", text: "It describes a conversation between the narrator and the narrator’s father." }
    ],
    correctAnswer: "C",
    explanation: "The underlined sentence explicitly compares Uncle Katsuhisa's loudness with the narrator's father's quietness, highlighting a contrast."
  },
  {
    id: 907,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Wakako Yamauchi Play Adaptation",
    passageHtml: `<p class="mb-3">Wakako Yamauchi is best known for <i>And the Soul Shall Dance</i>, her 1977 play about a Japanese American family in Southern California. The play is based on a short story Yamauchi had published three years earlier. Adapting the story wasn’t easy. Theater relies on dialogue between characters, but the original story features little dialogue and instead describes its characters’ silent thoughts. <u>To transform the story into a play, Yamauchi created situations where characters reveal their thoughts by speaking them aloud during conversations with each other.</u></p>`,
    questionText: "Which choice best describes the function of the underlined sentence in the text as a whole?",
    options: [
      { id: "A", text: "It offers information about how Yamauchi adapted her short story into a play." },
      { id: "B", text: "It argues that Yamauchi’s play influenced later playwrights." },
      { id: "C", text: "It explains why Yamauchi’s short story is better known than the play adaptation is." },
      { id: "D", text: "It describes how Yamauchi chose the actors who performed in the play." }
    ],
    correctAnswer: "A",
    explanation: "The sentence details the specific method Yamauchi used to convert her short story's internal thoughts into theatrical dialogue."
  },
  {
    id: 908,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Financial Risk Disclosure Study",
    passageHtml: `<p class="mb-3">In response to concerns that some recent financial crises were exacerbated by consumers misunderstanding risks associated with credit cards, loans, and other financial products, policymakers in many countries have instituted risk-disclosure requirements on sellers of those products. Enrique Seira et al. investigated a variety of risk-disclosure messages sent to thousands of credit card customers and found that the messages had only small and short-lived effects on behavior. Seira et al. asserted that such effects may nevertheless be worth pursuing, <u>given the negligible cost of messaging.</u></p>`,
    questionText: "Which choice best describes the function of the underlined portion in the text as a whole?",
    options: [
      { id: "A", text: "It notes a factor that led Seira et al. to not dismiss risk-disclosure messaging altogether despite their evidence of its limited utility." },
      { id: "B", text: "It acknowledges a type of risk-disclosure messaging that Seira et al. may not have fully accounted for in their study." },
      { id: "C", text: "It describes a consideration that explains why Seira et al. recommended risk-disclosure messaging even though its effects may be small relative to its costs." },
      { id: "D", text: "It points out a circumstance that Seira et al. conceded may make risk-disclosure messaging more effective than their study suggests." }
    ],
    correctAnswer: "A",
    explanation: "The negligible cost is the reason the researchers felt risk disclosures were still worth pursuing despite their small impact."
  },
  {
    id: 909,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Corporate Mergers and Consumer Prices",
    passageHtml: `<p class="mb-3"><b>Text 1</b><br>When companies in the same industry propose merging with one another, they often claim that the merger will benefit consumers by increasing efficiency and therefore lowering prices. Economist Ying Fan investigated this notion in the context of the United States newspaper market. She modeled a hypothetical merger of Minneapolis-area newspapers and found that subscription prices would rise following a merger.</p><p class="mb-3"><b>Text 2</b><br>Economists Dario Focarelli and Fabio Panetta have argued that research on the effect of mergers on prices has focused excessively on short-term effects, which tend to be adverse for consumers. Using the case of consumer banking in Italy, they show that over the long term (several years, in their study), the efficiency gains realized by merged companies do result in economic benefits for consumers.</p>`,
    questionText: "Based on the texts, how would Focarelli and Panetta (Text 2) most likely respond to Fan’s findings (Text 1)?",
    options: [
      { id: "A", text: "They would recommend that Fan compare the near-term effect of a merger on subscription prices in the Minneapolis area with the effect of a merger in another newspaper market." },
      { id: "B", text: "They would argue that over the long term the expenses incurred by the merged newspaper company will also increase." },
      { id: "C", text: "They would encourage Fan to investigate whether the projected effect on subscription prices persists over an extended period." },
      { id: "D", text: "They would claim that mergers have a different effect on consumer prices in the newspaper industry than in most other industries." }
    ],
    correctAnswer: "C",
    explanation: "Focarelli and Panetta argue that short-term price increases after a merger can give way to long-term efficiency gains and lower prices over an extended period."
  },
  {
    id: 910,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Pando Aspen Colony Decline",
    passageHtml: `<p class="mb-3">Utah is home to Pando, a colony of about 47,000 quaking aspen trees that all share a single root system. Pando is one of the largest single organisms by mass on Earth, but ecologists are worried that its growth is declining in part because of grazing by animals. The ecologists say that strong fences could prevent deer from eating young trees and help Pando start thriving again.</p>`,
    questionText: "According to the text, why are ecologists worried about Pando?",
    options: [
      { id: "A", text: "It isn’t growing at the same rate it used to." },
      { id: "B", text: "It isn’t producing young trees anymore." },
      { id: "C", text: "It can’t grow into new areas because it is blocked by fences." },
      { id: "D", text: "Its root system can’t support many more new trees." }
    ],
    correctAnswer: "A",
    explanation: "The text states that 'ecologists are worried that its growth is declining,' which means it is no longer growing at its previous rate."
  },
  {
    id: 911,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Dolphin Calf Recordings",
    passageHtml: `<p class="mb-3">In a study of bottlenose dolphins, biologist Laela S. Sayigh and a team of researchers analyzed recordings of female bottlenose dolphins interacting with their calves.</p><div class="my-3 text-xs border border-black rounded-md p-3 bg-white"><div class="font-bold text-center mb-2">Recordings of Female Bottlenose Dolphins with Their Calves</div><table class="w-full text-center border-collapse"><thead><tr class="border-b border-black"><th class="p-1">Dolphin ID</th><th class="p-1">Recording year</th></tr></thead><tbody><tr class="border-b border-black"><td class="p-1">FB07</td><td class="p-1">2012</td></tr><tr class="border-b border-black"><td class="p-1">FB25</td><td class="p-1">1989</td></tr><tr class="border-b border-black"><td class="p-1">FB43</td><td class="p-1">1992</td></tr><tr><td class="p-1">FB79</td><td class="p-1">2018</td></tr></tbody></table></div>`,
    questionText: "According to the table, in which year was the dolphin with the ID FB43 recorded with her calf?",
    options: [
      { id: "A", text: "1999" },
      { id: "B", text: "2012" },
      { id: "C", text: "2020" },
      { id: "D", text: "1992" }
    ],
    correctAnswer: "D",
    explanation: "The table row for Dolphin ID 'FB43' lists the recording year as 1992."
  },
  {
    id: 912,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Maximum Height of Maple Trees",
    passageHtml: `<p class="mb-3">For a school project, a forestry student needs to recommend a maple tree that is native to North America and won’t grow more than 60 feet in height. Based on the characteristics of five common maple trees, she has decided to select a _______</p><div class="my-3 text-xs border border-black rounded-md p-3 bg-white"><div class="font-bold text-center mb-2">Maximum Height of Maple Trees When Fully Grown</div><table class="w-full text-center border-collapse"><thead><tr class="border-b border-black"><th class="p-1">Tree type</th><th class="p-1">Maximum height (feet)</th><th class="p-1">Native to North America</th></tr></thead><tbody><tr class="border-b border-black"><td class="p-1">Sugar maple</td><td class="p-1">75</td><td class="p-1">yes</td></tr><tr class="border-b border-black"><td class="p-1">Silver maple</td><td class="p-1">70</td><td class="p-1">yes</td></tr><tr class="border-b border-black"><td class="p-1">Red maple</td><td class="p-1">60</td><td class="p-1">yes</td></tr><tr class="border-b border-black"><td class="p-1">Japanese maple</td><td class="p-1">25</td><td class="p-1">no</td></tr><tr><td class="p-1">Norway maple</td><td class="p-1">50</td><td class="p-1">no</td></tr></tbody></table></div>`,
    questionText: "Which choice most effectively uses data from the table to complete the text?",
    options: [
      { id: "A", text: "silver maple." },
      { id: "B", text: "sugar maple." },
      { id: "C", text: "red maple." },
      { id: "D", text: "Norway maple." }
    ],
    correctAnswer: "C",
    explanation: "The Red maple is native to North America ('yes') and has a maximum height of 60 feet, satisfying both criteria."
  },
  {
    id: 913,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Kanamycin Exposure and Plant Metal Content",
    passageHtml: `${makeTest9RW1Q13Svg()}<p class="mb-3 mt-4">Many plants lose their leaf color when exposed to kanamycin, an antibiotic produced by some soil microorganisms. Spelman College biologist Mentewab Ayalew and her colleagues hypothesized that plants’ response to kanamycin exposure involves altering their uptake of metals, such as iron and zinc. The researchers grew two groups of seedlings of the plant <i>Arabidopsis thaliana</i>, half of which were exposed to kanamycin and half of which were a control group without exposure to kanamycin, and measured the plants’ metal content five days after germination.</p>`,
    questionText: "Which choice best describes data in the graph that support Ayalew and her colleagues’ hypothesis?",
    options: [
      { id: "A", text: "The control plants contained higher levels of zinc than iron, but plants exposed to kanamycin contained higher levels of iron than zinc." },
      { id: "B", text: "Both groups of plants contained more than 200 parts per million of both iron and zinc." },
      { id: "C", text: "Zinc levels were around 300 parts per million in the control plants but nearly 400 parts per million in the plants exposed to kanamycin." },
      { id: "D", text: "The plants exposed to kanamycin showed lower levels of iron and zinc than the control plants did." }
    ],
    correctAnswer: "D",
    explanation: "Plants exposed to kanamycin had lower levels of both zinc (300 vs 390 ppm) and iron (220 vs 620 ppm) compared to the control group."
  },
  {
    id: 914,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Torpor and Arousal in Hibernators",
    passageHtml: `<div class="my-3 flex flex-col items-center select-none">
  <div class="w-full max-w-[360px] text-center font-serif text-[12.5px] leading-snug mb-2 text-black font-normal">
    Average Number and Duration of Torpor Bouts<br/>and Arousal Episodes for Alaska Marmots and<br/>Arctic Ground Squirrels, 2008–2011
  </div>
  <table class="w-full max-w-[360px] border-collapse border border-black text-[12.5px] font-serif text-black">
    <thead>
      <tr class="border-b border-black">
        <th class="border-r border-black p-1.5 font-normal text-center align-bottom w-[36%]">Feature</th>
        <th class="border-r border-black p-1.5 font-normal text-center align-bottom w-[32%]">Alaska marmots</th>
        <th class="p-1.5 font-normal text-center align-bottom w-[32%]">Arctic ground<br/>squirrels</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black">
        <td class="border-r border-black p-1.5 text-left">torpor bouts</td>
        <td class="border-r border-black p-1.5 text-center">12</td>
        <td class="p-1.5 text-center">10.5</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black p-1.5 text-left">duration per bout</td>
        <td class="border-r border-black p-1.5 text-center">13.81 days</td>
        <td class="p-1.5 text-center">16.77 days</td>
      </tr>
      <tr class="border-b border-black">
        <td class="border-r border-black p-1.5 text-left">arousal episodes</td>
        <td class="border-r border-black p-1.5 text-center">11</td>
        <td class="p-1.5 text-center">9.5</td>
      </tr>
      <tr>
        <td class="border-r border-black p-1.5 text-left">duration per episode</td>
        <td class="border-r border-black p-1.5 text-center">21.2 hours</td>
        <td class="p-1.5 text-center">14.2 hours</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="mb-3 mt-4">When hibernating, Alaska marmots and Arctic ground squirrels enter a state called torpor, which minimizes the energy their bodies need to function. Often a hibernating animal will temporarily come out of torpor (called an arousal episode) and its metabolic rate will rise, burning more of the precious energy the animal needs to survive the winter. Alaska marmots hibernate in groups and therefore burn less energy keeping warm during these episodes than they would if they were alone. A researcher hypothesized that because Arctic ground squirrels hibernate alone, they would likely exhibit longer bouts of torpor and shorter arousal episodes than Alaska marmots.</p>`,
    questionText: "Which choice best describes data from the table that support the researcher’s hypothesis?",
    options: [
      { id: "A", text: "The Alaska marmots’ arousal episodes lasted for days, while the Arctic ground squirrels’ arousal episodes lasted less than a day." },
      { id: "B", text: "The Alaska marmots and the Arctic ground squirrels both maintained torpor for several consecutive days per bout, on average." },
      { id: "C", text: "The Alaska marmots had shorter torpor bouts and longer arousal episodes than the Arctic ground squirrels did." },
      { id: "D", text: "The Alaska marmots had more torpor bouts than arousal episodes, but their arousal episodes were much shorter than their torpor bouts." }
    ],
    correctAnswer: "C",
    explanation: "Alaska marmots had a shorter torpor bout duration (13.81 days vs 16.77 days) and longer arousal episodes (21.2 hours vs 14.2 hours) compared to Arctic ground squirrels."
  },
  {
    id: 915,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Beehive Cell Shapes Across Species",
    passageHtml: `${makeTest9RW1Q15Svg()}<p class="mb-3 mt-4">Honeybee hives consist mainly of hexagonal (six-sided) units called cells, in which queens lay eggs. Hexagonal cells for eggs that develop into nonreproductive workers are smaller than those for eggs that develop into reproductive drones, though the size difference varies by species. Difference in cell size results in a construction problem—it’s hard to neatly connect sections of small cells to sections of large cells—that worsens as the difference increases. To fill in gaps between the sections when building a hive, bees rely on cells that have more or fewer than six sides. A student studying beehive structure consults data on three species, concluding that _______</p>`,
    questionText: "Which choice most effectively uses data from the graph to complete the student’s conclusion?",
    options: [
      { id: "A", text: "cells for worker eggs are probably closer in size to cells for drone eggs in the hives of the western honeybee than in the hives of the dwarf honeybee and the black dwarf honeybee." },
      { id: "B", text: "both the western honeybee and the black dwarf honeybee probably reserve eight-sided cells for drone eggs, while the dwarf honeybee likely deposits drone eggs in seven-sided cells." },
      { id: "C", text: "the western honeybee probably relies on many more geometrical shapes when constructing cells than either the dwarf honeybee or the black dwarf honeybee does." },
      { id: "D", text: "the percentage of hexagonal cells is probably slightly lower in the hives of the western honeybee than in the hives of the dwarf honeybee and the black dwarf honeybee." }
    ],
    correctAnswer: "A",
    explanation: "Because western honeybees have much lower percentages of nonhexagonal cells, the cell size gap between worker and drone cells is smaller in western honeybee hives."
  },
  {
    id: 916,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "ALSOL Microcredit in Mexico",
    passageHtml: `<p class="mb-3">ALSOL is a microcredit program in Mexico that makes small loans to female entrepreneurs who lack the collateral and credit history to secure financing from conventional banks. Borrowers use their business proceeds to repay loans in equal weekly installments and incur no penalty for missed payments other than lack of access to larger loans. Economists Gustavo Barboza and Sandra Trejos analyzed ALSOL data and found that rural borrowers, who mostly make and sell handicrafts, miss payments more often than urban borrowers do, partly because they sell their goods less frequently than they could. Barboza and Trejos claim that this behavior reflects strategic decisions that enable rural women to increase their profits per unit sold.</p>`,
    questionText: "Which finding, if true, would most directly support Barboza and Trejos’s claim?",
    options: [
      { id: "A", text: "Many marketplaces require entrepreneurs to pay marketplace operators a fixed percentage of each day’s proceeds in exchange for permission to sell goods there." },
      { id: "B", text: "Rural entrepreneurs can typically sell their goods for higher prices in cities than in their home areas, but the number of people selling competing goods tends to be higher in cities." },
      { id: "C", text: "Due to the lower costs they incur, rural entrepreneurs tend to require smaller initial loans than urban entrepreneurs do." },
      { id: "D", text: "The cost to rural entrepreneurs to bring their goods to towns with marketplaces is high but largely independent of the number of goods they bring." }
    ],
    correctAnswer: "D",
    explanation: "If travel cost is high but independent of volume, making fewer trips with more inventory lowers per-unit transportation costs and maximizes per-unit profit."
  },
  {
    id: 917,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Philosophers in Judicial Opinions",
    passageHtml: `<p class="mb-3">In documents called judicial opinions, judges explain the reasoning behind their legal rulings, and in those explanations they sometimes cite and discuss historical and contemporary philosophers. Legal scholar and philosopher Anita L. Allen argues that while judges are naturally inclined to mention philosophers whose views align with their own positions, the strongest judicial opinions consider and rebut potential objections; discussing philosophers whose views conflict with judges’ views could therefore _______</p>`,
    questionText: "Which choice most logically completes the text?",
    options: [
      { id: "A", text: "allow judges to craft judicial opinions without needing to consult philosophical works." },
      { id: "B", text: "help judges improve the arguments they put forward in their judicial opinions." },
      { id: "C", text: "make judicial opinions more comprehensible to readers without legal or philosophical training." },
      { id: "D", text: "bring judicial opinions in line with views that are broadly held among philosophers." }
    ],
    correctAnswer: "B",
    explanation: "Because considering and rebutting opposing views yields the 'strongest' opinions, engaging with conflicting philosophers helps judges refine and improve their arguments."
  },
  {
    id: 918,
    type: "Reading and Writing",
    module: 1,
    domain: "Information and Ideas",
    passageTitle: "Military Veterans in Government Jobs",
    passageHtml: `<p class="mb-3">Although military veterans make up a small proportion of the total population of the United States, they occupy a significantly higher proportion of the jobs in the civilian government. One possible explanation for this disproportionate representation is that military service familiarizes people with certain organizational structures that are also reflected in the civilian government bureaucracy, and this familiarity thus _______</p>`,
    questionText: "Which choice most logically completes the text?",
    options: [
      { id: "A", text: "makes civilian government jobs especially appealing to military veterans." },
      { id: "B", text: "alters the typical relationship between military service and subsequent career preferences." },
      { id: "C", text: "encourages nonveterans applying for civilian government jobs to consider military service instead." },
      { id: "D", text: "increases the number of civilian government jobs that require some amount of military experience to perform." }
    ],
    correctAnswer: "A",
    explanation: "Familiarity with bureaucracy logically makes civilian government roles appealing to veterans, explaining why they fill a higher percentage of these positions."
  },
  {
    id: 919,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Mary Golda Ross NASA Contributions",
    passageHtml: `<p class="mb-3">A member of the Cherokee Nation, Mary Golda Ross is renowned for her contributions to NASA’s Planetary Flight Handbook, which _______ detailed mathematical guidance for missions to Mars and Venus.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "provided" },
      { id: "B", text: "having provided" },
      { id: "C", text: "to provide" },
      { id: "D", text: "providing" }
    ],
    correctAnswer: "A",
    explanation: "The relative pronoun 'which' introduces a dependent clause requiring a finite past-tense verb ('provided')."
  },
  {
    id: 920,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Chutes and Ladders Nepalese Origins",
    passageHtml: `<p class="mb-3">The classic children’s board game Chutes and Ladders is a version of an ancient Nepalese game, Paramapada Sopanapata. In both games, players encounter “good” or “bad” spaces while traveling along a path; landing on one of the good spaces _______ a player to skip ahead and arrive closer to the end goal.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "allows" },
      { id: "B", text: "are allowing" },
      { id: "C", text: "have allowed" },
      { id: "D", text: "allow" }
    ],
    correctAnswer: "A",
    explanation: "The subject of the clause is the gerund phrase 'landing on one of the good spaces', which is singular and requires the singular verb 'allows'."
  },
  {
    id: 921,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Chiura Obata Yosemite Woodcuts",
    passageHtml: `<p class="mb-3">In 1930, Japanese American artist Chiura Obata depicted the natural beauty of Yosemite National Park in two memorable woodcuts: <i>Evening at Carl Inn</i> and <i>Lake Basin in the High Sierra</i>. In 2019, _______ exhibited alongside 150 of Obata’s other works in a single-artist show at the Smithsonian American Art Museum.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "it was" },
      { id: "B", text: "they were" },
      { id: "C", text: "this was" },
      { id: "D", text: "some were" }
    ],
    correctAnswer: "B",
    explanation: "The antecedent is the plural 'two memorable woodcuts,' which requires the plural pronoun and verb 'they were'."
  },
  {
    id: 922,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Gil Scott-Heron Bluesologist Moniker",
    passageHtml: `<p class="mb-3">Journalists have dubbed Gil Scott-Heron the “godfather of rap,” a title that has appeared in hundreds of articles about him since the 1990s. Scott-Heron himself resisted the godfather _______ feeling that it didn’t encapsulate his devotion to the broader African American blues music tradition as well as “bluesologist,” the moniker he preferred.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "nickname, however" },
      { id: "B", text: "nickname, however;" },
      { id: "C", text: "nickname, however," },
      { id: "D", text: "nickname; however," }
    ],
    correctAnswer: "C",
    explanation: "The conjunctive adverb 'however' is used parenthetically here, set off by commas: 'nickname, however, feeling...'."
  },
  {
    id: 923,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Stomata Guard Cells Discovery",
    passageHtml: `<p class="mb-3">Stomata, tiny pore structures in a leaf that absorb gases needed for plant growth, open when guard cells surrounding each pore swell with water. In a pivotal 2007 article, plant cell _______ showed that lipid molecules called phosphatidylinositol phosphates are responsible for signaling guard cells to open stomata.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "biologist, Yuree Lee" },
      { id: "B", text: "biologist Yuree Lee," },
      { id: "C", text: "biologist Yuree Lee" },
      { id: "D", text: "biologist, Yuree Lee," }
    ],
    correctAnswer: "C",
    explanation: "When a title/noun phrase ('plant cell biologist') directly precedes a proper name ('Yuree Lee') without an article, no commas should set off the name."
  },
  {
    id: 924,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Neolithic Milk Preservation Strategies",
    passageHtml: `<p class="mb-3">As cheesemaking practices spread throughout Europe and Asia during and after the Neolithic, divergent strategies for preserving milk _______ whereas rennet-coagulated cheesemaking became key to milk preservation in Europe and Southwest Asia, acid-heat coagulation methods became common among nomadic herding populations of the northeastern Eurasian steppe.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "emerged" },
      { id: "B", text: "emerged and" },
      { id: "C", text: "emerged:" },
      { id: "D", text: "emerged," }
    ],
    correctAnswer: "C",
    explanation: "A colon is appropriate after an independent clause ('divergent strategies for preserving milk emerged:') to introduce an elaboration or explanation."
  },
  {
    id: 925,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Aran Islands Holocene Trees Hypothesis",
    passageHtml: `<p class="mb-3">Recent pollen analyses of the Aran Islands have led some researchers to propose that the now treeless islands were once wooded. This hypothesis _______ that certain trees, such as <i>P. sylvestris</i>, survived without interruption or human intervention throughout the Holocene cannot stand, researchers Michael O’Connell and Karen Molloy counter, unless other explanations can first be ruled out.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "suggesting" },
      { id: "B", text: "suggested" },
      { id: "C", text: "suggests" },
      { id: "D", text: "has suggested" }
    ],
    correctAnswer: "A",
    explanation: "The participle 'suggesting' creates a non-finite modifier ('This hypothesis suggesting that...') where the main verb of the subject 'This hypothesis' is 'cannot stand'."
  },
  {
    id: 926,
    type: "Reading and Writing",
    module: 1,
    domain: "Standard English Conventions",
    passageTitle: "Terra-cotta Army Ears Uniqueness",
    passageHtml: `<p class="mb-3">Researchers studying the “terra-cotta army,” the thousands of life-size statues of warriors found interred near the tomb of Emperor Qin Shi Huang of China, were shocked to realize that the shape of each statue’s ears, like the shape of each person’s ears, _______ unique.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "are" },
      { id: "B", text: "is" },
      { id: "C", text: "were" },
      { id: "D", text: "have been" },
    ],
    correctAnswer: "B",
    explanation: "The grammatical subject is 'the shape' (singular), which requires the singular present tense verb 'is'."
  },
  {
    id: 927,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Americanah Novel Plot Comparison",
    passageHtml: `<p class="mb-3">Chimamanda Ngozi Adichie’s 2013 novel <i>Americanah</i> chronicles the divergent experiences of Ifemelu and Obinze, a young Nigerian couple, after high school. Ifemelu moves to the United States to attend a prestigious university. ______ Obinze travels to London, hoping to start a career there. However, frustrated with the lack of opportunities, he soon returns to Nigeria.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Meanwhile," },
      { id: "B", text: "Nevertheless," },
      { id: "C", text: "Secondly," },
      { id: "D", text: "In fact," }
    ],
    correctAnswer: "A",
    explanation: "'Meanwhile' logically connects the simultaneous parallel event of Obinze traveling to London while Ifemelu moves to the United States."
  },
  {
    id: 928,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Supreme Court Televised Arguments Concerns",
    passageHtml: `<p class="mb-3">Some members of the US Supreme Court have resisted calls to televise the court’s oral arguments, concerned that the participants would be tempted to perform for the cameras (and thus lower the quality of the discourse). _______ the justices worry that most viewers would not even watch the full deliberations, only short clips that could be misinterpreted and mischaracterized.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "However," },
      { id: "B", text: "Additionally," },
      { id: "C", text: "In comparison," },
      { id: "D", text: "For example," }
    ],
    correctAnswer: "B",
    explanation: "'Additionally' adds a second reason for the justices' resistance to televising oral arguments."
  },
  {
    id: 929,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Animal Behaviors and Brain Size",
    passageHtml: `<p class="mb-3">The more diverse and wide ranging an animal’s behaviors, the larger and more energy demanding the animal’s brain tends to be. ______ from an evolutionary perspective, animals that perform only basic actions should allocate fewer resources to growing and maintaining brain tissue. The specialized subtypes of ants within colonies provide an opportunity to explore this hypothesis.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Subsequently," },
      { id: "B", text: "Besides," },
      { id: "C", text: "Nevertheless," },
      { id: "D", text: "Thus," }
    ],
    correctAnswer: "D",
    explanation: "'Thus' introduces a logical conclusion derived directly from the relationship described in the first sentence."
  },
  {
    id: 930,
    type: "Reading and Writing",
    module: 1,
    domain: "Craft and Structure",
    passageTitle: "Firefly Abdomen Oxygen Reaction",
    passageHtml: `<p class="mb-3">A firefly uses specialized muscles to draw oxygen into its lower abdomen through narrow tubes, triggering a chemical reaction whereby the oxygen combines with chemicals in the firefly’s abdomen to produce a glow. _______ when the firefly stops drawing in oxygen, the reaction—and the glow—cease.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "For instance," },
      { id: "B", text: "By contrast," },
      { id: "C", text: "Specifically," },
      { id: "D", text: "In conclusion," }
    ],
    correctAnswer: "B",
    explanation: "'By contrast' highlights the opposite scenario: what happens when oxygen is no longer drawn in versus when it is drawn in."
  },
  {
    id: 931,
    type: "Reading and Writing",
    module: 1,
    domain: "Expression of Ideas",
    passageTitle: "Mars Exploration Microprobes",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>NASA uses rovers, large remote vehicles with wheels, to explore the surface of Mars.</li><li>NASA’s rovers can’t explore regions inaccessible to wheeled vehicles.</li><li>Rovers are also heavy, making them difficult to land on the planet’s surface.</li><li>Microprobes, robotic probes that weigh as little as 50 milligrams, could be deployed virtually anywhere on the surface of Mars.</li><li>Microprobes have been proposed as an alternative to rovers.</li></ul>`,
    questionText: "The student wants to explain an advantage of microprobes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "Despite being heavy, NASA’s rovers can land successfully on the surface of Mars." },
      { id: "B", text: "Microprobes, which weigh as little as 50 milligrams, could explore areas of Mars that are inaccessible to NASA’s heavy, wheeled rovers." },
      { id: "C", text: "NASA currently uses its rovers on Mars, but microprobes have been proposed as an alternative." },
      { id: "D", text: "Though they are different sizes, both microprobes and rovers can be used to explore the surface of Mars." }
    ],
    correctAnswer: "B",
    explanation: "Choice B highlights the specific advantages of microprobes: lightweight (50 mg) and capable of exploring areas inaccessible to heavy rovers."
  },
  {
    id: 932,
    type: "Reading and Writing",
    module: 1,
    domain: "Expression of Ideas",
    passageTitle: "Severo Ochoa PNPase Discovery",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>Severo Ochoa discovered the enzyme PNPase in 1955.</li><li>PNPase is involved in both the creation and degradation of mRNA.</li><li>Ochoa incorrectly hypothesized that PNPase provides the genetic blueprints for mRNA.</li><li>The discovery of PNPase proved critical to deciphering the human genetic code.</li><li>Deciphering the genetic code has led to a better understanding of how genetic variations affect human health.</li></ul>`,
    questionText: "The student wants to emphasize the significance of Ochoa’s discovery. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "Ochoa’s 1955 discovery of PNPase proved critical to deciphering the human genetic code, leading to a better understanding of how genetic variations affect human health." },
      { id: "B", text: "Ochoa first discovered PNPase, an enzyme that he hypothesized contained the genetic blueprints for mRNA, in 1955." },
      { id: "C", text: "In 1955, Ochoa discovered the PNPase enzyme, which is involved in both the creation and degradation of mRNA." },
      { id: "D", text: "Though his discovery of PNPase was critical to deciphering the human genetic code, Ochoa incorrectly hypothesized that the enzyme was the source of mRNA’s genetic blueprints." }
    ],
    correctAnswer: "A",
    explanation: "Choice A directly focuses on why the discovery was significant (critical to deciphering genetic code and improving health understanding)."
  },
  {
    id: 933,
    type: "Reading and Writing",
    module: 1,
    domain: "Expression of Ideas",
    passageTitle: "Cecilia Vicuña Poetry Collections",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p><ul class="list-disc pl-5 mb-3 space-y-1"><li>Cecilia Vicuña is a multidisciplinary artist.</li><li>In 1971, her first solo art exhibition, <i>Pinturas, poemas y explicaciones</i>, was shown at the Museo Nacional de Bellas Artes in Santiago, Chile.</li><li>Her poetry collection <i>Precario/Precarious</i> was published in 1983 by Tanam Press.</li><li>Her poetry collection <i>Instan</i> was published in 2002 by Kelsey St. Press.</li><li>She lives part time in Chile, where she was born, and part time in New York.</li></ul>`,
    questionText: "The student wants to introduce the artist’s 1983 poetry collection. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "Before she published the books <i>Precario/Precarious</i> (1983) and <i>Instan</i> (2002), Cecilia Vicuña exhibited visual art at the Museo Nacional de Bellas Artes in Santiago, Chile." },
      { id: "B", text: "Cecilia Vicuña is a true multidisciplinary artist whose works include numerous poetry collections and visual art exhibitions." },
      { id: "C", text: "Published in 1983 by Tanam Press, <i>Precario/Precarious</i> is a collection of poetry by the multidisciplinary artist Cecilia Vicuña." },
      { id: "D", text: "In 1971, Cecilia Vicuña exhibited her first solo art exhibition, <i>Pinturas, poemas y explicaciones</i>, in Chile, her country of birth." }
    ],
    correctAnswer: "C",
    explanation: "Choice C directly introduces the 1983 poetry collection *Precario/Precarious*."
  }
];
