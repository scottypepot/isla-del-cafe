import FoodPandaLogo from "../../assets/foodpanda-logo.png";
import GrabFoodLogo from "../../assets/grab-logo.png";

const PARTNERS = [
  {
    key: "grabfood",
    label: "GrabFood",
    href: "https://food.grab.com/",
    image: GrabFoodLogo,
  },
  {
    key: "foodpanda",
    label: "foodpanda",
    href: "https://www.foodpanda.ph/",
    image: FoodPandaLogo,
  },
];

export default function DeliveryPartners() {
  return (
    <section className="bg-white px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16">
      <h2 className="font-sans text-2xl font-extrabold tracking-tight text-isla-black sm:text-3xl md:text-4xl">
        Your Favorites, Just a Tap Away
      </h2>

      <div className="mt-14 flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-28 lg:gap-36">
        {PARTNERS.map((partner) => (
          <a
            key={partner.key}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={partner.label}
            className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-105"
          >
            <img
              src={partner.image}
              alt={partner.label}
              className="w-auto object-contain"
              style={{ height: "clamp(90px, 11vw, 160px)" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
