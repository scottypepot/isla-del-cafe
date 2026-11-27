import { SHOW_PLACEHOLDER_NOTES } from "../data/storyData.js";

// Dashed "Owner to provide" callout shown under placeholder content.
// Hidden everywhere by flipping SHOW_PLACEHOLDER_NOTES in storyData.js.
export default function PlaceholderNote({ children, tone = "light" }) {
  if (!SHOW_PLACEHOLDER_NOTES || !children) return null;

  const toneClasses =
    tone === "dark"
      ? "border-white/30 text-white/70"
      : "border-isla-black/25 text-isla-black/60";

  return (
    <p
      className={`mt-6 border border-dashed px-4 py-3 font-sans text-xs leading-relaxed ${toneClasses}`}
    >
      <span className="mr-2 font-semibold uppercase tracking-[0.18em] text-isla-gold">
        Placeholder
      </span>
      {children}
    </p>
  );
}
