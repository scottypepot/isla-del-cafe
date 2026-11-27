import Reveal from "./Reveal.jsx";
import PlaceholderNote from "./PlaceholderNote.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { storyPillars } from "../data/storyData.js";

export default function StoryPillars() {
  return (
    <section
      id="story-pillars"
      className="overflow-hidden bg-isla-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <Reveal>
        <SectionHeading
          eyebrow={storyPillars.eyebrow}
          title={storyPillars.title}
          tone="dark"
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:mt-16 md:grid-cols-3">
        {storyPillars.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 120} className="h-full">
            <article className="group flex h-full flex-col border border-white/15 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-isla-gold/70 hover:bg-white/[0.03] sm:p-10">
              <span className="font-sans text-4xl font-extrabold text-isla-gold/80 transition-colors duration-300 group-hover:text-isla-gold">
                {item.number}
              </span>
              <h3 className="mt-6 font-sans text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
                {item.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 h-px w-10 bg-isla-gold transition-all duration-300 group-hover:w-20"
              />
              <p className="mt-5 font-sans text-base leading-relaxed text-white/75">
                {item.text}
              </p>

              {item.values && (
                <ul className="mt-5 space-y-2 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white/90">
                  {item.values.map((value) => (
                    <li key={value} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-isla-gold"
                      />
                      {value}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <PlaceholderNote tone="dark">{item.note}</PlaceholderNote>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
