"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, TrendingUp, Award } from "lucide-react"

const driverStandings = [
  {
    position: 1,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    points: 169,
    wins: 7,
    podiums: 9,
    poles: 5,
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
    nationality: "NED",
    flag: "/netherlands-flag.png",
  },
  {
    position: 2,
    driver: "Charles Leclerc",
    team: "Ferrari",
    points: 138,
    wins: 2,
    podiums: 6,
    poles: 4,
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
    nationality: "MON",
    flag: "/monaco-flag.png",
  },
  {
    position: 3,
    driver: "Lando Norris",
    team: "McLaren",
    points: 113,
    wins: 1,
    podiums: 4,
    poles: 1,
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
    nationality: "GBR",
    flag: "/uk-flag.png",
  },
  {
    position: 4,
    driver: "Carlos Sainz",
    team: "Ferrari",
    points: 108,
    wins: 1,
    podiums: 3,
    poles: 2,
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
    nationality: "ESP",
    flag: "/spain-flag.png",
  },
  {
    position: 5,
    driver: "Oscar Piastri",
    team: "McLaren",
    points: 87,
    wins: 1,
    podiums: 2,
    poles: 0,
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
    nationality: "AUS",
    flag: "/australia-flag.png",
  },
  {
    position: 6,
    driver: "Lewis Hamilton",
    team: "Mercedes",
    points: 85,
    wins: 0,
    podiums: 2,
    poles: 1,
    image: "/lewis-hamilton-f1.jpg",
    teamColor: "#00D2BE",
    nationality: "GBR",
    flag: "/uk-flag.png",
  },
]

const constructorStandings = [
  {
    position: 1,
    team: "Red Bull Racing",
    points: 245,
    wins: 7,
    podiums: 12,
    poles: 6,
    color: "#0600EF",
    drivers: ["Max Verstappen", "Sergio Perez"],
  },
  {
    position: 2,
    team: "Ferrari",
    points: 246,
    wins: 3,
    podiums: 9,
    poles: 6,
    color: "#DC0000",
    drivers: ["Charles Leclerc", "Carlos Sainz"],
  },
  {
    position: 3,
    team: "McLaren",
    points: 200,
    wins: 2,
    podiums: 6,
    poles: 1,
    color: "#FF8700",
    drivers: ["Lando Norris", "Oscar Piastri"],
  },
  {
    position: 4,
    team: "Mercedes",
    points: 142,
    wins: 0,
    podiums: 4,
    poles: 2,
    color: "#00D2BE",
    drivers: ["Lewis Hamilton", "George Russell"],
  },
  {
    position: 5,
    team: "Aston Martin",
    points: 68,
    wins: 0,
    podiums: 1,
    poles: 0,
    color: "#006F62",
    drivers: ["Fernando Alonso", "Lance Stroll"],
  },
]

const championshipStats = {
  racesCompleted: 12,
  totalRaces: 24,
  pointsLeader: "Max Verstappen",
  constructorLeader: "Ferrari",
  differentWinners: 5,
  differentPoleWinners: 4,
}

export function ChampionshipStandings() {
  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-500 text-yellow-900"
      case 2:
        return "bg-gray-400 text-gray-900"
      case 3:
        return "bg-amber-600 text-amber-100"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Championship Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Races Completed</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {championshipStats.racesCompleted}/{championshipStats.totalRaces}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((championshipStats.racesCompleted / championshipStats.totalRaces) * 100)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Leader</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{championshipStats.pointsLeader}</div>
            <p className="text-xs text-muted-foreground">Driver Championship</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Constructor Leader</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{championshipStats.constructorLeader}</div>
            <p className="text-xs text-muted-foreground">Constructor Championship</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Different Winners</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{championshipStats.differentWinners}</div>
            <p className="text-xs text-muted-foreground">Race winners this season</p>
          </CardContent>
        </Card>
      </div>

      {/* Standings Tables */}
      <Tabs defaultValue="drivers" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="drivers">Driver Championship</TabsTrigger>
          <TabsTrigger value="constructors">Constructor Championship</TabsTrigger>
        </TabsList>

        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Driver Championship Standings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {driverStandings.map((driver) => (
                  <div
                    key={driver.position}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${getPositionColor(
                          driver.position,
                        )}`}
                      >
                        {driver.position}
                      </div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.driver} />
                        <AvatarFallback>
                          {driver.driver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{driver.driver}</h3>
                          <img
                            src={driver.flag || "/placeholder.svg"}
                            alt={`${driver.nationality} flag`}
                            className="h-4 w-6 rounded object-cover"
                          />
                        </div>
                        <Badge variant="outline" style={{ borderColor: driver.teamColor, color: driver.teamColor }}>
                          {driver.team}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{driver.points}</div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{driver.wins} wins</span>
                        <span>{driver.podiums} podiums</span>
                        <span>{driver.poles} poles</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="constructors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Constructor Championship Standings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {constructorStandings.map((constructor) => (
                  <div
                    key={constructor.position}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${getPositionColor(
                          constructor.position,
                        )}`}
                      >
                        {constructor.position}
                      </div>
                      <div className="h-12 w-12 rounded-full" style={{ backgroundColor: constructor.color }} />
                      <div>
                        <h3 className="font-semibold text-lg">{constructor.team}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          {constructor.drivers.map((driver, index) => (
                            <span key={index}>
                              {driver}
                              {index < constructor.drivers.length - 1 && " • "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{constructor.points}</div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{constructor.wins} wins</span>
                        <span>{constructor.podiums} podiums</span>
                        <span>{constructor.poles} poles</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
