"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Settings = {
  cursorEnabled: boolean
  particlesEnabled: boolean
  setCursorEnabled: (v: boolean) => void
  setParticlesEnabled: (v: boolean) => void
}

const SettingsContext = createContext<Settings | null>(null)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [cursorEnabled, setCursorEnabled] = useState(true)
  const [particlesEnabled, setParticlesEnabled] = useState(true)

  // persist
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-settings")
    if (stored) {
      try {
        const s = JSON.parse(stored)
        if (typeof s.cursorEnabled === "boolean") setCursorEnabled(s.cursorEnabled)
        if (typeof s.particlesEnabled === "boolean") setParticlesEnabled(s.particlesEnabled)
      } catch {}
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("portfolio-settings", JSON.stringify({ cursorEnabled, particlesEnabled }))
  }, [cursorEnabled, particlesEnabled])

  const value = useMemo(
    () => ({ cursorEnabled, particlesEnabled, setCursorEnabled, setParticlesEnabled }),
    [cursorEnabled, particlesEnabled],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider")
  return ctx
}
