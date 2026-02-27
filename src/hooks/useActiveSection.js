import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the id of the active section.
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '-40% 0px -50% 0px',
      threshold: options.threshold || 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, options.rootMargin, options.threshold])

  return activeSection
}
