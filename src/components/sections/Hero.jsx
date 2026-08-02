import backgroundImage from "../../assets/homepage.jpg";
import islaLogo from "../../assets/islalogo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-isla-black"
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Isla Cafe"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="mb-6 h-[clamp(140px,18vw,260px)] w-[clamp(140px,18vw,260px)]">
          <img
            src={islaLogo}
            alt="isla"
            className="h-full w-full scale-[2.05] object-contain"
          />
        </div>

        <p
          className="font-sans font-bold tracking-wide text-white"
          style={{ fontSize: "clamp(1.25rem, 2.2vw, 2rem)" }}
        >
          Your New Iced Coffee Standard.
        </p>

        <a
          href="#story"
          className="mt-8 border border-white font-sans font-semibold tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-isla-black"
          style={{
            fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
            padding: "clamp(0.9rem, 1.6vw, 1.25rem) clamp(2rem, 4vw, 3.25rem)",
          }}
        >
          OUR STORY
        </a>
      </div>
    </section>
  );
}
