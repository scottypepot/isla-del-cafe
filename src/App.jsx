import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Menu from "./components/pages/Menu.jsx";
import palmTree from "./assets/palm-tree.png";

const LOADER_DURATION = 650;
const FADE_DURATION = 300;

function App() {
  const { pathname, search } = useLocation();
  const routeKey = pathname + search;

  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isFirstRender = useRef(true);
  const timeouts = useRef([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    setIsLoading(true);
    setIsFadingOut(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

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
  }, [routeKey]);

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
          {/* /about and /contact routes go here once those pages exist */}
        </Routes>
      </div>
    </>
  );
}

export default App;
