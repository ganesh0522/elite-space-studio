const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`
        mb-16
        
        ${
          align === "center"
            ? "text-center"
            : "text-left"
        }

        ${className}
      `}
    >
      {/* Subtitle */}

      {subtitle && (
        <div
          className={`
            flex
            items-center
            gap-3
            mb-4

            ${
              align === "center"
                ? "justify-center"
                : "justify-start"
            }
          `}
        >
          <span
            className="
              w-10
              h-[2px]
              bg-[var(--primary)]
            "
          />

          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-[var(--primary)]
            "
          >
            {subtitle}
          </p>

          <span
            className="
              w-10
              h-[2px]
              bg-[var(--primary)]
            "
          />
        </div>
      )}

      {/* Title */}

      {title && (
        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[var(--secondary)]
            leading-tight
          "
        >
          {title}
        </h2>
      )}

      {/* Description */}

      {description && (
        <p
          className={`
            mt-5
            text-gray-500
            leading-7
            max-w-2xl

            ${
              align === "center"
                ? "mx-auto"
                : ""
            }
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;