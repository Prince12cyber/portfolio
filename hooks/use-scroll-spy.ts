"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActiveId(id)
          }
        })
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: [0, 0.2, 0.6, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
