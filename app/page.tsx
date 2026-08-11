import { ResumeHeader } from "@/components/resume-header"
import { CareerTimeline } from "@/components/career-timeline"
import { EarlierRoles, Education, Publications } from "@/components/resume-sections"
import { CosmosFrame } from "@/components/cosmos-frame"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
      <ResumeHeader />

      <section className="mt-10">
        <h2 className="mb-8 border-t border-border pt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-foreground">
          Experience
        </h2>
        <CareerTimeline />
      </section>

      <div className="mt-10">
        <EarlierRoles />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Education />
        <Publications />
      </div>

      <div className="mt-14 flex justify-center border-t border-border pt-10 sm:justify-end">
        <CosmosFrame />
      </div>
    </main>
  )
}
