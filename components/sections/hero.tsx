"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/framer-variants"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"
import { useSettings } from "@/components/context/settings-context"

const ParticlesBg = dynamic(() => import("../visual/particles-bg").then((m) => m.ParticlesBg), { ssr: false })

export function Hero() {
  const { particlesEnabled } = useSettings()

  return (
    <section id="home" className="relative overflow-hidden">
      {particlesEnabled ? (
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <ParticlesBg />
        </div>
      ) : null}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 md:py-28 grid gap-8"
        >
          <motion.p variants={fadeInUp} className="text-sm font-medium text-cyan-400">
            {"<Java / MERN Developer />"}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-pretty text-4xl md:text-6xl font-semibold leading-tight">
            Hi, I’m <span className="text-violet-600">{site.name}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="max-w-2xl text-base md:text-lg text-muted-foreground">
            {site.bio}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
            <TechBadge label="Java" />
            <TechBadge label="Python" />
            <TechBadge label="MongoDB" />
            <TechBadge label="Express" />
            <TechBadge label="React" />
            <TechBadge label="Node.js" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground hover:text-foreground">
      {label}
    </span>
  )
}
