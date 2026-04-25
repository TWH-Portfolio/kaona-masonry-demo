import { Phone, MapPin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'hsl(220,45%,5%)',
        borderTop: '1px solid hsl(220,30%,20%)',
      }}
      className="pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="iron-display text-2xl mb-1" style={{ color: 'hsl(38,85%,55%)' }}>
              KAONA MASONRY INC
            </div>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: 'hsl(40,15%,55%)' }}
            >
              Concrete Contractor · Makawao, Maui
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(40,15%,65%)' }}>
              Foundations, driveways, retaining walls, and decorative concrete
              for Maui's upcountry and valley communities. Every pour planned,
              every finish earned.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="iron-label mb-4">Navigation</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm transition-colors hover:text-white"
                    style={{ color: 'hsl(40,15%,65%)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="iron-label mb-4">Contact</div>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+18085721466"
                  className="flex items-start gap-3 font-sans text-sm transition-colors hover:text-white"
                  style={{ color: 'hsl(40,15%,65%)' }}
                >
                  <Phone size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(38,85%,55%)' }} />
                  (808) 572-1466
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kaonamasonry.com"
                  className="flex items-start gap-3 font-sans text-sm transition-colors hover:text-white"
                  style={{ color: 'hsl(40,15%,65%)' }}
                >
                  <Mail size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(38,85%,55%)' }} />
                  info@kaonamasonry.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/maps?q=24+Pau+Hana+Rd,+Makawao,+HI+96768&output=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-sans text-sm transition-colors hover:text-white"
                  style={{ color: 'hsl(40,15%,65%)' }}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(38,85%,55%)' }} />
                  24 Pau Hana Rd<br />Makawao, HI 96768
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: '1px solid hsl(220,30%,20%)' }}
        >
          <p className="font-sans text-xs" style={{ color: 'hsl(40,15%,45%)' }}>
            &copy; {new Date().getFullYear()} Kaona Masonry Inc. All rights reserved.
          </p>
          <p className="font-sans text-xs" style={{ color: 'hsl(40,15%,45%)' }}>
            Licensed Hawaii Contractor &middot; Insured &middot; Serving Maui
          </p>
        </div>
      </div>
    </footer>
  )
}
