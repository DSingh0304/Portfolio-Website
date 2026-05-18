import { useState, useEffect } from "react";

const ScrollEnhancements = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Determine visibility of Back to Top button
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page starts scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🚀 Dynamic Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-[#1e222b]"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="h-full bg-gradient-to-r from-[#c778dd] to-[#e06c75] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 🔝 Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 z-40 bg-[#1e222b]/90 backdrop-blur border border-purple text-purple rounded-full hover:bg-purple hover:text-[#282c33] transition-all duration-300 shadow-xl cursor-pointer outline-none transform active:scale-95 ${
          showBackToTop 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll back to top of the page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollEnhancements;
