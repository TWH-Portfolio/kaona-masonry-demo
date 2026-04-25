import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SECTION_SCROLL_OFFSET: Record<string, number> = {}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (!el) return
        const offset = SECTION_SCROLL_OFFSET[id] ?? 0
        if (offset) {
          const y = el.getBoundingClientRect().top + window.scrollY + offset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 80)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
