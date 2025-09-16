"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Clock } from "lucide-react"
import { CircuitModal } from "@/components/circuit-modal"

const circuits = [
  {
    id: 1,
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    country: "Monaco",
    city: "Monte Carlo",
    length: 3.337,
    laps: 78,
    raceDistance: 260.286,
    lapRecord: {
      time: "1:12.909",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 1950,
    corners: 19,
    drsZones: 1,
    difficulty: "Very Hard",
    characteristics: ["Street Circuit", "Narrow", "Elevation Changes"],
    image: "/monaco-circuit.jpg",
    flag: "/monaco-flag.png",
    description:
      "The most prestigious race on the F1 calendar, Monaco is a street circuit that demands precision and concentration.",
    keyCorners: [
      { name: "Sainte Devote", number: 1, type: "Right-hander" },
      { name: "Casino Square", number: 5, type: "Right-hander" },
      { name: "Hairpin", number: 6, type: "Hairpin" },
      { name: "Rascasse", number: 18, type: "Right-hander" },
    ],
    weather: {
      averageTemp: 22,
      rainChance: 15,
      windSpeed: 8,
    },
    stats: {
      overtakes: 2.3,
      safetyCarChance: 45,
      tireWear: "Low",
      fuelConsumption: "Low",
    },
  },
  {
    id: 2,
    name: "British Grand Prix",
    circuit: "Silverstone Circuit",
    country: "United Kingdom",
    city: "Silverstone",
    length: 5.891,
    laps: 52,
    raceDistance: 306.198,
    lapRecord: {
      time: "1:27.097",
      driver: "Max Verstappen",
      year: 2020,
    },
    firstGrandPrix: 1950,
    corners: 18,
    drsZones: 2,
    difficulty: "Hard",
    characteristics: ["High Speed", "Fast Corners", "Historic"],
    image: "/silverstone-circuit.jpg",
    flag: "/uk-flag.png",
    description: "The home of British motorsport, Silverstone is known for its high-speed corners and passionate fans.",
    keyCorners: [
      { name: "Copse", number: 1, type: "Right-hander" },
      { name: "Maggotts", number: 11, type: "Left-hander" },
      { name: "Becketts", number: 12, type: "Right-hander" },
      { name: "Stowe", number: 15, type: "Right-hander" },
    ],
    weather: {
      averageTemp: 18,
      rainChance: 35,
      windSpeed: 12,
    },
    stats: {
      overtakes: 8.7,
      safetyCarChance: 25,
      tireWear: "High",
      fuelConsumption: "High",
    },
  },
  {
    id: 3,
    name: "Italian Grand Prix",
    circuit: "Autodromo Nazionale Monza",
    country: "Italy",
    city: "Monza",
    length: 5.793,
    laps: 53,
    raceDistance: 306.72,
    lapRecord: {
      time: "1:21.046",
      driver: "Rubens Barrichello",
      year: 2004,
    },
    firstGrandPrix: 1950,
    corners: 11,
    drsZones: 3,
    difficulty: "Medium",
    characteristics: ["High Speed", "Low Downforce", "Slipstream"],
    image: "/monza-circuit.jpg",
    flag: "/italy-flag.png",
    description: "The Temple of Speed, Monza is famous for its long straights and passionate Italian fans.",
    keyCorners: [
      { name: "Variante del Rettifilo", number: 1, type: "Chicane" },
      { name: "Curva di Lesmo", number: 5, type: "Right-hander" },
      { name: "Variante Ascari", number: 8, type: "Chicane" },
      { name: "Parabolica", number: 11, type: "Right-hander" },
    ],
    weather: {
      averageTemp: 24,
      rainChance: 20,
      windSpeed: 6,
    },
    stats: {
      overtakes: 12.4,
      safetyCarChance: 30,
      tireWear: "Medium",
      fuelConsumption: "High",
    },
  },
  {
    id: 4,
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    country: "Japan",
    city: "Suzuka",
    length: 5.807,
    laps: 53,
    raceDistance: 307.471,
    lapRecord: {
      time: "1:30.983",
      driver: "Lewis Hamilton",
      year: 2019,
    },
    firstGrandPrix: 1987,
    corners: 18,
    drsZones: 2,
    difficulty: "Very Hard",
    characteristics: ["Figure-8 Layout", "Technical", "Elevation Changes"],
    image: "/suzuka-circuit.jpg",
    flag: "/japan-flag.png",
    description:
      "A driver's favorite, Suzuka's unique figure-8 layout provides some of the most challenging corners in F1.",
    keyCorners: [
      { name: "Turn 1", number: 1, type: "Right-hander" },
      { name: "Esses", number: 3, type: "S-curves" },
      { name: "Degner", number: 9, type: "Left-hander" },
      { name: "130R", number: 15, type: "Right-hander" },
    ],
    weather: {
      averageTemp: 20,
      rainChance: 40,
      windSpeed: 10,
    },
    stats: {
      overtakes: 6.2,
      safetyCarChance: 35,
      tireWear: "High",
      fuelConsumption: "Medium",
    },
  },
  {
    id: 5,
    name: "Brazilian Grand Prix",
    circuit: "Autodromo Jose Carlos Pace",
    country: "Brazil",
    city: "São Paulo",
    length: 4.309,
    laps: 71,
    raceDistance: 305.909,
    lapRecord: {
      time: "1:10.540",
      driver: "Valtteri Bottas",
      year: 2018,
    },
    firstGrandPrix: 1973,
    corners: 15,
    drsZones: 2,
    difficulty: "Hard",
    characteristics: ["Anti-clockwise", "Elevation Changes", "Weather Unpredictable"],
    image: "/interlagos-circuit.jpg",
    flag: "/brazil-flag.png",
    description:
      "Interlagos is known for its passionate fans, unpredictable weather, and dramatic championship moments.",
    keyCorners: [
      { name: "Senna S", number: 1, type: "S-curves" },
      { name: "Descida do Lago", number: 4, type: "Left-hander" },
      { name: "Ferradura", number: 8, type: "Hairpin" },
      { name: "Juncao", number: 12, type: "Right-hander" },
    ],
    weather: {
      averageTemp: 26,
      rainChance: 55,
      windSpeed: 14,
    },
    stats: {
      overtakes: 9.8,
      safetyCarChance: 40,
      tireWear: "Medium",
      fuelConsumption: "Medium",
    },
  },
  {
    id: 6,
    name: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    city: "Spa",
    length: 7.004,
    laps: 44,
    raceDistance: 308.052,
    lapRecord: {
      time: "1:46.286",
      driver: "Valtteri Bottas",
      year: 2018,
    },
    firstGrandPrix: 1950,
    corners: 19,
    drsZones: 2,
    difficulty: "Very Hard",
    characteristics: ["Longest Circuit", "Elevation Changes", "Weather Changes"],
    image: "/spa-circuit.jpg",
    flag: "/belgium-flag.png",
    description:
      "The longest circuit on the calendar, Spa is famous for Eau Rouge and unpredictable weather conditions.",
    keyCorners: [
      { name: "La Source", number: 1, type: "Hairpin" },
      { name: "Eau Rouge", number: 3, type: "Left-Right" },
      { name: "Raidillon", number: 4, type: "Left-hander" },
      { name: "Bus Stop", number: 19, type: "Chicane" },
    ],
    weather: {
      averageTemp: 16,
      rainChance: 50,
      windSpeed: 15,
    },
    stats: {
      overtakes: 11.2,
      safetyCarChance: 45,
      tireWear: "High",
      fuelConsumption: "High",
    },
  },
]

export function CircuitsGrid() {
  const [selectedCircuit, setSelectedCircuit] = useState<(typeof circuits)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [countryFilter, setCountryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const countries = Array.from(new Set(circuits.map((circuit) => circuit.country)))
  const difficulties = Array.from(new Set(circuits.map((circuit) => circuit.difficulty)))

  const filteredCircuits = circuits
    .filter((circuit) => {
      const matchesSearch =
        circuit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        circuit.circuit.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCountry = countryFilter === "all" || circuit.country === countryFilter
      const matchesDifficulty = difficultyFilter === "all" || circuit.difficulty === difficultyFilter
      return matchesSearch && matchesCountry && matchesDifficulty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "length":
          return b.length - a.length
        case "difficulty":
          const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3, "Very Hard": 4 }
          return (
            difficultyOrder[b.difficulty as keyof typeof difficultyOrder] -
            difficultyOrder[a.difficulty as keyof typeof difficultyOrder]
          )
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Hard":
        return "bg-orange-500"
      case "Very Hard":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <>
      <div className="space-y-4">
        {/* Filters */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search circuits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
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
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="length">Circuit Length</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Circuits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCircuits.map((circuit) => (
            <Card
              key={circuit.id}
              className="group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
              onClick={() => setSelectedCircuit(circuit)}
            >
              <CardHeader className="pb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={circuit.image || "/placeholder.svg?height=200&width=400&query=F1 racing circuit aerial view"}
                    alt={circuit.circuit}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{circuit.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <img
                        src={circuit.flag || "/placeholder.svg"}
                        alt={`${circuit.country} flag`}
                        className="h-4 w-6 rounded object-cover"
                      />
                      <span className="text-sm text-muted-foreground">
                        {circuit.city}, {circuit.country}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className={`h-2 w-2 rounded-full ${getDifficultyColor(circuit.difficulty)}`} />
                    <Badge variant="outline" className="text-xs">
                      {circuit.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Length</span>
                      <span className="font-mono text-sm font-medium">{circuit.length}km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Laps</span>
                      <span className="font-mono text-sm font-medium">{circuit.laps}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Corners</span>
                      <span className="font-mono text-sm font-medium">{circuit.corners}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">DRS Zones</span>
                      <span className="font-mono text-sm font-medium">{circuit.drsZones}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Lap Record</span>
                    <span className="font-mono text-sm font-medium">{circuit.lapRecord.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{circuit.lapRecord.driver}</span>
                    <span>{circuit.lapRecord.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {circuit.characteristics.slice(0, 3).map((char, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {char}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>Since {circuit.firstGrandPrix}</span>
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedCircuit && <CircuitModal circuit={selectedCircuit} onClose={() => setSelectedCircuit(null)} />}
    </>
  )
}
