# Design — ClickCar

A locked design system for clickcar.jp. Every page redesign reads this file
before emitting code. Extend or amend it when the system needs to grow; do not
invent a new look per page.

## Genre
modern-minimal, technical register ("precision instrument panel for collector cars").

## Macrostructure family
- Marketing pages (home, services, guides landing): Workbench, a spec-sheet hero
  (copy left, a real in-stock car with a mono spec readout right), then
  left-aligned sections with hairline structure.
- Inventory / detail pages: Catalogue (list) and a spec-sheet detail (gallery,
  spec readout, ruled spec tables, sticky price panel).
- Content pages (blog, export guides): typography only, light paper.

## Theme (tokens live in `src/app/globals.css` `:root`, aliased in `@theme`)
- `--cc-paper`        oklch(98.6% 0.003 250): cool engineered near-white
- `--cc-paper-2`      oklch(96.4% 0.004 250): toolbars, image wells
- `--cc-paper-raised` oklch(99.7% 0.002 250): cards
- `--cc-ink`          oklch(21% 0.014 260): headings, values
- `--cc-ink-2`        oklch(42% 0.014 258): body copy
- `--cc-ink-3`        oklch(56% 0.012 258): labels, meta
- `--cc-rule`         oklch(90.5% 0.006 255): hairlines
- `--cc-graphite`     oklch(16.5% 0.012 262): the dark band (header, hero, process, footer)
- `--cc-rule-dark`    oklch(31% 0.014 262): hairlines on graphite
- `--cc-signal`       oklch(57.7% 0.215 27.3): ClickCar brand red, the ONE accent
- `--cc-focus`        oklch(62% 0.2 27.3)

Tailwind utilities: `bg-paper`, `bg-paper-2`, `bg-paper-raised`, `text-ink`,
`text-ink-2`, `text-ink-3`, `border-rule`, `bg-graphite`, `border-rule-dark`,
`text-on-dark`, `text-on-dark-2`, `bg-signal`, `text-signal`. Legacy names
(`primary`, `secondary`, `border`…) alias the new tokens.

## Typography
- Display: Space Grotesk 500/600, tracking −0.02 to −0.035em, always roman.
- Body: Inter 400/500.
- Data / labels: JetBrains Mono. Prices, mileage, years and specs use `.cc-data`
  (tabular numerals); section labels use `.cc-label` (11px, uppercase, 0.08em).
- CJK falls back to Hiragino / PingFang / Noto Sans JP/SC.

## Components (`@layer components` in globals.css)
- `.cc-btn` + `--signal` (one primary action per view), `--ink`, `--line`,
  `--line-dark`. 6px radius, 44px min height, never two-line, never pill.
- `.cc-card`: 1px rule border, 10px radius, no shadow; hover darkens the border.
- `.cc-field`: inputs/selects.
- `.cc-label`, `.cc-tick` (signal square before a label), `.cc-data`, `.cc-link`.
- `SectionHead` (`src/components/home/SectionHead.tsx`): left-aligned label + h2 + lede + optional action.

## Motion
- Easing `cubic-bezier(0.16, 1, 0.3, 1)`, 220ms on colour/border.
- Image hover: scale 1.02 over 700ms. No bounce, no lift-on-hover, no blur reveals.
- `prefers-reduced-motion`: smooth scroll off.

## Rules
- Signal red ≤ 5% of any viewport: primary CTA, ticks, active nav underline, step numbers.
- No drop shadows, no gradients, no glassmorphism, no centred-everything heroes.
- Specs and prices are real data from `demo-vehicles.ts`; never invent metrics.
- Nav: bordered graphite bar (N1b), links never wrap; Services / Guides are dropdowns.
- Footer: mast-headed (Ft1), brand + contact on top, link groups below.

## Not yet migrated (still on the old look, inheriting new colours/fonts)
Vehicle list filters, services pages, export-guide, export-to/*, buying/*,
about, contact, FAQ page, blog index/post, favorites, auth, dashboard.
