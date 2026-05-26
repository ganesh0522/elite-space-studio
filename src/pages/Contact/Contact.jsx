import { Helmet } from "react-helmet-async";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact | EliteSpace Studio
        </title>

        <meta
          name="description"
          content="Contact EliteSpace Studio Bangalore for premium interior design solutions."
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
            subtitle="Contact"
            title="Let's Build Your Dream Space"
            description="Get in touch and let's create elegant and modern spaces together."
          />

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-start
            "
          >

            {/* Contact Form */}

            <div
              className="
              bg-white
              p-8
              rounded-[30px]
              shadow-lg
              "
            >
              <form className="space-y-5">

                <div>

                  <label className="font-medium">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                    w-full
                    mt-2
                    p-4
                    rounded-xl
                    border
                    outline-none

                    focus:border-[var(--primary)]
                    transition-all
                    "
                  />

                </div>

                <div>

                  <label className="font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                    w-full
                    mt-2
                    p-4
                    rounded-xl
                    border
                    outline-none

                    focus:border-[var(--primary)]
                    transition-all
                    "
                  />

                </div>

                <div>

                  <label className="font-medium">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="
                    w-full
                    mt-2
                    p-4
                    rounded-xl
                    border
                    outline-none

                    focus:border-[var(--primary)]
                    transition-all
                    "
                  />

                </div>

                <div>

                  <label className="font-medium">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about your project..."
                    className="
                    w-full
                    mt-2
                    p-4
                    rounded-xl
                    border
                    outline-none

                    resize-none

                    focus:border-[var(--primary)]
                    transition-all
                    "
                  />

                </div>

                <PrimaryButton>
                  Send Message
                </PrimaryButton>

              </form>
            </div>

            {/* Office Details */}

            <div
              className="
              bg-white
              p-8
              rounded-[30px]
              shadow-lg
              "
            >

              <h3
                className="
                text-3xl
                font-bold
                "
              >
                Office Details
              </h3>

              <p
                className="
                mt-4
                text-gray-500
                leading-7
                "
              >
                Our Bangalore team is ready to help transform your
                residential and commercial spaces into premium
                experiences.
              </p>

              <div className="mt-8 space-y-8">

                <div className="flex gap-4">

                  <FaMapMarkerAlt
                    className="
                    text-[var(--primary)]
                    text-xl
                    mt-1
                    "
                  />

                  <div>

                    <h4 className="font-bold">
                      Address
                    </h4>

                    <p className="text-gray-500">
                      Prestige Tech Park,
                      Whitefield,
                      Bangalore,
                      Karnataka
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FaEnvelope
                    className="
                    text-[var(--primary)]
                    text-xl
                    mt-1
                    "
                  />

                  <div>

                    <h4 className="font-bold">
                      Email
                    </h4>

                    <p className="text-gray-500">
                      contact@elitespace.in
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FaPhoneAlt
                    className="
                    text-[var(--primary)]
                    text-xl
                    mt-1
                    "
                  />

                  <div>

                    <h4 className="font-bold">
                      Phone
                    </h4>

                    <p className="text-gray-500">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FaClock
                    className="
                    text-[var(--primary)]
                    text-xl
                    mt-1
                    "
                  />

                  <div>

                    <h4 className="font-bold">
                      Working Hours
                    </h4>

                    <p className="text-gray-500">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;