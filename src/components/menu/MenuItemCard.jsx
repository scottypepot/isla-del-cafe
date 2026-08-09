import { useEffect, useState } from "react";

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L15 15M15 1L1 15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuItemCard({ name, image, variant, ingredients = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDrink = variant === "drink";

  // While the popup is open: lock background scroll, allow Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group flex flex-col items-center text-center focus:outline-none"
      >
        <div
          className={`flex items-center justify-center overflow-hidden ring-2 ring-transparent transition-all duration-200 group-hover:scale-105 group-hover:ring-isla-gold group-focus-visible:scale-105 group-focus-visible:ring-isla-gold ${
            isDrink ? "rounded-2xl bg-menu-tile" : "bg-transparent"
          }`}
          style={{
            width: "clamp(84px, 9vw, 132px)",
            height: "clamp(84px, 9vw, 132px)",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span
              className={`text-xs ${isDrink ? "text-white/70" : "text-neutral-400"}`}
            >
              Image
            </span>
          )}
        </div>

        <p
          className="font-semibold text-black mt-3 md:mt-4 transition-colors duration-200 group-hover:text-isla-gold"
          style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)" }}
        >
          {name}
        </p>

        <span className="mt-1 font-sans text-[0.65rem] font-semibold uppercase tracking-wide text-isla-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Tap to view ingredients
        </span>
      </button>

      {isOpen && (
        <div
          className="modal-backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} details`}
            className="modal-panel-in relative w-full max-w-sm overflow-hidden rounded-lg bg-isla-cream"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Plain color header band — no image, just the tile color as a backdrop */}
            <div
              className={`relative flex h-20 items-center px-5 sm:px-6 ${
                isDrink ? "bg-menu-tile" : "bg-isla-sand"
              }`}
            >
              <h3
                className={`font-sans text-xl font-extrabold uppercase pr-10 ${
                  isDrink ? "text-white" : "text-isla-black"
                }`}
              >
                {name}
              </h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${
                  isDrink
                    ? "bg-black/25 text-white hover:bg-black/45"
                    : "bg-isla-black/10 text-isla-black hover:bg-isla-black/20"
                }`}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-isla-black/50">
                Ingredients
              </p>

              {ingredients.length > 0 ? (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-full border border-isla-black/15 bg-white px-3 py-1.5 font-sans text-xs text-isla-black"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 font-sans text-sm text-isla-black/50">
                  Ingredient list coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItemCard;
