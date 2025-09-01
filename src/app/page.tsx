import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaticKeyboard } from "@/components/static-keyboard";
import { Lightbulb, History, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const learningPath = [
    { title: "Introduction to C Major Scale", type: "Theory", href: "/theory" },
    { title: "Your First Chords: C, G, Am, F", type: "Theory", href: "/theory" },
    { title: "'Twinkle Twinkle Little Star' Tutorial", type: "Song", href: "/songs" },
  ];

  const recentActivity = [
    { title: "Completed: Basic Posture", score: "100%" },
    { title: "Practiced: 'Ode to Joy'", duration: "15 min" },
    { title: "Unlocked: The D Major Scale", achievement: "New Scale!" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to KeyLearner</h1>
        <p className="text-muted-foreground">Your journey to mastering the piano starts now.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Keyboard Fundamentals</CardTitle>
            <CardDescription>Get comfortable with the keyboard layout and proper hand posture.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This is a standard 88-key piano keyboard. The repeating pattern of 12 keys (7 white, 5 black) is called an octave. We'll start with Middle C, the C key closest to the center of the piano.
              </p>
              <StaticKeyboard />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-accent" />
              Personalized Learning Path
            </CardTitle>
            <CardDescription>AI-powered suggestions to guide your learning journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {learningPath.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={item.href}>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History />
            Recent Activity
          </CardTitle>
          <CardDescription>A look back at your latest accomplishments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-md even:bg-muted/50">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.score || activity.duration || activity.achievement}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
