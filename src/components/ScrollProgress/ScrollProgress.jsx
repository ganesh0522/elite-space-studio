import { useEffect, useState } from "react";

const ScrollProgress = ({
  height = "h-[4px]",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame =
        requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    updateScrollProgress();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-full
        z-[999]
      "
    >
      <div
        style={{
          width: `${scrollProgress}%`,
        }}
        className={`
          ${height}
          
          bg-gradient-to-r
          from-[var(--primary)]
          to-[var(--accent)]

          transition-all
          duration-150
        `}
      />
    </div>
  );
};

export default ScrollProgress;