import { useState, useEffect } from "react";

export function useIsOnMobile(breakpoint = 768) {
  const [isOnMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set up media query listener
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    
    // Update state based on match
    const handleMatch = (e) => setIsMobile(e.matches);
    
    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMatch);
    return () => mediaQuery.removeEventListener("change", handleMatch);
  }, [breakpoint]);

  return isOnMobile;
}