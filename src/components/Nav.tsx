import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      style={{ backgroundColor: 'hsl(var(--background))', borderBottom: '1px solid hsl(var(--secondary))' }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="iron-display text-xl"
            style={{ color: 'hsl(var(--accent))', letterSpacing: '0.04em' }}
          >
            KAONA
          </span>
          <span
            className="font-sans text-xs font-medium uppercase tracking-widest hidden sm:block"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            Masonry Inc
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-sans text-sm font-medium uppercase tracking-widest transition-colors"
              style={{
                color:
                  location.pathname === link.href
                    ? 'hsl(var(--accent))'
                    : 'hsl(var(--muted-foreground))',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18085721466"
            className="flex items-center gap-2 font-sans text-sm font-semibold"
            style={{ color: 'hsl(var(--foreground))' }}
          >
            <Phone size={14} style={{ color: 'hsl(var(--accent))' }} />
            (808) 572-1466
          </a>
          <Link to="/contact" className="iron-btn" style={{ padding: '0.6rem 1.25rem' }}>
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: 'hsl(var(--foreground))' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 pb-6 pt-4 flex flex-col gap-4"
          style={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--secondary))',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="iron-display text-lg"
              style={{
                color:
                  location.pathname === link.href
                    ? 'hsl(var(--accent))'
                    : 'hsl(var(--foreground))',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18085721466"
            className="iron-btn mt-2"
          >
            <Phone size={14} />
            (808) 572-1466
          </a>
        </div>
      )}
    </header>
  )
}
