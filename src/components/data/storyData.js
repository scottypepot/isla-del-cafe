// Central data source for the "Our Story" page (/our-story).
//
// ALL COPY BELOW IS PLACEHOLDER. Nothing here is a real fact about Isla Del
// Café: no founding dates, milestones, numbers, awards or quotes. When the
// owner supplies the real story, replace the text in this one file; the
// layout, animations and responsiveness are already done.
//
// Every block has a `note` describing exactly what the owner needs to
// provide. While SHOW_PLACEHOLDER_NOTES is true, those notes are shown on the
// page as dashed "Owner to provide" callouts so nothing placeholder can be
// mistaken for final copy. Set it to false before going live.
//
// Images are existing site assets standing in as photo slots. Swap each import
// for the owner's own photography (the `data-asset-slot` names on the page
// match the keys used here).

import introPhoto from "../../assets/locationsection-homepage.jpg";
import chapterOnePhoto from "../../assets/menu-section-navbar.jpg";
import chapterTwoPhoto from "../../assets/homepage.jpg";
import chapterThreePhoto from "../../assets/matcha-menu.jpg";
import chapterFourPhoto from "../../assets/milk-menu.jpg";

// How each placeholder photo is framed inside its 4:3 slot. The "drinks only"
// crop trims the printed category title off the menu artwork so it reads as a
// photo. Real photos from the owner can simply use COVER.
const COVER = "absolute inset-0 h-full w-full object-cover origin-center";
const CUP_CROP =
  "absolute inset-0 h-full w-full object-cover object-[50%_72%] origin-center";
const DRINKS_ONLY =
  "absolute inset-x-0 bottom-0 h-[212%] w-full object-cover object-bottom origin-bottom";

export const SHOW_PLACEHOLDER_NOTES = true;

export const storyHero = {
  eyebrow: "The Isla Del Café Story",
  title: "Our Story",
  intro: "Every cup has a story behind it. This is the place where we share ours.",
};

export const storyIntro = {
  eyebrow: "Who We Are",
  title: "Where Every Cup Begins",
  paragraphs: [
    "Isla Del Café is more than a place to pick up a drink. This space is reserved for a short, warm introduction to who we are, what we care about, and what guests can expect from us.",
    "Here the owner can describe the heart of the brand in a few sentences: the people, the passion, and the standard we hold ourselves to with every order.",
  ],
  // Existing brand tagline from the homepage hero.
  quote: "Your New Iced Coffee Standard.",
  image: introPhoto,
  imageSlot: "story-intro-photo",
  note: "Owner to provide: a short introduction (two brief paragraphs) and one photo of the team, the shop, or a signature drink.",
};

export const storyJourney = {
  eyebrow: "Our Journey",
  title: "A Story Worth Sharing",
  intro:
    "Four chapters, ready for the real story. Each one has a place for a heading, a few paragraphs, and a photo.",
  chapters: [
    {
      id: "beginning",
      label: "Chapter One",
      title: "How It Started",
      text: "Every brand begins with a moment. Use this chapter to tell where the idea came from and what first set things in motion.",
      period: "Date to be added",
      image: chapterOnePhoto,
      imageClass: COVER,
      imageSlot: "story-chapter-1-photo",
      note: "Owner to provide: the founding story in the owner's own words, plus a photo from the early days if one exists.",
    },
    {
      id: "purpose",
      label: "Chapter Two",
      title: "Why We Began",
      text: "Behind the menu is a reason. This chapter is for the purpose and motivation that shaped Isla Del Café and still guide it today.",
      period: "Date to be added",
      image: chapterTwoPhoto,
      imageClass: CUP_CROP,
      imageSlot: "story-chapter-2-photo",
      note: "Owner to provide: the motivation behind the business and what the team set out to offer.",
    },
    {
      id: "growth",
      label: "Chapter Three",
      title: "Growing Along the Way",
      text: "Share the milestones that shaped the journey, the new chapters, and the people who helped along the way.",
      period: "Date to be added",
      image: chapterThreePhoto,
      imageClass: DRINKS_ONLY,
      imageSlot: "story-chapter-3-photo",
      note: "Owner to provide: confirmed milestones with dates, and permission to name any people or partners.",
    },
    {
      id: "difference",
      label: "Chapter Four",
      title: "What Makes Us Different",
      text: "Every café has its own character. Describe the details, the craft, and the care that make Isla Del Café the one people remember.",
      period: "Today",
      image: chapterFourPhoto,
      imageClass: DRINKS_ONLY,
      imageSlot: "story-chapter-4-photo",
      note: "Owner to provide: what sets the café apart, in a few honest sentences.",
    },
  ],
};

export const storyPillars = {
  eyebrow: "What Guides Us",
  title: "Mission, Vision & Values",
  items: [
    {
      id: "mission",
      number: "01",
      title: "Our Mission",
      text: "A clear, one-or-two sentence statement of what Isla Del Café sets out to do for its guests every day.",
      note: "Owner to provide: the official mission statement.",
    },
    {
      id: "vision",
      number: "02",
      title: "Our Vision",
      text: "A short description of where the brand hopes to go, and the difference it hopes to make along the way.",
      note: "Owner to provide: the official vision statement.",
    },
    {
      id: "values",
      number: "03",
      title: "Our Values",
      text: "The principles the team stands behind. List three to five, each with a single line of explanation.",
      values: ["Core Value One", "Core Value Two", "Core Value Three"],
      note: "Owner to provide: the brand's actual core values.",
    },
  ],
};

export const storyClosing = {
  eyebrow: "Thank You",
  title: "Every Visit Adds to the Story",
  text: "Come taste what we have been working on, and be part of the next chapter.",
};
