// Shared eyebrow + title (+ optional intro) used by the Our Story sections.
export default function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "center",
}) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-isla-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-white" : "text-isla-black"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 font-sans text-base sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } max-w-2xl ${isDark ? "text-white/70" : "text-isla-black/60"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
