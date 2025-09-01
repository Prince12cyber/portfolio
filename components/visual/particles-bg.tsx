"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let raf = 0

    const particles = Array.from({ length: prefersReducedMotion ? 30 : 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
    }))

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
    }
    const onResize = () => {
      resize()
    }
    window.addEventListener("resize", onResize)
    resize()

    function step() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "rgba(124,58,237,0.5)" // violet
      ctx.strokeStyle = "rgba(34,211,238,0.3)" // cyan

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      // simple proximity lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 10000) {
            ctx.globalAlpha = 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [prefersReducedMotion])

  return <canvas ref={canvasRef} className="h-[40vh] w-full md:h-[55vh]" aria-hidden />
}
