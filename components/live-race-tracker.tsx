"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Clock, Flag, Gauge, Play, Pause, RotateCcw } from "lucide-react"

const livePositions = [
  {
    position: 1,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    gap: "Leader",
    interval: "Leader",
    lastLap: "1:12.345",
    bestLap: "1:11.789",
    sector1: "23.456",
    sector2: "28.789",
    sector3: "20.123",
    speed: 312,
    tire: "Hard",
    tireAge: 12,
    pitStops: 1,
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
    status: "racing",
  },
  {
    position: 2,
    driver: "Charles Leclerc",
    team: "Ferrari",
    gap: "+3.245s",
    interval: "+3.245s",
    lastLap: "1:13.146",
    bestLap: "1:12.234",
    sector1: "23.789",
    sector2: "28.901",
    sector3: "20.456",
    speed: 308,
    tire: "Medium",
    tireAge: 8,
    pitStops: 1,
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
    status: "racing",
  },
  {
    position: 3,
    driver: "Lando Norris",
    team: "McLaren",
    gap: "+8.123s",
    interval: "+4.878s",
    lastLap: "1:13.813",
    bestLap: "1:12.567",
    sector1: "23.901",
    sector2: "29.123",
    sector3: "20.789",
    speed: 305,
    tire: "Hard",
    tireAge: 15,
    pitStops: 1,
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
    status: "racing",
  },
  {
    position: 4,
    driver: "Carlos Sainz",
    team: "Ferrari",
    gap: "+12.567s",
    interval: "+4.444s",
    lastLap: "1:13.234",
    bestLap: "1:12.890",
    sector1: "24.123",
    sector2: "29.234",
    sector3: "20.877",
    speed: 302,
    tire: "Medium",
    tireAge: 10,
    pitStops: 1,
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
    status: "pit-entry",
  },
  {
    position: 5,
    driver: "Oscar Piastri",
    team: "McLaren",
    gap: "+18.901s",
    interval: "+6.334s",
    lastLap: "1:13.456",
    bestLap: "1:12.789",
    sector1: "24.234",
    sector2: "29.345",
    sector3: "20.987",
    speed: 299,
    tire: "Hard",
    tireAge: 18,
    pitStops: 1,
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
    status: "racing",
  },
]

const raceInfo = {
  circuit: "Monaco Grand Prix",
  lap: 45,
  totalLaps: 78,
  timeElapsed: "1:23:45",
  fastestLap: {
    driver: "Max Verstappen",
    time: "1:11.789",
    lap: 23,
  },
  weather: {
    condition: "Sunny",
    temperature: 24,
    humidity: 45,
    windSpeed: 12,
    trackTemp: 42,
  },
  flags: {
    current: "Green",
    drs: "Enabled",
    safetycar: "Clear",
  },
}

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

const getStatusColor = (status: string) => {
  switch (status) {
    case "racing":
      return "bg-green-500"
    case "pit-entry":
      return "bg-yellow-500"
    case "pit-exit":
      return "bg-blue-500"
    case "retired":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

export function LiveRaceTracker() {
  const [isLive, setIsLive] = useState(true)
  const [currentLap, setCurrentLap] = useState(raceInfo.lap)

  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      // Simulate live updates
      setCurrentLap((prev) => (prev < raceInfo.totalLaps ? prev + 0.1 : prev))
    }, 2000)

    return () => clearInterval(interval)
  }, [isLive])

  const raceProgress = (currentLap / raceInfo.totalLaps) * 100

  return (
    <div className="space-y-6">
      {/* Race Status Header */}
      <Card className="border-primary/20 bg-gradient-to-r from-card to-card/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`h-3 w-3 rounded-full ${isLive ? "bg-red-500 race-pulse" : "bg-gray-500"}`} />
                <CardTitle className="text-xl">{raceInfo.circuit}</CardTitle>
                {isLive && (
                  <Badge variant="destructive" className="animate-pulse">
                    LIVE
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLive(!isLive)}
                className="flex items-center space-x-1"
              >
                {isLive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isLive ? "Pause" : "Resume"}</span>
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentLap(raceInfo.lap)}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Flag className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">
                  Lap {Math.floor(currentLap)}/{raceInfo.totalLaps}
                </p>
                <p className="text-xs text-muted-foreground">Race Progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{raceInfo.timeElapsed}</p>
                <p className="text-xs text-muted-foreground">Time Elapsed</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{raceInfo.fastestLap.time}</p>
                <p className="text-xs text-muted-foreground">Fastest Lap</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{raceInfo.flags.current} Flag</p>
                <p className="text-xs text-muted-foreground">Track Status</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Race Progress</span>
              <span>{Math.round(raceProgress)}%</span>
            </div>
            <Progress value={raceProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Live Positions */}
      <Tabs defaultValue="positions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="positions">Live Positions</TabsTrigger>
          <TabsTrigger value="timing">Sector Times</TabsTrigger>
          <TabsTrigger value="telemetry">Telemetry</TabsTrigger>
        </TabsList>

        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Race Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {livePositions.map((driver) => (
                  <div
                    key={driver.position}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {driver.position}
                        </div>
                        <div className={`h-2 w-2 rounded-full ${getStatusColor(driver.status)}`} />
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.driver} />
                        <AvatarFallback>
                          {driver.driver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{driver.driver}</p>
                        <p className="text-sm text-muted-foreground">{driver.team}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-mono text-sm font-medium">{driver.gap}</p>
                        <p className="text-xs text-muted-foreground">Gap</p>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-sm">{driver.lastLap}</p>
                        <p className="text-xs text-muted-foreground">Last Lap</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`h-4 w-4 rounded-full ${getTireColor(driver.tire)}`} />
                        <span className="text-xs font-mono">{driver.tireAge}</span>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-sm">{driver.speed}</p>
                        <p className="text-xs text-muted-foreground">km/h</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sector Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left text-sm text-muted-foreground">
                      <th className="pb-2">Pos</th>
                      <th className="pb-2">Driver</th>
                      <th className="pb-2">Sector 1</th>
                      <th className="pb-2">Sector 2</th>
                      <th className="pb-2">Sector 3</th>
                      <th className="pb-2">Last Lap</th>
                      <th className="pb-2">Best Lap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {livePositions.map((driver) => (
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
                            <span className="text-sm font-medium">{driver.driver}</span>
                          </div>
                        </td>
                        <td className="py-3 font-mono text-sm">{driver.sector1}</td>
                        <td className="py-3 font-mono text-sm">{driver.sector2}</td>
                        <td className="py-3 font-mono text-sm">{driver.sector3}</td>
                        <td className="py-3 font-mono text-sm font-medium">{driver.lastLap}</td>
                        <td className="py-3 font-mono text-sm text-primary">{driver.bestLap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="telemetry" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Speed Trap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {livePositions.slice(0, 5).map((driver) => (
                    <div key={driver.position} className="flex items-center justify-between">
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
                        <span className="text-sm">{driver.driver}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-sm font-medium">{driver.speed} km/h</p>
                        <Progress value={(driver.speed / 320) * 100} className="h-1 w-16" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tire Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {livePositions.slice(0, 5).map((driver) => (
                    <div key={driver.position} className="flex items-center justify-between">
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
                        <span className="text-sm">{driver.driver}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`h-3 w-3 rounded-full ${getTireColor(driver.tire)}`} />
                        <span className="text-sm">{driver.tire}</span>
                        <Badge variant="outline" className="text-xs">
                          {driver.tireAge} laps
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
