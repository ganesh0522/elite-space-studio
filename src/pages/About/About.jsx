import { Helmet } from "react-helmet-async";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  const statistics = [
    {
      id: 1,
      value: "500+",
      label: "Projects Completed",
    },

    {
      id: 2,
      value: "300+",
      label: "Happy Clients",
    },

    {
      id: 3,
      value: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About | EliteSpace Studio
        </title>

        <meta
          name="description"
          content="Learn about EliteSpace Studio, Bangalore's premium interior design and architecture company."
        />
      </Helmet>

      <section
        className="
        section-padding
        bg-[var(--background)]
        "
      >
        <div className="container-custom">

          <SectionTitle
            subtitle="About Us"
            title="Creating Elegant Spaces Across Bangalore"
            description="Designing modern environments with innovation, creativity, and premium craftsmanship."
          />

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
            "
          >

            <div>

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
                alt="EliteSpace Studio Interior Design"
                className="
                w-full
                rounded-[30px]
                shadow-xl
                object-cover
                "
              />

            </div>

            <div>

              <h2
                className="
                text-3xl
                md:text-4xl
                font-bold
                "
              >
                Our Story
              </h2>

              <p
                className="
                mt-6
                text-gray-500
                leading-8
                "
              >
                EliteSpace Studio began with a vision to
                redefine interior experiences through
                creativity, premium aesthetics, and
                functional design solutions.
              </p>

              <p
                className="
                mt-5
                text-gray-500
                leading-8
                "
              >
                Based in Bangalore, we specialize in
                transforming residential, commercial,
                and retail spaces into environments
                that inspire comfort, productivity,
                and timeless beauty.
              </p>

              <p
                className="
                mt-5
                text-gray-500
                leading-8
                "
              >
                Our team combines innovative thinking,
                detailed planning, and exceptional
                craftsmanship to deliver premium spaces
                tailored to every client.
              </p>

              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-5
                mt-10
                "
              >

                {statistics.map((item) => (

                  <div
                    key={item.id}
                    className="
                    bg-white
                    p-6
                    rounded-2xl

                    text-center

                    shadow-md

                    hover:-translate-y-2
                    hover:shadow-xl

                    transition-all
                    duration-300
                    "
                  >

                    <h3
                      className="
                      text-3xl
                      font-bold
                      text-[var(--primary)]
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                      mt-2
                      text-gray-500
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;