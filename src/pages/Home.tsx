import { Link } from 'react-router-dom'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

// Confirmed working Unsplash IDs from niche guide
const HERO_PHOTO = 'https://images.unsplash.com/photo-1664462516775-95f0b70c96da?w=1200&q=80&fit=crop&auto=format'
const ABOUT_PHOTO = 'https://images.unsplash.com/photo-1608947273783-c5d1ff5771ca?w=900&q=80&fit=crop&auto=format'
const CTA_PHOTO   = 'https://images.unsplash.com/photo-1690541828600-a50a853a4a25?w=1400&q=80&fit=crop&auto=format'

const SERVICES = [
  {
    name: 'Concrete Foundations',
    desc: 'Stem walls, grade beams, slab-on-grade. Soil profile checked before every pour. Seismic-compliant work for Maui hillside and valley sites.',
    ideal: 'Homeowners, GCs, commercial developers',
  },
  {
    name: 'Driveways & Parking',
    desc: 'Residential and commercial driveways. Expansion joints cut at 24 hours. Drainage engineered before forms go up.',
    ideal: 'Homeowners, HOAs, commercial property',
  },
  {
    name: 'Retaining Walls',
    desc: 'Concrete and masonry retaining walls for Maui\'s erosion-prone slopes. Geotechnical assessment built into the process.',
    ideal: 'Hillside and agricultural properties',
  },
  {
    name: 'Decorative Concrete',
    desc: 'Stamped, stained, and polished finishes. Upcountry clients favor exposed aggregate; valley clients favor smooth stain.',
    ideal: 'Residential patios, pool decks, commercial lobbies',
  },
  {
    name: 'Concrete Slabs',
    desc: '3,500 PSI minimum mix. Sub-base compacted and vapor barrier installed standard. No shortcuts on slab prep.',
    ideal: 'Residential additions, commercial builds, agricultural use',
  },
  {
    name: 'Masonry Work',
    desc: 'Block walls, CMU construction, and concrete masonry unit repair. The "masonry" in Kaona Masonry means we go beyond pour-and-finish.',
    ideal: 'Commercial, agricultural, institutional',
  },
  {
    name: 'Concrete Repair',
    desc: 'Spall repair, crack injection, surface resurfacing. Salt air and volcanic humidity accelerate concrete deterioration on Maui. We diagnose before we patch.',
    ideal: 'Aging residential and commercial concrete',
  },
]

const WHY_ITEMS = [
  { label: '3,500 PSI Minimum', detail: 'Mix spec is non-negotiable. Not priced by grade.' },
  { label: 'Drainage Before Forms', detail: 'Water goes somewhere. We engineer where before the pour.' },
  { label: 'Soil Profile First', detail: 'Volcanic clay and upcountry peat require different prep than valley base.' },
  { label: 'Joints Cut at 24 Hours', detail: 'Control joints at the right time. Not whenever the crew comes back.' },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Site Walk', detail: 'We assess soil, drainage, and access before quoting. No blind bids.' },
  { num: '02', title: 'Written Scope', detail: 'PSI, thickness, joint spacing, finish, and timeline in writing. Every job.' },
  { num: '03', title: 'Pour Day', detail: 'Owner on site during the pour. Not a crew drop-off.' },
  { num: '04', title: 'Finish & Sign-Off', detail: 'Final walkthrough with you before we call it done.' },
]

const TESTIMONIALS = [
  {
    quote: 'Kaona poured our entire 2,800 sq ft foundation in two days. Tight schedule, no issues on inspection. The GC said it was one of the cleanest foundations he\'d seen on a hillside lot.',
    name: 'Mark T.',
    detail: 'Custom Home, Kula · March 2025',
  },
  {
    quote: 'Had a retaining wall quote from three contractors. Kaona was the only one who walked the slope first and told me what drainage I needed before the wall. That\'s the difference between a quote and an engineer.',
    name: 'Lani F.',
    detail: 'Retaining Wall, Makawao · November 2024',
  },
  {
    quote: 'Stamped concrete lanai came out perfect. They let me pick from samples on site, not just a website catalog. Owner personally walked me through the expansion joint plan before pouring.',
    name: 'Ryan K.',
    detail: 'Decorative Concrete, Pukalani · August 2024',
  },
]

const RECENT_WORK = [
  { name: 'Kula Ag Slab', town: 'Kula', scope: '4,200 sq ft commercial agricultural slab · 4" depth · 45 days' },
  { name: 'Makawao Hillside Foundation', town: 'Makawao', scope: 'Stem wall and grade beam · seismic zone D2 · 22-day pour schedule' },
  { name: 'Pukalani Driveway', town: 'Pukalani', scope: '1,800 sq ft decorative concrete driveway · stamped finish · drainage integrated' },
]

const SERVICE_TOWNS = [
  'Makawao', 'Pukalani', 'Kula', 'Paia', 'Haiku', 'Kahului',
  'Wailuku', 'Kihei', 'Wailea', 'Lahaina', 'Ulupalakua', 'Haiku', 'Spreckelsville',
]

export default function Home() {
  return (
    <main>
      {/* HERO, split layout, md:grid-cols-2, real photo right */}
      <section
        id="hero"
        className="min-h-[92vh] flex items-center"
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left, copy */}
            <div className="animate-fade-up">
              <div className="iron-label mb-5">Concrete Contractor · Makawao, Maui</div>

              <h1
                className="iron-display mb-6"
                style={{ fontSize: 'clamp(2.75rem, 1rem + 7vw, 6.5rem)' }}
              >
                POURED ON
                <br />
                <span style={{ color: 'hsl(var(--accent))' }}>MAUI SOIL.</span>
                <br />
                BUILT TO LAST.
              </h1>

              <p
                className="font-body text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Foundations, driveways, retaining walls, and masonry for upcountry
                and valley Maui. 16 years on this island. Soil profile checked
                before every pour.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:+18085721466" className="iron-btn">
                  <Phone size={15} />
                  (808) 572-1466
                </a>
                <Link to="/contact" className="iron-btn iron-btn--ghost">
                  Free Estimate
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Stats strip */}
              <div
                className="flex flex-wrap gap-8 pt-8"
                style={{ borderTop: '1px solid hsl(var(--secondary))' }}
              >
                <div className="iron-stat">
                  <div className="iron-display text-3xl" style={{ color: 'hsl(var(--accent))' }}>483</div>
                  <div className="font-sans text-xs uppercase tracking-widest mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Projects Poured
                  </div>
                </div>
                <div className="iron-stat">
                  <div className="iron-display text-3xl" style={{ color: 'hsl(var(--accent))' }}>16</div>
                  <div className="font-sans text-xs uppercase tracking-widest mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Years on Maui
                  </div>
                </div>
                <div className="iron-stat">
                  <div className="iron-display text-3xl" style={{ color: 'hsl(var(--accent))' }}>0</div>
                  <div className="font-sans text-xs uppercase tracking-widest mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Failed Inspections
                  </div>
                </div>
              </div>
            </div>

            {/* Right, photo with trust badge */}
            <div className="hidden md:block relative animate-fade-up-delay-1">
              {/* Brass corner frame (top-right) */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 z-10 pointer-events-none"
                style={{
                  borderTop: '3px solid hsl(var(--accent))',
                  borderRight: '3px solid hsl(var(--accent))',
                }}
              />

              <div className="iron-photo aspect-[4/5] overflow-hidden">
                <img
                  src={HERO_PHOTO}
                  alt="Concrete pour in progress on Maui construction site"
                  className="w-full h-full object-cover ken-burns"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="750"
                />
              </div>

              {/* Floating trust badge, bottom-left */}
              <div
                className="absolute -bottom-5 -left-5 z-10 p-4"
                style={{
                  backgroundColor: 'hsl(var(--accent))',
                  color: 'hsl(var(--background))',
                  minWidth: '160px',
                }}
              >
                <div className="iron-display text-2xl" style={{ color: 'hsl(var(--background))' }}>
                  5.0
                </div>
                <div className="font-sans text-xs font-semibold uppercase tracking-wider mt-0.5">
                  from 31 Reviews
                </div>
                <div className="font-sans text-xs mt-1 opacity-70">Google · Makawao</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFFILIATIONS STRIP */}
      <section
        style={{
          backgroundColor: 'hsl(var(--background))',
          borderTop: '1px solid hsl(var(--secondary))',
          borderBottom: '1px solid hsl(var(--secondary))',
        }}
        className="py-5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-10 justify-center md:justify-start">
            {[
              'Hawaii Licensed Contractor',
              'Fully Insured',
              'ACI Member',
              'OSHA Compliant',
              'Free Written Estimates',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 shrink-0"
                  style={{ backgroundColor: 'hsl(var(--accent))' }}
                />
                <span
                  className="font-sans text-xs font-medium uppercase tracking-widest"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="iron-label mb-4">How We Think</div>
              <h2
                className="iron-display mb-6"
                style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4rem)' }}
              >
                KNOW THE SOIL
                <br />
                <span style={{ color: 'hsl(var(--accent))' }}>BEFORE YOU POUR.</span>
              </h2>
              <p
                className="font-body leading-relaxed mb-8"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Upcountry Maui is not the same as valley Maui. Makawao's volcanic clay
                drains differently than Kihei's sandy base. Kula's elevation affects
                curing time. These aren't details we learn on the job. They're
                the job.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Every Kaona Masonry estimate starts with a site walk. We look at slope,
                soil, drainage, and existing structure before we write a number. That's
                not extra work. That's how concrete should be quoted.
              </p>
            </div>

            <div>
              {/* Why-choose branded pillars */}
              <div className="flex flex-col gap-4">
                {WHY_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="iron-card--brass-top"
                  >
                    <div
                      className="iron-display text-lg mb-1"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      {item.label}
                    </div>
                    <p className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP, 4 steps */}
      <section
        style={{
          backgroundColor: 'hsl(var(--background))',
          borderTop: '1px solid hsl(var(--secondary))',
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="iron-label mb-4">How It Works</div>
          <h2
            className="iron-display mb-12"
            style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)' }}
          >
            ONE CREW.
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>EVERY STEP.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="iron-card--brass-top relative">
                <div
                  className="iron-display text-6xl absolute top-4 right-4 select-none"
                  style={{ color: 'hsl(var(--accent) / 0.3)' }}
                >
                  {step.num}
                </div>
                <div
                  className="iron-display text-xl mb-3 relative z-10"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {step.num}
                </div>
                <div
                  className="iron-display text-lg mb-2"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {step.title}
                </div>
                <p className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES, 7 services, staggered bento */}
      <section id="services" className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="iron-label mb-4">What We Do</div>
          <h2
            className="iron-display mb-12"
            style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)' }}
          >
            483 POURS.
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>ZERO CALLBACKS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
            {SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="iron-service-card"
                style={{ backgroundColor: 'hsl(var(--background))' }}
              >
                <div
                  className="iron-display text-lg mb-1"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {svc.name}
                </div>
                <div
                  className="font-sans text-xs uppercase tracking-widest mb-3"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  Ideal for: {svc.ideal}
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/services" className="iron-btn iron-btn--ghost">
              Full Services Detail
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT WORK, named projects with metrics */}
      <section
        style={{
          backgroundColor: 'hsl(var(--background))',
          borderTop: '1px solid hsl(var(--secondary))',
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="iron-label mb-4">Recent Work</div>
          <h2
            className="iron-display mb-12"
            style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)' }}
          >
            YOUR PROJECT.
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>OUR POUR.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_WORK.map((project) => (
              <div
                key={project.name}
                className="iron-card"
                style={{ borderTop: '3px solid hsl(var(--accent))' }}
              >
                <div
                  className="iron-display text-lg mb-1"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {project.name}
                </div>
                <div
                  className="font-sans text-xs uppercase tracking-widest mb-3"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {project.town}, Maui
                </div>
                <p className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {project.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/gallery" className="iron-btn iron-btn--ghost">
              View Gallery
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS, 3 cards, dated, named */}
      <section id="reviews" className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="iron-label mb-4">Client Reviews</div>
          <h2
            className="iron-display mb-12"
            style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)' }}
          >
            5.0 FROM 31 REVIEWS.
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>ON GOOGLE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="iron-card"
                style={{ borderLeft: '3px solid hsl(var(--accent))' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: 'hsl(var(--accent))', fontSize: '1rem' }}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <blockquote
                  className="font-body text-sm leading-relaxed mb-4"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  "{t.quote}"
                </blockquote>
                <cite
                  className="font-sans text-xs not-italic font-semibold"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {t.name}
                </cite>
                <div
                  className="font-sans text-xs mt-0.5"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {t.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER, with photo */}
      <section
        style={{
          backgroundColor: 'hsl(var(--background))',
          borderTop: '1px solid hsl(var(--secondary))',
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={ABOUT_PHOTO}
              alt="Kaona Masonry retaining wall and construction site on Maui"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
              width="600"
              height="450"
            />
          </div>
          <div>
            <div className="iron-label mb-4">About the Company</div>
            <h2
              className="iron-display mb-6"
              style={{ fontSize: 'clamp(2rem, 1rem + 3vw, 3rem)' }}
            >
              POURING MAUI CONCRETE
              <br />
              <span style={{ color: 'hsl(var(--accent))' }}>SINCE 2009.</span>
            </h2>
            <p
              className="font-body leading-relaxed mb-6"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Kaona Masonry started in Makawao with residential work and grew through
              referrals. No advertising. Word moves fast among Maui's general contractors
              when a sub delivers clean work on schedule. Sixteen years later, the
              crew is still small and the standard is still the same.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Owner on site for every pour',
                'Licensed Hawaii contractor',
                'Residential, commercial, and agricultural',
                'Upcountry specialists since 2009',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: 'hsl(var(--accent))', flexShrink: 0 }} />
                  <span className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/about" className="iron-btn">
              About the Company
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE TOWNS STRIP */}
      <section
        style={{
          backgroundColor: 'hsl(var(--background))',
          borderTop: '1px solid hsl(var(--secondary))',
        }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="iron-label mb-6">Service Area</div>
          <div className="flex flex-wrap gap-3">
            {SERVICE_TOWNS.map((town) => (
              <span
                key={town}
                className="font-sans text-xs font-medium uppercase tracking-widest px-3 py-1.5"
                style={{
                  border: '1px solid hsl(var(--secondary))',
                  color: 'hsl(var(--muted-foreground))',
                }}
              >
                {town}
              </span>
            ))}
          </div>
          <p
            className="font-sans text-xs mt-4"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            Maui County · Free estimates for all service areas
          </p>
        </div>
      </section>

      {/* PRE-FOOTER CTA BAND */}
      <section
        className="relative overflow-hidden"
        style={{ height: '380px' }}
        aria-label="Get a free estimate"
      >
        <img
          src={CTA_PHOTO}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width="1400"
          height="380"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,23,42,0.72)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h2
            className="iron-display mb-4"
            style={{
              fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)',
              color: 'hsl(var(--foreground))',
              maxWidth: '700px',
            }}
          >
            YOUR DRIVEWAY.
            <br />
            YOUR TIMELINE.
            <br />
            <span style={{ color: 'hsl(var(--accent))' }}>ONE CALL.</span>
          </h2>
          <p
            className="font-sans text-sm mb-8"
            style={{ color: 'rgba(240,235,220,0.7)', maxWidth: '480px' }}
          >
            We respond same day. Estimates are written, not verbal. No surprise
            change orders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18085721466" className="iron-btn">
              <Phone size={15} />
              (808) 572-1466
            </a>
            <Link to="/contact" className="iron-btn iron-btn--ghost" style={{ color: 'hsl(var(--foreground))', borderColor: 'rgba(240,235,220,0.4)' }}>
              Request Estimate
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
