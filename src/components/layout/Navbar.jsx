import { useState } from "react";
import islaLogo from "../../assets/islalogo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
];

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="flex items-center justify-between px-6 pt-1 pb-5 sm:px-10 lg:px-16">
        {/* Logo mark */}
        <a href="#home" className="flex items-center" aria-label="isla home">
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
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-9 font-sans text-xl font-medium tracking-wide text-white md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
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
                  <a
                    href="#contact"
                    className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Locations
                  </a>
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
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
