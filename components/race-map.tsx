"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Zap } from "lucide-react"

const trackSectors = [
  { name: "Sector 1", length: "1.2km", corners: 6, difficulty: "Medium", color: "#22c55e" },
  { name: "Sector 2", length: "1.8km", corners: 8, difficulty: "Hard", color: "#f59e0b" },
  { name: "Sector 3", length: "1.3km", corners: 5, difficulty: "Easy", color: "#3b82f6" },
]

const trackEvents = [
  { lap: 23, sector: 1, event: "Fastest Lap", driver: "Max Verstappen", time: "1:11.789" },
  { lap: 31, sector: 2, event: "Overtake", driver: "Leclerc on Norris", details: "Turn 8" },
  { lap: 38, sector: 3, event: "Pit Stop", driver: "Carlos Sainz", details: "2.8s stop" },
  { lap: 42, sector: 1, event: "DRS Zone", driver: "Multiple", details: "Zone 1 Active" },
]

const drsZones = [
  { zone: 1, location: "Main Straight", length: "650m", active: true },
  { zone: 2, location: "Back Straight", length: "420m", active: false },
]

export function RaceMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Circuit de Monaco</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Track Layout Visualization */}
        <div className="relative">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
            <div className="relative h-full w-full">
              {/* Simplified Monaco track layout */}
              <svg viewBox="0 0 400 200" className="h-full w-full">
                {/* Track outline */}
                <path
                  d="M50 150 Q50 50 150 50 L250 50 Q350 50 350 100 Q350 150 250 150 L150 150 Q100 150 100 100 Q100 80 120 80 L180 80 Q200 80 200 100 Q200 120 180 120 L120 120 Q100 120 100 140 Q100 150 120 150 L50 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted-foreground"
                />
                {/* Start/Finish line */}
                <line x1="50" y1="145" x2="50" y2="155" stroke="#dc2626" strokeWidth="4" />
                {/* Sector markers */}
                <circle cx="150" cy="50" r="4" fill="#22c55e" />
                <circle cx="350" cy="100" r="4" fill="#f59e0b" />
                <circle cx="100" cy="140" r="4" fill="#3b82f6" />
                {/* DRS zones */}
                <line x1="50" y1="150" x2="120" y2="150" stroke="#10b981" strokeWidth="6" opacity="0.7" />
                <text x="85" y="140" className="text-xs fill-current" textAnchor="middle">
                  DRS
                </text>
              </svg>
              {/* Driver positions (simplified) */}
              <div className="absolute top-4 left-12 h-2 w-2 rounded-full bg-blue-600" title="Verstappen" />
              <div className="absolute top-6 left-14 h-2 w-2 rounded-full bg-red-600" title="Leclerc" />
              <div className="absolute top-8 left-16 h-2 w-2 rounded-full bg-orange-500" title="Norris" />
            </div>
          </div>
        </div>

        {/* Track Information */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">3.337km</p>
            <p className="text-sm text-muted-foreground">Track Length</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">78</p>
            <p className="text-sm text-muted-foreground">Total Laps</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">19</p>
            <p className="text-sm text-muted-foreground">Corners</p>
          </div>
        </div>

        {/* Sector Information */}
        <div className="space-y-3">
          <h4 className="font-semibold">Track Sectors</h4>
          {trackSectors.map((sector, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: sector.color }} />
                <div>
                  <p className="font-medium">{sector.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {sector.length} • {sector.corners} corners
                  </p>
                </div>
              </div>
              <Badge
                variant={
                  sector.difficulty === "Hard"
                    ? "destructive"
                    : sector.difficulty === "Medium"
                      ? "secondary"
                      : "outline"
                }
              >
                {sector.difficulty}
              </Badge>
            </div>
          ))}
        </div>

        {/* DRS Zones */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>DRS Zones</span>
          </h4>
          {drsZones.map((zone, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Zone {zone.zone}</p>
                <p className="text-sm text-muted-foreground">
                  {zone.location} • {zone.length}
                </p>
              </div>
              <Badge variant={zone.active ? "default" : "secondary"} className={zone.active ? "bg-green-600" : ""}>
                {zone.active ? "Active" : "Inactive"}
              </Badge>
            </div>
          ))}
        </div>

        {/* Recent Track Events */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span>Recent Events</span>
          </h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {trackEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    L{event.lap}
                  </Badge>
                  <span className="font-medium">{event.event}</span>
                </div>
                <div className="text-right">
                  <p className="font-medium">{event.driver}</p>
                  {event.details && <p className="text-xs text-muted-foreground">{event.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
