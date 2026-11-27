import Footer from "../layout/Footer.jsx";
import ScrollProgress from "../story/ScrollProgress.jsx";
import StoryHero from "../story/StoryHero.jsx";
import StoryIntro from "../story/StoryIntro.jsx";
import StoryJourney from "../story/StoryJourney.jsx";
import StoryPillars from "../story/StoryPillars.jsx";
import StoryClosing from "../story/StoryClosing.jsx";

// Dedicated "Our Story" page (route: /our-story).
// All copy comes from ../data/storyData.js — see the notes there.
function OurStory() {
  return (
    <>
      <ScrollProgress />
      <StoryHero />
      <StoryIntro />
      <StoryJourney />
      <StoryPillars />
      <StoryClosing />
      <Footer />
    </>
  );
}

export default OurStory;
