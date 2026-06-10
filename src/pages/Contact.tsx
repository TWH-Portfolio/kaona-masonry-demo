import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Calendar } from 'lucide-react'

const HEADER_PHOTO = 'https://images.unsplash.com/photo-1659618129784-9355ebb8ecf5?w=1400&q=80&fit=crop&auto=format'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem("company_website") as HTMLInputElement | null;
    if (honeypot && honeypot.value.trim() !== "") {
      setSubmitted(true); // silent success for bots
      return;
    }
    setSubmitted(true)
  }

  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden" style={{ height: '280px' }}>
        <img
          src={HEADER_PHOTO}
          alt="Concrete flatwork construction site on Maui"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1400"
          height="280"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,20,40,0.75)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-7xl mx-auto z-10">
          <div className="iron-label mb-2" style={{ color: 'hsl(var(--accent))' }}>Get in Touch</div>
          <h1
            className="iron-display"
            style={{ fontSize: 'clamp(2.5rem, 1rem + 5vw, 5rem)', color: 'hsl(var(--foreground))' }}
          >
            CONTACT
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2
              className="iron-display mb-8"
              style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)', color: 'hsl(var(--foreground))' }}
            >
              CALL, TEXT, OR
              <br />
              <span style={{ color: 'hsl(var(--accent))' }}>SEND A MESSAGE.</span>
            </h2>
            <p
              className="font-body leading-relaxed mb-10"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              We respond same day during business hours. Estimates are written,
              not verbal. Bring us a rough description of your project and we'll
              ask the right questions.
            </p>

            <ul className="flex flex-col gap-6 mb-10">
              <li>
                <a
                  href="tel:+18085721466"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--background))' }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div
                      className="iron-display text-lg group-hover:opacity-80 transition-opacity"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      (808) 572-1466
                    </div>
                    <div
                      className="font-sans text-xs mt-1"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      Call or text. Owner answers.
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@kaonamasonry.com"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--accent))' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div
                      className="iron-display text-lg group-hover:opacity-80 transition-opacity"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      info@kaonamasonry.com
                    </div>
                    <div
                      className="font-sans text-xs mt-1"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      Response within 24 hours
                    </div>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--accent))' }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div
                    className="iron-display text-lg"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    24 Pau Hana Rd
                    <br />
                    Makawao, HI 96768
                  </div>
                  <div
                    className="font-sans text-xs mt-1"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    Upcountry Maui · Serving all Maui County
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--accent))' }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <div
                    className="iron-display text-lg"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    Mon – Sat, 6 AM – 5 PM
                  </div>
                  <div
                    className="font-sans text-xs mt-1"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    Best reach: early morning or after 4pm
                  </div>
                </div>
              </li>
            </ul>

            {/* Google Maps embed, keyless format */}
            <div
              className="overflow-hidden"
              style={{ height: '240px', border: '1px solid hsl(var(--secondary))' }}
            >
              <iframe
                src="https://maps.google.com/maps?q=24+Pau+Hana+Rd,+Makawao,+HI+96768&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaona Masonry Inc location map"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <div
              className="p-8"
              style={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--secondary))',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="iron-display text-3xl mb-4"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    MESSAGE SENT.
                  </div>
                  <p className="font-body" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="iron-label mb-6">Free Estimate Request</div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                      <label htmlFor="company_website">Leave this field empty</label>
                      <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="font-sans text-xs uppercase tracking-widest"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="font-sans text-sm px-4 py-3 outline-none"
                          style={{
                            backgroundColor: 'hsl(var(--background))',
                            border: '1px solid hsl(var(--secondary))',
                            color: 'hsl(var(--foreground))',
                          }}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="font-sans text-xs uppercase tracking-widest"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="font-sans text-sm px-4 py-3 outline-none"
                          style={{
                            backgroundColor: 'hsl(var(--background))',
                            border: '1px solid hsl(var(--secondary))',
                            color: 'hsl(var(--foreground))',
                          }}
                          placeholder="(808) XXX-XXXX"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-sans text-xs uppercase tracking-widest"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="font-sans text-sm px-4 py-3 outline-none"
                        style={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--secondary))',
                          color: 'hsl(var(--foreground))',
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="font-sans text-xs uppercase tracking-widest"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="font-sans text-sm px-4 py-3 outline-none"
                        style={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--secondary))',
                          color: form.service ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                        }}
                      >
                        <option value="">Select a service...</option>
                        <option>Concrete Foundations</option>
                        <option>Driveways &amp; Parking</option>
                        <option>Retaining Walls</option>
                        <option>Decorative Concrete</option>
                        <option>Concrete Slabs</option>
                        <option>Masonry Work</option>
                        <option>Concrete Repair</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-sans text-xs uppercase tracking-widest"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="font-sans text-sm px-4 py-3 outline-none resize-none"
                        style={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--secondary))',
                          color: 'hsl(var(--foreground))',
                        }}
                        placeholder="Describe the job: location, rough size, timeline..."
                      />
                    </div>

                    <button type="submit" className="iron-btn w-full justify-center">
                      Send Estimate Request
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Booking placeholder */}
            <div
              className="mt-6 p-6 flex flex-col items-center justify-center text-center"
              style={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--secondary))',
                borderTop: '2px solid hsl(var(--accent))',
                minHeight: '160px',
              }}
            >
              <Calendar size={28} style={{ color: 'hsl(var(--accent))' }} className="mb-3" />
              <div
                className="iron-display text-lg mb-2"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                Online Booking
              </div>
              <p
                className="font-sans text-xs mb-4"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Schedule a site walk directly when Calendly is connected.
              </p>
              <a href="tel:+18085721466" className="iron-btn" style={{ padding: '0.6rem 1.25rem' }}>
                <Phone size={13} />
                Call to Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
