import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import islaLogo from "../../assets/islalogo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  // No About page yet — left as a non-clickable placeholder until it's built.
  { label: "About Us", to: null },
  { label: "Menu", to: "/menu" },
];

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const contactRef = useRef(null);

  // Contact dropdown: hover or click opens it, and it stays open until
  // an outside click (or Escape) closes it — it no longer closes just
  // from moving the mouse away.
  useEffect(() => {
    if (!contactOpen) return;

    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setContactOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setContactOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contactOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="flex items-center justify-between px-6 pt-1 pb-5 sm:px-10 lg:px-16">
        {/* Logo mark */}
        <Link to="/" className="flex items-center" aria-label="isla home">
          <div
            className="overflow-hidden"
            style={{
              height: "clamp(56px, 8vw, 120px)",
              width: "clamp(48px, 6.5vw, 96px)",
            }}
          >
            <img
              src={islaLogo}
              alt="isla"
              className="h-full w-full scale-150 object-contain object-center"
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-9 font-sans text-xl font-medium tracking-wide text-white md:flex">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="transition-colors duration-200 hover:text-white/70"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <span
                  className="cursor-default text-white/50"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  {link.label}
                </span>
              </li>
            ),
          )}
          <li
            ref={contactRef}
            className="relative"
            onMouseEnter={() => setContactOpen(true)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors duration-200 hover:text-white/70"
              aria-haspopup="true"
              aria-expanded={contactOpen}
              onClick={() => setContactOpen((prev) => !prev)}
            >
              Contact
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${
                  contactOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {contactOpen && (
              <ul className="absolute right-0 top-full mt-3 w-44 rounded-md bg-isla-black/95 py-2 text-left shadow-lg backdrop-blur-sm">
                <li>
                  <Link
                    to="/#contact"
                    onClick={() => setContactOpen(false)}
                    className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link
                    to="/location"
                    onClick={() => setContactOpen(false)}
                    className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Locations
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`h-[1.5px] w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="mx-6 mb-4 rounded-lg bg-isla-black/95 px-6 py-6 font-sans text-white backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <li key={link.label}>
                  <Link to={link.to} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <span className="text-white/50" aria-disabled="true">
                    {link.label}
                  </span>
                </li>
              ),
            )}
            <li>
              <Link to="/#contact" onClick={() => setMobileOpen(false)}>
                Get in Touch
              </Link>
            </li>
            <li>
              <Link to="/location" onClick={() => setMobileOpen(false)}>
                Locations
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
