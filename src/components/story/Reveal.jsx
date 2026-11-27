import useReveal from "../../hooks/useReveal.js";

// Wraps content so it fades/slides in once when scrolled into view.
// direction: "up" (default) | "left" | "right"  — the side it slides in from.
export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
}) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
