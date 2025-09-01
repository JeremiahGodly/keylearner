
"use client";

import { useI18n } from "@/context/i18n-context";

export function StaticKeyboard() {
  const { t } = useI18n();
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys: { [key: string]: string } = {
    'C': 'C#',
    'D': 'D#',
    'F': 'F#',
    'G': 'G#',
    'A': 'A#',
  };

  const renderOctave = (octaveIndex: number) => {
    return (
      <div key={octaveIndex} className="relative flex">
        {whiteKeys.map((key, index) => {
          const isMiddleC = key === 'C' && octaveIndex === 1;
          const isC3 = key === 'C' && octaveIndex === 0;
          let keyLabel = key;
          if (isMiddleC) {
            keyLabel = "C4";
          } else if (isC3) {
            keyLabel = "C3";
          }

          return (
            <div
              key={`${key}${octaveIndex}`}
              className={`relative h-32 w-10 border-2 border-muted-foreground bg-white rounded-b-md flex items-end justify-center pb-2 text-xs font-semibold text-gray-600`}
            >
              {keyLabel}
            </div>
          );
        })}
        {Object.entries(blackKeys).map(([key, blackKeyLabel]) => {
          const whiteKeyIndex = whiteKeys.indexOf(key);
          return (
            <div
              key={`${blackKeyLabel}${octaveIndex}`}
              className="absolute top-0 h-20 w-6 bg-foreground dark:bg-black border-2 border-muted-foreground rounded-b-md z-10 flex items-end justify-center pb-2 text-white text-xs"
              style={{ left: `${whiteKeyIndex * 2.5 + 1.75}rem` }}
            >
              {blackKeyLabel}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex justify-center p-4 bg-muted rounded-lg overflow-x-auto">
      <div className="flex">
        {Array.from({ length: 2 }).map((_, i) => renderOctave(i))}
      </div>
    </div>
  );
}
