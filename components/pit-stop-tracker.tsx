"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Wrench, Clock } from "lucide-react"

const pitStops = [
  {
    lap: 38,
    driver: "Carlos Sainz",
    team: "Ferrari",
    duration: "2.8s",
    tireChange: "Medium → Hard",
    position: { in: 4, out: 6 },
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
    status: "completed",
  },
  {
    lap: 35,
    driver: "Oscar Piastri",
    team: "McLaren",
    duration: "3.1s",
    tireChange: "Medium → Hard",
    position: { in: 5, out: 7 },
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
    status: "completed",
  },
  {
    lap: 32,
    driver: "Lewis Hamilton",
    team: "Mercedes",
    duration: "2.9s",
    tireChange: "Hard → Medium",
    position: { in: 8, out: 9 },
    image: "/lewis-hamilton-f1.jpg",
    teamColor: "#00D2BE",
    status: "completed",
  },
  {
    lap: 28,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    duration: "2.4s",
    tireChange: "Medium → Hard",
    position: { in: 1, out: 1 },
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
    status: "completed",
  },
]

const upcomingPits = [
  {
    driver: "Charles Leclerc",
    team: "Ferrari",
    estimatedLap: "48-52",
    currentTire: "Medium",
    tireAge: 18,
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
  },
  {
    driver: "Lando Norris",
    team: "McLaren",
    estimatedLap: "50-55",
    currentTire: "Hard",
    tireAge: 22,
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
  },
]

const getTireColor = (tire: string) => {
  switch (tire.split(" ")[0]) {
    case "Soft":
      return "bg-red-500"
    case "Medium":
      return "bg-yellow-500"
    case "Hard":
      return "bg-white border border-gray-300"
    default:
      return "bg-gray-500"
  }
}

export function PitStopTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span>Pit Stop Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Recent Pit Stops */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Recent Pit Stops</h4>
          <div className="space-y-3">
            {pitStops.slice(0, 3).map((stop, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-xs">
                    L{stop.lap}
                  </Badge>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={stop.image || "/placeholder.svg"} alt={stop.driver} />
                    <AvatarFallback className="text-xs">
                      {stop.driver
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{stop.driver}</p>
                    <p className="text-xs text-muted-foreground">{stop.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="h-3 w-3" />
                    <span className="font-mono text-sm font-bold">{stop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <span>P{stop.position.in}</span>
                    <span>→</span>
                    <span>P{stop.position.out}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Pit Windows */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Pit Window Predictions</h4>
          <div className="space-y-3">
            {upcomingPits.map((prediction, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3 bg-muted/30">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={prediction.image || "/placeholder.svg"} alt={prediction.driver} />
                    <AvatarFallback className="text-xs">
                      {prediction.driver
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{prediction.driver}</p>
                    <p className="text-xs text-muted-foreground">{prediction.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Lap {prediction.estimatedLap}</p>
                  <div className="flex items-center space-x-1 text-xs">
                    <div className={`h-2 w-2 rounded-full ${getTireColor(prediction.currentTire)}`} />
                    <span>{prediction.tireAge} laps</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pit Stop Statistics */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-lg font-bold text-primary">2.4s</p>
            <p className="text-xs text-muted-foreground">Fastest Stop</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">2.9s</p>
            <p className="text-xs text-muted-foreground">Average Stop</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
