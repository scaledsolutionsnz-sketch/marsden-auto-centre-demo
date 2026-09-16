# Marsden Auto Centre build checklist

- [x] Single-page primary experience with anchor navigation
- [x] Dedicated service pages
- [x] Mobile-first layout and responsive images
- [x] Opening animation with reduced-motion-safe CSS
- [x] Real visible service, supporting and hero imagery (temporary stock imagery clearly used for demo because client photos were not supplied)
- [x] No contact, booking or feedback forms; click-to-call and click-to-email buttons used
- [x] Ten GEO FAQ questions in answer-first sections
- [x] FAQPage, business and Service schema included where applicable
- [x] robots.txt allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot and Applebot-Extended
- [x] llms.txt and sitemap.xml included
- [x] Lazy-loaded responsive Google map
- [x] Terms and privacy pages
- [x] Social links and full NAP
- [x] No emoji icons; inline SVG menu icon
- [ ] Exact Google Place ID and direct write-review URL: limited pending verified profile access
- [ ] Opening hours: pending Conrad confirmation; site states this clearly
- [ ] Client-owned 4K workshop/team photos and logo: pending delivery
- [ ] Final FAQ, insurance, WOF, warranty and equipment sign-off: pending Conrad

## Deployment

- [x] GitHub repository created and pushed: https://github.com/scaledsolutionsnz-sketch/marsden-auto-centre-demo
- [x] Production deployment: https://marsden-auto-centre-demo.vercel.app
- [x] Live HTTP smoke checks saved in `verification/live-smoke.json`.
- [x] Live mobile smoke check: 375px, zero forms, zero horizontal overflow and ten FAQ entries.

## Verified brief

Business: Marsden Auto Centre
Phone: 09 433 0313
Email: admin@marsdenautocentre.co.nz
Address: 470 Marsden Point Road, Ruakākā 0171

Notes: Opening hours, insurer list, courtesy-car terms, exact Google Place ID and Conrad sign-off remain to be confirmed.

## Local verification

At 375px, 768px and desktop widths: no fixed-width overflow; cards use fixed aspect-ratio/object-fit; principal links are native tel/mailto; no forms are present.
