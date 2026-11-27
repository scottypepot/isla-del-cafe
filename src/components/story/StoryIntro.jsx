import Reveal from "./Reveal.jsx";
import PlaceholderNote from "./PlaceholderNote.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { storyIntro } from "../data/storyData.js";

export default function StoryIntro() {
  return (
    <section
      id="story-intro"
      className="overflow-hidden bg-isla-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-12 md:gap-12 lg:gap-20">
        {/* Photo with offset frame */}
        <Reveal direction="left" className="md:col-span-5">
          <div
            className="relative mx-auto w-full max-w-sm md:max-w-none"
            data-asset-slot={storyIntro.imageSlot}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full border border-isla-gold sm:-bottom-5 sm:-right-5"
            />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-isla-sand">
              <img
                src={storyIntro.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="md:col-span-7">
          <Reveal delay={100}>
            <SectionHeading
              eyebrow={storyIntro.eyebrow}
              title={storyIntro.title}
              align="left"
            />
          </Reveal>

          <Reveal delay={200} className="mt-8 space-y-5">
            {storyIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-base leading-relaxed text-isla-black/75 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={300}>
            <blockquote className="mt-10 border-l-2 border-isla-gold pl-6">
              <p className="font-sans text-xl font-bold tracking-wide text-isla-black sm:text-2xl">
                {storyIntro.quote}
              </p>
            </blockquote>
            <PlaceholderNote>{storyIntro.note}</PlaceholderNote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
