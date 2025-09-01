"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { site } from "@/content/site"
import { fadeInUp, scaleOnHover, staggerContainer } from "@/lib/framer-variants"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {site.skills.map((skill) => (
          <motion.li key={skill.name} variants={fadeInUp} whileHover="hover" className="group">
            <motion.div
              variants={scaleOnHover}
              className="rounded-xl border p-4 h-full flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
