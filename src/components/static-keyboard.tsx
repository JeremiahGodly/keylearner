"use client";

import { useI18n } from "@/context/i18n-context";

export function StaticKeyboard() {
  const { t } = useI18n();
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys: { [key: string]: string } = { 'C': 'C#', 'D': 'D#', 'F': 'F#', 'G': 'G#', 'A': 'A#' };

  const renderOctave = (octaveIndex: number) => (
    <div key={octaveIndex} className="relative flex">
      {whiteKeys.map((key) => (
        <div key={key} className="relative h-32 w-8 border-2 border-muted-foreground bg-white rounded-b-md flex items-end justify-center pb-2">
          {key === 'C' && octaveIndex === 1 && (
            <span className="absolute bottom-2 text-xs font-bold text-primary z-20">{t('Middle C')}</span>
          )}
          {Object.prototype.hasOwnProperty.call(blackKeys, key) && (
            <div className="absolute top-0 left-[-0.6rem] h-20 w-5 bg-foreground border-2 border-muted-foreground rounded-b-md z-10" />
          )}
        </div>
      ))}
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
