import { motion } from "framer-motion";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const HeroSection = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      "
    >
      {/* Background Image */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          max-w-[750px]
          text-white
          "
        >
          {/* Small Heading */}

          <p
            className="
            uppercase
            tracking-[5px]
            text-[var(--primary)]
            font-medium
            "
          >
            Luxury Interior Studio
          </p>

          {/* Main Heading */}

          <h1
            className="
            mt-5
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            "
          >
            Designing Beautiful Spaces
            <br />
            For Modern Living
          </h1>

          {/* Description */}

          <p
            className="
            mt-8
            text-gray-300
            text-base
            md:text-lg
            max-w-[600px]
            leading-8
            "
          >
            We transform interiors into memorable experiences
            through innovative design, modern creativity, and
            premium craftsmanship.
          </p>

          {/* Action Buttons */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "
          >
            <PrimaryButton>
              Explore Projects
            </PrimaryButton>

            <PrimaryButton
              className="
              bg-transparent
              border
              border-white
              hover:border-[var(--accent)]
              "
            >
              Book Consultation
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;