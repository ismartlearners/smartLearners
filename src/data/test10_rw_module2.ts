import { Question } from '../types';

function makeTest10RW2Q11Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 340 370" class="w-full max-w-[330px] bg-white select-none">
      <!-- Title -->
      <text x="170" y="18" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Top Four Species of Wild Land</text>
      <text x="170" y="33" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="#000000">Mammals by Global Biomass</text>

      <!-- Y-axis Title -->
      <text x="-130" y="16" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Global biomass (millions</text>
      <text x="-130" y="29" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">of metric tons)</text>

      <!-- Grid lines & Y-axis labels -->
      <!-- 3.0 -->
      <text x="58" y="58.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">3.0</text>
      <line x1="63" y1="55" x2="280" y2="55" stroke="#000000" stroke-width="0.75" />

      <!-- 2.5 -->
      <text x="58" y="83.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">2.5</text>
      <line x1="63" y1="80" x2="280" y2="80" stroke="#000000" stroke-width="0.75" />

      <!-- 2.0 -->
      <text x="58" y="108.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">2.0</text>
      <line x1="63" y1="105" x2="280" y2="105" stroke="#000000" stroke-width="0.75" />

      <!-- 1.5 -->
      <text x="58" y="133.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">1.5</text>
      <line x1="63" y1="130" x2="280" y2="130" stroke="#000000" stroke-width="0.75" />

      <!-- 1.0 -->
      <text x="58" y="158.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">1.0</text>
      <line x1="63" y1="155" x2="280" y2="155" stroke="#000000" stroke-width="0.75" />

      <!-- 0.5 -->
      <text x="58" y="183.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">0.5</text>
      <line x1="63" y1="180" x2="280" y2="180" stroke="#000000" stroke-width="0.75" />

      <!-- 0 -->
      <text x="58" y="208.5" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">0</text>
      <line x1="63" y1="205" x2="280" y2="205" stroke="#000000" stroke-width="0.75" />

      <!-- Y-axis line -->
      <line x1="63" y1="55" x2="63" y2="205" stroke="#000000" stroke-width="1" />

      <!-- Bars -->
      <!-- African bush elephant (1.3) -->
      <rect x="85" y="140" width="26" height="65" fill="#bebebe" stroke="#000000" stroke-width="0.85" />

      <!-- eastern gray kangaroo (0.6) -->
      <rect x="135" y="175" width="26" height="30" fill="#bebebe" stroke="#000000" stroke-width="0.85" />

      <!-- wild boar (1.9) -->
      <rect x="185" y="110" width="26" height="95" fill="#bebebe" stroke="#000000" stroke-width="0.85" />

      <!-- white-tailed deer (2.7) -->
      <rect x="235" y="70" width="26" height="135" fill="#bebebe" stroke="#000000" stroke-width="0.85" />

      <!-- X-axis Labels (Rotated) -->
      <g transform="translate(104, 216) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">African bush elephant</text>
      </g>
      <g transform="translate(154, 216) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">eastern gray kangaroo</text>
      </g>
      <g transform="translate(204, 216) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">wild boar</text>
      </g>
      <g transform="translate(254, 216) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">white-tailed deer</text>
      </g>

      <!-- Legend -->
      <rect x="135" y="325" width="70" height="20" fill="none" stroke="#777777" stroke-width="0.75" />
      <rect x="141" y="330" width="10" height="10" fill="#bebebe" stroke="#000000" stroke-width="0.75" />
      <text x="156" y="339" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000">species</text>
    </svg>
  </div>`;
}

function makeTest10RW2Q13Svg(): string {
  return `<div class="my-3 flex flex-col items-center">
    <svg viewBox="0 0 350 380" class="w-full max-w-[340px] bg-white select-none">
      <!-- Title -->
      <text x="175" y="16" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Power Conversion Efficiency of</text>
      <text x="175" y="30" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Lowest and Highest Performing</text>
      <text x="175" y="44" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Spin-coated and Spray-coated</text>
      <text x="175" y="58" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" text-anchor="middle" fill="#000000">Electron Transport Layers</text>

      <!-- Y-axis Title -->
      <text x="-150" y="18" transform="rotate(-90)" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Power conversion efficiency (%)</text>

      <!-- Grid lines & Y-axis labels -->
      <!-- 18 -->
      <text x="50" y="73.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">18</text>
      <line x1="55" y1="70" x2="275" y2="70" stroke="#000000" stroke-width="0.75" />

      <!-- 16 -->
      <text x="50" y="91.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">16</text>
      <line x1="55" y1="88" x2="275" y2="88" stroke="#000000" stroke-width="0.75" />

      <!-- 14 -->
      <text x="50" y="109.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">14</text>
      <line x1="55" y1="106" x2="275" y2="106" stroke="#000000" stroke-width="0.75" />

      <!-- 12 -->
      <text x="50" y="127.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">12</text>
      <line x1="55" y1="124" x2="275" y2="124" stroke="#000000" stroke-width="0.75" />

      <!-- 10 -->
      <text x="50" y="145.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">10</text>
      <line x1="55" y1="142" x2="275" y2="142" stroke="#000000" stroke-width="0.75" />

      <!-- 8 -->
      <text x="50" y="163.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">8</text>
      <line x1="55" y1="160" x2="275" y2="160" stroke="#000000" stroke-width="0.75" />

      <!-- 6 -->
      <text x="50" y="181.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">6</text>
      <line x1="55" y1="178" x2="275" y2="178" stroke="#000000" stroke-width="0.75" />

      <!-- 4 -->
      <text x="50" y="199.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">4</text>
      <line x1="55" y1="196" x2="275" y2="196" stroke="#000000" stroke-width="0.75" />

      <!-- 2 -->
      <text x="50" y="217.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">2</text>
      <line x1="55" y1="214" x2="275" y2="214" stroke="#000000" stroke-width="0.75" />

      <!-- 0 -->
      <text x="50" y="235.5" font-family="Georgia, 'Times New Roman', serif" font-size="10" text-anchor="end" fill="#000000">0</text>
      <line x1="55" y1="232" x2="275" y2="232" stroke="#000000" stroke-width="0.75" />

      <!-- Y-axis line -->
      <line x1="55" y1="70" x2="55" y2="232" stroke="#000000" stroke-width="1" />

      <!-- Bars: lowest performing -->
      <!-- spray coating (15.5) -->
      <rect x="85" y="92.5" width="28" height="139.5" fill="#bebebe" stroke="#000000" stroke-width="0.85" />
      <!-- spin coating (11.8) -->
      <rect x="113" y="125.8" width="28" height="106.2" fill="#555555" stroke="#000000" stroke-width="0.85" />

      <!-- Bars: highest performing -->
      <!-- spray coating (17.3) -->
      <rect x="187" y="76.3" width="28" height="155.7" fill="#bebebe" stroke="#000000" stroke-width="0.85" />
      <!-- spin coating (13.6) -->
      <rect x="215" y="109.6" width="28" height="122.4" fill="#555555" stroke="#000000" stroke-width="0.85" />

      <!-- X-axis Labels (Rotated) -->
      <g transform="translate(113, 243) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">lowest performing</text>
      </g>
      <g transform="translate(215, 243) rotate(-40)">
        <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="end" fill="#000000">highest performing</text>
      </g>

      <!-- Thickness title -->
      <text x="165" y="324" font-family="Georgia, 'Times New Roman', serif" font-size="11" text-anchor="middle" fill="#000000">Thickness</text>

      <!-- Legend -->
      <rect x="75" y="338" width="180" height="22" fill="none" stroke="#777777" stroke-width="0.75" />
      <!-- spray coating swatch & label -->
      <rect x="85" y="344" width="12" height="10" fill="#bebebe" stroke="#000000" stroke-width="0.75" />
      <text x="102" y="353" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000">spray coating</text>
      <!-- spin coating swatch & label -->
      <rect x="173" y="344" width="12" height="10" fill="#555555" stroke="#000000" stroke-width="0.75" />
      <text x="190" y="353" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#000000">spin coating</text>
    </svg>
  </div>`;
}

export const TEST2_RW_MODULE_2_QUESTIONS: Question[] = [
  {
    id: 234,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Sequoyah's Cherokee Script",
    passageHtml: `<p class="mb-3">In the early 1800s, the Cherokee scholar Sequoyah created the first script, or writing system, for an Indigenous language in the United States. Because it represented the sounds of spoken Cherokee so accurately, his script was easy to learn and thus quickly achieved ________ use: by 1830, over 90 percent of the Cherokee people could read and write it.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "widespread" },
      { id: "B", text: "careful" },
      { id: "C", text: "unintended" },
      { id: "D", text: "infrequent" }
    ],
    correctAnswer: "A",
    explanation: "Over 90 percent of the Cherokee people reading and writing it indicates 'widespread' use."
  },
  {
    id: 235,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Neuroscience of Infant Hiccups",
    passageHtml: `<p class="mb-3">Researchers have struggled to pinpoint specific causes for hiccups, which happen when a person’s diaphragm contracts ________. However, neuroscientist Kimberley Whitehead has found that these uncontrollable contractions may play an important role in helping infants regulate their breathing.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "involuntarily" },
      { id: "B", text: "beneficially" },
      { id: "C", text: "strenuously" },
      { id: "D", text: "smoothly" }
    ],
    correctAnswer: "A",
    explanation: "The text notes that hiccups are 'uncontrollable contractions', which means they contract 'involuntarily'."
  },
  {
    id: 236,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Aztec Province of Xoconochco",
    passageHtml: `<p class="mb-3">The province of Xoconochco was situated on the Pacific coast, hundreds of kilometers southeast of Tenochtitlan, the capital of the Aztec Empire. Because Xoconochco’s location within the empire was so ________, cacao and other trade goods produced there could reach the capital only after a long overland journey.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "unobtrusive" },
      { id: "B", text: "concealed" },
      { id: "C", text: "approximate" },
      { id: "D", text: "peripheral" }
    ],
    correctAnswer: "D",
    explanation: "Being 'hundreds of kilometers southeast' on the coast far from the capital means the location was 'peripheral' (outer/remote)."
  },
  {
    id: 237,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Retirement Funds Transfers",
    passageHtml: `<p class="mb-3">Proposals to raise the age at which retirees begin receiving government transfers of funds are generally discussed in terms of the effects on transfer recipients, but Andria Smythe has argued that delaying such transfers could ________ wealth creation among working adults by lengthening the period in which they are providing financial support to their nonworking parents.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "stymie" },
      { id: "B", text: "compound" },
      { id: "C", text: "disparage" },
      { id: "D", text: "outstrip" }
    ],
    correctAnswer: "A",
    explanation: "Lengthening the period working adults must financially support parents would hinder or 'stymie' their own wealth creation."
  },
  {
    id: 238,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Political Blogs in US Media",
    passageHtml: `<p class="mb-3">Political blogs with conspicuous ideological alignments became an integral component of US media in the early 2000s. While some commentators lauded this development, asserting that such blogs had a welcome transparency missing from traditional news, less ________ observers countered that such blogs tended to ideological extremes that exacerbated political polarization to problematic levels.</p>`,
    questionText: "Which choice completes the text with the most logical and precise word or phrase?",
    options: [
      { id: "A", text: "sanguine" },
      { id: "B", text: "recalcitrant" },
      { id: "C", text: "misanthropic" },
      { id: "D", text: "earnest" }
    ],
    correctAnswer: "A",
    explanation: "'Sanguine' means optimistic. 'Less sanguine' contrasts with commentators who welcomed the development."
  },
  {
    id: 239,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Adapted from 'Mañanaland'",
    passageHtml: `<p class="mb-4">The following text is adapted from Pam Muñoz Ryan’s 2020 novel <i>Mañanaland</i>. In the village where Max lives, there is an old fortress called La Reina. Children in the village say that the fortress is haunted.</p><div class="pl-8 mb-4"><p class="mb-2">For as long as he could remember, Max had begged Papá [his father] to take him to see La Reina and the ruins up close. He’d be a hero among his friends if he was the first boy to cross the haunted gates! Just because Papá didn’t believe in ghosts didn’t mean they weren’t there. Maybe this summer Papá would finally take him. He <i>was</i> almost twelve.</p><p class="text-right text-xs text-black">©2020 by Pam Muñoz Ryan</p></div>`,
    questionText: "Which choice best describes the overall purpose of the text?",
    options: [
      { id: "A", text: "To portray how proud Max’s father is of Max" },
      { id: "B", text: "To explain why Max doesn’t want to grow up yet" },
      { id: "C", text: "To criticize Max for disliking summer" },
      { id: "D", text: "To show how much Max wants to visit La Reina" }
    ],
    correctAnswer: "D",
    explanation: "The text focuses on Max begging his father to take him to see La Reina and dreaming of crossing its gates."
  },
  {
    id: 240,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Adapted from 'Pygmalion'",
    passageHtml: `<p class="mb-3">The following text is adapted from George Bernard Shaw’s 1912 play <i>Pygmalion</i>. Henry Higgins has just arrived at the house of his mother (Mrs. Higgins). She is expecting her friends to visit soon.</p>
    <p class="mb-3"><strong>MRS. HIGGINS:</strong> I’m serious, Henry. You offend all my friends: they stop coming whenever they meet you.<br />
    <strong>HIGGINS:</strong> Nonsense! I know I have no small talk; but people don’t mind.<br />
    <strong>MRS. HIGGINS:</strong> Oh! don’t they? Small talk indeed! What about your large talk? Really, dear, you mustn’t stay.</p>`,
    questionText: "Which choice best states the main purpose of the text?",
    options: [
      { id: "A", text: "To describe what Henry’s mother does when she goes out with her friends" },
      { id: "B", text: "To show that Henry’s mother wants him to leave" },
      { id: "C", text: "To present a detailed account of what Henry’s home looks like" },
      { id: "D", text: "To explain why Henry often visits his mother" }
    ],
    correctAnswer: "B",
    explanation: "Mrs. Higgins explicitly tells Henry 'Really, dear, you mustn’t stay' because he offends her guests."
  },
  {
    id: 241,
    type: "Reading and Writing",
    module: 2,
    domain: "Craft and Structure",
    passageTitle: "Excerpt from 'At Newport'",
    passageHtml: `<p class="mb-3">The following text is from Charlotte Forten Grimké’s 1888 poem “At Newport.”</p>
    <p class="mb-3">Oh, deep delight to watch the gladsome waves<br />
    Exultant leap upon the rugged rocks;<br />
    <u class="underline">Ever repulsed, yet ever rushing on—<br />
    Filled with a life that will not know defeat;</u><br />
    To see the glorious hues of sky and sea.<br />
    The distant snowy sails, glide spirit like,<br />
    Into an unknown world, to feel the sweet<br />
    Enchantment of the sea thrill all the soul,<br />
    Clearing the clouded brain, making the heart<br />
    Leap joyous as it own bright, singing waves!</p>`,
    questionText: "Which choice best describes the function of the underlined portion in the text as a whole?",
    options: [
      { id: "A", text: "It portrays the surroundings as an imposing and intimidating scene." },
      { id: "B", text: "It characterizes the sea’s waves as a relentless and enduring force." },
      { id: "C", text: "It conveys the speaker’s ambivalence about the natural world." },
      { id: "D", text: "It draws a contrast between the sea’s waves and the speaker’s thoughts." }
    ],
    correctAnswer: "B",
    explanation: "'Ever repulsed, yet ever rushing on' portrays the waves as a relentless, enduring force."
  },
  {
    id: 242,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Gins and Arakawa Apartment Design",
    passageHtml: `<p class="mb-3">Believing that living in an impractical space can heighten awareness and even improve health, conceptual artists Madeline Gins and Shusaku Arakawa designed an apartment building in Japan to be more fanciful than functional. A kitchen counter is chest-high on one side and knee-high on the other; a ceiling has a door to nowhere. The effect is disorienting but invigorating: after four years there, filmmaker Nobu Yamaoka reported significant health benefits.</p>`,
    questionText: "Which choice best states the main idea of the text?",
    options: [
      { id: "A", text: "Although inhabiting a home surrounded by fanciful features such as those designed by Gins and Arakawa can be rejuvenating, it is unsustainable." },
      { id: "B", text: "Designing disorienting spaces like those in the Gins and Arakawa building is the most effective way to create a physically stimulating environment." },
      { id: "C", text: "As a filmmaker, Yamaoka has long supported the designs of conceptual artists such as Gins and Arakawa." },
      { id: "D", text: "Although impractical, the design of the apartment building by Gins and Arakawa may improve the well-being of the building’s residents." }
    ],
    correctAnswer: "D",
    explanation: "The text explains that despite being impractical, the apartment building's design can invigorate residents and yield health benefits."
  },
  {
    id: 243,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Adapted from 'Sylvie and Bruno'",
    passageHtml: `<p class="mb-3">The following text is adapted from Lewis Carroll’s 1889 satirical novel <i>Sylvie and Bruno</i>. A crowd has gathered outside a room belonging to the Warden, an official who reports to the Lord Chancellor.</p>
    <p class="mb-3">One man, who was more excited than the rest, flung his hat high into the air, and shouted (as well as I could make out) “Who roar for the Sub-Warden?” Everybody roared, but whether it was for the Sub-Warden, or not, did not clearly appear: some were shouting “Bread!” and some “Taxes!”, but no one seemed to know what it was they really wanted.</p>
    <p class="mb-3">All this I saw from the open window of the Warden’s breakfast-saloon, looking across the shoulder of the Lord Chancellor.</p>
    <p class="mb-3">“What can it all mean?” he kept repeating to himself. “I never heard such shouting before—and at this time of the morning, too! And with such unanimity!”</p>`,
    questionText: "Based on the text, how does the Lord Chancellor respond to the crowd?",
    options: [
      { id: "A", text: "He asks about the meaning of the crowd’s shouting, even though he claims to know what the crowd wants." },
      { id: "B", text: "He indicates a desire to speak to the crowd, even though the crowd has asked to speak to the Sub-Warden." },
      { id: "C", text: "He expresses sympathy for the crowd’s demands, even though the crowd’s shouting annoys him." },
      { id: "D", text: "He describes the crowd as being united, even though the crowd clearly appears otherwise." }
    ],
    correctAnswer: "D",
    explanation: "He comments 'And with such unanimity!' even though people were shouting completely different things ('Bread!', 'Taxes!') and didn't know what they wanted."
  },
  {
    id: 244,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Global Biomass of Wild Land Mammals",
    passageHtml: `${makeTest10RW2Q11Svg()}
    <p class="mt-3">Global biomass is the total mass of living material, such as animals and plants, on Earth. A team of scientists estimated the global biomass, by species, of various wild land mammals. The team found that the species with the highest global biomass is the ________</p>`,
    questionText: "Which choice most effectively uses data from the graph to complete the sentence?",
    options: [
      { id: "A", text: "wild boar." },
      { id: "B", text: "eastern gray kangaroo." },
      { id: "C", text: "African bush elephant." },
      { id: "D", text: "white-tailed deer." }
    ],
    correctAnswer: "D",
    explanation: "According to the graph, the white-tailed deer has the highest global biomass at approximately 2.7 million metric tons, which is greater than that of the wild boar (1.9), African bush elephant (1.3), or eastern gray kangaroo (0.6)."
  },
  {
    id: 245,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Clamshell Tools in Neanderthal Cave",
    passageHtml: `<p class="mb-3">Studying tools unearthed at a cave site on the western coast of Italy, archaeologist Paola Villa and colleagues have determined that prehistoric Neanderthal groups fashioned them from shells of clams that they harvested from the seafloor while wading or diving or that washed up on the beach. Clamshells become thin and eroded as they wash up on the beach, while those on the seafloor are smooth and sturdy, so the research team suspects that Neanderthals prized the tools made with seafloor shells. However, the team also concluded that those tools were likely more challenging to obtain, noting that ________</p>
    
    <div class="my-3 overflow-x-auto">
      <div class="text-center font-serif text-sm font-semibold text-black mb-2">Number and Origin of Clamshell Tools Found at Different Levels Below the Surface in Neanderthal Cave</div>
      <table class="w-full text-sm text-left text-black border border-black">
        <thead class="bg-white font-semibold border-b border-black">
          <tr>
            <th class="p-2 border-r">Depth of tools found below surface in cave (meters)</th>
            <th class="p-2 border-r">Clamshells that Neanderthals collected from the beach</th>
            <th class="p-2">Clamshells that Neanderthals harvested from the seafloor</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b"><td class="p-2 border-r">3–4</td><td class="p-2 border-r">99</td><td class="p-2">33</td></tr>
          <tr class="border-b bg-white"><td class="p-2 border-r">6–7</td><td class="p-2 border-r">1</td><td class="p-2">0</td></tr>
          <tr class="border-b"><td class="p-2 border-r">4–5</td><td class="p-2 border-r">2</td><td class="p-2">0</td></tr>
          <tr class="border-b bg-white"><td class="p-2 border-r">2–3</td><td class="p-2 border-r">7</td><td class="p-2">0</td></tr>
          <tr><td class="p-2 border-r">5–6</td><td class="p-2 border-r">18</td><td class="p-2">7</td></tr>
        </tbody>
      </table>
    </div>`,
    questionText: "Which choice most effectively uses data from the table to support the research team’s conclusion?",
    options: [
      { id: "A", text: "at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that shells were easier to collect from the beach than to harvest from the seafloor." },
      { id: "B", text: "the highest number of tools were at a depth of 3–4 meters below the surface, which suggests that the Neanderthal population at the site was highest during the related period of time." },
      { id: "C", text: "at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that Neanderthals preferred to use clamshells from the beach because of their durability." },
      { id: "D", text: "the higher number of tools at depths of 5–6 meters below the surface in the cave than at depths of 4–5 meters below the surface suggests that the size of clam populations changed over time." }
    ],
    correctAnswer: "A",
    explanation: "At every depth, beach-collected shells far outnumber seafloor-harvested shells (e.g. 99 vs 33 at 3-4m, 18 vs 7 at 5-6m), supporting the conclusion that seafloor shells were more difficult/challenging to obtain."
  },
  {
    id: 246,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Power Conversion Efficiency of Solar Cells",
    passageHtml: `${makeTest10RW2Q13Svg()}
    <p class="mt-3">Perovskite solar cells convert light into electricity more efficiently than earlier kinds of solar cells, and manufacturing advances have recently made them commercially attractive. One limitation of the cells, however, has to do with their electron transport layer (ETL), through which absorbed electrons must pass. Often the ETL is applied through a process called spin coating, but such ETLs are fairly inefficient at converting input power to output power. André Taylor and colleagues tested a novel spray coating method for applying the ETL. The team produced ETLs of various thicknesses and concluded that spray coating holds promise for improving the power conversion efficiency of ETLs in perovskite solar cells.</p>`,
    questionText: "Which choice best describes data from the graph that support Taylor and colleagues’ conclusion?",
    options: [
      { id: "A", text: "Both the ETL applied through spin coating and the ETL applied through spray coating showed a power conversion efficiency greater than 10% at their lowest performing thickness." },
      { id: "B", text: "The lowest performing ETL applied through spray coating had a higher power conversion efficiency than the highest performing ETL applied through spin coating." },
      { id: "C", text: "The highest performing ETL applied through spray coating showed a power conversion efficiency of approximately 13%, while the highest performing ETL applied through spin coating showed a power conversion efficiency of approximately 11%." },
      { id: "D", text: "There was a substantial difference in power conversion efficiency between the lowest and highest performing ETLs applied through spray coating." }
    ],
    correctAnswer: "B",
    explanation: "According to the graph, the lowest performing spray-coated ETL achieved a power conversion efficiency of approximately 15.5%, which is higher than the highest performing spin-coated ETL at approximately 13.6%. This data directly supports the conclusion that spray coating holds promise for improving efficiency."
  },
  {
    id: 247,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Employment by Sector in France and US",
    passageHtml: `<div class="my-3 overflow-x-auto">
      <div class="text-center font-serif text-sm font-semibold text-black mb-1.5">Employment by Sector in France and the United States, 1800–2012<br />(% of total employment)</div>
      <table class="sat-dense-table w-full text-center border-collapse border border-black font-serif text-black" style="table-layout: fixed; width: 100%;">
        <thead>
          <tr class="border-b border-black">
            <th style="width: 10%;" class="border-r border-black font-normal">Year</th>
            <th style="width: 15%;" class="border-r border-black font-normal">Agriculture<br />in France</th>
            <th style="width: 15%;" class="border-r border-black font-normal">Manufacturing<br />in France</th>
            <th style="width: 15%;" class="border-r border-black font-normal">Services<br />in France</th>
            <th style="width: 15%;" class="border-r border-black font-normal">Agriculture<br />in US</th>
            <th style="width: 15%;" class="border-r border-black font-normal">Manufacturing<br />in US</th>
            <th style="width: 15%;" class="font-normal">Services<br />in US</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="border-r border-black font-medium">1800</td>
            <td class="border-r border-black">64</td>
            <td class="border-r border-black">22</td>
            <td class="border-r border-black">14</td>
            <td class="border-r border-black">68</td>
            <td class="border-r border-black">18</td>
            <td>13</td>
          </tr>
          <tr class="border-b border-black">
            <td class="border-r border-black font-medium">1900</td>
            <td class="border-r border-black">43</td>
            <td class="border-r border-black">29</td>
            <td class="border-r border-black">28</td>
            <td class="border-r border-black">41</td>
            <td class="border-r border-black">28</td>
            <td>31</td>
          </tr>
          <tr class="border-b border-black">
            <td class="border-r border-black font-medium">1950</td>
            <td class="border-r border-black">32</td>
            <td class="border-r border-black">33</td>
            <td class="border-r border-black">35</td>
            <td class="border-r border-black">14</td>
            <td class="border-r border-black">33</td>
            <td>53</td>
          </tr>
          <tr>
            <td class="border-r border-black font-medium">2012</td>
            <td class="border-r border-black">3</td>
            <td class="border-r border-black">21</td>
            <td class="border-r border-black">76</td>
            <td class="border-r border-black">2</td>
            <td class="border-r border-black">18</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-1.5 text-xs font-serif text-black">Rows in table may not add up to 100 due to rounding.</div>
    </div>
    <p class="mt-3">Over the past two hundred years, the percentage of the population employed in the agricultural sector has declined in both France and the United States, while employment in the service sector (which includes jobs in retail, consulting, real estate, etc.) has risen. However, this transition happened at very different rates in the two countries. This can be seen most clearly by comparing the employment by sector in both countries in ________</p>`,
    questionText: "Which choice most effectively uses data from the table to complete the statement?",
    options: [
      { id: "A", text: "1900 with the employment by sector in 1950." },
      { id: "B", text: "1800 with the employment by sector in 2012." },
      { id: "C", text: "1900 with the employment by sector in 2012." },
      { id: "D", text: "1800 with the employment by sector in 1900." }
    ],
    correctAnswer: "A",
    explanation: "In 1900, France and the US had almost identical distributions across agriculture (43% vs 41%), manufacturing (29% vs 28%), and services (28% vs 31%). By 1950, US agriculture plummeted by 27% (to 14%) and services jumped to 53%, while France experienced a much slower shift (agriculture dropped by only 11% to 32%, services rose to 35%). Comparing 1900 to 1950 most clearly demonstrates the contrasting rates of transition."
  },
  {
    id: 248,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Linguistic Niche Hypothesis Analysis",
    passageHtml: `<p class="mb-3">The linguistic niche hypothesis (LNH) posits that the exotericity of languages (how prevalent non-native speakers are) and grammatical complexity are inversely related, which the LNH ascribes to attrition of complex grammatical rules as more non-native speakers adopt the language but fail to acquire those rules. Focusing on two characteristics that are positive indices of grammatical complexity, fusion (when new phonemes arise from the merger of previously distinct ones) and informativity (languages’ capacity for meaningful variation), Olena Shcherbakova and colleagues conducted a quantitative analysis for more than 1,300 languages and claim the outcome is inconsistent with the LNH.</p>`,
    questionText: "Which finding, if true, would most directly support Shcherbakova and colleagues’ claim?",
    options: [
      { id: "A", text: "Shcherbakova and colleagues’ analysis showed a slightly negative correlation between grammatical complexity and fusion and between grammatical complexity and informativity." },
      { id: "B", text: "Shcherbakova and colleagues’ analysis showed a slightly negative correlation between grammatical complexity and exotericity." },
      { id: "C", text: "Shcherbakova and colleagues’ analysis showed a slightly positive correlation between grammatical complexity and fusion." },
      { id: "D", text: "Shcherbakova and colleagues’ analysis showed a slightly positive correlation between fusion and exotericity and between informativity and exotericity." }
    ],
    correctAnswer: "D",
    explanation: "LNH claims exotericity and complexity are inversely (negatively) related. Showing a positive correlation directly contradicts LNH."
  },
  {
    id: 249,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Tomb of Queen Merneith",
    passageHtml: `<p class="mb-3">Archaeologist Christiana Kohler and her team excavated the Egyptian tomb of Queen Merneith, the wife of a First Dynasty pharaoh. Some scholars claim that she also ruled Egypt on her own and was actually the first female pharaoh. The team found a tablet in Merneith’s tomb with writing suggesting that she was in charge of the country’s treasury and other central offices. Whether Merneith was a pharaoh or not, this discovery supports the idea that Merneith likely ________</p>`,
    questionText: "Which choice most logically completes the text?",
    options: [
      { id: "A", text: "had an important role in Egypt’s government." },
      { id: "B", text: "lived after rather than before the First Dynasty of Egypt." },
      { id: "C", text: "traveled beyond Egypt’s borders often." },
      { id: "D", text: "created a new form of writing in Egypt." }
    ],
    correctAnswer: "A",
    explanation: "Being in charge of the treasury and central offices confirms she had an important role in the government."
  },
  {
    id: 250,
    type: "Reading and Writing",
    module: 2,
    domain: "Information and Ideas",
    passageTitle: "Capuchin Monkeys Cognitive Study",
    passageHtml: `<p class="mb-3">In a study of the cognitive abilities of white-faced capuchin monkeys (<i>Cebus imitator</i>), researchers neglected to control for the physical difficulty of the tasks they used to evaluate the monkeys. The cognitive abilities of monkeys given problems requiring little dexterity, such as sliding a panel to retrieve food, were judged by the same criteria as were those of monkeys given physically demanding problems, such as unscrewing a bottle and inserting a straw. The results of the study, therefore, ________</p>`,
    questionText: "Which choice most logically completes the text?",
    options: [
      { id: "A", text: "could suggest that there are differences in cognitive ability among the monkeys even though such differences may not actually exist." },
      { id: "B", text: "are useful for identifying tasks that the monkeys lack the cognitive capacity to perform but not for identifying tasks that the monkeys can perform." },
      { id: "C", text: "should not be taken as indicative of the cognitive abilities of any monkey species other than <i>C. imitator</i>." },
      { id: "D", text: "reveal more about the monkeys’ cognitive abilities when solving artificial problems than when solving problems encountered in the wild." }
    ],
    correctAnswer: "A",
    explanation: "Failing to control physical difficulty means differences in physical dexterity could be mistaken for cognitive differences."
  },
  {
    id: 251,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Single-Use Plastics Campaigns",
    passageHtml: `<p class="mb-3">Public-awareness campaigns about the need to reduce single-use plastics can be successful, says researcher Kim Borg of Monash University in Australia, when these campaigns give consumers a choice: for example, Japan achieved a 40 percent reduction in plastic-bag use after cashiers were instructed to ask customers whether ________ wanted a bag.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "they" },
      { id: "B", text: "one" },
      { id: "C", text: "you" },
      { id: "D", text: "it" }
    ],
    correctAnswer: "A",
    explanation: "'They' is the plural pronoun that correctly agrees with the plural antecedent 'customers'."
  },
  {
    id: 252,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Blueberry Plants in Alkaline Soils",
    passageHtml: `<p class="mb-3">Lucía Michel of the University of Chile observed that alkaline soils contain an insoluble form of iron that blueberry plants cannot absorb, thus inhibiting blueberry growth. If these plants were grown in alkaline soil alongside grasses that aid in iron solubilization, ________ Michel was determined to find out.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "could the blueberries thrive." },
      { id: "B", text: "the blueberries could thrive." },
      { id: "C", text: "the blueberries could thrive?" },
      { id: "D", text: "could the blueberries thrive?" }
    ],
    correctAnswer: "D",
    explanation: "'Michel was determined to find out' implies an indirect question, requiring the inverted question structure 'could the blueberries thrive?'."
  },
  {
    id: 253,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Atoms in a Synchrotron",
    passageHtml: `<p class="mb-3">Atoms in a synchrotron, a type of circular particle accelerator, travel faster and faster until they ________ a desired energy level, at which point they are diverted to collide with a target, smashing the atoms.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "will reach" },
      { id: "B", text: "reach" },
      { id: "C", text: "had reached" },
      { id: "D", text: "are reaching" }
    ],
    correctAnswer: "B",
    explanation: "Simple present 'reach' is required in time clauses ('until they reach')."
  },
  {
    id: 254,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Artist Nam June Paik",
    passageHtml: `<p class="mb-3">In his 1963 exhibition <i>Exposition of Music—Electronic Television</i>, Korean American artist Nam June Paik showed how television images could be manipulated to express an artist’s perspective. Today, Paik ________ considered the first video artist.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "will be" },
      { id: "B", text: "had been" },
      { id: "C", text: "was" },
      { id: "D", text: "is" }
    ],
    correctAnswer: "D",
    explanation: "The word 'Today' specifies present time, requiring 'is'."
  },
  {
    id: 255,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "UN Declaration of Human Rights Drafting",
    passageHtml: `<p class="mb-3">Former First Lady of the United States Eleanor Roosevelt and Indian activist and educator Hansa Mehta were instrumental in drafting the United Nations’ Universal Declaration of Human Rights, a document that ________ the basic freedoms to which all people are entitled.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "have outlined" },
      { id: "B", text: "were outlining" },
      { id: "C", text: "outlines" },
      { id: "D", text: "outline" }
    ],
    correctAnswer: "C",
    explanation: "The relative pronoun 'that' refers back to 'a document' (singular), requiring 'outlines'."
  },
  {
    id: 256,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "1919 Inter-Allied Women's Conference",
    passageHtml: `<p class="mb-3">In February 1919, following the end of the First World War, women from ten countries around the world convened the Inter-Allied Women’s Conference in Paris. The conference’s goals were ________ ensure women’s participation in the proceedings of the Paris Peace Conference, to secure the right of women to serve in the League of Nations, and to advocate for human rights.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "threefold: to" },
      { id: "B", text: "threefold. To" },
      { id: "C", text: "threefold to" },
      { id: "D", text: "threefold; to" }
    ],
    correctAnswer: "A",
    explanation: "A colon is used after an independent clause to introduce a list ('threefold: to ensure..., to secure..., and to advocate...')."
  },
  {
    id: 257,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Grigori Perelman and Poincaré Conjecture",
    passageHtml: `<p class="mb-3">Mathematician Grigori Perelman, sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau, ________ credited with proving the Poincaré conjecture. Having built on Hamilton’s previous work to solve the proof, Perelman has insisted that Hamilton receive credit. Yau later found and closed gaps in Perelman’s proof, persuading some mathematicians that he deserves credit as well.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "are" },
      { id: "B", text: "have been" },
      { id: "C", text: "are being" },
      { id: "D", text: "is" }
    ],
    correctAnswer: "D",
    explanation: "The singular subject 'Mathematician Grigori Perelman' requires singular verb 'is'."
  },
  {
    id: 258,
    type: "Reading and Writing",
    module: 2,
    domain: "Standard English Conventions",
    passageTitle: "Magnetosensation in Soil Roundworms",
    passageHtml: `<p class="mb-3">Researchers studying magnetosensation have determined why some soil-dwelling roundworms in the Southern Hemisphere move in the opposite direction of Earth’s magnetic field when searching for ________ in the Northern Hemisphere, the magnetic field points down, into the ground, but in the Southern Hemisphere, it points up, toward the surface and away from worms’ food sources.</p>`,
    questionText: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    options: [
      { id: "A", text: "food:" },
      { id: "B", text: "food," },
      { id: "C", text: "food while" },
      { id: "D", text: "food" }
    ],
    correctAnswer: "A",
    explanation: "A colon separates the main statement from the explanatory detail that follows."
  },
  {
    id: 259,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Evergreen vs Deciduous Conifers",
    passageHtml: `<p class="mb-3">Most conifers (trees belonging to the phylum Coniferophyta) are evergreen. That is, they keep their green leaves or needles year-round. However, not all conifer species are evergreen. Larch trees, ________ lose their needles every fall.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "for instance," },
      { id: "B", text: "nevertheless," },
      { id: "C", text: "meanwhile," },
      { id: "D", text: "in addition," }
    ],
    correctAnswer: "A",
    explanation: "Larch trees are an example of non-evergreen conifers, so 'for instance' is the logical transition."
  },
  {
    id: 260,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Karen Konkoly REM Sleep Study",
    passageHtml: `<p class="mb-3">Neuroscientist Karen Konkoly wanted to determine whether individuals can understand and respond to questions during REM sleep. She first taught volunteers eye movements they would use to respond to basic math problems while asleep (a single left-right eye movement indicated the number one). ________ she attached electrodes to the volunteers’ faces to record their eye movements during sleep.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Specifically," },
      { id: "B", text: "Next," },
      { id: "C", text: "For instance," },
      { id: "D", text: "In sum," }
    ],
    correctAnswer: "B",
    explanation: "'Next' indicates the sequential step taken after teaching the eye movements."
  },
  {
    id: 261,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Carl Sauer's Morphology of Landscape",
    passageHtml: `<p class="mb-3">In his 1925 book <i>The Morphology of Landscape</i>, US geographer Carl Sauer challenged prevailing views about how natural landscapes influence human cultures. ________ Sauer argued that instead of being shaped entirely by their natural surroundings, cultures play an active role in their own development by virtue of their interactions with the environment.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Similarly," },
      { id: "B", text: "Finally," },
      { id: "C", text: "Therefore," },
      { id: "D", text: "Specifically," }
    ],
    correctAnswer: "D",
    explanation: "'Specifically' introduces the exact argument Sauer used to challenge prevailing views."
  },
  {
    id: 262,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Fusa Miyake Tree Rings Analysis",
    passageHtml: `<p class="mb-3">In her 2012 analysis of tree rings from Japan’s Yaku Island, cosmic ray physicist Fusa Miyake noted an anomalous carbon-14 spike dating to 774–775 CE, indicating that a massive burst of radiation reached Earth during that time. ________ this unprecedented radiocarbon surge was dubbed a “Miyake event” in honor of its discoverer.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Fittingly," },
      { id: "B", text: "Similarly," },
      { id: "C", text: "However," },
      { id: "D", text: "In other words," }
    ],
    correctAnswer: "A",
    explanation: "'Fittingly' reflects the appropriate nature of naming the event after its discoverer."
  },
  {
    id: 263,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Mathematician Collaboration Trends",
    passageHtml: `<p class="mb-3">Researchers Helena Mihaljević-Brandt, Lucía Santamaría, and Marco Tullney report that while mathematicians may have traditionally worked alone, evidence points to a shift in the opposite direction. ________ mathematicians are choosing to collaborate with their peers—a trend illustrated by a rise in the number of mathematics publications credited to multiple authors.</p>`,
    questionText: "Which choice completes the text with the most logical transition?",
    options: [
      { id: "A", text: "Similarly," },
      { id: "B", text: "For this reason," },
      { id: "C", text: "Furthermore," },
      { id: "D", text: "Increasingly," }
    ],
    correctAnswer: "D",
    explanation: "'Increasingly' captures the ongoing trend of growing collaboration."
  },
  {
    id: 264,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Shaun Tan Books Similarity",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p>
    <ul class="list-disc pl-5 mb-3 space-y-1.5">
      <li>Shaun Tan is an Australian author.</li>
      <li>In 2008, he published <i>Tales from Outer Suburbia</i>, a book of fifteen short stories.</li>
      <li>The stories describe surreal events occurring in otherwise ordinary suburban neighborhoods.</li>
      <li>In 2018, he published <i>Tales from the Inner City</i>, a book of twenty-five short stories.</li>
      <li>The stories describe surreal events occurring in otherwise ordinary urban settings.</li>
    </ul>`,
    questionText: "The student wants to emphasize a similarity between the two books by Shaun Tan. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "Shaun Tan’s book <i>Tales from Outer Suburbia</i>, which describes surreal events occurring in otherwise ordinary places, contains fewer short stories than <i>Tales from the Inner City</i> does." },
      { id: "B", text: "<i>Tales from Outer Suburbia</i> was published in 2008, and <i>Tales from the Inner City</i> was published in 2018." },
      { id: "C", text: "Unlike <i>Tales from the Inner City</i>, Shaun Tan’s book <i>Tales from Outer Suburbia</i> is set in suburban neighborhoods." },
      { id: "D", text: "Shaun Tan’s books <i>Tales from Outer Suburbia</i> and <i>Tales from the Inner City</i> both describe surreal events occurring in otherwise ordinary places." }
    ],
    correctAnswer: "D",
    explanation: "Choice D directly emphasizes the shared core similarity ('both describe surreal events occurring in otherwise ordinary places')."
  },
  {
    id: 265,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Scripps National Spelling Bee Words",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p>
    <ul class="list-disc pl-5 mb-3 space-y-1.5">
      <li>Started in 1925, the Scripps National Spelling Bee is a US-based spelling competition.</li>
      <li>The words used in the competition have diverse linguistic origins.</li>
      <li>In 2008, Sameer Mishra won by correctly spelling the word “guerdon.”</li>
      <li>“Guerdon” derives from the Anglo-French word “guerdun.”</li>
      <li>In 2009, Kavya Shivashankar won by correctly spelling the word “Laodicean.”</li>
      <li>“Laodicean” derives from the ancient Greek word “Laodíkeia.”</li>
    </ul>`,
    questionText: "The student wants to emphasize a difference in the origins of the two words. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "“Guerdon,” the final word of the 2008 Scripps National Spelling Bee, is of Anglo-French origin, while the following year’s final word, “Laodicean,” derives from ancient Greek." },
      { id: "B", text: "In 2008, Sameer Mishra won the Scripps National Spelling Bee by correctly spelling the word “guerdon”; however, the following year, Kavya Shivashankar won based on spelling the word “Laodicean.”" },
      { id: "C", text: "Kavya Shivashankar won the 2009 Scripps National Spelling Bee by correctly spelling “Laodicean,” which derives from the ancient Greek word “Laodíkeia.”" },
      { id: "D", text: "The Scripps National Spelling Bee uses words from diverse linguistic origins, such as “guerdon” and “Laodicean.”" }
    ],
    correctAnswer: "A",
    explanation: "Choice A explicitly compares the Anglo-French origin of 'guerdon' with the ancient Greek origin of 'Laodicean'."
  },
  {
    id: 266,
    type: "Reading and Writing",
    module: 2,
    domain: "Expression of Ideas",
    passageTitle: "Emanuel Leutze and Kent Monkman Paintings",
    passageHtml: `<p class="mb-3">While researching a topic, a student has taken the following notes:</p>
    <ul class="list-disc pl-5 mb-3 space-y-1.5">
      <li>In 1851, German American artist Emanuel Leutze painted <i>Washington Crossing the Delaware</i>.</li>
      <li>His huge painting (149 × 255 inches) depicts the first US president crossing a river with soldiers in the Revolutionary War.</li>
      <li>In 2019, Cree artist Kent Monkman painted <i>mistikôsiwak (Wooden Boat People): Resurgence of the People</i>.</li>
      <li>Monkman’s huge painting (132 × 264 inches) was inspired by Leutze’s.</li>
      <li>It portrays Indigenous people in a boat rescuing refugees.</li>
    </ul>`,
    questionText: "The student wants to emphasize a similarity between the two paintings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    options: [
      { id: "A", text: "Monkman, a Cree artist, finished his painting in 2019; Leutze, a German American artist, completed his in 1851." },
      { id: "B", text: "Although Monkman’s painting was inspired by Leutze’s, the people and actions the two paintings portray are very different." },
      { id: "C", text: "Leutze’s and Monkman’s paintings are both huge, measuring 149 × 255 inches and 132 × 264 inches, respectively." },
      { id: "D", text: "Leutze’s painting depicts Revolutionary War soldiers, while Monkman’s depicts Indigenous people and refugees." }
    ],
    correctAnswer: "C",
    explanation: "Choice C directly highlights a similarity ('both huge, measuring...')."
  }
];
