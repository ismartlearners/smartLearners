/**
 * Utility to evaluate whether a user's entered response
 * matches the target correctAnswer for Student-Produced Response math questions.
 */
export function checkMathAnswer(userAns: string | null | undefined, correctAns: string | null | undefined): boolean {
  if (!userAns || !correctAns) return false;

  const rawUser = userAns.trim().replace(/,/g, '');
  const rawCorrect = correctAns.trim().replace(/,/g, '');

  if (!rawUser) return false;

  // 1. Direct string equality (case-insensitive)
  if (rawUser.toLowerCase() === rawCorrect.toLowerCase()) {
    return true;
  }

  // Parses string to number, supporting fractions like "3/4" or "-1/2"
  const parseVal = (str: string): number | null => {
    const s = str.trim();
    if (!s) return null;
    if (s.includes('/')) {
      const parts = s.split('/');
      if (parts.length === 2) {
        const num = parseFloat(parts[0]);
        const den = parseFloat(parts[1]);
        if (!isNaN(num) && !isNaN(den) && den !== 0) {
          return num / den;
        }
      }
      return null;
    }
    const val = parseFloat(s);
    return isNaN(val) ? null : val;
  };

  const userNum = parseVal(rawUser);

  // 2. Check if correctAns specifies multiple valid options (e.g. "8.6; 43/5", "2 or -12", "2, -12", "either 2 or -12")
  const correctTokens = rawCorrect.split(/\s+or\s+|\s*,\s*|\s*;\s*|\s+and\s+/i);
  for (const token of correctTokens) {
    const cleanedToken = token.trim();
    if (cleanedToken.toLowerCase() === rawUser.toLowerCase()) {
      return true;
    }
    const tokenNum = parseVal(cleanedToken);
    if (userNum !== null && tokenNum !== null) {
      if (Math.abs(userNum - tokenNum) < 1e-4) {
        return true;
      }
    }
  }

  // 3. Compare userNum directly with single parsed correctNum
  const correctNum = parseVal(rawCorrect);
  if (userNum !== null && correctNum !== null) {
    return Math.abs(userNum - correctNum) < 1e-4;
  }

  return false;
}
