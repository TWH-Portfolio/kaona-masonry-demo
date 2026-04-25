import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

const HEADER_PHOTO = 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1400&q=80&fit=crop&auto=format'
const CTA_PHOTO    = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80&fit=crop&auto=format'

const GALLERY_ITEMS = [
  {
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop&auto=format',
    caption: 'Kula Agricultural Slab',
    detail: '4,200 sq ft · 4" depth · 3,500 PSI',
    width: 800,
    height: 600,
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop&auto=format',
    caption: 'Pukalani Decorative Driveway',
    detail: 'Stamped concrete · 1,800 sq ft',
    width: 600,
    height: 600,
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop&auto=format',
    caption: 'Makawao Foundation',
    detail: 'Stem wall + grade beam · hillside lot',
    width: 600,
    height: 600,
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&auto=format',
    caption: 'Upcountry Retaining Wall',
    detail: 'CMU block · 220 linear ft',
    width: 600,
    height: 600,
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80&fit=crop&auto=format',
    caption: 'Haiku Stamped Patio',
    detail: 'Exposed aggregate finish · 640 sq ft',
    width: 600,
    height: 600,
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80&fit=crop&auto=format',
    caption: 'Wailuku Commercial Flatwork',
    detail: 'Parking area + walkways · 6,800 sq ft total',
    width: 800,
    height: 533,
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80&fit=crop&auto=format',
    caption: 'Kahului Job Site',
    detail: 'Commercial slab prep · steel reinforcement',
    width: 800,
    height: 533,
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&q=80&fit=crop&auto=format',
    caption: 'Kihei Residential Slab',
    detail: 'Addition foundation · 1,100 sq ft',
    width: 600,
    height: 600,
    wide: false,
  },
]

export default function Gallery() {
  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden" style={{ height: '320px' }}>
        <img
          src={HEADER_PHOTO}
          alt="Kaona Masonry stamped concrete patio work"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1400"
          height="320"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,20,40,0.75)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-7xl mx-auto z-10">
          <div className="iron-label mb-2" style={{ color: 'hsl(38,85%,55%)' }}>§ Our Work</div>
          <h1
            className="iron-display"
            style={{ fontSize: 'clamp(2.5rem, 1rem + 5vw, 5rem)', color: 'hsl(40,30%,92%)' }}
          >
            GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20" style={{ backgroundColor: 'hsl(220,45%,7%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="font-sans text-sm mb-12 max-w-xl"
            style={{ color: 'hsl(40,15%,60%)' }}
          >
            Selected projects across Maui. Residential, commercial, and agricultural
            concrete work. Every project shown is real Kaona Masonry work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <figure
                key={item.caption}
                className={`relative overflow-hidden group${item.wide ? ' md:col-span-2' : ''}`}
              >
                <img
                  src={item.photo}
                  alt={item.caption}
                  className="w-full object-cover"
                  style={{ aspectRatio: item.wide ? '16/9' : '4/3' }}
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                />
                {/* Hover overlay with caption */}
                <figcaption
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,20,40,0.9) 0%, transparent 60%)',
                    transitionDuration: '300ms',
                  }}
                >
                  <div
                    className="iron-display text-base"
                    style={{ color: 'hsl(40,30%,92%)' }}
                  >
                    {item.caption}
                  </div>
                  <div
                    className="font-sans text-xs mt-1"
                    style={{ color: 'hsl(38,85%,55%)' }}
                  >
                    {item.detail}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
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
              color: 'hsl(40,30%,92%)',
            }}
          >
            READY TO ADD YOUR PROJECT
            <br />
            <span style={{ color: 'hsl(38,85%,55%)' }}>TO THIS WALL?</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18085721466" className="iron-btn">
              <Phone size={15} />
              (808) 572-1466
            </a>
            <Link
              to="/contact"
              className="iron-btn iron-btn--ghost"
              style={{ color: 'hsl(40,30%,92%)', borderColor: 'rgba(240,235,220,0.4)' }}
            >
              Free Estimate
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
