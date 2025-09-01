"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { site } from "@/content/site"
import { fadeInUp, scaleOnHover, staggerContainer } from "@/lib/framer-variants"
import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {site.projects.map((p) => (
          <motion.li key={p.title} variants={fadeInUp} whileHover="hover" className="group">
            <motion.article variants={scaleOnHover} className="rounded-2xl border overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-muted">
                <img
                  src={p.media || "/placeholder.svg?height=400&width=700&query=project%20preview"}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack?.map((s) => (
                    <span key={s} className="text-xs border rounded-full px-2 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {p.github && (
                    <Button asChild size="sm" variant="outline">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-1.5" /> GitHub
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <Play className="h-4 w-4 mr-1.5" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
