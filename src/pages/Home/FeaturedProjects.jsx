import { useState } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BaseCard from "../../components/Card/BaseCard";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa",
      category: "Residential",
      location: "Whitefield, Bangalore",

      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
    },

    {
      id: 2,
      title: "Modern Workspace",
      category: "Commercial",
      location: "Electronic City, Bangalore",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
    },

    {
      id: 3,
      title: "Retail Boutique",
      category: "Retail",
      location: "Indiranagar, Bangalore",

      image:
        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200",
    },

    {
      id: 4,
      title: "Coffee Lounge",
      category: "Retail",
      location: "Koramangala, Bangalore",

      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200",
    },
  ];

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Retail",
  ];

  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <section
      className="
      section-padding
      bg-[var(--background)]
      "
    >
      <div className="container-custom">

        <SectionTitle
          subtitle="Projects"
          title="Featured Designs"
          description="Explore premium interior spaces crafted with modern aesthetics and thoughtful design."
        />

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mb-12
          "
        >
          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
              
              px-6
              py-3
              rounded-full

              font-medium

              transition-all
              duration-300

              ${
                activeFilter === filter
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }

              `}
            >
              {filter}
            </button>

          ))}
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {filteredProjects.map((project) => (

            <BaseCard key={project.id}>

              <div
                className="
                relative
                overflow-hidden
                rounded-2xl
                group
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  h-[250px]
                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-black/40

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                  "
                />

              </div>

              <div className="mt-5">

                <p
                  className="
                  text-sm
                  font-medium
                  text-[var(--primary)]
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                  mt-2
                  text-xl
                  font-bold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-gray-500
                  "
                >
                  {project.location}
                </p>

              </div>

            </BaseCard>

          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;