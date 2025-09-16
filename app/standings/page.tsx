import { Navigation } from "@/components/navigation"
import { ChampionshipStandings } from "@/components/championship-standings"

export default function StandingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Championship Standings</h1>
            <p className="text-muted-foreground">Current driver and constructor championship standings</p>
          </div>
          <ChampionshipStandings />
        </div>
      </main>
    </div>
  )
}
