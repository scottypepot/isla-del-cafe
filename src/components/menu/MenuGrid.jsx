import MenuItemCard from "./MenuItemCard.jsx";

function MenuGrid({ heading, items }) {
  return (
    <div className="flex-1">
      <h2
        className="font-bold text-black text-center mb-10 md:mb-14"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
      >
        {heading}
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-neutral-400">
          No items yet — add them in menuData.js.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-14 justify-items-center">
          {items.map((item) => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              image={item.image}
              variant={item.category === "snacks" ? "snack" : "drink"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuGrid;
