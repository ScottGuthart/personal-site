import { earlierRoles, education, publications } from "@/lib/resume-data"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-t border-border pt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-foreground">
      {children}
    </h2>
  )
}

export function EarlierRoles() {
  return (
    <section>
      <SectionHeading>Earlier — Clinical &amp; Research</SectionHeading>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-[1fr_auto]">
        {earlierRoles.map((role) => (
          <div
            key={role.role + role.period}
            className="grid grid-cols-1 gap-x-4 sm:col-span-2 sm:grid-cols-subgrid sm:items-baseline"
          >
            <dt className="text-sm leading-snug text-foreground">
              <strong className="font-bold">{role.role}</strong> — {role.detail}
            </dt>
            <dd className="text-xs text-muted-foreground sm:text-right">{role.period}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Education() {
  return (
    <section>
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.school} className="text-sm leading-snug">
            <div className="font-bold text-foreground">{edu.school}</div>
            <div className="text-foreground/90">{edu.degree}</div>
            <div className="text-xs text-muted-foreground">{edu.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Publications() {
  return (
    <section>
      <SectionHeading>Publications</SectionHeading>
      <ul className="ml-4 list-disc space-y-1.5 text-[13px] leading-snug text-foreground/90 marker:text-primary">
        {publications.map((pub) => (
          <li key={pub}>{pub}</li>
        ))}
      </ul>
    </section>
  )
}
