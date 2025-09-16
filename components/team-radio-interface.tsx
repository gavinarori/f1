"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Radio, Play, Pause, Volume2, VolumeX, Filter, Clock } from "lucide-react"

const radioMessages = [
  {
    id: 1,
    timestamp: "14:23:45",
    lap: 45,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    from: "engineer",
    to: "driver",
    message: "Max, you're doing great. Gap to Leclerc is 3.2 seconds. Keep pushing.",
    duration: 4.2,
    priority: "normal",
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
  },
  {
    id: 2,
    timestamp: "14:23:12",
    lap: 45,
    driver: "Charles Leclerc",
    team: "Ferrari",
    from: "driver",
    to: "engineer",
    message: "The car feels good in sector 2, but I'm losing time in the chicane.",
    duration: 3.8,
    priority: "normal",
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
  },
  {
    id: 3,
    timestamp: "14:22:58",
    lap: 44,
    driver: "Lando Norris",
    team: "McLaren",
    from: "engineer",
    to: "driver",
    message: "Lando, box this lap, box this lap. We're going to hard tires.",
    duration: 3.1,
    priority: "high",
    image: "/lando-norris-f1.png",
    teamColor: "#FF8700",
  },
  {
    id: 4,
    timestamp: "14:22:34",
    lap: 44,
    driver: "Carlos Sainz",
    team: "Ferrari",
    from: "driver",
    to: "engineer",
    message: "I have a vibration on the front left. Is everything okay?",
    duration: 2.9,
    priority: "high",
    image: "/carlos-sainz-f1.png",
    teamColor: "#DC0000",
  },
  {
    id: 5,
    timestamp: "14:22:01",
    lap: 44,
    driver: "Oscar Piastri",
    team: "McLaren",
    from: "engineer",
    to: "driver",
    message: "Oscar, DRS is available. Use it on the main straight.",
    duration: 2.5,
    priority: "normal",
    image: "/oscar-piastri-f1.png",
    teamColor: "#FF8700",
  },
  {
    id: 6,
    timestamp: "14:21:47",
    lap: 43,
    driver: "Lewis Hamilton",
    team: "Mercedes",
    from: "driver",
    to: "engineer",
    message: "The balance is much better now. I can push harder.",
    duration: 3.3,
    priority: "normal",
    image: "/lewis-hamilton-f1.jpg",
    teamColor: "#00D2BE",
  },
  {
    id: 7,
    timestamp: "14:21:15",
    lap: 43,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    from: "engineer",
    to: "driver",
    message: "Max, we need to manage the tires. Bring the pace down by 2 tenths.",
    duration: 4.1,
    priority: "normal",
    image: "/max-verstappen-f1-driver.jpg",
    teamColor: "#0600EF",
  },
  {
    id: 8,
    timestamp: "14:20:52",
    lap: 43,
    driver: "Charles Leclerc",
    team: "Ferrari",
    from: "engineer",
    to: "driver",
    message: "Charles, yellow flag in sector 2. Be careful through turns 8 and 9.",
    duration: 3.7,
    priority: "high",
    image: "/charles-leclerc-f1.png",
    teamColor: "#DC0000",
  },
]

const teams = [
  { name: "All Teams", value: "all" },
  { name: "Red Bull Racing", value: "Red Bull Racing" },
  { name: "Ferrari", value: "Ferrari" },
  { name: "McLaren", value: "McLaren" },
  { name: "Mercedes", value: "Mercedes" },
]

const priorities = [
  { name: "All Messages", value: "all" },
  { name: "High Priority", value: "high" },
  { name: "Normal", value: "normal" },
]

export function TeamRadioInterface() {
  const [selectedTeam, setSelectedTeam] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<number | null>(null)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const filteredMessages = radioMessages.filter((message) => {
    const teamMatch = selectedTeam === "all" || message.team === selectedTeam
    const priorityMatch = selectedPriority === "all" || message.priority === selectedPriority
    return teamMatch && priorityMatch
  })

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      const interval = setInterval(() => {
        const randomMessage = filteredMessages[Math.floor(Math.random() * filteredMessages.length)]
        setCurrentMessage(randomMessage.id)
        setIsPlaying(true)
        setTimeout(() => {
          setIsPlaying(false)
          setCurrentMessage(null)
        }, randomMessage.duration * 1000)
      }, 8000)

      return () => clearInterval(interval)
    }
  }, [autoPlay, isPlaying, filteredMessages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [filteredMessages])

  const playMessage = (messageId: number) => {
    if (currentMessage === messageId && isPlaying) {
      setIsPlaying(false)
      setCurrentMessage(null)
    } else {
      const message = radioMessages.find((m) => m.id === messageId)
      if (message) {
        setCurrentMessage(messageId)
        setIsPlaying(true)
        setTimeout(() => {
          setIsPlaying(false)
          setCurrentMessage(null)
        }, message.duration * 1000)
      }
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "normal":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Radio Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Radio className="h-5 w-5 text-primary" />
            <span>Radio Controls</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Team Filter</label>
              <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((team) => (
                    <SelectItem key={team.value} value={team.value}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Volume</label>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setIsMuted(!isMuted)} className="p-2">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                  disabled={isMuted}
                />
                <span className="text-xs text-muted-foreground w-8">{isMuted ? 0 : volume[0]}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Auto Play</label>
              <Button
                variant={autoPlay ? "default" : "outline"}
                onClick={() => setAutoPlay(!autoPlay)}
                className="w-full"
              >
                {autoPlay ? "Stop Auto" : "Start Auto"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radio Messages */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Live Team Radio</span>
            </CardTitle>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 rounded-lg border p-4 transition-all ${
                  currentMessage === message.id && isPlaying
                    ? "bg-primary/10 border-primary/50 shadow-md"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={message.image || "/placeholder.svg"} alt={message.driver} />
                    <AvatarFallback>
                      {message.driver
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playMessage(message.id)}
                    className="p-1 h-8 w-8"
                    disabled={isMuted}
                  >
                    {currentMessage === message.id && isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{message.driver}</h4>
                      <Badge variant="outline" style={{ borderColor: message.teamColor, color: message.teamColor }}>
                        {message.team}
                      </Badge>
                      <div className={`h-2 w-2 rounded-full ${getPriorityColor(message.priority)}`} />
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        L{message.lap}
                      </Badge>
                      <span>{message.timestamp}</span>
                      <span>{message.duration}s</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Badge variant={message.from === "driver" ? "secondary" : "outline"} className="text-xs">
                      {message.from === "driver" ? "Driver" : "Engineer"}
                    </Badge>
                    <span>→</span>
                    <Badge variant={message.to === "driver" ? "secondary" : "outline"} className="text-xs">
                      {message.to === "driver" ? "Driver" : "Engineer"}
                    </Badge>
                  </div>

                  <p className="text-sm leading-relaxed">{message.message}</p>

                  {currentMessage === message.id && isPlaying && (
                    <div className="flex items-center space-x-2 text-xs text-primary">
                      <div className="flex space-x-1">
                        <div className="h-1 w-1 rounded-full bg-primary animate-bounce" />
                        <div
                          className="h-1 w-1 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="h-1 w-1 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                      <span>Playing...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>

      {/* Radio Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredMessages.length}</div>
            <p className="text-xs text-muted-foreground">In current session</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {filteredMessages.filter((m) => m.priority === "high").length}
            </div>
            <p className="text-xs text-muted-foreground">Critical communications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Most Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Red Bull</div>
            <p className="text-xs text-muted-foreground">Team communications</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
