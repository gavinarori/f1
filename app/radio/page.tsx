import { Navigation } from "@/components/navigation"
import { TeamRadioInterface } from "@/components/team-radio-interface"

export default function TeamRadioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Team Radio</h1>
            <p className="text-muted-foreground">Live team communications and radio messages from the pit wall</p>
          </div>
          <TeamRadioInterface />
        </div>
      </main>
    </div>
  )
}
