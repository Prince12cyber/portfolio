"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { site } from "@/content/site"
import { fadeInUp } from "@/lib/framer-variants"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-6 md:grid-cols-[200px,1fr] md:gap-10 items-start">
        <div className="relative h-40 w-40 rounded-full border overflow-hidden place-self-center md:place-self-start">
          <img src="/182605106.jpeg" alt="Portrait of Prince Kumar" className="h-full w-full object-cover" />
        </div>
        <motion.p variants={fadeInUp} className="text-pretty text-muted-foreground">
          {site.bio} I enjoy solving problems, learning new systems, and building products that deliver value.
        </motion.p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Fact label="Location" value="India (remote-friendly)" />
        <Fact label="Interests" value="Computer Vision, Backend, Modern Web Apps" />
        <Fact label="GitHub" value={<a href="https://github.com/Prince12cyber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Prince12cyber</a>} />
      </div>
    </Section>
  )
}

import { ReactNode } from "react"

function Fact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </span>
  )
}
