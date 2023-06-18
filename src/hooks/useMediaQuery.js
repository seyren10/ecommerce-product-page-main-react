import { useEffect, useState } from "react";
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMediaQuery = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);

    //clean up
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, [query]);

  return [matches];
};
