"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Flag, MapPin, Timer, TrendingUp, Activity, Target, Gauge } from "lucide-react"
import { RaceChart } from "@/components/race-chart"
import { LiveTiming } from "@/components/live-timing"
import { WeatherWidget } from "@/components/weather-widget"

// Mock data for F1 dashboard
const currentRace = {
  name: "Monaco Grand Prix",
  circuit: "Circuit de Monaco",
  date: "2024-05-26",
  status: "Race Weekend",
  session: "Race",
  lap: 45,
  totalLaps: 78,
  weather: "Sunny, 24°C",
}

const topDrivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    position: 1,
    points: 169,
    nationality: "NED",
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
    gap: "Leader",
    lastLap: "1:12.345",
  },
  {
    id: 2,
    name: "Charles Leclerc",
    team: "Ferrari",
    position: 2,
    points: 138,
    nationality: "MON",
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
    gap: "+3.245s",
    lastLap: "1:12.789",
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
    position: 3,
    points: 113,
    nationality: "GBR",
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
    gap: "+8.123s",
    lastLap: "1:13.012",
  },
  {
    id: 4,
    name: "Carlos Sainz",
    team: "Ferrari",
    position: 4,
    points: 108,
    nationality: "ESP",
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
    gap: "+12.567s",
    lastLap: "1:13.234",
  },
  {
    id: 5,
    name: "Oscar Piastri",
    team: "McLaren",
    position: 5,
    points: 87,
    nationality: "AUS",
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
    gap: "+18.901s",
    lastLap: "1:13.456",
  },
]

const raceStats = [
  { label: "Fastest Lap", value: "1:11.789", driver: "Max Verstappen" },
  { label: "DRS Zones", value: "1 Active", status: "enabled" },
  { label: "Safety Car", value: "Clear", status: "clear" },
  { label: "Track Temp", value: "42°C", status: "optimal" },
]

const upcomingRaces = [
  {
    name: "Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    date: "2024-06-09",
    flag: "/canada-flag.png",
  },
  {
    name: "Spanish Grand Prix",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "2024-06-23",
    flag: "/spain-flag.png",
  },
  {
    name: "Austrian Grand Prix",
    circuit: "Red Bull Ring",
    date: "2024-06-30",
    flag: "/austria-flag.png",
  },
]

export function RaceDashboard() {
  const raceProgress = (currentRace.lap / currentRace.totalLaps) * 100

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">F1 Racing Dashboard</h1>
          <p className="text-muted-foreground">Live data and analytics for the {currentRace.name}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Activity className="h-3 w-3" />
            <span>LIVE</span>
          </Badge>
          <WeatherWidget />
        </div>
      </div>

      {/* Current Race Status */}
      <Card className="border-primary/20 bg-gradient-to-r from-card to-card/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flag className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">{currentRace.name}</CardTitle>
            </div>
            <Badge className="bg-primary text-primary-foreground">{currentRace.session}</Badge>
          </div>
          <CardDescription className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{currentRace.circuit}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Timer className="h-4 w-4" />
              <span>
                Lap {currentRace.lap}/{currentRace.totalLaps}
              </span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Race Progress</span>
              <span>{Math.round(raceProgress)}%</span>
            </div>
            <Progress value={raceProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Live Standings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Live Race Positions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topDrivers.map((driver, index) => (
                <div
                  key={driver.id}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {driver.position}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.name} />
                      <AvatarFallback>
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-muted-foreground">{driver.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm">{driver.gap}</p>
                    <p className="text-xs text-muted-foreground">{driver.lastLap}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Race Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Gauge className="h-5 w-5 text-primary" />
              <span>Race Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {raceStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <div className="text-right">
                    <p className="font-mono text-sm font-medium">{stat.value}</p>
                    {stat.driver && <p className="text-xs text-muted-foreground">{stat.driver}</p>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Tabs */}
      <Tabs defaultValue="timing" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="timing">Live Timing</TabsTrigger>
          <TabsTrigger value="chart">Race Chart</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="timing" className="space-y-4">
          <LiveTiming />
        </TabsContent>

        <TabsContent value="chart" className="space-y-4">
          <RaceChart />
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Races</CardTitle>
              <CardDescription>Next races in the F1 calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRaces.map((race, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={race.flag || "/placeholder.svg"}
                        alt={`${race.name} flag`}
                        className="h-6 w-9 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium">{race.name}</p>
                        <p className="text-sm text-muted-foreground">{race.circuit}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{race.date}</p>
                      <Button variant="outline" size="sm" className="mt-1 bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Performance Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avg. Lap Time</span>
                    <span className="font-mono text-sm">1:13.245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pit Stops</span>
                    <span className="font-mono text-sm">18 Total</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Overtakes</span>
                    <span className="font-mono text-sm">7 This Race</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">DRS Usage</span>
                    <span className="font-mono text-sm">89%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Track Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tire Strategy</span>
                    <Badge variant="secondary">Medium → Hard</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fuel Load</span>
                    <span className="font-mono text-sm">68% Remaining</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Track Evolution</span>
                    <Badge variant="outline">Improving</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Grip Level</span>
                    <span className="font-mono text-sm">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
