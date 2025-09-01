import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, KeyRound, Metronome, ChevronRight } from "lucide-react";
import Link from "next/link";

const theoryTopics = [
  {
    icon: Music,
    title: "Scales",
    description: "Learn the building blocks of melodies. Understand major and minor scales and how to play them.",
    href: "#",
  },
  {
    icon: KeyRound,
    title: "Chords",
    description: "Discover how to play multiple notes together to create harmony. Start with basic triads.",
    href: "#",
  },
  {
    icon: Metronome,
    title: "Rhythm",
    description: "Grasp the fundamentals of timing in music, from whole notes to eighth notes.",
    href: "#",
  },
];

export default function TheoryPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {theoryTopics.map((topic, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <topic.icon className="h-8 w-8" />
            </div>
            <div>
              <CardTitle>{topic.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{topic.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={topic.href}>
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
