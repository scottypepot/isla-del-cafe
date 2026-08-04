function MenuItemCard({ name, image, variant }) {
  const isDrink = variant === "drink";

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex items-center justify-center overflow-hidden ${
          isDrink ? "rounded-2xl bg-menu-tile" : "bg-transparent"
        }`}
        style={{
          width: "clamp(84px, 9vw, 132px)",
          height: "clamp(84px, 9vw, 132px)",
        }}
      >
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span
            className={`text-xs ${isDrink ? "text-white/70" : "text-neutral-400"}`}
          >
            Image
          </span>
        )}
      </div>
      <p
        className="font-semibold text-black mt-3 md:mt-4"
        style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)" }}
      >
        {name}
      </p>
    </div>
  );
}

export default MenuItemCard;
