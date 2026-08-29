import React from 'react';
import { Move, X } from 'lucide-react';

interface HintTextBoxProps {
  color: 'yellow' | 'blue';
  text: React.ReactNode | React.ReactNode[];
  fontSize?: number;
  headerFontSize?: number;
  onClose?: () => void;
  className?: string;
  width?: string;
}

export const HintTextBox: React.FC<HintTextBoxProps> = ({
  color,
  text,
  fontSize = 17,
  headerFontSize,
  onClose,
  className = '',
  width
}) => {
  const isYellow = color === 'yellow';
  const displayHeaderSize = headerFontSize ?? fontSize;

  const lines = Array.isArray(text)
    ? text
    : (typeof text === 'string' ? text.split('\n') : [text]);

  return (
    <div
      className={`relative rounded border shadow-2xs text-left overflow-hidden select-text ${
        isYellow
          ? 'bg-amber-50/95 border-amber-300 ring-1 ring-amber-200/70'
          : 'bg-blue-50/95 border-blue-300 ring-1 ring-blue-200/70'
      } ${width || ''} ${className}`}
    >
      {/* Header bar styled like Bluebook Annotation text box */}
      <div
        className={`px-1.5 py-0.5 flex items-center justify-between text-[10px] select-none border-b ${
          isYellow
            ? 'bg-amber-200/90 border-amber-300 text-amber-900'
            : 'bg-blue-200/90 border-blue-300 text-blue-900'
        }`}
      >
        <div className="flex items-center gap-1">
          <Move className="w-2.5 h-2.5 opacity-70" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px]">
          <span>- {displayHeaderSize}px +</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onClose) onClose();
            }}
            className="p-0.5 hover:bg-black/10 rounded cursor-pointer transition opacity-70 hover:opacity-100"
            title="Close text box"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Body text styled like mathematical formula concise notes */}
      <div
        className={`px-2.5 py-1.5 font-sans font-normal ${
          isYellow ? 'text-amber-950' : 'text-blue-950'
        }`}
        style={{ fontSize: `${fontSize}px`, lineHeight: '1.35' }}
      >
        {lines.map((line, idx) => (
          <div key={idx} className="whitespace-normal break-words">
            {line}
          </div>
        ))}
      </div>

      {/* Subtle resize grip corner */}
      <div className="absolute bottom-0.5 right-0.5 pointer-events-none opacity-40">
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className={isYellow ? 'text-amber-700' : 'text-blue-700'}>
          <line x1="5" y1="1" x2="1" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <line x1="5" y1="3.5" x2="3.5" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

