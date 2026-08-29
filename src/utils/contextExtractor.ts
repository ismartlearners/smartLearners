/**
 * Utility to accurately extract the complete sentence or focused phrase containing the target word
 * from passage text or context strings.
 * Ensures the target word is ALWAYS included without awkward mid-sentence cutoffs.
 */
export function extractTargetContextSentence(fullText?: string, targetWord?: string): string {
  if (!fullText || typeof fullText !== 'string' || !targetWord || typeof targetWord !== 'string') {
    return '';
  }

  // 1. Strip HTML tags, decode common entities, and normalize whitespace
  let cleanText = fullText
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) return '';

  const cleanWord = targetWord.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
  if (!cleanWord || cleanWord.length < 2) return '';

  // 2. Find word location using regex with word boundary, falling back to substring
  const escapedWord = cleanWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let wordRegex = new RegExp(`\\b${escapedWord}\\b`, 'i');
  let match = cleanText.match(wordRegex);

  // If exact boundary not found, try root match or substring
  if (!match) {
    wordRegex = new RegExp(`${escapedWord}`, 'i');
    match = cleanText.match(wordRegex);
  }

  if (!match || match.index === undefined) {
    return '';
  }

  const wordIndex = match.index;
  const matchLen = match[0].length;

  // 3. Find natural sentence boundaries around the matched word
  // Search backward for sentence start: punctuation (. ? !) followed by space, or start of string
  const beforeText = cleanText.substring(0, wordIndex);
  let sentenceStart = 0;
  
  const startPunctMatches = [...beforeText.matchAll(/(?:[.!?]["'»]?\s+|\n+)/g)];
  if (startPunctMatches.length > 0) {
    const lastPunct = startPunctMatches[startPunctMatches.length - 1];
    if (lastPunct.index !== undefined) {
      sentenceStart = lastPunct.index + lastPunct[0].length;
    }
  }

  // Search forward for sentence end: punctuation (. ? !) or end of string
  const afterText = cleanText.substring(wordIndex + matchLen);
  let sentenceEnd = cleanText.length;
  const endPunctMatch = afterText.match(/[.!?](?:["'»]?\s+|\s*$)/);
  if (endPunctMatch && endPunctMatch.index !== undefined) {
    sentenceEnd = wordIndex + matchLen + endPunctMatch.index + (endPunctMatch[0].trim().length || 1);
  }

  let sentence = cleanText.substring(sentenceStart, sentenceEnd).trim();

  // Clean leading/trailing punctuation if not part of a sentence
  sentence = sentence.replace(/^[-,:;\s]+/, '').replace(/[-,:;\s]+$/, '');

  // If the extracted sentence is within 220 characters and contains the word, return it
  if (sentence.length > 0 && sentence.length <= 220 && sentence.toLowerCase().includes(cleanWord.toLowerCase())) {
    return sentence;
  }

  // If the sentence is very long (> 220 chars), extract a clean phrase/window around the word bounded by words
  const words = cleanText.split(/\s+/);
  let targetWordIdx = -1;
  for (let i = 0; i < words.length; i++) {
    const w = words[i].replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '').toLowerCase();
    if (w === cleanWord.toLowerCase() || w.includes(cleanWord.toLowerCase()) || cleanWord.toLowerCase().includes(w)) {
      targetWordIdx = i;
      break;
    }
  }

  if (targetWordIdx !== -1) {
    const startIdx = Math.max(0, targetWordIdx - 10);
    const endIdx = Math.min(words.length, targetWordIdx + 11);
    const sliceWords = words.slice(startIdx, endIdx);
    let phrase = sliceWords.join(' ');
    if (startIdx > 0 && !phrase.startsWith('...')) {
      phrase = '...' + phrase;
    }
    if (endIdx < words.length && !phrase.endsWith('...')) {
      phrase = phrase + '...';
    }
    return phrase;
  }

  return sentence;
}
