import SectionTitle from "../../components/SectionTitle/SectionTitle";
import testimonials from "../../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-[var(--background)]">
      
      <div className="container-custom">

        <SectionTitle
          subtitle="Testimonials"
          title="Client Experiences"
          description="Trusted by homeowners and businesses for premium interior solutions."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (

            <SwiperSlide key={item.id}>

              <div
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-md

                hover:shadow-xl
                transition-all
                duration-300

                h-full
                "
              >

                {/* User Details */}

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-[60px]
                    h-[60px]
                    rounded-full
                    object-cover
                    "
                  />

                  <div>

                    <h3
                      className="
                      font-bold
                      text-lg
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                      text-sm
                      text-gray-500
                      "
                    >
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* Review */}

                <p
                  className="
                  mt-6
                  text-gray-500
                  leading-7
                  "
                >
                  "{item.review}"
                </p>

                {/* Rating */}

                <div
                  className="
                  flex
                  gap-1
                  mt-6
                  text-yellow-500
                  "
                >
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

              </div>

            </SwiperSlide>

          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default TestimonialsSection;