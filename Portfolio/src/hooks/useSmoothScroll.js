import { useCallback } from "react";

export const useScmmothScroll = () =>
  useCallback((target) => {
    if (!target) return;
    if (target.startsWith("#")) {
      const el = document.querySelector(target);
      el && el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
