"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { Moon, Sun, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useSettings } from "@/components/context/settings-context"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const

export function Navbar() {
  const activeId = useScrollSpy(
    sections.map((s) => s.id),
    120,
  )
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const { cursorEnabled, particlesEnabled, setCursorEnabled, setParticlesEnabled } = useSettings()

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight text-xl">
          <span className="text-violet-600">P</span>K
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`text-sm transition-colors ${
                    activeId === s.id ? "text-violet-600 font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={activeId === s.id ? "page" : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <details className="relative">
              <summary className="cursor-pointer list-none px-3 py-2 rounded-md border text-sm">Settings</summary>
              <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-3 shadow">
                <label className="flex items-center justify-between text-sm py-1.5">
                  <span>Custom cursor</span>
                  <input
                    type="checkbox"
                    checked={cursorEnabled}
                    onChange={(e) => setCursorEnabled(e.target.checked)}
                    aria-label="Toggle custom cursor"
                  />
                </label>
                <label className="flex items-center justify-between text-sm py-1.5">
                  <span>Particles</span>
                  <input
                    type="checkbox"
                    checked={particlesEnabled}
                    onChange={(e) => setParticlesEnabled(e.target.checked)}
                    aria-label="Toggle particles background"
                  />
                </label>
              </div>
            </details>
            <Button asChild variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-10">
              <ul className="grid gap-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block py-1 ${activeId === s.id ? "text-violet-600 font-medium" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="secondary">
                  Toggle theme
                </Button>
                <Button asChild variant="outline">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
                <div className="mt-2 grid gap-2">
                  <label className="flex items-center justify-between text-sm">
                    <span>Custom cursor</span>
                    <input
                      type="checkbox"
                      checked={cursorEnabled}
                      onChange={(e) => setCursorEnabled(e.target.checked)}
                      aria-label="Toggle custom cursor"
                    />
                  </label>
                  <label className="flex items-center justify-between text-sm">
                    <span>Particles</span>
                    <input
                      type="checkbox"
                      checked={particlesEnabled}
                      onChange={(e) => setParticlesEnabled(e.target.checked)}
                      aria-label="Toggle particles background"
                    />
                  </label>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
