// Branch locations service.
//
// Where the list comes from:
//   - VITE_API_URL set   -> GET {VITE_API_URL}/locations
//   - VITE_API_URL empty -> the bundled list in components/data/locationsData.js
//
// Set VITE_API_URL in a `.env` file (see `.env.example`). If the API request
// fails, the page falls back to the bundled list so visitors always see
// branches (the failure is logged to the console).
//
// Expected API response: an array of branches (or { data: [...] } /
// { locations: [...] }). Each branch:
//   {
//     id:        "banilad",                     // unique, string
//     name:      "Banilad",
//     address:   "24 J. Panis St.",
//     hours:     ["MONDAY – SUNDAY", "8:30AM – 10PM"],   // array of lines (a single string also works)
//     social:    "isladelcafe.banilad",         // optional Instagram handle, no @
//     latitude:  10.3379,                       // EXACT pin location (number or numeric string)
//     longitude: 123.9111,
//     mapQuery:  "…",                           // optional text search used only when there are no coordinates
//     image:     "https://…/banilad.jpg"        // optional photo URL
//   }
// Missing optional fields are fine; unusable coordinates are ignored.

import { locations as bundledLocations } from "../components/data/locationsData.js";

const API_URL = (import.meta.env?.VITE_API_URL ?? "").trim().replace(/\/+$/, "");

export const isApiConfigured = API_URL !== "";

function toCoordinate(value, limit) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) && Math.abs(number) <= limit ? number : null;
}

function normalizeLocation(raw) {
  const name = String(raw?.name ?? "").trim();
  const address = String(raw?.address ?? "").trim();

  let hours = raw?.hours ?? [];
  if (typeof hours === "string") hours = [hours];
  if (!Array.isArray(hours)) hours = [];

  let latitude = toCoordinate(raw?.latitude ?? raw?.lat, 90);
  let longitude = toCoordinate(raw?.longitude ?? raw?.lng ?? raw?.lon, 180);
  // A pin needs both numbers.
  if (latitude === null || longitude === null) {
    latitude = null;
    longitude = null;
  }

  return {
    id: String(raw?.id ?? name),
    name,
    address,
    hours: hours.map(String),
    social: raw?.social ? String(raw.social).replace(/^@/, "") : null,
    latitude,
    longitude,
    mapQuery: raw?.mapQuery
      ? String(raw.mapQuery)
      : `Isla Del Cafe - ${name}`,
    image: raw?.image || null,
  };
}

export function getBundledLocations() {
  return bundledLocations.map(normalizeLocation);
}

export async function fetchLocations({ signal } = {}) {
  if (!isApiConfigured) return getBundledLocations();

  const response = await fetch(`${API_URL}/locations`, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Locations request failed (${response.status})`);
  }

  const payload = await response.json();
  const list = Array.isArray(payload)
    ? payload
    : (payload?.data ?? payload?.locations);
  if (!Array.isArray(list)) {
    throw new Error("Locations response was not a list");
  }

  return list.map(normalizeLocation).filter((item) => item.name);
}
