import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Menu from "./components/pages/Menu.jsx";

function App() {
  const { pathname, search } = useLocation();

  // Resets scroll position to the top on every route change.
  // Without this, React Router keeps whatever scroll offset the
  // previous page had, so clicking a link from deep in the Home
  // page lands you in the same spot on the Menu page.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return (
    // The `key` forces React to unmount/remount this div on every
    // navigation, which restarts the CSS animation below each time —
    // that's what makes each page transition feel "new" instead of static.
    <div key={pathname + search} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* /about and /contact routes go here once those pages exist */}
      </Routes>
    </div>
  );
}

export default App;
