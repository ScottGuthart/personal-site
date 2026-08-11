import Image from "next/image"
import { RiDownloadLine, RiCalendarLine } from "@remixicon/react"
import { contact } from "@/lib/resume-data"

export function ResumeHeader() {
  return (
    <header>
      <div className="flex flex-col-reverse items-start gap-6 border-b border-border pb-5 sm:flex-row sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold leading-none tracking-tight text-foreground sm:text-5xl">
            {contact.name}
          </h1>
          <p className="mt-3 text-sm font-semibold text-primary">
            {contact.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-foreground">
            <span>{contact.location}</span>
            <span>{contact.phone}</span>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {contact.linkedin}
            </a>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {contact.github}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={`https://${contact.calendly}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <RiCalendarLine className="size-3.5" aria-hidden />
              Schedule a call
            </a>
            <a
              href="/resume.pdf"
              download={`${contact.name.replace(/\s+/g, "-")}-Resume.pdf`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <RiDownloadLine className="size-3.5" aria-hidden />
              Download PDF resume
            </a>
          </div>
        </div>

        <div className="h-40 w-32 shrink-0 overflow-hidden rounded-lg border border-border">
          <Image
            src="/headshot.png"
            alt={`Portrait of ${contact.name}`}
            width={132}
            height={160}
            priority
            className="h-full w-full object-cover object-[50%_30%]"
          />
        </div>
      </div>

      <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-foreground">
        {contact.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {contact.skills.map((skill, i) => (
          <span
            key={skill}
            className={
              i === 0
                ? "rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground"
                : "rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            }
          >
            {skill}
          </span>
        ))}
      </div>
    </header>
  )
}
