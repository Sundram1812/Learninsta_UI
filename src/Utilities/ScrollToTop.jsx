// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const scrollableDiv = document.querySelector(".parent"); // Update the selector
    console.log("Scrollable Div:", scrollableDiv); // Debugging
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
