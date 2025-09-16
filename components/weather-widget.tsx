"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun } from "lucide-react"

const weatherData = {
  condition: "Sunny",
  temperature: 24,
  humidity: 45,
  windSpeed: 12,
  trackTemp: 42,
  icon: Sun,
}

export function WeatherWidget() {
  const WeatherIcon = weatherData.icon

  return (
    <Card className="w-48">
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <WeatherIcon className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">{weatherData.condition}</p>
              <p className="text-xs text-muted-foreground">Track: {weatherData.trackTemp}°C</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{weatherData.temperature}°C</p>
            <div className="flex space-x-1">
              <Badge variant="outline" className="text-xs">
                {weatherData.humidity}%
              </Badge>
              <Badge variant="outline" className="text-xs">
                {weatherData.windSpeed}km/h
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
