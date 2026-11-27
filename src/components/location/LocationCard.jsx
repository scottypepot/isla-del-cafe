import { useState } from "react";
import useModalBehavior from "../../hooks/useModalBehavior.js";
import { CloseIcon } from "../ui/icons.jsx";
import palmTree from "../../assets/palm-tree.png";

function LocationCard({
  id,
  name,
  address,
  hours,
  social,
  mapQuery,
  latitude,
  longitude,
  image,
}) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [hasLoadedMap, setHasLoadedMap] = useState(false);

  const openMap = () => {
    setIsMapOpen(true);
    setHasLoadedMap(true); // lazy-mount the iframe on first open only
  };

  const closeMap = () => setIsMapOpen(false);

  const panelRef = useModalBehavior(isMapOpen, closeMap);

  // Exact pin when the branch has coordinates (from the API); otherwise fall
  // back to a text search on the address.
  const hasCoordinates = latitude != null && longitude != null;
  const mapTarget = hasCoordinates
    ? `${latitude},${longitude}`
    : encodeURIComponent(mapQuery);

  const mapSrc = `https://www.google.com/maps?q=${mapTarget}&z=${
    hasCoordinates ? 17 : 15
  }&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapTarget}`;
  const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapTarget}`;

  return (
    <div className="flex flex-col">
      {/* Poster tile */}
      <div
        className="group relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-800 transition-transform duration-300 hover:scale-[1.02]"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

        {/* Photo placeholder — shown until the branch has an `image` */}
        {!image && (
          <div
            data-asset-slot={`location-${id}-photo`}
            className="absolute inset-3 flex flex-col items-center justify-start gap-2 rounded-md border border-dashed border-white/15 bg-gradient-to-br from-neutral-700/70 via-neutral-800 to-neutral-950 pt-[9%]"
          >
            <img
              src={palmTree}
              alt=""
              aria-hidden="true"
              className="h-10 w-10 opacity-60 sm:h-12 sm:w-12"
            />
            <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/55">
              Photo coming soon
            </span>
          </div>
        )}

        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
          <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            Isla Del Café
          </span>

          <div>
            <h3 className="font-sans text-2xl font-extrabold uppercase leading-[1.05] text-isla-gold sm:text-3xl">
              {name}
            </h3>
            <p className="mt-1 font-sans text-sm text-white sm:text-base">
              {address}
            </p>

            <div className="mt-4">
              <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.15em] text-isla-gold">
                Store Hours
              </span>
              <div className="mt-1 space-y-0.5 font-sans text-xs text-white/90 sm:text-sm">
                {hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            {social && (
              <p className="mt-4 font-sans text-xs text-white/70">@{social}</p>
            )}
          </div>
        </div>
      </div>

      {/* Trigger button */}
      <button
        type="button"
        onClick={openMap}
        className="mt-4 w-full border border-isla-black px-6 py-3 font-sans text-sm font-bold text-isla-black transition-colors duration-200 hover:bg-isla-black hover:text-white"
      >
        Show Location
      </button>

      {/* Map popup */}
      {isMapOpen && (
        <div
          className="modal-backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeMap}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} location map`}
            ref={panelRef}
            tabIndex={-1}
            className="modal-panel-in outline-none relative w-full max-w-2xl overflow-hidden rounded-lg bg-isla-cream"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-isla-black/10 px-5 py-4 sm:px-6">
              <div>
                <h3 className="font-sans text-lg font-extrabold uppercase text-isla-black sm:text-xl">
                  {name}
                </h3>
                <p className="font-sans text-xs text-isla-black/60 sm:text-sm">
                  {address}
                </p>
              </div>

              <button
                type="button"
                onClick={closeMap}
                aria-label="Close map"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-isla-black/20 text-isla-black transition-colors duration-200 hover:bg-isla-black hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            {hasLoadedMap && (
              <iframe
                title={`${name} location map`}
                src={mapSrc}
                loading="lazy"
                allowFullScreen
                style={{ border: 0 }}
                className="h-[60vh] w-full sm:h-[26rem]"
              />
            )}

            <div className="flex flex-col gap-3 border-t border-isla-black/10 px-5 py-4 sm:flex-row sm:px-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-isla-black bg-isla-black px-5 py-3 text-center font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-transparent hover:text-isla-black"
              >
                Get Directions
              </a>
              <a
                href={openInMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-isla-black px-5 py-3 text-center font-sans text-sm font-bold text-isla-black transition-colors duration-200 hover:bg-isla-black hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationCard;
