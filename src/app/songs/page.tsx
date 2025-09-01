import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const songs = [
  { title: "Twinkle Twinkle Little Star", artist: "Folk Song", genre: "Children's", difficulty: "Beginner", imgSrc: "https://picsum.photos/600/400?random=1", hint: "stars night" },
  { title: "Ode to Joy", artist: "Ludwig van Beethoven", genre: "Classical", difficulty: "Beginner", imgSrc: "https://picsum.photos/600/400?random=2", hint: "music sheet" },
  { title: "Hallelujah", artist: "Leonard Cohen", genre: "Pop", difficulty: "Intermediate", imgSrc: "https://picsum.photos/600/400?random=3", hint: "abstract light" },
  { title: "Someone Like You", artist: "Adele", genre: "Pop", difficulty: "Intermediate", imgSrc: "https://picsum.photos/600/400?random=4", hint: "piano keys" },
  { title: "Clair de Lune", artist: "Claude Debussy", genre: "Classical", difficulty: "Advanced", imgSrc: "https://picsum.photos/600/400?random=5", hint: "moon lake" },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", difficulty: "Advanced", imgSrc: "https://picsum.photos/600/400?random=6", hint: "concert stage" },
];

export default function SongsPage() {
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
              <Badge variant={song.difficulty === 'Beginner' ? 'secondary' : song.difficulty === 'Intermediate' ? 'outline' : 'default'}>{song.difficulty}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{song.artist}</p>
            <p className="text-xs text-muted-foreground">{song.genre}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Start Tutorial</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
