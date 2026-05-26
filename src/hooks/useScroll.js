import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] =
    useState(0);

  const [scrollDirection, setScrollDirection] =
    useState("up");

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Current position

      setScrollPosition(currentScrollY);

      // Detect if page moved

      setIsScrolled(currentScrollY > 50);

      // Detect direction

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return {
    scrollPosition,
    scrollDirection,
    isScrolled,
  };
};

export default useScroll;