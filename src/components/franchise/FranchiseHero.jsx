import Navbar from "../layout/Navbar.jsx";

function FranchiseHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image placeholder — set backgroundImage below once the photo is ready */}
      <div
        className="absolute inset-0 bg-neutral-800"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundImage: "url('/franchise-hero.jpg')",
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
            Franchise
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FranchiseHero;
