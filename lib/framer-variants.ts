"use client"

import type { Variants } from "framer-motion"

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
}

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } },
}

export const floatIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}
