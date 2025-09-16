"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRightLeft, TrendingUp } from "lucide-react"

const overtakes = [
  {
    lap: 42,
    overtaker: {
      name: "Lando Norris",
      image: "/lando-norris-f1.png",
      team: "McLaren",
    },
    overtaken: {
      name: "Carlos Sainz",
      image: "/carlos-sainz-f1.png",
      team: "Ferrari",
    },
    location: "Turn 1",
    type: "DRS Assisted",
    positions: { from: 4, to: 3 },
  },
  {
    lap: 38,
    overtaker: {
      name: "Charles Leclerc",
      image: "/charles-leclerc-f1.png",
      team: "Ferrari",
    },
    overtaken: {
      name: "Oscar Piastri",
      image: "/oscar-piastri-f1.png",
      team: "McLaren",
    },
    location: "Turn 8",
    type: "Racing",
    positions: { from: 3, to: 2 },
  },
  {
    lap: 31,
    overtaker: {
      name: "Max Verstappen",
      image: "/max-verstappen-f1-driver.jpg",
      team: "Red Bull Racing",
    },
    overtaken: {
      name: "Charles Leclerc",
      image: "/charles-leclerc-f1.png",
      team: "Ferrari",
    },
    location: "Main Straight",
    type: "DRS Assisted",
    positions: { from: 2, to: 1 },
  },
]

const overtakeStats = {
  total: 7,
  drsAssisted: 4,
  racing: 3,
  mostActive: "Lando Norris",
  hotspot: "Turn 1",
}

export function OvertakeTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ArrowRightLeft className="h-5 w-5 text-primary" />
          <span>Overtake Tracker</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Recent Overtakes */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Recent Overtakes</h4>
          <div className="space-y-3">
            {overtakes.map((overtake, index) => (
              <div key={index} className="rounded-lg border p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Lap {overtake.lap}
                  </Badge>
                  <Badge variant={overtake.type === "DRS Assisted" ? "default" : "secondary"} className="text-xs">
                    {overtake.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={overtake.overtaker.image || "/placeholder.svg"} alt={overtake.overtaker.name} />
                      <AvatarFallback className="text-xs">
                        {overtake.overtaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{overtake.overtaker.name}</span>
                  </div>
                  <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{overtake.overtaken.name}</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={overtake.overtaken.image || "/placeholder.svg"} alt={overtake.overtaken.name} />
                      <AvatarFallback className="text-xs">
                        {overtake.overtaken.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{overtake.location}</span>
                  <span>
                    P{overtake.positions.from} → P{overtake.positions.to}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overtake Statistics */}
        <div className="space-y-3 pt-4 border-t">
          <h4 className="font-semibold text-sm flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Race Statistics</span>
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{overtakeStats.total}</p>
              <p className="text-xs text-muted-foreground">Total Overtakes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{overtakeStats.drsAssisted}</p>
              <p className="text-xs text-muted-foreground">DRS Assisted</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Most Active Driver</span>
              <span className="font-medium">{overtakeStats.mostActive}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overtake Hotspot</span>
              <span className="font-medium">{overtakeStats.hotspot}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
