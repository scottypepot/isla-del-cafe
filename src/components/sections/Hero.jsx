import { Link } from "react-router-dom";
import backgroundImage from "../../assets/homepage.jpg";
import islaLogo from "../../assets/islalogo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-isla-black"
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div
          className="hero-fade-up mb-6 h-[clamp(140px,18vw,260px)] w-[clamp(140px,18vw,260px)]"
          style={{ animationDelay: "0.15s" }}
        >
          <img
            src={islaLogo}
            alt="isla"
            className="h-full w-full scale-[2.05] object-contain"
          />
        </div>

        <p
          className="hero-fade-up font-sans font-bold tracking-wide text-white"
          style={{
            fontSize: "clamp(1.25rem, 2.2vw, 2rem)",
            animationDelay: "0.55s",
          }}
        >
          Your New Iced Coffee Standard.
        </p>

        <Link
          to="/our-story"
          className="hero-fade-up mt-8 border border-white font-sans font-semibold tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-isla-black"
          style={{
            fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
            padding: "clamp(0.9rem, 1.6vw, 1.25rem) clamp(2rem, 4vw, 3.25rem)",
            animationDelay: "0.95s",
          }}
        >
          OUR STORY
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <a
          href="#favorites"
          aria-label="Scroll to explore"
          className="hero-scroll-cue flex flex-col items-center gap-1.5 text-white/70 transition-colors duration-200 hover:text-white"
        >
          <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em]">
            Scroll
          </span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L8 8.5L15 1.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
