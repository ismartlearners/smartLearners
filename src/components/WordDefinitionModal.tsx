import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Search, 
  Copy, 
  Check, 
  GripHorizontal,
  RefreshCw,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { extractTargetContextSentence } from '../utils/contextExtractor';

export interface WordDefinitionData {
  word: string;
  partOfSpeech?: string;
  partOfSpeechVi?: string;
  phonetic?: string;
  definitionEn?: string;
  definitionVi?: string;
  contextMeaningEn?: string;
  contextMeaningVi?: string;
  exampleEn?: string;
  exampleVi?: string;
  synonyms?: string[];
}

interface WordDefinitionModalProps {
  word: string;
  context?: string;
  position: { x: number; y: number } | null;
  onClose: () => void;
  onLookupNewWord: (newWord: string) => void;
}

export const WordDefinitionModal: React.FC<WordDefinitionModalProps> = ({
  word,
  context,
  position,
  onClose,
  onLookupNewWord,
}) => {
  const [data, setData] = useState<WordDefinitionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Position calculation on open
  useEffect(() => {
    if (position) {
      const modalWidth = 420;
      const modalHeight = 440;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let targetX = position.x + 10;
      let targetY = position.y + 15;

      // Adjust if overflowing horizontally
      if (targetX + modalWidth > viewportWidth - 20) {
        targetX = Math.max(20, position.x - modalWidth - 10);
      }
      if (targetX < 20) targetX = 20;

      // Adjust if overflowing vertically
      if (targetY + modalHeight > viewportHeight - 20) {
        targetY = Math.max(20, position.y - modalHeight - 15);
      }
      if (targetY < 20) targetY = 20;

      setPos({ x: targetX, y: targetY });
    } else {
      // Center on screen
      setPos({
        x: Math.max(20, (window.innerWidth - 420) / 2),
        y: Math.max(20, (window.innerHeight - 440) / 2),
      });
    }
  }, [position]);

  // Client-side multi-provider translation helper
  const translateClientTextToVi = async (text: string): Promise<string> => {
    if (!text || !text.trim()) return "";
    const clean = text.trim();

    // Provider 1: Google Translate GTX
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(clean)}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && Array.isArray(data[0])) {
          const t = data[0].map((item: any) => item[0]).filter(Boolean).join("");
          if (t && t.trim()) return t.trim();
        }
      }
    } catch {
      // Continue
    }

    // Provider 2: MyMemory API
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=en|vi`;
      const res = await fetch(url, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        const data = await res.json();
        const match = data?.responseData?.translatedText;
        if (match && typeof match === "string" && match.trim() && !match.toLowerCase().includes("mymemory")) {
          return match.trim();
        }
      }
    } catch {
      // Continue
    }

    return "";
  };

  // Direct client-side Free Dictionary lookup for maximum resilience
  const fetchDirectFreeDictionary = async (targetWord: string, targetContext?: string): Promise<WordDefinitionData> => {
    const clean = targetWord.toLowerCase().trim();
    const targetSentence = extractTargetContextSentence(targetContext, targetWord);
    let bestDef = "";
    let bestPos = "vocabulary";
    let bestEx = "";
    let phonetic = `/${clean}/`;

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, {
        signal: AbortSignal.timeout(3500)
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const entry = data[0];
          phonetic = entry.phonetic || entry.phonetics?.find((p: any) => p.text)?.text || `/${clean}/`;
          for (const m of entry.meanings || []) {
            for (const d of m.definitions || []) {
              if (d.definition) {
                if (!bestDef) {
                  bestDef = d.definition;
                  bestPos = m.partOfSpeech || bestPos;
                }
                if (d.example && !bestEx) {
                  bestEx = d.example;
                  bestDef = d.definition;
                  bestPos = m.partOfSpeech || bestPos;
                  break;
                }
              }
            }
          }
        }
      }
    } catch {
      // ignore
    }

    // Secondary fallback via Datamuse definitions if Free Dictionary didn't find the definition
    if (!bestDef) {
      try {
        const dmRes = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(clean)}&md=d&max=1`, {
          signal: AbortSignal.timeout(2500)
        });
        if (dmRes.ok) {
          const dmData = await dmRes.json();
          if (Array.isArray(dmData) && dmData[0]?.defs?.length > 0) {
            const rawDef = dmData[0].defs[0];
            const parts = rawDef.split("\t");
            if (parts.length >= 2) {
              bestPos = parts[0] === "n" ? "noun" : parts[0] === "v" ? "verb" : parts[0] === "adj" ? "adjective" : parts[0] === "adv" ? "adverb" : "vocabulary";
              bestDef = parts[1].trim();
            } else {
              bestDef = rawDef.trim();
            }
          }
        }
      } catch {
        // ignore
      }
    }

    if (!bestDef) {
      bestDef = `Definition for "${targetWord}".`;
    }

    // Translation
    const defVi = await translateClientTextToVi(bestDef);
    const ctxVi = targetSentence ? await translateClientTextToVi(targetSentence) : "";
    const exVi = bestEx ? await translateClientTextToVi(bestEx) : "";

    // Synonyms
    let synonyms: string[] = [];
    try {
      const sRes = await fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(clean)}&max=6`, {
        signal: AbortSignal.timeout(2000)
      });
      if (sRes.ok) {
        const sData = await sRes.json();
        if (Array.isArray(sData)) {
          synonyms = sData.map((item: any) => item.word).filter(Boolean);
        }
      }
    } catch {
      // ignore
    }

    const posMap: Record<string, string> = {
      noun: "danh từ",
      verb: "động từ",
      adjective: "tính từ",
      adverb: "trạng từ",
      pronoun: "đại từ",
      preposition: "giới từ",
      conjunction: "liên từ",
      interjection: "thán từ",
      vocabulary: "từ vựng"
    };

    return {
      word: targetWord,
      partOfSpeech: bestPos,
      partOfSpeechVi: posMap[bestPos] || "từ vựng",
      phonetic,
      definitionEn: bestDef,
      definitionVi: defVi || `Định nghĩa cho "${targetWord}"`,
      contextMeaningEn: targetSentence ? `In this passage: "${targetSentence}"` : undefined,
      contextMeaningVi: targetSentence ? (ctxVi ? `Trong đoạn trích: "${ctxVi}"` : `Trong đoạn trích: "${targetSentence}"`) : undefined,
      exampleEn: bestEx || undefined,
      exampleVi: exVi || undefined,
      synonyms
    };
  };

  // Fetch definition from server route with instant direct fallback
  const fetchDefinition = async (targetWord: string, targetContext?: string) => {
    if (!targetWord || !targetWord.trim()) return;
    const cleanWord = targetWord.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    if (!cleanWord) return;

    setLoading(true);
    setError(null);

    // Safeguard timer so the modal NEVER remains in a loading state under any network condition
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    try {
      const response = await fetch('/api/define-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          word: cleanWord,
          context: targetContext || ''
        })
      });

      if (response.ok) {
        const json: WordDefinitionData = await response.json();
        if (json && (json.definitionEn || json.definitionVi || json.word)) {
          // Verify if Vietnamese definition or context needs auto-healing
          if (!json.definitionVi && json.definitionEn) {
            json.definitionVi = await translateClientTextToVi(json.definitionEn);
          }
          if (json.contextMeaningEn && !json.contextMeaningVi) {
            const rawCtx = json.contextMeaningEn.replace(/^In (?:this )?passage:\s*["']?|["']?$/gi, "");
            const translatedCtx = await translateClientTextToVi(rawCtx);
            if (translatedCtx) {
              json.contextMeaningVi = `Trong đoạn trích: "${translatedCtx}"`;
            }
          }

          clearTimeout(safetyTimer);
          setData(json);
          setLoading(false);
          return;
        }
      }
    } catch {
      // Silently fall through to direct dictionary lookup
    }

    // Direct browser dictionary lookup
    try {
      const directResult = await fetchDirectFreeDictionary(cleanWord, targetContext);
      setData(directResult);
    } catch {
      const targetSentence = extractTargetContextSentence(targetContext, cleanWord);
      setData({
        word: cleanWord,
        partOfSpeech: "vocabulary",
        partOfSpeechVi: "từ vựng",
        phonetic: `/${cleanWord.toLowerCase()}/`,
        definitionEn: `Definition for "${cleanWord}".`,
        definitionVi: `Định nghĩa cho từ "${cleanWord}".`,
        contextMeaningEn: targetSentence ? `In this passage: "${targetSentence}"` : undefined,
        contextMeaningVi: targetSentence ? `Trong đoạn trích: "${targetSentence}"` : undefined,
        synonyms: []
      });
    } finally {
      clearTimeout(safetyTimer);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchDefinition(word, context);
      setSearchInput(word);
    }
  }, [word, context]);

  // Pronunciation with SpeechSynthesis
  const speakWord = () => {
    if ('speechSynthesis' in window && data?.word) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(data.word);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Copy definition
  const handleCopy = () => {
    if (!data) return;
    const textToCopy = `${data.word} (${data.partOfSpeech || ''} / ${data.partOfSpeechVi || ''})\n` +
      `[EN]: ${data.definitionEn || ''}\n` +
      `[VN]: ${data.definitionVi || ''}\n` +
      (data.exampleEn ? `Example: "${data.exampleEn}"\n(${data.exampleVi || ''})` : '');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onLookupNewWord(searchInput.trim());
    }
  };

  // Dragging logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('input')) {
      return;
    }
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const modalWidth = modalRef.current?.offsetWidth || 420;
      const modalHeight = modalRef.current?.offsetHeight || 400;
      const newX = Math.max(10, Math.min(window.innerWidth - modalWidth - 10, e.clientX - dragOffset.x));
      const newY = Math.max(10, Math.min(window.innerHeight - modalHeight - 10, e.clientY - dragOffset.y));
      setPos({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      id="bilingual-word-definition-popup"
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 9999,
        width: '420px',
        maxWidth: 'calc(100vw - 24px)',
      }}
      className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-300 text-slate-800 text-sm overflow-hidden flex flex-col transition-shadow animate-fadeIn select-text"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header bar (Draggable) */}
      <div
        onMouseDown={handleMouseDown}
        className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 text-white cursor-grab active:cursor-grabbing border-b border-slate-800 select-none"
      >
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-blue-500/20 text-blue-300">
            <BookOpen className="w-3.5 h-3.5 text-blue-300" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-xs text-slate-100">Bilingual Dictionary</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-blue-500/30 text-blue-200 rounded border border-blue-400/30 font-bold">
                EN • VI
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onClose}
            title="Close (Esc)"
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 max-h-[440px] overflow-y-auto space-y-3.5">
        {loading ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <RefreshCw className="w-6 h-6 text-blue-600 animate-spin" />
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-850">Looking up "{word}"...</p>
              <p className="text-[11px] text-slate-500">Generating English & Vietnamese definitions...</p>
            </div>
          </div>
        ) : error ? (
          <div className="py-4 text-center space-y-2.5">
            <div className="text-xs text-red-600 font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
              {error}
            </div>
            <button
              type="button"
              onClick={() => fetchDefinition(word, context)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          </div>
        ) : data ? (
          <>
            {/* Word Header */}
            <div className="flex items-baseline justify-between border-b border-slate-100 pb-2.5">
              <div className="space-y-1">
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="text-xl font-serif font-bold text-slate-900 capitalize tracking-tight">
                    {data.word}
                  </h3>
                  {data.partOfSpeech && (
                    <span className="text-[11px] font-sans font-medium px-2 py-0.5 bg-blue-50 text-blue-800 rounded-full border border-blue-200/80">
                      {data.partOfSpeech} {data.partOfSpeechVi ? `• ${data.partOfSpeechVi}` : ''}
                    </span>
                  )}
                </div>
                {data.phonetic && (
                  <p className="text-xs font-mono text-slate-500">
                    {data.phonetic}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={speakWord}
                  title="Pronounce"
                  className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy bilingual definition"
                  className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                </button>
              </div>
            </div>

            {/* Main Definition Card */}
            {(data.definitionEn || data.definitionVi) && (
              <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/90 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Definition</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">EN → VI</span>
                </div>
                {data.definitionEn && (
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    {data.definitionEn}
                  </p>
                )}
                {data.definitionVi && (
                  <p className="text-xs font-medium text-emerald-950 leading-relaxed pt-1.5 border-t border-slate-200/80">
                    <span className="font-bold text-emerald-800">Vietnamese: </span>
                    {data.definitionVi}
                  </p>
                )}
              </div>
            )}

            {/* Context meaning if applicable */}
            {(data.contextMeaningEn || data.contextMeaningVi) && (
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 text-xs space-y-2 text-amber-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    <span>In Context</span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700/80 uppercase">EN → VI</span>
                </div>
                {data.contextMeaningEn && (
                  <p className="leading-snug text-slate-900 font-medium">
                    {data.contextMeaningEn}
                  </p>
                )}
                {data.contextMeaningVi && (
                  <p className="font-medium text-amber-950 leading-relaxed pt-1.5 border-t border-amber-200/80">
                    <span className="font-bold text-amber-900">Vietnamese: </span>
                    {data.contextMeaningVi}
                  </p>
                )}
              </div>
            )}

            {/* Example sentence with translation */}
            {(data.exampleEn || data.exampleVi) && (
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 text-xs space-y-2 text-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    <span>Example</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">EN → VI</span>
                </div>
                {data.exampleEn && (
                  <p className="italic text-slate-900 font-medium leading-relaxed">
                    "{data.exampleEn}"
                  </p>
                )}
                {data.exampleVi && (
                  <p className="font-medium text-emerald-950 leading-relaxed not-italic pt-1.5 border-t border-slate-200/80">
                    <span className="font-bold text-emerald-800">Vietnamese: </span>
                    {data.exampleVi}
                  </p>
                )}
              </div>
            )}

            {/* Synonyms */}
            {data.synonyms && data.synonyms.filter(syn => typeof syn === 'string' && /^[a-zA-Z\s\-']+$/.test(syn.trim())).length > 0 && (
              <div className="space-y-1.5 pt-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-600 block">
                    English Synonyms
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">click to define</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.synonyms
                    .filter(syn => typeof syn === 'string' && /^[a-zA-Z\s\-']+$/.test(syn.trim()))
                    .map((syn, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onLookupNewWord(syn.trim())}
                        className="text-[11px] px-2.5 py-0.5 bg-slate-100 hover:bg-blue-100 hover:text-blue-800 text-slate-800 rounded-md transition cursor-pointer border border-slate-200/90 hover:border-blue-300 font-medium font-mono"
                        title={`Lookup English synonym: "${syn.trim()}"`}
                      >
                        {syn.trim()}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>

      {/* Quick Lookup Search Footer */}
      <form
        onSubmit={handleSearchSubmit}
        className="p-2.5 bg-slate-50 border-t border-slate-200 flex items-center gap-1.5"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Tra cứu từ khác (Search word)..."
            className="w-full text-xs pl-7 pr-2.5 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2 pointer-events-none" />
        </div>
        <button
          type="submit"
          disabled={!searchInput.trim()}
          className="px-3 py-1.5 bg-[#003366] hover:bg-[#002244] disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span>Define</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
