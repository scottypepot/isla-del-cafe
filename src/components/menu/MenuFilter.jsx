import { useEffect, useRef, useState } from "react";
import palmTree from "../../assets/palm-tree.png";
import useModalBehavior from "../../hooks/useModalBehavior.js";
import { CheckIcon, CloseIcon } from "../ui/icons.jsx";

function FunnelIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 4 21 4 14 12.5 14 19 10 21 10 12.5 3 4" />
    </svg>
  );
}

function FilterPill({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-full border px-5 py-3 font-sans text-sm font-semibold transition-colors duration-200 ${
        isActive
          ? "border-isla-gold bg-isla-gold text-isla-black"
          : "border-white/15 text-white hover:border-isla-gold/60 hover:bg-white/5"
      }`}
    >
      {label}
      {isActive && <CheckIcon />}
    </button>
  );
}

function MenuFilter({
  categories,
  tags,
  activeCategory,
  activeTag,
  onSelectCategory,
  onSelectTag,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);
  const activeTagData = tags.find((t) => t.id === activeTag);
  const triggerLabel =
    activeTagData?.label ?? activeCategoryData?.navLabel ?? "All";

  const panelRef = useModalBehavior(isOpen, () => setIsOpen(false));

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);

  useEffect(() => () => clearTimeout(scrollTimer.current), []);

  // Show the scrollbar while scrolling, hide it ~0.8s after the last scroll event
  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => setIsScrolling(false), 800);
  };

  const handleSelectCategory = (categoryId) => {
    onSelectCategory(categoryId);
    setIsOpen(false);
  };

  const handleSelectTag = (tagId) => {
    onSelectTag(tagId);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full border border-isla-black px-5 py-2.5 font-sans text-sm font-semibold text-isla-black transition-colors duration-200 hover:bg-isla-black hover:text-white"
      >
        <FunnelIcon />
        Filter
        <span className="rounded-full bg-isla-black/10 px-2 py-0.5 text-xs font-semibold transition-colors duration-200 group-hover:bg-white/20">
          {triggerLabel}
        </span>
      </button>

      {isOpen && (
        <div
          className="modal-backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            onScroll={handleScroll}
            aria-modal="true"
            aria-label="Filter menu items"
            ref={panelRef}
            tabIndex={-1}
            className={`modal-panel-in filter-popup-scroll outline-none relative w-full max-w-md max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-lg bg-isla-black ${
              isScrolling ? "is-scrolling" : ""
            }`}
          >
            {/* Decorative top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-isla-gold via-isla-sand to-isla-gold" />

            {/* Glowing palm watermark, tucked in the corner, clipped by the panel */}
            <img
              src={palmTree}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-8 h-40 w-40 rotate-[8deg] object-contain opacity-[0.08]"
            />
            <span className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-isla-gold/20 blur-3xl" />

            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-isla-black px-5 py-4 sm:px-6">
              <div>
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-isla-gold">
                  Isla Del Café
                </p>
                <h3 className="font-sans text-lg font-extrabold uppercase text-white">
                  Filter Menu
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close filter"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-isla-gold hover:bg-isla-gold hover:text-isla-black"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative z-10 flex flex-col gap-6 p-5 sm:p-6">
              <div>
                <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-isla-gold/80">
                  Category
                </p>
                <div className="flex flex-col gap-3">
                  {categories.map((category) => (
                    <FilterPill
                      key={category.id}
                      label={category.navLabel}
                      isActive={!activeTag && category.id === activeCategory}
                      onClick={() => handleSelectCategory(category.id)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-isla-gold/80">
                  Drinks By Type
                </p>
                <div className="flex flex-col gap-3">
                  {tags.map((tag) => (
                    <FilterPill
                      key={tag.id}
                      label={tag.label}
                      isActive={activeTag === tag.id}
                      onClick={() => handleSelectTag(tag.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuFilter;
