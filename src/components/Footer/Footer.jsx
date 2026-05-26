import { NavLink } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "About",
      path: "/about",
    },

    {
      id: 3,
      name: "Services",
      path: "/services",
    },

    {
      id: 4,
      name: "Projects",
      path: "/projects",
    },

    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "#",
    },

    {
      id: 2,
      icon: <FaInstagram />,
      link: "#",
    },

    {
      id: 3,
      icon: <FaLinkedinIn />,
      link: "#",
    },

    {
      id: 4,
      icon: <FaTwitter />,
      link: "#",
    },
  ];

  return (
    <footer
      className="
      bg-[var(--secondary)]
      text-white
      pt-16
      pb-8
      "
    >
      <div className="container-custom">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >

          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Elite
              <span className="text-[var(--primary)]">
                Space
              </span>
            </h2>

            <p
              className="
              mt-5
              text-gray-400
              leading-7
              "
            >
              Crafting elegant spaces with premium design,
              innovation, and modern luxury experiences across Bangalore.
            </p>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-semibold
              mb-5
              "
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {quickLinks.map((item) => (

                <NavLink
                  key={item.id}
                  to={item.path}
                  className="
                  text-gray-400
                  hover:text-[var(--primary)]
                  transition-all
                  duration-300
                  "
                >
                  {item.name}
                </NavLink>

              ))}

            </div>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-semibold
              mb-5
              "
            >
              Contact
            </h3>

            <div
              className="
              space-y-5
              text-gray-400
              "
            >

              <div className="flex gap-3">

                <FaEnvelope
                  className="
                  mt-1
                  text-[var(--primary)]
                  "
                />

                <span>
                  contact@elitespace.in
                </span>

              </div>

              <div className="flex gap-3">

                <FaPhoneAlt
                  className="
                  mt-1
                  text-[var(--primary)]
                  "
                />

                <span>
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt
                  className="
                  mt-1
                  text-[var(--primary)]
                  "
                />

                <span>
                  Prestige Tech Park,
                  Whitefield,
                  Bangalore
                </span>

              </div>

            </div>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-semibold
              mb-5
              "
            >
              Follow Us
            </h3>

            <div className="flex gap-4">

              {socialLinks.map((social) => (

                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-10
                  h-10

                  rounded-full

                  bg-gray-800

                  flex
                  items-center
                  justify-center

                  hover:bg-[var(--primary)]

                  transition-all
                  duration-300
                  "
                >
                  {social.icon}
                </a>

              ))}

            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-gray-800

          mt-12
          pt-6

          text-center
          text-gray-500
          "
        >
          © {currentYear} EliteSpace Studio • Bangalore • All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;