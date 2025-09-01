import { site } from "@/content/site"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. Built with React, TailwindCSS, and Framer Motion.
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
    </footer>
  )
}
