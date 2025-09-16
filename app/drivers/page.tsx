import { Navigation } from "@/components/navigation"
import { DriversGrid } from "@/components/drivers-grid"
import { DriverStats } from "@/components/driver-stats"

export default function DriversPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">F1 Drivers</h1>
            <p className="text-muted-foreground">Complete profiles and statistics for all Formula 1 drivers</p>
          </div>
          <DriverStats />
          <DriversGrid />
        </div>
      </main>
    </div>
  )
}
