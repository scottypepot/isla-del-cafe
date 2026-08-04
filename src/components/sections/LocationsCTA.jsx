import PalmTreeIcon from "../../assets/palm-tree.png";
import LocationsBackground from "../../assets/locationsection-homepage.jpg";

export default function LocationsCTA() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-isla-black px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${LocationsBackground})`,
          backgroundSize: "100%",
          backgroundPosition: "center 50%",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
          Find Your Nearest Isla Del Café
        </h2>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-white/60 sm:w-16" />
          <img
            src={PalmTreeIcon}
            alt="Palm tree"
            className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
          />
          <span className="h-px w-12 bg-white/60 sm:w-16" />
        </div>

        <p className="mt-6 font-sans text-base text-white/90 sm:text-lg">
          Your favorite flavors are waiting at a location near you.
        </p>

        <a
          href="#our-locations"
          className="mt-8 inline-block border border-white px-10 py-4 font-sans text-xs font-semibold tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-isla-black"
        >
          OUR LOCATIONS
        </a>
      </div>
    </section>
  );
}
