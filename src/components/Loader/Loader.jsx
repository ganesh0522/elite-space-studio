const Loader = ({
  text = "Loading Experience..."
}) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        
        flex
        flex-col
        items-center
        justify-center
        
        bg-[var(--background)]
      "
    >
      {/* Spinner */}

      <div
        className="
          relative
          w-[70px]
          h-[70px]
        "
      >
        <div
          className="
            absolute
            inset-0
            
            border-4
            border-[var(--primary)]
            border-t-transparent
            
            rounded-full
            animate-spin
          "
        />
      </div>

      {/* Brand */}

      <h2
        className="
          mt-8
          text-2xl
          font-bold
          text-[var(--secondary)]
        "
      >
        Elite
        <span className="text-[var(--primary)]">
          Space
        </span>
      </h2>

      {/* Loading Text */}

      <p
        className="
          mt-3
          text-gray-500
          text-sm
          tracking-wide
        "
      >
        {text}
      </p>
    </div>
  );
};

export default Loader;