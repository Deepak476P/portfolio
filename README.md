# Alekya — Artist Portfolio

A static portfolio site: home, gallery (with category filters + lightbox), about, and contact pages. No build step, no framework, no dependencies — plain HTML/CSS/JS.

## Run it locally

Any static server works, e.g. from this folder:

```
npx serve .
```

or just open `index.html` directly in a browser.

## Deploy

Pick one — all are free and need zero configuration for a static site like this:

- **Netlify** — drag this folder onto app.netlify.com/drop
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch
- **Vercel** — `vercel deploy` from this folder (or connect the repo in the dashboard)

There's no `package.json` and nothing to compile, so none of these can fail on a "build step" — it's just static files.

## Before you go live, personalize these

- `js/contact.js` — `CONTACT_EMAIL` is a placeholder (`hello@example.com`)
- `contact.html` and `index.html` — same placeholder email, plus `@artistname` Instagram handle and footer Instagram link (`https://instagram.com`) should point to a real profile
- `about.html` — the bio is intentionally generic placeholder copy; swap in real background/story
- `js/gallery.js` — artwork titles ("Artwork 01", etc.), mediums, and dimensions are placeholders; replace with real titles/details
- `pics/` — 5 of the 7 photos in this folder aren't used anywhere on the site (only 2 appear on the About page's studio section). Delete the rest or tell me where to place them.

## What was fixed/added in this pass

- `about.html` and `contact.html` were empty (0 bytes) — both are now full pages matching the site's design
- Mobile navigation was completely inaccessible below 768px (`nav{display:none}` with no alternative) — added a working hamburger menu
- The gallery's "Artwork 17" was a byte-for-byte duplicate of "Artwork 05" (both copies of the homepage's featured image) shown with a different, contradictory medium/size — removed the duplicate entry
- The gallery page's filter bar and the lightbox's caption area were styled in CSS but never built — both are now implemented and wired up
- Header branding was inconsistent ("ALEKYA" in one place, "ARTIST" / "Artist Portfolio" elsewhere) — unified to Alekya throughout
- Images totaled 34MB (`hero.jpg` alone was 5.5MB); resized and recompressed the referenced images down to ~8MB total with no visible quality loss at their display sizes
- Added a favicon, meta descriptions/Open Graph tags, `robots.txt`, and a `404.html` — none of these existed before
