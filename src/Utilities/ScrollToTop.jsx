// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableDiv = document.querySelector(".parent"); // Update the selector
    if (scrollableDiv) {
      if ("scrollBehavior" in document.documentElement.style) {
        scrollableDiv.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollableDiv.scrollTo(0, 0); // Fallback for older browsers
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
