import Navbar from "../layout/Navbar.jsx";
import locationHeroBg from "../../assets/homepage.jpg";

function LocationHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — same photo as the homepage hero */}
      <div
        className="absolute inset-0 bg-neutral-800"
        style={{
          backgroundImage: `url(${locationHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 42%",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <Navbar />
        <div
          className="flex items-center justify-center text-center px-6"
          style={{ minHeight: "clamp(220px, 28vw, 330px)" }}
        >
          <h1
            className="font-bold uppercase text-white tracking-wide"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Location
          </h1>
        </div>
      </div>
    </section>
  );
}

export default LocationHero;
