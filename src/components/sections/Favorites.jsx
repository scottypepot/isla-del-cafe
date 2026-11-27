import { Link } from "react-router-dom";
import ExpressoMenu from "../../assets/expresso-menu.jpg";
import MatchaMenu from "../../assets/matcha-menu.jpg";
import MilkMenu from "../../assets/milk-menu.jpg";

const CATEGORIES = [
  {
    key: "espresso",
    lines: ["espresso", "based"],
    slot: "menu-category-espresso",
    image: ExpressoMenu,
  },
  {
    key: "matcha",
    lines: ["matcha", "series"],
    slot: "menu-category-matcha",
    image: MatchaMenu,
  },
  {
    key: "milk",
    lines: ["milk", "based"],
    slot: "menu-category-milk",
    image: MilkMenu,
  },
];

export default function Favorites() {
  return (
    <section
      id="favorites"
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div
        className="mx-auto text-center"
        style={{ maxWidth: "clamp(320px, 88vw, 1080px)" }}
      >
        <h2 className="font-sans text-3xl font-extrabold tracking-tight text-isla-black sm:text-4xl md:text-5xl">
          All Your Favorites in One Place
        </h2>
        <p className="mt-3 font-sans text-base text-isla-black/60 sm:text-lg">
          Endless choices, all in one place.
        </p>

        {/* Category cards */}
        <div className="mt-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.key}
              to={`/menu?tag=${category.key}`}
              data-asset-slot={category.slot}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm bg-isla-sand transition-transform duration-300 ease-out hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-isla-black"
              style={{ maxWidth: "clamp(200px, 22vw, 300px)" }}
            >
              <img
                src={category.image}
                alt={`${category.lines.join(" ")} menu`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/40" />

              <span className="absolute inset-x-0 bottom-6 translate-y-3 text-center font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Menu
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/menu"
          className="mt-12 inline-block border border-isla-black px-10 py-3 font-sans text-base font-bold text-isla-black transition-colors duration-200 hover:bg-isla-black hover:text-white"
        >
          Our Menu's
        </Link>
      </div>
    </section>
  );
}
