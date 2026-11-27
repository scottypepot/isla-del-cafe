import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar.jsx";
import PalmDivider from "./PalmDivider.jsx";
import backgroundImage from "../../assets/homepage.jpg";
import { storyHero } from "../data/storyData.js";

export default function StoryHero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-isla-black">
      {/* Background image (same photo as the homepage hero) */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="story-hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      {/* Soft pool of shade behind the centered text for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-isla-black/70 to-transparent" />

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-28 text-center">
        <p
          className="hero-fade-up font-sans text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm"
          style={{ animationDelay: "0.15s" }}
        >
          {storyHero.eyebrow}
        </p>

        <h1
          className="hero-fade-up mt-5 font-sans font-extrabold uppercase tracking-wide text-white"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            lineHeight: 1.02,
            animationDelay: "0.45s",
          }}
        >
          {storyHero.title}
        </h1>

        <div
          className="hero-fade-up mt-8"
          style={{ animationDelay: "0.8s" }}
        >
          <PalmDivider />
        </div>

        <p
          className="hero-fade-up mt-8 max-w-xl font-sans font-medium tracking-wide text-white/90"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
            animationDelay: "1.1s",
          }}
        >
          {storyHero.intro}
        </p>
      </div>

      {/* Bottom row: back link + scroll cue */}
      <div className="relative z-10 flex flex-col-reverse items-center gap-6 px-6 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-10 lg:px-16">
        <Link
          to="/"
          className="group flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-white"
        >
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            <path
              d="M15 5H1M1 5L5 1M1 5L5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <a
          href="#story-intro"
          aria-label="Scroll to read our story"
          className="hero-scroll-cue flex flex-col items-center gap-1.5 text-white/70 transition-colors duration-200 hover:text-white sm:absolute sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2"
        >
          <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em]">
            Scroll
          </span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            aria-hidden="true"
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
