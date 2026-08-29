export interface Choice {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  type?: 'Reading and Writing' | 'Math';
  module?: 1 | 2;
  domain: string;
  passageTitle?: string;
  passageHtml?: string;
  questionText: string;
  options: Choice[];
  correctAnswer: string;
  explanation: string;
  testId?: string;
  moduleKey?: string;
  section?: string;
  moduleNumber?: number;
  questionNumber?: number;
  skill?: string;
}

export interface Point {
  x: number;
  y: number;
}

export interface Stroke {
  color: string;
  width: number;
  points: Point[];
}

export type AnnotationColor = 'yellow' | 'blue' | 'green' | 'white';

export interface AnnotationNote {
  id: string;
  x: number;
  y: number;
  text: string;
  color: AnnotationColor;
  width?: number;
  height?: number;
  fontSize?: number;
}
