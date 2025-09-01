"use client"

import { Section } from "@/components/layout/section"
import { site } from "@/content/site"

export function Experience() {
  if (!site.experience || site.experience.length === 0) return null

  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-5">
        {site.experience.map((ex) => (
          <article key={`${ex.role}-${ex.company}`} className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold">
                {ex.role} • <span className="text-violet-600">{ex.company}</span>
              </h3>
              <span className="text-sm text-muted-foreground">{ex.period}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {ex.points?.map((p: string) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
