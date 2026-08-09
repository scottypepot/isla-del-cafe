import Footer from "../layout/Footer.jsx";
import LocationHero from "../location/LocationHero.jsx";
import LocationCard from "../location/LocationCard.jsx";
import { locations } from "../data/locationsData.js";

function Location() {
  return (
    <>
      <LocationHero />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h2
          className="font-bold text-isla-black mb-10 md:mb-14"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Find Your Nearest Isla
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Location;
