"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Gauge, Trophy, TrendingUp } from "lucide-react"

const circuitStats = {
  totalCircuits: 24,
  longestCircuit: { name: "Spa-Francorchamps", length: 7.004 },
  shortestCircuit: { name: "Monaco", length: 3.337 },
  fastestLap: { circuit: "Monza", time: "1:21.046", driver: "Rubens Barrichello" },
  mostCorners: { circuit: "Suzuka", corners: 18 },
  averageLength: 5.2,
  streetCircuits: 4,
  historicCircuits: 8,
}

export function CircuitStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Circuits</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{circuitStats.totalCircuits}</div>
          <p className="text-xs text-muted-foreground">Including {circuitStats.streetCircuits} street circuits</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Longest Circuit</CardTitle>
          <Gauge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{circuitStats.longestCircuit.length}km</div>
          <p className="text-xs text-muted-foreground">{circuitStats.longestCircuit.name}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Fastest Lap</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">{circuitStats.fastestLap.time}</div>
          <p className="text-xs text-muted-foreground">{circuitStats.fastestLap.circuit}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Historic Venues</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{circuitStats.historicCircuits}</div>
          <p className="text-xs text-muted-foreground">Since 1950s</p>
        </CardContent>
      </Card>
    </div>
  )
}
