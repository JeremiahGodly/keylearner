import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy, Star, Music } from "lucide-react";
import { ProgressCharts } from "@/components/progress-charts";

const achievements = [
  { icon: Star, title: "First Song Learned", description: "You played 'Twinkle Twinkle Little Star'!" },
  { icon: Music, title: "Scale Master", description: "You've learned 5 major scales." },
  { icon: Trophy, title: "Practice Streak: 7 Days", description: "Keep up the great work!" },
  { icon: Star, title: "Chord Prodigy", description: "Learned your first 4 chords." },
];

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <ProgressCharts />
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Milestones you've reached on your musical journey.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
              <achievement.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">{achievement.title}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
