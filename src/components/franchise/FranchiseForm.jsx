import { useState } from "react";
import palmTree from "../../assets/palm-tree.png";
import { CheckIcon } from "../ui/icons.jsx";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Common disposable/temporary email providers — a simple, well-known
// signal that an inquiry probably isn't a genuine franchise lead.
const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "throwawaymail.com",
  "trashmail.com",
  "fakeinbox.com",
  "getnada.com",
];

const PHONE_PATTERN = /^[0-9+()\-.\s]{7,20}$/;

const BUDGET_OPTIONS = [
  "Under ₱500,000",
  "₱500,000 – ₱1,000,000",
  "₱1,000,000 – ₱3,000,000",
  "₱3,000,000+",
  "Not sure yet",
];

const WHY_FRANCHISE = [
  "Proven café concept with a growing local following",
  "Full training, recipes, and operations playbook provided",
  "Ongoing marketing and brand support from the team",
  "Site selection guidance based on our own store data",
];

// Order of the fields on screen — used to focus the first invalid one.
const FIELD_ORDER = ["fullName", "email", "phone", "preferredLocation", "message"];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  preferredLocation: "",
  budget: BUDGET_OPTIONS[0],
  message: "",
  website: "", // honeypot — real users never see or fill this
};

function validate(form) {
  const errors = {};

  if (form.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }

  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Enter a valid email address (e.g. name@example.com).";
  } else {
    const domain = form.email.trim().split("@")[1]?.toLowerCase();
    if (domain && DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
      errors.email =
        "Please use a permanent business or personal email, not a temporary one.";
    }
  }

  if (
    !PHONE_PATTERN.test(form.phone.trim()) ||
    form.phone.replace(/\D/g, "").length < 7
  ) {
    errors.phone = "Enter a valid phone number.";
  }

  if (form.preferredLocation.trim().length < 2) {
    errors.preferredLocation = "Tell us your preferred city or area.";
  }

  if (form.message.trim().length < 20) {
    errors.message =
      "Tell us a bit more about your interest (at least 20 characters).";
  }

  return errors;
}

/* ---------------------------------- */
/* Icons                               */
/* ---------------------------------- */

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4a2 2 0 01-2 2C9.5 22 2 14.5 2 6a2 2 0 012-2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="17" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="8"
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
  );
}

function BigCheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5l5 5L20 6" />
    </svg>
  );
}

/* ---------------------------------- */
/* Section label (numbered)            */
/* ---------------------------------- */

function SectionLabel({ number, title }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-isla-black font-sans text-xs font-bold text-white">
        {number}
      </span>
      <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-isla-black/60">
        {title}
      </p>
      <span className="h-px flex-1 bg-isla-black/10" />
    </div>
  );
}

/* ---------------------------------- */
/* Input field with icon               */
/* ---------------------------------- */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  icon,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-isla-black/70"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-isla-black/35">
            {icon}
          </span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full rounded-md border bg-white py-3 font-sans text-sm text-isla-black transition-colors focus:outline-none ${
            icon ? "pl-10 pr-4" : "px-4"
          } ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-isla-black/20 focus:border-isla-gold"
          }`}
        />
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 font-sans text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function FranchiseForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: real visitors never see or fill this field. If it's
    // filled, silently pretend the form succeeded instead of tipping
    // off the bot that it got caught.
    if (form.website.trim() !== "") {
      setIsSubmitted(true);
      return;
    }

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalid = FIELD_ORDER.find((name) => validationErrors[name]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
    // TODO: replace this with a real submission once the backend/email
    // service is wired up (e.g. EmailJS, or a POST to your own API
    // endpoint). This currently just simulates a network request so
    // the full UI/UX is ready — swapping this block for a real call
    // is the only change needed later.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your inquiry. Please try again, or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Left: branded sidebar */}
      <div className="relative overflow-hidden bg-isla-black px-8 py-10 text-white md:col-span-2 sm:px-10 md:py-12">
        <img
          src={palmTree}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-10 h-48 w-48 rotate-[8deg] object-contain opacity-[0.08]"
        />
        <span className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-isla-gold/20 blur-3xl" />

        <div className="relative z-10">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-isla-gold">
            Isla Del Café
          </p>
          <h2 className="mt-2 font-sans text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            Franchise With Us
          </h2>
          <p className="mt-4 font-sans text-sm text-white/70">
            Bring the Isla Del Café experience to your community. Tell us a bit
            about yourself and we'll take it from there.
          </p>

          <ul className="mt-8 flex flex-col gap-3.5">
            {WHY_FRANCHISE.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-isla-gold text-isla-black">
                  <CheckIcon />
                </span>
                <span className="font-sans text-sm text-white/85">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-wide text-white/50">
              Prefer to reach out directly?
            </p>
            <p className="mt-2 font-sans text-sm text-white/85">
              cebu@isladelcafé.com
            </p>
            <p className="font-sans text-sm text-white/85">+63 912 345 6789</p>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="bg-white px-8 py-10 md:col-span-3 sm:px-10 md:py-12">
        {isSubmitted ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-isla-gold text-isla-black">
              <BigCheckIcon />
            </span>
            <h3 className="mt-5 font-sans text-2xl font-extrabold uppercase text-isla-black">
              Thanks for your interest!
            </h3>
            <p className="mt-3 max-w-sm font-sans text-sm text-isla-black/70">
              We've received your franchise inquiry. Our team will review it and
              get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-8"
          >
            {/* Honeypot field — visually hidden from real users, still in the
                tab order for bots that auto-fill every input on the page. */}
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
              }}
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div>
              <SectionLabel number="1" title="Your Details" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  placeholder="Juan Dela Cruz"
                  icon={<UserIcon />}
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="juan@email.com"
                  icon={<MailIcon />}
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+63 912 345 6789"
                  icon={<PhoneIcon />}
                />
                <Field
                  label="Preferred City / Area"
                  name="preferredLocation"
                  value={form.preferredLocation}
                  onChange={handleChange}
                  error={errors.preferredLocation}
                  placeholder="e.g. Mandaue City"
                  icon={<PinIcon />}
                />
              </div>
            </div>

            <div>
              <SectionLabel number="2" title="Investment" />
              <label
                htmlFor="budget"
                className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-isla-black/70"
              >
                Estimated Investment Budget
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-isla-black/35">
                  <WalletIcon />
                </span>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-md border border-isla-black/20 bg-white py-3 pl-10 pr-10 font-sans text-sm text-isla-black transition-colors focus:border-isla-gold focus:outline-none"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-isla-black/35">
                  <ChevronIcon />
                </span>
              </div>
            </div>

            <div>
              <SectionLabel number="3" title="Tell Us More" />
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Your background, why you're interested in an Isla Del Café franchise, timeline, etc."
                className={`w-full resize-none rounded-md border px-4 py-3 font-sans text-sm text-isla-black transition-colors focus:outline-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-isla-black/20 focus:border-isla-gold"
                }`}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 font-sans text-xs text-red-500"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {submitError && (
              <p role="alert" className="-mb-4 font-sans text-sm text-red-500">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-isla-black px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-isla-gold hover:text-isla-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start"
            >
              {isSubmitting ? "Sending…" : "Submit Inquiry"}
            </button>
            <p className="-mt-4 font-sans text-xs text-isla-black/50">
              We typically respond within 2–3 business days.
            </p>
          </form>
        )}
      </div>
    </>
  );
}

export default FranchiseForm;
