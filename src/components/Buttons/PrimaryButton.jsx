const PrimaryButton = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        
        inline-flex
        items-center
        justify-center
        gap-2
        
        px-6
        py-3
        
        rounded-full
        
        bg-[var(--primary)]
        text-white
        
        font-medium
        
        transition-all
        duration-300
        
        hover:bg-[var(--accent)]
        hover:shadow-xl
        hover:scale-105
        
        active:scale-95
        
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        
        ${className}
      `}
    >
      {loading ? (
        <>
          <div
            className="
              w-5
              h-5
              border-2
              border-white
              border-t-transparent
              rounded-full
              animate-spin
            "
          />

          Loading...
        </>
      ) : (
        <>
          {icon && icon}

          {children}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;