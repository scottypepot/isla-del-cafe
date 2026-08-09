import MenuItemCard from "./MenuItemCard.jsx";

function MenuGrid({ items }) {
  if (items.length === 0) {
    return (
      <p className="text-center text-neutral-400">
        No items yet — add them in menuData.js.
      </p>
    );
  }

  return (
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
  );
}

export default MenuGrid;
