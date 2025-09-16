"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock } from "lucide-react"

const timingData = [
  {
    position: 1,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    sector1: "23.456",
    sector2: "28.789",
    sector3: "20.123",
    lastLap: "1:12.368",
    bestLap: "1:11.789",
    gap: "Leader",
    interval: "Leader",
    pits: 1,
    tire: "Hard",
    age: 12,
    image: "/max-verstappen-helmet.jpg",
  },
  {
    position: 2,
    driver: "Charles Leclerc",
    team: "Ferrari",
    sector1: "23.789",
    sector2: "28.901",
    sector3: "20.456",
    lastLap: "1:13.146",
    bestLap: "1:12.234",
    gap: "+3.245",
    interval: "+3.245",
    pits: 1,
    tire: "Medium",
    age: 8,
    image: "/charles-leclerc-helmet.jpg",
  },
  {
    position: 3,
    driver: "Lando Norris",
    team: "McLaren",
    sector1: "23.901",
    sector2: "29.123",
    sector3: "20.789",
    lastLap: "1:13.813",
    bestLap: "1:12.567",
    gap: "+8.123",
    interval: "+4.878",
    pits: 1,
    tire: "Hard",
    age: 15,
    image: "/lando-norris-helmet.jpg",
  },
]

const getTireColor = (tire: string) => {
  switch (tire) {
    case "Soft":
      return "bg-red-500"
    case "Medium":
      return "bg-yellow-500"
    case "Hard":
      return "bg-white border border-gray-300"
    case "Intermediate":
      return "bg-green-500"
    case "Wet":
      return "bg-blue-500"
    default:
      return "bg-gray-500"
  }
}

export function LiveTiming() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Live Timing & Telemetry</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-muted-foreground">
                <th className="pb-2">Pos</th>
                <th className="pb-2">Driver</th>
                <th className="pb-2">S1</th>
                <th className="pb-2">S2</th>
                <th className="pb-2">S3</th>
                <th className="pb-2">Last</th>
                <th className="pb-2">Best</th>
                <th className="pb-2">Gap</th>
                <th className="pb-2">Tire</th>
                <th className="pb-2">Pits</th>
              </tr>
            </thead>
            <tbody>
              {timingData.map((driver) => (
                <tr key={driver.position} className="border-b transition-colors hover:bg-muted/50">
                  <td className="py-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {driver.position}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.driver} />
                        <AvatarFallback className="text-xs">
                          {driver.driver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{driver.driver}</p>
                        <p className="text-xs text-muted-foreground">{driver.team}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 font-mono text-sm">{driver.sector1}</td>
                  <td className="py-3 font-mono text-sm">{driver.sector2}</td>
                  <td className="py-3 font-mono text-sm">{driver.sector3}</td>
                  <td className="py-3 font-mono text-sm font-medium">{driver.lastLap}</td>
                  <td className="py-3 font-mono text-sm text-primary">{driver.bestLap}</td>
                  <td className="py-3 font-mono text-sm">{driver.gap}</td>
                  <td className="py-3">
                    <div className="flex items-center space-x-1">
                      <div className={`h-3 w-3 rounded-full ${getTireColor(driver.tire)}`} />
                      <span className="text-xs">{driver.age}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge variant="outline" className="text-xs">
                      {driver.pits}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
