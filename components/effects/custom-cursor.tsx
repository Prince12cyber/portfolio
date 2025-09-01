"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"
import { useSettings } from "@/components/context/settings-context"

export function CustomCursor() {
  const { cursorEnabled } = useSettings()
  const dotRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const dot = dotRef.current
    if (!dot || !cursorEnabled || prefersReducedMotion) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    function onMove(e: MouseEvent) {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener("mousemove", onMove)

    let raf = 0
    function step() {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    // grow on interactive hover
    function grow() {
      dot.classList.add("scale-150", "bg-violet-600/30")
    }
    function shrink() {
      dot.classList.remove("scale-150", "bg-violet-600/30")
    }
    const interactive = document.querySelectorAll('a, button, [role="button"]')
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow)
        el.removeEventListener("mouseleave", shrink)
      })
    }
  }, [cursorEnabled, prefersReducedMotion])

  if (!cursorEnabled || prefersReducedMotion) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 ring-2 ring-violet-500/50 transition-transform duration-150"
    />
  )
}
