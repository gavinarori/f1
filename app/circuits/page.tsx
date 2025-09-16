import { Navigation } from "@/components/navigation"
import { CircuitsGrid } from "@/components/circuits-grid"
import { CircuitStats } from "@/components/circuit-stats"

export default function CircuitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">F1 Circuits</h1>
            <p className="text-muted-foreground">
              Explore all Formula 1 racing circuits with detailed information and statistics
            </p>
          </div>
          <CircuitStats />
          <CircuitsGrid />
        </div>
      </main>
    </div>
  )
}
