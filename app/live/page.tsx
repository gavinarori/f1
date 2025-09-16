import { Navigation } from "@/components/navigation"
import { LiveRaceTracker } from "@/components/live-race-tracker"
import { RaceMap } from "@/components/race-map"
import { PitStopTracker } from "@/components/pit-stop-tracker"
import { OvertakeTracker } from "@/components/overtake-tracker"

export default function LiveRacePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Live Race Tracking</h1>
            <p className="text-muted-foreground">Real-time race data, positions, and track events</p>
          </div>
          <LiveRaceTracker />
          <div className="grid gap-6 lg:grid-cols-2">
            <RaceMap />
            <div className="space-y-6">
              <PitStopTracker />
              <OvertakeTracker />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
