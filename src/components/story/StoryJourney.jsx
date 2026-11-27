import Reveal from "./Reveal.jsx";
import PlaceholderNote from "./PlaceholderNote.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { storyJourney } from "../data/storyData.js";

export default function StoryJourney() {
  return (
    <section
      id="story-journey"
      className="overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <Reveal>
        <SectionHeading
          eyebrow={storyJourney.eyebrow}
          title={storyJourney.title}
        >
          {storyJourney.intro}
        </SectionHeading>
      </Reveal>

      <ol className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
        {/* Timeline line */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-4 top-2 w-px bg-isla-black/15 md:left-1/2 md:-translate-x-1/2"
        />

        {storyJourney.chapters.map((chapter, index) => {
          const isEven = index % 2 === 0;

          return (
            <li
              key={chapter.id}
              className="relative grid gap-8 pb-16 pl-14 last:pb-0 md:grid-cols-2 md:gap-0 md:pb-24 md:pl-0"
            >
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-isla-black/20 bg-white md:left-1/2 md:-translate-x-1/2"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-isla-gold" />
              </span>

              {/* Text */}
              <Reveal
                direction={isEven ? "left" : "right"}
                className={isEven ? "md:pr-16" : "md:order-2 md:pl-16"}
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-isla-gold">
                  {chapter.label}
                  <span className="mx-2 text-isla-black/30">/</span>
                  <span className="text-isla-black/50">{chapter.period}</span>
                </p>
                <h3 className="mt-3 font-sans text-2xl font-extrabold tracking-tight text-isla-black sm:text-3xl">
                  {chapter.title}
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-isla-black/70 sm:text-lg">
                  {chapter.text}
                </p>
                <PlaceholderNote>{chapter.note}</PlaceholderNote>
              </Reveal>

              {/* Photo */}
              <Reveal
                direction={isEven ? "right" : "left"}
                delay={120}
                className={isEven ? "md:pl-16" : "md:order-1 md:pr-16"}
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-isla-sand"
                  data-asset-slot={chapter.imageSlot}
                >
                  <img
                    src={chapter.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={`${chapter.imageClass} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/45 to-transparent" />
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
