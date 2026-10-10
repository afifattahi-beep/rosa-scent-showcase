import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rosa Fragrance — The Essence of Elegance" },
      { name: "description", content: "Luxury oil-based perfumes in 6 ml bottles by Rosa Fragrance." },
      { property: "og:title", content: "Rosa Fragrance — The Essence of Elegance" },
      { property: "og:description", content: "Luxury oil-based perfumes in 6 ml bottles by Rosa Fragrance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The site itself is a single self-contained HTML file in /public.
function Index() {
  return (
    <iframe
      src="/rosa-fragrance.html"
      title="Rosa Fragrance"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
