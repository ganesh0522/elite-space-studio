import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back To Top"
      className="
      fixed
      bottom-6
      right-6
      z-50
      
      w-[50px]
      h-[50px]

      flex
      items-center
      justify-center

      rounded-full

      bg-[var(--primary)]
      text-white

      shadow-lg

      transition-all
      duration-300

      hover:scale-110
      hover:bg-[var(--accent)]

      active:scale-95
      "
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default BackToTop;