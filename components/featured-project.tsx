import { RiArrowRightUpLine, RiGithubLine } from "@remixicon/react"

export function FeaturedProject() {
  return (
    <section aria-labelledby="featured-project-title" className="border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Selected project
          </p>
          <h2 id="featured-project-title" className="text-2xl font-bold tracking-tight text-foreground">
            MovieTable
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            A public full-stack application for exploring movies through critic and audience ratings, with AI-powered recommendations and a weighted scoring experience that helps users find their next great film.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href="https://movietable.ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Visit app
            <RiArrowRightUpLine aria-hidden className="size-3.5" />
          </a>
          <a
            href="https://github.com/ScottGuthart/movietable"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <RiGithubLine aria-hidden className="size-3.5" />
            Source
          </a>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4 text-[11px] font-medium text-muted-foreground">
        <span className="rounded-full bg-muted px-2.5 py-1">AI recommendations</span>
        <span className="rounded-full bg-muted px-2.5 py-1">Critic + user ratings</span>
        <span className="rounded-full bg-muted px-2.5 py-1">Full-stack product</span>
      </div>
    </section>
  )
}
