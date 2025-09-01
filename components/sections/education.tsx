"use client"

import { Section } from "@/components/layout/section"
import { site } from "@/content/site"

export function Education() {
  const e = site.education
  return (
    <Section id="education" title="Education">
      <div className="rounded-2xl border p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-lg font-semibold">
            {e.degree} • <span className="text-violet-600">{e.college}</span>
          </h3>
          <span className="text-sm text-muted-foreground">{e.years}</span>
        </div>
        <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
          {e.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
