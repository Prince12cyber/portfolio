"use client"

import type React from "react"

import { useState } from "react"
import { Section } from "@/components/layout/section"
import { site } from "@/content/site"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  // honeypot
  website: z.string().max(0).optional(),
})

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const body = Object.fromEntries(form.entries())
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      setStatus("error")
      setLoading(false)
      return
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      if (res.ok) setStatus("success")
      else setStatus("error")
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            I’m available for internships and collaborations. Reach out via the form or connect on social.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="text-muted-foreground hover:text-foreground"
              href={`mailto:${site.contact.email}`}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              className="text-muted-foreground hover:text-foreground"
              href={site.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              className="text-muted-foreground hover:text-foreground"
              href={site.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <form className="grid gap-3" onSubmit={onSubmit}>
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <Input name="name" placeholder="Your name" required minLength={2} />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <Input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <Textarea name="message" placeholder="How can I help?" required minLength={10} rows={5} />
          </label>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </Button>
            {status === "success" && <span className="text-sm text-emerald-600">Thanks! I’ll reply soon.</span>}
            {status === "error" && (
              <span className="text-sm text-red-600">Please check your inputs and try again.</span>
            )}
          </div>
        </form>
      </div>
    </Section>
  )
}
