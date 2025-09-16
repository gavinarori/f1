"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { TrendingUp } from "lucide-react"

const raceData = [
  { lap: 1, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 5 },
  { lap: 5, verstappen: 1, leclerc: 2, norris: 4, sainz: 3, piastri: 5 },
  { lap: 10, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 6 },
  { lap: 15, verstappen: 1, leclerc: 3, norris: 2, sainz: 4, piastri: 5 },
  { lap: 20, verstappen: 1, leclerc: 2, norris: 3, sainz: 5, piastri: 4 },
  { lap: 25, verstappen: 1, leclerc: 2, norris: 4, sainz: 3, piastri: 5 },
  { lap: 30, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 5 },
  { lap: 35, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 6 },
  { lap: 40, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 5 },
  { lap: 45, verstappen: 1, leclerc: 2, norris: 3, sainz: 4, piastri: 5 },
]

const lapTimeData = [
  { lap: 1, verstappen: 75.2, leclerc: 75.8, norris: 76.1 },
  { lap: 2, verstappen: 73.1, leclerc: 73.5, norris: 73.9 },
  { lap: 3, verstappen: 72.8, leclerc: 73.2, norris: 73.6 },
  { lap: 4, verstappen: 72.5, leclerc: 72.9, norris: 73.3 },
  { lap: 5, verstappen: 72.3, leclerc: 72.7, norris: 73.1 },
  { lap: 6, verstappen: 72.1, leclerc: 72.5, norris: 72.9 },
  { lap: 7, verstappen: 71.9, leclerc: 72.3, norris: 72.7 },
  { lap: 8, verstappen: 71.8, leclerc: 72.2, norris: 72.6 },
]

export function RaceChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Position Changes</span>
          </CardTitle>
          <CardDescription>Track position changes throughout the race</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={raceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="lap"
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                reversed
                domain={[1, 20]}
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="verstappen"
                stroke="#0600EF"
                strokeWidth={2}
                dot={{ fill: "#0600EF", strokeWidth: 2, r: 3 }}
                name="Verstappen"
              />
              <Line
                type="monotone"
                dataKey="leclerc"
                stroke="#DC0000"
                strokeWidth={2}
                dot={{ fill: "#DC0000", strokeWidth: 2, r: 3 }}
                name="Leclerc"
              />
              <Line
                type="monotone"
                dataKey="norris"
                stroke="#FF8700"
                strokeWidth={2}
                dot={{ fill: "#FF8700", strokeWidth: 2, r: 3 }}
                name="Norris"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lap Time Analysis</CardTitle>
          <CardDescription>Comparative lap times for top drivers</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lapTimeData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="lap"
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                domain={["dataMin - 0.5", "dataMax + 0.5"]}
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                formatter={(value: any) => [`${value}s`, ""]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="verstappen"
                stroke="#0600EF"
                strokeWidth={2}
                dot={{ fill: "#0600EF", strokeWidth: 2, r: 3 }}
                name="Verstappen"
              />
              <Line
                type="monotone"
                dataKey="leclerc"
                stroke="#DC0000"
                strokeWidth={2}
                dot={{ fill: "#DC0000", strokeWidth: 2, r: 3 }}
                name="Leclerc"
              />
              <Line
                type="monotone"
                dataKey="norris"
                stroke="#FF8700"
                strokeWidth={2}
                dot={{ fill: "#FF8700", strokeWidth: 2, r: 3 }}
                name="Norris"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
