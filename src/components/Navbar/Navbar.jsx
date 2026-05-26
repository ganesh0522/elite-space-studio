import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

import MobileMenu from "./MobileMenu";
import PrimaryButton from "../Buttons/PrimaryButton";

import useScroll from "../../hooks/useScroll";

const navItems = [
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {
    isScrolled,
    scrollDirection,
  } = useScroll();

  return (
    <>
      <nav
        className={`
        
        fixed
        top-0
        left-0
        w-full
        h-[80px]

        z-50

        transition-all
        duration-500

        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }

        ${
          scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        }

      `}
      >
        <div
          className="
          container-custom
          h-full
          flex
          items-center
          justify-between
          "
        >

          {/* Logo */}

          <NavLink
            to="/"
            className="
            text-2xl
            lg:text-3xl
            font-bold
            tracking-wide
            "
          >
            <span
              className={
                isScrolled
                  ? "text-[var(--secondary)]"
                  : "text-white"
              }
            >
              Elite
            </span>

            <span className="text-[var(--primary)]">
              Space
            </span>
          </NavLink>


          {/* Desktop Navigation */}

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-10
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
              >
                {({ isActive }) => (
                  <div
                    className={`
                    
                    relative
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[var(--primary)]"
                        : isScrolled
                        ? "text-[var(--primary)]"
                        : "text-[var(--primary)]"
                    }

                    hover:text-[var(--accent)]
                    
                    `}
                  >
                    {item.name}

                    <span
                      className={`
                      
                      absolute
                      left-0
                      -bottom-2

                      h-[2px]
                      bg-[var(--primary)]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 hover:w-full"
                      }

                      `}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </div>


          {/* Desktop Button */}

          <div className="hidden lg:block">
            <PrimaryButton>
              Get Started
            </PrimaryButton>
          </div>


          {/* Mobile Menu Button */}

          <button
            aria-label="Open Menu"
            onClick={() =>
              setOpen(true)
            }
            className="
            lg:hidden

            p-2

            rounded-lg

            transition-all
            duration-300
            "
          >
            <HiMenuAlt3
              size={30}
              className="
              text-[var(--primary)]
              "
            />
          </button>

        </div>
      </nav>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Navbar;