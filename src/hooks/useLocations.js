import { useEffect, useState } from "react";
import {
  fetchLocations,
  getBundledLocations,
  isApiConfigured,
} from "../services/locationsApi.js";

// Loads the branch list for the Location page.
// Returns { locations, isLoading }.
//
// Without an API configured the bundled list is available immediately (no
// loading flash). With an API, isLoading is true until it answers; if the
// request fails the bundled list is used instead.
export default function useLocations() {
  const [state, setState] = useState(() =>
    isApiConfigured
      ? { locations: [], isLoading: true }
      : { locations: getBundledLocations(), isLoading: false },
  );

  useEffect(() => {
    if (!isApiConfigured) return;

    const controller = new AbortController();

    fetchLocations({ signal: controller.signal })
      .then((locations) => setState({ locations, isLoading: false }))
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.warn("Could not load locations from the API:", error);
        setState({ locations: getBundledLocations(), isLoading: false });
      });

    return () => controller.abort();
  }, []);

  return state;
}
