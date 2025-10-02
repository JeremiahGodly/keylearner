
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, Button } from "@/components/ui";
import { Music, KeyRound, Milestone, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

export default function TheoryPage() {
  const { t } = useI18n();

  const theoryTopics = [
    {
      icon: Music,
      title: t("Scales"),
      description: t("Learn the building blocks of melodies. Understand major and minor scales and how to play them."),
      href: "#",
    },
    {
      icon: KeyRound,
      title: t("Chords"),
      description: t("Discover how to play multiple notes together to create harmony. Start with basic triads."),
      href: "#",
    },
    {
      icon: Milestone,
      title: t("Rhythm"),
      description: t("Grasp the fundamentals of timing in music, from whole notes to eighth notes."),
      href: "#",
    },
  ];

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
                {t("Learn More")} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

    