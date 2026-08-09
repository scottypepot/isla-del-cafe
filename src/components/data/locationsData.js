// Central data source for the Location page.
// `image` is left null on every branch — drop in the real photo path
// once it's ready to import.
// `mapQuery` is the address string sent to Google's map embed — refine
// these if a pin lands in the wrong spot.

export const locations = [
  {
    id: "swu-urgello",
    name: "SWU Urgello",
    address: "AB Aznar Rd",
    hours: ["WEEKDAYS | 6AM – 1AM", "WEEKENDS | 9AM – 1AM"],
    social: "isladelcafe.ph",
    mapQuery: "AB Aznar Road, Cebu City, Philippines",
    image: null,
  },
  {
    id: "cit-university",
    name: "CIT-University",
    address: "Mambaling",
    hours: ["WEEKDAYS | 7AM – 10PM", "WEEKENDS | 9AM – 7PM"],
    social: "isladelcafe.citu",
    mapQuery: "Mambaling, Cebu City, Philippines",
    image: null,
  },
  {
    id: "banilad",
    name: "Banilad",
    address: "24 J. Panis St.",
    hours: ["MONDAY – SUNDAY", "8:30AM – 10PM"],
    social: "isladelcafe.banilad",
    mapQuery: "J. Panis St, Banilad, Cebu City, Philippines",
    image: null,
  },
  {
    id: "uv-main",
    name: "UV Main",
    address: "Sanciangko St, Kamagayan, Cebu City",
    hours: ["MONDAY – SUNDAY", "8AM – 12AM"],
    social: "isladelcafe.uvmain",
    mapQuery: "Sanciangko St, Kamagayan, Cebu City, Philippines",
    image: null,
  },
  {
    id: "mandaue",
    name: "Mandaue",
    address: "One Centro Building, Ouano St.",
    hours: ["WEEKDAYS | 9AM – 12AM", "WEEKENDS | 11AM – 11PM"],
    social: "isladelcafe.mandaue_",
    mapQuery: "Ouano Ave, Mandaue City, Cebu, Philippines",
    image: null,
  },
  {
    id: "talisay",
    name: "Talisay",
    address: "Jose Rizal St., Poblacion",
    hours: ["MONDAY – SUNDAY", "10AM – 11PM"],
    social: "isladelcafe_talisay",
    mapQuery: "Jose Rizal St, Poblacion, Talisay City, Cebu, Philippines",
    image: null,
  },
  {
    id: "bulacao",
    name: "Bulacao",
    address: "Boundary Commercial Building, Bulacao",
    hours: ["MON – SAT | 9:30AM – 10PM", "SUNDAYS | 12PM – 10PM"],
    social: "isladelcafe.bulacao",
    mapQuery: "Bulacao, Cebu City, Philippines",
    image: null,
  },
  {
    id: "carcar-city",
    name: "Carcar City",
    address: "St. Vincent Street, Poblacion 1",
    hours: ["MONDAY – SUNDAY", "11AM – 11PM"],
    social: "isladelcafe.carcar",
    mapQuery: "St. Vincent St, Poblacion 1, Carcar City, Cebu, Philippines",
    image: null,
  },
  {
    id: "inayawan",
    name: "Inayawan",
    address: "D'Hive Arcade, F. Jaca St.",
    hours: ["MONDAY – SUNDAY", "11:30AM – 12:00AM"],
    social: "isladelcafe.inayawan",
    mapQuery: "F. Jaca St, Inayawan, Cebu City, Philippines",
    image: null,
  },
];
