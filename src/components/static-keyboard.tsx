
"use client";

import { useI18n } from "@/context/i18n-context";

export function StaticKeyboard() {
  const { t } = useI18n();
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys: { [key: string]: { name: string, position: number } } = {
    'C': { name: 'C#', position: 0 },
    'D': { name: 'D#', position: 1 },
    'F': { name: 'F#', position: 3 },
    'G': { name: 'G#', position: 4 },
    'A': { name: 'A#', position: 5 }
  };

  const renderOctave = (octaveIndex: number) => {
    const whiteKeyElements = whiteKeys.map((key, index) => {
      const isMiddleC = key === 'C' && octaveIndex === 1;
      let keyLabel = isMiddleC ? "C4" : key;

      return (
        <div
          key={`${key}${octaveIndex}`}
          className={`relative h-32 w-10 border-2 border-muted-foreground bg-white rounded-b-md flex items-end justify-center pb-2 text-xs font-semibold text-gray-600 ${isMiddleC ? 'bg-primary/20' : ''}`}
        >
          {keyLabel}
        </div>
      );
    });

    Object.keys(blackKeys).forEach((key) => {
      const blackKeyInfo = blackKeys[key];
      const blackKeyLabel = blackKeyInfo.name;
      const whiteKeyIndex = whiteKeys.indexOf(key);

      if (whiteKeyIndex !== -1) {
        whiteKeyElements.splice(whiteKeyIndex + 1, 0,
          <div
            key={`${blackKeyLabel}${octaveIndex}`}
            className="absolute top-0 h-20 w-6 bg-foreground dark:bg-black border-2 border-muted-foreground rounded-b-md z-10 flex items-end justify-center pb-2 text-white text-xs"
            style={{ left: `${(whiteKeyIndex + 1) * 2.5 - 0.75}rem` }}
          >
            {blackKeyLabel}
          </div>
        );
      }
    });

    return (
      <div key={octaveIndex} className="relative flex">
        {whiteKeyElements}
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
