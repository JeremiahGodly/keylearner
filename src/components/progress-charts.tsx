"use client";

import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const weeklyPracticeData = [
  { day: "Mon", minutes: 15 },
  { day: "Tue", minutes: 25 },
  { day: "Wed", minutes: 10 },
  { day: "Thu", minutes: 30 },
  { day: "Fri", minutes: 45 },
  { day: "Sat", minutes: 60 },
  { day: "Sun", minutes: 20 },
];

const lessonCompletionData = [
  { name: "Theory", value: 4, color: "hsl(var(--primary))" },
  { name: "Songs", value: 2, color: "hsl(var(--accent))" },
  { name: "Exercises", value: 8, color: "hsl(var(--secondary-foreground))" },
  { name: "Remaining", value: 25, color: "hsl(var(--muted))" },
];

export function ProgressCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Practice</CardTitle>
          <CardDescription>Your practice time in minutes for the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyPracticeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                }}
              />
              <Bar dataKey="minutes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lesson Completion</CardTitle>
          <CardDescription>A breakdown of your completed lessons by category.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={lessonCompletionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {lessonCompletionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                }}
              />
               <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
