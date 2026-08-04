function FunnelIcon() {
  return (
    <svg
      width="18"
      height="18"
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

function MenuFilterSidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="w-full md:w-[200px] shrink-0">
      <div className="flex items-center gap-2 font-semibold text-black mb-8 md:mb-10">
        <FunnelIcon />
        <span style={{ fontSize: "1.125rem" }}>Filter</span>
      </div>

      <nav className="flex md:flex-col gap-4 md:gap-5 overflow-x-auto md:overflow-visible">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`text-left whitespace-nowrap text-black ${
              activeCategory === category.id
                ? "font-semibold"
                : "font-normal opacity-80"
            }`}
            style={{ fontSize: "1.125rem" }}
          >
            {category.navLabel}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default MenuFilterSidebar;
