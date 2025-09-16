"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Award, TrendingUp } from "lucide-react"

const seasonStats = {
  totalDrivers: 20,
  rookies: 2,
  champions: 4,
  averageAge: 27.3,
  totalPoints: 1247,
  totalWins: 12,
  totalPodiums: 36,
  mostWins: { driver: "Max Verstappen", count: 7 },
  mostPoles: { driver: "Max Verstappen", count: 5 },
  oldestDriver: { name: "Lewis Hamilton", age: 39 },
  youngestDriver: { name: "Oscar Piastri", age: 23 },
}

export function DriverStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{seasonStats.totalDrivers}</div>
          <p className="text-xs text-muted-foreground">
            Including {seasonStats.rookies} rookies and {seasonStats.champions} world champions
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Wins</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{seasonStats.mostWins.count}</div>
          <p className="text-xs text-muted-foreground">{seasonStats.mostWins.driver}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Poles</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">{seasonStats.mostPoles.count}</div>
          <p className="text-xs text-muted-foreground">{seasonStats.mostPoles.driver}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Age</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{seasonStats.averageAge}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Badge variant="outline" className="text-xs">
              Oldest: {seasonStats.oldestDriver.age}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Youngest: {seasonStats.youngestDriver.age}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
