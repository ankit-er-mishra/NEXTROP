import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isFirstRender = useRef(true);

  const scrollKey = `scroll-position:${location.pathname}`;

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [scrollKey]);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navigationEntry?.type === "reload";

    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (isReload) {
        const savedPosition = sessionStorage.getItem(scrollKey);

        if (savedPosition) {
          setTimeout(() => {
            window.scrollTo(0, Number(savedPosition));
          }, 0);
        }
      }

      return;
    }

    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType, scrollKey]);

  return null;
}

export default ScrollToTop;