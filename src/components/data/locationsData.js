// Central data source for the Location page.
// `image` is left null on every branch — drop in the real photo path
// once it's ready to import.
// `mapQuery` is what the map searches on Google Maps: "Isla Del Cafe - <branch>",
// which finds the branch's own Google listing. If a pin lands in the wrong
// spot, refine that text or add exact latitude/longitude.
// `latitude` / `longitude` (decimal degrees) pin the EXACT spot. Fill them in
// per branch (Google Maps: right-click the store -> click the coordinates to
// copy them). While null, the map falls back to searching `mapQuery`.
// Once the backend exists, the Location page loads this list from the API
// instead (see src/services/locationsApi.js); this file is then the fallback.

export const locations = [
  {
    id: "swu-urgello",
    name: "SWU Urgello",
    address: "AB Aznar Rd",
    hours: ["WEEKDAYS | 6AM – 1AM", "WEEKENDS | 9AM – 1AM"],
    social: "isladelcafe.ph",
    mapQuery: "Isla Del Cafe - SWU Urgello",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "cit-university",
    name: "CIT-University",
    address: "Mambaling",
    hours: ["WEEKDAYS | 7AM – 10PM", "WEEKENDS | 9AM – 7PM"],
    social: "isladelcafe.citu",
    mapQuery: "Isla Del Cafe - CIT University",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "banilad",
    name: "Banilad",
    address: "24 J. Panis St.",
    hours: ["MONDAY – SUNDAY", "8:30AM – 10PM"],
    social: "isladelcafe.banilad",
    mapQuery: "Isla Del Cafe - Banilad",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "uv-main",
    name: "UV Main",
    address: "Sanciangko St, Kamagayan, Cebu City",
    hours: ["MONDAY – SUNDAY", "8AM – 12AM"],
    social: "isladelcafe.uvmain",
    mapQuery: "Isla Del Cafe - UV Main",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "mandaue",
    name: "Mandaue",
    address: "One Centro Building, Ouano St.",
    hours: ["WEEKDAYS | 9AM – 12AM", "WEEKENDS | 11AM – 11PM"],
    social: "isladelcafe.mandaue_",
    mapQuery: "Isla Del Cafe - Mandaue",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "talisay",
    name: "Talisay",
    address: "Jose Rizal St., Poblacion",
    hours: ["MONDAY – SUNDAY", "10AM – 11PM"],
    social: "isladelcafe_talisay",
    mapQuery: "Isla Del Cafe - Talisay",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "bulacao",
    name: "Bulacao",
    address: "Boundary Commercial Building, Bulacao",
    hours: ["MON – SAT | 9:30AM – 10PM", "SUNDAYS | 12PM – 10PM"],
    social: "isladelcafe.bulacao",
    mapQuery: "Isla Del Cafe - Bulacao",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "carcar-city",
    name: "Carcar City",
    address: "St. Vincent Street, Poblacion 1",
    hours: ["MONDAY – SUNDAY", "11AM – 11PM"],
    social: "isladelcafe.carcar",
    mapQuery: "Isla Del Cafe - Carcar City",
    latitude: null,
    longitude: null,
    image: null,
  },
  {
    id: "inayawan",
    name: "Inayawan",
    address: "D'Hive Arcade, F. Jaca St.",
    hours: ["MONDAY – SUNDAY", "11:30AM – 12:00AM"],
    social: "isladelcafe.inayawan",
    mapQuery: "Isla Del Cafe - Inayawan",
    latitude: null,
    longitude: null,
    image: null,
  },
];
