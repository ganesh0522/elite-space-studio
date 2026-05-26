import { Helmet } from "react-helmet-async";

import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import services from "../../data/services";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BaseCard from "../../components/Card/BaseCard";

const Services = () => {
  return (
    <>
      {/* SEO */}

      <Helmet>
        <title>
          Services | EliteSpace Studio
        </title>

        <meta
          name="description"
          content="Explore premium interior design and architecture solutions offered by EliteSpace Studio."
        />
      </Helmet>

      <section className="section-padding bg-[var(--background)]">

        <div className="container-custom">

          <SectionTitle
            subtitle="Services"
            title="Premium Design Solutions"
            description="Luxury interior and architectural solutions designed for modern lifestyles."
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            "
          >

            {services.map((item) => (

              <BaseCard key={item.id}>

                <div
                  className="
                  flex
                  flex-col
                  h-full
                  "
                >

                  {/* Service Title */}

                  <h2
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    {item.title}
                  </h2>

                  {/* Description */}

                  <p
                    className="
                    mt-4
                    text-gray-500
                    leading-7
                    "
                  >
                    {item.description}
                  </p>

                  {/* Benefits */}

                  <ul
                    className="
                    mt-6
                    space-y-4
                    "
                  >
                    {item.benefits.map(
                      (benefit, index) => (

                        <li
                          key={index}
                          className="
                          flex
                          items-center
                          gap-3
                          "
                        >
                          <FaCheckCircle
                            className="
                            text-[var(--primary)]
                            "
                          />

                          <span>
                            {benefit}
                          </span>

                        </li>

                      )
                    )}
                  </ul>

                  {/* Bottom Button */}

                  <button
                    className="
                    mt-8

                    flex
                    items-center
                    gap-3

                    text-[var(--primary)]
                    font-medium

                    hover:gap-4
                    transition-all
                    duration-300
                    "
                  >
                    Learn More

                    <FaArrowRight />
                  </button>

                </div>

              </BaseCard>

            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Services;