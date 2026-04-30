import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route navigation starts at the top of the page.
 * If the URL contains a hash (e.g. /#contact), scroll to that element instead,
 * accounting for the fixed header height.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the destination section is mounted
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 96; // matches h-20 header + buffer
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
