"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { staggerContainer } from "@/lib/framer-variants"

type SectionProps = {
  id: string
  title?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} aria-label={title} className={cn("scroll-mt-24", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {title ? (
          <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
        ) : null}
        {children}
      </motion.div>
    </section>
  )
}
