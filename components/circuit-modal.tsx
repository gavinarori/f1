"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin, Gauge, TrendingUp, Thermometer, CloudRain } from "lucide-react"

interface Circuit {
  id: number
  name: string
  circuit: string
  country: string
  city: string
  length: number
  laps: number
  raceDistance: number
  lapRecord: {
    time: string
    driver: string
    year: number
  }
  firstGrandPrix: number
  corners: number
  drsZones: number
  difficulty: string
  characteristics: string[]
  image: string
  flag: string
  description: string
  keyCorners: Array<{
    name: string
    number: number
    type: string
  }>
  weather: {
    averageTemp: number
    rainChance: number
    windSpeed: number
  }
  stats: {
    overtakes: number
    safetyCarChance: number
    tireWear: string
    fuelConsumption: string
  }
}

interface CircuitModalProps {
  circuit: Circuit
  onClose: () => void
}

export function CircuitModal({ circuit, onClose }: CircuitModalProps) {
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

  const getTireWearColor = (wear: string) => {
    switch (wear) {
      case "Low":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "High":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-4">
            <img
              src={circuit.flag || "/placeholder.svg"}
              alt={`${circuit.country} flag`}
              className="h-8 w-12 rounded object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{circuit.name}</h2>
              <p className="text-muted-foreground">{circuit.circuit}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Circuit Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={circuit.image || "/placeholder.svg?height=400&width=800&query=F1 racing circuit aerial view"}
              alt={circuit.circuit}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circuit Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Circuit Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{circuit.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{circuit.length}km</p>
                  <p className="text-sm text-muted-foreground">Circuit Length</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{circuit.laps}</p>
                  <p className="text-sm text-muted-foreground">Race Laps</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{circuit.corners}</p>
                  <p className="text-sm text-muted-foreground">Corners</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{circuit.firstGrandPrix}</p>
                  <p className="text-sm text-muted-foreground">First Grand Prix</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`h-3 w-3 rounded-full ${getDifficultyColor(circuit.difficulty)}`} />
                <span className="font-medium">Difficulty: {circuit.difficulty}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {circuit.characteristics.map((char, index) => (
                  <Badge key={index} variant="secondary">
                    {char}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Lap Record */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  <span>Lap Record</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold font-mono text-primary">{circuit.lapRecord.time}</p>
                  <p className="text-muted-foreground">{circuit.lapRecord.driver}</p>
                  <p className="text-sm text-muted-foreground">{circuit.lapRecord.year}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Race Distance</span>
                    <span className="font-mono text-sm">{circuit.raceDistance}km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">DRS Zones</span>
                    <span className="font-mono text-sm">{circuit.drsZones}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span>Weather Conditions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">{circuit.weather.averageTemp}°C</p>
                    <p className="text-xs text-muted-foreground">Avg Temp</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{circuit.weather.rainChance}%</p>
                    <p className="text-xs text-muted-foreground">Rain Chance</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{circuit.weather.windSpeed}</p>
                    <p className="text-xs text-muted-foreground">Wind km/h</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-1">
                      <CloudRain className="h-4 w-4" />
                      <span>Rain Probability</span>
                    </span>
                    <span>{circuit.weather.rainChance}%</span>
                  </div>
                  <Progress value={circuit.weather.rainChance} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Corners */}
          <Card>
            <CardHeader>
              <CardTitle>Key Corners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {circuit.keyCorners.map((corner, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{corner.name}</p>
                      <p className="text-sm text-muted-foreground">{corner.type}</p>
                    </div>
                    <Badge variant="outline">Turn {corner.number}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Race Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Race Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{circuit.stats.overtakes}</p>
                  <p className="text-sm text-muted-foreground">Avg Overtakes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{circuit.stats.safetyCarChance}%</p>
                  <p className="text-sm text-muted-foreground">Safety Car</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${getTireWearColor(circuit.stats.tireWear)}`}>
                    {circuit.stats.tireWear}
                  </p>
                  <p className="text-sm text-muted-foreground">Tire Wear</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${getTireWearColor(circuit.stats.fuelConsumption)}`}>
                    {circuit.stats.fuelConsumption}
                  </p>
                  <p className="text-sm text-muted-foreground">Fuel Usage</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
