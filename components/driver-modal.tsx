"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Award } from "lucide-react"

interface Driver {
  id: number
  name: string
  team: string
  nationality: string
  number: number
  points: number
  wins: number
  podiums: number
  poles: number
  fastestLaps: number
  championships: number
  age: number
  debut: number
  image: string
  teamColor: string
  flag: string
  bio: string
  careerStats: {
    races: number
    wins: number
    podiums: number
    poles: number
    fastestLaps: number
    points: number
  }
}

interface DriverModalProps {
  driver: Driver
  onClose: () => void
}

export function DriverModal({ driver, onClose }: DriverModalProps) {
  const podiumRate = (driver.careerStats.podiums / driver.careerStats.races) * 100
  const winRate = (driver.careerStats.wins / driver.careerStats.races) * 100
  const poleRate = (driver.careerStats.poles / driver.careerStats.races) * 100

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={driver.image || "/placeholder.svg"} alt={driver.name} />
              <AvatarFallback className="text-lg">
                {driver.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{driver.name}</h2>
              <div className="flex items-center space-x-2">
                <img
                  src={driver.flag || "/placeholder.svg"}
                  alt={`${driver.nationality} flag`}
                  className="h-5 w-8 rounded object-cover"
                />
                <span className="text-muted-foreground">{driver.nationality}</span>
                <Badge variant="outline" style={{ borderColor: driver.teamColor, color: driver.teamColor }}>
                  #{driver.number}
                </Badge>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Driver Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Driver Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{driver.bio}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: driver.teamColor }}>
                    {driver.team}
                  </p>
                  <p className="text-sm text-muted-foreground">Current Team</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.age}</p>
                  <p className="text-sm text-muted-foreground">Age</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.debut}</p>
                  <p className="text-sm text-muted-foreground">F1 Debut</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{driver.championships}</p>
                  <p className="text-sm text-muted-foreground">Championships</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2024 Season Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span>2024 Season</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{driver.points}</p>
                  <p className="text-sm text-muted-foreground">Points</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{driver.wins}</p>
                  <p className="text-sm text-muted-foreground">Wins</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{driver.podiums}</p>
                  <p className="text-sm text-muted-foreground">Podiums</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{driver.poles}</p>
                  <p className="text-sm text-muted-foreground">Pole Positions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{driver.fastestLaps}</p>
                  <p className="text-sm text-muted-foreground">Fastest Laps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Career Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.careerStats.races}</p>
                  <p className="text-sm text-muted-foreground">Races</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{driver.careerStats.wins}</p>
                  <p className="text-sm text-muted-foreground">Career Wins</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.careerStats.podiums}</p>
                  <p className="text-sm text-muted-foreground">Career Podiums</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.careerStats.poles}</p>
                  <p className="text-sm text-muted-foreground">Career Poles</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{driver.careerStats.points}</p>
                  <p className="text-sm text-muted-foreground">Career Points</p>
                </div>
              </div>

              {/* Performance Rates */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Win Rate</span>
                    <span>{winRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={winRate} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Podium Rate</span>
                    <span>{podiumRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={podiumRate} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Pole Position Rate</span>
                    <span>{poleRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={poleRate} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
