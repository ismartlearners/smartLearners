// Helper utility to sanitize and clean broken LaTeX backslashes and math formatting
// Handles broken slashes caused by raw JS string escaping (e.g. \text -> ext, \frac -> frac, \mu -> mu)

const subscriptMap: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

const superscriptMap: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ', 'x': 'ˣ'
};

function convertSubscripts(str: string): string {
  // Handles _{123} or _{x}
  str = str.replace(/_\{([^}]+)\}/g, (_, inner) => {
    return inner.split('').map((char: string) => subscriptMap[char] || char).join('');
  });
  // Handles _0, _1, _2, _x (single character subscript)
  str = str.replace(/_([0-9a-eijklmnoprstuvx+-=])/g, (_, char) => {
    return subscriptMap[char] || `_${char}`;
  });
  return str;
}

function convertSuperscripts(str: string): string {
  // Handles ^{123} or ^{-1}
  str = str.replace(/\^\{([^}]+)\}/g, (_, inner) => {
    return inner.split('').map((char: string) => superscriptMap[char] || char).join('');
  });
  // Handles ^2, ^3, ^0, ^1, etc.
  str = str.replace(/\^([0-9a-z+-=])/gi, (_, char) => {
    return superscriptMap[char] || `^${char}`;
  });
  return str;
}

/**
 * Sanitizes input text/HTML by repairing JS string escape corruptions (e.g. \t, \f)
 * while strictly preserving KaTeX / LaTeX math formatting (\(, \), \[, \], \sqrt, \frac, etc.)
 */
export function sanitizeText(text: string | null | undefined): string {
  if (!text) return '';

  let sanitized = text;

  // Step 1: Repair JS control character corruptions caused by raw string unescaping (ASCII 0x01 - 0x1F)
  sanitized = sanitized.replace(/\x0Dight/g, '\\right');
  sanitized = sanitized.replace(/\x0Dho/g, '\\rho');
  sanitized = sanitized.replace(/\x0Def/g, '\\ref');
  sanitized = sanitized.replace(/\x09ext/g, '\\text');
  sanitized = sanitized.replace(/\x09imes/g, '\\times');
  sanitized = sanitized.replace(/\x09heta/g, '\\theta');
  sanitized = sanitized.replace(/\x09au/g, '\\tau');
  sanitized = sanitized.replace(/\x09an/g, '\\tan');
  sanitized = sanitized.replace(/\x09riangle/g, '\\triangle');
  sanitized = sanitized.replace(/\x0Crac/g, '\\frac');
  sanitized = sanitized.replace(/\x08eta/g, '\\beta');
  sanitized = sanitized.replace(/\x08inom/g, '\\binom');
  sanitized = sanitized.replace(/\x08egin/g, '\\begin');
  sanitized = sanitized.replace(/\x0Aeq/g, '\\neq');
  sanitized = sanitized.replace(/\x0Bec/g, '\\vec');

  // Step 2: Fix unescaped math commands
  sanitized = sanitized.replace(/([^\\]|^)\bfrac\{/g, '$1\\frac{');
  sanitized = sanitized.replace(/([^\\]|^)\brac\{/g, '$1\\frac{');
  sanitized = sanitized.replace(/([^\\]|^)\bsqrt\{/g, '$1\\sqrt{');

  // Step 3: Fix LaTeX syntax issues that break KaTeX
  sanitized = sanitized.replace(/\^\\circ/g, '^{\\circ}');
  sanitized = sanitized.replace(/\^\{([^}]+)\}\^\{([^}]+)\}/g, '^{$1$2}');

  return sanitized;
}

/**
 * Automatically sanitizes all text fields of a Question object.
 */
export function sanitizeQuestion<T extends {
  type?: 'Reading and Writing' | 'Math';
  section?: string;
  moduleKey?: string;
  passageHtml?: string;
  questionText: string;
  passageTitle?: string;
  options?: Array<{ id: string; text: string }>;
  explanation?: string;
}>(question: T): T {
  if (!question) {
    return {
      id: 0,
      type: "Reading and Writing",
      module: 1,
      domain: "",
      questionText: "No question available.",
      options: [],
      correctAnswer: "A",
      explanation: ""
    } as unknown as T;
  }
  const inferredType = question.type || (question.section === 'Math' || (question.moduleKey && question.moduleKey.startsWith('MATH')) ? 'Math' : 'Reading and Writing');
  return {
    ...question,
    type: inferredType,
    passageTitle: question.passageTitle ? sanitizeText(question.passageTitle) : question.passageTitle,
    passageHtml: question.passageHtml ? sanitizeText(question.passageHtml) : question.passageHtml,
    questionText: sanitizeText(question.questionText),
    options: (question.options || []).map(opt => ({
      ...opt,
      text: sanitizeText(opt.text)
    })),
    explanation: question.explanation ? sanitizeText(question.explanation) : question.explanation
  };
}
