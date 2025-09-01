"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Video } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export default function ResourcesPage() {
  const { t } = useI18n();

  const exercises = [
    { title: t("Five-Finger Scale Practice (C Major)"), description: t("Develop finger strength and dexterity.") },
    { title: t("Chord Transition Drills (C, G, Am, F)"), description: t("Practice moving smoothly between common chords.") },
    { title: t("Rhythm Tapping Exercise"), description: t("Improve your sense of timing with basic rhythms.") },
  ];

  const sheetMusic = [
    { title: "Ode to Joy", artist: "Beethoven", difficulty: t("Beginner") },
    { title: "Amazing Grace", artist: "John Newton", difficulty: t("Beginner") },
    { title: "Für Elise", artist: "Beethoven", difficulty: t("Intermediate") },
  ];

  const videoDemos = [
    { title: t("Proper Hand Posture and Finger Placement"), instructor: "Jane Doe" },
    { title: t("How to Use a Sustain Pedal"), instructor: "John Smith" },
    { title: t("Understanding Music Notation Basics"), instructor: "Jane Doe" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("Resource Library")}</CardTitle>
        <CardDescription>{t("Supplementary materials to enhance your learning experience.")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="exercises">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exercises">{t("Practice Exercises")}</TabsTrigger>
            <TabsTrigger value="sheet-music">{t("Sheet Music")}</TabsTrigger>
            <TabsTrigger value="video-demos">{t("Video Demos")}</TabsTrigger>
          </TabsList>
          <TabsContent value="exercises" className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("Title")}</TableHead>
                  <TableHead>{t("Description")}</TableHead>
                  <TableHead className="text-right">{t("Action")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exercises.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="text-muted-foreground">{item.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">{t("Start Exercise")}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="sheet-music" className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("Title")}</TableHead>
                  <TableHead>{t("Artist")}</TableHead>
                  <TableHead>{t("Difficulty")}</TableHead>
                  <TableHead className="text-right">{t("Action")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sheetMusic.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.artist}</TableCell>
                    <TableCell>{item.difficulty}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />{t("Download")}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="video-demos" className="mt-4">
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("Title")}</TableHead>
                  <TableHead>{t("Instructor")}</TableHead>
                  <TableHead className="text-right">{t("Action")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {videoDemos.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.instructor}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm"><Video className="mr-2 h-4 w-4" />{t("Watch")}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
