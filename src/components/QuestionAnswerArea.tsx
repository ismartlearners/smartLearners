import React from 'react';
import { Question } from '../types';
import { renderMathInHtml } from '../utils/mathRenderer';
import { checkMathAnswer } from '../utils/mathAnswerChecker';
import { CheckCircle2, XCircle, X } from 'lucide-react';
import { HintTextBox } from './HintTextBox';

interface QuestionAnswerAreaProps {
  currentQ: Question;
  userAnswer: string | null;
  onSelectOption: (choiceId: string) => void;
  onUpdateTextAnswer: (val: string | null) => void;
  strikethroughs: Record<string, boolean>;
  onToggleStrikethrough: (choiceId: string) => void;
  isChecked: boolean;
  onToggleCheckAnswer: () => void;
  isHintActive?: boolean;
  activeHintOptions?: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> | null;
  optionExplanations?: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> | null;
}

export const TEST11_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: understand / grasp', '- matches: hard to "identify subjects"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: have an aversion to', '- irrelevant to: UNDERSTANDING POETRY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: break into an ongoing action', '- used for humans / events, not poetry'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: fail to notice', '- irrelevant to: UNDERSTANDING POETRY'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: outdated / obsolete', "- doesn't mean: JOINED TOGETHER"],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: casual / unofficial', "- doesn't mean: JOINED TOGETHER"],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: linked / joined together', '- matches: "single cohesive unit"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: elective / not required', "- doesn't mean: JOINED TOGETHER"],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: copy / duplicate', "- doesn't mean: STOP CIRCULATION"],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: review / criticize', '- irrelevant to: CIRCULATION OF COPIES'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: bring in from abroad', '- irrelevant to: CIRCULATION OF COPIES'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: ban / stop from circulating', '- matches: CONTRAST with secret circulation'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST11_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: examined / studied', "- doesn't show: OPPOSITION to old belief"],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: understood incorrectly', '- irrelevant to: NEW EVIDENCE opposing old belief'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: expected / foreseen', '- opposite of: NEW EVIDENCE challenging old belief'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: challenged / shown false', '- matches: NEW EVIDENCE opposing "Scholars long thought"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST11_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: modest / not ambitious', '- matches: "not particularly ambitious"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: clever / sharp-witted', '- used for humans, not things'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: out of place / incompatible', '- irrelevant to: NOT AMBITIOUS / MODEST'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: showy / claiming importance', '- used for humans, not things'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: completely disordered / confused', '- opposite of: METHODICAL / SUCCESSFUL'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: remaining the same / unvarying', '- opposite of: "VARIETY OF CROPS"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: successful in producing a desired result', '- matches: "great number and variety of crops"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: causing difficulty or hardship', '- irrelevant to: SUCCESSFUL CROP PRODUCTION'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: making straight / untangling', '- used for objects / lines, not humans'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: failing to remember / neglecting', '- opposite of: ACTIVE USE of astronauts'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: depending on / using', '- matches: "instead of humans" + "expensive"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: [
      '- means: decreasing size / amount',
      '- used for amounts / things, not humans',
      '- contradicts: decreasing would REDUCE costs'
    ],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: alter / misrepresent', '- irrelevant to: NOT ABANDONING POLLING'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: pass / make into law', '- used for laws / rules, not polling'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: ignore / abandon / pay no attention to', '- matches: "should not" + "entirely" + "polling helps"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: add extra to / enhance', '- contradicts: prediction failures would not lead to adding more'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST11_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: peripheral / barely related', '- opposite of: ESSENTIAL / MUST BE INCLUDED'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: coming after in time', '- irrelevant to: ESSENTIAL ROLE IN THE PIECE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: similar / comparable to', '- irrelevant to: ESSENTIAL ROLE IN THE PIECE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: essential / necessary to complete', '- matches: "contributed" + "must be included"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST11_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: actualized / accomplished', '- irrelevant to: VISIBLE APPEARANCE IN THE SKY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: noticeable / visible / observable', '- matches: "in the livid tongues of fire darting"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: placed / located in position', '- does not fit: sun being seen through tongues of fire'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: diminishing / shrinking', '- does not describe: how the sun shows in the fire streaks'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 10 Reading & Writing Module 1 (Questions 1 to 5 / id: 201, 202, 203, 204, 205)
export const TEST10_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: origin / place where something comes from', '- matches: "share news and help spread it"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: competitor / opponent', '- irrelevant to: SHARING AND SPREADING NEWS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: state of being / requirement', '- irrelevant to: WHERE NEWS COMES FROM'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: useless or discarded material', '- irrelevant to: SHARING AND SPREADING NEWS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: doubtful / questioning', '- irrelevant to: PAYING CLOSE ATTENTION TO DETAILS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: paying close attention / watchful', '- matches: "paid close attention to all the details"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: finding fault / expressing disapproval', '- irrelevant to: NOTICING ARTISTIC DETAILS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: feeling self-assured / certain', '- irrelevant to: NOTICING DETAILS OF NEIGHBORHOOD'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: insists upon forcefully', '- contradicts: "doesn\'t have a definite idea" & "conjecture"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: guesses / theorizes without firm proof', '- matches: "doesn\'t have a definite idea" & "conjecture"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: disbelieves / feels uncertain that it is true', '- contradicts: believing humans will need other environments'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: proves firmly / sets up conclusively', '- opposite of: "doesn\'t have a definite idea" & "conjecture"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: simultaneous timing / happening at same time', '- matches: "flowering at the same time as the host"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: dormant winter sleep state', '- irrelevant to: FLOWERING AT THE SAME TIME'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: forecast / statement about future', '- irrelevant to: FLOWERING SIMULTANEOUSLY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: avoidance of extremes', '- irrelevant to: TIMING OF FLOWERING'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: creative / fictional', '- irrelevant to: LOSS OF HISTORICAL EVIDENCE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: shallow / lacking depth', '- we WOULD have superficial accounts because evidence is destroyed'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: comprehensive / fully complete / thorough', '- matches: destroyed evidence means unlikely to have full account'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: doubtful / suspicious', '- irrelevant to: MISSING RECORD DUE TO DESTROYED EVIDENCE'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 10 Reading & Writing Module 2 (Questions 1 to 5 / id: 234, 235, 236, 237, 238)
export const TEST10_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: extensive / broadly distributed throughout a population', '- matches: "over 90 percent of the Cherokee people could read and write it"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: cautious / done with great attention and precision', '- irrelevant to: PERCENTAGE OF PEOPLE USING IT'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: not planned or meant to happen / accidental', '- irrelevant to: REACHING 90 PERCENT OF PEOPLE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: rare / occurring seldom', '- opposite of: "over 90 percent of the Cherokee people"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: automatically / without conscious intent or control', '- matches: "these uncontrollable contractions"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: in a helpful or advantageous manner', '- does not describe: THE PHYSICAL NATURE OF SPASMS / CONTRACTIONS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: with great physical exertion or strain', '- irrelevant to: UNCONTROLLABLE CONTRACTIONS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: evenly without sudden jerks or interruptions', '- opposite of: "uncontrollable contractions"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: not attracting attention / inconspicuous', '- irrelevant to: PHYSICAL GEOGRAPHIC DISTANCE FROM THE CAPITAL'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: hidden from sight / kept secret', '- irrelevant to: BEING HUNDREDS OF KILOMETERS AWAY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: imprecise / estimated', '- irrelevant to: GEOGRAPHICAL REMOTENESS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: located on the outer boundary / outlying / distant from the center', '- matches: "hundreds of kilometers southeast of the capital" & "long overland journey"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST10_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: hinder / impede / thwart progress', '- matches: "lengthening the period in which they are providing financial support"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: multiply / combine or add to make greater', '- opposite of: financial burdens holding back wealth creation'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: criticize / speak slightingly of', '- does not apply to: INANIMATE FINANCIAL WEALTH CREATION'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: exceed / surpass / run faster than', '- irrelevant to: FINANCIAL BURDENS BLOCKING WEALTH CREATION'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST10_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: optimistic / cheerful / confident about the future', '- matches: "While some ... lauded" vs "less [optimistic] observers"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: stubbornly uncooperative / resisting authority', '- irrelevant to: CONTRAST BETWEEN PRAISE AND CONCERN'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: disliking humankind / having antisocial cynicism', '- extreme & does not fit: "less [misanthropic]" would mean MORE optimistic, contradicting the criticism'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: deeply sincere / serious', '- does not form contrast with: LAUDING VS CRITICIZING THE BLOGS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 9 Reading & Writing Module 1 (Questions 1 to 5 / id: 901, 902, 903, 904, 905)
export const TEST9_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: systematically ordered / laid out', '- matches: pictures set up so names are plainly seen'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: ordered by rank / graded in a hierarchy', '- irrelevant to: PHYSICAL LAYOUT OF ART GALLERIES'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: planned for a specific time', '- used for events / timetables, not gallery setup'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: talked about / debated', '- irrelevant to: DISPLAYING PICTURES ON WALLS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: occurring by chance / unintentional', '- irrelevant to: VARIABILITY OF POWER OUTPUT'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: feeling self-assurance / certain', '- used for people / emotions, not wave energy'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: high in price / costly', '- contradicts: text discusses unpredictability, not monetary expense'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: steady / regular / uniform over time', '- matches: "isn’t" + "varies in unpredictable ways"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST9_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: assign a task or duty to someone else', '- used for responsibilities / authority, not poems'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: write or create an original work', '- contradicts: poems are already composed; difficulty is understanding them'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: explain the meaning of / decipher / understand', '- matches: "opaque subject matter" + "difficult" + "scholarly debate"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: formally give up / disown a belief or claim', '- irrelevant to: ANALYZING POETRY'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: originated from / traced back to', '- contradicts: Velázquez worked in Spain, so his art did originate there'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: acknowledged or celebrated within', '- contradicts: "hardly recognized in Spain" would mean Spaniards ignored him'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: limited to / restricted within boundaries', '- matches: "hardly" + "painters around the world"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: restrained or held down by force', '- irrelevant to: SPREAD OF ARTISTIC INFLUENCE'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: lawful / valid and acceptable', '- irrelevant to: BARRIERS TO ENTERING A FIELD'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: impossible to break into / inaccessible', '- matches: "did not view as" + "broke into the field"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: captivating / highly interesting', '- irrelevant to: OVERCOMING ENTRY BARRIERS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: impossible to read or understand', '- used for texts / handwriting / codes, not career fields'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 9 Reading & Writing Module 2 (Questions 1 to 5 / id: 934, 935, 936, 937, 938)
export const TEST9_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: ruining completely / tearing down', '- irrelevant to: TRANSLATING A MANUSCRIPT'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: bringing to an end / concluding / finalizing', '- matches: "once I had sent off the manuscript"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: promoting or publicizing publicly', '- irrelevant to: WRITING PROCESS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: refusing to accept or dismiss', '- contradicts: narrator wants to conclude and send off the work'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: stay away from / evade', '- contradicts: animals actively bring or feed prey to their offspring'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: estimate without certainty', '- irrelevant to: NOURISHING YOUNG OFFSPRING'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: supply / give / make available / deliver', '- matches: "leave dead prey", "bring live prey", "feed directly"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: give a detailed verbal account of', '- irrelevant to: ANIMAL FEEDING BEHAVIORS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: lack of interest or care', '- contradicts: photography and writing are his "passions"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: intense interest / zeal / deep devotion', '- matches: "two passions" + "culminates" + "combines"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: worry or anxiety regarding', '- irrelevant to: CELEBRATING CREATIVE PASSIONS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: feeling astonishment or shock', '- irrelevant to: PURSUING LONGTIME ARTISTIC PASSIONS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: signaled or shown by a sign', '- irrelevant to: PHYSICAL MATERIALS OF A CRAFT'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: crafted manually out of raw materials', '- matches: "skillfully winds ... with sewing bone" + "no factory"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: symbolized or depicted by', '- sweetgrass and palm are the physical substances, not symbols'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: gathered together alongside', '- fails to describe how materials are transformed into baskets'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST9_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: unbiased / treating all rivals equally', '- irrelevant to: DURATION OR DEDICATION OF EFFORT'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: casual / done without thought or care', '- contradicts: extensive, dedicated decades-long work'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: ongoing / sustained / tireless over time', '- matches: "continuously worked" + "Beginning in the 1950s"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: required by law or rule / compulsory', '- text describes voluntary dedication, not a legal mandate'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 8 Reading & Writing Module 1 (Questions 1 to 5 / id: 1801, 1802, 1803, 1804, 1805)
export const TEST8_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: erratic / behaving in ways that cannot be foreseen', '- irrelevant to: PROVEN HISTORICAL ACHIEVEMENTS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: prominent / influential / of great consequence', '- matches: "many significant accomplishments" + "consolidated authority"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: concealed / unwilling to reveal information', '- irrelevant to: PUBLIC LEADERSHIP & REFORMS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: commonplace / having no special distinction', '- contradicts: "many significant accomplishments"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: causing distress or anxiety', '- irrelevant to: SCIENTIFIC IMPACT OR MAGNITUDE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: satisfactory or tolerable', '- irrelevant to: MEASURING VARIATION DEGREE IN TOXICITY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: too small or slight to be noticed', '- contradicts: "associated with considerable variations"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: sizeable / meaningful / significant in degree', '- matches: "associated with considerable variations in venom potency"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST8_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: serene / placid / undisturbed / calm', '- matches: "slow down the currents" + "calmer waters where animals can take shelter"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: hazardous / likely to cause harm', '- contradicts: "calmer waters where animals can take shelter"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: creative / inventive', '- irrelevant to: NATURAL MARINE HABITATS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: unexpected / astonishing', '- irrelevant to: GENTLE, SHELTERED WATER ENVIRONMENTS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: portrayal of fictional figures', '- irrelevant to: DUAL-AUTHOR WORK DYNAMICS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: explaining or analyzing text meaning', '- irrelevant to: CREATING LITERATURE TOGETHER'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: joint authorship / working as partners', '- matches: "written by [both authors]" + "working together"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: exploiting something for financial gain', '- irrelevant to: CO-AUTHORING A PLAY'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: practical / focused on realistic action', '- irrelevant to: WIDE RANGE OF NUMEROUS ACHIEVEMENTS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: causing dispute or debate', '- contradicts: celebrated list of positive achievements'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: wide-reaching / multifaceted / broad in scope', '- matches: "her many accomplishments include" + diverse list'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: applicable to all cases worldwide', '- unsupported: achievements are broad and diverse, not omnipresent'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 8 Reading & Writing Module 2 (Questions 1 to 5 / id: 1834, 1835, 1836, 1837, 1838)
export const TEST8_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: bewildering or puzzling', '- irrelevant to: AESTHETIC ENJOYMENT OR PREFERENCE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: pleasing / alluring / engaging to', '- matches: "more appealing than paintings featuring yellows and oranges"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: amended or rectified', '- irrelevant to: COLOR PREFERENCE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: resembling or alike', '- irrelevant to: VIEWER APPRECIATION'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: avoidable / avertable / capable of being stopped', '- matches: "take simple steps... to avoid introducing"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: unquestionable / indisputable', '- irrelevant to: ACTIONS TAKEN TO STOP SPREAD'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: widespread or frequent', '- irrelevant to: ABILITY TO AVERT HARM'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: worrying or distressing', '- misses: emphasis on actionable solutions that halt the issue'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: durable / able to bounce back quickly', '- irrelevant to: IDENTIFIED FLAWS AND DRAWBACKS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: substandard / flawed / inadequate / lacking in quality', '- matches: contrast with "cleaner process" + "environmental impact / loss of quality"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: energetic / constantly changing', '- irrelevant to: PROCESS SHORTCOMINGS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: acceptable or meeting needs', '- contradicts: "environmental impact and the loss of material quality"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST8_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: impossible to comprehend or decode', '- unsupported: system is sophisticated and clearly detailed, not unknowable'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: purely decorative / for visual appearance', '- contradicts: highly functional agricultural symbiosis'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: hidden / unclear / difficult to see', '- irrelevant to: DETAILED MUTUAL COOPERATION'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: elaborate / multifaceted / highly interconnected / complexly woven', '- matches: detailed 3-way agricultural synergy'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST8_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: capable of being duplicated', '- irrelevant to: BIOLOGICAL FUNCTION VS INACTIVITY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: settled in advance', '- irrelevant to: ACTIVE PARTICIPATION IN DIVING'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: active and functional', '- contradicts: "isn\'t _______; rather... actively support" (it IS functional, so it ISN\'T inactive)'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: dormant / inactive / inert / nonfunctional', '- matches: contrast with "isn\'t [dormant]; rather... actively support"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST7_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: proposed scientific explanation / plausible principle / systematic hypothesis', '- matches: prediction based on calculations and models later confirmed by empirical observation'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: empirical proof or observational data', '- conflicts: initial calculations and predictions were theoretical models, not the observational proof itself'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: unchanging mathematical or physical value', '- irrelevant to: ASTRONOMICAL HYPOTHESIS OR PREDICTION'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: practical laboratory test or empirical trial', '- conflicts: calculations and predictions are theoretical frameworks, not practical experiments'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: uncomplicated, elementary, or unadorned', '- irrelevant to: WATER PURITY OR VISIBILITY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: comprehensible or easily grasped by the intellect', '- irrelevant to: OPTICAL TRANSMISSION IN WATER'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: plainly evident, apparent, or unmistakable', '- irrelevant to: PHYSICAL TRANSLUCENCE OF WATER'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: see-through / pellucid / permitting light through distinctly', '- matches: "water was so clear" + "almost invisible"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST7_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: extend, lengthen, or draw out in duration', '- contradicts: proactive action taken to resolve the lack of banking options'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: correct / remedy / resolve / set right a disadvantage', '- matches: establishing a bank to solve the problem of "few formal options"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: preserve, keep, or hold onto without altering', '- contradicts: intentionally transforming and overcoming an inequitable condition'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: call attention to or emphasize', '- misses: direct institutional creation to solve and fix the financial deficit'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: bypass, evade, avoid, or get around', '- irrelevant to: VERIFYING OR SUPPORTING SCIENTIFIC CLAIMS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: confirm / validate / substantiate / back up with evidence', '- matches: trials failing to support or affirm observational conclusions'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: distribute, broadcast, or spread widely', '- irrelevant to: EMPIRICAL BACKING OR SCIENTIFIC VALIDATION'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: put into effect, execute, or carry out', '- irrelevant to: WHETHER EXPERIMENTAL DATA SUPPORTS CLINICAL BELIEFS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: distinguished from / set apart from / differentiated from', '- matches: the clear distinction between obligatory migration and simple salinity tolerance'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: restructured, reconstructed, or reassembled into', '- irrelevant to: CATEGORICAL OR BEHAVIORAL DISTINCTIONS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: combined, confused, or blended together without distinction', '- contradicts: the explicit contrast highlighting that their behaviors are different'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: originated from or evolved/descended from', '- unsupported: text explains a behavioral divergence, not evolutionary ancestry'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: reduce the strength, intensity, or power of', '- contradicts: photography expanded and flourished rather than diminished'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: express formal approval, admiration, or acclaim for', '- irrelevant to: PRACTICAL ADOPTION OR MASS ACCESSIBILITY'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: make widespread / bring to the masses / broaden general adoption', '- matches: making it "easy and enjoyable for everyday people" to take and share photos'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: separate, detach, or sequester from others', '- contradicts: widespread sharing and exchanging with friends and family'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: limited, confined, or placed boundaries on', '- contradicts: nature stimulated and enriched her artistic technique'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: proclaimed, declared publicly, or broadcast', '- irrelevant to: SHAPING AN ARTIST\'S CREATIVE TECHNIQUE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: drew attention away or diverted concentration', '- contradicts: nature directly fueled her artistic vision and methods'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: shaped / inspired / exerted a creative effect upon', '- matches: "For example... was inspired by the way that light would shine through the leaves"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST7_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: entertaining, comical, or humorous', '- irrelevant to: WILDLIFE CONSERVATION RESULTS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: expensive or requiring substantial financial expenditure', '- unsupported: text mentions counts of trees and birds, not financial expenditure'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: effective / fruitful / accomplishing intended conservation goals', '- matches: the bird population growing more than tenfold from 100 to 1,300'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: causing great damage, ruin, or catastrophe', '- contradicts: the remarkable surge and recovery in bird population'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST7_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: a remarkable concurrence of events without causal connection', '- irrelevant to: AN ASTRONOMICAL DURATION OUTLIER'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: a temporary relief, postponement, or delay of punishment', '- irrelevant to: DURATION OF ASTROPHYSICAL PHENOMENA'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: an individual event or distinct occurrence', '- misses: the extreme departure from the typical 2-second norm'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: an anomaly / an outlier / an unusual or atypical phenomenon', '- matches: 200 seconds is extraordinarily long compared to the typical fewer than 2 seconds'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST7_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: the state of being considerate, reflective, or kind', '- unsupported: text mentions his popularity, not his personal thoughtfulness'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: high regard / widespread admiration / favorable standing / respect', '- matches: referring back directly to being "very popular in France"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: prolonged public disagreement or heated dispute', '- contradicts: positive favor and widespread popular reception'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: honesty, genuineness, and freedom from deceit', '- unsupported: text focuses on public popularity, not personal authenticity'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 6 Reading & Writing Module 1 (Questions 1 to 5 / id: 1821, 1822, 1823, 1824, 1825)
export const TEST6_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: representative specimens / individual cases', '- does not fit: shared morphological characteristics between two distinct groups'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: worries / anxieties / apprehensions', '- irrelevant to: anatomical characteristics of animals'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: signs / clues / symptoms', '- does not describe: physical shared traits between two species'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: common features / points of resemblance / shared characteristics', '- matches: "traits the two groups of mammals independently developed"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST6_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: cautiously / discreetly / carefully', '- opposite of: CONTRAST with "less deliberately signaled"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: explicitly / openly / visibly / undisguisedly', '- matches: CONTRAST with "less deliberately signaled"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: warmly / in a gracious and friendly manner', '- irrelevant to: how political messages are conveyed in literature'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: unintentionally / by accident / unknowingly', '- reinforces rather than contrasts: "less deliberately signaled"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST6_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: worsening / aggravating / making more severe', '- opposite of: expanding focus to remedy an existing imbalance'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: correcting an imbalance / rectifying / setting right / remedying', '- matches: expanding focus to fix the "trend of overemphasizing teenagers"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: serving as a perfect example of / embodying', '- opposite of: actively shifting focus away from the old imbalance'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: preventing / making impossible in advance', '- does not fit: responding to a long-standing research trend'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST6_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: debating verbally / quarreling with words', '- inapplicable to: physical wagons and crowds blocking a vehicle\'s path'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: expressing moral dislike or condemnation', '- irrelevant to: physical congestion and movement along a street'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: asserting ownership or property rights over', '- irrelevant to: navigating a taxi through a crowded market street'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: contesting movement / impeding / obstructing / resisting progress', '- matches: crowd and wagons fighting for space across "every inch, our passage"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST6_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: provoking public dispute or debate', '- irrelevant to: whether geographical distance prevented philosophical impact'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: actively hostile or opposing', '- describes: personal antagonism, not lack of intellectual reach or impact'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: copied or emulated as a model', '- doesn\'t fit: context discussing whether geographic isolation prevented any reach'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: without significance to / lacking influence on / having no bearing on', '- matches: idea that geographic distance prevented works from having effect'],
    fontSize: 14,
    headerFontSize: 15
  }
};

// Test 6 Reading & Writing Module 2 (Questions 1 to 5 / id: 1854, 1855, 1856, 1857, 1858)
export const TEST6_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: created or designed for the first time', '- irrelevant to: exhibiting existing artworks in museums'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: altered slightly / modified / adapted', '- irrelevant to: displaying artworks in museums'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: exhibited / displayed prominently / showcased', '- matches: CONTRAST with "were displayed in outdoor public spaces"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: commended or advised as suitable', '- does not mean: publicly exhibited or displayed'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST6_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: praised or flattered by someone', '- inapplicable to: drawing ideas from memories and surroundings'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: doubtful or hesitant about', '- contradicts: clearly drawing on vivid memories and surroundings'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: untroubled or indifferent to', '- irrelevant to: creative motivation and artistic sourcing'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: stimulated by / creatively motivated by / drawing influence from', '- matches: "drawing from memories... or details of her current surroundings"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST6_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: fascinating or arousing curiosity', '- does not create: direct antonym contrast with "deliberately"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: easily seen or understood / evident', '- does not contrast with: intentional or purposeful tool use'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: unintentional / happening by chance / inadvertent', '- matches: direct CONTRAST with "using the stones deliberately"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: able to be seen or perceived', '- irrelevant to: whether tool use was intentional vs unintentional'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST6_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: unaware of / unresponsive to', '- does not fit: how philosophical beliefs are expressed in artworks'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: clearly evident in / revealed in / embodied by', '- matches: handcrafted elements that "exemplify" anti-industrial philosophy'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: examined closely or critically analyzed by', '- incorrect relationship: materials don\'t examine or critique his philosophy'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: made more difficult or intricate by', '- contradicts: handcrafted materials clearly embody and demonstrate his stance'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST6_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: lasting indefinitely / enduring', '- contradicts: CONTRAST with Kwolek who "will long be remembered"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: uncertain / provisional / not firmly established', '- matches: CONTRAST with Kwolek whose legacy is secure and long remembered'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: justified / deserved / having good reason', '- does not address: whether her historical memory is enduring vs forgotten'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: widely recognized / conspicuous / famous', '- contradicts: "more _______ than" someone whose memory is firmly enduring'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 5 Reading & Writing Module 1 (Questions 1 to 5 / id: 1941, 1942, 1943, 1944, 1945)
export const TEST5_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: visible signs / proof / indication / track of presence', '- matches: not leaving any sign behind because they suspect being followed'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: flaw / imperfection / stain', '- irrelevant to: signs of travelers moving through an area'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: quantity / portion', '- does not describe: physical signs left behind by travelers'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: rough drawing / outline', '- irrelevant to: leaving marks or clues of passing'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: easily identified / familiar / noticeable', '- does not explain: why noses are broken or missing from sculptures'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: breakable / easily damaged / vulnerable to breakage', '- matches: "delicate and sticks out... especially easy to break"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: widespread / ordinary / prevalent', '- does not explain: why parts break off'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: complex / advanced / refined', '- irrelevant to: physical vulnerability to breaking'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: preceding in time / earlier / prior event', '- describes: something that happened in the past, not an upcoming flare'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: about to happen / approaching / imminent / forthcoming', '- matches: "advance indication" and "Preceding a flare"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: harmless / safe / inoffensive', '- opposite of: "intense eruptions" that "interfere with telecommunications"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: everlasting / continuous / never-ending', '- does not fit: a flare preceded by a temporary advance indication'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: put forward a tentative theory or guess', '- does not describe: actively taking practical advantage of a property in a demonstration'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: dismissed / disregarded / treated as unimportant', '- opposite of: relying on this property to measure stress in pipes'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: gave a new meaning or concept to', '- does not describe: utilizing physical characteristics to perform measurements'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: made practical use of / capitalized on / utilized / harnessed for a purpose', '- matches: using the magnetic alterations to measure pipe stress remotely'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST5_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: officially authorize / give permission or impose penalties', '- does not describe: fixing a scientific sampling problem'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: improve / make better / remedy / correct a flawed condition', '- matches: taking action (recruiting diverse subjects) to fix the unrepresentative pool'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: justify / attempt to explain with logic or excuses', '- does not describe: actively taking steps to fix a problem'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: hypothesize / claim as a premise for argument', '- irrelevant to: correcting a methodological defect in research'],
    fontSize: 14,
    headerFontSize: 16
  }
};

// Test 5 Reading & Writing Module 2 (Questions 1 to 5 / id: 1974, 1975, 1976, 1977, 1978)
export const TEST5_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: uniting with / combining together', '- does not describe: a physical motion of extending an arm'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: catching up to in distance / closing the gap in a pursuit', '- irrelevant to: extending an arm toward a fruit bowl'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: extending an arm in the direction of / spanning the distance to take', '- matches: "staying where she was" while extending her arm to take an orange'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: reaching a destination after traveling', '- contradicts: "staying where she was" (she remained seated in place)'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: reside in / take up space or control a location', '- does not describe: acquiring scientific data from fossils'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: accumulate and store away excessively or greedily', '- does not fit: paleontologists collecting scientific findings'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: set aside or hold back for future use', '- does not mean: extracting and learning data'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: acquire / gain possession of / extract or collect information', '- matches: learning detailed facts from exceptionally well-preserved fossils'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST5_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: diminished / decreased in intensity or rate / lessened', '- matches: antonym of "intensified" following the contrast word "whereas"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: assessed / judged / appraised for value', '- does not provide the opposite of "intensified"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: established / resolved / decided conclusively', '- does not describe: a lower level of communication flow'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: gained / obtained / learned', '- does not contrast with: "intensified"'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: weak / slight / faint / fragile / poorly established', '- matches: being overshadowed by a larger conflict and leaving no major territorial impact'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: lasting / permanent / persisting over a long time', '- opposite of: being overshadowed and having minimal historical prominence'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: controversial / causing heated debate or disagreement', '- does not fit: an event that maintained status quo and is largely overlooked'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: easily seen / prominent / attracting clear attention', '- opposite of: being "overshadowed" by Napoleonic wars'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST5_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: form a mental picture or conceptualize in the mind', '- not difficult when relying on speculation and guesswork (speculating is easy)'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: give a brief statement of the main points', '- does not describe: proving or validating historical claims'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: substantiate / justify / prove valid with evidence / uphold', '- matches: claims cannot be easily verified because they rely on guesswork and lack solid evidence'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: modify / alter slightly to fit circumstances', '- does not describe: establishing the truth or validity of claims'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: fastened, joined, or affixed to a surface', '- conflicts: the spacecraft took physical material away rather than joining something to the asteroid'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: acquired / gathered / retrieved / harvested physical specimens', '- matches: "gathering pieces of it to bring back to Earth"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: pursued, tracked, or moved behind in sequence', '- irrelevant to: GATHERING PHYSICAL SAMPLES FROM A SURFACE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: substituted or put something back in its place', '- conflicts: material was extracted and brought back, not swapped or returned'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: show / represent / mirror / accurately register evidence of', '- matches: surface displaying or preserving geological traces of early collision events'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: take in, accept, or be subjected to an incoming force', '- conflicts: the Moon\'s surface did receive impacts, but failed to preserve the visual evidence of them'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: assess, appraise, or calculate the value of', '- irrelevant to: PHYSICAL SURFACES PRESERVING HISTORICAL TRACES'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: imitate, copy, or simulate the behavior of another', '- irrelevant to: AN OBJECT DISPLAYING PROOF OF ITS OWN HISTORY'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: perceptible / detectable / easily identified or observed', '- matches: contrast with "easy to observe in humans" and needing special tasks "to reveal" it'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: fascinating, captivating, or arousing curiosity', '- irrelevant to: DEGREE OF VISIBILITY OR EASE OF DETECTION'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: momentous, of great consequence, or statistically large', '- misses: the specific observational difficulty of seeing the trait without special tests'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: advantageous, beneficial, or having practical utility', '- irrelevant to: WHETHER A TRAIT CAN BE EASILY OBSERVED OR DETECTED'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: significant, considerable, or of ample weight', '- contradicts: "by no means substantial" would mean Bosch\'s influence was minor, which contradicts "cites Bosch as an inspiration"'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: giving fulfillment, gratification, or contentment', '- irrelevant to: ASSESSING THE PROMINENCE OF AN ARTISTIC INFLUENCE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'yellow',
    text: ['- means: trivial / negligible / insignificant / minor', '- matches: "by no means unimportant" (= definitely valid and noteworthy) before contrasting with an even greater influence'],
    fontSize: 14,
    headerFontSize: 15
  },
  'D': {
    color: 'blue',
    text: ['- means: suitable, fitting, or proper for a given situation', '- contradicts: "by no means appropriate" would falsely claim it is improper to recognize the influence'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'yellow',
    text: ['- means: demonstrate mixed, contradictory, or opposing internal reactions', '- matches: the tension between outward grumbling ("Don\'t belong in here") and inner pride ("secretly proud of his acquisition")'],
    fontSize: 14,
    headerFontSize: 15
  },
  'B': {
    color: 'blue',
    text: ['- means: highlight bitter grievance or hostility toward the seller', '- conflicts: he bought it for "a song" (a bargain) and feels secret pride, harboring no resentment toward the young salesman'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: list and detail the shopkeeper\'s most treasured possessions', '- misses: the other items are mentioned only to describe his standard inventory, not his most prized possessions'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: analyze specific artistic contrasts between the paintings', '- misses: the passage centers on the shopkeeper\'s psychological ambivalence, not an objective technical comparison'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_M2_Q1_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: created, yielded, or brought into existence', '- irrelevant to: STATING AN EXPECTATION ABOUT FUTURE REVENUE'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: refused to accept or declared untrue', '- contradicts: positive expectations of market expansion'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: felt anxiety or distress about a negative outcome', '- contradicts: positive commercial forecast of doubling revenue'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: forecasted / projected / anticipated in advance', '- matches: "Expecting to see continued growth" + "will more than double by 2028"'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST4_M2_Q2_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: form an abstract concept or mental model', '- does not describe: solving an already identified physical barrier'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'blue',
    text: ['- means: fail to care for properly or ignore entirely', '- contradicts: actively developing an engineering solution'],
    fontSize: 14,
    headerFontSize: 16
  },
  'C': {
    color: 'blue',
    text: ['- means: provide pictures or serve as an example of', '- does not mean: solving or bypassing an obstacle'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'yellow',
    text: ['- means: surmount / conquer / resolve / successfully deal with a difficulty', '- matches: finding a way past "difficult to transmit... through plant cell wall" using carbon nanotubes'],
    fontSize: 14,
    headerFontSize: 15
  }
};

export const TEST4_M2_Q3_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: choosing or picking out from a group', '- does not mean: examining unseen particles'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: scrutinizing / studying / analyzing / observing carefully', '- matches: "closely examine"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: making or bringing something into existence', '- subatomic particles exist naturally; physicists examine them'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: making a choice or coming to a resolution', '- irrelevant to: SCIENTIFIC EXAMINATION OF SUBATOMIC BEHAVIOR'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_M2_Q4_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: exceeded or outdone by something greater', '- irrelevant to: MORPHOLOGICAL SIMILARITY BETWEEN BONE STRUCTURES'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: similar to / analogous to / matching in structure', '- matches: similarity in shoulder bones indicating similar tree-climbing adaptation'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: free from outside control or having no connection to', '- contradicts: the anatomical resemblance suggesting shared climbing adaptations'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: extracted or acquired directly from a source', '- impossible: fossil bones cannot be physically extracted from living apes'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const TEST4_M2_Q5_OPTION_HINTS: Record<string, { color: 'yellow' | 'blue'; text: string | string[]; fontSize?: number; headerFontSize?: number }> = {
  'A': {
    color: 'blue',
    text: ['- means: incapable of making mistakes or being wrong', '- irrelevant to: HOW COMMONLY AN OCCUPATION APPEARS IN NOVELS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'B': {
    color: 'yellow',
    text: ['- means: unusual / uncommon / rare / abnormal / exceptional', '- matches: "not atypical" (= common), reinforced by "nearly a dozen of the characters... are poets or writers"'],
    fontSize: 14,
    headerFontSize: 15
  },
  'C': {
    color: 'blue',
    text: ['- means: producing a great deal of profit or wealth', '- irrelevant to: THE FREQUENCY OF AN OCCUPATION IN THE AUTHOR\'S WORKS'],
    fontSize: 14,
    headerFontSize: 16
  },
  'D': {
    color: 'blue',
    text: ['- means: too long, slow, or dull; tiresome or monotonous', '- irrelevant to: HOW OFTEN THE PROFESSION APPEARS ACROSS NOVELS'],
    fontSize: 14,
    headerFontSize: 16
  }
};

export const QuestionAnswerArea: React.FC<QuestionAnswerAreaProps> = ({
  currentQ,
  userAnswer,
  onSelectOption,
  onUpdateTextAnswer,
  strikethroughs,
  onToggleStrikethrough,
  isChecked,
  onToggleCheckAnswer,
  isHintActive = false,
  activeHintOptions = null,
  optionExplanations = null
}) => {
  const isStudentProduced = !currentQ.options || currentQ.options.length === 0;

  if (isStudentProduced) {
    const isCorrect = checkMathAnswer(userAnswer, currentQ.correctAnswer);

    return (
      <div className="space-y-5">
        {/* SPR Input Card */}
        <div className="bg-white border border-slate-300 rounded-2xl p-5 shadow-xs transition hover:border-slate-400">
          <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
            Key in your answer in the box below. You can enter an integer, decimal (e.g., <code className="bg-white border border-slate-300 px-1 py-0.5 rounded text-slate-800 font-mono">0.4</code>), or fraction (e.g., <code className="bg-white border border-slate-300 px-1 py-0.5 rounded text-slate-800 font-mono">2/5</code>).
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative flex-1">
              <input
                id={`spr-input-${currentQ.id}`}
                type="text"
                value={userAnswer || ''}
                onChange={(e) => onUpdateTextAnswer(e.target.value ? e.target.value : null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    onToggleCheckAnswer();
                  }
                }}
                placeholder="Type your answer here..."
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-mono text-lg font-bold focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 transition outline-none shadow-2xs"
              />
              {userAnswer && (
                <button
                  type="button"
                  onClick={() => onUpdateTextAnswer(null)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  title="Clear input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick helper buttons for symbol inputs */}
            <div className="flex items-center justify-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => onUpdateTextAnswer((userAnswer || '') + '/')}
                className="px-3 py-3 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-mono font-bold text-sm transition cursor-pointer shadow-2xs"
                title="Insert fraction slash (/)"
              >
                /
              </button>
              <button
                type="button"
                onClick={() => onUpdateTextAnswer((userAnswer || '') + '.')}
                className="px-3 py-3 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-mono font-bold text-sm transition cursor-pointer shadow-2xs"
                title="Insert decimal point (.)"
              >
                .
              </button>
              <button
                type="button"
                onClick={() => onUpdateTextAnswer((userAnswer || '') + '-')}
                className="px-3 py-3 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-mono font-bold text-sm transition cursor-pointer shadow-2xs"
                title="Insert negative sign (-)"
              >
                -
              </button>
            </div>
          </div>

          {/* Instant Verification Feedback Card */}
          {isChecked && (
            <div className="mt-4 animate-fadeIn">
              {isCorrect ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-start gap-3 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-950 text-sm">Correct Answer!</span>
                    <p className="text-xs text-emerald-800 mt-1">
                      Your answer <span className="font-mono font-bold text-emerald-900 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">{userAnswer}</span> matches the correct answer.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-300 rounded-xl flex items-start gap-3 shadow-2xs">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-red-950 text-sm">Incorrect Answer</span>
                    <p className="text-xs text-red-900 mt-1">
                      Your answer: <span className="font-mono font-bold text-red-950 bg-red-100 px-1.5 py-0.5 rounded border border-red-300">{userAnswer || '(No answer typed)'}</span>
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Correct Answer: <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">{currentQ.correctAnswer}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Check Answer & View Explanation Section */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onToggleCheckAnswer}
            className="w-full py-3 px-4 bg-[#003366] hover:bg-[#002244] active:bg-[#001122] text-white font-bold text-xs rounded-xl shadow-2xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isChecked ? "Hide Explanation" : "Check Answer & View Explanation"}</span>
          </button>

          {isChecked && currentQ.explanation && (
            <div className="mt-4 p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-slate-800 space-y-2 animate-fadeIn">
              <div className="font-bold text-blue-900 flex items-center gap-1.5 border-b border-blue-200 pb-2">
                <span>Step-by-Step Solution & Explanation</span>
              </div>
              <div 
                className="leading-relaxed text-slate-700 font-sans"
                dangerouslySetInnerHTML={{ __html: renderMathInHtml(currentQ.explanation) }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  /* Standard Multiple Choice Question */
  return (
    <div className="space-y-4">
      {/* Option choices list */}
      <div className="space-y-3">
        {currentQ.options.map((opt) => {
          const isSelected = userAnswer === opt.id;
          const isStruck = !!strikethroughs[opt.id];
          const isCorrectOpt = opt.id === currentQ.correctAnswer;
          // Option breakdown is strictly shown during explanation mode (isChecked)
          const optionBreakdown = isChecked && optionExplanations ? optionExplanations[opt.id] : null;

          let borderBgStyle = "";
          if (isChecked) {
            if (isCorrectOpt) {
              borderBgStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
            } else if (isSelected && !isCorrectOpt) {
              borderBgStyle = "bg-red-50 border-red-500 text-red-950";
            }
          }

          return (
            <div key={opt.id} className="relative flex items-center gap-2 group">
              <button
                type="button"
                onClick={() => onSelectOption(opt.id)}
                className={`choice-btn flex-1 flex items-center justify-between gap-3 ${isSelected ? 'selected' : ''} ${isStruck ? 'struck bg-white' : ''} ${borderBgStyle}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`choice-label shrink-0 ${isChecked && isCorrectOpt ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}>
                    {opt.id}
                  </span>
                  <span 
                    className={`text-base text-left ${isStruck ? 'line-through decoration-red-500 decoration-2 text-gray-400' : ''}`}
                    dangerouslySetInnerHTML={{ __html: renderMathInHtml(opt.text) }}
                  />
                </div>

                {/* Option Explanation / Formulaic Dense Analysis Box */}
                {optionBreakdown && (
                  <div className="shrink-0 my-0.5 ml-2" onClick={(e) => e.stopPropagation()}>
                    <HintTextBox
                      color={optionBreakdown.color}
                      text={optionBreakdown.text}
                      fontSize={optionBreakdown.fontSize ?? 17}
                      headerFontSize={optionBreakdown.headerFontSize}
                    />
                  </div>
                )}

                {isChecked && isCorrectOpt && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded ml-2 shrink-0">Correct</span>
                )}
                {isChecked && isSelected && !isCorrectOpt && (
                  <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded ml-2 shrink-0">Incorrect</span>
                )}
              </button>

              {/* Bluebook Strikethrough button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleStrikethrough(opt.id);
                }}
                className={`px-3 py-2 rounded-lg border transition text-xs font-bold cursor-pointer shrink-0 ${
                  isStruck 
                    ? 'bg-red-100 border-red-400 text-red-700 shadow-inner' 
                    : 'bg-white border-gray-200 text-gray-400 hover:text-gray-800 hover:bg-gray-100'
                }`}
                title={isStruck ? `Remove strikethrough from choice ${opt.id}` : `Strike through choice ${opt.id}`}
              >
                <span className="line-through decoration-red-600 decoration-2">{opt.id}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Check Answer & View Explanation Section */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        {userAnswer !== null && (
          <button
            type="button"
            onClick={onToggleCheckAnswer}
            className="w-full py-2.5 px-4 bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs rounded-xl shadow-2xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isChecked ? "Hide Explanation" : "Check Answer & View Explanation"}</span>
          </button>
        )}

        {isChecked && currentQ.explanation && (
          <div className="mt-4 p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-slate-800 space-y-2 animate-fadeIn">
            <div className="font-bold text-blue-900 flex items-center gap-1.5 border-b border-blue-200 pb-2">
              <span>Explanation & Answer Key</span>
            </div>
            <div 
              className="leading-relaxed text-slate-700 font-sans text-[13px]"
              dangerouslySetInnerHTML={{ __html: renderMathInHtml(currentQ.explanation) }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
