# DEPLOY — Kaona Masonry Inc Demo 1

**Lovable project URL:** TBD (batch build — no Lovable project created)
**GitHub repo:** https://github.com/TWH-Portfolio/kaona-masonry-demo
**Built:** 2026-04-24 (batch run)
**Style:** Industrial × Iron-Brass
**Tier:** Starter (5 pages, locked)

---

## Deployment (Cloudflare Pages — primary for GitHub-only builds)

1. Log in to Cloudflare dashboard → Pages → Create Application → Connect to Git
2. Select repo: `TWH-Portfolio/kaona-masonry-demo`
3. Build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy

After deploy, update Supabase `no_website_leads` row:
- `demo_url` = the Cloudflare Pages URL
- `demo_built` = true

---

## GA4 swap (after client signs)

In `index.html`:
1. Uncomment the GA4 script block
2. Replace `G-XXXXXXXXXX` with the real GA4 measurement ID

---

## Form wiring (after client signs)

Contact form in `src/pages/Contact.tsx` handles submission locally (sets `submitted` state).
To wire to a real endpoint:

**Option 1 — Web3Forms (free tier):**
```tsx
// Replace handleSubmit with:
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...form, access_key: 'CLIENT_ACCESS_KEY' }),
})
```

**Option 2 — Formspree:**
Change `<form onSubmit={handleSubmit}>` to `<form action="https://formspree.io/f/CLIENT_ID" method="POST">` and remove the controlled-input pattern.

---

## Pre-launch checklist

- [ ] GA4 script uncommented and real ID inserted
- [ ] Contact form wired (Web3Forms or Formspree)
- [ ] Calendly link connected (replace placeholder section in Contact.tsx)
- [ ] Email `info@kaonamasonry.com` confirmed real (placeholder — verify with client)
- [ ] All 5 pages load without console errors
- [ ] Mobile layout verified at 375px
- [ ] Supabase `demo_url` updated

---

## Client handoff notes

- Phone is real: (808) 572-1466 — pulled from Google Maps listing
- Address is real: 24 Pau Hana Rd, Makawao, HI 96768
- Email is placeholder: `info@kaonamasonry.com` — confirm with client before launch
- Google Maps embed is keyless format — no API key required
- Testimonials are placeholder (real names not confirmed) — client provides real testimonial text
- Stats (483 projects, 17 years, 31 reviews) are placeholder approximations from Google listing age — client confirms

---

## When the client says yes

If this lead converts and wants to move forward with this site as their production build:

1. Run `/demo-to-client kaona-masonry` — NOT `/build-client`
2. Have the Lovable project URL ready if one was created (it's at the top of this file)
3. `/demo-to-client` will preserve the approved design and swap in real content

Do NOT rebuild from scratch. The client approved this design — honor it.
