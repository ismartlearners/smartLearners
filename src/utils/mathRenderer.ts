import katex from 'katex';

/**
 * Renders inline \(...\) / $...$ and block \[...\] / $$...$$ math delimiters using KaTeX.
 */
export function renderMathInHtml(html: string): string {
  if (!html) return '';

  let clean = String(html);

  // 1. Repair JS control character corruptions caused by raw string unescaping (ASCII 0x01 - 0x1F)
  clean = clean.replace(/\x0Dight/g, '\\right');
  clean = clean.replace(/\x0Dho/g, '\\rho');
  clean = clean.replace(/\x0Def/g, '\\ref');
  clean = clean.replace(/\x09ext/g, '\\text');
  clean = clean.replace(/\x09imes/g, '\\times');
  clean = clean.replace(/\x09heta/g, '\\theta');
  clean = clean.replace(/\x09au/g, '\\tau');
  clean = clean.replace(/\x09an/g, '\\tan');
  clean = clean.replace(/\x09riangle/g, '\\triangle');
  clean = clean.replace(/\x0Crac/g, '\\frac');
  clean = clean.replace(/\x08eta/g, '\\beta');
  clean = clean.replace(/\x08inom/g, '\\binom');
  clean = clean.replace(/\x08egin/g, '\\begin');
  clean = clean.replace(/\x0Aeq/g, '\\neq');
  clean = clean.replace(/\x0Bec/g, '\\vec');

  // Normalize multi-escaped backslashes before math delimiters
  clean = clean.replace(/\\\\+([\(\)\[\]\$])/g, '\\$1');

  // Protect already-wrapped math blocks and SVGs before running raw text heuristics
  const protectedBlocks: string[] = [];
  clean = clean.replace(/(\\\[[\s\S]*?\\\]|\\\$[\s\S]*?\\\$|\\\([\s\S]*?\\\)|<svg[\s\S]*?<\/svg>)/gi, (m) => {
    protectedBlocks.push(m);
    return `__PROTECTED_MATH_${protectedBlocks.length - 1}__`;
  });

  // 2. Fix unescaped math commands, unit exponents, and unicode radicals in unprotected text
  clean = clean.replace(/(\d+)\{,\}(\d+)/g, '$1,$2');
  clean = clean.replace(/([^\\]|^)\bfrac\{/g, '$1\\frac{');
  clean = clean.replace(/([^\\]|^)\brac\{/g, '$1\\frac{');
  clean = clean.replace(/([^\\]|^)\bsqrt\{/g, '$1\\sqrt{');
  clean = clean.replace(/([^\\]|^)⁵√\(([^)]+)\)/g, '$1\\(\\sqrt[5]{$2}\\)');
  clean = clean.replace(/([^\\]|^)⁵√([a-zA-Z0-9³²¹⁴⁵]+)/g, (_, p, val) => {
    const norm = val.replace(/³/g, '^3').replace(/²/g, '^2');
    return `${p}\\(\\sqrt[5]{${norm}}\\)`;
  });
  clean = clean.replace(/([^\\]|^)√\(([^)]+)\)/g, '$1\\(\\sqrt{$2}\\)');
  clean = clean.replace(/([^\\]|^)√([a-zA-Z0-9]+)/g, '$1\\(\\sqrt{$2}\\)');
  clean = clean.replace(/\b(cm|m|mm|km|ft|in|yd)\(\^([0-9]+)\)/gi, '\\(\\text{$1}^$2\\)');
  clean = clean.replace(/([a-zA-Z0-9]+)\(\^([0-9]+)\)/g, '\\($1^$2\\)');

  // 2b. Fix equations and expressions with raw exponential carets outside math delimiters
  // e.g. P(t) = 1,800(1.02)^t, C = 40(1.19)^t, y^(3/5), f(x) = a · b^x
  clean = clean.replace(/(\b[A-Za-z]\([A-Za-z0-9]+\)\s*=\s*[0-9\.,\s\(\)]+\^[A-Za-z0-9\(\)\/\+\-]+)/g, (m) => {
    return `\\(${m.replace(/,/g, '{,}')}\\)`;
  });
  clean = clean.replace(/(\b[A-Za-z]\s*=\s*[0-9\.,\s\(\)]+\^[A-Za-z0-9\(\)\/\+\-]+)/g, (m) => {
    return `\\(${m.replace(/,/g, '{,}')}\\)`;
  });
  clean = clean.replace(/\b([a-zA-Z0-9\)]+)\s*\^\s*\(([0-9a-zA-Z\/\+\-]+)\)/g, '\\($1^{$2}\\)');

  // 2c. Remove erroneous outer parentheses wrapped around angle expressions
  clean = clean.replace(/\(\s*\\angle\b\s*([A-Za-z0-9]+)\s*\)/gi, '\\(\\angle $1\\)');
  clean = clean.replace(/\(\s*angle\b\s*([A-Za-z0-9]+)\s*\)/gi, '\\(\\angle $1\\)');

  // 2d. Auto-wrap standalone \angle, \triangle, \frac, \sqrt outside math blocks
  clean = clean.replace(/\\angle\s*([A-Za-z0-9]+)/g, (_, p1) => `\\(\\angle ${p1}\\)`);
  clean = clean.replace(/\\angle\b/g, () => `\\(\\angle\\)`);
  clean = clean.replace(/\\triangle\s*([A-Za-z0-9]+)/g, (_, p1) => `\\(\\triangle ${p1}\\)`);
  clean = clean.replace(/([^\\]|^)\\frac\{([^}]+)\}\{([^}]+)\}/g, (_, prefix, p1, p2) => `${prefix}\\(\\frac{${p1}}{${p2}}\\)`);
  clean = clean.replace(/([^\\]|^)\\sqrt\{([^}]+)\}/g, (_, prefix, p1) => `${prefix}\\(\\sqrt{${p1}}\\)`);

  // 3. Restore protected blocks
  clean = clean.replace(/__PROTECTED_MATH_(\d+)__/g, (_, idx) => protectedBlocks[parseInt(idx, 10)]);

  // 4. Clean any double-wrapped delimiters like \(\( ... \)\) or trailing delimiters
  clean = clean.replace(/\\\(\s*\\\(([\s\S]*?)\\\)\s*\\\)/g, '\\($1\\)');
  clean = clean.replace(/\\\(([\s\S]*?)\\\)\s*\\\)+/g, '\\($1\\)');
  clean = clean.replace(/(\\\([\s\S]*?\\\))\s*\\\)+/g, '$1');

  // If a string has no opening \( but ends with \), wrap it as math if it contains equations/variables, or strip it
  if (!clean.includes('\\(') && clean.endsWith('\\)')) {
    const withoutTrailing = clean.replace(/\\\)+$/, '').trim();
    if (/[=<>+\-\/*\^]/.test(withoutTrailing) || /^[a-zA-Z0-9\s()\/,.\-–—]+$/.test(withoutTrailing)) {
      clean = `\\(${withoutTrailing}\\)`;
    } else {
      clean = withoutTrailing;
    }
  }

  // 5. Fix LaTeX syntax errors that break KaTeX
  clean = clean.replace(/\^\\circ/g, '^{\\circ}');
  clean = clean.replace(/\^circ\b/g, '^{\\circ}');
  clean = clean.replace(/\^\{([^}]+)\}\^\{([^}]+)\}/g, '^{$1$2}');

  // 6. Convert raw newlines to <br /> for plain text strings lacking block HTML tags
  if (!clean.includes('<div') && !clean.includes('<p') && !clean.includes('<table') && !clean.includes('<ul') && !clean.includes('<ol')) {
    clean = clean.replace(/\r\n/g, '\n').replace(/\n\n/g, '<br /><br />').replace(/\n/g, '<br />');
  }

  // 7. Process block math \[ ... \] or $$ ... $$
  let processed = clean.replace(/(\\\[|\\\$\\\$)([\s\S]*?)(\\\]|\\\$\\\$)/g, (_, __, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return math;
    }
  });

  // 8. Process inline math \( ... \)
  processed = processed.replace(/(\\\()([\s\S]*?)(\\\))/g, (_, __, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return math;
    }
  });

  // 9. Clean up any leftover stray unrendered delimiters
  processed = processed.replace(/\\\)+/g, '');
  processed = processed.replace(/\\\(/g, '');

  return processed;
}
