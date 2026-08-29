import React, { useState, useEffect, useRef } from 'react';
import { 
  PenTool, 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  Grid, 
  ArrowRight, 
  FileText, 
  Calculator, 
  Edit3, 
  Trash2, 
  Undo2, 
  X, 
  CheckCircle2,
  XCircle,
  Highlighter,
  Eraser,
  StickyNote,
  Plus,
  Move,
  GripVertical,
  RotateCcw,
  Check,
  Save,
  RefreshCw,
  ExternalLink,
  Coffee,
  Clock,
  Sparkles,
  BookOpen,
  Lightbulb,
  HelpCircle
} from 'lucide-react';
import { SAT_QUESTIONS, SAT_TESTS, TEST_LIST, ModuleKey, TestId } from './data/questions';
import { sanitizeQuestion } from './utils/sanitizeText';
import { renderMathInHtml } from './utils/mathRenderer';
import { checkMathAnswer } from './utils/mathAnswerChecker';
import { 
  QuestionAnswerArea, 
  TEST11_Q1_OPTION_HINTS, 
  TEST11_Q2_OPTION_HINTS, 
  TEST11_Q3_OPTION_HINTS, 
  TEST11_Q4_OPTION_HINTS, 
  TEST11_Q5_OPTION_HINTS, 
  TEST11_M2_Q1_OPTION_HINTS, 
  TEST11_M2_Q2_OPTION_HINTS, 
  TEST11_M2_Q3_OPTION_HINTS, 
  TEST11_M2_Q4_OPTION_HINTS, 
  TEST11_M2_Q5_OPTION_HINTS,
  TEST10_Q1_OPTION_HINTS,
  TEST10_Q2_OPTION_HINTS,
  TEST10_Q3_OPTION_HINTS,
  TEST10_Q4_OPTION_HINTS,
  TEST10_Q5_OPTION_HINTS,
  TEST10_M2_Q1_OPTION_HINTS,
  TEST10_M2_Q2_OPTION_HINTS,
  TEST10_M2_Q3_OPTION_HINTS,
  TEST10_M2_Q4_OPTION_HINTS,
  TEST10_M2_Q5_OPTION_HINTS,
  TEST9_Q1_OPTION_HINTS,
  TEST9_Q2_OPTION_HINTS,
  TEST9_Q3_OPTION_HINTS,
  TEST9_Q4_OPTION_HINTS,
  TEST9_Q5_OPTION_HINTS,
  TEST9_M2_Q1_OPTION_HINTS,
  TEST9_M2_Q2_OPTION_HINTS,
  TEST9_M2_Q3_OPTION_HINTS,
  TEST9_M2_Q4_OPTION_HINTS,
  TEST9_M2_Q5_OPTION_HINTS,
  TEST8_Q1_OPTION_HINTS,
  TEST8_Q2_OPTION_HINTS,
  TEST8_Q3_OPTION_HINTS,
  TEST8_Q4_OPTION_HINTS,
  TEST8_Q5_OPTION_HINTS,
  TEST8_M2_Q1_OPTION_HINTS,
  TEST8_M2_Q2_OPTION_HINTS,
  TEST8_M2_Q3_OPTION_HINTS,
  TEST8_M2_Q4_OPTION_HINTS,
  TEST8_M2_Q5_OPTION_HINTS,
  TEST7_Q1_OPTION_HINTS,
  TEST7_Q2_OPTION_HINTS,
  TEST7_Q3_OPTION_HINTS,
  TEST7_Q4_OPTION_HINTS,
  TEST7_Q5_OPTION_HINTS,
  TEST7_M2_Q1_OPTION_HINTS,
  TEST7_M2_Q2_OPTION_HINTS,
  TEST7_M2_Q3_OPTION_HINTS,
  TEST7_M2_Q4_OPTION_HINTS,
  TEST7_M2_Q5_OPTION_HINTS,
  TEST6_Q1_OPTION_HINTS,
  TEST6_Q2_OPTION_HINTS,
  TEST6_Q3_OPTION_HINTS,
  TEST6_Q4_OPTION_HINTS,
  TEST6_Q5_OPTION_HINTS,
  TEST6_M2_Q1_OPTION_HINTS,
  TEST6_M2_Q2_OPTION_HINTS,
  TEST6_M2_Q3_OPTION_HINTS,
  TEST6_M2_Q4_OPTION_HINTS,
  TEST6_M2_Q5_OPTION_HINTS,
  TEST5_Q1_OPTION_HINTS,
  TEST5_Q2_OPTION_HINTS,
  TEST5_Q3_OPTION_HINTS,
  TEST5_Q4_OPTION_HINTS,
  TEST5_Q5_OPTION_HINTS,
  TEST5_M2_Q1_OPTION_HINTS,
  TEST5_M2_Q2_OPTION_HINTS,
  TEST5_M2_Q3_OPTION_HINTS,
  TEST5_M2_Q4_OPTION_HINTS,
  TEST5_M2_Q5_OPTION_HINTS,
  TEST4_Q1_OPTION_HINTS,
  TEST4_Q2_OPTION_HINTS,
  TEST4_Q3_OPTION_HINTS,
  TEST4_Q4_OPTION_HINTS,
  TEST4_Q5_OPTION_HINTS,
  TEST4_M2_Q1_OPTION_HINTS,
  TEST4_M2_Q2_OPTION_HINTS,
  TEST4_M2_Q3_OPTION_HINTS,
  TEST4_M2_Q4_OPTION_HINTS,
  TEST4_M2_Q5_OPTION_HINTS
} from './components/QuestionAnswerArea';
import { WordDefinitionModal } from './components/WordDefinitionModal';
import { HintTextBox } from './components/HintTextBox';
import { Stroke, Point, AnnotationNote, AnnotationColor } from './types';


const STORAGE_KEY = 'sat_smart_practice_progress_v2';
const LEGACY_STORAGE_KEY = 'bluebook_sat_practice_progress_v2';

export const MODULE_TIME_LIMITS: Record<ModuleKey, number> = {
  RW_1: 39 * 60, // 39 minutes
  RW_2: 39 * 60, // 39 minutes
  MATH_1: 43 * 60, // 43 minutes
  MATH_2: 43 * 60, // 43 minutes
};

export const getModuleTimeLimit = (key: ModuleKey): number => {
  return MODULE_TIME_LIMITS[key] || 39 * 60;
};

function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to load saved progress:', e);
  }
  return null;
}

export default function App() {
  const savedProgress = loadSavedProgress();

  const [activeTestId, setActiveTestId] = useState<TestId>(savedProgress?.activeTestId || 'test1');
  const [activeModuleKey, setActiveModuleKey] = useState<ModuleKey>(savedProgress?.activeModuleKey || 'RW_1');
  const currentTest = SAT_TESTS[activeTestId] || SAT_TESTS.test1;
  const currentModules = currentTest.modules;
  const currentModule = currentModules[activeModuleKey] || currentModules.RW_1;
  const currentQuestions = currentModule.questions;

  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (typeof savedProgress?.currentIndex === 'number' && savedProgress.currentIndex < currentQuestions.length) {
      return savedProgress.currentIndex;
    }
    return 0;
  });
  const safeIndex = Math.min(currentIndex, Math.max(0, currentQuestions.length - 1));
  const currentQ = sanitizeQuestion(currentQuestions[safeIndex] || currentQuestions[0]);

  const [userAnswers, setUserAnswers] = useState<Record<number, string | null>>(() => ({
    ...SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: null }), {}),
    ...(savedProgress?.userAnswers || {})
  }));

  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>(() => ({
    ...SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: false }), {}),
    ...(savedProgress?.flaggedQuestions || {})
  }));

  const [strikethroughs, setStrikethroughs] = useState<Record<number, Record<string, boolean>>>(() => ({
    ...SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: {} }), {}),
    ...(savedProgress?.strikethroughs || {})
  }));

  const [questionScribbles, setQuestionScribbles] = useState<Record<number, Stroke[]>>(() => ({
    ...SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: [] }), {}),
    ...(savedProgress?.questionScribbles || {})
  }));

  // Practice Mode state: reveals instant feedback and explanation
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>(() => 
    savedProgress?.checkedAnswers || {}
  );

  // Mode toggles
  const [isScribbleMode, setIsScribbleMode] = useState(false);
  const [scribbleTool, setScribbleTool] = useState<'pen' | 'eraser'>('pen');
  const [isErasingScribble, setIsErasingScribble] = useState(false);
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [highlightTool, setHighlightTool] = useState<'highlighter' | 'eraser'>('highlighter');
  const [isStrikethroughMode, setIsStrikethroughMode] = useState(false);
  const [isAnnotateMode, setIsAnnotateMode] = useState(false);
  const [showTimerHidden, setShowTimerHidden] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(() => {
    if (typeof savedProgress?.timeRemaining === 'number' && savedProgress.timeRemaining > 0) {
      return savedProgress.timeRemaining;
    }
    return getModuleTimeLimit(savedProgress?.activeModuleKey || 'RW_1');
  });

  // 10-Minute Break between RW_2 and MATH_1
  const [showBreakModal, setShowBreakModal] = useState(false);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState<number>(10 * 60);

  // Active navigation direction state to highlight the button in action (Back vs Next)
  const [activeNavDirection, setActiveNavDirection] = useState<'next' | 'back'>('next');

  // Adjustable column divider state (passage vs question)
  const [splitRatio, setSplitRatio] = useState<number>(50);
  const [isDraggingDivider, setIsDraggingDivider] = useState<boolean>(false);

  // Restart Modal & Toast Notification
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastSavedTime, setLastSavedTime] = useState<string>('');

  // Question highlights & annotations state (persisted per question)
  const [questionHighlights, setQuestionHighlights] = useState<Record<number, { passageHtml?: string; questionHtml?: string }>>(() => 
    savedProgress?.questionHighlights || {}
  );
  const [questionAnnotations, setQuestionAnnotations] = useState<Record<number, AnnotationNote[]>>(() => ({
    ...SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: [] }), {}),
    ...(savedProgress?.questionAnnotations || {})
  }));
  const [activeNoteColor, setActiveNoteColor] = useState<AnnotationColor>('yellow');
  const [activeFontSize, setActiveFontSize] = useState<number>(13);
  const [draggingNoteId, setDraggingNoteId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [resizingNote, setResizingNote] = useState<{
    id: string;
    direction: 'se' | 'e' | 's' | 'w' | 'n' | 'sw' | 'ne' | 'nw';
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
    startNoteX: number;
    startNoteY: number;
  } | null>(null);

  // Track double click timestamp to avoid duplicate dictionary popups
  const lastDoubleClickTimeRef = useRef<number>(0);

  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  // Annotation helpers
  const addAnnotationNote = (x?: number, y?: number, color?: AnnotationColor, fontSize?: number, initialText?: string) => {
    let noteX = x;
    let noteY = y;

    if (noteX === undefined || noteY === undefined) {
      if (mainRef.current) {
        const rect = mainRef.current.getBoundingClientRect();
        noteX = Math.max(20, rect.width - 240);
        noteY = 20;
      } else {
        noteX = 400;
        noteY = 20;
      }
    }

    const newNote: AnnotationNote = {
      id: `note-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      x: noteX,
      y: noteY,
      text: initialText || '',
      color: color || activeNoteColor,
      width: 200,
      height: 110,
      fontSize: fontSize || activeFontSize
    };
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: [...(prev[currentQ.id] || []), newNote]
    }));
    setSelectedNoteId(newNote.id);
  };

  const updateAnnotationText = (id: string, text: string) => {
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: (prev[currentQ.id] || []).map(n => n.id === id ? { ...n, text } : n)
    }));
  };

  const updateAnnotationSize = (id: string, width: number, height: number) => {
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: (prev[currentQ.id] || []).map(n => n.id === id ? { ...n, width, height } : n)
    }));
  };

  const updateAnnotationColor = (id: string, color: AnnotationColor) => {
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: (prev[currentQ.id] || []).map(n => n.id === id ? { ...n, color } : n)
    }));
  };

  const updateAnnotationFontSize = (id: string, size: number) => {
    const clampedSize = Math.max(9, Math.min(28, size));
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: (prev[currentQ.id] || []).map(n => n.id === id ? { ...n, fontSize: clampedSize } : n)
    }));
    setActiveFontSize(clampedSize);
  };

  const changeFontSizeForSelected = (delta: number) => {
    if (selectedNoteId) {
      const currentNote = (questionAnnotations[currentQ.id] || []).find(n => n.id === selectedNoteId);
      const currentSize = currentNote?.fontSize || activeFontSize;
      updateAnnotationFontSize(selectedNoteId, currentSize + delta);
    } else {
      setActiveFontSize(prev => Math.max(9, Math.min(28, prev + delta)));
    }
  };

  const handleToolbarColorChange = (color: AnnotationColor) => {
    setActiveNoteColor(color);
    if (selectedNoteId) {
      updateAnnotationColor(selectedNoteId, color);
    }
  };

  const deleteAnnotation = (id: string) => {
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: (prev[currentQ.id] || []).filter(n => n.id !== id)
    }));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  const clearAllAnnotations = () => {
    setQuestionAnnotations(prev => ({
      ...prev,
      [currentQ.id]: []
    }));
    setSelectedNoteId(null);
  };

  // Test 11 & Test 10 Reading & Writing Hints (Test 11: M1 Q1-5, M2 Q1-5 / id: 34-38; Test 10: M1 Q1-5 / id: 201-205)
  const isTest11 = activeTestId === 'test1' || currentTest?.name?.includes('11') || currentTest?.shortName?.includes('11');
  const isTest11RW1 = isTest11 && activeModuleKey === 'RW_1';
  const isTest11RW2 = isTest11 && activeModuleKey === 'RW_2';

  const isTest10 = activeTestId === 'test2' || currentTest?.name?.includes('10') || currentTest?.shortName?.includes('10');
  const isTest10RW1 = isTest10 && activeModuleKey === 'RW_1';
  const isTest10RW2 = isTest10 && activeModuleKey === 'RW_2';

  const isTest9 = activeTestId === 'test9' || currentTest?.name?.includes('9') || currentTest?.shortName?.includes('9');
  const isTest9RW1 = isTest9 && activeModuleKey === 'RW_1';
  const isTest9RW2 = isTest9 && activeModuleKey === 'RW_2';

  const isTest8 = activeTestId === 'test8' || currentTest?.name?.includes('8') || currentTest?.shortName?.includes('8');
  const isTest8RW1 = isTest8 && activeModuleKey === 'RW_1';
  const isTest8RW2 = isTest8 && activeModuleKey === 'RW_2';

  const isTest7 = activeTestId === 'test7' || currentTest?.name?.includes('7') || currentTest?.shortName?.includes('7');
  const isTest7RW1 = isTest7 && activeModuleKey === 'RW_1';
  const isTest7RW2 = isTest7 && activeModuleKey === 'RW_2';

  const isTest6 = activeTestId === 'test6' || currentTest?.name?.includes('6') || currentTest?.shortName?.includes('6');
  const isTest6RW1 = isTest6 && activeModuleKey === 'RW_1';
  const isTest6RW2 = isTest6 && activeModuleKey === 'RW_2';

  const isTest5 = activeTestId === 'test5' || currentTest?.name?.includes('5') || currentTest?.shortName?.includes('5');
  const isTest5RW1 = isTest5 && activeModuleKey === 'RW_1';
  const isTest5RW2 = isTest5 && activeModuleKey === 'RW_2';

  const isTest4 = activeTestId === 'test4' || currentTest?.name?.includes('4') || currentTest?.shortName?.includes('4');
  const isTest4RW1 = isTest4 && activeModuleKey === 'RW_1';
  const isTest4RW2 = isTest4 && activeModuleKey === 'RW_2';

  const isTest11HintEligible = (isTest11RW1 && (currentQ.id === 1 || currentQ.id === 2 || currentQ.id === 3 || currentQ.id === 4 || currentQ.id === 5)) ||
                               (isTest11RW2 && (currentQ.id === 34 || currentQ.id === 35 || currentQ.id === 36 || currentQ.id === 37 || currentQ.id === 38)) ||
                               (isTest10RW1 && (currentQ.id === 201 || currentQ.id === 202 || currentQ.id === 203 || currentQ.id === 204 || currentQ.id === 205)) ||
                               (isTest10RW2 && (currentQ.id === 234 || currentQ.id === 235 || currentQ.id === 236 || currentQ.id === 237 || currentQ.id === 238)) ||
                               (isTest9RW1 && (currentQ.id === 901 || currentQ.id === 902 || currentQ.id === 903 || currentQ.id === 904 || currentQ.id === 905)) ||
                               (isTest9RW2 && (currentQ.id === 934 || currentQ.id === 935 || currentQ.id === 936 || currentQ.id === 937 || currentQ.id === 938)) ||
                               (isTest8RW1 && (currentQ.id === 1801 || currentQ.id === 1802 || currentQ.id === 1803 || currentQ.id === 1804 || currentQ.id === 1805)) ||
                               (isTest8RW2 && (currentQ.id === 1834 || currentQ.id === 1835 || currentQ.id === 1836 || currentQ.id === 1837 || currentQ.id === 1838)) ||
                               (isTest7RW1 && (currentQ.id === 1701 || currentQ.id === 1702 || currentQ.id === 1703 || currentQ.id === 1704 || currentQ.id === 1705)) ||
                               (isTest7RW2 && (currentQ.id === 1734 || currentQ.id === 1735 || currentQ.id === 1736 || currentQ.id === 1737 || currentQ.id === 1738)) ||
                               (isTest6RW1 && (currentQ.id === 1821 || currentQ.id === 1822 || currentQ.id === 1823 || currentQ.id === 1824 || currentQ.id === 1825)) ||
                               (isTest6RW2 && (currentQ.id === 1854 || currentQ.id === 1855 || currentQ.id === 1856 || currentQ.id === 1857 || currentQ.id === 1858)) ||
                               (isTest5RW1 && (currentQ.id === 1941 || currentQ.id === 1942 || currentQ.id === 1943 || currentQ.id === 1944 || currentQ.id === 1945)) ||
                               (isTest5RW2 && (currentQ.id === 1974 || currentQ.id === 1975 || currentQ.id === 1976 || currentQ.id === 1977 || currentQ.id === 1978)) ||
                               (isTest4RW1 && (currentQ.id === 1101 || currentQ.id === 1102 || currentQ.id === 1103 || currentQ.id === 1104 || currentQ.id === 1105)) ||
                               (isTest4RW2 && (currentQ.id === 1201 || currentQ.id === 1202 || currentQ.id === 1203 || currentQ.id === 1204 || currentQ.id === 1205));
  const [activeHintQId, setActiveHintQId] = useState<number | null>(null);
  const isHintActive = activeHintQId === currentQ.id;

  // Auto-reset hint state when navigating away from hint eligible questions
  useEffect(() => {
    if (!isTest11HintEligible) {
      setActiveHintQId(null);
    }
  }, [isTest11HintEligible, currentQ.id, activeModuleKey, activeTestId]);

  const handleToggleHint = () => {
    if (activeHintQId !== currentQ.id) {
      setActiveHintQId(currentQ.id);

      // Apply College Board style highlights on clue words
      let highlightedPassage = currentQ.passageHtml;
      if (currentQ.id === 1) {
        highlightedPassage = `<p class="mb-3">Ezra Pound’s poetry can be hard to ________<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> it is dense, experimental, and so full of references and allusions that many readers have a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">difficult</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">time</mark> even <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">identifying</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">poems’</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">subjects</mark>.</p>`;
      } else if (currentQ.id === 2) {
        highlightedPassage = `<p class="mb-3">The unique <i>subak</i> water management system used to irrigate the rice paddy fields of the Indonesian island of Bali has a rich cultural, philosophical, and historical significance dating back to the ninth century. The many <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">elements</mark> of <i>subak</i>—terraces, canals, and water temples—are ________<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> they are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">joined</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">together</mark> into a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">single</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">cohesive</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">unit</mark>.</p>`;
      } else if (currentQ.id === 3) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Although</mark> the government of the Soviet Union attempted to ________ Georgi Vladimov’s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">novel</mark> <i>Faithful Ruslan</i>, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">copies</mark> of the book <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">circulated</mark> in <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">secret</mark> among readers in several parts of the country.</p>`;
      } else if (currentQ.id === 4) {
        highlightedPassage = `<p class="mb-3">Scholars long <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">thought</mark> that the initial spread of silk beyond China occurred in the second century CE, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">but</mark> this <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">view</mark> has been ________ by <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">new</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">archaeological</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">evidence</mark> from South Asia that reveals that the people of the Indus Civilization made use of silk at least 1,000 years earlier.</p>`;
      } else if (currentQ.id === 5) {
        highlightedPassage = `<p class="mb-3">A casual description of Scherezade García’s 2019 mural <i>Blame It on the Bean: The Power of Coffee</i> can make the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">work</mark> seem ________<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">—</mark>a painting that is housed in a coffee shop and that depicts three women drinking coffee may <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> sound particularly <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">ambitious</mark>—but in fact the work is a complex, dynamic meditation on gender and the legacy of colonialism that demands serious attention.</p>`;
      } else if (currentQ.id === 34) {
        highlightedPassage = `<p class="mb-3">Ancient Inca inhabiting the Andes Mountains used terraces, rows of flattened land with built-in irrigation systems, to grow crops at different altitudes. This <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">method</mark> of farming proved to be highly ________, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">as</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">evidenced</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">by</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">great</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">number</mark> and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">variety</mark> of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">crops</mark> grown at that time.</p>`;
      } else if (currentQ.id === 35) {
        highlightedPassage = `<p class="mb-3">Since the Hubble Space Telescope was launched into space in 1990, astronauts have needed to complete regular missions to repair the telescope and keep it working smoothly. Researchers hope that robots will soon be able to make these repairs. Employing robots <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">instead</mark> of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">humans</mark> to make repairs will be helpful, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">as</mark> ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">astronauts</mark> to maintain the telescope can be <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">expensive</mark>.</p>`;
      } else if (currentQ.id === 36) {
        highlightedPassage = `<p class="mb-3">There are many famous examples of election pollsters making <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">inaccurate</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">predictions</mark> in presidential elections. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">But</mark> neuroscientist and election pollster Sam Wang has said that these prediction failures should <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> lead campaigns to ________ election <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">polling</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">entirely</mark>. Polling is about more than just predicting the winner; throughout campaigns, it <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">helps</mark> strategists identify where their efforts are most likely to be effective.</p>`;
      } else if (currentQ.id === 37) {
        highlightedPassage = `<p class="mb-3">Steiger Butte Drum, a family ensemble from the Klamath Tribes of the Pacific Northwest, collaborated with composer Michael Gordon to create <i>Natural History</i>, a work featuring traditional drumming and vocals alongside an orchestra and chorus. Steiger Butte Drum’s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">participation</mark> is ________ to the piece<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> members not only <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">contributed</mark> to its <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">composition</mark> but also <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">must</mark> be <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">included</mark> in all <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">performances</mark>.</p>`;
      } else if (currentQ.id === 38) {
        highlightedPassage = `<p class="mb-3">The following text is from a 1955 translation of Samuel Beckett’s 1951 novel <i>Molloy</i>. In the text, Molloy has arrived at the town ramparts, an elevated walkway atop the city walls.</p>
<p class="mb-3">And having cleared the ramparts I had to confess the sky was clearing, prior to its winding in the other shroud, night. Yes, the great cloud was ravelling, discovering here and there a pale and dying sky, and the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">sun</mark>, already down, was <u class="underline"><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">manifest</mark></u> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">in</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">livid</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">tongues</mark> of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fire</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">darting</mark> towards the zenith, falling and darting again, ever more pale and languid, and doomed no sooner lit to be extinguished.</p>`;
      } else if (currentQ.id === 201) {
        highlightedPassage = `<p class="mb-3">The general store was essential to daily life in the rural United States during the 1800s because it provided the supplies that the people living in nearby communities needed. Also, the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">store</mark> was a ________ of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">information</mark>. People socializing at the general store would <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">share</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">news</mark> and help <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">spread</mark> it throughout their communities.</p>`;
      } else if (currentQ.id === 202) {
        highlightedPassage = `<p class="mb-3">For painter Jacob Lawrence, being ________ was an important part of the artistic process. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Because</mark> he <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">paid</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">close</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">attention</mark> to all the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">details</mark> of his Harlem neighborhood, Lawrence’s artwork captured nuances in the beauty and vitality of the Black experience during the Harlem Renaissance and the Great Migration.</p>`;
      } else if (currentQ.id === 203) {
        highlightedPassage = `<p class="mb-3">Former astronaut Ellen Ochoa says that <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">although</mark> she <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">doesn’t</mark> have a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">definite</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">idea</mark> of when it might happen, she ________ that humans will someday need to be able to live in other environments than those found on Earth. This <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">conjecture</mark> informs her interest in future research missions to the moon.</p>`;
      } else if (currentQ.id === 204) {
        highlightedPassage = `<p class="mb-3">The parasitic dodder plant increases its reproductive success by <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">flowering</mark> at the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">same</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">time</mark> as the host plant it has latched onto. In 2020, Jianqiang Wu and his colleagues determined that the tiny dodder achieves <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> ________ with its host by absorbing and utilizing a protein the host produces when it is about to flower.</p>`;
      } else if (currentQ.id === 205) {
        highlightedPassage = `<p class="mb-3">Barring major archaeological discoveries, we are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">unlikely</mark> to ever have ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">account</mark> of ancient Egypt under the female pharaoh Hatshepsut, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">as</mark> much of the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">evidence</mark> of her reign was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">deliberately</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">destroyed</mark> by her successors.</p>`;
      } else if (currentQ.id === 234) {
        highlightedPassage = `<p class="mb-3">In the early 1800s, the Cherokee scholar Sequoyah created the first script, or writing system, for an Indigenous language in the United States. Because it represented the sounds of spoken Cherokee so accurately, his script was easy to learn and thus quickly achieved ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">use</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> by 1830, over <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">90</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">percent</mark> of the Cherokee people could <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">read</mark> and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">write</mark> it.</p>`;
      } else if (currentQ.id === 235) {
        highlightedPassage = `<p class="mb-3">Researchers have struggled to pinpoint specific causes for hiccups, which happen when a person’s diaphragm <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">contracts</mark> ________. However, neuroscientist Kimberley Whitehead has found that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">these</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">uncontrollable</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">contractions</mark> may play an important role in helping infants regulate their breathing.</p>`;
      } else if (currentQ.id === 236) {
        highlightedPassage = `<p class="mb-3">The province of Xoconochco was situated on the Pacific coast, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">hundreds</mark> of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">kilometers</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">southeast</mark> of Tenochtitlan, the capital of the Aztec Empire. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Because</mark> Xoconochco’s <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">location</mark> within the empire was so ________, cacao and other trade goods produced there could reach the capital <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">only</mark> after a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">long</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">journey</mark>.</p>`;
      } else if (currentQ.id === 237) {
        highlightedPassage = `<p class="mb-3">Proposals to raise the age at which retirees begin receiving government transfers of funds are generally discussed in terms of the effects on transfer recipients, but Andria Smythe has argued that delaying such transfers could ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">wealth</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">creation</mark> among working adults <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">by</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">lengthening</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">period</mark> in which they are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">providing</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">financial</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">support</mark> to their nonworking <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">parents</mark>.</p>`;
      } else if (currentQ.id === 238) {
        highlightedPassage = `<p class="mb-3">Political blogs with conspicuous ideological alignments became an integral component of US media in the early 2000s. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">While</mark> some commentators <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">lauded</mark> this development, asserting that such blogs had a welcome transparency missing from traditional news, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">less</mark> ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">observers</mark> countered that such blogs tended to ideological extremes that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">exacerbated</mark> political <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">polarization</mark> to problematic levels.</p>`;
      } else if (currentQ.id === 901) {
        highlightedPassage = `<p class="mb-4">The following text is adapted from Ida B. Wells’s 1970 autobiography <i>A Crusade for Justice</i>. Mr. Watts is a reference to George Frederic Watts, an English painter.</p><div class="pl-8 mb-4"><p class="mb-2">[Manchester’s] art <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">galleries</mark> are <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">so</mark> <u>arranged</u> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">that</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">name</mark> of every picture is <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">plainly</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">seen</mark> and one has <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">no</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">need</mark> of a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">catalogue</mark> to pick out the name and the artist. This is a convenience to the general public, which other art galleries, which shall be nameless, might copy to advantage. To her treasure of art Manchester has added Mr. Watts’ latest picture, the Good Samaritan.</p><p class="text-right text-xs text-slate-700">©1970 by the University of Chicago Press</p></div>`;
      } else if (currentQ.id === 902) {
        highlightedPassage = `<p class="mb-3">One challenge of generating electricity from ocean waves is that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">wave</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">power</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">isn’t</mark> _______<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> it <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">varies</mark> in <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">unpredictable</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">ways</mark> that pose technological and planning problems for electricity generation.</p>`;
      } else if (currentQ.id === 903) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Due</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">to</mark> their often <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">strange</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">images</mark>, highly <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">experimental</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">syntax</mark>, and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">opaque</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">subject</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">matter</mark>, many of John Ashbery’s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">poems</mark> can be quite <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">difficult</mark> to _______ and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">thus</mark> are the object of heated <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">debate</mark> among scholars.</p>`;
      } else if (currentQ.id === 904) {
        highlightedPassage = `<p class="mb-3">Diego Velázquez was the leading artist in the court of King Philip IV of Spain during the seventeenth century, but his <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">influence</mark> was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">hardly</mark> _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Spain</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> realist and impressionist <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">painters</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">around</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">world</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">employed</mark> his techniques and echoed elements of his style.</p>`;
      } else if (currentQ.id === 905) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Although</mark> science fiction was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">dominated</mark> mostly by white male authors when Octavia Butler, a Black woman, began writing, she <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">did</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">view</mark> the genre as _______<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> Butler <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">broke</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">into</mark> the field with the publication of several short stories and her 1976 novel <i>Patternmaster</i>, and she later became the first science fiction writer to win a prestigious MacArthur Fellowship.</p>`;
      } else if (currentQ.id === 934) {
        highlightedPassage = `<p class="mb-4">The following text is from Anita Desai’s 2011 novella <i>Translator Translated</i>. While working on her translation of a novel written in Odia (a language of India) into English, the narrator looks out her window at night to clear her mind.</p><div class="pl-8 mb-4"><p class="mb-2">I tried to distract myself with these sights of the ordinary world, but in my mind it was the lines I had been translating and the lines that I had been writing that remained in the forefront. I longed for sleep to obliterate them but it eluded me. Perhaps everything would be normal again <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">once</mark> I had <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">sent</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">off</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">manuscript</mark>, I thought, and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">looked</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">forward</mark> to <u>completing</u> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">work</mark>.</p><p class="text-right text-xs text-slate-700">©2011 by Anita Desai</p></div>`;
      } else if (currentQ.id === 935) {
        highlightedPassage = `<p class="mb-3">Predatory animals differ widely in how they _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">food</mark> for their <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">young</mark>. Some <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">leave</mark> dead prey nearby for their young to consume, some <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">bring</mark> live prey to their young, and some <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">feed</mark> their young directly from their own mouths.</p>`;
      } else if (currentQ.id === 936) {
        highlightedPassage = `<p class="mb-3">Nigerian American author Teju Cole’s ______ his <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">two</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">passions</mark>—photography and the written word—<mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">culminates</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">in</mark> his 2017 book, <i>Blind Spot</i>, which <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">evocatively</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">combines</mark> his original photographs from his travels with his poetic prose.</p>`;
      } else if (currentQ.id === 937) {
        highlightedPassage = `<p class="mb-3">Artist Marilyn Dingle’s intricate, coiled <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">baskets</mark> are _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">sweetgrass</mark> and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">palmetto</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">palm</mark>. Following a Gullah technique that originated in West Africa, Dingle <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">skillfully</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">winds</mark> a thin palm frond around a bunch of sweetgrass with the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">help</mark> of a “sewing bone” to create the basket’s signature look that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">no</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">factory</mark> can reproduce.</p>`;
      } else if (currentQ.id === 938) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Beginning</mark> in the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">1950s</mark>, Navajo Nation legislator Annie Dodge Wauneka <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">continuously</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">worked</mark> to promote public health; <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">effort</mark> involved traveling throughout the vast Navajo homeland and writing a medical dictionary for speakers of Diné bizaad, the Navajo language.</p>`;
      } else if (currentQ.id === 1801) {
        highlightedPassage = `<p class="mb-3">Luigi Einaudi is one of the twentieth century’s most ________ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">figures</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> during his long career as an Italian politician and economist, he was not only a professor and leader in banking but also the president of Italy from 1948 to 1955. His <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">many</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">accomplishments</mark> include <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">major</mark> currency <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">reforms</mark> and a role in drafting the nation’s postwar constitution, which together <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">helped</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">restore</mark> political and economic stability to Italy.</p>`;
      } else if (currentQ.id === 1802) {
        highlightedPassage = `<p class="mb-3">The venom of the brown recluse spider has a complex composition that can vary widely depending on the age and sex of the spider and on environmental factors. When the venom is extracted and studied in the laboratory, its effect on human tissue may be ________<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">—that</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">is,</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">differences</mark> in venom composition are associated with <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">considerable</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">variations</mark> in the severity of tissue damage and other symptoms caused by recluse envenomation.</p>`;
      } else if (currentQ.id === 1803) {
        highlightedPassage = `<p class="mb-3">Mangrove forests are ecosystems that grow in coastal intertidal zones. Mangrove roots grow tangled together in a dense mesh underwater, which traps sediment and helps <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">slow</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">down</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">currents</mark> of tides and rivers. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">This</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">creates</mark> ________ waters where animals can <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">take</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">shelter</mark> and find food.</p>`;
      } else if (currentQ.id === 1804) {
        highlightedPassage = `<p class="mb-3"><i>Mule Bone</i> is a 1930 play written by <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Zora</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Neale</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Hurston</mark> and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Langston</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Hughes</mark>. Both writers were major figures of the Harlem Renaissance, but their relationship broke down during the writing of the play. This has led some critics to characterize the play as an unsuccessful ________, claiming that Hurston and Hughes <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">both</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">preferred</mark> to <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">work</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">alone</mark> and that their <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">individual</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">styles</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">did</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">blend</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">well</mark>.</p>`;
      } else if (currentQ.id === 1805) {
        highlightedPassage = `<p class="mb-3">Anna Julia Cooper was a celebrated educator, author, and activist whose scholarly and public <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">contributions</mark> were ________<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> among her accomplishments are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">serving</mark> as <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">president</mark> of Frelinghuysen University, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">authoring</mark> an <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">influential</mark> 1892 <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">book</mark> of Black feminist thought titled <i>A Voice from the South</i>, and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">becoming</mark> only the fourth African American woman to <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">earn</mark> a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">doctoral</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">degree</mark>.</p>`;
      } else if (currentQ.id === 1834) {
        highlightedPassage = `<p class="mb-3">Art scholars have noted that some colors seem to be more _______ viewers than others. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">For</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">example,</mark> people tend to find paintings featuring blues and greens <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">more</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">appealing</mark> than paintings featuring yellows and oranges.</p>`;
      } else if (currentQ.id === 1835) {
        highlightedPassage = `<p class="mb-3">Researchers and conservationists stress that biodiversity loss due to invasive species is _______. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">For</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">example,</mark> people can <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">take</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">simple</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">steps</mark> such as washing their footwear after travel to <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">avoid</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">introducing</mark> potentially invasive organisms into new environments.</p>`;
      } else if (currentQ.id === 1836) {
        highlightedPassage = `<p class="mb-3">The process of mechanically recycling plastics is often considered _______ because of the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">environmental</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">impact</mark> and the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">loss</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">material</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">quality</mark> that often occurs. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">But</mark> chemist Takunda Chazovachii has helped develop a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">cleaner</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">process</mark> of chemical recycling that converts superabsorbent polymers from diapers into a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">desirable</mark> reusable adhesive.</p>`;
      } else if (currentQ.id === 1837) {
        highlightedPassage = `<p class="mb-3">In the Indigenous <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">intercropping</mark> system known as the Three Sisters, maize, squash, and beans form an _______ web of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">relations</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> maize <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">provides</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">structure</mark> on which the bean vines grow; the squash vines <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">cover</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">soil,</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">discouraging</mark> competition from weeds; and the beans <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">aid</mark> their two “sisters” by <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">enriching</mark> the soil with essential nitrogen.</p>`;
      } else if (currentQ.id === 1838) {
        highlightedPassage = `<p class="mb-3">Within baleen whale species, some individuals develop an accessory spleen—a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">seemingly</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">functionless</mark> formation of splenetic tissue outside the normal spleen. Given the formation’s greater prevalence among whales known to make deeper dives, some researchers hypothesize that its role <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">isn’t</mark> _______<mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">;</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">rather,</mark> the accessory spleen may <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">actively</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">support</mark> diving mechanisms.</p>`;
      } else if (currentQ.id === 1701) {
        highlightedPassage = `<p class="mb-3">On the basis of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">extensive</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">calculations</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">models,</mark> astronomers in the 1990s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">predicted</mark> that the collision of two neutron stars or a neutron star and a black hole could release a massive burst of gamma rays in an event called a kilonova. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">This</mark> _______ was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">confirmed</mark> with <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">observations</mark> in 2017.</p>`;
      } else if (currentQ.id === 1702) {
        highlightedPassage = `<p class="mb-3">The following text is from John Muir’s 1913 autobiography <i>The Story of My Boyhood and Youth</i>. Muir describes being on a boat.</p><p class="mb-3 pl-4 border-l-2 border-black italic">The <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">water</mark> was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">so</mark> <u>clear</u> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">that</mark> it was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">almost</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">invisible,</mark> and when we floated slowly out over the plants and fishes, we seemed to be miraculously sustained in the air while exploring a veritable fairyland.</p>`;
      } else if (currentQ.id === 1703) {
        highlightedPassage = `<p class="mb-3">At the turn of the twentieth century, Black residents of Richmond, Virginia, had <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">few</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">formal</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">options</mark> for banking and other financial services. To _______ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">situation,</mark> Maggie Lena Walker <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">chartered</mark> the St. Luke Penny Savings Bank in 1903. The bank went on to <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">provide</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">home</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">loans</mark> and savings opportunities to thousands of Black families over the following decades.</p>`;
      } else if (currentQ.id === 1704) {
        highlightedPassage = `<p class="mb-3">The results of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">randomized</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">clinical</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">trials</mark> testing the efficacy of common medical interventions sometimes <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fail</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">conclusions</mark> that practitioners reach based on their real-world observations of patients. While there are several possible reasons for this, one is that practitioners may <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">overlook</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">confounding</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">variables</mark> that account for the results they attribute to the interventions in question.</p>`;
      } else if (currentQ.id === 1705) {
        highlightedPassage = `<p class="mb-3">Diadromous fish migrate between freshwater and marine biomes during their life cycle. The migration’s obligate nature is <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">why</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">diadromous</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fish</mark> can be _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">those</mark> that are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">merely</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">euryhaline</mark> (able to tolerate high salinity)<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> the euryhaline blackchin tilapia can survive high salinity, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">but</mark> its life cycle <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">does</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">involve</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">relocation</mark> to a different biome, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">as</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">does</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">that</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> the diadromous wild salmon.</p>`;
      } else if (currentQ.id === 1734) {
        highlightedPassage = `<p class="mb-3">Taking photographs in the mid-1800s was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">complicated</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">expensive,</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">but</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">this</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">changed</mark> with the 1854 invention of the carte de visite, a small photo that cost little to make. Carte de visite photos helped to _______ photography<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> they <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">made</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">it</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">easy</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">enjoyable</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">for</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">everyday</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">people</mark> to have their pictures taken, and people at the time <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">loved</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">exchanging</mark> these small photos with friends and family.</p>`;
      } else if (currentQ.id === 1735) {
        highlightedPassage = `<p class="mb-3">Painter Alma W. Thomas was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fascinated</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">by</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">colors</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">shapes</mark> found in nature. The flowers and trees in the garden at her home in Washington, DC, _______ her work. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">For</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">example,</mark> Thomas’s use of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">broken</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">brushstrokes</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">was</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">inspired</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">by</mark> the way that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">light</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">would</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">shine</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">through</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">leaves</mark> of a tree in front of her house.</p>`;
      } else if (currentQ.id === 1736) {
        highlightedPassage = `<p class="mb-3">In the 1990s, conservationists began <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">planting</mark> more than 500,000 native trees in the habitat of the Azores bullfinch <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">boost</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">bird’s</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">numbers.</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">This</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">approach</mark> was apparently _______<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> the Azores bullfinch’s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">population</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">size</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">increased</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">from</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">as</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">few</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">as</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">100</mark> birds at the end of the 1980s <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">around</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">1,300</mark> in 2023.</p>`;
      } else if (currentQ.id === 1737) {
        highlightedPassage = `<p class="mb-3">The <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">recently</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">observed</mark> gamma ray burst GRB 230307A <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">lasted</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">for</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">200</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">seconds,</mark> _______ for a burst generated by the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">merger</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">neutron</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">stars.</mark> Bursts caused by neutron mergers <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">typically</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">last</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fewer</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">than</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">2</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">seconds.</mark></p>`;
      } else if (currentQ.id === 1738) {
        highlightedPassage = `<p class="mb-3">In 1776, the United States sent Benjamin Franklin to France to try to <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">win</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">country’s</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">support</mark> in the United States’ fight for independence from Great Britain. Franklin <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">was</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">very</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">popular</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">in</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">France.</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">This</mark> _______ surely <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">helped</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">him</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">convince</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">France</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">assist</mark> the United States.</p>`;
      } else if (currentQ.id === 1821) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Though</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">not</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">closely</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">related,</mark> the hedgehog tenrecs of Madagascar <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">share</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">basic</mark> _______ true hedgehogs, including protective spines, pointed snouts, and small body size<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">—</mark><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">traits</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">two</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">groups</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">mammals</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">independently</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">developed</mark> in response to equivalent roles in their respective habitats.</p>`;
      } else if (currentQ.id === 1822) {
        highlightedPassage = `<p class="mb-3">In editor Lisa Yaszek’s introduction to her anthology The Future Is Female! More Classic Science Fiction Stories by Women, Yaszek identifies an increasing sense of _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">feminist</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">mode</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">writing</mark> in the 1970s, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">in</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">contrast</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">to</mark> many woman-authored science fiction stories of the 1920s to 1960s whose <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">politics</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">were</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">less</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">deliberately</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">signaled.</mark></p>`;
      } else if (currentQ.id === 1823) {
        highlightedPassage = `<p class="mb-3">_______ the <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">long-standing</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">trend</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">overemphasizing</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">teenagers</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">young</mark> adults in research on social media use, scholars have <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">recently</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">begun</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">expand</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">their</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">focus</mark> to include the fastest-growing cohort of social media users<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">senior</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">citizens.</mark></p>`;
      } else if (currentQ.id === 1824) {
        highlightedPassage = `<p class="mb-3">The following text is adapted from James Baldwin’s 1956 novel <i>Giovanni’s Room</i>. The narrator is riding in a taxi down a street lined with food vendors and shoppers in Paris, France.</p><p class="mb-3 pl-4 border-l-2 border-black italic">The multitude of Paris seems to be dressed in blue every day but Sunday, when, for the most part, they put on an unbelievably festive black. Here they were now, in blue, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);"><u>disputing</u>,</mark> every inch, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">our</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">passage,</mark> with their wagons, handtrucks, their bursting baskets carried at an angle steeply self-confident on the back.</p>`;
      } else if (currentQ.id === 1825) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">While</mark> recent scholarship has <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">undermined</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">claims</mark> that the works of twelfth-century Islamic philosopher Ibn Rushd were _______ other Muslim philosophers of his time, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">it</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">is</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">indisputable</mark> that his <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">location</mark> in the Muslim-ruled area of what is now Spain meant that his works were <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">primarily</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">available</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">thousands</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">miles</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">west</mark> of the era’s center of Islamic thought.</p>`;
      } else if (currentQ.id === 1854) {
        highlightedPassage = `<p class="mb-3">The works of Chicana artist Ester Hernandez are <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">now</mark> _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">in</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">museums</mark> both in the United States and abroad, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">but</mark> the murals she contributed to as a member of Las Mujeres Muralistas early in her artistic career <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">were</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">displayed</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">in</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">outdoor</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">public</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">spaces</mark> across San Francisco.</p>`;
      } else if (currentQ.id === 1855) {
        highlightedPassage = `<p class="mb-3">Whether Carmen Lomas Garza is creating small paintings and illustrations or large public artworks—such as Baile, a copper cutout of traditional Mexican dance in the San Francisco International Airport—she is _______ direct experience<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">,</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">drawing</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">from</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">memories</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">her</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">childhood</mark> in Texas <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">or</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">details</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">of</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">her</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">current</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">surroundings</mark> in California.</p>`;
      } else if (currentQ.id === 1856) {
        highlightedPassage = `<p class="mb-3">Animal researcher Amalia P.M. Bastos led a 2021 study about a wild kea parrot that used small stones as tools to preen its feathers. Skeptical colleagues had initially suggested to Bastos that the kea’s interactions with the stones <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">might</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">simply</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">be</mark> _______<mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">but</mark> Bastos and her team showed that the kea was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">using</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">stones</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">deliberately.</mark></p>`;
      } else if (currentQ.id === 1857) {
        highlightedPassage = `<p class="mb-3">In 1891, design artist William Morris cofounded the Kelmscott Press, which printed editions of books using <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">preindustrial</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">methods.</mark> Historians argue that Morris’s <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">repudiation</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">of</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">industrialization</mark> is _______ the Kelmscott editions’ use of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">handmade</mark> materials and <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">intricate</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">ornamentation</mark> reminiscent of medieval manuscripts: these <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">meticulously</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">handcrafted</mark> elements exemplify the artistry involved.</p>`;
      } else if (currentQ.id === 1858) {
        highlightedPassage = `<p class="mb-3">Mary Engle Pennington, a chemist who helped advance home refrigeration, undoubtedly made a <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">substantial</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">impact</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">on</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">society,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">but</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">her</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">place</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">in</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">our</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">historical</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">memory</mark> is perhaps <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">more</mark> _______ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">than</mark> that of Stephanie Kwolek, who invented the incredibly strong material known as Kevlar, an accomplishment for which she <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">will</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">long</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">be</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">remembered.</mark></p>`;
      } else if (currentQ.id === 1941) {
        highlightedPassage = `<p class="mb-3">The following text is from the 1913 story “The King’s Coin” by Emily Pauline Johnson, a Kanienkahagen (Mohawk) writer also known as Tekahionwake. Fox-Foot, a young Ojibwe man, is guiding a group of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fur traders</mark> who are traveling by <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">canoe</mark> and <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">suspects that they are being followed.</mark></p><p class="mb-3 pl-4 border-l-2 border-black italic">At supper time, Fox-Foot would allow <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">no fire to be built,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">no landing to be made,</mark> no trace of their <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">passing to be left.</mark> They ate canned meat and marmalade, drank again of the stream and pushed on, until just at dusk they reached the edge of a long, still lake, with shores of granite and dense fir forest.</p>`;
      } else if (currentQ.id === 1942) {
        highlightedPassage = `<p class="mb-3">Many <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">ancient sculptures</mark> of people’s heads are <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">missing their noses.</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">This is because</mark> the nose is the most _______ part of a sculpture of a person’s head. It is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">delicate</mark> and <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">sticks out</mark> from the rest of the sculpture, making it especially <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">easy to break.</mark></p>`;
      } else if (currentQ.id === 1943) {
        highlightedPassage = `<p class="mb-3">K.D. Leka and colleagues found that the Sun’s corona provides an <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">advance indication</mark> of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">solar flares</mark>—intense eruptions of electromagnetic radiation that emanate from active regions in the Sun’s photosphere and can interfere with telecommunications on Earth. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Preceding a flare,</mark> the corona <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">temporarily exhibits increased brightness</mark> above the region where the flare is _______.</p>`;
      } else if (currentQ.id === 1944) {
        highlightedPassage = `<p class="mb-3">To demonstrate that the integrity of underground metal pipes can be <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">assessed without unearthing</mark> the pipes, engineer Aroba Saleem and colleagues _______ the tendency of some metals’ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">internal magnetic fields to alter under stress</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> the team showed that such <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">alterations can be measured from a distance</mark> and can <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">reveal concentrations of stress</mark> in the pipes.</p>`;
      } else if (currentQ.id === 1945) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Despite</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">generalizations</mark> about human behavior they have produced, many studies of <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">behavioral psychology</mark> have used <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">highly unrepresentative subject pools</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> students at the colleges and universities where the researchers are employed. To _______ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> situation, it is necessary to <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">actively recruit subjects from diverse backgrounds and locations.</mark></p>`;
      } else if (currentQ.id === 1974) {
        highlightedPassage = `<p class="mb-3">The following text is adapted from Elizabeth von Arnim’s 1922 novel <i>The Enchanted April</i>. Mrs. Wilkins and her friend Rose are traveling in Italy.</p><p class="mb-3 pl-4 border-l-2 border-black italic">“I’m going to have one of these <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">gorgeous oranges,”</mark> said Mrs. Wilkins, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">staying where she was</mark> and <u>reaching across to</u> a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">black bowl piled with them.</mark> “Rose, how can you resist them. Look—have this one. Do have this beauty—” And she <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">held out</mark> a big one.</p>`;
      } else if (currentQ.id === 1975) {
        highlightedPassage = `<p class="mb-3">A team of paleontologists has found a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">rich fossil deposit</mark> near Gulgong, Australia. The fossils are <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">so</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">well preserved</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">that</mark> the team has been <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">able to</mark> _______ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">detailed information</mark> about the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">life forms</mark> that left them behind, such as <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">color patterns and how they interacted</mark> with other species.</p>`;
      } else if (currentQ.id === 1976) {
        highlightedPassage = `<p class="mb-3">According to a team of neuroeconomists from the University of Zurich, <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">ease of decision making</mark> may be linked to communication between two brain regions, the prefrontal cortex and the parietal cortex. Individuals tend to be <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">more decisive</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">if</mark> the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">information flow</mark> between the regions is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">intensified,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">whereas</mark> they <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">make choices more slowly</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">when</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">information flow</mark> is _______.</p>`;
      } else if (currentQ.id === 1977) {
        highlightedPassage = `<p class="mb-3">The War of 1812 has _______ place in <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">historical memory</mark> in Britain, <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">partly because</mark> it is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">overshadowed by the much larger concurrent conflict</mark> against Napoleonic France <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">and partly because</mark> it <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">essentially maintained the geopolitical status quo</mark> for Britain<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> the country <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">neither gained nor lost significant territory or position</mark> as a result of its participation in the war.</p>`;
      } else if (currentQ.id === 1978) {
        highlightedPassage = `<p class="mb-3">Claims about the original significance of Minoan bull-leaping rituals—depicted in <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">paintings and sculptures</mark> from the second millennium BCE—are <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">difficult to successfully</mark> _______. We <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">know</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">so</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">little</mark> about the people archaeologists call the Minoans <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">that</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">assertions</mark> about what bull-leaping meant to them will <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">almost inevitably rely on significant speculation and guesswork.</mark></p>`;
      } else if (currentQ.id === 1101) {
        highlightedPassage = `<p class="mb-3">The spacecraft OSIRIS-REx briefly made contact with the asteroid 101955 Bennu in 2020. NASA scientist Daniella DellaGiustina reports that despite facing the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">unexpected obstacle</mark> of a surface mostly covered in boulders, OSIRIS-REx successfully _______ a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">sample of the surface</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">gathering pieces of it to bring back to Earth.</mark></p>`;
      } else if (currentQ.id === 1102) {
        highlightedPassage = `<p class="mb-3">Research conducted by planetary scientist Katarina Miljkovic suggests that the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Moon’s surface</mark> may not accurately _______ early impact events. When the Moon was still forming, its surface was <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">softer,</mark> and asteroid or meteoroid impacts would have <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">left less of an impression;</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">thus,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">evidence of early impacts may no longer be present.</mark></p>`;
      } else if (currentQ.id === 1103) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Handedness,</mark> a preferential use of either the right or left hand, typically is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">easy to observe</mark> in humans. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Because</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> trait is present <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">but</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">less</mark> _______ in many other animals, animal-behavior researchers often employ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">tasks specially designed to reveal</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">individual animals’ preferences</mark> for a certain hand or paw.</p>`;
      } else if (currentQ.id === 1104) {
        highlightedPassage = `<p class="mb-3">It is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">by no means</mark> _______ to recognize the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">influence of Dutch painter Hieronymus Bosch</mark> on Ali Banisadr’s paintings<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">, indeed,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Banisadr himself cites Bosch as an inspiration.</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">However,</mark> some scholars have suggested that the ancient Mesopotamian poem <i>Epic of Gilgamesh</i> may have had a <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">far greater impact</mark> on Banisadr’s work.</p>`;
      } else if (currentQ.id === 1105) {
        highlightedPassage = `<p class="mb-3">The following text is adapted from Susan Glaspell’s 1912 short story “Out There.” An elderly shop owner is looking at a picture that he recently acquired and hopes to sell.</p><p class="mb-3">It did seem that the picture <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">failed to fit in</mark> with the rest of the shop. A persuasive young fellow who claimed he was closing out his stock let the old man have it for what he called a song. It was only a little out-of-the-way store which subsisted chiefly on the framing of pictures. The old man looked around at his views of the city, his pictures of cats and dogs, his flaming bits of landscape. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">“Don’t belong in here,” he fumed.</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">And yet</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">the old man was secretly proud of his acquisition.</mark> There was a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">hidden dignity in his scowling</mark> as he shuffled about pondering the least ridiculous place for the picture.</p>`;
      } else if (currentQ.id === 1201) {
        highlightedPassage = `<p class="mb-3">The <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fashion</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">resale</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">market,</mark> in which consumers purchase secondhand clothing from stores and online sellers, generated nearly $30 billion globally in 2019. <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">Expecting to see continued growth,</mark> some <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">analysts</mark> _______ that <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">revenues</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">will more than double by 2028.</mark></p>`;
      } else if (currentQ.id === 1202) {
        highlightedPassage = `<p class="mb-3">Artificially delivering biomolecules to plant cells is an important component of protecting plants from pathogens, but it is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">difficult to transmit biomolecules through the layers of the plant cell wall.</mark> Markita del Carpio Landry and her colleagues have shown that it may be <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">possible to</mark> _______ <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">this</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">problem</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">by transmitting molecules through carbon nanotubes, which can cross cell walls.</mark></p>`;
      } else if (currentQ.id === 1203) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Particle</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">physicists</mark> like Ayana Holloway Arce and Aida El-Khadra spend much of their time _______ <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">what</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">is</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">invisible</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">to</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">the</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">naked</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">eye</mark><mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">using sophisticated technology, they closely examine</mark> the behavior of subatomic particles, the smallest detectable parts of matter.</p>`;
      } else if (currentQ.id === 1204) {
        highlightedPassage = `<p class="mb-3"><mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Anthropologist</mark> Kristian J. Carlson and colleagues examined the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">fossilized</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">clavicle</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">and</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">shoulder</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">bones</mark> of a 3.6-million-year-old early hominin known as “<mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Little</mark> <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">Foot.”</mark> They found that these bones were _______ the clavicle and shoulder bones of <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">modern apes that are frequent climbers,</mark> such as gorillas and chimpanzees<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">,</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">suggesting that Little Foot had adapted to life in the trees.</mark></p>`;
      } else if (currentQ.id === 1205) {
        highlightedPassage = `<p class="mb-3">Rydra Wong, the <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">protagonist</mark> of Samuel R. Delany’s 1966 novel <i>Babel-17</i>, is a <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">poet,</mark> an <mark class="sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors" style="background-color: rgb(254, 240, 138);">occupation</mark> which, in Delany’s work, is <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">not</mark> _______<mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">:</mark> <mark class="sat-highlight bg-green-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-green-300 transition-colors" style="background-color: rgb(187, 247, 208);">nearly a dozen of the characters that populate his novels are poets or writers.</mark></p>`;
      }

      setQuestionHighlights(prev => ({
        ...prev,
        [currentQ.id]: {
          ...prev[currentQ.id],
          passageHtml: highlightedPassage
        }
      }));

      setToastMessage('💡 Hint loaded');
      setTimeout(() => setToastMessage(null), 2000);
    } else {
      setActiveHintQId(null);

      // Revert passage html
      setQuestionHighlights(prev => ({
        ...prev,
        [currentQ.id]: {
          ...prev[currentQ.id],
          passageHtml: currentQ.passageHtml
        }
      }));

      setToastMessage('Hint hidden');
      setTimeout(() => setToastMessage(null), 1500);
    }
  };

  const getHintTopNote = (qId: number) => {
    const green = (text: React.ReactNode) => (
      <span className="bg-green-200 text-gray-900 rounded-2xs px-1 font-semibold" style={{ backgroundColor: 'rgb(187, 247, 208)' }}>
        {text}
      </span>
    );

    if (qId === 1) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 2) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 3) return { text: <span>Contrast : {green('Although')}</span>, width: 'w-[225px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 4) return { text: <span>Contrast : {green('but')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 5) return { text: <span>Clue AFTER {green('—')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 34) return { text: <span>Clue AFTER "{green('as evidenced by')}"</span>, width: 'w-[290px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 35) return { text: <span>Clue : {green('as')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 36) return { text: <span>Contrast : {green('But')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 37) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 38) return { text: <span>Clue AFTER {green('manifest in')}</span>, width: 'w-[245px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 201) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 202) return { text: <span>Clue : {green('Because')}</span>, width: 'w-[170px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 203) return { text: <span>Contrast : {green('although')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 204) return { 
      text: [
        <span>Clue BEFORE "{green('this')} ________"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 205) return { text: <span>Clue : {green('as')}</span>, width: 'w-[140px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 234) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 235) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 236) return { text: <span>Clue : {green('Because')} / {green('location')}</span>, width: 'w-[250px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 237) return { text: <span>Clue : {green('by')}</span>, width: 'w-[140px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 238) return { text: <span>Contrast : {green('While')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 901) return { text: <span>Clue : {green('so ... that')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 902) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 903) return { text: <span>Clue : {green('Due to')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 904) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 905) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 934) return { text: <span>Clue : {green('once')} I had sent off</span>, width: 'w-[250px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 935) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 936) return { text: <span>Clue : {green('passions')} / {green('combines')}</span>, width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 937) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 938) return { 
      text: [
        <span>Clue BEFORE "{green('this')} ________"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1801) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1802) return { text: <span>Clue AFTER {green('—that is,')}</span>, width: 'w-[200px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1803) return { 
      text: [
        <span>Clue BEFORE "{green('This')} creates"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1804) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1805) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1834) return { text: <span>Clue in the NEXT sentence ({green('For example')})</span>, width: 'w-[330px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1835) return { text: <span>Clue in the NEXT sentence ({green('For example')})</span>, width: 'w-[330px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1836) return { text: <span>Contrast: {green('But')}... a cleaner process...</span>, width: 'w-[320px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1837) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1838) return { text: <span>Contrast: {green('rather')}</span>, width: 'w-[180px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1701) return { 
      text: [
        <span>Clue BEFORE "{green('This')} _______"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1702) return { text: <span>Clue in: {green('that')} it was almost invisible</span>, width: 'w-[280px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1703) return { 
      text: [
        <span>Clue BEFORE "{green('this')} situation"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1704) return { text: 'Clue in the NEXT sentence', width: 'w-[260px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1705) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1734) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1735) return { text: <span>Clue in the NEXT sentence ({green('For example')})</span>, width: 'w-[330px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1736) return { text: <span>Clue AFTER {green(':')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1737) return { text: <span>Contrast: {green('recently observed')} vs. {green('typically')}</span>, width: 'w-[340px]', fontSize: 15, headerFontSize: 18 };
    if (qId === 1738) return { 
      text: [
        <span>Clue BEFORE "{green('This')} _______"</span>,
        '- seeing This/That/These/Those, find clues in previous clause/sentence.'
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1821) return { 
      text: <span>Clue AFTER <span className="bg-green-200 text-gray-900 rounded-2xs px-1 font-semibold" style={{ backgroundColor: 'rgb(187, 247, 208)' }}>—</span></span>, 
      width: 'w-[165px]', 
      fontSize: 16, 
      headerFontSize: 18 
    };
    if (qId === 1822) return { text: <span>Contrast: {green('in contrast to')}</span>, width: 'w-[220px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1823) return { 
      text: [
        <span>Clue AFTER {green(':')}</span>,
        <span>Contrast: {green('long-standing')} vs. {green('recently begun')}</span>
      ], 
      width: 'w-[370px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1824) return { 
      text: <span>Clue: {green('"disputing"')} is the Verb, {green('"our passage"')} is the Object.</span>, 
      width: 'w-[440px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1825) return { text: <span>Contrast: {green('While')}</span>, width: 'w-[160px]', fontSize: 16, headerFontSize: 18 };
    if (qId === 1854) return { 
      text: <span>Contrast: {green('now')} vs. {green('but... were displayed')}</span>, 
      width: 'w-[340px]', 
      fontSize: 16, 
      headerFontSize: 18 
    };
    if (qId === 1855) return { 
      text: <span>Clue AFTER {green(',')}, 'cause verb-ing phrase at the end provides detailed explanation.</span>, 
      width: 'w-[580px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1856) return { 
      text: <span>Contrast: {green('but')} vs. {green('deliberately')}</span>, 
      width: 'w-[270px]', 
      fontSize: 16, 
      headerFontSize: 18 
    };
    if (qId === 1857) return { 
      text: <span>Clue: {green('preindustrial methods')} = {green('handcraft')} = {green('repudiation of industrialization')}.</span>, 
      width: 'w-[620px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1858) return { 
      text: <span>Contrast: {green('substantial')} impact vs. {green('but')}... {green('more _______ than')} (will long be remembered)</span>, 
      width: 'w-[540px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1941) return { 
      text: <span>Clue: {green('suspects that they are being followed')} → {green('no fire to be built')}, {green('no landing to be made')}</span>, 
      width: 'w-[580px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1942) return { 
      text: <span>Clue in the NEXT sentence: {green('This is because')} {green('delicate')} + {green('sticks out')} → {green('easy to break')}</span>, 
      width: 'w-[520px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1943) return { 
      text: <span>Clue: {green('advance indication')} = {green('Preceding a flare')} (about to happen)</span>, 
      width: 'w-[480px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1944) return { 
      text: <span>Clue AFTER {green(':')} team showed {green('alterations can be measured from a distance')} and {green('reveal concentrations of stress')}</span>, 
      width: 'w-[670px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1945) return { 
      text: [
        <span>seeing {green('this')} situation, find clues in previous sentence: {green('highly unrepresentative subject pools')}</span>,
        <span>Clue: fix the problem ({green('unrepresentative subject pools')} → {green('actively recruit subjects from diverse backgrounds and locations')})</span>
      ], 
      width: 'w-[730px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1974) return { 
      text: <span>Clue: {green('staying where she was')} + {green('held out a big one')}</span>, 
      width: 'w-[520px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1975) return { 
      text: <span>Clue: {green('so')} {green('well preserved')} {green('that')} → {green('able to')} discover/extract {green('detailed information')}</span>, 
      width: 'w-[620px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1976) return { 
      text: <span>Contrast: {green('whereas')} ... {green('more decisive')} ({green('flow intensified')}) vs. {green('make choices more slowly')} (flow is lessened)</span>, 
      width: 'w-[690px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1977) return { 
      text: <span>Clue: {green('partly because')} {green('overshadowed')} ... {green('and partly because')} {green('essentially maintained the geopolitical status quo')} ({green(': neither gained nor lost significant territory or position')})</span>, 
      width: 'w-[760px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1978) return { 
      text: <span>Clue in the NEXT sentence: {green('so little that')} → {green('almost inevitably rely on significant speculation and guesswork')} → {green('difficult to successfully')} substantiate</span>, 
      width: 'w-[760px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1101) return { 
      text: <span>Clue AFTER {green(',')}: {green('gathering pieces of it to bring back to Earth')}</span>, 
      width: 'w-[520px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1102) return { 
      text: <span>Clue in the NEXT sentence: {green('left less of an impression;')} → {green('thus,')} {green('evidence of early impacts may no longer be present')}</span>, 
      width: 'w-[710px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1103) return { 
      text: <span>Contrast: {green('easy to observe')} (in humans) vs. {green('Because this')} ... {green('but less _______')} (requiring {green('tasks specially designed to reveal')})</span>, 
      width: 'w-[730px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1104) return { 
      text: <span>Clue: {green('by no means')} + {green(', indeed,')} {green('Banisadr himself cites Bosch as an inspiration')} + Contrast: {green('However,')} ({green('far greater impact')})</span>, 
      width: 'w-[740px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1105) return { 
      text: <span>Contrast: {green('“Don’t belong in here,” he fumed')} vs. {green('And yet')} {green('the old man was secretly proud of his acquisition')}</span>, 
      width: 'w-[710px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1201) return { 
      text: <span>Clue: {green('Expecting to see continued growth,')} ... {green('will more than double by 2028')}</span>, 
      width: 'w-[680px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1202) return { 
      text: [
        <span>seeing {green('this')} problem, find clues in previous clause: {green('difficult to transmit biomolecules through the layers of the plant cell wall')}</span>,
        <span>Clue: {green('by transmitting molecules through carbon nanotubes, which can cross cell walls')} (resolving the barrier)</span>
      ], 
      width: 'w-[750px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1203) return { 
      text: <span>Clue AFTER {green(':')} {green('using sophisticated technology, they closely examine')}</span>, 
      width: 'w-[680px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1204) return { 
      text: <span>Clue: {green('modern apes that are frequent climbers')} + {green('suggesting that Little Foot had adapted to life in the trees')} (sharing similar anatomy)</span>, 
      width: 'w-[740px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 1205) return { 
      text: <span>Clue: {green('not')} + Clue AFTER {green(':')} {green('nearly a dozen of the characters that populate his novels are poets or writers')} (it is common/frequent)</span>, 
      width: 'w-[750px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    return null;
  };

  const getHintBottomNote = (qId: number) => {
    const green = (text: React.ReactNode) => (
      <span className="bg-green-200 text-gray-900 rounded-2xs px-1 font-semibold" style={{ backgroundColor: 'rgb(187, 247, 208)' }}>
        {text}
      </span>
    );

    if (qId === 1) return { 
      text: [
        '- Key words: difficult time / identifying poems’ subjects',
        '- has to mean: grasp / decipher / make sense of'
      ], 
      width: 'w-[470px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 2) return { 
      text: [
        '- Key words: elements / joined together / single cohesive unit',
        '- has to mean: forming a single linked system / unified'
      ], 
      width: 'w-[470px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 3) return { 
      text: [
        <span>- Key words: {green('Although')} / novel / copies circulated in secret</span>,
        <span>- has to mean: ban / silence / block from circulating (due to {green('Although')})</span>
      ], 
      width: 'w-[510px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 4) return { 
      text: [
        <span>- Key words: thought / {green('but')} / view / new archaeological evidence</span>,
        <span>- has to mean: challenge / disprove / refute old belief (due to {green('but')})</span>
      ], 
      width: 'w-[510px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 5) return { 
      text: [
        '- Key words: work / not sound ambitious',
        '- has to mean: modest / humble / understated'
      ], 
      width: 'w-[430px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 34) return { 
      text: [
        <span>- Key words: method / {green('as evidenced by')} / great number and variety of crops</span>,
        <span>- has to mean: successful / highly productive / yielding good results (due to "{green('as evidenced by')}")</span>
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 35) return { 
      text: [
        <span>- Key words: {green('As')} / astronauts / expensive / instead of humans</span>,
        <span>- has to mean: depending on / turning to (due to "{green('as')}")</span>
      ], 
      width: 'w-[470px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 36) return { 
      text: [
        <span>- Key words: inaccurate predictions / {green('But')} / not polling entirely / helps</span>,
        <span>- has to mean: abandon / cast aside / disregard (due to {green('But')})</span>
      ], 
      width: 'w-[490px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 37) return { 
      text: [
        <span>- Key words: participation / {green(':')} / contributed to composition / must be included</span>,
        <span>- has to mean: essential / indispensable / central (due to {green(':')})</span>
      ], 
      width: 'w-[530px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 38) return { 
      text: [
        '- Key words: sun / livid tongues of fire darting',
        '- has to mean: visible / discernable / observable'
      ], 
      width: 'w-[440px]', 
      fontSize: 15, 
      headerFontSize: 18 
    };
    if (qId === 201) return {
      text: [
        '- Key words: store / information / share news / spread',
        '- has to mean: provider / origin / center'
      ],
      width: 'w-[440px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 202) return {
      text: [
        '- Key words: paid close attention / details / noticed subtle inconsistencies',
        '- has to mean: watchful / perceptive / attentive'
      ],
      width: 'w-[490px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 203) return {
      text: [
        '- Key words: doesn’t have definite idea / conjecture',
        '- has to mean: guess / hypothesize / surmise'
      ],
      width: 'w-[420px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 204) return {
      text: [
        <span>- Key words: flowering at same time / {green('this')}</span>,
        '- has to mean: occurring at the same time / coordination'
      ],
      width: 'w-[450px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 205) return {
      text: [
        '- Key words: unlikely account / evidence deliberately destroyed',
        '- has to mean: complete / thorough / all-encompassing'
      ],
      width: 'w-[470px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 234) return {
      text: [
        '- Key words: use / 90 percent / read and write',
        '- has to mean: extensive / popular / prevalent'
      ],
      width: 'w-[470px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 235) return {
      text: [
        '- Key words: contracts / uncontrollable contractions',
        '- has to mean: automatically / reflexively / without conscious control'
      ],
      width: 'w-[470px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 236) return {
      text: [
        '- Key words: location / hundreds of km southeast / only long journey',
        '- has to mean: distant / isolated / on the outer boundary / outlying'
      ],
      width: 'w-[520px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 237) return {
      text: [
        '- Key words: wealth creation / lengthening period / financial support to parents',
        '- has to mean: slow down / hold back / obstruct / delay'
      ],
      width: 'w-[530px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 238) return {
      text: [
        '- Key words: lauded / less observers / exacerbated polarization',
        '- has to mean: positive / optimistic / approving / favorable'
      ],
      width: 'w-[490px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 901) return {
      text: [
        <span>- Key words: galleries / {green('so ... that')} / name plainly seen / no need catalogue</span>,
        '- has to mean: ordered / laid out / set up systematically'
      ],
      width: 'w-[520px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 902) return {
      text: [
        <span>- Key words: wave power isn’t / {green(':')} / varies in unpredictable ways</span>,
        <span>- has to mean: steady / reliable / uniform over time (due to {green(':')})</span>
      ],
      width: 'w-[480px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 903) return {
      text: [
        '- Key words: strange images / experimental / opaque / poems difficult / debate',
        '- has to mean: understand / decipher / analyze / grasp'
      ],
      width: 'w-[520px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 904) return {
      text: [
        '- Key words: influence hardly / Spain / painters around the world employed',
        '- has to mean: limited to / restricted to / bounded within'
      ],
      width: 'w-[510px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 905) return {
      text: [
        '- Key words: did not view as / broke into the field',
        '- has to mean: closed off / unbreachable / impossible to enter'
      ],
      width: 'w-[480px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 934) return {
      text: [
        '- Key words: once I had sent off the manuscript / looked forward to',
        '- has to mean: concluding / wrapping up / bringing to an end'
      ],
      width: 'w-[520px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 935) return {
      text: [
        '- Key words: food for young / leave dead prey / bring live prey / feed directly',
        '- has to mean: supply / deliver / furnish / make available'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 936) return {
      text: [
        '- Key words: two passions / culminates in / evocatively combines',
        '- has to mean: deep zeal / intense interest / great devotion'
      ],
      width: 'w-[500px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 937) return {
      text: [
        '- Key words: skillfully winds palm around sweetgrass / sewing bone / no factory',
        '- has to mean: crafted manually out of / constructed by hand with'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 938) return {
      text: [
        <span>- Key words: Beginning in 1950s / continuously worked / {green('this')} _______ effort</span>,
        '- has to mean: continuous / ongoing / dedicated / sustained over time'
      ],
      width: 'w-[530px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1801) return {
      text: [
        <span>- Key words: figures / {green(':')} / many accomplishments / major reforms / helped restore</span>,
        '- has to mean: prominent / influential / momentous / of great stature'
      ],
      width: 'w-[530px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1802) return {
      text: [
        <span>- Key words: {green('—that is,')} / differences / considerable variations</span>,
        '- has to mean: sizeable / meaningful / marked / significant in degree'
      ],
      width: 'w-[500px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1803) return {
      text: [
        <span>- Key words: slow down the currents / {green('This')} creates / take shelter</span>,
        '- has to mean: serene / placid / undisturbed / sheltered / calm'
      ],
      width: 'w-[510px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1804) return {
      text: [
        '- Key words: Zora Neale Hurston and Langston Hughes / both preferred to work alone / styles did not blend well',
        '- has to mean: joint effort / partnering together / mutual project'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1805) return {
      text: [
        <span>- Key words: contributions / {green(':')} / serving as president / authoring book / earning doctoral degree</span>,
        '- has to mean: wide-ranging / multifaceted / diverse / broad in scope'
      ],
      width: 'w-[550px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1834) return {
      text: [
        <span>- Key words: {green('For example,')} / sleeker curves / intuitive interfaces / more appealing</span>,
        '- has to mean: pleasing to / alluring / captivating / engaging to'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1835) return {
      text: [
        <span>- Key words: {green('For example,')} / take simple steps / avoid introducing</span>,
        '- has to mean: avoidable / capable of being stopped / avertable / forestallable'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1836) return {
      text: [
        <span>- Key words: environmental impact / loss of material quality / Contrast: {green('But... cleaner process')}</span>,
        '- has to mean: substandard / flawed / inadequate / unsatisfactory / lacking in quality'
      ],
      width: 'w-[580px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1837) return {
      text: [
        <span>- Key words: intercropping / web of relations / {green(':')} / maize provides structure / squash covers soil / beans enrich soil</span>,
        '- has to mean: elaborate / multifaceted / highly interconnected / complexly woven / intertwined'
      ],
      width: 'w-[590px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1838) return {
      text: [
        <span>- Key words: seemingly functionless / isn't _______ / {green('rather,')} / actively support</span>,
        '- has to mean: dormant / inactive / nonfunctional / idle / inert'
      ],
      width: 'w-[520px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1701) return {
      text: [
        <span>- Key words: extensive calculations and models / predicted that / {green('This')} / confirmed with observations</span>,
        '- has to mean: hypothesis / conceptual model / proposed scientific explanation / conjecture'
      ],
      width: 'w-[560px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1702) return {
      text: [
        <span>- Key words: water / {green('so')} clear {green('that')} / almost invisible</span>,
        '- has to mean: see-through / crystalline / lucid / pellucid / allowing light to pass unobstructed'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1703) return {
      text: [
        <span>- Key words: few formal options / To _______ / {green('this')} situation / chartered bank / provide home loans</span>,
        '- has to mean: remedy / correct / resolve / set right / fix / improve a deficiency'
      ],
      width: 'w-[560px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1704) return {
      text: [
        '- Key words: clinical trials / fail to _______ / conclusions / overlook confounding variables',
        '- has to mean: confirm / validate / substantiate / back up / verify / uphold'
      ],
      width: 'w-[550px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1705) return {
      text: [
        <span>- Key words: diadromous fish / merely euryhaline / {green(':')} / does not involve relocation / {green('as')} does that of</span>,
        '- has to mean: distinguished from / set apart from / differentiated from / separated from'
      ],
      width: 'w-[570px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1734) return {
      text: [
        <span>- Key words: complicated and expensive / {green('but this changed')} / carte de visite / {green(':')} / made it easy and enjoyable / everyday people / loved exchanging</span>,
        '- has to mean: make widely accessible / open to everyone / spread to the general public'
      ],
      width: 'w-[570px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1735) return {
      text: [
        <span>- Key words: fascinated by colors and shapes / {green('For example,')} / broken brushstrokes / inspired by light shine through leaves</span>,
        '- has to mean: had an effect on / shaped / guided / inspired'
      ],
      width: 'w-[560px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1736) return {
      text: [
        <span>- Key words: planting 500,000 native trees / boost the bird’s numbers / {green('This')} approach / {green(':')} / population size increased / from 100 to around 1,300</span>,
        '- has to mean: effective / yielding positive results / working well / fruitful'
      ],
      width: 'w-[560px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1737) return {
      text: [
        <span>- Key words: recently observed / {green('lasted for 200 seconds')} / merger of neutron stars / {green('typically')} last fewer than 2 seconds</span>,
        '- has to mean: rare / extraordinary / uncommon / atypical / unprecedented'
      ],
      width: 'w-[550px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1738) return {
      text: [
        <span>- Key words: win country’s support / very popular in France / {green('This')} / helped convince France to assist</span>,
        '- has to mean: widespread admiration / high standing / high favor / widespread esteem'
      ],
      width: 'w-[540px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1821) return {
      text: [
        <span>- Key words: {green('Though not closely related')} / share basic / {green('—')} / traits / independently developed</span>,
        '- has to mean: common features / points of resemblance / shared characteristics'
      ],
      width: 'w-[590px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1822) return {
      text: [
        <span>- Key words: feminist mode / {green('in contrast to')} / politics were less deliberately signaled</span>,
        <span>- has to mean: explicitly / openly / visibly / undisguisedly (due to {green('in contrast to')})</span>
      ],
      width: 'w-[550px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1823) return {
      text: [
        <span>- Key words: {green('long-standing')} trend of overemphasizing / teenagers and young / {green('recently begun')} to expand their focus / {green(':')} / senior citizens</span>,
        '- has to mean: correcting an imbalance / rectifying / setting right / remedying'
      ],
      width: 'w-[700px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1824) return {
      text: [
        <span>- Key words: {green('disputing... our passage')}</span>,
        '- has to mean: contesting movement / impeding / obstructing / battling for physical space'
      ],
      width: 'w-[570px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1825) return {
      text: [
        <span>- Key words: Contrast: {green('While')} / undermined claims / location thousands of miles west</span>,
        '- has to mean: without significance to / lacking influence on / having no bearing on'
      ],
      width: 'w-[570px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1854) return {
      text: [
        <span>- Key words: Contrast: {green('now')} in museums / {green('but')} / {green('were displayed')} in outdoor public spaces</span>,
        '- has to mean: exhibited / displayed / showcased / presented'
      ],
      width: 'w-[620px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1855) return {
      text: [
        <span>- Key words: {green(',')} / drawing from memories / details of her current surroundings</span>,
        '- has to mean: stimulated by / influenced by / motivated by / rooted in personal background'
      ],
      width: 'w-[560px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1856) return {
      text: [
        <span>- Key words: might simply be / {green('but')} / using the stones {green('deliberately')}</span>,
        '- has to mean: unintentional / by chance / random / inadvertent'
      ],
      width: 'w-[550px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1857) return {
      text: [
        <span>- Key words: {green('preindustrial methods')} / {green('repudiation of industrialization')} / handmade / intricate ornamentation / {green('meticulously handcrafted')}</span>,
        '- has to mean: clearly evident in / revealed in / demonstrated by / embodied in'
      ],
      width: 'w-[710px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1858) return {
      text: [
        <span>- Key words: Contrast: {green('substantial')} impact on society / {green('but')} / place in our historical memory / {green('more... than')} / will long be remembered</span>,
        '- has to mean: uncertain / insecure / less firmly established / fragile / provisional'
      ],
      width: 'w-[690px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1941) return {
      text: [
        <span>- Key words: fur traders / canoe / {green('suspects that they are being followed')} / {green('no fire to be built')} / {green('no landing to be made')} / passing to be left</span>,
        '- has to mean: visible sign / indication / mark / proof of presence / track'
      ],
      width: 'w-[680px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1942) return {
      text: [
        <span>- Key words: ancient sculptures / missing their noses / {green('This is because')} / {green('delicate')} / {green('sticks out')} / {green('easy to break')}</span>,
        '- has to mean: easily broken / breakable / vulnerable / easily damaged / brittle'
      ],
      width: 'w-[680px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1943) return {
      text: [
        <span>- Key words: {green('advance indication')} / solar flares / {green('Preceding a flare')} / temporarily exhibits increased brightness</span>,
        '- has to mean: about to happen / approaching / imminent / upcoming / forthcoming'
      ],
      width: 'w-[660px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1944) return {
      text: [
        <span>- Key words: assessed without unearthing / internal magnetic fields to alter under stress / {green(':')} / {green('alterations can be measured from a distance')} / {green('reveal concentrations of stress')}</span>,
        '- has to mean: took advantage of / utilized / made practical use of / harnessed / capitalized on'
      ],
      width: 'w-[770px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1945) return {
      text: [
        <span>- Key words: Contrast: {green('Despite')} / generalizations / behavioral psychology / {green('highly unrepresentative subject pools')} / {green(':')} / seeing {green('this')} / {green('actively recruit subjects from diverse backgrounds and locations')}</span>,
        '- has to mean: improve / make better / remedy / correct / rectify / fix a flawed situation'
      ],
      width: 'w-[770px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1974) return {
      text: [
        <span>- Key words: gorgeous oranges / {green('staying where she was')} / reaching across to a black bowl / {green('held out a big one')}</span>,
        '- has to mean: extending an arm in the direction of / spanning the distance to take / reaching outward'
      ],
      width: 'w-[680px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1975) return {
      text: [
        <span>- Key words: rich fossil deposit / {green('so')} {green('well preserved')} {green('that')} / {green('able to')} / {green('detailed information')} / color patterns and how they interacted</span>,
        '- has to mean: acquire / extract / collect / gather / gain / secure / learn'
      ],
      width: 'w-[730px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1976) return {
      text: [
        <span>- Key words: ease of decision making / {green('more decisive if')} information flow {green('intensified,')} / Contrast: {green('whereas')} / {green('make choices more slowly when')} information flow is</span>,
        '- has to mean: diminished / lessened / decreased / weakened / lowered in volume'
      ],
      width: 'w-[750px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1977) return {
      text: [
        <span>- Key words: historical memory / {green('partly because it is overshadowed by the much larger concurrent conflict')} / {green('and partly because it essentially maintained the geopolitical status quo')} / {green(':')} / {green('neither gained nor lost significant territory or position')}</span>,
        '- has to mean: weak / slight / faint / fragile / precarious / insecure / barely noticeable'
      ],
      width: 'w-[790px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1978) return {
      text: [
        <span>- Key words: paintings and sculptures / {green('difficult to successfully')} / know {green('so little that')} / assertions / {green('almost inevitably rely on significant speculation and guesswork')}</span>,
        '- has to mean: substantiate / justify / prove valid with evidence / uphold / support with proof'
      ],
      width: 'w-[780px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1101) return {
      text: [
        <span>- Key words: unexpected obstacle / OSIRIS-REx successfully _______ a sample / {green(',')} {green('gathering pieces of it to bring back to Earth')}</span>,
        '- has to mean: acquired / gathered / retrieved / harvested physical specimens / took possession of'
      ],
      width: 'w-[720px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1102) return {
      text: [
        <span>- Key words: Moon’s surface / softer / {green('left less of an impression;')} / {green('thus,')} {green('evidence of early impacts may no longer be present')}</span>,
        '- has to mean: show / represent / mirror / accurately register evidence of / display'
      ],
      width: 'w-[750px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1103) return {
      text: [
        <span>- Key words: Handedness / {green('easy to observe')} in humans / {green('Because this')} trait is present {green('but less _______')} / {green('tasks specially designed to reveal')} / individual animals’ preferences</span>,
        '- has to mean: noticeable / observable / perceptible / detectable / apparent / discernible'
      ],
      width: 'w-[770px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1104) return {
      text: [
        <span>- Key words: {green('by no means')} _______ / influence of Dutch painter Hieronymus Bosch / {green(', indeed, Banisadr himself cites Bosch as an inspiration')} / Contrast: {green('However,')} / {green('far greater impact')}</span>,
        '- has to mean: trivial / insignificant / negligible / meaningless / minor'
      ],
      width: 'w-[780px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1105) return {
      text: [
        <span>- Key words: failed to fit in / {green('“Don’t belong in here,” he fumed')} / Contrast: {green('And yet')} / {green('the old man was secretly proud of his acquisition')} / hidden dignity in his scowling</span>,
        '- has to mean: demonstrate opposing internal attitudes / show mixed emotional reactions / portray conflicting sentiments'
      ],
      width: 'w-[770px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1201) return {
      text: [
        <span>- Key words: fashion resale market / {green('Expecting to see continued growth,')} / analysts / {green('revenues will more than double by 2028')}</span>,
        '- has to mean: forecasted / projected / anticipated in advance / estimated / foretold'
      ],
      width: 'w-[750px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1202) return {
      text: [
        <span>- Key words: {green('difficult to transmit biomolecules through the layers of the plant cell wall')} / possible to _______ {green('this')} problem / {green('by transmitting molecules through carbon nanotubes, which can cross cell walls')}</span>,
        '- has to mean: resolve / surmount / conquer / get around / successfully deal with a difficulty'
      ],
      width: 'w-[780px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1203) return {
      text: [
        <span>- Key words: Particle physicists / invisible to the naked eye / {green(':')} / {green('using sophisticated technology, they closely examine')}</span>,
        '- has to mean: scrutinizing / studying / analyzing / observing carefully / viewing closely'
      ],
      width: 'w-[720px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1204) return {
      text: [
        <span>- Key words: fossilized clavicle and shoulder bones / Little Foot / {green('modern apes that are frequent climbers')} / {green(', suggesting that Little Foot had adapted to life in the trees')}</span>,
        '- has to mean: similar to / analogous to / matching / equivalent in structure / bearing likeness to'
      ],
      width: 'w-[780px]',
      fontSize: 15,
      headerFontSize: 18
    };
    if (qId === 1205) return {
      text: [
        <span>- Key words: protagonist / poet / occupation / {green('not')} _______ / {green(':')} / {green('nearly a dozen of the characters that populate his novels are poets or writers')}</span>,
        '- has to mean: unusual / uncommon / rare / abnormal / exceptional / out of the ordinary'
      ],
      width: 'w-[780px]',
      fontSize: 15,
      headerFontSize: 18
    };
    return null;
  };

  const getHintOptionBreakdown = (qId: number) => {
    if (qId === 1) return TEST11_Q1_OPTION_HINTS;
    if (qId === 2) return TEST11_Q2_OPTION_HINTS;
    if (qId === 3) return TEST11_Q3_OPTION_HINTS;
    if (qId === 4) return TEST11_Q4_OPTION_HINTS;
    if (qId === 5) return TEST11_Q5_OPTION_HINTS;
    if (qId === 34) return TEST11_M2_Q1_OPTION_HINTS;
    if (qId === 35) return TEST11_M2_Q2_OPTION_HINTS;
    if (qId === 36) return TEST11_M2_Q3_OPTION_HINTS;
    if (qId === 37) return TEST11_M2_Q4_OPTION_HINTS;
    if (qId === 38) return TEST11_M2_Q5_OPTION_HINTS;
    if (qId === 201) return TEST10_Q1_OPTION_HINTS;
    if (qId === 202) return TEST10_Q2_OPTION_HINTS;
    if (qId === 203) return TEST10_Q3_OPTION_HINTS;
    if (qId === 204) return TEST10_Q4_OPTION_HINTS;
    if (qId === 205) return TEST10_Q5_OPTION_HINTS;
    if (qId === 234) return TEST10_M2_Q1_OPTION_HINTS;
    if (qId === 235) return TEST10_M2_Q2_OPTION_HINTS;
    if (qId === 236) return TEST10_M2_Q3_OPTION_HINTS;
    if (qId === 237) return TEST10_M2_Q4_OPTION_HINTS;
    if (qId === 238) return TEST10_M2_Q5_OPTION_HINTS;
    if (qId === 901) return TEST9_Q1_OPTION_HINTS;
    if (qId === 902) return TEST9_Q2_OPTION_HINTS;
    if (qId === 903) return TEST9_Q3_OPTION_HINTS;
    if (qId === 904) return TEST9_Q4_OPTION_HINTS;
    if (qId === 905) return TEST9_Q5_OPTION_HINTS;
    if (qId === 934) return TEST9_M2_Q1_OPTION_HINTS;
    if (qId === 935) return TEST9_M2_Q2_OPTION_HINTS;
    if (qId === 936) return TEST9_M2_Q3_OPTION_HINTS;
    if (qId === 937) return TEST9_M2_Q4_OPTION_HINTS;
    if (qId === 938) return TEST9_M2_Q5_OPTION_HINTS;
    if (qId === 1801) return TEST8_Q1_OPTION_HINTS;
    if (qId === 1802) return TEST8_Q2_OPTION_HINTS;
    if (qId === 1803) return TEST8_Q3_OPTION_HINTS;
    if (qId === 1804) return TEST8_Q4_OPTION_HINTS;
    if (qId === 1805) return TEST8_Q5_OPTION_HINTS;
    if (qId === 1834) return TEST8_M2_Q1_OPTION_HINTS;
    if (qId === 1835) return TEST8_M2_Q2_OPTION_HINTS;
    if (qId === 1836) return TEST8_M2_Q3_OPTION_HINTS;
    if (qId === 1837) return TEST8_M2_Q4_OPTION_HINTS;
    if (qId === 1838) return TEST8_M2_Q5_OPTION_HINTS;
    if (qId === 1701) return TEST7_Q1_OPTION_HINTS;
    if (qId === 1702) return TEST7_Q2_OPTION_HINTS;
    if (qId === 1703) return TEST7_Q3_OPTION_HINTS;
    if (qId === 1704) return TEST7_Q4_OPTION_HINTS;
    if (qId === 1705) return TEST7_Q5_OPTION_HINTS;
    if (qId === 1734) return TEST7_M2_Q1_OPTION_HINTS;
    if (qId === 1735) return TEST7_M2_Q2_OPTION_HINTS;
    if (qId === 1736) return TEST7_M2_Q3_OPTION_HINTS;
    if (qId === 1737) return TEST7_M2_Q4_OPTION_HINTS;
    if (qId === 1738) return TEST7_M2_Q5_OPTION_HINTS;
    if (qId === 1821) return TEST6_Q1_OPTION_HINTS;
    if (qId === 1822) return TEST6_Q2_OPTION_HINTS;
    if (qId === 1823) return TEST6_Q3_OPTION_HINTS;
    if (qId === 1824) return TEST6_Q4_OPTION_HINTS;
    if (qId === 1825) return TEST6_Q5_OPTION_HINTS;
    if (qId === 1854) return TEST6_M2_Q1_OPTION_HINTS;
    if (qId === 1855) return TEST6_M2_Q2_OPTION_HINTS;
    if (qId === 1856) return TEST6_M2_Q3_OPTION_HINTS;
    if (qId === 1857) return TEST6_M2_Q4_OPTION_HINTS;
    if (qId === 1858) return TEST6_M2_Q5_OPTION_HINTS;
    if (qId === 1941) return TEST5_Q1_OPTION_HINTS;
    if (qId === 1942) return TEST5_Q2_OPTION_HINTS;
    if (qId === 1943) return TEST5_Q3_OPTION_HINTS;
    if (qId === 1944) return TEST5_Q4_OPTION_HINTS;
    if (qId === 1945) return TEST5_Q5_OPTION_HINTS;
    if (qId === 1974) return TEST5_M2_Q1_OPTION_HINTS;
    if (qId === 1975) return TEST5_M2_Q2_OPTION_HINTS;
    if (qId === 1976) return TEST5_M2_Q3_OPTION_HINTS;
    if (qId === 1977) return TEST5_M2_Q4_OPTION_HINTS;
    if (qId === 1978) return TEST5_M2_Q5_OPTION_HINTS;
    if (qId === 1101) return TEST4_Q1_OPTION_HINTS;
    if (qId === 1102) return TEST4_Q2_OPTION_HINTS;
    if (qId === 1103) return TEST4_Q3_OPTION_HINTS;
    if (qId === 1104) return TEST4_Q4_OPTION_HINTS;
    if (qId === 1105) return TEST4_Q5_OPTION_HINTS;
    if (qId === 1201) return TEST4_M2_Q1_OPTION_HINTS;
    if (qId === 1202) return TEST4_M2_Q2_OPTION_HINTS;
    if (qId === 1203) return TEST4_M2_Q3_OPTION_HINTS;
    if (qId === 1204) return TEST4_M2_Q4_OPTION_HINTS;
    if (qId === 1205) return TEST4_M2_Q5_OPTION_HINTS;
    return null;
  };

  const getNoteColorStyles = (color: AnnotationColor) => {
    switch (color) {
      case 'blue':
        return {
          card: 'bg-blue-50/90 border-blue-400 text-blue-950 shadow-2xs',
          header: 'bg-blue-100/90 text-blue-900 border-b border-blue-300',
          textarea: 'text-blue-950 placeholder-blue-400 focus:bg-white/80'
        };
      case 'green':
        return {
          card: 'bg-emerald-50/90 border-emerald-400 text-emerald-950 shadow-2xs',
          header: 'bg-emerald-100/90 text-emerald-900 border-b border-emerald-300',
          textarea: 'text-emerald-950 placeholder-emerald-400 focus:bg-white/80'
        };
      case 'white':
        return {
          card: 'bg-white/95 border-slate-400 text-slate-900 shadow-2xs',
          header: 'bg-slate-100 text-slate-700 border-b border-slate-300',
          textarea: 'text-slate-900 placeholder-slate-400 focus:bg-white'
        };
      case 'yellow':
      default:
        return {
          card: 'bg-amber-50/90 border-amber-400 text-amber-950 shadow-2xs',
          header: 'bg-amber-100/90 text-amber-900 border-b border-amber-300',
          textarea: 'text-amber-950 placeholder-amber-500 focus:bg-white/80'
        };
    }
  };

  // Dragging handling relative to main workspace container
  const handleNoteMouseDown = (e: React.MouseEvent | React.TouchEvent, note: AnnotationNote) => {
    e.stopPropagation();
    setSelectedNoteId(note.id);
    setDraggingNoteId(note.id);
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const mainEl = mainRef.current;
    if (!mainEl) return;
    const rect = mainEl.getBoundingClientRect();

    setDragOffset({
      x: (clientX - rect.left) - note.x,
      y: (clientY - rect.top) - note.y
    });
  };

  // Resize handling relative to main workspace container
  const handleResizeStart = (
    e: React.MouseEvent | React.TouchEvent,
    note: AnnotationNote,
    direction: 'se' | 'e' | 's' | 'w' | 'n' | 'sw' | 'ne' | 'nw'
  ) => {
    e.stopPropagation();
    setSelectedNoteId(note.id);

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const currentWidth = note.width || 200;
    const currentHeight = note.height || 110;

    setResizingNote({
      id: note.id,
      direction,
      startX: clientX,
      startY: clientY,
      startWidth: currentWidth,
      startHeight: currentHeight,
      startNoteX: note.x,
      startNoteY: note.y
    });
  };

  useEffect(() => {
    if (!draggingNoteId) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const mainEl = mainRef.current;
      if (!mainEl) return;
      const rect = mainEl.getBoundingClientRect();

      const currentNote = (questionAnnotations[currentQ.id] || []).find(n => n.id === draggingNoteId);
      const noteW = currentNote?.width || 200;
      const noteH = currentNote?.height || 110;

      const newX = Math.max(5, Math.min(rect.width - noteW - 5, (clientX - rect.left) - dragOffset.x));
      const newY = Math.max(5, Math.min(rect.height - noteH - 5, (clientY - rect.top) - dragOffset.y));

      setQuestionAnnotations(prev => ({
        ...prev,
        [currentQ.id]: (prev[currentQ.id] || []).map(n => n.id === draggingNoteId ? { ...n, x: newX, y: newY } : n)
      }));
    };

    const handleEnd = () => {
      setDraggingNoteId(null);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [draggingNoteId, dragOffset, currentQ.id, questionAnnotations]);

  // Resizing effect handler
  useEffect(() => {
    if (!resizingNote) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const mainEl = mainRef.current;
      if (!mainEl) return;
      const rect = mainEl.getBoundingClientRect();

      const deltaX = clientX - resizingNote.startX;
      const deltaY = clientY - resizingNote.startY;

      let newWidth = resizingNote.startWidth;
      let newHeight = resizingNote.startHeight;
      let newX = resizingNote.startNoteX;
      let newY = resizingNote.startNoteY;

      if (resizingNote.direction.includes('e')) {
        newWidth = Math.max(90, Math.min(rect.width - resizingNote.startNoteX - 10, resizingNote.startWidth + deltaX));
      }
      if (resizingNote.direction.includes('s')) {
        newHeight = Math.max(50, Math.min(rect.height - resizingNote.startNoteY - 10, resizingNote.startHeight + deltaY));
      }
      if (resizingNote.direction.includes('w')) {
        const potentialWidth = resizingNote.startWidth - deltaX;
        if (potentialWidth >= 90 && resizingNote.startNoteX + deltaX >= 5) {
          newWidth = potentialWidth;
          newX = resizingNote.startNoteX + deltaX;
        }
      }
      if (resizingNote.direction.includes('n')) {
        const potentialHeight = resizingNote.startHeight - deltaY;
        if (potentialHeight >= 50 && resizingNote.startNoteY + deltaY >= 5) {
          newHeight = potentialHeight;
          newY = resizingNote.startNoteY + deltaY;
        }
      }

      setQuestionAnnotations(prev => ({
        ...prev,
        [currentQ.id]: (prev[currentQ.id] || []).map(n => 
          n.id === resizingNote.id ? { ...n, width: newWidth, height: newHeight, x: newX, y: newY } : n
        )
      }));
    };

    const handleEnd = () => {
      setResizingNote(null);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [resizingNote, currentQ.id]);

  const handleWorkspaceClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!isAnnotateMode) return;
    const target = e.target as HTMLElement;
    if (target.closest('.annotation-note-card') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('#bilingual-word-definition-popup')) {
      return;
    }

    const mainEl = mainRef.current;
    if (!mainEl) return;
    const rect = mainEl.getBoundingClientRect();
    const clickX = Math.max(10, Math.min(rect.width - 250, e.clientX - rect.left - 20));
    const clickY = Math.max(10, Math.min(rect.height - 120, e.clientY - rect.top - 20));

    addAnnotationNote(clickX, clickY);
  };

  // Direct Highlight & Eraser MouseUp and KeyUp Handler (no floating toolbar)
  useEffect(() => {
    const handleMouseUpDoc = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('#bilingual-word-definition-popup') || 
        target?.closest('.annotation-note-card') || 
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea')
      ) {
        return;
      }

      // Only perform actions on text selection or clicks when Highlight Mode is active
      if (!isHighlightMode) return;

      const selection = window.getSelection();
      const hasSelection = selection && !selection.isCollapsed && selection.toString().trim().length > 0;

      // If user simply clicked (collapsed selection) on an existing mark, remove it
      if (!hasSelection) {
        const mark = target?.closest('mark.sat-highlight') as HTMLElement | null;
        if (mark) {
          removeHighlight(mark);
          setToastMessage('Highlight removed');
          setTimeout(() => setToastMessage(null), 1800);
          return;
        }
        return;
      }

      if (!selection) return;
      const rawText = selection.toString().trim();
      if (!rawText) return;

      const range = selection.getRangeAt(0);
      const passagePanel = document.querySelector('#passagePanel, #questionPanel .passage-content');
      const questionPanel = document.querySelector('#questionPanel');

      const insidePassage = passagePanel && (passagePanel.contains(range.startContainer) || passagePanel.contains(range.endContainer) || passagePanel.contains(range.commonAncestorContainer));
      const insideQuestion = questionPanel && (questionPanel.contains(range.startContainer) || questionPanel.contains(range.endContainer) || questionPanel.contains(range.commonAncestorContainer));

      if (!insidePassage && !insideQuestion) {
        return;
      }

      if (highlightTool === 'eraser') {
        // If in eraser mode, remove overlapping highlights
        const container = insidePassage ? passagePanel : questionPanel;
        if (container) {
          const marks = Array.from(container.querySelectorAll('mark.sat-highlight')) as HTMLElement[];
          let removedAny = false;
          marks.forEach(m => {
            if (range.intersectsNode(m)) {
              removeHighlight(m);
              removedAny = true;
            }
          });
          if (removedAny) {
            setToastMessage('Highlight(s) removed');
            setTimeout(() => setToastMessage(null), 1800);
          }
        }
        if (window.getSelection()) {
          window.getSelection()?.removeAllRanges();
        }
      } else {
        // Direct highlight
        performHighlightOnSelection(range);
      }
    };

    // Auto-highlight when finishing keyboard selection (releasing Shift) while in Highlighter mode
    const handleKeyUpDoc = (e: KeyboardEvent) => {
      if (e.key === 'Shift' && isHighlightMode && highlightTool === 'highlighter') {
        const selection = window.getSelection();
        if (selection && !selection.isCollapsed && selection.toString().trim().length > 0) {
          const range = selection.getRangeAt(0);
          const passagePanel = document.querySelector('#passagePanel, #questionPanel .passage-content');
          const questionPanel = document.querySelector('#questionPanel');
          const insidePassage = passagePanel && (passagePanel.contains(range.startContainer) || passagePanel.contains(range.endContainer) || passagePanel.contains(range.commonAncestorContainer));
          const insideQuestion = questionPanel && (questionPanel.contains(range.startContainer) || questionPanel.contains(range.endContainer) || questionPanel.contains(range.commonAncestorContainer));
          if (insidePassage || insideQuestion) {
            performHighlightOnSelection(range);
          }
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUpDoc);
    document.addEventListener('keyup', handleKeyUpDoc);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpDoc);
      document.removeEventListener('keyup', handleKeyUpDoc);
    };
  }, [isHighlightMode, highlightTool, currentQ.id]);

  // Scribble Tool States
  const [strokeColor, setStrokeColor] = useState('#ef4444');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);

  // Modals
  const [showGridModal, setShowGridModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewFilterTab, setReviewFilterTab] = useState<'marked' | 'unanswered' | 'all'>('marked');
  const [showRefModal, setShowRefModal] = useState(false);
  const [showCalcModal, setShowCalcModal] = useState(false);
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [showSubmitSummary, setShowSubmitSummary] = useState(false);

  // Gemini Word Definition Pop-up State
  const [definitionModalState, setDefinitionModalState] = useState<{
    isOpen: boolean;
    word: string;
    context?: string;
    position: { x: number; y: number } | null;
  }>({
    isOpen: false,
    word: '',
    context: '',
    position: null,
  });

  const openWordDefinition = (wordToDefine: string, contextSentence?: string, pos?: { x: number; y: number } | null) => {
    const clean = wordToDefine.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    if (!clean || clean.length < 2) return;
    setDefinitionModalState({
      isOpen: true,
      word: clean,
      context: contextSentence || '',
      position: pos || null,
    });
  };

  // Robust Word Selection & Double-Click Handler
  useEffect(() => {
    const extractWordAtPosition = (e: MouseEvent): { word: string; context: string; x: number; y: number } => {
      let word = '';
      let context = '';
      const x = e.clientX;
      const y = e.clientY;

      // Method 1: Check standard window selection first (native double-click selects word)
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed && sel.toString().trim()) {
        const rawSel = sel.toString().trim();
        if (rawSel.length >= 2 && rawSel.length <= 60) {
          word = rawSel;
          if (sel.anchorNode) {
            let parent = sel.anchorNode.parentElement;
            if (parent && parent.innerText && parent.innerText.trim().split(/\s+/).length < 5) {
              const blockContainer = parent.closest('p, div, li, td, th, blockquote, [data-passage]');
              if (blockContainer) {
                parent = blockContainer as HTMLElement;
              }
            }
            context = parent ? (parent.innerText || parent.textContent || '') : '';
          }
        }
      }

      // Method 2: Use caretRangeFromPoint or caretPositionFromPoint to extract and select exact word
      if (!word || word.length < 2) {
        let textNode: Node | null = null;
        let offset = 0;

        if (document.caretRangeFromPoint) {
          const range = document.caretRangeFromPoint(x, y);
          if (range) {
            if (range.startContainer.nodeType === Node.TEXT_NODE) {
              textNode = range.startContainer;
              offset = range.startOffset;
            } else if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
              const elem = range.startContainer as HTMLElement;
              for (let i = 0; i < elem.childNodes.length; i++) {
                const child = elem.childNodes[i];
                if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) {
                  textNode = child;
                  offset = 0;
                  break;
                }
              }
            }
          }
        } else if ((document as any).caretPositionFromPoint) {
          const pos = (document as any).caretPositionFromPoint(x, y);
          if (pos && pos.offsetNode) {
            if (pos.offsetNode.nodeType === Node.TEXT_NODE) {
              textNode = pos.offsetNode;
              offset = pos.offset;
            } else if (pos.offsetNode.nodeType === Node.ELEMENT_NODE) {
              const elem = pos.offsetNode as HTMLElement;
              for (let i = 0; i < elem.childNodes.length; i++) {
                const child = elem.childNodes[i];
                if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) {
                  textNode = child;
                  offset = 0;
                  break;
                }
              }
            }
          }
        }

        // Method 3: Check target element text node
        if (!textNode && e.target) {
          const targetElem = e.target as HTMLElement;
          for (let i = 0; i < targetElem.childNodes.length; i++) {
            const child = targetElem.childNodes[i];
            if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) {
              textNode = child;
              offset = 0;
              break;
            }
          }
        }

        if (textNode && textNode.textContent) {
          const text = textNode.textContent;
          let start = Math.min(Math.max(0, offset), text.length);
          let end = start;

          if (start > 0 && start === text.length && /[a-zA-Z0-9]/.test(text[start - 1])) {
            start--;
            end = start;
          } else if (start < text.length && !/[a-zA-Z0-9]/.test(text[start]) && start > 0 && /[a-zA-Z0-9]/.test(text[start - 1])) {
            start--;
            end = start;
          }

          while (start > 0 && /[a-zA-Z0-9'\-]/.test(text[start - 1])) {
            start--;
          }
          while (end < text.length && /[a-zA-Z0-9'\-]/.test(text[end])) {
            end++;
          }

          const extracted = text.slice(start, end).trim();
          if (extracted) {
            word = extracted;
            let parent = textNode.parentElement;
            if (parent && parent.innerText && parent.innerText.trim().split(/\s+/).length < 5) {
              const blockContainer = parent.closest('p, div, li, td, th, blockquote, [data-passage]');
              if (blockContainer) {
                parent = blockContainer as HTMLElement;
              }
            }
            context = parent ? (parent.innerText || parent.textContent || '') : text;
          }
        }
      }

      return { word, context, x, y };
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore double clicks inside form inputs, dictionary modal itself, or text box notes
      if (
        target.closest('#bilingual-word-definition-popup') ||
        target.closest('#gemini-word-definition-popup') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.annotation-note-card')
      ) {
        return;
      }

      lastDoubleClickTimeRef.current = Date.now();

      // Extract the word at coordinates
      const { word: rawWord, context, x, y } = extractWordAtPosition(e);
      const cleanWord = rawWord.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');

      if (cleanWord && cleanWord.length >= 2 && cleanWord.length <= 45 && /[a-zA-Z0-9]/.test(cleanWord)) {
        const posX = Math.max(10, Math.min(window.innerWidth - 440, x));
        const posY = Math.max(10, Math.min(window.innerHeight - 450, y + 12));
        openWordDefinition(cleanWord, context, { x: posX, y: posY });
      }
    };

    document.addEventListener('dblclick', handleDoubleClick, true);
    return () => document.removeEventListener('dblclick', handleDoubleClick, true);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const moduleSequence: ModuleKey[] = ['RW_1', 'RW_2', 'MATH_1', 'MATH_2'];

  const handleNext = () => {
    setActiveNavDirection('next');
    if (safeIndex < currentQuestions.length - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      const currentModIdx = moduleSequence.indexOf(activeModuleKey);
      if (currentModIdx < moduleSequence.length - 1) {
        const nextModKey = moduleSequence[currentModIdx + 1];
        if (activeModuleKey === 'RW_2' && nextModKey === 'MATH_1') {
          setBreakTimeRemaining(10 * 60);
          setShowBreakModal(true);
        } else {
          setActiveModuleKey(nextModKey);
          setCurrentIndex(0);
          setTimeRemaining(getModuleTimeLimit(nextModKey));
        }
      } else {
        setShowSubmitSummary(true);
      }
    }
  };

  const handleEndBreak = () => {
    setShowBreakModal(false);
    setActiveModuleKey('MATH_1');
    setCurrentIndex(0);
    setActiveNavDirection('next');
    setTimeRemaining(getModuleTimeLimit('MATH_1'));
  };

  const handleBack = () => {
    setActiveNavDirection('back');
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    } else {
      const currentModIdx = moduleSequence.indexOf(activeModuleKey);
      if (currentModIdx > 0) {
        const prevModKey = moduleSequence[currentModIdx - 1];
        setActiveModuleKey(prevModKey);
        setCurrentIndex(currentModules[prevModKey].questions.length - 1);
      }
    }
  };

  const switchModule = (key: ModuleKey) => {
    setActiveModuleKey(key);
    setCurrentIndex(0);
    setActiveNavDirection('next');
    setTimeRemaining(getModuleTimeLimit(key));
  };

  // Keyboard navigation, shortcuts, and accurate selection highlighting
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input, textarea, or contentEditable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const tagName = target.tagName ? target.tagName.toUpperCase() : '';
        if (tagName === 'INPUT' || tagName === 'TEXTAREA' || target.isContentEditable) {
          return;
        }
      }

      // Don't trigger if blocker modals are open
      if (showRestartModal || showSubmitSummary || showRefModal || showCalcModal || showReviewModal || showGridModal || showBreakModal) {
        return;
      }

      const selection = window.getSelection();
      const hasActiveSelection = selection && !selection.isCollapsed && selection.toString().trim().length > 0;

      // Check if active selection or focused target is within passage or question text
      const passageEl = document.querySelector('#passagePanel, .passage-content');
      const questionEl = document.querySelector('#questionPanel, .question-content');
      
      let isInsideContent = false;
      if (hasActiveSelection && selection) {
        const range = selection.getRangeAt(0);
        isInsideContent = !!(
          (passageEl && (passageEl.contains(range.startContainer) || passageEl.contains(range.commonAncestorContainer))) ||
          (questionEl && (questionEl.contains(range.startContainer) || questionEl.contains(range.commonAncestorContainer)))
        );
      }

      // Shortcut 'H' or 'Alt+H': Highlight selected text immediately, or toggle Highlight mode
      if ((e.key === 'h' || e.key === 'H') && !e.ctrlKey && !e.metaKey) {
        if (hasActiveSelection && isInsideContent) {
          e.preventDefault();
          performHighlightOnSelection();
          setToastMessage('Phrase highlighted (H)');
          setTimeout(() => setToastMessage(null), 1800);
          return;
        } else if (!e.shiftKey) {
          e.preventDefault();
          const nextMode = !isHighlightMode;
          setIsHighlightMode(nextMode);
          if (nextMode) {
            setIsScribbleMode(false);
            setIsStrikethroughMode(false);
            setIsAnnotateMode(false);
            setHighlightTool('highlighter');
            setToastMessage('Highlight mode ON');
            setTimeout(() => setToastMessage(null), 1500);
          }
          return;
        }
      }

      // Shortcut 'E': Remove highlight on selected text, or toggle Eraser
      if ((e.key === 'e' || e.key === 'E') && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        if (hasActiveSelection && isInsideContent && selection) {
          e.preventDefault();
          const range = selection.getRangeAt(0);
          const container = passageEl && passageEl.contains(range.startContainer) ? passageEl : questionEl;
          if (container) {
            const marks = Array.from(container.querySelectorAll('mark.sat-highlight')) as HTMLElement[];
            let removedAny = false;
            marks.forEach(m => {
              if (range.intersectsNode(m)) {
                removeHighlight(m);
                removedAny = true;
              }
            });
            if (removedAny) {
              setToastMessage('Highlight(s) removed');
              setTimeout(() => setToastMessage(null), 1800);
            }
          }
          selection.removeAllRanges();
          return;
        } else {
          e.preventDefault();
          if (isHighlightMode) {
            setHighlightTool(prev => prev === 'eraser' ? 'highlighter' : 'eraser');
          }
          return;
        }
      }

      // If user presses Enter while text is selected and in highlight mode
      if (e.key === 'Enter' && hasActiveSelection && isInsideContent && isHighlightMode && highlightTool === 'highlighter') {
        e.preventDefault();
        performHighlightOnSelection();
        setToastMessage('Phrase highlighted');
        setTimeout(() => setToastMessage(null), 1800);
        return;
      }

      // If user is holding Shift (or Ctrl/Alt) to select text or navigate cursor with arrows, DO NOT hijack for question navigation
      if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {
        return;
      }

      // If there is an active selection in the text, do not navigate questions with bare arrow keys
      if (hasActiveSelection) {
        return;
      }

      // If the target element is inside passage or question content, let arrow keys move the caret
      if (target && (passageEl?.contains(target) || questionEl?.contains(target))) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!(activeModuleKey === 'RW_1' && safeIndex === 0)) {
          handleBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    safeIndex,
    currentQuestions.length,
    activeModuleKey,
    isHighlightMode,
    highlightTool,
    currentQ.id,
    showRestartModal,
    showSubmitSummary,
    showRefModal,
    showCalcModal,
    showReviewModal,
    showGridModal
  ]);

  // Toast trigger helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Auto-save progress to localStorage whenever relevant state changes
  useEffect(() => {
    const dataToSave = {
      activeTestId,
      activeModuleKey,
      currentIndex,
      userAnswers,
      flaggedQuestions,
      strikethroughs,
      questionScribbles,
      checkedAnswers,
      questionHighlights,
      questionAnnotations,
      timeRemaining,
      updatedAt: Date.now()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
  }, [
    activeTestId,
    activeModuleKey,
    currentIndex,
    userAnswers,
    flaggedQuestions,
    strikethroughs,
    questionScribbles,
    checkedAnswers,
    questionHighlights,
    questionAnnotations,
    timeRemaining
  ]);

  // Restart current module progress
  const resetCurrentModuleProgress = () => {
    const currentModuleQuestionIds = currentQuestions.map(q => q.id);
    
    setUserAnswers(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = null; });
      return next;
    });
    setFlaggedQuestions(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = false; });
      return next;
    });
    setStrikethroughs(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = {}; });
      return next;
    });
    setQuestionScribbles(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = []; });
      return next;
    });
    setCheckedAnswers(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = false; });
      return next;
    });
    setQuestionHighlights(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { delete next[id]; });
      return next;
    });
    setQuestionAnnotations(prev => {
      const next = { ...prev };
      currentModuleQuestionIds.forEach(id => { next[id] = []; });
      return next;
    });

    setCurrentIndex(0);
    setTimeRemaining(getModuleTimeLimit(activeModuleKey));
    setShowRestartModal(false);
    triggerToast('Module restarted! Answers, highlights & notes cleared for ' + currentModule.title + '.');
  };

  // Restart full test progress
  const resetFullTestProgress = () => {
    setUserAnswers(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: null }), {}));
    setFlaggedQuestions(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: false }), {}));
    setStrikethroughs(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: {} }), {}));
    setQuestionScribbles(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: [] }), {}));
    setCheckedAnswers({});
    setQuestionHighlights({});
    setQuestionAnnotations(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: [] }), {}));

    setActiveTestId('test4');
    setActiveModuleKey('RW_1');
    setCurrentIndex(0);
    setTimeRemaining(getModuleTimeLimit('RW_1'));
    setShowRestartModal(false);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
    triggerToast('Full practice test restarted! All answers, drawings, and notes cleared.');
  };

  // Timer Countdown - counts down every second when active
  useEffect(() => {
    if (showSubmitSummary || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setShowSubmitSummary(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showSubmitSummary, timeRemaining <= 0]);

  // 10-Minute Break Countdown
  useEffect(() => {
    if (!showBreakModal || breakTimeRemaining <= 0) return;

    const breakTimer = setInterval(() => {
      setBreakTimeRemaining((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(breakTimer);
  }, [showBreakModal, breakTimeRemaining <= 0]);

  // Resize canvas when main layout or window resizes
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && mainRef.current) {
        canvasRef.current.width = mainRef.current.clientWidth;
        canvasRef.current.height = mainRef.current.clientHeight;
        redrawScribbles();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeModuleKey, safeIndex, questionScribbles, splitRatio]);

  // Handle column resizer dragging
  useEffect(() => {
    if (!isDraggingDivider) return;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!mainRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const rect = mainRef.current.getBoundingClientRect();
      if (rect.width === 0) return;
      const relativeX = clientX - rect.left;
      const newRatio = (relativeX / rect.width) * 100;
      // Clamp split ratio between 25% and 75%
      const clampedRatio = Math.max(25, Math.min(75, newRatio));
      setSplitRatio(clampedRatio);
    };

    const handleMouseUp = () => {
      setIsDraggingDivider(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDraggingDivider]);


  // Redraw scribbles whenever current index or question scribbles change
  const redrawScribbles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const strokes = questionScribbles[currentQ.id] || [];

    strokes.forEach(s => {
      if (s.points.length < 1) return;
      ctx.beginPath();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let i = 1; i < s.points.length; i++) {
        ctx.lineTo(s.points[i].x, s.points[i].y);
      }
      ctx.stroke();
    });
  };

  const getCanvasCoords = (clientX: number, clientY: number): Point => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  // Line segment distance helper for precision stroke-level erasing
  const distanceToSegment = (px: number, py: number, x1: number, y1: number, x2: number, y2: number): number => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lengthSq = dx * dx + dy * dy;
    if (lengthSq === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * dx + (py - y1) * dy) / lengthSq;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  };

  const isStrokeHit = (pt: Point, stroke: Stroke, radius = 18): boolean => {
    const threshold = radius + (stroke.width || 3) / 2;
    if (!stroke.points || stroke.points.length === 0) return false;
    if (stroke.points.length === 1) {
      return Math.hypot(pt.x - stroke.points[0].x, pt.y - stroke.points[0].y) <= threshold;
    }
    for (let i = 0; i < stroke.points.length - 1; i++) {
      const d = distanceToSegment(
        pt.x,
        pt.y,
        stroke.points[i].x,
        stroke.points[i].y,
        stroke.points[i + 1].x,
        stroke.points[i + 1].y
      );
      if (d <= threshold) return true;
    }
    return false;
  };

  const eraseScribblesAt = (clientX: number, clientY: number) => {
    const pt = getCanvasCoords(clientX, clientY);
    setQuestionScribbles(prev => {
      const currentStrokes = prev[currentQ.id] || [];
      const remaining = currentStrokes.filter(stroke => !isStrokeHit(pt, stroke, 20));
      if (remaining.length === currentStrokes.length) return prev;
      return {
        ...prev,
        [currentQ.id]: remaining
      };
    });
  };

  const startDrawingOrErasing = (clientX: number, clientY: number) => {
    if (!isScribbleMode) return;
    if (scribbleTool === 'eraser') {
      setIsErasingScribble(true);
      eraseScribblesAt(clientX, clientY);
      return;
    }
    setIsDrawing(true);
    const pt = getCanvasCoords(clientX, clientY);
    setCurrentStroke({
      color: strokeColor,
      width: strokeWidth,
      points: [pt]
    });
  };

  const drawOrErase = (clientX: number, clientY: number) => {
    if (!isScribbleMode) return;
    if (scribbleTool === 'eraser') {
      if (isErasingScribble) {
        eraseScribblesAt(clientX, clientY);
      }
      return;
    }
    if (!isDrawing || !currentStroke || !canvasRef.current) return;
    const pt = getCanvasCoords(clientX, clientY);
    const newPoints = [...currentStroke.points, pt];
    setCurrentStroke({ ...currentStroke, points: newPoints });

    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.strokeStyle = currentStroke.color;
      ctx.lineWidth = currentStroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const pts = newPoints;
      if (pts.length > 1) {
        ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
      }
    }
  };

  const stopDrawingOrErasing = () => {
    if (scribbleTool === 'eraser') {
      setIsErasingScribble(false);
      return;
    }
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentStroke && currentStroke.points.length > 0) {
      setQuestionScribbles(prev => ({
        ...prev,
        [currentQ.id]: [...(prev[currentQ.id] || []), currentStroke]
      }));
    }
    setCurrentStroke(null);
  };

  const undoScribble = () => {
    setQuestionScribbles(prev => {
      const existing = prev[currentQ.id] || [];
      if (existing.length === 0) return prev;
      return {
        ...prev,
        [currentQ.id]: existing.slice(0, existing.length - 1)
      };
    });
  };

  const clearScribbles = () => {
    setQuestionScribbles(prev => ({
      ...prev,
      [currentQ.id]: []
    }));
  };

  // Safe Text Node Range Highlighting (used when Highlight tool is active in the toolbar)
  const applyHighlight = () => {
    if (isHighlightMode) {
      performHighlightOnSelection();
    }
  };

  // Remove highlight and restore plain text
  const removeHighlight = (markEl: HTMLElement) => {
    const parent = markEl.parentNode;
    if (!parent) return;
    const text = markEl.textContent || '';
    const textNode = document.createTextNode(text);
    parent.replaceChild(textNode, markEl);
    parent.normalize();

    const passageContainer = document.querySelector('#passagePanel .passage-content, #questionPanel .passage-content') as HTMLElement | null;
    const questionContainer = document.querySelector('#questionPanel .question-content') as HTMLElement | null;

    setQuestionHighlights(prev => ({
      ...prev,
      [currentQ.id]: {
        passageHtml: passageContainer ? passageContainer.innerHTML : prev[currentQ.id]?.passageHtml,
        questionHtml: questionContainer ? questionContainer.innerHTML : prev[currentQ.id]?.questionHtml
      }
    }));
  };

  const performHighlightOnSelection = (targetRange?: Range | null) => {
    const passagePanel = document.querySelector('#passagePanel, #questionPanel .passage-content') as HTMLElement | null;
    const questionPanel = document.querySelector('#questionPanel') as HTMLElement | null;

    const selection = window.getSelection();
    let range: Range | null = targetRange || (selection && !selection.isCollapsed ? selection.getRangeAt(0) : null);
    if (!range) return;

    const selectedText = range.toString().trim();
    if (!selectedText) return;

    // Check if selection is within the passage or question container
    let isPassage = false;
    let targetContainer: HTMLElement | null = null;

    const passageContent = document.querySelector('#passagePanel .passage-content, #questionPanel .passage-content') as HTMLElement | null;
    const questionContent = document.querySelector('#questionPanel .question-content') as HTMLElement | null;

    if (passageContent && (passageContent.contains(range.startContainer) || passageContent.contains(range.commonAncestorContainer))) {
      isPassage = true;
      targetContainer = passageContent;
    } else if (questionContent && (questionContent.contains(range.startContainer) || questionContent.contains(range.commonAncestorContainer))) {
      isPassage = false;
      targetContainer = questionContent;
    } else if (passagePanel && (passagePanel.contains(range.startContainer) || passagePanel.contains(range.commonAncestorContainer))) {
      isPassage = true;
      targetContainer = passagePanel.querySelector('.passage-content') || passagePanel;
    } else if (questionPanel && (questionPanel.contains(range.startContainer) || questionPanel.contains(range.commonAncestorContainer))) {
      isPassage = false;
      targetContainer = questionPanel.querySelector('.question-content') || questionPanel;
    } else {
      return;
    }

    if (!targetContainer) return;

    try {
      // Find all Text nodes within targetContainer that intersect the Range
      const walker = document.createTreeWalker(
        targetContainer,
        NodeFilter.SHOW_TEXT,
        null
      );

      const nodesToHighlight: {
        node: Text;
        startOffset: number;
        endOffset: number;
      }[] = [];

      let currentNode = walker.nextNode() as Text | null;
      while (currentNode) {
        // Check if currentNode intersects range
        if (range.intersectsNode(currentNode)) {
          let startOffset = 0;
          let endOffset = currentNode.length;

          if (currentNode === range.startContainer) {
            startOffset = Math.max(0, Math.min(currentNode.length, range.startOffset));
          }
          if (currentNode === range.endContainer) {
            endOffset = Math.max(0, Math.min(currentNode.length, range.endOffset));
          }

          if (startOffset < endOffset) {
            const textSlice = currentNode.textContent?.substring(startOffset, endOffset) || '';
            if (textSlice.length > 0) {
              nodesToHighlight.push({
                node: currentNode,
                startOffset,
                endOffset
              });
            }
          }
        }
        currentNode = walker.nextNode() as Text | null;
      }

      if (nodesToHighlight.length > 0) {
        // Process nodes in reverse order so splitting doesn't invalidate preceding text node positions
        for (let i = nodesToHighlight.length - 1; i >= 0; i--) {
          const { node, startOffset, endOffset } = nodesToHighlight[i];

          // If node is already completely inside a mark.sat-highlight, do not double-wrap
          const parentMark = node.parentElement?.closest('mark.sat-highlight');
          if (parentMark) {
            continue;
          }

          // Split text node to isolate the exact highlighted segment
          let targetTextNode = node;
          if (startOffset > 0) {
            targetTextNode = node.splitText(startOffset);
          }
          if (endOffset - startOffset < targetTextNode.length) {
            targetTextNode.splitText(endOffset - startOffset);
          }

          if (targetTextNode.textContent && targetTextNode.textContent.trim().length > 0) {
            const mark = document.createElement('mark');
            mark.className = 'sat-highlight bg-yellow-200 text-gray-900 rounded-2xs px-0.5 font-medium cursor-pointer hover:bg-yellow-300 transition-colors';
            mark.style.backgroundColor = '#fef08a';
            mark.title = 'Highlighted text (Click to remove)';

            const parent = targetTextNode.parentNode;
            if (parent) {
              parent.insertBefore(mark, targetTextNode);
              mark.appendChild(targetTextNode);
            }
          }
        }
      }
    } catch (err) {
      console.error('Error applying highlight:', err);
    }

    // Clear window selection
    if (window.getSelection()) {
      window.getSelection()?.removeAllRanges();
    }

    // Persist updated HTML for current question
    const updatedPassage = document.querySelector('#passagePanel .passage-content, #questionPanel .passage-content') as HTMLElement | null;
    const updatedQuestion = document.querySelector('#questionPanel .question-content') as HTMLElement | null;

    setQuestionHighlights(prev => ({
      ...prev,
      [currentQ.id]: {
        passageHtml: isPassage ? (updatedPassage ? updatedPassage.innerHTML : prev[currentQ.id]?.passageHtml) : prev[currentQ.id]?.passageHtml,
        questionHtml: !isPassage ? (updatedQuestion ? updatedQuestion.innerHTML : prev[currentQ.id]?.questionHtml) : prev[currentQ.id]?.questionHtml
      }
    }));
  };

  const handleTopHighlightClick = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed && selection.toString().trim()) {
      performHighlightOnSelection();
    } else {
      const nextMode = !isHighlightMode;
      setIsHighlightMode(nextMode);
      if (nextMode) {
        setIsScribbleMode(false);
        setIsStrikethroughMode(false);
        setIsAnnotateMode(false);
        setHighlightTool('highlighter');
      }
    }
  };

  const clearHighlights = () => {
    setQuestionHighlights(prev => ({
      ...prev,
      [currentQ.id]: {
        passageHtml: currentQ.passageHtml,
        questionHtml: currentQ.questionText
      }
    }));
  };

  // Option Click Handlers
  const handleOptionClick = (choiceId: string) => {
    if (isStrikethroughMode) {
      toggleStrikethrough(choiceId);
      return;
    }

    const currentAns = userAnswers[currentQ.id];
    if (currentAns === choiceId) {
      setUserAnswers({ ...userAnswers, [currentQ.id]: null });
    } else {
      setUserAnswers({ ...userAnswers, [currentQ.id]: choiceId });
      // Remove strikethrough if selected
      setStrikethroughs(prev => ({
        ...prev,
        [currentQ.id]: { ...(prev[currentQ.id] || {}), [choiceId]: false }
      }));
    }
  };

  const toggleStrikethrough = (choiceId: string) => {
    const qStrikes = strikethroughs[currentQ.id] || {};
    const nextVal = !qStrikes[choiceId];

    setStrikethroughs(prev => ({
      ...prev,
      [currentQ.id]: { ...(prev[currentQ.id] || {}), [choiceId]: nextVal }
    }));

    if (nextVal && userAnswers[currentQ.id] === choiceId) {
      setUserAnswers(prev => ({ ...prev, [currentQ.id]: null }));
    }
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Calculator logic
  const handleCalcBtn = (val: string) => {
    if (val === 'C') {
      setCalcDisplay('0');
    } else if (val === 'BS') {
      setCalcDisplay(prev => (prev.length <= 1 || prev === 'Error' ? '0' : prev.slice(0, -1)));
    } else if (val === '=') {
      try {
        // Safe evaluation for math expressions
        const sanitizedCalc = calcDisplay.replace(/×/g, '*').replace(/÷/g, '/');
        const res = Function(`"use strict"; return (${sanitizedCalc})`)();
        if (typeof res === 'number' && !isNaN(res)) {
          setCalcDisplay(String(res));
        } else {
          setCalcDisplay('Error');
        }
      } catch {
        setCalcDisplay('Error');
      }
    } else {
      setCalcDisplay(prev => (prev === '0' || prev === 'Error' ? val : prev + val));
    }
  };

  // Keyboard listener for physical device keyboard input on Calculator
  useEffect(() => {
    if (!showCalcModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in a textarea or input field outside calculator
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key >= '0' && e.key <= '9') {
        handleCalcBtn(e.key);
      } else if (['+', '-', '*', '/', '(', ')', '.'].includes(e.key)) {
        handleCalcBtn(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleCalcBtn('=');
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleCalcBtn('BS');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowCalcModal(false);
      } else if (e.key.toLowerCase() === 'c') {
        handleCalcBtn('C');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCalcModal, calcDisplay]);

  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const breakMins = Math.floor(breakTimeRemaining / 60);
  const breakSecs = breakTimeRemaining % 60;
  const formattedBreakTime = `${String(breakMins).padStart(2, '0')}:${String(breakSecs).padStart(2, '0')}`;

  const markedInCurrentModule = currentQuestions.filter(q => flaggedQuestions[q.id]);
  const unansweredInCurrentModule = currentQuestions.filter(q => userAnswers[q.id] === null || userAnswers[q.id] === '');

  const filteredQuestionsForReview = currentQuestions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => {
      if (reviewFilterTab === 'marked') {
        return !!flaggedQuestions[question.id];
      }
      if (reviewFilterTab === 'unanswered') {
        return userAnswers[question.id] === null || userAnswers[question.id] === '';
      }
      return true;
    });

  return (
    <div className="flex flex-col h-screen w-full bg-white text-gray-900 font-sans" style={{ backgroundColor: '#f3f4f6' }}>
      
      {/* TOP HEADER (CLEAN UTILITY / BLUEBOOK HEADER) */}
      <nav className="min-h-12 py-1.5 bg-white border-b border-gray-200 flex flex-wrap items-center justify-between px-4 md:px-6 shrink-0 relative z-40 gap-y-2">
        {/* Left: Brand & Section Switcher */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-bold text-lg tracking-tight" style={{ color: '#003366' }}>SAT-SMART</span>
          <div className="h-5 w-px bg-gray-300 mx-0.5 hidden sm:block"></div>
          
          {/* Section Quick Tabs */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={() => {
                if (!activeModuleKey.startsWith('RW')) switchModule('RW_1');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                activeModuleKey.startsWith('RW')
                  ? 'bg-[#003366] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Reading & Writing
            </button>
            <button
              type="button"
              onClick={() => {
                if (!activeModuleKey.startsWith('MATH')) switchModule('MATH_1');
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                activeModuleKey.startsWith('MATH')
                  ? 'bg-[#003366] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Math
            </button>
          </div>

          {/* Test Select Dropdown */}
          <select
            value={activeTestId}
            onChange={(e) => {
              const newTestId = e.target.value as TestId;
              setActiveTestId(newTestId);
              setCurrentIndex(0);
              setTimeRemaining(getModuleTimeLimit(activeModuleKey));
              const targetModules = SAT_TESTS[newTestId]?.modules;
              if (targetModules && targetModules[activeModuleKey]?.questions.length === 0) {
                setActiveModuleKey('RW_1');
              }
            }}
            className="bg-[#003366] text-white text-xs font-bold rounded-md px-2.5 py-1 shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 border-0"
          >
            {TEST_LIST.map(test => (
              <option key={test.id} value={test.id} className="bg-white text-gray-900 font-semibold">
                {test.name}
              </option>
            ))}
          </select>

          {/* Module Select Dropdown */}
          <select
            value={activeModuleKey}
            onChange={(e) => switchModule(e.target.value as ModuleKey)}
            className="bg-white border border-gray-300 text-gray-800 text-xs font-semibold rounded-md px-2.5 py-1 shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#003366]"
          >
            <option value="RW_1">Reading & Writing Module 1 ({currentModules.RW_1.questions.length} Qs)</option>
            <option value="RW_2">Reading & Writing Module 2 ({currentModules.RW_2.questions.length} Qs)</option>
            <option value="MATH_1">Math Module 1 ({currentModules.MATH_1.questions.length} Qs)</option>
            <option value="MATH_2">Math Module 2 ({currentModules.MATH_2.questions.length} Qs)</option>
          </select>
        </div>

        {/* Right: Timer & Tools */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Auto-Saved Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-2xs" title="Auto-saved automatically to your browser">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Auto-Saved</span>
          </div>

          {/* Timer Pill */}
          <div className="bg-gray-100 px-3.5 py-1 rounded-full flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Timer</span>
            <span className="font-mono font-bold text-xs text-gray-900">
              {showTimerHidden ? '••:••' : formattedTime}
            </span>
            <button 
              onClick={() => setShowTimerHidden(!showTimerHidden)}
              className="text-[11px] text-gray-500 hover:text-gray-800 underline ml-0.5"
            >
              {showTimerHidden ? 'Show' : 'Hide'}
            </button>
          </div>

          {/* Tools */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button 
              onClick={() => {
                setReviewFilterTab('marked');
                setShowReviewModal(true);
              }}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition cursor-pointer ${
                markedInCurrentModule.length > 0 
                  ? 'bg-amber-50 border-amber-300 text-amber-950 font-bold shadow-2xs hover:bg-amber-100' 
                  : 'text-slate-700 hover:text-slate-900 border-slate-300 bg-white'
              }`}
              title="Review questions marked for review in this test"
            >
              <Bookmark className={`w-3.5 h-3.5 ${markedInCurrentModule.length > 0 ? 'fill-red-600 text-red-600' : 'text-slate-600'}`} />
              <span>Review {markedInCurrentModule.length > 0 ? `(${markedInCurrentModule.length})` : ''}</span>
            </button>

            <button 
              onClick={() => setShowRestartModal(true)}
              className="btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition text-slate-700 hover:text-red-700 hover:border-red-300 hover:bg-red-50 cursor-pointer"
              title="Restart test or reset progress to start fresh"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
              <span>Restart</span>
            </button>

            <button 
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleTopHighlightClick}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition ${
                isHighlightMode ? 'bg-yellow-200 border-yellow-500 text-yellow-900 font-semibold shadow-2xs' : ''
              }`}
              title="Highlight selected text or toggle Highlight Mode"
            >
              <Highlighter className="w-3.5 h-3.5 text-yellow-600" />
              <span>Highlight</span>
              {isHighlightMode && <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>}
            </button>

            <button 
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const nextMode = !isScribbleMode;
                setIsScribbleMode(nextMode);
                if (nextMode) {
                  setIsHighlightMode(false);
                  setIsAnnotateMode(false);
                  setIsStrikethroughMode(false);
                }
              }}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 ${isScribbleMode ? 'bg-red-50 border-red-500 text-red-600 font-semibold' : ''}`}
              title="Scribble mode"
            >
              <Edit3 className="w-3.5 h-3.5 text-red-500" />
              <span>Scribble</span>
            </button>

            <button 
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const nextMode = !isAnnotateMode;
                setIsAnnotateMode(nextMode);
                if (nextMode) {
                  setIsScribbleMode(false);
                  setIsHighlightMode(false);
                  setIsStrikethroughMode(false);
                  if ((questionAnnotations[currentQ.id] || []).length === 0) {
                    addAnnotationNote(20, 140);
                  }
                }
              }}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition cursor-pointer ${
                isAnnotateMode ? 'bg-amber-100 border-amber-500 text-amber-900 font-semibold shadow-2xs' : ''
              }`}
              title="Type notes & annotations next to questions"
            >
              <StickyNote className="w-3.5 h-3.5 text-amber-600" />
              <span>Annotate</span>
              {(questionAnnotations[currentQ.id] || []).length > 0 && (
                <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {(questionAnnotations[currentQ.id] || []).length}
                </span>
              )}
            </button>

            <button 
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const nextMode = !isStrikethroughMode;
                setIsStrikethroughMode(nextMode);
                if (nextMode) {
                  setIsScribbleMode(false);
                  setIsHighlightMode(false);
                  setIsAnnotateMode(false);
                }
              }}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition cursor-pointer ${
                isStrikethroughMode ? 'bg-blue-100 border-[#003366] text-[#003366] font-semibold shadow-2xs' : ''
              }`}
              title="Toggle strikethrough mode"
            >
              <span className="line-through decoration-blue-600 decoration-2 font-bold text-xs">ABC</span>
              <span>Strikethrough</span>
            </button>

            {/* Bilingual Dictionary Button */}
            <button 
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const sel = window.getSelection()?.toString().trim();
                openWordDefinition(sel || definitionModalState.word || 'vocabulary', '', null);
              }}
              className={`btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 transition cursor-pointer ${
                definitionModalState.isOpen ? 'bg-blue-100 border-[#003366] text-[#003366] font-semibold shadow-2xs' : 'hover:bg-slate-100'
              }`}
              title="Look up bilingual word definitions (or double-click any word)"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Dictionary</span>
            </button>

            {(currentQ.type === 'Math' || currentQ.section === 'Math' || currentModule?.section === 'Math' || activeModuleKey.startsWith('MATH')) && (
              <>
                <button 
                  onClick={() => setShowRefModal(true)}
                  className="btn-outline text-xs px-2.5 py-1 flex items-center gap-1 cursor-pointer hover:bg-slate-100"
                  title="View Official SAT Reference Sheet"
                >
                  <FileText className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Ref</span>
                </button>
                <button 
                  onClick={() => setShowCalcModal(true)}
                  className="btn-outline text-xs px-2.5 py-1 flex items-center gap-1 cursor-pointer hover:bg-slate-100"
                  title="Open Standard Calculator (supports physical keyboard)"
                >
                  <Calculator className="w-3.5 h-3.5 text-purple-600" />
                  <span>Calc</span>
                </button>
                <a 
                  href="https://www.desmos.com/calculator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline text-xs px-2.5 py-1 flex items-center gap-1.5 cursor-pointer bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 transition font-medium"
                  title="Open Official Desmos Graphing Calculator in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Desmos</span>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* ACTIVE TOOL OPTIONS SUB-BAR (IN-FLOW ABOVE WORKSPACE, NEVER COVERS TEXT) */}
      {(isScribbleMode || isHighlightMode || isAnnotateMode || isStrikethroughMode) && (
        <div className="bg-slate-100 border-b border-slate-300 px-6 py-1.5 flex items-center justify-between text-xs z-20 shadow-2xs">
          <div className="flex items-center gap-3 flex-wrap">
            {isScribbleMode && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setScribbleTool('pen')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-medium transition cursor-pointer text-xs ${
                    scribbleTool === 'pen' ? 'bg-[#003366] text-white font-bold shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Scribble / Pen tool"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Scribble</span>
                </button>
                <button
                  type="button"
                  onClick={() => setScribbleTool('eraser')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-medium transition cursor-pointer text-xs ${
                    scribbleTool === 'eraser' ? 'bg-rose-600 text-white font-bold shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Eraser tool - drag or click over strokes to erase"
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span>Eraser</span>
                </button>
              </div>
            )}

            {isHighlightMode && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHighlightTool('highlighter')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-medium transition cursor-pointer text-xs ${
                    highlightTool === 'highlighter' ? 'bg-yellow-400 text-amber-950 font-bold shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Highlighter tool - select text to highlight"
                >
                  <Highlighter className="w-3.5 h-3.5 text-amber-900" />
                  <span>Highlighter</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHighlightTool('eraser')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 font-medium transition cursor-pointer text-xs ${
                    highlightTool === 'eraser' ? 'bg-rose-600 text-white font-bold shadow-xs' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Eraser tool - click any highlighted text to remove"
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span>Eraser</span>
                </button>
              </div>
            )}

            {isAnnotateMode && (
              <>
                <div className="flex items-center gap-1.5 font-semibold text-amber-900 pr-2 border-r border-gray-300">
                  <StickyNote className="w-3.5 h-3.5 text-amber-600" />
                  <span>Text Box</span>
                </div>

                {/* Text Box Color Pickers */}
                <div className="flex items-center gap-1.5 pr-1">
                  <span className="text-[11px] text-gray-600 font-medium">Color:</span>
                  <button 
                    onClick={() => handleToolbarColorChange('yellow')} 
                    className={`w-4 h-4 rounded-full bg-yellow-300 border border-amber-400 transition hover:scale-110 cursor-pointer ${activeNoteColor === 'yellow' ? 'ring-2 ring-amber-600 scale-110' : 'opacity-80'}`} 
                    title="Yellow Text Box" 
                  />
                  <button 
                    onClick={() => handleToolbarColorChange('blue')} 
                    className={`w-4 h-4 rounded-full bg-blue-300 border border-blue-400 transition hover:scale-110 cursor-pointer ${activeNoteColor === 'blue' ? 'ring-2 ring-amber-600 scale-110' : 'opacity-80'}`} 
                    title="Blue Text Box" 
                  />
                  <button 
                    onClick={() => handleToolbarColorChange('green')} 
                    className={`w-4 h-4 rounded-full bg-emerald-300 border border-emerald-400 transition hover:scale-110 cursor-pointer ${activeNoteColor === 'green' ? 'ring-2 ring-amber-600 scale-110' : 'opacity-80'}`} 
                    title="Green Text Box" 
                  />
                  <button 
                    onClick={() => handleToolbarColorChange('white')} 
                    className={`w-4 h-4 rounded-full bg-white border border-slate-400 transition hover:scale-110 cursor-pointer ${activeNoteColor === 'white' ? 'ring-2 ring-slate-600 scale-110' : 'opacity-80'}`} 
                    title="White Text Box" 
                  />
                </div>

                {/* Font Size Controls */}
                <div className="flex items-center gap-1 px-2 border-x border-gray-300">
                  <span className="text-[11px] text-gray-600 font-medium">Font:</span>
                  <button 
                    onClick={() => changeFontSizeForSelected(-1)} 
                    className="px-1.5 py-0.2 bg-white hover:bg-slate-100 rounded border border-gray-300 text-[11px] font-bold text-gray-700 cursor-pointer"
                    title="Decrease font size"
                  >
                    A-
                  </button>
                  <span className="text-[11px] font-mono font-semibold text-gray-800 w-7 text-center">
                    {selectedNoteId 
                      ? ((questionAnnotations[currentQ.id] || []).find(n => n.id === selectedNoteId)?.fontSize || activeFontSize)
                      : activeFontSize}px
                  </span>
                  <button 
                    onClick={() => changeFontSizeForSelected(1)} 
                    className="px-1.5 py-0.2 bg-white hover:bg-slate-100 rounded border border-gray-300 text-[11px] font-bold text-gray-700 cursor-pointer"
                    title="Increase font size"
                  >
                    A+
                  </button>
                </div>

                <button 
                  onClick={() => addAnnotationNote()} 
                  className="px-2.5 py-0.5 rounded bg-amber-200 hover:bg-amber-300 text-amber-950 flex items-center gap-1 text-[11px] border border-amber-400 font-bold transition cursor-pointer"
                  title="Add new text box"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Text Box</span>
                </button>

                <div className="flex items-center gap-1.5 pl-2 border-l border-gray-300">
                  <button onClick={clearAllAnnotations} className="px-2 py-0.5 rounded hover:bg-amber-50 text-amber-900 flex items-center gap-1 text-[11px] border border-amber-300 font-medium cursor-pointer" title="Clear All Text Boxes">
                    <Trash2 className="w-3 h-3" />
                    <span>Clear Boxes</span>
                  </button>
                </div>
              </>
            )}

            {isStrikethroughMode && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 font-medium text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300">
                  <span className="line-through font-bold text-xs text-blue-800">ABC</span>
                  <span>Strikethrough Mode Active — Click choices or cross-out buttons to eliminate choices</span>
                </div>
                <button 
                  onClick={() => setStrikethroughs(prev => ({ ...prev, [currentQ.id]: {} }))} 
                  className="px-2 py-0.5 rounded hover:bg-red-50 text-red-700 flex items-center gap-1 text-[11px] border border-red-300 font-medium cursor-pointer" 
                  title="Clear Strikethroughs for this question"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear Strikethroughs</span>
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => { setIsScribbleMode(false); setIsHighlightMode(false); setIsAnnotateMode(false); setIsStrikethroughMode(false); }} className="px-2 py-0.5 rounded hover:bg-gray-200 text-gray-600 flex items-center gap-1 font-medium cursor-pointer" title="Done / Close Tool Bar">
              <span>Done</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* MAIN TEST WORKSPACE */}
      <main 
        ref={mainRef} 
        onClick={handleWorkspaceClick} 
        className={`flex-1 flex overflow-hidden relative ${isDraggingDivider ? 'cursor-col-resize select-none' : ''} ${isHighlightMode && highlightTool === 'eraser' ? 'highlight-eraser-active' : ''}`}
      >
        
        {/* CANVAS OVERLAY FOR SCRIBBLE */}
        <canvas 
          ref={canvasRef}
          onMouseDown={(e) => startDrawingOrErasing(e.clientX, e.clientY)}
          onMouseMove={(e) => drawOrErase(e.clientX, e.clientY)}
          onMouseUp={stopDrawingOrErasing}
          onMouseLeave={stopDrawingOrErasing}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            startDrawingOrErasing(touch.clientX, touch.clientY);
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            drawOrErase(touch.clientX, touch.clientY);
          }}
          onTouchEnd={stopDrawingOrErasing}
          className={`absolute top-0 left-0 w-full h-full z-30 touch-none ${
            isScribbleMode && !isHighlightMode 
              ? scribbleTool === 'eraser' ? 'pointer-events-auto cursor-cell' : 'pointer-events-auto cursor-crosshair' 
              : 'pointer-events-none'
          }`}
        />

        {/* ANNOTATION NOTES OVERLAY (WORD PROCESSOR TEXT BOX FORMAT) */}
        {(questionAnnotations[currentQ.id] || []).map((note) => {
          const styles = getNoteColorStyles(note.color);
          const isSelected = selectedNoteId === note.id;
          const noteFontSize = note.fontSize || activeFontSize || 13;
          const noteWidth = note.width || 200;
          const noteHeight = note.height || 110;

          return (
            <div 
              key={note.id}
              style={{
                left: `${note.x}px`,
                top: `${note.y}px`,
                width: `${noteWidth}px`,
                height: `${noteHeight}px`,
                minWidth: '90px',
                minHeight: '52px'
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedNoteId(note.id); }}
              className={`annotation-note-card absolute z-35 rounded border shadow-sm transition-shadow flex flex-col ${styles.card} ${
                isSelected ? 'outline outline-1 outline-dashed outline-blue-600 ring-2 ring-blue-500/80 shadow-md' : 'hover:border-slate-400 hover:shadow-xs'
              } ${draggingNoteId === note.id ? 'ring-2 ring-blue-600 shadow-lg opacity-90 cursor-grabbing' : ''}`}
            >
              {/* Word Processor Text Box Header Bar */}
              <div 
                onMouseDown={(e) => handleNoteMouseDown(e, note)}
                onTouchStart={(e) => handleNoteMouseDown(e, note)}
                className={`px-1.5 py-0.5 flex-shrink-0 flex items-center justify-between cursor-grab active:cursor-grabbing rounded-t select-none text-[9px] ${styles.header}`}
                title="Drag header to move text box"
              >
                <div className="flex items-center gap-1 text-slate-800">
                  <Move className="w-2.5 h-2.5 opacity-75" />
                </div>

                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                  {/* Font Size Adjusters on Box Header */}
                  <div className="flex items-center gap-0.5 bg-black/5 rounded px-1 py-0.2">
                    <button 
                      type="button" 
                      onClick={() => updateAnnotationFontSize(note.id, noteFontSize - 1)}
                      className="px-0.5 hover:bg-black/10 rounded text-[9px] font-bold cursor-pointer"
                      title="Decrease font size"
                    >
                      -
                    </button>
                    <span className="text-[9px] font-mono font-medium px-0.5">{noteFontSize}px</span>
                    <button 
                      type="button" 
                      onClick={() => updateAnnotationFontSize(note.id, noteFontSize + 1)}
                      className="px-0.5 hover:bg-black/10 rounded text-[9px] font-bold cursor-pointer"
                      title="Increase font size"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    type="button" 
                    onClick={(e) => { e.stopPropagation(); deleteAnnotation(note.id); }}
                    className="p-0.5 rounded hover:bg-red-500/20 text-slate-700 hover:text-red-700 transition cursor-pointer"
                    title="Delete text box"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>

              {/* Textarea - Auto-expands to fill the entire custom size of the text box */}
              <div className="p-1 flex-1 min-h-0 flex flex-col relative">
                <textarea 
                  value={note.text}
                  onChange={(e) => updateAnnotationText(note.id, e.target.value)}
                  onFocus={() => setSelectedNoteId(note.id)}
                  placeholder="Type note..."
                  style={{ fontSize: `${noteFontSize}px`, lineHeight: '1.35' }}
                  className={`w-full h-full flex-1 bg-transparent border-0 px-1 py-0.5 focus:outline-none focus:ring-0 resize-none font-sans font-normal overflow-auto ${styles.textarea}`}
                  autoFocus
                />
              </div>

              {/* Resize Handles */}
              {/* Right edge resizer */}
              <div
                onMouseDown={(e) => handleResizeStart(e, note, 'e')}
                onTouchStart={(e) => handleResizeStart(e, note, 'e')}
                className="absolute top-2 right-0 w-2 bottom-3 cursor-ew-resize hover:bg-blue-500/20 z-10"
                title="Drag to resize width"
              />
              {/* Bottom edge resizer */}
              <div
                onMouseDown={(e) => handleResizeStart(e, note, 's')}
                onTouchStart={(e) => handleResizeStart(e, note, 's')}
                className="absolute bottom-0 left-2 right-3 h-2 cursor-ns-resize hover:bg-blue-500/20 z-10"
                title="Drag to resize height"
              />
              {/* Bottom-Right corner resizer (visible diagonal grip) */}
              <div
                onMouseDown={(e) => handleResizeStart(e, note, 'se')}
                onTouchStart={(e) => handleResizeStart(e, note, 'se')}
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-0.5 z-20 group hover:bg-blue-500/20 rounded-br select-none"
                title="Drag corner to resize text box to any size"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-45 group-hover:opacity-100 group-hover:text-blue-700 transition-opacity">
                  <path d="M7 1 L1 7 M7 4 L4 7 M7 7 L7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          );
        })}

        {/* PASSAGE & QUESTION PANELS WITH ADJUSTABLE RESIZER DIVIDER (BLUEBOOK TWO-COLUMN INTERFACE) */}
        {currentQuestions.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-center z-10">
            <div className="max-w-md bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <FileText className="w-12 h-12 text-[#003366] mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Module Under Preparation</h2>
              <p className="text-sm text-gray-600 mb-6">Questions for this module are currently being loaded. Please select another module or test from the top bar.</p>
              <button onClick={() => switchModule('RW_1')} className="px-5 py-2.5 bg-[#003366] text-white font-bold text-xs rounded-xl shadow-xs hover:bg-[#002244] transition cursor-pointer">
                Switch to Reading & Writing Module 1
              </button>
            </div>
          </div>
        ) : (currentQ.options && currentQ.options.length > 0) ? (
          <>
            {/* LEFT PANEL: DOMAIN + PASSAGE / STIMULUS / QUESTION PROMPT */}
            <div 
              id="passagePanel" 
              style={{ width: `${splitRatio}%` }}
              className="p-6 md:p-8 overflow-y-auto bg-white relative select-text shrink-0"
            >
              <div className="w-full max-w-2xl mx-auto space-y-4">
                {/* DOMAIN HEADER (e.g. CRAFT AND STRUCTURE, ALGEBRA, ADVANCED MATH) */}
                <div className="text-xs font-bold tracking-widest text-[#003366] uppercase font-sans border-b border-gray-200 pb-2 flex items-center justify-between">
                  <span>{currentQ.domain || (currentQ.type === 'Math' ? 'MATH' : 'READING AND WRITING')}</span>

                  {/* HINT BUTTON FOR TEST 11 READING & WRITING MODULE 1 QUESTIONS */}
                  {isTest11HintEligible && (
                    <button
                      type="button"
                      id={`btn-hint-test11-q${currentQ.id}`}
                      onClick={handleToggleHint}
                      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg border transition-all cursor-pointer shadow-2xs ${
                        isHintActive 
                          ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600 shadow-sm ring-2 ring-amber-300' 
                          : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400'
                      }`}
                      title="Hint"
                    >
                      <Lightbulb className={`w-3.5 h-3.5 ${isHintActive ? 'text-white fill-amber-200' : 'text-amber-600 fill-amber-300'}`} />
                      <span>{isHintActive ? 'Hide Hint' : 'Hint'}</span>
                    </button>
                  )}
                </div>

                {/* HINT TOP NOTE */}
                {isTest11HintEligible && isHintActive && getHintTopNote(currentQ.id) && (
                  <div className="flex justify-end pr-10 pt-0.5">
                    <div className={getHintTopNote(currentQ.id)!.width}>
                      <HintTextBox 
                        color="yellow" 
                        text={getHintTopNote(currentQ.id)!.text} 
                        fontSize={getHintTopNote(currentQ.id)!.fontSize ?? 17}
                        headerFontSize={getHintTopNote(currentQ.id)!.headerFontSize}
                      />
                    </div>
                  </div>
                )}

                {/* PASSAGE OR STIMULUS / QUESTION CONTENT */}
                <div 
                  className="passage-content text-[15px] md:text-[16px] leading-relaxed text-slate-900 font-serif select-text"
                  dangerouslySetInnerHTML={{ 
                    __html: renderMathInHtml(
                      questionHighlights[currentQ.id]?.passageHtml ?? 
                      (currentQ.passageHtml || currentQ.questionText)
                    ) 
                  }}
                />

                {/* HINT BOTTOM NOTE */}
                {isTest11HintEligible && isHintActive && getHintBottomNote(currentQ.id) && (
                  <div className="flex justify-end pr-4 pt-1">
                    <div className={getHintBottomNote(currentQ.id)!.width}>
                      <HintTextBox 
                        color="yellow" 
                        text={getHintBottomNote(currentQ.id)!.text} 
                        fontSize={getHintBottomNote(currentQ.id)!.fontSize ?? 17}
                        headerFontSize={getHintBottomNote(currentQ.id)!.headerFontSize}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SLEEK DRAGGABLE COLUMN RESIZER DIVIDER */}
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingDivider(true);
              }}
              onTouchStart={() => setIsDraggingDivider(true)}
              onDoubleClick={() => setSplitRatio(50)}
              title="Drag to resize passage / question panels (Double-click to reset 50/50)"
              className={`w-3 relative cursor-col-resize flex items-center justify-center group z-20 shrink-0 select-none transition-colors duration-150 ${
                isDraggingDivider ? 'bg-blue-50/60' : 'bg-transparent hover:bg-slate-100/80'
              }`}
            >
              {/* Subtle hairline centerline */}
              <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px transition-colors duration-150 ${
                isDraggingDivider ? 'bg-[#003366]' : 'bg-slate-200 group-hover:bg-[#003366]/40'
              }`} />

              {/* Minimalist pill handle */}
              <div className={`relative z-10 w-2.5 h-8 rounded-full border flex flex-col items-center justify-center gap-0.5 transition-all duration-150 shadow-2xs ${
                isDraggingDivider 
                  ? 'bg-[#003366] border-[#003366] text-white scale-105 shadow-sm' 
                  : 'bg-white border-slate-300 text-slate-400 group-hover:border-[#003366] group-hover:bg-[#003366] group-hover:text-white group-hover:scale-105'
              }`}>
                <div className="w-1 h-1 rounded-full bg-current opacity-70" />
                <div className="w-1 h-1 rounded-full bg-current opacity-70" />
                <div className="w-1 h-1 rounded-full bg-current opacity-70" />
              </div>
            </div>

            {/* RIGHT PANEL: QUESTION HEADER + QUESTION PROMPT (IF PASSAGE) + ANSWER CHOICES */}
            <div 
              id="questionPanel" 
              style={{ width: `${100 - splitRatio}%` }}
              className="p-6 md:p-8 bg-white overflow-y-auto relative select-text flex-1"
            >
              <div className="w-full max-w-2xl mx-auto">
                <div className="mb-6">
                  {/* QUESTION HEADER BAR */}
                  <div className="flex items-center justify-between gap-3 mb-4 border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#003366] text-white px-3 py-1 text-xs font-bold rounded-md shadow-2xs">
                        QUESTION {safeIndex + 1}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">({currentQ.type === 'RW' ? 'Reading and Writing' : currentQ.type})</span>
                    </div>

                    <button 
                      type="button"
                      onClick={toggleFlag}
                      className={`flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 border transition cursor-pointer ${
                        flaggedQuestions[currentQ.id] 
                          ? 'bg-red-50 border-red-300 text-red-600 shadow-2xs' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 shadow-2xs'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${flaggedQuestions[currentQ.id] ? 'fill-red-600 text-red-600' : 'text-gray-500'}`} />
                      <span>{flaggedQuestions[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                    </button>
                  </div>

                  {/* QUESTION PROMPT (IF PASSAGE WAS ON THE LEFT) */}
                  {currentQ.passageHtml && (
                    <div 
                      className="question-content text-[15px] md:text-[16px] font-normal leading-relaxed text-slate-900 select-text mb-4"
                      dangerouslySetInnerHTML={{ 
                        __html: renderMathInHtml(
                          questionHighlights[currentQ.id]?.questionHtml ?? currentQ.questionText
                        ) 
                      }}
                    />
                  )}
                </div>

                {/* Answer Choices */}
                <QuestionAnswerArea
                  currentQ={currentQ}
                  userAnswer={userAnswers[currentQ.id]}
                  onSelectOption={handleOptionClick}
                  onUpdateTextAnswer={(val) => setUserAnswers(prev => ({ ...prev, [currentQ.id]: val }))}
                  strikethroughs={strikethroughs[currentQ.id] || {}}
                  onToggleStrikethrough={toggleStrikethrough}
                  isChecked={!!checkedAnswers[currentQ.id]}
                  onToggleCheckAnswer={() => setCheckedAnswers(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                  isHintActive={isTest11HintEligible && isHintActive}
                  activeHintOptions={null}
                  optionExplanations={getHintOptionBreakdown(currentQ.id)}
                />
              </div>
            </div>
          </>
        ) : (
          /* SINGLE-COLUMN LAYOUT FOR STUDENT-PRODUCED RESPONSE (NO DIVIDER IN MIDDLE) */
          <div 
            id="questionPanel" 
            className="w-full p-6 md:p-10 bg-white overflow-y-auto relative select-text flex-1"
          >
            <div className="w-full max-w-3xl mx-auto space-y-6">
              {/* QUESTION HEADER BAR */}
              <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#003366] text-white px-3 py-1 text-xs font-bold rounded-md shadow-2xs">
                    QUESTION {safeIndex + 1}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">({currentQ.type === 'RW' ? 'Reading and Writing' : currentQ.type})</span>
                </div>

                <button 
                  type="button"
                  onClick={toggleFlag}
                  className={`flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 border transition cursor-pointer ${
                    flaggedQuestions[currentQ.id] 
                      ? 'bg-red-50 border-red-300 text-red-600 shadow-2xs' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 shadow-2xs'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${flaggedQuestions[currentQ.id] ? 'fill-red-600 text-red-600' : 'text-gray-500'}`} />
                  <span>{flaggedQuestions[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              {/* DOMAIN HEADER */}
              <div className="text-xs font-bold tracking-widest text-[#003366] uppercase font-sans border-b border-gray-200 pb-2 flex items-center justify-between">
                <span>{currentQ.domain || (currentQ.type === 'Math' ? 'MATH' : 'READING AND WRITING')}</span>

                {/* HINT BUTTON FOR TEST 11 READING & WRITING MODULE 1 QUESTIONS */}
                {isTest11HintEligible && (
                  <button
                    type="button"
                    id={`btn-hint-test11-q${currentQ.id}-single`}
                    onClick={handleToggleHint}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg border transition-all cursor-pointer shadow-2xs ${
                      isHintActive 
                        ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600 shadow-sm ring-2 ring-amber-300' 
                        : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400'
                    }`}
                    title="Hint"
                  >
                    <Lightbulb className={`w-3.5 h-3.5 ${isHintActive ? 'text-white fill-amber-200' : 'text-amber-600 fill-amber-300'}`} />
                    <span>{isHintActive ? 'Hide Hint' : 'Hint'}</span>
                  </button>
                )}
              </div>

              {/* HINT TOP NOTE */}
              {isTest11HintEligible && isHintActive && getHintTopNote(currentQ.id) && (
                <div className="flex justify-end pr-10 pt-1 pb-1">
                  <div className={getHintTopNote(currentQ.id)!.width}>
                    <HintTextBox 
                      color="yellow" 
                      text={getHintTopNote(currentQ.id)!.text} 
                      fontSize={getHintTopNote(currentQ.id)!.fontSize ?? 17}
                      headerFontSize={getHintTopNote(currentQ.id)!.headerFontSize}
                    />
                  </div>
                </div>
              )}

              {/* PASSAGE IF ANY */}
              {currentQ.passageHtml && (
                <div 
                  className="passage-content text-[15px] md:text-[16px] leading-relaxed text-slate-900 font-serif select-text"
                  dangerouslySetInnerHTML={{ 
                    __html: renderMathInHtml(
                      questionHighlights[currentQ.id]?.passageHtml ?? currentQ.passageHtml
                    ) 
                  }}
                />
              )}

              {/* HINT BOTTOM NOTE */}
              {isTest11HintEligible && isHintActive && getHintBottomNote(currentQ.id) && (
                <div className="flex justify-end pr-4 pt-1 pb-1">
                  <div className={getHintBottomNote(currentQ.id)!.width}>
                    <HintTextBox 
                      color="yellow" 
                      text={getHintBottomNote(currentQ.id)!.text} 
                      fontSize={getHintBottomNote(currentQ.id)!.fontSize ?? 17}
                      headerFontSize={getHintBottomNote(currentQ.id)!.headerFontSize}
                    />
                  </div>
                </div>
              )}

              {/* QUESTION PROMPT & GRAPH */}
              <div 
                className="question-content text-[15px] md:text-[16px] font-normal leading-relaxed text-slate-900 select-text"
                dangerouslySetInnerHTML={{ 
                  __html: renderMathInHtml(
                    questionHighlights[currentQ.id]?.questionHtml ?? currentQ.questionText
                  ) 
                }}
              />

              {/* KEY-IN ANSWER ENTRY AREA */}
              <QuestionAnswerArea
                currentQ={currentQ}
                userAnswer={userAnswers[currentQ.id]}
                onSelectOption={handleOptionClick}
                onUpdateTextAnswer={(val) => setUserAnswers(prev => ({ ...prev, [currentQ.id]: val }))}
                strikethroughs={strikethroughs[currentQ.id] || {}}
                onToggleStrikethrough={toggleStrikethrough}
                isChecked={!!checkedAnswers[currentQ.id]}
                onToggleCheckAnswer={() => setCheckedAnswers(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                isHintActive={isTest11HintEligible && isHintActive}
                activeHintOptions={null}
                optionExplanations={getHintOptionBreakdown(currentQ.id)}
              />
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 shrink-0 relative z-40">
        <div className="flex items-center gap-3 text-xs font-semibold text-gray-600">
          <span className="bg-gray-100 px-2.5 py-1 rounded border border-gray-200 text-gray-800">
            {currentTest.shortName}: {currentModule.title}
          </span>
          <span className="text-gray-400">•</span>
          <span>Question {safeIndex + 1} of {currentQuestions.length}</span>
        </div>

        {/* Question Navigator Controls */}
        <div className="flex items-center gap-3">
          <button 
            disabled={activeModuleKey === 'RW_1' && safeIndex === 0}
            onClick={handleBack}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>

          <div 
            onClick={() => { setReviewFilterTab('all'); setShowReviewModal(true); }}
            className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 cursor-pointer hover:bg-gray-200 transition overflow-x-auto max-w-[400px] no-scrollbar"
          >
            {currentQuestions.map((q, idx) => {
              const isFlagged = flaggedQuestions[q.id];
              const isAns = userAnswers[q.id] !== null && userAnswers[q.id] !== '';
              return (
                <button 
                  key={q.id}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (idx < safeIndex) {
                      setActiveNavDirection('back');
                    } else if (idx > safeIndex) {
                      setActiveNavDirection('next');
                    }
                    setCurrentIndex(idx); 
                  }}
                  className={`w-7 h-7 rounded text-xs font-bold transition shrink-0 cursor-pointer relative ${
                    idx === safeIndex 
                      ? 'bg-white shadow-xs text-[#003366] ring-1 ring-[#003366]' 
                      : isAns
                        ? 'bg-blue-100 text-[#003366]'
                        : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlagged && (
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full flex items-center justify-center border border-white shadow-2xs">
                      <span className="w-1 h-1 bg-white rounded-full"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button 
            disabled={activeModuleKey === 'MATH_2' && safeIndex === currentQuestions.length - 1}
            onClick={handleNext}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>

        {/* Review / Back / Next Buttons */}
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={() => {
              setReviewFilterTab('marked');
              setShowReviewModal(true);
            }}
            className={`flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg border transition cursor-pointer ${
              markedInCurrentModule.length > 0
                ? 'bg-amber-50 border-amber-300 text-amber-950 hover:bg-amber-100 shadow-2xs font-bold'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
            title="Review questions marked for review in this test"
          >
            <Bookmark className={`w-3.5 h-3.5 ${markedInCurrentModule.length > 0 ? 'fill-red-600 text-red-600' : 'text-slate-500'}`} />
            <span>Review {markedInCurrentModule.length > 0 ? `(${markedInCurrentModule.length})` : ''}</span>
          </button>

          {(() => {
            const isBackDisabled = activeModuleKey === 'RW_1' && safeIndex === 0;
            const isBackActive = activeNavDirection === 'back' && !isBackDisabled;
            const isNextActive = !isBackActive;

            return (
              <>
                <button 
                  type="button"
                  disabled={isBackDisabled}
                  onClick={handleBack}
                  className={`px-4 py-1.5 rounded text-sm font-semibold transition-all duration-150 active:scale-95 cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed disabled:pointer-events-none ${
                    isBackActive
                      ? 'bg-[#003366] text-white border border-[#003366] hover:bg-[#002244] shadow-xs font-bold'
                      : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#f0f4f8]'
                  }`}
                >
                  Back
                </button>
                <button 
                  type="button"
                  onClick={handleNext}
                  className={`px-4 py-1.5 rounded text-sm font-semibold transition-all duration-150 active:scale-95 cursor-pointer ${
                    isNextActive
                      ? 'bg-[#003366] text-white border border-[#003366] hover:bg-[#002244] shadow-xs font-bold'
                      : 'bg-white text-[#003366] border border-[#003366] hover:bg-[#f0f4f8]'
                  }`}
                >
                  {activeModuleKey === 'MATH_2' && safeIndex === currentQuestions.length - 1 ? 'Submit' : 'Next'}
                </button>
              </>
            );
          })()}
        </div>
      </footer>

      {/* GRID MODAL */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-base font-bold text-slate-900">{currentModule.title} Question Navigator</h2>
                <p className="text-xs text-slate-500">Click any question to jump to it.</p>
              </div>
              <button onClick={() => setShowGridModal(false)} className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Module Tabs inside Grid Modal */}
            <div className="flex items-center gap-1.5 my-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              {(Object.keys(currentModules) as ModuleKey[]).map(key => {
                const mod = currentModules[key];
                const isActive = key === activeModuleKey;
                return (
                  <button
                    key={key}
                    onClick={() => switchModule(key)}
                    className={`flex-1 py-1.5 rounded-lg transition cursor-pointer text-center ${
                      isActive ? 'bg-[#003366] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {key.startsWith('RW') ? `R&W Mod ${mod.moduleNumber}` : `Math Mod ${mod.moduleNumber}`}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-7 gap-2.5 my-4 max-h-[300px] overflow-y-auto p-1">
              {currentQuestions.map((q, idx) => {
                const isAns = userAnswers[q.id] !== null;
                const isFlagged = flaggedQuestions[q.id];
                const isCurrent = idx === safeIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowGridModal(false);
                    }}
                    className={`h-10 rounded-xl border flex flex-col items-center justify-center relative font-bold text-xs shadow-2xs hover:scale-105 transition cursor-pointer ${
                      isAns ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                    } ${isCurrent ? 'ring-2 ring-amber-500 ring-offset-2' : ''}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && <Bookmark className="w-3 h-3 text-red-500 fill-red-500 absolute top-0.5 right-0.5" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button onClick={() => setShowGridModal(false)} className="btn-blue cursor-pointer">
                Close Navigator
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REVIEW MODAL */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 relative flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-slate-900">Question Review</h2>
                  <span className="bg-amber-100 text-amber-950 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                    {currentTest.shortName}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Review questions you marked for review or filter by response status.
                </p>
              </div>
              <button 
                onClick={() => setShowReviewModal(false)} 
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Module Selector Tabs */}
            <div className="flex items-center gap-1.5 my-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              {(Object.keys(currentModules) as ModuleKey[]).map(key => {
                const mod = currentModules[key];
                const isActive = key === activeModuleKey;
                const modMarkedCount = mod.questions.filter(q => flaggedQuestions[q.id]).length;
                return (
                  <button
                    key={key}
                    onClick={() => switchModule(key)}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      isActive ? 'bg-[#003366] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{key.startsWith('RW') ? `R&W Mod ${mod.moduleNumber}` : `Math Mod ${mod.moduleNumber}`}</span>
                    {modMarkedCount > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'
                      }`}>
                        {modMarkedCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Status Filter Tabs */}
            <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2 text-xs font-semibold flex-wrap">
              <button
                type="button"
                onClick={() => setReviewFilterTab('marked')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  reviewFilterTab === 'marked'
                    ? 'bg-red-50 text-red-700 border border-red-200 font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${reviewFilterTab === 'marked' ? 'fill-red-600 text-red-600' : 'text-slate-400'}`} />
                <span>Marked for Review ({markedInCurrentModule.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setReviewFilterTab('unanswered')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  reviewFilterTab === 'unanswered'
                    ? 'bg-amber-50 text-amber-900 border border-amber-200 font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <XCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Unanswered ({unansweredInCurrentModule.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setReviewFilterTab('all')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  reviewFilterTab === 'all'
                    ? 'bg-blue-50 text-[#003366] border border-blue-200 font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Grid className="w-3.5 h-3.5 text-slate-500" />
                <span>All Questions ({currentQuestions.length})</span>
              </button>
            </div>

            {/* Questions List */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 py-1 min-h-[220px] max-h-[380px]">
              {filteredQuestionsForReview.length > 0 ? (
                filteredQuestionsForReview.map(({ question: q, index: originalIdx }) => {
                  const isAns = userAnswers[q.id] !== null && userAnswers[q.id] !== '';
                  const isFlagged = flaggedQuestions[q.id];
                  const isCurrent = originalIdx === safeIndex;

                  const plainTextSnippet = (q.passageTitle || q.questionText || '')
                    .replace(/<[^>]+>/g, '')
                    .slice(0, 90)
                    .trim();

                  return (
                    <div
                      key={q.id}
                      onClick={() => {
                        setCurrentIndex(originalIdx);
                        setShowReviewModal(false);
                      }}
                      className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 group ${
                        isCurrent 
                          ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/20 shadow-xs' 
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                          isAns ? 'bg-[#003366] text-white' : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}>
                          {originalIdx + 1}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-xs font-bold text-slate-900">
                              Question {originalIdx + 1}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium truncate max-w-[150px]">
                              ({q.domain || q.type})
                            </span>
                            
                            {isFlagged && (
                              <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                <Bookmark className="w-2.5 h-2.5 fill-red-600 text-red-600" />
                                <span>Marked</span>
                              </span>
                            )}

                            {isAns ? (
                              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                                <span>Answered {userAnswers[q.id] ? `(${userAnswers[q.id]})` : ''}</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                <XCircle className="w-2.5 h-2.5 text-amber-600" />
                                <span>Unanswered</span>
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-600 truncate font-normal">
                            {plainTextSnippet}...
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlaggedQuestions(prev => ({ ...prev, [q.id]: !prev[q.id] }));
                          }}
                          className={`p-1.5 rounded-lg border transition cursor-pointer ${
                            isFlagged 
                              ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                          title={isFlagged ? 'Remove Mark' : 'Mark for Review'}
                        >
                          <Bookmark className={`w-4 h-4 ${isFlagged ? 'fill-red-600 text-red-600' : ''}`} />
                        </button>

                        <span className="text-xs font-bold text-[#003366] group-hover:translate-x-0.5 transition flex items-center gap-0.5">
                          <span>Go</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-10 text-center flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-6">
                  {reviewFilterTab === 'marked' ? (
                    <>
                      <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-3">
                        <Bookmark className="w-6 h-6 text-red-500 fill-red-100" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800">No questions marked for review</h3>
                      <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
                        You haven't marked any questions for review in this module yet. Click "Mark for Review" on any question during the test to bookmark it here.
                      </p>
                      <button
                        type="button"
                        onClick={() => setReviewFilterTab('all')}
                        className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold rounded-xl shadow-2xs transition cursor-pointer"
                      >
                        View All Questions in Module
                      </button>
                    </>
                  ) : reviewFilterTab === 'unanswered' ? (
                    <>
                      <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800">All questions in this module are answered!</h3>
                      <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
                        Great job! You have answered all {currentQuestions.length} questions in this section.
                      </p>
                      <button
                        type="button"
                        onClick={() => setReviewFilterTab('all')}
                        className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold rounded-xl shadow-2xs transition cursor-pointer"
                      >
                        View All Questions
                      </button>
                    </>
                  ) : (
                    <h3 className="text-sm font-bold text-slate-800">No questions found</h3>
                  )}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3 text-xs">
              <div className="text-slate-500 font-semibold">
                <span>{markedInCurrentModule.length} Marked</span>
                <span className="mx-1.5 font-normal">•</span>
                <span>{unansweredInCurrentModule.length} Unanswered</span>
              </div>

              <button 
                type="button"
                onClick={() => setShowReviewModal(false)} 
                className="btn-blue cursor-pointer"
              >
                Return to Test
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CALCULATOR MODAL */}
      {showCalcModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 w-88 p-5 relative text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">SAT Scientific Calculator</span>
                <p className="text-[10px] text-slate-400">Type with device keyboard or tap buttons</p>
              </div>
              <button onClick={() => setShowCalcModal(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="my-3">
              <input
                type="text"
                value={calcDisplay}
                onChange={(e) => setCalcDisplay(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleCalcBtn('=');
                  }
                }}
                className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 text-right font-mono text-2xl text-emerald-400 outline-none focus:border-purple-500 transition"
                placeholder="0"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-4 gap-2 text-xs font-bold font-mono">
              <button onClick={() => handleCalcBtn('C')} className="p-3 bg-red-600/80 hover:bg-red-600 rounded active:scale-95 transition">C</button>
              <button onClick={() => handleCalcBtn('(')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">(</button>
              <button onClick={() => handleCalcBtn(')')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">)</button>
              <button onClick={() => handleCalcBtn('/')} className="p-3 bg-purple-600 hover:bg-purple-500 rounded active:scale-95 transition">÷</button>

              <button onClick={() => handleCalcBtn('7')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">7</button>
              <button onClick={() => handleCalcBtn('8')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">8</button>
              <button onClick={() => handleCalcBtn('9')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">9</button>
              <button onClick={() => handleCalcBtn('*')} className="p-3 bg-purple-600 hover:bg-purple-500 rounded active:scale-95 transition">×</button>

              <button onClick={() => handleCalcBtn('4')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">4</button>
              <button onClick={() => handleCalcBtn('5')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">5</button>
              <button onClick={() => handleCalcBtn('6')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">6</button>
              <button onClick={() => handleCalcBtn('-')} className="p-3 bg-purple-600 hover:bg-purple-500 rounded active:scale-95 transition">-</button>

              <button onClick={() => handleCalcBtn('1')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">1</button>
              <button onClick={() => handleCalcBtn('2')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">2</button>
              <button onClick={() => handleCalcBtn('3')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">3</button>
              <button onClick={() => handleCalcBtn('+')} className="p-3 bg-purple-600 hover:bg-purple-500 rounded active:scale-95 transition">+</button>

              <button onClick={() => handleCalcBtn('0')} className="col-span-2 p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">0</button>
              <button onClick={() => handleCalcBtn('.')} className="p-3 bg-slate-800 hover:bg-slate-700 rounded active:scale-95 transition">.</button>
              <button onClick={() => handleCalcBtn('=')} className="p-3 bg-emerald-600 hover:bg-emerald-500 rounded active:scale-95 transition">=</button>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
              <span className="flex items-center gap-1">Keyboard enabled</span>
              <a 
                href="https://www.desmos.com/calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Desmos Graphing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* REFERENCE SHEET MODAL */}
      {showRefModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#003366]" />
                <span>Official SAT Math Reference Sheet</span>
              </h2>
              <button onClick={() => setShowRefModal(false)} className="text-slate-400 hover:text-slate-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs text-slate-800">
              {/* Note Header */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">NOTES:</p>
                <ul className="list-disc pl-4 space-y-0.5">
                  <li>Unless otherwise indicated, all variables and expressions represent real numbers.</li>
                  <li>Figures provided in the test are drawn to scale unless otherwise stated.</li>
                  <li>All figures lie in a plane.</li>
                  <li>The domain of a given function <span className="font-mono">f</span> is the set of all real numbers <span className="font-mono">x</span> for which <span className="font-mono">f(x)</span> is a real number.</li>
                </ul>
              </div>

              {/* 2D Area & Perimeter Section */}
              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-[#003366]">1. 2D Area & Circumference Formulas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-16 h-16 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="50" cy="50" r="38" />
                      <line x1="50" y1="50" x2="88" y2="50" strokeDasharray="3 3" />
                      <text x="68" y="44" fontSize="12" fill="currentColor" stroke="none" fontWeight="bold">r</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Circle</div>
                    <div className="font-mono text-blue-900 text-[11px] mt-0.5">A = πr²</div>
                    <div className="font-mono text-slate-600 text-[11px]">C = 2πr</div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-16 h-16 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="15" y="25" width="70" height="50" rx="2" />
                      <text x="50" y="88" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">ℓ</text>
                      <text x="90" y="54" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">w</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Rectangle</div>
                    <div className="font-mono text-blue-900 text-[11px] mt-0.5">A = ℓw</div>
                    <div className="font-mono text-slate-600 text-[11px]">P = 2ℓ + 2w</div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-16 h-16 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 75 L85 75 L50 20 Z" />
                      <line x1="50" y1="20" x2="50" y2="75" strokeDasharray="3 3" />
                      <text x="50" y="88" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">b</text>
                      <text x="56" y="52" fontSize="11" fill="currentColor" stroke="none" fontWeight="bold">h</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Triangle</div>
                    <div className="font-mono text-blue-900 text-[11px] mt-0.5">A = ½bh</div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-16 h-16 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 75 L85 75 L85 25 Z" />
                      <rect x="75" y="65" width="10" height="10" fill="none" strokeWidth="1.5" />
                      <text x="50" y="88" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">a</text>
                      <text x="92" y="52" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">b</text>
                      <text x="44" y="44" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">c</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Right Triangle</div>
                    <div className="font-mono text-blue-900 text-[11px] mt-0.5">c² = a² + b²</div>
                  </div>
                </div>
              </div>

              {/* Special Right Triangles */}
              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-[#003366]">2. Special Right Triangles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs">
                    <div className="text-left space-y-1">
                      <div className="font-bold text-slate-900 text-xs">30° - 60° - 90° Triangle</div>
                      <p className="text-[11px] text-slate-600">Hypotenuse = 2 × short leg</p>
                      <p className="text-[11px] text-slate-600">Long leg = short leg × √3</p>
                      <div className="font-mono text-blue-900 font-bold text-[11px] pt-1">Ratios: x : x√3 : 2x</div>
                    </div>
                    <svg className="w-24 h-20 text-slate-700 shrink-0" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 80 L105 80 L105 25 Z" />
                      <rect x="95" y="70" width="10" height="10" fill="none" strokeWidth="1.5" />
                      <path d="M 33 80 A 18 18 0 0 0 30.4 70.6" fill="none" strokeWidth="1.2" />
                      <text x="40" y="75" fontSize="10" fill="currentColor" stroke="none">30°</text>
                      <path d="M 91.3 33.3 A 16 16 0 0 0 105 41" fill="none" strokeWidth="1.2" />
                      <text x="88" y="46" fontSize="10" fill="currentColor" stroke="none">60°</text>
                      <text x="60" y="93" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">x√3</text>
                      <text x="112" y="55" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">x</text>
                      <text x="55" y="45" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">2x</text>
                    </svg>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs">
                    <div className="text-left space-y-1">
                      <div className="font-bold text-slate-900 text-xs">45° - 45° - 90° Triangle</div>
                      <p className="text-[11px] text-slate-600">Isosceles Right Triangle</p>
                      <p className="text-[11px] text-slate-600">Hypotenuse = leg × √2</p>
                      <div className="font-mono text-blue-900 font-bold text-[11px] pt-1">Ratios: s : s : s√2</div>
                    </div>
                    <svg className="w-20 h-20 text-slate-700 shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 80 L80 80 L80 20 Z" />
                      <rect x="70" y="70" width="10" height="10" fill="none" strokeWidth="1.5" />
                      <path d="M 36 80 A 16 16 0 0 0 31.3 68.7" fill="none" strokeWidth="1.2" />
                      <text x="40" y="75" fontSize="10" fill="currentColor" stroke="none">45°</text>
                      <path d="M 68.7 31.3 A 16 16 0 0 0 80 36" fill="none" strokeWidth="1.2" />
                      <text x="64" y="42" fontSize="10" fill="currentColor" stroke="none">45°</text>
                      <text x="50" y="93" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">s</text>
                      <text x="88" y="54" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">s</text>
                      <text x="42" y="44" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">s√2</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3D Volume Formulas */}
              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 text-[#003366]">3. 3D Volume & Surface Area Formulas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  {/* Rectangular Prism */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-20 h-20 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Front face */}
                      <path d="M18 42 L62 42 L62 80 L18 80 Z" />
                      {/* Top & Right 3D perspective edges */}
                      <path d="M18 42 L38 22 L82 22 L62 42" />
                      <path d="M82 22 L82 60 L62 80" />
                      {/* Dashed hidden back edges */}
                      <path d="M18 80 L38 60 L82 60" strokeDasharray="2 2" strokeWidth="1.2" />
                      <path d="M38 22 L38 60" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Labels */}
                      <text x="40" y="93" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">ℓ</text>
                      <text x="76" y="76" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">w</text>
                      <text x="10" y="63" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">h</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Rectangular Prism</div>
                    <div className="font-mono text-blue-900 font-bold text-xs mt-0.5">V = ℓwh</div>
                  </div>

                  {/* Right Cylinder */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-20 h-20 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Top ellipse */}
                      <ellipse cx="50" cy="24" rx="30" ry="10" />
                      {/* Sides */}
                      <line x1="20" y1="24" x2="20" y2="70" />
                      <line x1="80" y1="24" x2="80" y2="70" />
                      {/* Bottom front solid arc & back dashed arc */}
                      <path d="M20 70 A30 10 0 0 0 80 70" />
                      <path d="M80 70 A30 10 0 0 0 20 70" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Radius line */}
                      <line x1="50" y1="24" x2="80" y2="24" strokeDasharray="2 2" strokeWidth="1.2" />
                      <text x="65" y="20" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">r</text>
                      <text x="88" y="50" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">h</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Right Cylinder</div>
                    <div className="font-mono text-blue-900 font-bold text-xs mt-0.5">V = πr²h</div>
                  </div>

                  {/* Sphere */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-20 h-20 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Outer circle */}
                      <circle cx="50" cy="48" r="34" />
                      {/* Equator front solid & back dashed */}
                      <path d="M16 48 A34 10 0 0 0 84 48" />
                      <path d="M84 48 A34 10 0 0 0 16 48" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Radius */}
                      <line x1="50" y1="48" x2="84" y2="48" strokeDasharray="2 2" strokeWidth="1.2" />
                      <circle cx="50" cy="48" r="2" fill="currentColor" />
                      <text x="67" y="43" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">r</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Sphere</div>
                    <div className="font-mono text-blue-900 font-bold text-xs mt-0.5">V = ⁴⁄₃πr³</div>
                  </div>

                  {/* Right Cone */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-20 h-20 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Base ellipse */}
                      <path d="M20 72 A30 10 0 0 0 80 72" />
                      <path d="M80 72 A30 10 0 0 0 20 72" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Sides */}
                      <line x1="50" y1="18" x2="20" y2="72" />
                      <line x1="50" y1="18" x2="80" y2="72" />
                      {/* Height & Radius dashed lines */}
                      <line x1="50" y1="18" x2="50" y2="72" strokeDasharray="2 2" strokeWidth="1.2" />
                      <line x1="50" y1="72" x2="80" y2="72" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Right angle marker */}
                      <path d="M50 66 L56 66 L56 72" strokeWidth="1" />
                      <text x="42" y="48" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">h</text>
                      <text x="65" y="85" fontSize="10" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">r</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Right Cone</div>
                    <div className="font-mono text-blue-900 font-bold text-xs mt-0.5">V = ⅓πr²h</div>
                  </div>

                  {/* Rectangular Pyramid */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-2xs">
                    <svg className="w-20 h-20 my-1 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Front base edges */}
                      <path d="M18 72 L68 72 L84 55" />
                      {/* Back dashed base edges */}
                      <path d="M18 72 L34 55 L84 55" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Apex sides */}
                      <line x1="51" y1="20" x2="18" y2="72" />
                      <line x1="51" y1="20" x2="68" y2="72" />
                      <line x1="51" y1="20" x2="84" y2="55" />
                      <line x1="51" y1="20" x2="34" y2="55" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Center height */}
                      <line x1="51" y1="20" x2="51" y2="63.5" strokeDasharray="2 2" strokeWidth="1.2" />
                      {/* Labels */}
                      <text x="43" y="84" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">ℓ</text>
                      <text x="80" y="68" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">w</text>
                      <text x="44" y="45" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">h</text>
                    </svg>
                    <div className="font-bold text-slate-900 text-xs mt-1">Pyramid</div>
                    <div className="font-mono text-blue-900 font-bold text-xs mt-0.5">V = ⅓ℓwh</div>
                  </div>
                </div>
              </div>

              {/* Additional Circle & Triangle Facts */}
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-blue-950 font-medium space-y-1">
                <p className="font-bold text-xs text-[#003366] uppercase tracking-wider">Key Geometric Facts</p>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>The number of degrees of arc in a circle is <strong>360°</strong>.</li>
                  <li>The number of radians of arc in a circle is <strong>2π</strong>.</li>
                  <li>The sum of the measures in degrees of the angles of a triangle is <strong>180°</strong>.</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
              <a 
                href="https://www.desmos.com/calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Desmos Online Calculator</span>
              </a>
              <button onClick={() => setShowRefModal(false)} className="btn-blue cursor-pointer">
                Close Reference Sheet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT SUMMARY MODAL */}
      {showSubmitSummary && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="text-center pb-4 border-b border-slate-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{currentTest.name} Completed</h2>
              <p className="text-xs text-slate-500 mt-1">Full score breakdown across all 4 modules</p>
            </div>

            <div className="space-y-4 my-4">
              {(Object.keys(currentModules) as ModuleKey[]).map((modKey) => {
                const mod = currentModules[modKey];
                const modQuestions = mod.questions;
                const correctCount = modQuestions.filter(q => {
                  const userChoice = userAnswers[q.id];
                  const isSPR = !q.options || q.options.length === 0;
                  return isSPR 
                    ? checkMathAnswer(userChoice, q.correctAnswer)
                    : (userChoice === q.correctAnswer);
                }).length;

                return (
                  <div key={modKey} className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                    <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between font-bold text-xs text-slate-800">
                      <span>{mod.title}</span>
                      <span className="bg-white px-2.5 py-0.5 rounded-full border border-slate-200 text-slate-700">
                        Score: {correctCount} / {modQuestions.length}
                      </span>
                    </div>
                    <div className="p-3 space-y-2 max-h-48 overflow-y-auto text-xs">
                      {modQuestions.map((q, idx) => {
                        const userChoice = userAnswers[q.id];
                        const isSPR = !q.options || q.options.length === 0;
                        const isCorrect = isSPR
                          ? checkMathAnswer(userChoice, q.correctAnswer)
                          : (userChoice === q.correctAnswer);
                        return (
                          <div key={q.id} className={`p-2.5 rounded-lg border ${isCorrect ? 'bg-emerald-50/80 border-emerald-200' : 'bg-red-50/80 border-red-200'}`}>
                            <div className="flex items-center justify-between font-semibold mb-1">
                              <span>Q{idx + 1}: {q.domain || q.passageTitle || 'Question'}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-red-200 text-red-900'}`}>
                                {isCorrect ? 'Correct' : 'Incorrect'}
                              </span>
                            </div>
                            <p className="text-slate-700"><strong>Your Answer:</strong> {userChoice || 'Unanswered'} | <strong>Correct:</strong> {q.correctAnswer}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between">
              <button onClick={() => setShowSubmitSummary(false)} className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-lg hover:bg-slate-100 cursor-pointer">
                Return to Test
              </button>
              <button 
                onClick={() => {
                  setUserAnswers(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: null }), {}));
                  setFlaggedQuestions(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: false }), {}));
                  setStrikethroughs(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: {} }), {}));
                  setQuestionScribbles(SAT_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: [] }), {}));
                  setCheckedAnswers({});
                  setTimeRemaining(getModuleTimeLimit('RW_1'));
                  setActiveModuleKey('RW_1');
                  setCurrentIndex(0);
                  setShowSubmitSummary(false);
                }} 
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-md cursor-pointer"
              >
                Restart Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESTART / RESET CONFIRMATION MODAL */}
      {showRestartModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <RotateCcw className="w-5 h-5 text-[#003366]" />
                <span>Restart Test / Reset Progress</span>
              </div>
              <button 
                onClick={() => setShowRestartModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Your test progress automatically saves to your browser in real-time. Choose an option below if you wish to reset your work and start fresh:
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={resetCurrentModuleProgress}
                className="w-full text-left p-3.5 border-2 border-slate-200 hover:border-[#003366] hover:bg-blue-50/50 rounded-xl transition group cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-xs group-hover:text-[#003366] flex items-center justify-between">
                  <span>Reset Current Module ({currentModule.title})</span>
                  <span className="text-[11px] text-[#003366] font-bold opacity-0 group-hover:opacity-100 transition">Select →</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Clears selected answers, flags, scribbles & notes for this module only. Resets timer to {activeModuleKey.startsWith('RW') ? '39:00' : '43:00'}.
                </p>
              </button>

              <button
                type="button"
                onClick={resetFullTestProgress}
                className="w-full text-left p-3.5 border-2 border-slate-200 hover:border-red-600 hover:bg-red-50/50 rounded-xl transition group cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-xs group-hover:text-red-700 flex items-center justify-between">
                  <span>Reset Entire Test</span>
                  <span className="text-[11px] text-red-600 font-bold opacity-0 group-hover:opacity-100 transition">Select →</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Clears all answers, highlights, scribbles, and notes across all Reading, Writing, and Math modules.
                </p>
              </button>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowRestartModal(false)}
                className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10-MINUTE BREAK MODAL */}
      {showBreakModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 text-center relative animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#003366] flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-xs">
              <Coffee className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">10-Minute Break</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              You have completed the <strong>Reading and Writing</strong> section.
            </p>

            {/* Countdown Display */}
            <div className="my-6 py-4 px-6 bg-slate-50 border border-slate-200 rounded-2xl inline-block">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Break Time Remaining</span>
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-[#003366] tracking-tight">
                {formattedBreakTime}
              </div>
            </div>

            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 text-left text-xs text-blue-950 space-y-1.5 mb-6">
              <div className="font-bold text-[#003366] flex items-center gap-1.5">
                <span>Next: Math Section</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li>Math, Module 1: <strong>43 minutes</strong></li>
                <li>Math, Module 2: <strong>43 minutes</strong></li>
                <li>You may relax or resume immediately whenever you are ready.</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleEndBreak}
              className="w-full py-3 px-6 bg-[#003366] hover:bg-[#002244] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Resume to Math, Module 1 (43 min)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-16 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* GEMINI WORD DEFINITION POPUP */}
      {definitionModalState.isOpen && (
        <WordDefinitionModal
          word={definitionModalState.word}
          context={definitionModalState.context}
          position={definitionModalState.position}
          onClose={() => setDefinitionModalState(prev => ({ ...prev, isOpen: false }))}
          onLookupNewWord={(newWord) => openWordDefinition(newWord, '', definitionModalState.position)}
        />
      )}

    </div>
  );
}
