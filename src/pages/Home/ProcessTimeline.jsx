import { motion } from "framer-motion";

import {
  FaComments,
  FaSearch,
  FaPencilRuler,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ProcessTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      icon: <FaComments size={25} />,
      description:
        "Understanding client requirements and project objectives.",
    },

    {
      id: 2,
      title: "Research & Planning",
      icon: <FaSearch size={25} />,
      description:
        "Analyzing spaces and preparing strategic design plans.",
    },

    {
      id: 3,
      title: "Design Visualization",
      icon: <FaPencilRuler size={25} />,
      description:
        "Creating realistic previews and premium design concepts.",
    },

    {
      id: 4,
      title: "Execution",
      icon: <FaTools size={25} />,
      description:
        "Implementing designs with precision and quality materials.",
    },

    {
      id: 5,
      title: "Final Delivery",
      icon: <FaCheckCircle size={25} />,
      description:
        "Delivering a refined and completed luxury experience.",
    },
  ];

  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <SectionTitle
          subtitle="Process"
          title="Our Working Journey"
          description="A simple and effective process that transforms ideas into premium spaces."
        />

        <div
          className="
          relative
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
          gap-8
          "
        >

          {/* Timeline line */}

          <div
            className="
            hidden
            lg:block

            absolute
            top-[45px]
            left-[10%]
            right-[10%]

            h-[2px]
            bg-gray-200
            "
          />

          {steps.map((step) => (

            <motion.div
              key={step.id}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: step.id * 0.15,
              }}

              className="
              relative
              z-10
              text-center
              "
            >

              {/* Circle */}

              <div
                className="
                w-[90px]
                h-[90px]

                mx-auto

                rounded-full

                bg-[var(--primary)]
                text-white

                flex
                items-center
                justify-center

                shadow-xl

                transition-all
                duration-300

                hover:scale-110
                "
              >
                {step.icon}
              </div>

              {/* Step Number */}

              <p
                className="
                mt-3
                text-sm
                font-medium
                text-[var(--primary)]
                "
              >
                Step {step.id}
              </p>

              {/* Title */}

              <h3
                className="
                mt-2
                text-xl
                font-bold
                "
              >
                {step.title}
              </h3>

              {/* Description */}

              <p
                className="
                mt-4
                text-gray-500
                leading-7
                px-2
                "
              >
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessTimeline;