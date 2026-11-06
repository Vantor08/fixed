# Vallore — Shopify Theme

Branded hormonal + cortisol support store ("feel like yourself again").

## Structure
- `assets/` — vallore.css (brand styles), vallore.js (inline SVG icons + section interactions)
- `config/` — settings_schema.json, settings_data.json (brand colors)
- `layout/` — theme.liquid (loads fonts, CSS, JS; renders announcement + header + footer on every page)
- `locales/` — en.default.json
- `sections/` — every store section as an editable Liquid section with {% schema %}
- `snippets/` — (reserved)
- `templates/` — index.json (homepage), product.json (product page), plus standard page templates

## Homepage order (templates/index.json)
home-hero → trust-marquee → is-this-you → reframe → featured-teaser → benefits-trio → reviews-strip → guarantee-band

## Product page order (templates/product.json)
product-hero → trust-marquee → self-check → reframe → value-handled → goodness-inside → vs-cabinet → how-it-works → timeline → formula-review → social-proof → offer-kits → guarantee-band → faq → founder → final-cta

## Deploy
1. Push this folder to a GitHub repo (folders must sit at the repo root).
2. Shopify admin → Online Store → Themes → Add theme → Connect from GitHub → pick the repo/branch.
3. Customize: all text, images, colors, and list items (ingredients, kits, reviews, FAQ) are editable in the theme editor.

## Before launch
Replace placeholders: real product images, real reviews/ratings, final prices, lab results/endorsement, and wire the offer bundles + subscription to your product/variants and a subscription app.
