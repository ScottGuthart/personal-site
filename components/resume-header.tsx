import Image from "next/image"
import { contact } from "@/lib/resume-data"

export function ResumeHeader() {
  return (
    <header>
      <div className="flex flex-col-reverse items-start gap-6 border-b-2 border-divider pb-5 sm:flex-row sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-foreground sm:text-5xl">
            {contact.name}
          </h1>
          <p className="mt-3 text-sm font-semibold text-accent-700">
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
          </div>
        </div>

        <div className="h-40 w-32 shrink-0 overflow-hidden">
          <Image
            src="/headshot.png"
            alt={`Portrait of ${contact.name}`}
            width={132}
            height={160}
            priority
            className="grayscale-img h-full w-full object-cover object-[50%_30%]"
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
                ? "bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground"
                : "border border-primary px-2.5 py-1 text-[11px] font-medium text-primary"
            }
          >
            {skill}
          </span>
        ))}
      </div>
    </header>
  )
}
