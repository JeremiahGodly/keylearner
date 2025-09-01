"use client";

import { useI18n } from "@/context/i18n-context";

export function StaticKeyboard() {
  const { t } = useI18n();
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys: { [key: string]: string } = { 'C': 'C#', 'D': 'D#', 'F': 'F#', 'G': 'G#', 'A': 'A#' };

  const renderOctave = (octaveIndex: number) => (
    <div key={octaveIndex} className="relative flex">
      {whiteKeys.map((key) => {
        const keyName = `${key}${octaveIndex + 3}`;
        const isMiddleC = key === 'C' && octaveIndex === 1;

        return (
          <div key={keyName} className="relative h-32 w-10 border-2 border-muted-foreground bg-white rounded-b-md flex items-end justify-center pb-2 text-xs font-semibold text-gray-600">
            {isMiddleC ? t('Middle C') : keyName}
            {Object.prototype.hasOwnProperty.call(blackKeys, key) && (
              <div className="absolute top-0 left-[1.875rem] h-20 w-6 bg-foreground dark:bg-black border-2 border-muted-foreground rounded-b-md z-10 flex items-end justify-center pb-2 text-white text-xs">
                {`${blackKeys[key]}${octaveIndex + 3}`}
              </div>
            )}
          </div>
        )
      })}
    </div>
  );

  return (
    <div className="flex justify-center p-4 bg-muted rounded-lg overflow-x-auto">
      <div className="flex">
        {Array.from({ length: 2 }).map((_, i) => renderOctave(i))}
      </div>
    </div>
  );
}
