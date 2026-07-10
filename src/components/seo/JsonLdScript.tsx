/**
 * Generic `<script type="application/ld+json">` wrapper. Centralizes the
 * dangerouslySetInnerHTML pattern used by every JSON-LD block in the site.
 */
export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The JSON is built from local constants (never user input) — safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}