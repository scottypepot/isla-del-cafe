import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Menu from "./components/pages/Menu.jsx";
import Location from "./components/pages/Location.jsx";
import Franchise from "./components/pages/Franchise.jsx";
import palmTree from "./assets/palm-tree.png";

const LOADER_DURATION = 650; // how long the branded loader stays fully visible
const FADE_DURATION = 300; // how long its exit fade takes

function App() {
  const { pathname, search, hash } = useLocation();
  const routeKey = pathname + search;

  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isFirstRender = useRef(true);
  const timeouts = useRef([]);

  // Scrolls to the element matching the current #hash if one exists and
  // is found on the page, otherwise resets to the top. Used for real page
  // changes (instant, hidden behind the loader below).
  const scrollToHashOrTop = () => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  // Effect A — runs on real route changes (pathname or query string).
  // Handles the branded loader + resets/positions scroll for the new page.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      scrollToHashOrTop();
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    if (prefersReducedMotion) {
      scrollToHashOrTop();
      return;
    }

    setIsLoading(true);
    setIsFadingOut(false);
    scrollToHashOrTop();

    timeouts.current.push(
      setTimeout(() => setIsFadingOut(true), LOADER_DURATION),
    );
    timeouts.current.push(
      setTimeout(() => {
        setIsLoading(false);
        setIsFadingOut(false);
      }, LOADER_DURATION + FADE_DURATION),
    );

    return () => timeouts.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  // Effect B — runs when only the #hash changes (e.g. clicking "Get in
  // Touch" while already on the Home page). No loader, just a smooth
  // in-page scroll to the target section.
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-isla-black transition-opacity ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center">
            <span className="loader-glow" />
            <img
              src={palmTree}
              alt=""
              className="loader-palm relative z-10 h-24 w-auto object-contain sm:h-32"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="loader-dot" style={{ animationDelay: "0s" }} />
            <span className="loader-dot" style={{ animationDelay: "0.15s" }} />
            <span className="loader-dot" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      )}

      <div key={routeKey} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/franchise" element={<Franchise />} />
          {/* /about and /contact routes go here once those pages exist */}
        </Routes>
      </div>
    </>
  );
}

export default App;
