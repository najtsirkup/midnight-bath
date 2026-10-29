# KHIS Bath — project rules

## Meta Pixel & consent
- The Meta Pixel (ID 1410544234628312) loads only via `src/lib/meta-pixel.ts`, never in `index.html`; it is gated on advertising consent (`src/lib/consent.ts`). Why: EU/EEA/UK/CH visitors must explicitly accept before any ad measurement; a refusal must also stop future sends.
- Regional consent route: cookie banner shows only in consent regions or when region lookup fails (fail-closed to banner). Region comes from same-origin `/cdn-cgi/trace`, falling back to `/geo` (Netlify edge function in `netlify/edge-functions/`). Region is cached per page visit; consent is re-read on every send.
- Do not add a `<noscript>` pixel fallback: it cannot respect consent and would transmit for visitors who declined. Why: a denied consent choice must block transmission, and non-JS fallbacks cannot check it.
- Contact-form submissions fire a standard Meta `Lead` event with a unique event id (no customer matching is sent). Any future conversion events must go through `canTrack()` in `meta-pixel.ts`.
- The `/privacy` page must keep naming the shared data, the recipient (Meta Platforms), the purposes, and how to withdraw via the footer "Cookie settings" link.
