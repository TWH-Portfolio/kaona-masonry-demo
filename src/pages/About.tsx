import { Link } from 'react-router-dom'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const HEADER_PHOTO = 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80&fit=crop&auto=format'
const ABOUT_PHOTO  = 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=900&q=80&fit=crop&auto=format'
const CTA_PHOTO    = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&fit=crop&auto=format'

const CREDENTIALS = [
  'Hawaii Licensed Contractor',
  'Fully Insured, General Liability and Workers Comp',
  'ACI (American Concrete Institute) Member',
  'OSHA Compliant, all crew trained',
  'Bonded for commercial work',
]

export default function About() {
  return (
    <main>
      {/* Page header with photo */}
      <section className="relative overflow-hidden" style={{ height: '320px' }}>
        <img
          src={HEADER_PHOTO}
          alt="Construction equipment at a Maui job site"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1400"
          height="320"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,20,40,0.75)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-7xl mx-auto z-10">
          <div className="iron-label mb-2" style={{ color: 'hsl(38,85%,55%)' }}>§ Who We Are</div>
          <h1
            className="iron-display"
            style={{ fontSize: 'clamp(2.5rem, 1rem + 5vw, 5rem)', color: 'hsl(40,30%,92%)' }}
          >
            ABOUT KAONA MASONRY
          </h1>
        </div>
      </section>

      {/* Main story */}
      <section className="py-20" style={{ backgroundColor: 'hsl(220,45%,7%)' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="iron-display mb-6"
              style={{ fontSize: 'clamp(1.75rem, 1rem + 3vw, 3rem)', color: 'hsl(40,30%,92%)' }}
            >
              POURING MAUI CONCRETE
              <br />
              <span style={{ color: 'hsl(38,85%,55%)' }}>SINCE 2009.</span>
            </h2>
            <div
              className="flex flex-col gap-5 font-body leading-relaxed"
              style={{ color: 'hsl(40,15%,70%)' }}
            >
              <p>
                Kaona Masonry started in Makawao with one truck and residential
                work. No website, no advertising. Built on referrals from
                general contractors who knew the difference between a clean
                pour and a problem pour.
              </p>
              <p>
                Seventeen years later, the setup is the same. Small crew. Owner
                on site during pours. Written scope on every job, not a verbal
                handshake and a hope.
              </p>
              <p>
                We work across Maui. Upcountry, valley, coastal. Each zone has
                its own soil profile, its own drainage considerations, its own
                code requirements. We've poured in Kula's volcanic clay and
                Kihei's sandy base. The pour looks the same. The prep is different
                every time.
              </p>
              <p>
                Concrete is patient. It waits for whatever mistake was made in
                prep to surface. That's why Kaona Masonry's first site visit is
                never about pricing. It's about understanding what we're
                working with.
              </p>
            </div>
          </div>

          <div>
            <img
              src={ABOUT_PHOTO}
              alt="Decorative concrete and masonry work — stamped concrete finish"
              className="w-full object-cover mb-8"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
              width="600"
              height="450"
            />

            {/* Credentials */}
            <div className="iron-label mb-4">Credentials & Licenses</div>
            <div className="flex flex-col gap-3">
              {CREDENTIALS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: 'hsl(38,85%,55%)' }}
                  />
                  <span className="font-sans text-sm" style={{ color: 'hsl(40,15%,70%)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          backgroundColor: 'hsl(220,40%,10%)',
          borderTop: '1px solid hsl(220,30%,20%)',
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '483', label: 'Projects Completed' },
              { stat: '17', label: 'Years on Maui' },
              { stat: '0', label: 'Failed Inspections' },
              { stat: '5.0', label: 'Google Rating · 31 Reviews' },
            ].map(({ stat, label }) => (
              <div key={label} className="iron-stat">
                <div
                  className="iron-display text-4xl"
                  style={{ color: 'hsl(38,85%,55%)' }}
                >
                  {stat}
                </div>
                <div
                  className="font-sans text-xs uppercase tracking-widest mt-2"
                  style={{ color: 'hsl(40,15%,55%)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section
        className="relative overflow-hidden"
        style={{ height: '340px' }}
      >
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
            READY TO START?
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
