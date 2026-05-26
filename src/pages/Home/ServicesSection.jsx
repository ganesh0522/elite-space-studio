import {
  FaPencilRuler,
  FaDraftingCompass,
  FaCouch,
  FaLayerGroup,
} from "react-icons/fa";

import BaseCard from "../../components/Card/BaseCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ServicesSection = () => {
  
  const services = [
    {
      id: 1,
      title: "Interior Design",
      icon: <FaPencilRuler size={30} />,
      description:
        "Modern and elegant interior solutions designed for comfort and luxury living.",
    },

    {
      id: 2,
      title: "Architecture",
      icon: <FaDraftingCompass size={30} />,
      description:
        "Creative architectural concepts with functionality and premium aesthetics.",
    },

    {
      id: 3,
      title: "Turnkey Solutions",
      icon: <FaCouch size={30} />,
      description:
        "End-to-end project execution from concept development to final delivery.",
    },

    {
      id: 4,
      title: "Space Planning",
      icon: <FaLayerGroup size={30} />,
      description:
        "Optimized layouts that maximize beauty, efficiency, and usability.",
    },
  ];

  return (
    <section
      className="
      section-padding
      bg-white
      "
    >
      <div className="container-custom">

        <SectionTitle
          subtitle="Services"
          title="Premium Design Solutions"
          description="Complete luxury interior solutions from planning to execution."
        />

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {services.map((service) => (

            <BaseCard key={service.id}>

              <div
                className="
                w-[65px]
                h-[65px]

                rounded-full

                flex
                items-center
                justify-center

                bg-[var(--primary)]/10
                text-[var(--primary)]

                mb-6
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                "
              >
                {service.title}
              </h3>

              <p
                className="
                mt-4
                text-gray-500
                leading-7
                "
              >
                {service.description}
              </p>

            </BaseCard>

          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;