import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import PalmDivider from "./PalmDivider.jsx";
import closingBackground from "../../assets/locationsection-homepage.jpg";
import { storyClosing } from "../data/storyData.js";

export default function StoryClosing() {
  return (
    <section
      id="story-closing"
      className="relative overflow-hidden bg-isla-black px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[length:100%_auto] md:bg-[position:center_45%]"
        style={{ backgroundImage: `url(${closingBackground})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-isla-gold">
            {storyClosing.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance font-sans text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
            {storyClosing.title}
          </h2>
          <PalmDivider className="mt-8" />
          <p className="mx-auto mt-8 max-w-xl text-balance font-sans text-base text-white/90 sm:text-lg">
            {storyClosing.text}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/menu"
              className="inline-block w-full max-w-[16rem] border border-white bg-white px-10 py-4 font-sans text-xs font-semibold tracking-[0.2em] text-isla-black transition-colors duration-200 hover:bg-transparent hover:text-white sm:w-auto"
            >
              EXPLORE THE MENU
            </Link>
            <Link
              to="/location"
              className="inline-block w-full max-w-[16rem] border border-white px-10 py-4 font-sans text-xs font-semibold tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-isla-black sm:w-auto"
            >
              OUR LOCATIONS
            </Link>
          </div>
          <Link
            to="/"
            className="mt-8 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/85 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
          >
            Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
