import {
  FaHome,
  FaBuilding,
  FaStore,
} from "react-icons/fa";

import BaseCard from "../../components/Card/BaseCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ClientCategories = () => {
  
  const categories = [
    {
      id: 1,
      title: "Residential Interiors",
      icon: <FaHome size={35} />,
      description:
        "Elegant home designs crafted for comfort, beauty, and modern living.",
    },

    {
      id: 2,
      title: "Office Interiors",
      icon: <FaBuilding size={35} />,
      description:
        "Smart and functional workspaces designed for productivity.",
    },

    {
      id: 3,
      title: "Retail Spaces",
      icon: <FaStore size={35} />,
      description:
        "Premium retail environments designed for memorable customer experiences.",
    },
  ];

  return (
    <section className="section-padding bg-[var(--background)]">
      
      <div className="container-custom">

        <SectionTitle
          subtitle="Categories"
          title="Spaces We Transform"
          description="We create elegant and functional spaces tailored for every lifestyle and business need."
        />

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {categories.map((item) => (
            
            <BaseCard key={item.id}>
              
              <div
                className="
                w-[70px]
                h-[70px]

                flex
                items-center
                justify-center

                rounded-full

                bg-[var(--primary)]/10
                text-[var(--primary)]

                mb-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-4
                text-gray-500
                leading-7
                "
              >
                {item.description}
              </p>
            </BaseCard>

          ))}
        </div>

      </div>

    </section>
  );
};

export default ClientCategories;