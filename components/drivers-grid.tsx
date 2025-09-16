"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Calendar, Search, Filter } from "lucide-react"
import { DriverModal } from "@/components/driver-modal"

const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    nationality: "Netherlands",
    number: 1,
    points: 169,
    wins: 7,
    podiums: 9,
    poles: 5,
    fastestLaps: 3,
    championships: 3,
    age: 26,
    debut: 2015,
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
    flag: "/netherlands-flag.png",
    bio: "Three-time World Champion known for his aggressive driving style and exceptional racecraft.",
    careerStats: {
      races: 185,
      wins: 54,
      podiums: 98,
      poles: 38,
      fastestLaps: 29,
      points: 2586,
    },
  },
  {
    id: 2,
    name: "Charles Leclerc",
    team: "Ferrari",
    nationality: "Monaco",
    number: 16,
    points: 138,
    wins: 2,
    podiums: 6,
    poles: 4,
    fastestLaps: 2,
    championships: 0,
    age: 26,
    debut: 2018,
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
    flag: "/monaco-flag.png",
    bio: "Monaco-born Ferrari driver with exceptional qualifying pace and natural speed.",
    careerStats: {
      races: 142,
      wins: 5,
      podiums: 29,
      poles: 24,
      fastestLaps: 9,
      points: 1267,
    },
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
    nationality: "United Kingdom",
    number: 4,
    points: 113,
    wins: 1,
    podiums: 4,
    poles: 1,
    fastestLaps: 1,
    championships: 0,
    age: 24,
    debut: 2019,
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
    flag: "/uk-flag.png",
    bio: "Young British talent with exceptional consistency and racecraft, McLaren's rising star.",
    careerStats: {
      races: 118,
      wins: 1,
      podiums: 13,
      poles: 1,
      fastestLaps: 7,
      points: 834,
    },
  },
  {
    id: 4,
    name: "Carlos Sainz Jr.",
    team: "Ferrari",
    nationality: "Spain",
    number: 55,
    points: 108,
    wins: 1,
    podiums: 3,
    poles: 2,
    fastestLaps: 2,
    championships: 0,
    age: 29,
    debut: 2015,
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
    flag: "/spain-flag.png",
    bio: "Experienced Spanish driver known for his consistency and strategic racecraft.",
    careerStats: {
      races: 195,
      wins: 3,
      podiums: 23,
      poles: 6,
      fastestLaps: 6,
      points: 1162,
    },
  },
  {
    id: 5,
    name: "Oscar Piastri",
    team: "McLaren",
    nationality: "Australia",
    number: 81,
    points: 87,
    wins: 1,
    podiums: 2,
    poles: 0,
    fastestLaps: 0,
    championships: 0,
    age: 23,
    debut: 2023,
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
    flag: "/australia-flag.png",
    bio: "Promising Australian rookie with impressive junior career achievements.",
    careerStats: {
      races: 35,
      wins: 1,
      podiums: 4,
      poles: 0,
      fastestLaps: 1,
      points: 152,
    },
  },
  {
    id: 6,
    name: "Lewis Hamilton",
    team: "Mercedes",
    nationality: "United Kingdom",
    number: 44,
    points: 85,
    wins: 0,
    podiums: 2,
    poles: 1,
    fastestLaps: 1,
    championships: 7,
    age: 39,
    debut: 2007,
    image: "/lewis-hamilton-f1.jpg",
    teamColor: "#00D2BE",
    flag: "/uk-flag.png",
    bio: "Seven-time World Champion and one of the greatest drivers in F1 history.",
    careerStats: {
      races: 345,
      wins: 103,
      podiums: 197,
      poles: 104,
      fastestLaps: 67,
      points: 4405,
    },
  },
]

export function DriversGrid() {
  const [selectedDriver, setSelectedDriver] = useState<(typeof drivers)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [teamFilter, setTeamFilter] = useState("all")
  const [sortBy, setSortBy] = useState("points")

  const teams = Array.from(new Set(drivers.map((driver) => driver.team)))

  const filteredDrivers = drivers
    .filter((driver) => {
      const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTeam = teamFilter === "all" || driver.team === teamFilter
      return matchesSearch && matchesTeam
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "points":
          return b.points - a.points
        case "wins":
          return b.wins - a.wins
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return b.points - a.points
      }
    })

  return (
    <>
      <div className="space-y-4">
        {/* Filters */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search drivers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={teamFilter} onValueChange={setTeamFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map((team) => (
                  <SelectItem key={team} value={team}>
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="points">Championship Points</SelectItem>
              <SelectItem value="wins">Race Wins</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Drivers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDrivers.map((driver) => (
            <Card
              key={driver.id}
              className="group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
              onClick={() => setSelectedDriver(driver)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.name} />
                      <AvatarFallback>
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{driver.name}</h3>
                      <div className="flex items-center space-x-2">
                        <img
                          src={driver.flag || "/placeholder.svg"}
                          alt={`${driver.nationality} flag`}
                          className="h-4 w-6 rounded object-cover"
                        />
                        <span className="text-sm text-muted-foreground">{driver.nationality}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: driver.teamColor }}
                    >
                      {driver.number}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Team</span>
                  <Badge variant="outline" style={{ borderColor: driver.teamColor, color: driver.teamColor }}>
                    {driver.team}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Points</span>
                      <span className="font-mono text-sm font-medium">{driver.points}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Wins</span>
                      <span className="font-mono text-sm font-medium">{driver.wins}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Podiums</span>
                      <span className="font-mono text-sm font-medium">{driver.podiums}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Poles</span>
                      <span className="font-mono text-sm font-medium">{driver.poles}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Trophy className="h-3 w-3" />
                      <span>{driver.championships} WDC</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Since {driver.debut}</span>
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedDriver && <DriverModal driver={selectedDriver} onClose={() => setSelectedDriver(null)} />}
    </>
  )
}
