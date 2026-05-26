import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";

import projects from "../../data/projects";

import BaseCard from "../../components/Card/BaseCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Projects = () => {
  const filters = [
    "All",
    "Residential",
    "Corporate",
    "Retail",
    "Modern",
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
    <>
      {/* SEO */}

      <Helmet>
        <title>
          Projects | EliteSpace Studio
        </title>

        <meta
          name="description"
          content="Explore premium interior and architectural projects by EliteSpace Studio."
        />
      </Helmet>

      <section className="section-padding bg-[var(--background)]">

        <div className="container-custom">

          <SectionTitle
            subtitle="Projects"
            title="Our Portfolio"
            description="Explore our carefully crafted premium projects."
          />

          {/* Filter Buttons */}

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-4
            mb-12
            "
          >
            {filters.map((item) => (

              <button
                key={item}
                onClick={() =>
                  setActiveFilter(item)
                }
                className={`
                  
                  px-6
                  py-3
                  rounded-full

                  font-medium

                  transition-all
                  duration-300

                  ${
                    activeFilter === item
                      ? "bg-[var(--primary)] text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                {item}
              </button>

            ))}
          </div>

          {/* Projects Grid */}

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            "
          >
            {filteredProjects.map((item) => (

              <BaseCard key={item.id}>

                {/* Image */}

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  group
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    h-[250px]
                    w-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0

                    bg-black/30

                    opacity-0
                    group-hover:opacity-100

                    transition
                    duration-500
                    "
                  />
                </div>

                {/* Content */}

                <div className="mt-6">

                  <p
                    className="
                    text-sm
                    font-medium
                    text-[var(--primary)]
                    "
                  >
                    {item.category}
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-gray-500
                    "
                  >
                    <FaMapMarkerAlt />

                    <span>
                      {item.location}
                    </span>

                  </div>

                </div>

              </BaseCard>

            ))}
          </div>

        </div>

      </section>
    </>
  );
};

export default Projects;