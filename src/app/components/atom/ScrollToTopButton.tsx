import { useState, useEffect } from "react";

import Image from "next/image";

/**
 * ScrollToTopButton component provides a button that appears when the user scrolls
 * down a certain distance and allows them to scroll back to the top of the page smoothly.
 *
 * @component
 */

export const ScrollToTopButton = () => {
  // State to determine the visibility of the scroll-to-top button
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <Image
            src="https://img.icons8.com/?size=60&amp;id=100040&amp;format=png"
            alt="Up Arrow"
            width="30"
            height="30"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
