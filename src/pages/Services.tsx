import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

const HEADER_PHOTO = 'https://images.unsplash.com/photo-1608947273783-c5d1ff5771ca?w=1400&q=80&fit=crop&auto=format'
const CTA_PHOTO    = 'https://images.unsplash.com/photo-1586417753090-9058c92b350d?w=1400&q=80&fit=crop&auto=format'

const SERVICES = [
  {
    name: 'Concrete Foundations',
    photo: 'https://images.unsplash.com/photo-1690541828600-a50a853a4a25?w=700&q=80&fit=crop&auto=format',
    ideal: 'Homeowners, GCs, commercial developers',
    detail: [
      'Stem walls, grade beams, and slab-on-grade foundations.',
      'Seismic code compliance for Maui hillside and valley sites.',
      'Soil profile assessment standard before every pour.',
      '3,500 PSI minimum mix. Rebar placement verified before concrete.',
    ],
  },
  {
    name: 'Driveways & Parking Areas',
    photo: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=700&q=80&fit=crop&auto=format',
    ideal: 'Homeowners, HOAs, commercial property',
    detail: [
      'Residential and commercial driveways, turnarounds, and parking areas.',
      'Expansion joints cut at 24 hours post-pour.',
      'Drainage grading engineered before forms go up.',
      'Available with decorative finish upon request.',
    ],
  },
  {
    name: 'Retaining Walls',
    photo: 'https://images.unsplash.com/photo-1608947273783-c5d1ff5771ca?w=700&q=80&fit=crop&auto=format',
    ideal: 'Hillside and agricultural properties',
    detail: [
      'Concrete and CMU masonry retaining walls.',
      'Slope stability and drainage assessment before design.',
      'Tiered walls for large elevation changes.',
      'Engineered solutions for Maui\'s erosion-prone upcountry terrain.',
    ],
  },
  {
    name: 'Decorative Concrete',
    photo: 'https://images.unsplash.com/photo-1740660766677-f68d257db8b0?w=700&q=80&fit=crop&auto=format',
    ideal: 'Residential patios, pool decks, commercial lobbies',
    detail: [
      'Stamped concrete in stone, brick, and custom patterns.',
      'Stained and polished concrete finishes.',
      'Exposed aggregate for upcountry residential. Locally preferred finish.',
      'Samples reviewed on site before pour day.',
    ],
  },
  {
    name: 'Concrete Slabs',
    photo: 'https://images.unsplash.com/photo-1659618129784-9355ebb8ecf5?w=700&q=80&fit=crop&auto=format',
    ideal: 'Residential additions, commercial builds, agricultural',
    detail: [
      '3,500 PSI minimum mix, standard.',
      'Sub-base compacted and vapor barrier installed.',
      'Wire mesh or rebar per spec and load requirements.',
      'Residential, commercial, and agricultural configurations.',
    ],
  },
  {
    name: 'Masonry Work',
    photo: 'https://images.unsplash.com/photo-1597380746649-18baa8112556?w=700&q=80&fit=crop&auto=format',
    ideal: 'Commercial, agricultural, institutional',
    detail: [
      'Concrete masonry unit (CMU) block wall construction.',
      'Masonry repair and structural stabilization.',
      'Commercial and institutional masonry projects.',
      'The "masonry" in Kaona Masonry is not a marketing word.',
    ],
  },
  {
    name: 'Concrete Repair & Resurfacing',
    photo: 'https://images.unsplash.com/photo-1664462516775-95f0b70c96da?w=700&q=80&fit=crop&auto=format',
    ideal: 'Aging residential and commercial concrete',
    detail: [
      'Spall and crack repair for Maui salt air deterioration.',
      'Surface resurfacing and overlay systems.',
      'Diagnostic assessment before any repair work.',
      'Maui\'s humidity accelerates corrosion. We diagnose before we patch.',
    ],
  },
]

export default function Services() {
  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden" style={{ height: '320px' }}>
        <img
          src={HEADER_PHOTO}
          alt="Kaona Masonry retaining wall construction on Maui"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1400"
          height="320"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,20,40,0.75)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-7xl mx-auto z-10">
          <div className="iron-label mb-2" style={{ color: 'hsl(var(--accent))' }}>What We Do</div>
          <h1
            className="iron-display"
            style={{ fontSize: 'clamp(2.5rem, 1rem + 5vw, 5rem)', color: 'hsl(var(--foreground))' }}
          >
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services, alternating article layout */}
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">
          {SERVICES.map((svc, i) => (
            <article
              key={svc.name}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Photo, alternates left/right */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={svc.photo}
                  alt={svc.name}
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div
                  className="iron-label mb-2"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  Ideal for: {svc.ideal}
                </div>
                <h2
                  className="iron-display mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)',
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  {svc.name.toUpperCase()}
                </h2>
                <ul className="flex flex-col gap-3 mb-8">
                  {svc.detail.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-sans text-sm leading-relaxed"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 shrink-0"
                        style={{ backgroundColor: 'hsl(var(--accent))' }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="iron-btn">
                  Get an Estimate
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="relative overflow-hidden" style={{ height: '340px' }}>
        <img
          src={CTA_PHOTO}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width="1400"
          height="340"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,23,42,0.72)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h2
            className="iron-display mb-6"
            style={{
              fontSize: 'clamp(2rem, 1rem + 3vw, 3rem)',
              color: 'hsl(var(--foreground))',
            }}
          >
            NOT SURE WHICH SERVICE?
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>CALL AND DESCRIBE THE JOB.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18085721466" className="iron-btn">
              <Phone size={15} />
              (808) 572-1466
            </a>
            <Link
              to="/contact"
              className="iron-btn iron-btn--ghost"
              style={{ color: 'hsl(var(--foreground))', borderColor: 'rgba(240,235,220,0.4)' }}
            >
              Send a Message
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
