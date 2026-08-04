import FooterBackground from "../../assets/contact-section.jpg";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex items-center justify-center overflow-hidden bg-isla-black px-6 py-24 text-center sm:px-10 lg:px-16"
      style={{ minHeight: "clamp(460px, 55vw, 680px)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_70%] bg-no-repeat"
        style={{ backgroundImage: `url(${FooterBackground})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-xl">
        <h2 className="font-sans text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
          Get In Touch
        </h2>
        <p className="mt-4 font-sans text-sm text-white/80 sm:text-base">
          Drop us a message or give us a call we're here to make your Isla Del
          Café experience even better
        </p>
        <div className="mt-6 space-y-1 font-sans text-sm text-white/90 sm:text-base">
          <p>
            <a
              href="mailto:cebu@isladelcafe.com"
              className="transition-colors hover:text-white"
            >
              cebu@isladelcafé.com
            </a>
          </p>
          <p>
            <a
              href="tel:+639123456789"
              className="transition-colors hover:text-white"
            >
              +63 912 345 6789
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
