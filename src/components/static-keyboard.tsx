
"use client";

import { useI18n } from "@/context/i18n-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function StaticKeyboard() {
  const { t } = useI18n();
  const [playingNote, setPlayingNote] = useState<string | null>(null);
  
  const playNote = (note: string) => {
    setPlayingNote(note);
    // Use sharp name for audio file regardless of display
    const audioNote = note.replace("b", "#");
    const audio = new Audio(`/audio/notes/${audioNote}.mp3`);
    audio.play();
    audio.onended = () => setPlayingNote(null);
  };

  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys: { [key: string]: string } = {
    'C': 'Db',
    'D': 'Eb',
    'F': 'Gb',
    'G': 'Ab',
    'A': 'Bb',
  };

  const renderOctave = (octaveIndex: number) => {
    const octaveNumber = octaveIndex + 3;
    return (
      <div key={octaveIndex} className="relative flex">
        {whiteKeys.map((key) => {
          const noteName = `${key}${octaveNumber}`;
          const isPlaying = playingNote === noteName;
          let keyLabel = key;
          if (key === 'C' && octaveNumber === 4) {
            keyLabel = "C4";
          } else if (key === 'C' && octaveNumber === 3) {
            keyLabel = "C3";
          }

          return (
            <button
              key={noteName}
              onClick={() => playNote(noteName)}
              className={cn(
                "relative h-32 w-10 border-2 border-muted-foreground bg-card rounded-b-md flex items-end justify-center pb-2 text-xs font-semibold text-card-foreground transition-colors duration-100",
                "hover:bg-muted active:bg-primary active:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground": isPlaying,
                }
              )}
            >
              {keyLabel}
            </button>
          );
        })}
        {Object.entries(blackKeys).map(([key, blackKeyLabel]) => {
          const whiteKeyIndex = whiteKeys.indexOf(key);
          const noteName = `${blackKeyLabel}${octaveNumber}`;
          const isPlaying = playingNote === noteName;

          return (
            <button
              key={noteName}
              onClick={() => playNote(noteName)}
              className={cn(
                "absolute top-0 h-20 w-6 bg-foreground border-2 border-muted-foreground rounded-b-md z-10 flex items-end justify-center pb-2 text-background text-xs transition-colors duration-100",
                "hover:bg-gray-700 active:bg-primary active:border-primary active:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground border-primary": isPlaying,
                }
              )}
              style={{ left: `${whiteKeyIndex * 2.5 + 1.75}rem` }}
            >
              {blackKeyLabel}
            </button>
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
