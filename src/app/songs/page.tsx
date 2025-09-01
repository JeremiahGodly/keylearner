"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useI18n } from "@/context/i18n-context";

export default function SongsPage() {
  const { t } = useI18n();

  const songs = [
    { title: "Twinkle Twinkle Little Star", artist: "Folk Song", genre: t("Children's"), difficulty: t("Beginner"), imgSrc: "https://picsum.photos/600/400?random=1", hint: "stars night" },
    { title: "Ode to Joy", artist: "Ludwig van Beethoven", genre: t("Classical"), difficulty: t("Beginner"), imgSrc: "https://picsum.photos/600/400?random=2", hint: "music sheet" },
    { title: "Hallelujah", artist: "Leonard Cohen", genre: t("Pop"), difficulty: t("Intermediate"), imgSrc: "https://picsum.photos/600/400?random=3", hint: "abstract light" },
    { title: "Someone Like You", artist: "Adele", genre: t("Pop"), difficulty: t("Intermediate"), imgSrc: "https://picsum.photos/600/400?random=4", hint: "piano keys" },
    { title: "Clair de Lune", artist: "Claude Debussy", genre: t("Classical"), difficulty: t("Advanced"), imgSrc: "https://picsum.photos/600/400?random=5", hint: "moon lake" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: t("Rock"), difficulty: t("Advanced"), imgSrc: "https://picsum.photos/600/400?random=6", hint: "concert stage" },
  ];

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
