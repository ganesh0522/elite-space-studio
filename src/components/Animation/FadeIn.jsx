import { motion } from "framer-motion";

const FadeIn = ({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  distance = 50,
  scale = 1,
  className = "",
}) => {

  const directions = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      className={className}
      
      initial={{
        opacity: 0,
        x: directions[direction].x,
        y: directions[direction].y,
        scale: scale,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;