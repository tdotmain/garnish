import * as React from "react";
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [viewport, setViewport] = React.useState({
    width: undefined,
    height: undefined,
  });
  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    if (!viewport.width) handleResize(); // runs once
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // only onMount
  return viewport;
}
