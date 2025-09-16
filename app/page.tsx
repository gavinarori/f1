import { Navigation } from "@/components/navigation"
import { RaceDashboard } from "@/components/race-dashboard"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <RaceDashboard />
      </main>
    </div>
  )
}
