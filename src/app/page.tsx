
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from "@/components/ui";
import { StaticKeyboard } from "@/components/static-keyboard";
import { Lightbulb, History, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

export default function DashboardPage() {
  const { t } = useI18n();

  const learningPath = [
    { title: t('Introduction to C Major Scale'), type: t('Theory'), href: "/theory" },
    { title: t('Your First Chords: C, G, Am, F'), type: t('Theory'), href: "/theory" },
    { title: t("'Twinkle Twinkle Little Star' Tutorial"), type: t('Song'), href: "/songs" },
  ];

  const recentActivity = [
    { title: t('Completed: Basic Posture'), score: "100%" },
    { title: t("Practiced: 'Ode to Joy'"), duration: `15 ${t('min')}` },
    { title: t('Unlocked: The D Major Scale'), achievement: t('New Scale!') },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('Welcome to KeyLearner')}</h1>
        <p className="text-muted-foreground">{t('Your journey to mastering the piano starts now.')}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t('Keyboard Fundamentals')}</CardTitle>
            <CardDescription>{t('Get comfortable with the keyboard layout and proper hand posture.')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {t('This is a standard 88-key piano keyboard. The repeating pattern of 12 keys (7 white, 5 black) is called an octave. We\'ll start with Middle C, the C key closest to the center of the piano.')}
              </p>
              <StaticKeyboard />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-accent" />
              {t('Personalized Learning Path')}
            </CardTitle>
            <CardDescription>{t('AI-powered suggestions to guide your learning journey.')}</CardDescription>
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
            {t('Recent Activity')}
          </CardTitle>
          <CardDescription>{t('A look back at your latest accomplishments.')}</CardDescription>
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

    