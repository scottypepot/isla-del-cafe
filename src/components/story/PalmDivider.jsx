import palmTree from "../../assets/palm-tree.png";

// Line – palm tree – line ornament, same motif used in the homepage
// "Find Your Nearest Isla Del Café" section.
export default function PalmDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12 bg-white/60 sm:w-16" />
      <img
        src={palmTree}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
      />
      <span className="h-px w-12 bg-white/60 sm:w-16" />
    </div>
  );
}
