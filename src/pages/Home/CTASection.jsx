import PrimaryButton from "../../components/Buttons/PrimaryButton";

const CTASection = () => {
  return (
    <section
      className="
      relative
      py-28
      overflow-hidden

      bg-[var(--secondary)]
      text-white
      "
    >
      {/* Background Decoration */}

      <div
        className="
        absolute
        inset-0
        opacity-10
        "
      >
        <div
          className="
          absolute
          top-[-100px]
          left-[-100px]

          w-[300px]
          h-[300px]

          rounded-full

          bg-[var(--primary)]
          blur-[100px]
          "
        />

        <div
          className="
          absolute
          bottom-[-100px]
          right-[-100px]

          w-[300px]
          h-[300px]

          rounded-full

          bg-[var(--accent)]
          blur-[100px]
          "
        />
      </div>

      {/* Content */}

      <div
        className="
        container-custom
        relative
        z-10
        text-center
        "
      >
        {/* Heading */}

        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          "
        >
          Ready To Redesign
          <br />
          Your Space?
        </h2>

        {/* Description */}

        <p
          className="
          mt-6
          max-w-[650px]
          mx-auto

          text-gray-300
          text-base
          md:text-lg
          leading-8
          "
        >
          Transform your ideas into elegant interiors with
          creative design, premium craftsmanship, and modern
          luxury experiences.
        </p>

        {/* Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-5
          "
        >
          <PrimaryButton>
            Schedule Meeting
          </PrimaryButton>

          <PrimaryButton
            className="
            bg-transparent
            border
            border-white

            hover:border-[var(--accent)]
            "
          >
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;