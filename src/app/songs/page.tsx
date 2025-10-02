
"use client";

import { Card, CardContent, CardFooter, Button, Badge } from "@/components/ui";
import Image from "next/image";
import { useI18n } from "@/context/i18n-context";
import { songs as songData } from "@/lib/song-data";

export default function SongsPage() {
  const { t } = useI18n();

  const songs = songData.map(song => ({
    ...song,
    genre: t(song.genre as any) || song.genre,
    difficulty: t(song.difficulty as any) || song.difficulty,
  }));

  const difficultyVariant = (difficulty: string) => {
    if (difficulty === t("Beginner")) return "secondary";
    if (difficulty === t("Intermediate")) return "outline";
    return "default";
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {songs.map((song, index) => (
        <Card key={index} className="overflow-hidden flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src={song.imgSrc}
              alt={`Cover art for ${song.title}`}
              fill
              className="object-cover"
              data-ai-hint={song.hint}
            />
          </div>
          <CardContent className="p-4 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg leading-tight">{song.title}</h3>
              <Badge variant={difficultyVariant(song.difficulty)}>{song.difficulty}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{song.artist}</p>
            <p className="text-xs text-muted-foreground">{song.genre}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">{t("Start Tutorial")}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

    