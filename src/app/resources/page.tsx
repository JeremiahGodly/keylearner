import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Video } from "lucide-react";

const exercises = [
  { title: "Five-Finger Scale Practice (C Major)", description: "Develop finger strength and dexterity." },
  { title: "Chord Transition Drills (C, G, Am, F)", description: "Practice moving smoothly between common chords." },
  { title: "Rhythm Tapping Exercise", description: "Improve your sense of timing with basic rhythms." },
];

const sheetMusic = [
  { title: "Ode to Joy", artist: "Beethoven", difficulty: "Beginner" },
  { title: "Amazing Grace", artist: "John Newton", difficulty: "Beginner" },
  { title: "Für Elise", artist: "Beethoven", difficulty: "Intermediate" },
];

const videoDemos = [
  { title: "Proper Hand Posture and Finger Placement", instructor: "Jane Doe" },
  { title: "How to Use a Sustain Pedal", instructor: "John Smith" },
  { title: "Understanding Music Notation Basics", instructor: "Jane Doe" },
];

export default function ResourcesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Library</CardTitle>
        <CardDescription>Supplementary materials to enhance your learning experience.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="exercises">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exercises">Practice Exercises</TabsTrigger>
            <TabsTrigger value="sheet-music">Sheet Music</TabsTrigger>
            <TabsTrigger value="video-demos">Video Demos</TabsTrigger>
          </TabsList>
          <TabsContent value="exercises" className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exercises.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="text-muted-foreground">{item.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Start Exercise</Button>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Artist</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sheetMusic.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.artist}</TableCell>
                    <TableCell>{item.difficulty}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />Download</Button>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {videoDemos.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.instructor}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm"><Video className="mr-2 h-4 w-4" />Watch</Button>
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
