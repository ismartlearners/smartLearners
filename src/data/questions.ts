import { Question } from '../types';
import { sanitizeQuestion } from '../utils/sanitizeText';
import { RW_MODULE_1_QUESTIONS } from './test11_rw_module1';
import { RW_MODULE_2_QUESTIONS } from './test11_rw_module2';
import { MATH_MODULE_1_QUESTIONS } from './test11_math_module1';
import { MATH_MODULE_2_QUESTIONS } from './test11_math_module2';

import { TEST2_RW_MODULE_1_QUESTIONS } from './test10_rw_module1';
import { TEST2_RW_MODULE_2_QUESTIONS } from './test10_rw_module2';
import { TEST2_MATH_MODULE_1_QUESTIONS } from './test10_math_module1';
import { TEST2_MATH_MODULE_2_QUESTIONS } from './test10_math_module2';

import { TEST9_RW_MODULE_1_QUESTIONS } from './test9_rw_module1';
import { TEST9_RW_MODULE_2_QUESTIONS } from './test9_rw_module2';
import { TEST9_MATH_MODULE_1_QUESTIONS } from './test9_math_module1';
import { TEST9_MATH_MODULE_2_QUESTIONS } from './test9_math_module2';

import { TEST8_RW_MODULE_1_QUESTIONS } from './test8_rw_module1';
import { TEST8_RW_MODULE_2_QUESTIONS } from './test8_rw_module2';
import { TEST8_MATH_MODULE_1_QUESTIONS } from './test8_math_module1';
import { TEST8_MATH_MODULE_2_QUESTIONS } from './test8_math_module2';

import { TEST7_RW_MODULE_1_QUESTIONS } from './test7_rw_module1';
import { TEST7_RW_MODULE_2_QUESTIONS } from './test7_rw_module2';
import { TEST7_MATH_MODULE_1_QUESTIONS } from './test7_math_module1';
import { TEST7_MATH_MODULE_2_QUESTIONS } from './test7_math_module2';

import { TEST6_RW_MODULE_1_QUESTIONS } from './test6_rw_module1';
import { TEST6_RW_MODULE_2_QUESTIONS } from './test6_rw_module2';
import { TEST6_MATH_MODULE_1_QUESTIONS } from './test6_math_module1';
import { TEST6_MATH_MODULE_2_QUESTIONS } from './test6_math_module2';

import { TEST5_RW_MODULE_1_QUESTIONS } from './test5_rw_module1';
import { TEST5_RW_MODULE_2_QUESTIONS } from './test5_rw_module2';
import { TEST5_MATH_MODULE_1_QUESTIONS } from './test5_math_module1';
import { TEST5_MATH_MODULE_2_QUESTIONS } from './test5_math_module2';

import { TEST4_RW_MODULE_1_QUESTIONS } from './test4_rw_module1';
import { TEST4_RW_MODULE_2_QUESTIONS } from './test4_rw_module2';
import { TEST4_MATH_MODULE_1_QUESTIONS } from './test4_math_module1';
import { TEST4_MATH_MODULE_2_QUESTIONS } from './test4_math_module2';

export { 
  RW_MODULE_1_QUESTIONS, 
  RW_MODULE_2_QUESTIONS, 
  MATH_MODULE_1_QUESTIONS, 
  MATH_MODULE_2_QUESTIONS,
  TEST2_RW_MODULE_1_QUESTIONS,
  TEST2_RW_MODULE_2_QUESTIONS,
  TEST2_MATH_MODULE_1_QUESTIONS,
  TEST2_MATH_MODULE_2_QUESTIONS,
  TEST9_RW_MODULE_1_QUESTIONS,
  TEST9_RW_MODULE_2_QUESTIONS,
  TEST9_MATH_MODULE_1_QUESTIONS,
  TEST9_MATH_MODULE_2_QUESTIONS,
  TEST8_RW_MODULE_1_QUESTIONS,
  TEST8_RW_MODULE_2_QUESTIONS,
  TEST8_MATH_MODULE_1_QUESTIONS,
  TEST8_MATH_MODULE_2_QUESTIONS,
  TEST7_RW_MODULE_1_QUESTIONS,
  TEST7_RW_MODULE_2_QUESTIONS,
  TEST7_MATH_MODULE_1_QUESTIONS,
  TEST7_MATH_MODULE_2_QUESTIONS,
  TEST6_RW_MODULE_1_QUESTIONS,
  TEST6_RW_MODULE_2_QUESTIONS,
  TEST6_MATH_MODULE_1_QUESTIONS,
  TEST6_MATH_MODULE_2_QUESTIONS,
  TEST5_RW_MODULE_1_QUESTIONS,
  TEST5_RW_MODULE_2_QUESTIONS,
  TEST5_MATH_MODULE_1_QUESTIONS,
  TEST5_MATH_MODULE_2_QUESTIONS,
  TEST4_RW_MODULE_1_QUESTIONS,
  TEST4_RW_MODULE_2_QUESTIONS,
  TEST4_MATH_MODULE_1_QUESTIONS,
  TEST4_MATH_MODULE_2_QUESTIONS
};

export type ModuleKey = 'RW_1' | 'RW_2' | 'MATH_1' | 'MATH_2';
export type TestId = 'test1' | 'test2' | 'test9' | 'test8' | 'test7' | 'test6' | 'test5' | 'test4';

export interface SATModule {
  key: ModuleKey;
  title: string;
  section: 'Reading and Writing' | 'Math';
  moduleNumber: number;
  questions: Question[];
}

export interface SATTest {
  id: TestId;
  name: string;
  shortName: string;
  modules: Record<ModuleKey, SATModule>;
}

export const SAT_TESTS: Record<TestId, SATTest> = {
  test1: {
    id: 'test1',
    name: 'Test No. 11',
    shortName: 'Test #11',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test2: {
    id: 'test2',
    name: 'Test No. 10',
    shortName: 'Test #10',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST2_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST2_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST2_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST2_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test9: {
    id: 'test9',
    name: 'Test No. 9',
    shortName: 'Test #9',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST9_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST9_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST9_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST9_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test8: {
    id: 'test8',
    name: 'Test No. 8',
    shortName: 'Test #8',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST8_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST8_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST8_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST8_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test7: {
    id: 'test7',
    name: 'Test No. 7',
    shortName: 'Test #7',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST7_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST7_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST7_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST7_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test6: {
    id: 'test6',
    name: 'Test No. 6',
    shortName: 'Test #6',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST6_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST6_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST6_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST6_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test5: {
    id: 'test5',
    name: 'Test No. 5',
    shortName: 'Test #5',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST5_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST5_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST5_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST5_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  },
  test4: {
    id: 'test4',
    name: 'Test No. 4',
    shortName: 'Test #4',
    modules: {
      RW_1: {
        key: 'RW_1',
        title: 'Reading and Writing Module 1',
        section: 'Reading and Writing',
        moduleNumber: 1,
        questions: TEST4_RW_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      RW_2: {
        key: 'RW_2',
        title: 'Reading and Writing Module 2',
        section: 'Reading and Writing',
        moduleNumber: 2,
        questions: TEST4_RW_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_1: {
        key: 'MATH_1',
        title: 'Math Module 1',
        section: 'Math',
        moduleNumber: 1,
        questions: TEST4_MATH_MODULE_1_QUESTIONS.map(sanitizeQuestion)
      },
      MATH_2: {
        key: 'MATH_2',
        title: 'Math Module 2',
        section: 'Math',
        moduleNumber: 2,
        questions: TEST4_MATH_MODULE_2_QUESTIONS.map(sanitizeQuestion)
      }
    }
  }
};

export const TEST_LIST = [
  { id: 'test4' as TestId, name: 'Test No. 4' },
  { id: 'test5' as TestId, name: 'Test No. 5' },
  { id: 'test6' as TestId, name: 'Test No. 6' },
  { id: 'test7' as TestId, name: 'Test No. 7' },
  { id: 'test8' as TestId, name: 'Test No. 8' },
  { id: 'test9' as TestId, name: 'Test No. 9' },
  { id: 'test2' as TestId, name: 'Test No. 10' },
  { id: 'test1' as TestId, name: 'Test No. 11' }
];

export const SAT_MODULES = SAT_TESTS.test1.modules;

export const ALL_SAT_QUESTIONS: Question[] = [
  ...SAT_TESTS.test1.modules.RW_1.questions,
  ...SAT_TESTS.test1.modules.RW_2.questions,
  ...SAT_TESTS.test1.modules.MATH_1.questions,
  ...SAT_TESTS.test1.modules.MATH_2.questions,
  ...SAT_TESTS.test2.modules.RW_1.questions,
  ...SAT_TESTS.test2.modules.RW_2.questions,
  ...SAT_TESTS.test2.modules.MATH_1.questions,
  ...SAT_TESTS.test2.modules.MATH_2.questions,
  ...SAT_TESTS.test9.modules.RW_1.questions,
  ...SAT_TESTS.test9.modules.RW_2.questions,
  ...SAT_TESTS.test9.modules.MATH_1.questions,
  ...SAT_TESTS.test9.modules.MATH_2.questions,
  ...SAT_TESTS.test8.modules.RW_1.questions,
  ...SAT_TESTS.test8.modules.RW_2.questions,
  ...SAT_TESTS.test8.modules.MATH_1.questions,
  ...SAT_TESTS.test8.modules.MATH_2.questions,
  ...SAT_TESTS.test7.modules.RW_1.questions,
  ...SAT_TESTS.test7.modules.RW_2.questions,
  ...SAT_TESTS.test7.modules.MATH_1.questions,
  ...SAT_TESTS.test7.modules.MATH_2.questions,
  ...SAT_TESTS.test6.modules.RW_1.questions,
  ...SAT_TESTS.test6.modules.RW_2.questions,
  ...SAT_TESTS.test6.modules.MATH_1.questions,
  ...SAT_TESTS.test6.modules.MATH_2.questions,
  ...SAT_TESTS.test5.modules.RW_1.questions,
  ...SAT_TESTS.test5.modules.RW_2.questions,
  ...SAT_TESTS.test5.modules.MATH_1.questions,
  ...SAT_TESTS.test5.modules.MATH_2.questions,
  ...SAT_TESTS.test4.modules.RW_1.questions,
  ...SAT_TESTS.test4.modules.RW_2.questions,
  ...SAT_TESTS.test4.modules.MATH_1.questions,
  ...SAT_TESTS.test4.modules.MATH_2.questions
];

export const SAT_QUESTIONS: Question[] = ALL_SAT_QUESTIONS;
