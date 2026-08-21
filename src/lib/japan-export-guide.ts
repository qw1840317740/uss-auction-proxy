// CSS + HTML for the Japan Export Guide guide.
// Source: ClickCar editorial team.
// The styles below are scoped to `.guide-japan-export` so they only apply inside the
// article container rendered by the blog template. The renderer strips <script>,
// <style>, <link>, <meta>, <title>, <header> and <footer> tags from the body
// before injecting. We re-inject the styles here so tables, callouts, and FAQ
// blocks render correctly.

export const JapanExportGuideStyles: Record<string, string> = {
  zh: `.guide-japan-export *::before, .guide-japan-export *::after { box-sizing: border-box; margin: 0; padding: 0; }
.guide-japan-export html { font-size: 16px; scroll-behavior: smooth; }
.guide-japan-export .site-header { border-bottom: 1px solid var(--rule); padding: 18px 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: rgba(255,255,255,0.97); backdrop-filter: blur(6px); z-index: 100; }
.guide-japan-export .site-logo { font-family: var(--mono); font-size: 13px; letter-spacing: .12em; color: var(--black); text-decoration: none; text-transform: uppercase; }
.guide-japan-export .site-logo span { color: var(--red); }
.guide-japan-export .header-cta { font-size: 12px; font-weight: 500; color: var(--red); text-decoration: none; letter-spacing: .04em; border-bottom: 1px solid var(--red); padding-bottom: 1px; }
.guide-japan-export .hero { border-bottom: 1px solid var(--rule); padding: 4rem 2rem 3rem; max-width: var(--max); margin: 0 auto; }
.guide-japan-export .eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--red); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px; }
.guide-japan-export .eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--red); opacity: .3; max-width: 80px; }
.guide-japan-export .hero-title { font-family: var(--serif); font-size: clamp(1.85rem, 5vw, 2.75rem); font-weight: 400; line-height: 1.2; color: var(--black); margin-bottom: 1.25rem; letter-spacing: -.01em; }
.guide-japan-export .hero-title em { font-style: italic; color: var(--red); }
.guide-japan-export .hero-desc { font-size: 15.5px; color: var(--gray-500); max-width: 580px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .hero-meta { display: flex; gap: 2rem; flex-wrap: wrap; border-top: 1px solid var(--rule); padding-top: 1.25rem; }
.guide-japan-export .meta-item { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export .meta-item strong { color: var(--ink); font-weight: 400; display: block; font-size: 13px; }
.guide-japan-export .article-body { max-width: var(--max); margin: 0 auto; padding: 0 2rem; }
.guide-japan-export .section { padding: 2.75rem 0; border-bottom: 1px solid var(--rule); }
.guide-japan-export .section:last-of-type { border-bottom: none; }
.guide-japan-export .section-label { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--gray-500); margin-bottom: 1rem; }
.guide-japan-export .section-label::before { content: '— '; color: var(--red); }
.guide-japan-export h2 { font-family: var(--serif); font-size: 1.6rem; font-weight: 400; color: var(--black); margin-bottom: 1.1rem; line-height: 1.3; }
.guide-japan-export h3 { font-size: 15px; font-weight: 500; color: var(--black); margin-bottom: .45rem; margin-top: 1.4rem; }
.guide-japan-export h3:first-child { margin-top: 0; }
.guide-japan-export p { font-size: 15px; line-height: 1.8; color: var(--gray-700); margin-bottom: .9rem; font-weight: 300; }
.guide-japan-export p:last-child { margin-bottom: 0; }
.guide-japan-export strong.key { color: var(--black); font-weight: 500; }
.guide-japan-export /* TIMELINE */
  .timeline { position: relative; margin: 1.5rem 0; padding-left: 1.75rem; }
.guide-japan-export .timeline::before { content: ''; position: absolute; left: 7px; top: 8px; bottom: 8px; width: 1px; background: var(--rule); }
.guide-japan-export .tl-item { position: relative; margin-bottom: 1.5rem; }
.guide-japan-export .tl-item:last-child { margin-bottom: 0; }
.guide-japan-export .tl-dot { position: absolute; left: -1.75rem; top: 4px; width: 15px; height: 15px; border-radius: 50%; background: var(--white); border: 2px solid var(--red); display: flex; align-items: center; justify-content: center; }
.guide-japan-export .tl-dot-inner { width: 5px; height: 5px; border-radius: 50%; background: var(--red); }
.guide-japan-export .tl-week { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: 3px; }
.guide-japan-export .tl-title { font-size: 14px; font-weight: 500; color: var(--black); margin-bottom: 3px; }
.guide-japan-export .tl-desc { font-size: 13px; color: var(--gray-500); line-height: 1.55; font-weight: 300; }
.guide-japan-export /* DOC CHECKLIST */
  .doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .doc-col { background: var(--white); }
.guide-japan-export .doc-header { background: var(--black); color: var(--white); font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; padding: .65rem 1rem; }
.guide-japan-export .doc-item { display: flex; gap: 10px; align-items: flex-start; padding: .65rem 1rem; border-bottom: 1px solid var(--rule); font-size: 13px; }
.guide-japan-export .doc-item:last-child { border-bottom: none; }
.guide-japan-export .doc-icon { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
.guide-japan-export .doc-icon-red { background: var(--red); }
.guide-japan-export .doc-icon-blue { background: #2563EB; }
.guide-japan-export .doc-icon svg { width: 8px; height: 8px; }
.guide-japan-export .doc-name { color: var(--black); font-weight: 400; line-height: 1.4; }
.guide-japan-export .doc-note { font-size: 11.5px; color: var(--gray-500); display: block; margin-top: 1px; font-weight: 300; }
.guide-japan-export /* SHIPPING COMPARE */
  .ship-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .ship-col { background: var(--white); padding: 1.25rem; }
.guide-japan-export .ship-header { font-size: 13px; font-weight: 500; color: var(--black); margin-bottom: .75rem; padding-bottom: .65rem; border-bottom: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; }
.guide-japan-export .ship-tag { font-family: var(--mono); font-size: 10px; padding: 2px 8px; border-radius: 2px; }
.guide-japan-export .t-cheap { background: var(--green-light); color: var(--green); }
.guide-japan-export .t-safe { background: var(--blue-light); color: var(--blue); }
.guide-japan-export .ship-row { display: flex; justify-content: space-between; padding: .4rem 0; border-bottom: .5px solid var(--rule); font-size: 13px; }
.guide-japan-export .ship-row:last-child { border-bottom: none; }
.guide-japan-export .ship-label { color: var(--gray-500); font-weight: 300; }
.guide-japan-export .ship-val { color: var(--black); font-weight: 400; text-align: right; }
.guide-japan-export /* DUTY TABLE */
  .duty-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 1.5rem 0; }
.guide-japan-export .duty-table thead tr { border-bottom: 2px solid var(--black); }
.guide-japan-export .duty-table th { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; padding: 8px 10px; color: var(--gray-500); font-weight: 400; text-align: left; }
.guide-japan-export .duty-table tbody tr { border-bottom: 1px solid var(--rule); }
.guide-japan-export .duty-table tbody tr:last-child { border-bottom: none; }
.guide-japan-export .duty-table td { padding: 10px 10px; color: var(--gray-700); vertical-align: top; }
.guide-japan-export .duty-table td:first-child { font-weight: 500; color: var(--black); }
.guide-japan-export .duty-table td:nth-child(2) { font-family: var(--mono); font-size: 12px; color: var(--red); }
.guide-japan-export .age-badge { display: inline-block; font-family: var(--mono); font-size: 10px; padding: 2px 6px; border-radius: 2px; background: var(--gray-100); color: var(--gray-500); }
.guide-japan-export /* CALLOUTS */
  .callout { border-left: 2px solid var(--green); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--green-light); border-radius: 0; }
.guide-japan-export .callout p { font-size: 14px; color: #166534; margin: 0; }
.guide-japan-export .callout strong { font-weight: 500; }
.guide-japan-export .callout-amber { border-left: 2px solid var(--amber); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--amber-light); }
.guide-japan-export .callout-amber p { font-size: 14px; color: #92400E; margin: 0; }
.guide-japan-export .callout-amber strong { font-weight: 500; }
.guide-japan-export .callout-red { border-left: 2px solid var(--red); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--red-light); }
.guide-japan-export .callout-red p { font-size: 14px; color: #7F1D1D; margin: 0; }
.guide-japan-export .callout-red strong { font-weight: 500; }
.guide-japan-export .callout-blue { border-left: 2px solid var(--blue); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--blue-light); }
.guide-japan-export .callout-blue p { font-size: 14px; color: #1E3A8A; margin: 0; }
.guide-japan-export .callout-blue strong { font-weight: 500; }
.guide-japan-export /* COST BREAKDOWN */
  .cost-list { margin: 1rem 0; }
.guide-japan-export .cost-row { display: flex; align-items: center; justify-content: space-between; padding: .65rem 0; border-bottom: 1px solid var(--rule); font-size: 14px; }
.guide-japan-export .cost-row:last-child { border-bottom: none; font-weight: 500; color: var(--black); border-top: 2px solid var(--black); padding-top: .85rem; margin-top: .25rem; }
.guide-japan-export .cost-label { color: var(--gray-700); }
.guide-japan-export .cost-val { font-family: var(--mono); color: var(--black); }
.guide-japan-export .cost-note { font-size: 11px; color: var(--gray-500); margin-left: 8px; font-weight: 300; }
.guide-japan-export /* RELATED POSTS */
  .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .related-card { background: var(--white); padding: 1rem 1.1rem; cursor: pointer; transition: background .15s; text-decoration: none; display: block; }
.guide-japan-export .related-card:hover { background: var(--gray-100); }
.guide-japan-export .related-label { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: .35rem; }
.guide-japan-export .related-title { font-size: 13px; font-weight: 500; color: var(--black); line-height: 1.4; }
.guide-japan-export /* CTA */
  .cta-section { background: var(--black); margin: 3rem -2rem -3rem; padding: 3rem 2rem 3.5rem; }
.guide-japan-export .cta-eyebrow { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
.guide-japan-export .cta-title { font-family: var(--serif); font-size: 1.75rem; font-weight: 400; color: var(--white); margin-bottom: .75rem; line-height: 1.3; }
.guide-japan-export .cta-desc { font-size: 14px; color: rgba(255,255,255,.5); max-width: 500px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .cta-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.guide-japan-export .cta-step { border: 1px solid rgba(255,255,255,.1); padding: .9rem 1rem; }
.guide-japan-export .cta-step-num { font-family: var(--mono); font-size: 11px; color: var(--red); margin-bottom: .35rem; letter-spacing: .08em; }
.guide-japan-export .cta-step-text { font-size: 13px; color: rgba(255,255,255,.7); line-height: 1.5; }
.guide-japan-export .cta-btn { display: inline-block; background: var(--red); color: var(--white); font-size: 13px; font-weight: 500; letter-spacing: .06em; padding: 12px 28px; text-decoration: none; transition: opacity .2s; font-family: var(--sans); border: none; cursor: pointer; }
.guide-japan-export .cta-btn:hover { opacity: .85; }
.guide-japan-export .cta-note { margin-top: 1rem; font-size: 12px; color: rgba(255,255,255,.3); font-family: var(--mono); letter-spacing: .04em; }
.guide-japan-export .site-footer { background: var(--gray-100); border-top: 1px solid var(--rule); padding: 1.5rem 2rem; text-align: center; font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export /* IMAGES */
  .article-img { width: 100%; display: block; margin: 1.75rem 0; }
.guide-japan-export .article-img img { width: 100%; height: 320px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .article-img figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .05em; padding: .55rem 0 0; border-top: 1px solid var(--rule); margin-top: 0; }
.guide-japan-export .img-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); margin: 1.75rem 0; }
.guide-japan-export .img-2col figure { margin: 0; background: var(--white); }
.guide-japan-export .img-2col img { width: 100%; height: 220px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .img-2col figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .04em; padding: .45rem .65rem; }
.guide-japan-export @media (max-width: 500px) { .img-2col { grid-template-columns: 1fr; }
.guide-japan-export .article-img img { height: 220px; }
.guide-japan-export }

  @media (max-width: 600px) {
    .site-header { padding: 14px 1.25rem; }
.guide-japan-export .hero { padding: 2.5rem 1.25rem 2rem; }
.guide-japan-export .article-body { padding: 0 1.25rem; }
.guide-japan-export .hero-meta { gap: 1.25rem; }
.guide-japan-export .doc-grid, .guide-japan-export .ship-grid { grid-template-columns: 1fr; }
.guide-japan-export .duty-table th:last-child, .guide-japan-export .duty-table td:last-child { display: none; }
.guide-japan-export .cta-section { margin: 3rem -1.25rem -3rem; padding: 2.5rem 1.25rem 3rem; }
.guide-japan-export .cta-steps { grid-template-columns: 1fr 1fr; }
.guide-japan-export }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; }`,
  en: `.guide-japan-export *::before, .guide-japan-export *::after { box-sizing: border-box; margin: 0; padding: 0; }
.guide-japan-export html { font-size: 16px; scroll-behavior: smooth; }
.guide-japan-export .site-header { border-bottom: 1px solid var(--rule); padding: 18px 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: rgba(255,255,255,0.97); backdrop-filter: blur(6px); z-index: 100; }
.guide-japan-export .site-logo { font-family: var(--mono); font-size: 13px; letter-spacing: .12em; color: var(--black); text-decoration: none; text-transform: uppercase; }
.guide-japan-export .site-logo span { color: var(--red); }
.guide-japan-export .header-cta { font-size: 12px; font-weight: 500; color: var(--red); text-decoration: none; letter-spacing: .04em; border-bottom: 1px solid var(--red); padding-bottom: 1px; }
.guide-japan-export .hero { border-bottom: 1px solid var(--rule); padding: 4rem 2rem 3rem; max-width: var(--max); margin: 0 auto; }
.guide-japan-export .eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--red); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px; }
.guide-japan-export .eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--red); opacity: .3; max-width: 80px; }
.guide-japan-export .hero-title { font-family: var(--serif); font-size: clamp(1.85rem, 5vw, 2.75rem); font-weight: 400; line-height: 1.2; color: var(--black); margin-bottom: 1.25rem; letter-spacing: -.01em; }
.guide-japan-export .hero-title em { font-style: italic; color: var(--red); }
.guide-japan-export .hero-desc { font-size: 15.5px; color: var(--gray-500); max-width: 580px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .hero-meta { display: flex; gap: 2rem; flex-wrap: wrap; border-top: 1px solid var(--rule); padding-top: 1.25rem; }
.guide-japan-export .meta-item { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export .meta-item strong { color: var(--ink); font-weight: 400; display: block; font-size: 13px; }
.guide-japan-export .article-body { max-width: var(--max); margin: 0 auto; padding: 0 2rem; }
.guide-japan-export .section { padding: 2.75rem 0; border-bottom: 1px solid var(--rule); }
.guide-japan-export .section:last-of-type { border-bottom: none; }
.guide-japan-export .section-label { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--gray-500); margin-bottom: 1rem; }
.guide-japan-export .section-label::before { content: '— '; color: var(--red); }
.guide-japan-export h2 { font-family: var(--serif); font-size: 1.6rem; font-weight: 400; color: var(--black); margin-bottom: 1.1rem; line-height: 1.3; }
.guide-japan-export h3 { font-size: 15px; font-weight: 500; color: var(--black); margin-bottom: .45rem; margin-top: 1.4rem; }
.guide-japan-export h3:first-child { margin-top: 0; }
.guide-japan-export p { font-size: 15px; line-height: 1.8; color: var(--gray-700); margin-bottom: .9rem; font-weight: 300; }
.guide-japan-export p:last-child { margin-bottom: 0; }
.guide-japan-export strong.key { color: var(--black); font-weight: 500; }
.guide-japan-export /* TIMELINE */
  .timeline { position: relative; margin: 1.5rem 0; padding-left: 1.75rem; }
.guide-japan-export .timeline::before { content: ''; position: absolute; left: 7px; top: 8px; bottom: 8px; width: 1px; background: var(--rule); }
.guide-japan-export .tl-item { position: relative; margin-bottom: 1.5rem; }
.guide-japan-export .tl-item:last-child { margin-bottom: 0; }
.guide-japan-export .tl-dot { position: absolute; left: -1.75rem; top: 4px; width: 15px; height: 15px; border-radius: 50%; background: var(--white); border: 2px solid var(--red); display: flex; align-items: center; justify-content: center; }
.guide-japan-export .tl-dot-inner { width: 5px; height: 5px; border-radius: 50%; background: var(--red); }
.guide-japan-export .tl-week { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: 3px; }
.guide-japan-export .tl-title { font-size: 14px; font-weight: 500; color: var(--black); margin-bottom: 3px; }
.guide-japan-export .tl-desc { font-size: 13px; color: var(--gray-500); line-height: 1.55; font-weight: 300; }
.guide-japan-export /* DOC CHECKLIST */
  .doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .doc-col { background: var(--white); }
.guide-japan-export .doc-header { background: var(--black); color: var(--white); font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; padding: .65rem 1rem; }
.guide-japan-export .doc-item { display: flex; gap: 10px; align-items: flex-start; padding: .65rem 1rem; border-bottom: 1px solid var(--rule); font-size: 13px; }
.guide-japan-export .doc-item:last-child { border-bottom: none; }
.guide-japan-export .doc-icon { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
.guide-japan-export .doc-icon-red { background: var(--red); }
.guide-japan-export .doc-icon-blue { background: #2563EB; }
.guide-japan-export .doc-icon svg { width: 8px; height: 8px; }
.guide-japan-export .doc-name { color: var(--black); font-weight: 400; line-height: 1.4; }
.guide-japan-export .doc-note { font-size: 11.5px; color: var(--gray-500); display: block; margin-top: 1px; font-weight: 300; }
.guide-japan-export /* SHIPPING COMPARE */
  .ship-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .ship-col { background: var(--white); padding: 1.25rem; }
.guide-japan-export .ship-header { font-size: 13px; font-weight: 500; color: var(--black); margin-bottom: .75rem; padding-bottom: .65rem; border-bottom: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; }
.guide-japan-export .ship-tag { font-family: var(--mono); font-size: 10px; padding: 2px 8px; border-radius: 2px; }
.guide-japan-export .t-cheap { background: var(--green-light); color: var(--green); }
.guide-japan-export .t-safe { background: var(--blue-light); color: var(--blue); }
.guide-japan-export .ship-row { display: flex; justify-content: space-between; padding: .4rem 0; border-bottom: .5px solid var(--rule); font-size: 13px; }
.guide-japan-export .ship-row:last-child { border-bottom: none; }
.guide-japan-export .ship-label { color: var(--gray-500); font-weight: 300; }
.guide-japan-export .ship-val { color: var(--black); font-weight: 400; text-align: right; }
.guide-japan-export /* DUTY TABLE */
  .duty-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 1.5rem 0; }
.guide-japan-export .duty-table thead tr { border-bottom: 2px solid var(--black); }
.guide-japan-export .duty-table th { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; padding: 8px 10px; color: var(--gray-500); font-weight: 400; text-align: left; }
.guide-japan-export .duty-table tbody tr { border-bottom: 1px solid var(--rule); }
.guide-japan-export .duty-table tbody tr:last-child { border-bottom: none; }
.guide-japan-export .duty-table td { padding: 10px 10px; color: var(--gray-700); vertical-align: top; }
.guide-japan-export .duty-table td:first-child { font-weight: 500; color: var(--black); }
.guide-japan-export .duty-table td:nth-child(2) { font-family: var(--mono); font-size: 12px; color: var(--red); }
.guide-japan-export .age-badge { display: inline-block; font-family: var(--mono); font-size: 10px; padding: 2px 6px; border-radius: 2px; background: var(--gray-100); color: var(--gray-500); }
.guide-japan-export /* CALLOUTS */
  .callout { border-left: 2px solid var(--green); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--green-light); border-radius: 0; }
.guide-japan-export .callout p { font-size: 14px; color: #166534; margin: 0; }
.guide-japan-export .callout strong { font-weight: 500; }
.guide-japan-export .callout-amber { border-left: 2px solid var(--amber); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--amber-light); }
.guide-japan-export .callout-amber p { font-size: 14px; color: #92400E; margin: 0; }
.guide-japan-export .callout-amber strong { font-weight: 500; }
.guide-japan-export .callout-red { border-left: 2px solid var(--red); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--red-light); }
.guide-japan-export .callout-red p { font-size: 14px; color: #7F1D1D; margin: 0; }
.guide-japan-export .callout-red strong { font-weight: 500; }
.guide-japan-export .callout-blue { border-left: 2px solid var(--blue); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--blue-light); }
.guide-japan-export .callout-blue p { font-size: 14px; color: #1E3A8A; margin: 0; }
.guide-japan-export .callout-blue strong { font-weight: 500; }
.guide-japan-export /* COST BREAKDOWN */
  .cost-list { margin: 1rem 0; }
.guide-japan-export .cost-row { display: flex; align-items: center; justify-content: space-between; padding: .65rem 0; border-bottom: 1px solid var(--rule); font-size: 14px; }
.guide-japan-export .cost-row:last-child { border-bottom: none; font-weight: 500; color: var(--black); border-top: 2px solid var(--black); padding-top: .85rem; margin-top: .25rem; }
.guide-japan-export .cost-label { color: var(--gray-700); }
.guide-japan-export .cost-val { font-family: var(--mono); color: var(--black); }
.guide-japan-export .cost-note { font-size: 11px; color: var(--gray-500); margin-left: 8px; font-weight: 300; }
.guide-japan-export /* RELATED POSTS */
  .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .related-card { background: var(--white); padding: 1rem 1.1rem; cursor: pointer; transition: background .15s; text-decoration: none; display: block; }
.guide-japan-export .related-card:hover { background: var(--gray-100); }
.guide-japan-export .related-label { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: .35rem; }
.guide-japan-export .related-title { font-size: 13px; font-weight: 500; color: var(--black); line-height: 1.4; }
.guide-japan-export /* CTA */
  .cta-section { background: var(--black); margin: 3rem -2rem -3rem; padding: 3rem 2rem 3.5rem; }
.guide-japan-export .cta-eyebrow { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
.guide-japan-export .cta-title { font-family: var(--serif); font-size: 1.75rem; font-weight: 400; color: var(--white); margin-bottom: .75rem; line-height: 1.3; }
.guide-japan-export .cta-desc { font-size: 14px; color: rgba(255,255,255,.5); max-width: 500px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .cta-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.guide-japan-export .cta-step { border: 1px solid rgba(255,255,255,.1); padding: .9rem 1rem; }
.guide-japan-export .cta-step-num { font-family: var(--mono); font-size: 11px; color: var(--red); margin-bottom: .35rem; letter-spacing: .08em; }
.guide-japan-export .cta-step-text { font-size: 13px; color: rgba(255,255,255,.7); line-height: 1.5; }
.guide-japan-export .cta-btn { display: inline-block; background: var(--red); color: var(--white); font-size: 13px; font-weight: 500; letter-spacing: .06em; padding: 12px 28px; text-decoration: none; transition: opacity .2s; font-family: var(--sans); border: none; cursor: pointer; }
.guide-japan-export .cta-btn:hover { opacity: .85; }
.guide-japan-export .cta-note { margin-top: 1rem; font-size: 12px; color: rgba(255,255,255,.3); font-family: var(--mono); letter-spacing: .04em; }
.guide-japan-export .site-footer { background: var(--gray-100); border-top: 1px solid var(--rule); padding: 1.5rem 2rem; text-align: center; font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export /* IMAGES */
  .article-img { width: 100%; display: block; margin: 1.75rem 0; }
.guide-japan-export .article-img img { width: 100%; height: 320px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .article-img figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .05em; padding: .55rem 0 0; border-top: 1px solid var(--rule); margin-top: 0; }
.guide-japan-export .img-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); margin: 1.75rem 0; }
.guide-japan-export .img-2col figure { margin: 0; background: var(--white); }
.guide-japan-export .img-2col img { width: 100%; height: 220px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .img-2col figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .04em; padding: .45rem .65rem; }
.guide-japan-export @media (max-width: 500px) { .img-2col { grid-template-columns: 1fr; }
.guide-japan-export .article-img img { height: 220px; }
.guide-japan-export }

  @media (max-width: 600px) {
    .site-header { padding: 14px 1.25rem; }
.guide-japan-export .hero { padding: 2.5rem 1.25rem 2rem; }
.guide-japan-export .article-body { padding: 0 1.25rem; }
.guide-japan-export .hero-meta { gap: 1.25rem; }
.guide-japan-export .doc-grid, .guide-japan-export .ship-grid { grid-template-columns: 1fr; }
.guide-japan-export .duty-table th:last-child, .guide-japan-export .duty-table td:last-child { display: none; }
.guide-japan-export .cta-section { margin: 3rem -1.25rem -3rem; padding: 2.5rem 1.25rem 3rem; }
.guide-japan-export .cta-steps { grid-template-columns: 1fr 1fr; }
.guide-japan-export }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; }`,
  ja: `.guide-japan-export *::before, .guide-japan-export *::after { box-sizing: border-box; margin: 0; padding: 0; }
.guide-japan-export html { font-size: 16px; scroll-behavior: smooth; }
.guide-japan-export .site-header { border-bottom: 1px solid var(--rule); padding: 18px 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: rgba(255,255,255,0.97); backdrop-filter: blur(6px); z-index: 100; }
.guide-japan-export .site-logo { font-family: var(--mono); font-size: 13px; letter-spacing: .12em; color: var(--black); text-decoration: none; text-transform: uppercase; }
.guide-japan-export .site-logo span { color: var(--red); }
.guide-japan-export .header-cta { font-size: 12px; font-weight: 500; color: var(--red); text-decoration: none; letter-spacing: .04em; border-bottom: 1px solid var(--red); padding-bottom: 1px; }
.guide-japan-export .hero { border-bottom: 1px solid var(--rule); padding: 4rem 2rem 3rem; max-width: var(--max); margin: 0 auto; }
.guide-japan-export .eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--red); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px; }
.guide-japan-export .eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--red); opacity: .3; max-width: 80px; }
.guide-japan-export .hero-title { font-family: var(--serif); font-size: clamp(1.85rem, 5vw, 2.75rem); font-weight: 400; line-height: 1.2; color: var(--black); margin-bottom: 1.25rem; letter-spacing: -.01em; }
.guide-japan-export .hero-title em { font-style: italic; color: var(--red); }
.guide-japan-export .hero-desc { font-size: 15.5px; color: var(--gray-500); max-width: 580px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .hero-meta { display: flex; gap: 2rem; flex-wrap: wrap; border-top: 1px solid var(--rule); padding-top: 1.25rem; }
.guide-japan-export .meta-item { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export .meta-item strong { color: var(--ink); font-weight: 400; display: block; font-size: 13px; }
.guide-japan-export .article-body { max-width: var(--max); margin: 0 auto; padding: 0 2rem; }
.guide-japan-export .section { padding: 2.75rem 0; border-bottom: 1px solid var(--rule); }
.guide-japan-export .section:last-of-type { border-bottom: none; }
.guide-japan-export .section-label { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--gray-500); margin-bottom: 1rem; }
.guide-japan-export .section-label::before { content: '— '; color: var(--red); }
.guide-japan-export h2 { font-family: var(--serif); font-size: 1.6rem; font-weight: 400; color: var(--black); margin-bottom: 1.1rem; line-height: 1.3; }
.guide-japan-export h3 { font-size: 15px; font-weight: 500; color: var(--black); margin-bottom: .45rem; margin-top: 1.4rem; }
.guide-japan-export h3:first-child { margin-top: 0; }
.guide-japan-export p { font-size: 15px; line-height: 1.8; color: var(--gray-700); margin-bottom: .9rem; font-weight: 300; }
.guide-japan-export p:last-child { margin-bottom: 0; }
.guide-japan-export strong.key { color: var(--black); font-weight: 500; }
.guide-japan-export /* TIMELINE */
  .timeline { position: relative; margin: 1.5rem 0; padding-left: 1.75rem; }
.guide-japan-export .timeline::before { content: ''; position: absolute; left: 7px; top: 8px; bottom: 8px; width: 1px; background: var(--rule); }
.guide-japan-export .tl-item { position: relative; margin-bottom: 1.5rem; }
.guide-japan-export .tl-item:last-child { margin-bottom: 0; }
.guide-japan-export .tl-dot { position: absolute; left: -1.75rem; top: 4px; width: 15px; height: 15px; border-radius: 50%; background: var(--white); border: 2px solid var(--red); display: flex; align-items: center; justify-content: center; }
.guide-japan-export .tl-dot-inner { width: 5px; height: 5px; border-radius: 50%; background: var(--red); }
.guide-japan-export .tl-week { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: 3px; }
.guide-japan-export .tl-title { font-size: 14px; font-weight: 500; color: var(--black); margin-bottom: 3px; }
.guide-japan-export .tl-desc { font-size: 13px; color: var(--gray-500); line-height: 1.55; font-weight: 300; }
.guide-japan-export /* DOC CHECKLIST */
  .doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .doc-col { background: var(--white); }
.guide-japan-export .doc-header { background: var(--black); color: var(--white); font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; padding: .65rem 1rem; }
.guide-japan-export .doc-item { display: flex; gap: 10px; align-items: flex-start; padding: .65rem 1rem; border-bottom: 1px solid var(--rule); font-size: 13px; }
.guide-japan-export .doc-item:last-child { border-bottom: none; }
.guide-japan-export .doc-icon { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
.guide-japan-export .doc-icon-red { background: var(--red); }
.guide-japan-export .doc-icon-blue { background: #2563EB; }
.guide-japan-export .doc-icon svg { width: 8px; height: 8px; }
.guide-japan-export .doc-name { color: var(--black); font-weight: 400; line-height: 1.4; }
.guide-japan-export .doc-note { font-size: 11.5px; color: var(--gray-500); display: block; margin-top: 1px; font-weight: 300; }
.guide-japan-export /* SHIPPING COMPARE */
  .ship-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .ship-col { background: var(--white); padding: 1.25rem; }
.guide-japan-export .ship-header { font-size: 13px; font-weight: 500; color: var(--black); margin-bottom: .75rem; padding-bottom: .65rem; border-bottom: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; }
.guide-japan-export .ship-tag { font-family: var(--mono); font-size: 10px; padding: 2px 8px; border-radius: 2px; }
.guide-japan-export .t-cheap { background: var(--green-light); color: var(--green); }
.guide-japan-export .t-safe { background: var(--blue-light); color: var(--blue); }
.guide-japan-export .ship-row { display: flex; justify-content: space-between; padding: .4rem 0; border-bottom: .5px solid var(--rule); font-size: 13px; }
.guide-japan-export .ship-row:last-child { border-bottom: none; }
.guide-japan-export .ship-label { color: var(--gray-500); font-weight: 300; }
.guide-japan-export .ship-val { color: var(--black); font-weight: 400; text-align: right; }
.guide-japan-export /* DUTY TABLE */
  .duty-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 1.5rem 0; }
.guide-japan-export .duty-table thead tr { border-bottom: 2px solid var(--black); }
.guide-japan-export .duty-table th { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; padding: 8px 10px; color: var(--gray-500); font-weight: 400; text-align: left; }
.guide-japan-export .duty-table tbody tr { border-bottom: 1px solid var(--rule); }
.guide-japan-export .duty-table tbody tr:last-child { border-bottom: none; }
.guide-japan-export .duty-table td { padding: 10px 10px; color: var(--gray-700); vertical-align: top; }
.guide-japan-export .duty-table td:first-child { font-weight: 500; color: var(--black); }
.guide-japan-export .duty-table td:nth-child(2) { font-family: var(--mono); font-size: 12px; color: var(--red); }
.guide-japan-export .age-badge { display: inline-block; font-family: var(--mono); font-size: 10px; padding: 2px 6px; border-radius: 2px; background: var(--gray-100); color: var(--gray-500); }
.guide-japan-export /* CALLOUTS */
  .callout { border-left: 2px solid var(--green); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--green-light); border-radius: 0; }
.guide-japan-export .callout p { font-size: 14px; color: #166534; margin: 0; }
.guide-japan-export .callout strong { font-weight: 500; }
.guide-japan-export .callout-amber { border-left: 2px solid var(--amber); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--amber-light); }
.guide-japan-export .callout-amber p { font-size: 14px; color: #92400E; margin: 0; }
.guide-japan-export .callout-amber strong { font-weight: 500; }
.guide-japan-export .callout-red { border-left: 2px solid var(--red); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--red-light); }
.guide-japan-export .callout-red p { font-size: 14px; color: #7F1D1D; margin: 0; }
.guide-japan-export .callout-red strong { font-weight: 500; }
.guide-japan-export .callout-blue { border-left: 2px solid var(--blue); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--blue-light); }
.guide-japan-export .callout-blue p { font-size: 14px; color: #1E3A8A; margin: 0; }
.guide-japan-export .callout-blue strong { font-weight: 500; }
.guide-japan-export /* COST BREAKDOWN */
  .cost-list { margin: 1rem 0; }
.guide-japan-export .cost-row { display: flex; align-items: center; justify-content: space-between; padding: .65rem 0; border-bottom: 1px solid var(--rule); font-size: 14px; }
.guide-japan-export .cost-row:last-child { border-bottom: none; font-weight: 500; color: var(--black); border-top: 2px solid var(--black); padding-top: .85rem; margin-top: .25rem; }
.guide-japan-export .cost-label { color: var(--gray-700); }
.guide-japan-export .cost-val { font-family: var(--mono); color: var(--black); }
.guide-japan-export .cost-note { font-size: 11px; color: var(--gray-500); margin-left: 8px; font-weight: 300; }
.guide-japan-export /* RELATED POSTS */
  .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.guide-japan-export .related-card { background: var(--white); padding: 1rem 1.1rem; cursor: pointer; transition: background .15s; text-decoration: none; display: block; }
.guide-japan-export .related-card:hover { background: var(--gray-100); }
.guide-japan-export .related-label { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: .35rem; }
.guide-japan-export .related-title { font-size: 13px; font-weight: 500; color: var(--black); line-height: 1.4; }
.guide-japan-export /* CTA */
  .cta-section { background: var(--black); margin: 3rem -2rem -3rem; padding: 3rem 2rem 3.5rem; }
.guide-japan-export .cta-eyebrow { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
.guide-japan-export .cta-title { font-family: var(--serif); font-size: 1.75rem; font-weight: 400; color: var(--white); margin-bottom: .75rem; line-height: 1.3; }
.guide-japan-export .cta-desc { font-size: 14px; color: rgba(255,255,255,.5); max-width: 500px; margin-bottom: 2rem; font-weight: 300; line-height: 1.75; }
.guide-japan-export .cta-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.guide-japan-export .cta-step { border: 1px solid rgba(255,255,255,.1); padding: .9rem 1rem; }
.guide-japan-export .cta-step-num { font-family: var(--mono); font-size: 11px; color: var(--red); margin-bottom: .35rem; letter-spacing: .08em; }
.guide-japan-export .cta-step-text { font-size: 13px; color: rgba(255,255,255,.7); line-height: 1.5; }
.guide-japan-export .cta-btn { display: inline-block; background: var(--red); color: var(--white); font-size: 13px; font-weight: 500; letter-spacing: .06em; padding: 12px 28px; text-decoration: none; transition: opacity .2s; font-family: var(--sans); border: none; cursor: pointer; }
.guide-japan-export .cta-btn:hover { opacity: .85; }
.guide-japan-export .cta-note { margin-top: 1rem; font-size: 12px; color: rgba(255,255,255,.3); font-family: var(--mono); letter-spacing: .04em; }
.guide-japan-export .site-footer { background: var(--gray-100); border-top: 1px solid var(--rule); padding: 1.5rem 2rem; text-align: center; font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .06em; }
.guide-japan-export /* IMAGES */
  .article-img { width: 100%; display: block; margin: 1.75rem 0; }
.guide-japan-export .article-img img { width: 100%; height: 320px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .article-img figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .05em; padding: .55rem 0 0; border-top: 1px solid var(--rule); margin-top: 0; }
.guide-japan-export .img-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); margin: 1.75rem 0; }
.guide-japan-export .img-2col figure { margin: 0; background: var(--white); }
.guide-japan-export .img-2col img { width: 100%; height: 220px; object-fit: cover; display: block; filter: grayscale(8%); }
.guide-japan-export .img-2col figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .04em; padding: .45rem .65rem; }
.guide-japan-export @media (max-width: 500px) { .img-2col { grid-template-columns: 1fr; }
.guide-japan-export .article-img img { height: 220px; }
.guide-japan-export }

  @media (max-width: 600px) {
    .site-header { padding: 14px 1.25rem; }
.guide-japan-export .hero { padding: 2.5rem 1.25rem 2rem; }
.guide-japan-export .article-body { padding: 0 1.25rem; }
.guide-japan-export .hero-meta { gap: 1.25rem; }
.guide-japan-export .doc-grid, .guide-japan-export .ship-grid { grid-template-columns: 1fr; }
.guide-japan-export .duty-table th:last-child, .guide-japan-export .duty-table td:last-child { display: none; }
.guide-japan-export .cta-section { margin: 3rem -1.25rem -3rem; padding: 2.5rem 1.25rem 3rem; }
.guide-japan-export .cta-steps { grid-template-columns: 1fr 1fr; }
.guide-japan-export }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; }`,
};

export const JapanExportGuideHtml: Record<string, string> = {
  zh: `<div class="guide-japan-export">




<div class="hero">
  <div class="eyebrow">Export & Import Guide · Updated June 2026</div>
  <h1 class="hero-title">How to Import a Used Car<br>from Japan: <em>Complete Guide</em></h1>
  <p class="hero-desc">
    Documents, shipping methods, customs duties, and the exact timeline — everything a buyer needs to understand before purchasing a Japanese used car. Plus: which parts you have to handle yourself, and which you don't.
  </p>
  <div class="hero-meta">
    <div class="meta-item"><strong>June 2026</strong>Last updated</div>
    <div class="meta-item"><strong>9 min read</strong>Reading time</div>
    <div class="meta-item"><strong>Saitama, Japan</strong>Written by exporters</div>
    <div class="meta-item"><strong>1.4M+ cars</strong>Exported yearly from Japan</div>
  </div>
</div>

<div class="article-body">

  <!-- HERO IMAGE -->
  <figure class="article-img" style="margin-top:2rem">
    <img src="https://www.ussnet.co.jp/auction/site-guide/images/site_nagoya_01.jpg"
         onerror="this.src='https://japanesecartrade.com/wp-content/uploads/2023/07/japan-car-auction.jpg'"
         alt="USS Nagoya auction hall — one of Japan's largest used car auction facilities"
         loading="lazy">
    <figcaption>USS Nagoya — one of Japan's largest used car auction halls, processing thousands of vehicles weekly</figcaption>
  </figure>

  <!-- OVERVIEW -->
  <div class="section">
    <div class="section-label">Overview</div>
    <h2>Why import from Japan — and how complex is it really?</h2>
    <p>
      Japan exports over 1.4 million used vehicles to more than 100 countries every year. The reasons are straightforward: <span class="key">low annual mileage</span> (Japanese drivers average just 6,000–7,500 km per year), <span class="key">rigorous maintenance culture</span>, complete service records, and — since 2025–2026 — a yen rate near 150–155 per USD that gives overseas buyers roughly 20–30% more purchasing power than just a few years ago.
    </p>
    <p>
      That said, importing a car from Japan is not a simple online purchase. It involves at minimum four distinct stages: sourcing and bidding, Japanese export clearance, international shipping, and destination customs clearance. Each stage has its own documents, timelines, and costs. This guide walks you through all of them — so you know exactly what you're getting into before you commit.
    </p>
    <div class="callout-blue">
      <p><strong>The honest summary:</strong> The process takes 4–12 weeks total depending on your destination. There are roughly 8–12 documents involved across Japan-side and buyer-side. Ocean freight alone runs USD 800–3,000+. Import duties vary dramatically by country — from 0% in some markets to 60–90% in others. Read on for the specifics.</p>
    </div>
  </div>

  <!-- TIMELINE -->
  <div class="section">
    <div class="section-label">Process Timeline</div>
    <h2>The full import process: week by week</h2>
    <p>Here is what the end-to-end process looks like from the day you decide on a vehicle to the day it arrives at your door.</p>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Vehicle inspection at Japanese used car export facility before shipment"
           loading="lazy">
      <figcaption>Pre-export vehicle inspection — every car is checked and photographed before port delivery</figcaption>
    </figure>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1</div>
        <div class="tl-title">Vehicle sourcing & auction bidding</div>
        <div class="tl-desc">Browse auction sheets from USS, TAA, HAA or dealer stock. Your Japan-side agent bids on your behalf (individuals cannot bid directly). Winning bid + auction fees + local transport to port = Japan-side cost.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1–2</div>
        <div class="tl-title">Payment & pre-export inspection</div>
        <div class="tl-desc">Full payment is required before export begins. The exporter then arranges a pre-export inspection, de-registration of the vehicle in Japan, and transport to the nearest export port (Yokohama, Kobe, Nagoya, Osaka).</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 2–3</div>
        <div class="tl-title">Japanese export customs clearance</div>
        <div class="tl-desc">The exporter files an export declaration (輸出申告) with Japanese customs. Once cleared, Japanese customs issues an Export Certificate (輸出証明書) — this document is critical; it confirms the vehicle legally left Japan and carries the build date, which destination customs uses to calculate age-based duties.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 3–8</div>
        <div class="tl-title">Ocean freight (RoRo or container)</div>
        <div class="tl-desc">Transit times vary widely: Southeast Asia 1–2 weeks, Middle East 3–4 weeks, East Africa 3–4 weeks, Europe 4–6 weeks, US West Coast 3–4 weeks, US East Coast 5–7 weeks, Australia 2–3 weeks. The Bill of Lading is issued once the vessel departs — you'll need the original to claim your car at destination.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 5–12</div>
        <div class="tl-title">Destination customs clearance</div>
        <div class="tl-desc">Your local customs broker (or you, if experienced) files the import declaration, pays duties and taxes, and obtains customs release. This is where most delays happen — incomplete documents or held funds are the most common causes. File documents before the ship docks to avoid storage fees.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Final step</div>
        <div class="tl-title">Registration & roadworthiness compliance</div>
        <div class="tl-desc">Depending on your country, the car may need headlight adjustment (Japanese beams point left), speedometer conversion, emissions compliance check, or local roadworthy certification before it can be registered and driven.</div>
      </div>
    </div>
  </div>

  <!-- DOCUMENTS -->
  <div class="section">
    <div class="section-label">Required Documents</div>
    <h2>The document checklist: Japan-side & buyer-side</h2>
    <p>There are two sets of documents: those your Japan-side exporter prepares, and those you (or your local customs broker) need to prepare at destination. Both sets must be complete before customs clearance can proceed.</p>

    <div class="doc-grid">
      <div class="doc-col">
        <div class="doc-header">Japan-side (exporter prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Export Certificate (輸出証明書)</div><span class="doc-note">Issued by Japanese customs. Confirms legal export, build date, chassis number. Essential at destination.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Bill of Lading (B/L)</div><span class="doc-note">Issued by the shipping company. The "title" document for your cargo — you exchange the original B/L for the car at destination port.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Commercial Invoice</div><span class="doc-note">Shows the price paid. Destination customs uses this to calculate duty and tax.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Packing List</div><span class="doc-note">Describes the cargo (make, model, VIN, weight). Required for customs classification.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Auction Sheet (original)</div><span class="doc-note">Grade report issued by the auction house. Useful for destination customs and insurance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Japanese De-registration Certificate</div><span class="doc-note">Proof the vehicle is no longer registered in Japan. Required by most importing countries.</span></div>
        </div>
      </div>
      <div class="doc-col">
        <div class="doc-header">Buyer-side (you or your broker prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Import Declaration</div><span class="doc-note">Filed with your destination country's customs authority. Usually done by a licensed customs broker.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Buyer's Passport / ID</div><span class="doc-note">For individual importers. Companies submit business registration documents instead.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Proof of Payment / Bank Records</div><span class="doc-note">Some countries require proof of payment to verify declared value against money transfers.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Marine Insurance Certificate</div><span class="doc-note">Covers the vehicle during transit. Also required by some customs authorities as a condition of clearance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Destination-specific permits</div><span class="doc-note">E.g. NEVDIS check (Australia), SONCAP certificate (Nigeria), JAAI pre-shipment inspection (Kenya, Tanzania), type approval (EU).</span></div>
        </div>
      </div>
    </div>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Japanese car export documents including Export Certificate and Bill of Lading"
           loading="lazy">
      <figcaption>A complete Japan-side document package — Export Certificate, B/L, Commercial Invoice, and Auction Sheet</figcaption>
    </figure>

    <div class="callout-amber">
      <p><strong>Common mistake:</strong> Many first-time buyers don't prepare the buyer-side documents until the car arrives at port — then face daily storage fees while scrambling for paperwork. File everything with your customs broker before the vessel departure date, not after arrival.</p>
    </div>
  </div>

  <!-- SHIPPING -->
  <div class="section">
    <div class="section-label">Shipping Method</div>
    <h2>RoRo vs container shipping: which should you choose?</h2>
    <p>There are two ways to ship a vehicle from Japan. The right choice depends on the car's value, condition, and your destination port's available services.</p>

    <div class="ship-grid">
      <div class="ship-col">
        <div class="ship-header">RoRo (Roll-on/Roll-off) <span class="ship-tag t-cheap">Most affordable</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 800–1,500</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Moderate (exposed deck)</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Standard cars, daily drivers</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">Vehicle must be driveable</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">Major RoRo ports only</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">1–2 weeks</span></div>
      </div>
      <div class="ship-col">
        <div class="ship-header">Container (20ft / 40ft) <span class="ship-tag t-safe">Maximum protection</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 1,500–3,000+</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Full sealed protection</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Luxury, classic, modified cars</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">None (non-runners OK)</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">All container ports worldwide</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">2–3 weeks</span></div>
      </div>
    </div>

    <div class="img-2col">
      <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Roro_ship.jpg/1200px-Roro_ship.jpg"
             onerror="this.src='https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800'"
             alt="Roll-on Roll-off RoRo vessel loading vehicles at port"
             loading="lazy">
        <figcaption>RoRo — vehicles driven directly onto specialized vessel decks</figcaption>
      </figure>
      <figure>
        <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800"
             alt="Container ship at port — used for high-value vehicle shipping from Japan"
             loading="lazy">
        <figcaption>Container shipping — sealed 20ft or 40ft steel containers, full protection</figcaption>
      </figure>
    </div>

    <p>A 20ft container typically holds 2 standard cars; a 40ft holds 3–4. Consolidated container shipping (sharing a container with other buyers' vehicles) can bring per-car freight cost closer to RoRo pricing while still providing full protection — worth asking your exporter about if you're shipping a single high-value car.</p>

    <div class="callout">
      <p><strong>ClickCar recommends containers for:</strong> Ferrari, Porsche, Lamborghini, and any vehicle with significant collector or resale value. For standard Toyota, Nissan, and Honda models, RoRo is the sensible default — it's faster to book and meaningfully cheaper.</p>
    </div>
  </div>

  <!-- DUTIES -->
  <div class="section">
    <div class="section-label">Import Duties by Country</div>
    <h2>What will you pay in customs duties?</h2>
    <p>Import duties vary dramatically by destination. Some countries charge a flat percentage of CIF value (Cost + Insurance + Freight); others apply age-based multipliers, emissions taxes, or consumption taxes on top. The table below shows approximate rates for major importing countries — verify current rates with a local customs broker before purchase.</p>

    <table class="duty-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Approx. duty rate</th>
          <th>Age limit</th>
          <th>Key notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australia</td>
          <td>5% + 10% GST</td>
          <td><span class="age-badge">25yr rule (RHD)</span></td>
          <td>SEVS scheme for some newer models. NEVDIS check required.</td>
        </tr>
        <tr>
          <td>United Arab Emirates</td>
          <td>5% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>GCC conformity required. No consumption tax currently.</td>
        </tr>
        <tr>
          <td>United Kingdom</td>
          <td>6.5% + 20% VAT</td>
          <td><span class="age-badge">No limit</span></td>
          <td>DVSA Individual Vehicle Approval (IVA) for non-type-approved cars.</td>
        </tr>
        <tr>
          <td>Malaysia</td>
          <td>30% + 10% excise</td>
          <td><span class="age-badge">No strict limit</span></td>
          <td>Approval from JPJ required. High duties but no absolute age bar.</td>
        </tr>
        <tr>
          <td>Thailand</td>
          <td>80% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>Excise tax and VAT also apply on top of customs duty.</td>
        </tr>
        <tr>
          <td>Kenya</td>
          <td>25% + 16% VAT + levies</td>
          <td><span class="age-badge">8 years max</span></td>
          <td>KEBS pre-export verification (PVOC) required before shipping.</td>
        </tr>
        <tr>
          <td>United States</td>
          <td>2.5% (cars) / 25% (trucks)</td>
          <td><span class="age-badge">25yr NHTSA rule</span></td>
          <td>Under 25yr requires Registered Importer compliance — expensive.</td>
        </tr>
        <tr>
          <td>New Zealand</td>
          <td>0% duty + 15% GST</td>
          <td><span class="age-badge">No limit</span></td>
          <td>NZ$ border levy applies. Biosecurity inspection mandatory.</td>
        </tr>
      </tbody>
    </table>

    <div class="callout-red">
      <p><strong>Don't underestimate the landed cost:</strong> Duty is calculated on CIF value — meaning the car's purchase price plus freight plus insurance combined, not just what you paid at auction. On a USD 20,000 car with USD 1,500 freight, a 30% duty rate applies to USD 21,500+, not USD 20,000.</p>
    </div>
  </div>

  <!-- COST BREAKDOWN -->
  <div class="section">
    <div class="section-label">Real Cost Example</div>
    <h2>Sample landed cost: Toyota Land Cruiser to UAE</h2>
    <p>To make this concrete, here is a realistic cost breakdown for a 2019 Toyota Land Cruiser 200 GX-R, auctioned at USD 25,000, shipped to Dubai by RoRo.</p>

    <div class="cost-list">
      <div class="cost-row"><span class="cost-label">Auction hammer price</span><span class="cost-val">USD 25,000</span></div>
      <div class="cost-row"><span class="cost-label">Auction fee + Japan transport to port</span><span class="cost-val">USD 800</span></div>
      <div class="cost-row"><span class="cost-label">Export agent fee (de-registration, customs)</span><span class="cost-val">USD 300</span></div>
      <div class="cost-row"><span class="cost-label">RoRo ocean freight (Yokohama → Jebel Ali)</span><span class="cost-val">USD 1,100</span></div>
      <div class="cost-row"><span class="cost-label">Marine insurance (0.3% CIF)</span><span class="cost-val">USD 82</span></div>
      <div class="cost-row"><span class="cost-label">UAE customs duty (5% of CIF)</span><span class="cost-val">USD 1,354</span></div>
      <div class="cost-row"><span class="cost-label">Destination port handling + customs broker</span><span class="cost-val">USD 450</span></div>
      <div class="cost-row"><span class="cost-label"><strong>Total estimated landed cost</strong></span><span class="cost-val" style="color:var(--red)"><strong>≈ USD 29,086</strong></span></div>
    </div>

    <p style="margin-top:1rem">In this example, the total cost adds roughly <strong class="key">16% on top</strong> of the auction price. This ratio varies significantly by destination — in high-duty markets like Thailand or Malaysia, the premium can easily reach 100%+ of the vehicle's auction value.</p>
  </div>

  <!-- WHERE IT GETS HARD -->
  <div class="section">
    <div class="section-label">Where it gets complicated</div>
    <h2>The parts most buyers underestimate</h2>

    <h3>Bidding against professionals</h3>
    <p>At Japanese auction houses, you have 60–90 seconds to decide on each vehicle. Professional dealers are bidding hundreds of cars per month. If you're relying on an inexperienced agent — or trying to participate directly — you'll either lose every desirable lot or overbid on problematic ones. Market knowledge and speed matter enormously.</p>

    <h3>Pre-shipment inspection requirements</h3>
    <p>Countries like Kenya, Tanzania, Nigeria, and Ghana require a government-appointed pre-shipment inspection before the car leaves Japan. These must be arranged in advance — if the inspection isn't done before the car is loaded, it cannot be cleared at destination. Many first-time importers miss this completely.</p>

    <h3>Destination port storage fees</h3>
    <p>Once a vessel arrives, destination ports charge daily storage fees — typically USD 25–80 per day depending on port. If your paperwork isn't ready, those fees accumulate fast. A two-week delay easily adds USD 350–1,100 in avoidable charges.</p>

    <h3>Compliance modifications</h3>
    <p>Japan drives on the left, so headlights are aimed left. In most markets this requires adjustment or replacement before registration. Some countries require speedometer overlay conversion (km → miles), emissions compliance modification, or daytime running light installation. Factor these in before you calculate total cost.</p>

    <div class="callout-blue">
      <p><strong>The case for using a specialist exporter:</strong> Each of the above complications — auction bidding, pre-shipment inspection coordination, document preparation, carrier booking, and export clearance — is handled by an experienced exporter as a matter of routine. First-time importers handling these independently face steep learning curves at every step, with real financial risk at each one.</p>
    </div>
  </div>

  <!-- INTERNAL LINKS -->
  <div class="section">
    <div class="section-label">Related Guides</div>
    <h2>Read these before you buy</h2>
    <div class="related-grid">
      <a class="related-card" href="/en/blog/auction-grade-guide">
        <div class="related-label">Auction Knowledge</div>
        <div class="related-title">Japan Auction Grade System Explained: S, 4.5, R, RA — What They Mean</div>
      </a>
      <a class="related-card" href="/en/blog/odometer-fraud">
        <div class="related-label">Buying Safety</div>
        <div class="related-title">How to Spot Odometer Fraud on Japanese Used Cars: 5 Methods</div>
      </a>
      <a class="related-card" href="/en/blog/ferrari-guide">
        <div class="related-label">Luxury & Supercar</div>
        <div class="related-title">2026 Ferrari Used Car Buyer's Guide: Prices, Models & What to Avoid</div>
      </a>
    </div>
  </div>

  <!-- CTA -->
  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section" id="cta">
      <div class="cta-eyebrow">ClickCar — Saitama, Japan</div>
      <h2 class="cta-title">We handle every step<br>described above</h2>
      <p class="cta-desc">
        From auction bidding to export clearance and ocean freight booking — ClickCar manages the entire Japan-side process on your behalf. You send us your target car and budget. We do the rest.
      </p>
      <div class="cta-steps">
        <div class="cta-step">
          <div class="cta-step-num">STEP 01</div>
          <div class="cta-step-text">You tell us what you want — make, model, grade, budget</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 02</div>
          <div class="cta-step-text">We source from USS, TAA, HAA auctions and bid on your behalf</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 03</div>
          <div class="cta-step-text">We handle all Japan-side documents, export clearance, and freight booking</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 04</div>
          <div class="cta-step-text">Car ships to your port with all documents ready for customs clearance</div>
        </div>
      </div>
      <a class="cta-btn" href="https://clickcar.jp/en/contact">Get a Free Quote →</a>
      <p class="cta-note">English, Chinese & Japanese · Typically reply within 24 hours · No obligation</p>
    </div>
  </div>

</div>




</div>`,
  en: `<div class="guide-japan-export">




<div class="hero">
  <div class="eyebrow">Export & Import Guide · Updated June 2026</div>
  <h1 class="hero-title">How to Import a Used Car<br>from Japan: <em>Complete Guide</em></h1>
  <p class="hero-desc">
    Documents, shipping methods, customs duties, and the exact timeline — everything a buyer needs to understand before purchasing a Japanese used car. Plus: which parts you have to handle yourself, and which you don't.
  </p>
  <div class="hero-meta">
    <div class="meta-item"><strong>June 2026</strong>Last updated</div>
    <div class="meta-item"><strong>9 min read</strong>Reading time</div>
    <div class="meta-item"><strong>Saitama, Japan</strong>Written by exporters</div>
    <div class="meta-item"><strong>1.4M+ cars</strong>Exported yearly from Japan</div>
  </div>
</div>

<div class="article-body">

  <!-- HERO IMAGE -->
  <figure class="article-img" style="margin-top:2rem">
    <img src="https://www.ussnet.co.jp/auction/site-guide/images/site_nagoya_01.jpg"
         onerror="this.src='https://japanesecartrade.com/wp-content/uploads/2023/07/japan-car-auction.jpg'"
         alt="USS Nagoya auction hall — one of Japan's largest used car auction facilities"
         loading="lazy">
    <figcaption>USS Nagoya — one of Japan's largest used car auction halls, processing thousands of vehicles weekly</figcaption>
  </figure>

  <!-- OVERVIEW -->
  <div class="section">
    <div class="section-label">Overview</div>
    <h2>Why import from Japan — and how complex is it really?</h2>
    <p>
      Japan exports over 1.4 million used vehicles to more than 100 countries every year. The reasons are straightforward: <span class="key">low annual mileage</span> (Japanese drivers average just 6,000–7,500 km per year), <span class="key">rigorous maintenance culture</span>, complete service records, and — since 2025–2026 — a yen rate near 150–155 per USD that gives overseas buyers roughly 20–30% more purchasing power than just a few years ago.
    </p>
    <p>
      That said, importing a car from Japan is not a simple online purchase. It involves at minimum four distinct stages: sourcing and bidding, Japanese export clearance, international shipping, and destination customs clearance. Each stage has its own documents, timelines, and costs. This guide walks you through all of them — so you know exactly what you're getting into before you commit.
    </p>
    <div class="callout-blue">
      <p><strong>The honest summary:</strong> The process takes 4–12 weeks total depending on your destination. There are roughly 8–12 documents involved across Japan-side and buyer-side. Ocean freight alone runs USD 800–3,000+. Import duties vary dramatically by country — from 0% in some markets to 60–90% in others. Read on for the specifics.</p>
    </div>
  </div>

  <!-- TIMELINE -->
  <div class="section">
    <div class="section-label">Process Timeline</div>
    <h2>The full import process: week by week</h2>
    <p>Here is what the end-to-end process looks like from the day you decide on a vehicle to the day it arrives at your door.</p>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Vehicle inspection at Japanese used car export facility before shipment"
           loading="lazy">
      <figcaption>Pre-export vehicle inspection — every car is checked and photographed before port delivery</figcaption>
    </figure>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1</div>
        <div class="tl-title">Vehicle sourcing & auction bidding</div>
        <div class="tl-desc">Browse auction sheets from USS, TAA, HAA or dealer stock. Your Japan-side agent bids on your behalf (individuals cannot bid directly). Winning bid + auction fees + local transport to port = Japan-side cost.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1–2</div>
        <div class="tl-title">Payment & pre-export inspection</div>
        <div class="tl-desc">Full payment is required before export begins. The exporter then arranges a pre-export inspection, de-registration of the vehicle in Japan, and transport to the nearest export port (Yokohama, Kobe, Nagoya, Osaka).</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 2–3</div>
        <div class="tl-title">Japanese export customs clearance</div>
        <div class="tl-desc">The exporter files an export declaration (輸出申告) with Japanese customs. Once cleared, Japanese customs issues an Export Certificate (輸出証明書) — this document is critical; it confirms the vehicle legally left Japan and carries the build date, which destination customs uses to calculate age-based duties.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 3–8</div>
        <div class="tl-title">Ocean freight (RoRo or container)</div>
        <div class="tl-desc">Transit times vary widely: Southeast Asia 1–2 weeks, Middle East 3–4 weeks, East Africa 3–4 weeks, Europe 4–6 weeks, US West Coast 3–4 weeks, US East Coast 5–7 weeks, Australia 2–3 weeks. The Bill of Lading is issued once the vessel departs — you'll need the original to claim your car at destination.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 5–12</div>
        <div class="tl-title">Destination customs clearance</div>
        <div class="tl-desc">Your local customs broker (or you, if experienced) files the import declaration, pays duties and taxes, and obtains customs release. This is where most delays happen — incomplete documents or held funds are the most common causes. File documents before the ship docks to avoid storage fees.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Final step</div>
        <div class="tl-title">Registration & roadworthiness compliance</div>
        <div class="tl-desc">Depending on your country, the car may need headlight adjustment (Japanese beams point left), speedometer conversion, emissions compliance check, or local roadworthy certification before it can be registered and driven.</div>
      </div>
    </div>
  </div>

  <!-- DOCUMENTS -->
  <div class="section">
    <div class="section-label">Required Documents</div>
    <h2>The document checklist: Japan-side & buyer-side</h2>
    <p>There are two sets of documents: those your Japan-side exporter prepares, and those you (or your local customs broker) need to prepare at destination. Both sets must be complete before customs clearance can proceed.</p>

    <div class="doc-grid">
      <div class="doc-col">
        <div class="doc-header">Japan-side (exporter prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Export Certificate (輸出証明書)</div><span class="doc-note">Issued by Japanese customs. Confirms legal export, build date, chassis number. Essential at destination.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Bill of Lading (B/L)</div><span class="doc-note">Issued by the shipping company. The "title" document for your cargo — you exchange the original B/L for the car at destination port.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Commercial Invoice</div><span class="doc-note">Shows the price paid. Destination customs uses this to calculate duty and tax.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Packing List</div><span class="doc-note">Describes the cargo (make, model, VIN, weight). Required for customs classification.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Auction Sheet (original)</div><span class="doc-note">Grade report issued by the auction house. Useful for destination customs and insurance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Japanese De-registration Certificate</div><span class="doc-note">Proof the vehicle is no longer registered in Japan. Required by most importing countries.</span></div>
        </div>
      </div>
      <div class="doc-col">
        <div class="doc-header">Buyer-side (you or your broker prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Import Declaration</div><span class="doc-note">Filed with your destination country's customs authority. Usually done by a licensed customs broker.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Buyer's Passport / ID</div><span class="doc-note">For individual importers. Companies submit business registration documents instead.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Proof of Payment / Bank Records</div><span class="doc-note">Some countries require proof of payment to verify declared value against money transfers.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Marine Insurance Certificate</div><span class="doc-note">Covers the vehicle during transit. Also required by some customs authorities as a condition of clearance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Destination-specific permits</div><span class="doc-note">E.g. NEVDIS check (Australia), SONCAP certificate (Nigeria), JAAI pre-shipment inspection (Kenya, Tanzania), type approval (EU).</span></div>
        </div>
      </div>
    </div>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Japanese car export documents including Export Certificate and Bill of Lading"
           loading="lazy">
      <figcaption>A complete Japan-side document package — Export Certificate, B/L, Commercial Invoice, and Auction Sheet</figcaption>
    </figure>

    <div class="callout-amber">
      <p><strong>Common mistake:</strong> Many first-time buyers don't prepare the buyer-side documents until the car arrives at port — then face daily storage fees while scrambling for paperwork. File everything with your customs broker before the vessel departure date, not after arrival.</p>
    </div>
  </div>

  <!-- SHIPPING -->
  <div class="section">
    <div class="section-label">Shipping Method</div>
    <h2>RoRo vs container shipping: which should you choose?</h2>
    <p>There are two ways to ship a vehicle from Japan. The right choice depends on the car's value, condition, and your destination port's available services.</p>

    <div class="ship-grid">
      <div class="ship-col">
        <div class="ship-header">RoRo (Roll-on/Roll-off) <span class="ship-tag t-cheap">Most affordable</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 800–1,500</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Moderate (exposed deck)</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Standard cars, daily drivers</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">Vehicle must be driveable</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">Major RoRo ports only</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">1–2 weeks</span></div>
      </div>
      <div class="ship-col">
        <div class="ship-header">Container (20ft / 40ft) <span class="ship-tag t-safe">Maximum protection</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 1,500–3,000+</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Full sealed protection</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Luxury, classic, modified cars</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">None (non-runners OK)</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">All container ports worldwide</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">2–3 weeks</span></div>
      </div>
    </div>

    <div class="img-2col">
      <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Roro_ship.jpg/1200px-Roro_ship.jpg"
             onerror="this.src='https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800'"
             alt="Roll-on Roll-off RoRo vessel loading vehicles at port"
             loading="lazy">
        <figcaption>RoRo — vehicles driven directly onto specialized vessel decks</figcaption>
      </figure>
      <figure>
        <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800"
             alt="Container ship at port — used for high-value vehicle shipping from Japan"
             loading="lazy">
        <figcaption>Container shipping — sealed 20ft or 40ft steel containers, full protection</figcaption>
      </figure>
    </div>

    <p>A 20ft container typically holds 2 standard cars; a 40ft holds 3–4. Consolidated container shipping (sharing a container with other buyers' vehicles) can bring per-car freight cost closer to RoRo pricing while still providing full protection — worth asking your exporter about if you're shipping a single high-value car.</p>

    <div class="callout">
      <p><strong>ClickCar recommends containers for:</strong> Ferrari, Porsche, Lamborghini, and any vehicle with significant collector or resale value. For standard Toyota, Nissan, and Honda models, RoRo is the sensible default — it's faster to book and meaningfully cheaper.</p>
    </div>
  </div>

  <!-- DUTIES -->
  <div class="section">
    <div class="section-label">Import Duties by Country</div>
    <h2>What will you pay in customs duties?</h2>
    <p>Import duties vary dramatically by destination. Some countries charge a flat percentage of CIF value (Cost + Insurance + Freight); others apply age-based multipliers, emissions taxes, or consumption taxes on top. The table below shows approximate rates for major importing countries — verify current rates with a local customs broker before purchase.</p>

    <table class="duty-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Approx. duty rate</th>
          <th>Age limit</th>
          <th>Key notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australia</td>
          <td>5% + 10% GST</td>
          <td><span class="age-badge">25yr rule (RHD)</span></td>
          <td>SEVS scheme for some newer models. NEVDIS check required.</td>
        </tr>
        <tr>
          <td>United Arab Emirates</td>
          <td>5% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>GCC conformity required. No consumption tax currently.</td>
        </tr>
        <tr>
          <td>United Kingdom</td>
          <td>6.5% + 20% VAT</td>
          <td><span class="age-badge">No limit</span></td>
          <td>DVSA Individual Vehicle Approval (IVA) for non-type-approved cars.</td>
        </tr>
        <tr>
          <td>Malaysia</td>
          <td>30% + 10% excise</td>
          <td><span class="age-badge">No strict limit</span></td>
          <td>Approval from JPJ required. High duties but no absolute age bar.</td>
        </tr>
        <tr>
          <td>Thailand</td>
          <td>80% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>Excise tax and VAT also apply on top of customs duty.</td>
        </tr>
        <tr>
          <td>Kenya</td>
          <td>25% + 16% VAT + levies</td>
          <td><span class="age-badge">8 years max</span></td>
          <td>KEBS pre-export verification (PVOC) required before shipping.</td>
        </tr>
        <tr>
          <td>United States</td>
          <td>2.5% (cars) / 25% (trucks)</td>
          <td><span class="age-badge">25yr NHTSA rule</span></td>
          <td>Under 25yr requires Registered Importer compliance — expensive.</td>
        </tr>
        <tr>
          <td>New Zealand</td>
          <td>0% duty + 15% GST</td>
          <td><span class="age-badge">No limit</span></td>
          <td>NZ$ border levy applies. Biosecurity inspection mandatory.</td>
        </tr>
      </tbody>
    </table>

    <div class="callout-red">
      <p><strong>Don't underestimate the landed cost:</strong> Duty is calculated on CIF value — meaning the car's purchase price plus freight plus insurance combined, not just what you paid at auction. On a USD 20,000 car with USD 1,500 freight, a 30% duty rate applies to USD 21,500+, not USD 20,000.</p>
    </div>
  </div>

  <!-- COST BREAKDOWN -->
  <div class="section">
    <div class="section-label">Real Cost Example</div>
    <h2>Sample landed cost: Toyota Land Cruiser to UAE</h2>
    <p>To make this concrete, here is a realistic cost breakdown for a 2019 Toyota Land Cruiser 200 GX-R, auctioned at USD 25,000, shipped to Dubai by RoRo.</p>

    <div class="cost-list">
      <div class="cost-row"><span class="cost-label">Auction hammer price</span><span class="cost-val">USD 25,000</span></div>
      <div class="cost-row"><span class="cost-label">Auction fee + Japan transport to port</span><span class="cost-val">USD 800</span></div>
      <div class="cost-row"><span class="cost-label">Export agent fee (de-registration, customs)</span><span class="cost-val">USD 300</span></div>
      <div class="cost-row"><span class="cost-label">RoRo ocean freight (Yokohama → Jebel Ali)</span><span class="cost-val">USD 1,100</span></div>
      <div class="cost-row"><span class="cost-label">Marine insurance (0.3% CIF)</span><span class="cost-val">USD 82</span></div>
      <div class="cost-row"><span class="cost-label">UAE customs duty (5% of CIF)</span><span class="cost-val">USD 1,354</span></div>
      <div class="cost-row"><span class="cost-label">Destination port handling + customs broker</span><span class="cost-val">USD 450</span></div>
      <div class="cost-row"><span class="cost-label"><strong>Total estimated landed cost</strong></span><span class="cost-val" style="color:var(--red)"><strong>≈ USD 29,086</strong></span></div>
    </div>

    <p style="margin-top:1rem">In this example, the total cost adds roughly <strong class="key">16% on top</strong> of the auction price. This ratio varies significantly by destination — in high-duty markets like Thailand or Malaysia, the premium can easily reach 100%+ of the vehicle's auction value.</p>
  </div>

  <!-- WHERE IT GETS HARD -->
  <div class="section">
    <div class="section-label">Where it gets complicated</div>
    <h2>The parts most buyers underestimate</h2>

    <h3>Bidding against professionals</h3>
    <p>At Japanese auction houses, you have 60–90 seconds to decide on each vehicle. Professional dealers are bidding hundreds of cars per month. If you're relying on an inexperienced agent — or trying to participate directly — you'll either lose every desirable lot or overbid on problematic ones. Market knowledge and speed matter enormously.</p>

    <h3>Pre-shipment inspection requirements</h3>
    <p>Countries like Kenya, Tanzania, Nigeria, and Ghana require a government-appointed pre-shipment inspection before the car leaves Japan. These must be arranged in advance — if the inspection isn't done before the car is loaded, it cannot be cleared at destination. Many first-time importers miss this completely.</p>

    <h3>Destination port storage fees</h3>
    <p>Once a vessel arrives, destination ports charge daily storage fees — typically USD 25–80 per day depending on port. If your paperwork isn't ready, those fees accumulate fast. A two-week delay easily adds USD 350–1,100 in avoidable charges.</p>

    <h3>Compliance modifications</h3>
    <p>Japan drives on the left, so headlights are aimed left. In most markets this requires adjustment or replacement before registration. Some countries require speedometer overlay conversion (km → miles), emissions compliance modification, or daytime running light installation. Factor these in before you calculate total cost.</p>

    <div class="callout-blue">
      <p><strong>The case for using a specialist exporter:</strong> Each of the above complications — auction bidding, pre-shipment inspection coordination, document preparation, carrier booking, and export clearance — is handled by an experienced exporter as a matter of routine. First-time importers handling these independently face steep learning curves at every step, with real financial risk at each one.</p>
    </div>
  </div>

  <!-- INTERNAL LINKS -->
  <div class="section">
    <div class="section-label">Related Guides</div>
    <h2>Read these before you buy</h2>
    <div class="related-grid">
      <a class="related-card" href="/en/blog/auction-grade-guide">
        <div class="related-label">Auction Knowledge</div>
        <div class="related-title">Japan Auction Grade System Explained: S, 4.5, R, RA — What They Mean</div>
      </a>
      <a class="related-card" href="/en/blog/odometer-fraud">
        <div class="related-label">Buying Safety</div>
        <div class="related-title">How to Spot Odometer Fraud on Japanese Used Cars: 5 Methods</div>
      </a>
      <a class="related-card" href="/en/blog/ferrari-guide">
        <div class="related-label">Luxury & Supercar</div>
        <div class="related-title">2026 Ferrari Used Car Buyer's Guide: Prices, Models & What to Avoid</div>
      </a>
    </div>
  </div>

  <!-- CTA -->
  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section" id="cta">
      <div class="cta-eyebrow">ClickCar — Saitama, Japan</div>
      <h2 class="cta-title">We handle every step<br>described above</h2>
      <p class="cta-desc">
        From auction bidding to export clearance and ocean freight booking — ClickCar manages the entire Japan-side process on your behalf. You send us your target car and budget. We do the rest.
      </p>
      <div class="cta-steps">
        <div class="cta-step">
          <div class="cta-step-num">STEP 01</div>
          <div class="cta-step-text">You tell us what you want — make, model, grade, budget</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 02</div>
          <div class="cta-step-text">We source from USS, TAA, HAA auctions and bid on your behalf</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 03</div>
          <div class="cta-step-text">We handle all Japan-side documents, export clearance, and freight booking</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 04</div>
          <div class="cta-step-text">Car ships to your port with all documents ready for customs clearance</div>
        </div>
      </div>
      <a class="cta-btn" href="https://clickcar.jp/en/contact">Get a Free Quote →</a>
      <p class="cta-note">English, Chinese & Japanese · Typically reply within 24 hours · No obligation</p>
    </div>
  </div>

</div>




</div>`,
  ja: `<div class="guide-japan-export">




<div class="hero">
  <div class="eyebrow">Export & Import Guide · Updated June 2026</div>
  <h1 class="hero-title">How to Import a Used Car<br>from Japan: <em>Complete Guide</em></h1>
  <p class="hero-desc">
    Documents, shipping methods, customs duties, and the exact timeline — everything a buyer needs to understand before purchasing a Japanese used car. Plus: which parts you have to handle yourself, and which you don't.
  </p>
  <div class="hero-meta">
    <div class="meta-item"><strong>June 2026</strong>Last updated</div>
    <div class="meta-item"><strong>9 min read</strong>Reading time</div>
    <div class="meta-item"><strong>Saitama, Japan</strong>Written by exporters</div>
    <div class="meta-item"><strong>1.4M+ cars</strong>Exported yearly from Japan</div>
  </div>
</div>

<div class="article-body">

  <!-- HERO IMAGE -->
  <figure class="article-img" style="margin-top:2rem">
    <img src="https://www.ussnet.co.jp/auction/site-guide/images/site_nagoya_01.jpg"
         onerror="this.src='https://japanesecartrade.com/wp-content/uploads/2023/07/japan-car-auction.jpg'"
         alt="USS Nagoya auction hall — one of Japan's largest used car auction facilities"
         loading="lazy">
    <figcaption>USS Nagoya — one of Japan's largest used car auction halls, processing thousands of vehicles weekly</figcaption>
  </figure>

  <!-- OVERVIEW -->
  <div class="section">
    <div class="section-label">Overview</div>
    <h2>Why import from Japan — and how complex is it really?</h2>
    <p>
      Japan exports over 1.4 million used vehicles to more than 100 countries every year. The reasons are straightforward: <span class="key">low annual mileage</span> (Japanese drivers average just 6,000–7,500 km per year), <span class="key">rigorous maintenance culture</span>, complete service records, and — since 2025–2026 — a yen rate near 150–155 per USD that gives overseas buyers roughly 20–30% more purchasing power than just a few years ago.
    </p>
    <p>
      That said, importing a car from Japan is not a simple online purchase. It involves at minimum four distinct stages: sourcing and bidding, Japanese export clearance, international shipping, and destination customs clearance. Each stage has its own documents, timelines, and costs. This guide walks you through all of them — so you know exactly what you're getting into before you commit.
    </p>
    <div class="callout-blue">
      <p><strong>The honest summary:</strong> The process takes 4–12 weeks total depending on your destination. There are roughly 8–12 documents involved across Japan-side and buyer-side. Ocean freight alone runs USD 800–3,000+. Import duties vary dramatically by country — from 0% in some markets to 60–90% in others. Read on for the specifics.</p>
    </div>
  </div>

  <!-- TIMELINE -->
  <div class="section">
    <div class="section-label">Process Timeline</div>
    <h2>The full import process: week by week</h2>
    <p>Here is what the end-to-end process looks like from the day you decide on a vehicle to the day it arrives at your door.</p>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Vehicle inspection at Japanese used car export facility before shipment"
           loading="lazy">
      <figcaption>Pre-export vehicle inspection — every car is checked and photographed before port delivery</figcaption>
    </figure>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1</div>
        <div class="tl-title">Vehicle sourcing & auction bidding</div>
        <div class="tl-desc">Browse auction sheets from USS, TAA, HAA or dealer stock. Your Japan-side agent bids on your behalf (individuals cannot bid directly). Winning bid + auction fees + local transport to port = Japan-side cost.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 1–2</div>
        <div class="tl-title">Payment & pre-export inspection</div>
        <div class="tl-desc">Full payment is required before export begins. The exporter then arranges a pre-export inspection, de-registration of the vehicle in Japan, and transport to the nearest export port (Yokohama, Kobe, Nagoya, Osaka).</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 2–3</div>
        <div class="tl-title">Japanese export customs clearance</div>
        <div class="tl-desc">The exporter files an export declaration (輸出申告) with Japanese customs. Once cleared, Japanese customs issues an Export Certificate (輸出証明書) — this document is critical; it confirms the vehicle legally left Japan and carries the build date, which destination customs uses to calculate age-based duties.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 3–8</div>
        <div class="tl-title">Ocean freight (RoRo or container)</div>
        <div class="tl-desc">Transit times vary widely: Southeast Asia 1–2 weeks, Middle East 3–4 weeks, East Africa 3–4 weeks, Europe 4–6 weeks, US West Coast 3–4 weeks, US East Coast 5–7 weeks, Australia 2–3 weeks. The Bill of Lading is issued once the vessel departs — you'll need the original to claim your car at destination.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Week 5–12</div>
        <div class="tl-title">Destination customs clearance</div>
        <div class="tl-desc">Your local customs broker (or you, if experienced) files the import declaration, pays duties and taxes, and obtains customs release. This is where most delays happen — incomplete documents or held funds are the most common causes. File documents before the ship docks to avoid storage fees.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot"><div class="tl-dot-inner"></div></div>
        <div class="tl-week">Final step</div>
        <div class="tl-title">Registration & roadworthiness compliance</div>
        <div class="tl-desc">Depending on your country, the car may need headlight adjustment (Japanese beams point left), speedometer conversion, emissions compliance check, or local roadworthy certification before it can be registered and driven.</div>
      </div>
    </div>
  </div>

  <!-- DOCUMENTS -->
  <div class="section">
    <div class="section-label">Required Documents</div>
    <h2>The document checklist: Japan-side & buyer-side</h2>
    <p>There are two sets of documents: those your Japan-side exporter prepares, and those you (or your local customs broker) need to prepare at destination. Both sets must be complete before customs clearance can proceed.</p>

    <div class="doc-grid">
      <div class="doc-col">
        <div class="doc-header">Japan-side (exporter prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Export Certificate (輸出証明書)</div><span class="doc-note">Issued by Japanese customs. Confirms legal export, build date, chassis number. Essential at destination.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Bill of Lading (B/L)</div><span class="doc-note">Issued by the shipping company. The "title" document for your cargo — you exchange the original B/L for the car at destination port.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Commercial Invoice</div><span class="doc-note">Shows the price paid. Destination customs uses this to calculate duty and tax.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Packing List</div><span class="doc-note">Describes the cargo (make, model, VIN, weight). Required for customs classification.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Auction Sheet (original)</div><span class="doc-note">Grade report issued by the auction house. Useful for destination customs and insurance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-red"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Japanese De-registration Certificate</div><span class="doc-note">Proof the vehicle is no longer registered in Japan. Required by most importing countries.</span></div>
        </div>
      </div>
      <div class="doc-col">
        <div class="doc-header">Buyer-side (you or your broker prepares)</div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Import Declaration</div><span class="doc-note">Filed with your destination country's customs authority. Usually done by a licensed customs broker.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Buyer's Passport / ID</div><span class="doc-note">For individual importers. Companies submit business registration documents instead.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Proof of Payment / Bank Records</div><span class="doc-note">Some countries require proof of payment to verify declared value against money transfers.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Marine Insurance Certificate</div><span class="doc-note">Covers the vehicle during transit. Also required by some customs authorities as a condition of clearance.</span></div>
        </div>
        <div class="doc-item">
          <div class="doc-icon doc-icon-blue"><svg viewBox="0 0 8 8" fill="none"><polyline points="1.5,4 3.5,6 6.5,2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="doc-name">Destination-specific permits</div><span class="doc-note">E.g. NEVDIS check (Australia), SONCAP certificate (Nigeria), JAAI pre-shipment inspection (Kenya, Tanzania), type approval (EU).</span></div>
        </div>
      </div>
    </div>

    <figure class="article-img">
      <img src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200"
           alt="Japanese car export documents including Export Certificate and Bill of Lading"
           loading="lazy">
      <figcaption>A complete Japan-side document package — Export Certificate, B/L, Commercial Invoice, and Auction Sheet</figcaption>
    </figure>

    <div class="callout-amber">
      <p><strong>Common mistake:</strong> Many first-time buyers don't prepare the buyer-side documents until the car arrives at port — then face daily storage fees while scrambling for paperwork. File everything with your customs broker before the vessel departure date, not after arrival.</p>
    </div>
  </div>

  <!-- SHIPPING -->
  <div class="section">
    <div class="section-label">Shipping Method</div>
    <h2>RoRo vs container shipping: which should you choose?</h2>
    <p>There are two ways to ship a vehicle from Japan. The right choice depends on the car's value, condition, and your destination port's available services.</p>

    <div class="ship-grid">
      <div class="ship-col">
        <div class="ship-header">RoRo (Roll-on/Roll-off) <span class="ship-tag t-cheap">Most affordable</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 800–1,500</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Moderate (exposed deck)</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Standard cars, daily drivers</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">Vehicle must be driveable</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">Major RoRo ports only</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">1–2 weeks</span></div>
      </div>
      <div class="ship-col">
        <div class="ship-header">Container (20ft / 40ft) <span class="ship-tag t-safe">Maximum protection</span></div>
        <div class="ship-row"><span class="ship-label">Freight cost</span><span class="ship-val">USD 1,500–3,000+</span></div>
        <div class="ship-row"><span class="ship-label">Protection level</span><span class="ship-val">Full sealed protection</span></div>
        <div class="ship-row"><span class="ship-label">Best for</span><span class="ship-val">Luxury, classic, modified cars</span></div>
        <div class="ship-row"><span class="ship-label">Requirements</span><span class="ship-val">None (non-runners OK)</span></div>
        <div class="ship-row"><span class="ship-label">Port flexibility</span><span class="ship-val">All container ports worldwide</span></div>
        <div class="ship-row"><span class="ship-label">Booking lead time</span><span class="ship-val">2–3 weeks</span></div>
      </div>
    </div>

    <div class="img-2col">
      <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Roro_ship.jpg/1200px-Roro_ship.jpg"
             onerror="this.src='https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800'"
             alt="Roll-on Roll-off RoRo vessel loading vehicles at port"
             loading="lazy">
        <figcaption>RoRo — vehicles driven directly onto specialized vessel decks</figcaption>
      </figure>
      <figure>
        <img src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800"
             alt="Container ship at port — used for high-value vehicle shipping from Japan"
             loading="lazy">
        <figcaption>Container shipping — sealed 20ft or 40ft steel containers, full protection</figcaption>
      </figure>
    </div>

    <p>A 20ft container typically holds 2 standard cars; a 40ft holds 3–4. Consolidated container shipping (sharing a container with other buyers' vehicles) can bring per-car freight cost closer to RoRo pricing while still providing full protection — worth asking your exporter about if you're shipping a single high-value car.</p>

    <div class="callout">
      <p><strong>ClickCar recommends containers for:</strong> Ferrari, Porsche, Lamborghini, and any vehicle with significant collector or resale value. For standard Toyota, Nissan, and Honda models, RoRo is the sensible default — it's faster to book and meaningfully cheaper.</p>
    </div>
  </div>

  <!-- DUTIES -->
  <div class="section">
    <div class="section-label">Import Duties by Country</div>
    <h2>What will you pay in customs duties?</h2>
    <p>Import duties vary dramatically by destination. Some countries charge a flat percentage of CIF value (Cost + Insurance + Freight); others apply age-based multipliers, emissions taxes, or consumption taxes on top. The table below shows approximate rates for major importing countries — verify current rates with a local customs broker before purchase.</p>

    <table class="duty-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Approx. duty rate</th>
          <th>Age limit</th>
          <th>Key notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australia</td>
          <td>5% + 10% GST</td>
          <td><span class="age-badge">25yr rule (RHD)</span></td>
          <td>SEVS scheme for some newer models. NEVDIS check required.</td>
        </tr>
        <tr>
          <td>United Arab Emirates</td>
          <td>5% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>GCC conformity required. No consumption tax currently.</td>
        </tr>
        <tr>
          <td>United Kingdom</td>
          <td>6.5% + 20% VAT</td>
          <td><span class="age-badge">No limit</span></td>
          <td>DVSA Individual Vehicle Approval (IVA) for non-type-approved cars.</td>
        </tr>
        <tr>
          <td>Malaysia</td>
          <td>30% + 10% excise</td>
          <td><span class="age-badge">No strict limit</span></td>
          <td>Approval from JPJ required. High duties but no absolute age bar.</td>
        </tr>
        <tr>
          <td>Thailand</td>
          <td>80% CIF</td>
          <td><span class="age-badge">No limit</span></td>
          <td>Excise tax and VAT also apply on top of customs duty.</td>
        </tr>
        <tr>
          <td>Kenya</td>
          <td>25% + 16% VAT + levies</td>
          <td><span class="age-badge">8 years max</span></td>
          <td>KEBS pre-export verification (PVOC) required before shipping.</td>
        </tr>
        <tr>
          <td>United States</td>
          <td>2.5% (cars) / 25% (trucks)</td>
          <td><span class="age-badge">25yr NHTSA rule</span></td>
          <td>Under 25yr requires Registered Importer compliance — expensive.</td>
        </tr>
        <tr>
          <td>New Zealand</td>
          <td>0% duty + 15% GST</td>
          <td><span class="age-badge">No limit</span></td>
          <td>NZ$ border levy applies. Biosecurity inspection mandatory.</td>
        </tr>
      </tbody>
    </table>

    <div class="callout-red">
      <p><strong>Don't underestimate the landed cost:</strong> Duty is calculated on CIF value — meaning the car's purchase price plus freight plus insurance combined, not just what you paid at auction. On a USD 20,000 car with USD 1,500 freight, a 30% duty rate applies to USD 21,500+, not USD 20,000.</p>
    </div>
  </div>

  <!-- COST BREAKDOWN -->
  <div class="section">
    <div class="section-label">Real Cost Example</div>
    <h2>Sample landed cost: Toyota Land Cruiser to UAE</h2>
    <p>To make this concrete, here is a realistic cost breakdown for a 2019 Toyota Land Cruiser 200 GX-R, auctioned at USD 25,000, shipped to Dubai by RoRo.</p>

    <div class="cost-list">
      <div class="cost-row"><span class="cost-label">Auction hammer price</span><span class="cost-val">USD 25,000</span></div>
      <div class="cost-row"><span class="cost-label">Auction fee + Japan transport to port</span><span class="cost-val">USD 800</span></div>
      <div class="cost-row"><span class="cost-label">Export agent fee (de-registration, customs)</span><span class="cost-val">USD 300</span></div>
      <div class="cost-row"><span class="cost-label">RoRo ocean freight (Yokohama → Jebel Ali)</span><span class="cost-val">USD 1,100</span></div>
      <div class="cost-row"><span class="cost-label">Marine insurance (0.3% CIF)</span><span class="cost-val">USD 82</span></div>
      <div class="cost-row"><span class="cost-label">UAE customs duty (5% of CIF)</span><span class="cost-val">USD 1,354</span></div>
      <div class="cost-row"><span class="cost-label">Destination port handling + customs broker</span><span class="cost-val">USD 450</span></div>
      <div class="cost-row"><span class="cost-label"><strong>Total estimated landed cost</strong></span><span class="cost-val" style="color:var(--red)"><strong>≈ USD 29,086</strong></span></div>
    </div>

    <p style="margin-top:1rem">In this example, the total cost adds roughly <strong class="key">16% on top</strong> of the auction price. This ratio varies significantly by destination — in high-duty markets like Thailand or Malaysia, the premium can easily reach 100%+ of the vehicle's auction value.</p>
  </div>

  <!-- WHERE IT GETS HARD -->
  <div class="section">
    <div class="section-label">Where it gets complicated</div>
    <h2>The parts most buyers underestimate</h2>

    <h3>Bidding against professionals</h3>
    <p>At Japanese auction houses, you have 60–90 seconds to decide on each vehicle. Professional dealers are bidding hundreds of cars per month. If you're relying on an inexperienced agent — or trying to participate directly — you'll either lose every desirable lot or overbid on problematic ones. Market knowledge and speed matter enormously.</p>

    <h3>Pre-shipment inspection requirements</h3>
    <p>Countries like Kenya, Tanzania, Nigeria, and Ghana require a government-appointed pre-shipment inspection before the car leaves Japan. These must be arranged in advance — if the inspection isn't done before the car is loaded, it cannot be cleared at destination. Many first-time importers miss this completely.</p>

    <h3>Destination port storage fees</h3>
    <p>Once a vessel arrives, destination ports charge daily storage fees — typically USD 25–80 per day depending on port. If your paperwork isn't ready, those fees accumulate fast. A two-week delay easily adds USD 350–1,100 in avoidable charges.</p>

    <h3>Compliance modifications</h3>
    <p>Japan drives on the left, so headlights are aimed left. In most markets this requires adjustment or replacement before registration. Some countries require speedometer overlay conversion (km → miles), emissions compliance modification, or daytime running light installation. Factor these in before you calculate total cost.</p>

    <div class="callout-blue">
      <p><strong>The case for using a specialist exporter:</strong> Each of the above complications — auction bidding, pre-shipment inspection coordination, document preparation, carrier booking, and export clearance — is handled by an experienced exporter as a matter of routine. First-time importers handling these independently face steep learning curves at every step, with real financial risk at each one.</p>
    </div>
  </div>

  <!-- INTERNAL LINKS -->
  <div class="section">
    <div class="section-label">Related Guides</div>
    <h2>Read these before you buy</h2>
    <div class="related-grid">
      <a class="related-card" href="/en/blog/auction-grade-guide">
        <div class="related-label">Auction Knowledge</div>
        <div class="related-title">Japan Auction Grade System Explained: S, 4.5, R, RA — What They Mean</div>
      </a>
      <a class="related-card" href="/en/blog/odometer-fraud">
        <div class="related-label">Buying Safety</div>
        <div class="related-title">How to Spot Odometer Fraud on Japanese Used Cars: 5 Methods</div>
      </a>
      <a class="related-card" href="/en/blog/ferrari-guide">
        <div class="related-label">Luxury & Supercar</div>
        <div class="related-title">2026 Ferrari Used Car Buyer's Guide: Prices, Models & What to Avoid</div>
      </a>
    </div>
  </div>

  <!-- CTA -->
  <div class="section" style="border-bottom:none;padding-bottom:0">
    <div class="cta-section" id="cta">
      <div class="cta-eyebrow">ClickCar — Saitama, Japan</div>
      <h2 class="cta-title">We handle every step<br>described above</h2>
      <p class="cta-desc">
        From auction bidding to export clearance and ocean freight booking — ClickCar manages the entire Japan-side process on your behalf. You send us your target car and budget. We do the rest.
      </p>
      <div class="cta-steps">
        <div class="cta-step">
          <div class="cta-step-num">STEP 01</div>
          <div class="cta-step-text">You tell us what you want — make, model, grade, budget</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 02</div>
          <div class="cta-step-text">We source from USS, TAA, HAA auctions and bid on your behalf</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 03</div>
          <div class="cta-step-text">We handle all Japan-side documents, export clearance, and freight booking</div>
        </div>
        <div class="cta-step">
          <div class="cta-step-num">STEP 04</div>
          <div class="cta-step-text">Car ships to your port with all documents ready for customs clearance</div>
        </div>
      </div>
      <a class="cta-btn" href="https://clickcar.jp/en/contact">Get a Free Quote →</a>
      <p class="cta-note">English, Chinese & Japanese · Typically reply within 24 hours · No obligation</p>
    </div>
  </div>

</div>




</div>`,
};
