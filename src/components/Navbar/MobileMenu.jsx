import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import PrimaryButton from "../Buttons/PrimaryButton";

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

const MobileMenu = ({
  open,
  setOpen,
}) => {

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
        
        fixed
        inset-0
        z-40

        bg-black/50
        backdrop-blur-sm

        transition-all
        duration-300

        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }

      `}
      />

      {/* Drawer */}

      <aside
        className={`
        
        fixed
        top-0
        left-0

        h-screen
        w-[320px]

        bg-white
        z-50

        p-6

        shadow-2xl

        flex
        flex-col

        transition-all
        duration-500

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }

      `}
      >

        {/* Header */}

        <div
          className="
          flex
          items-center
          justify-between
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            "
          >
            <span className="text-[var(--secondary)]">
              Elite
            </span>

            <span className="text-[var(--primary)]">
              Space
            </span>
          </h2>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="
            p-2

            rounded-full

            hover:bg-gray-100

            transition-all
            duration-300
            "
          >
            <IoClose
              size={30}
              className="
              text-[var(--secondary)]
              "
            />
          </button>

        </div>


        {/* Navigation */}

        <nav
          className="
          mt-12

          flex
          flex-col
          gap-4
          "
        >
          {navItems.map((item) => (

            <NavLink
              key={item.id}
              to={item.path}
              onClick={() =>
                setOpen(false)
              }
            >
              {({ isActive }) => (

                <div
                  className={`
                  
                  py-3
                  px-4

                  rounded-xl

                  text-lg
                  font-medium

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                      bg-[var(--primary)]
                      text-white
                      shadow-md
                      `
                      : `
                      text-gray-700
                      hover:bg-[var(--primary)]/10
                      hover:text-[var(--primary)]
                      `
                  }

                `}
                >
                  {item.name}
                </div>

              )}
            </NavLink>

          ))}
        </nav>


        {/* Bottom CTA */}

        <div className="mt-auto pt-10">

          <PrimaryButton
            className="w-full"
          >
            Get Started
          </PrimaryButton>

        </div>

      </aside>
    </>
  );
};

export default MobileMenu;