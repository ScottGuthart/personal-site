import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { experience } from "@/lib/resume-data"

export function CareerTimeline() {
  return (
    <Timeline defaultValue={experience.length}>
      {experience.map((job, index) => (
        <TimelineItem
          key={`${job.company}-${job.period}`}
          step={index + 1}
          className="ms-9 pb-8 last:pb-0"
        >
          <TimelineHeader>
            <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-[1.6rem] group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6 group-data-completed/timeline-item:bg-primary" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <TimelineTitle className="text-lg font-bold leading-tight text-foreground">
                {job.role}
                <span className="font-normal text-primary"> — {job.company}</span>
              </TimelineTitle>
              <time className="shrink-0 text-xs font-medium text-muted-foreground">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </time>
            </div>

            <TimelineIndicator className="flex size-6 items-center justify-center border-none bg-muted group-data-[orientation=vertical]/timeline:-left-[1.6rem] group-data-completed/timeline-item:bg-primary">
              <span className="size-2 rounded-full bg-muted-foreground group-data-completed/timeline-item:bg-primary-foreground" />
            </TimelineIndicator>
          </TimelineHeader>

          {job.bullets ? (
            <TimelineContent className="mt-2">
              <ul className="ml-4 list-disc space-y-1.5 text-sm leading-relaxed text-foreground/90 marker:text-primary">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </TimelineContent>
          ) : null}
        </TimelineItem>
      ))}
    </Timeline>
  )
}
