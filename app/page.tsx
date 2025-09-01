"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { CustomCursor } from "@/components/effects/custom-cursor"
import { SettingsProvider } from "@/components/context/settings-context"

export default function Page() {
  return (
    <SettingsProvider>
      <CustomCursor />
      <div id="content" />
      <Navbar />
      <main className="flex flex-col gap-24 md:gap-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SettingsProvider>
  )
}
