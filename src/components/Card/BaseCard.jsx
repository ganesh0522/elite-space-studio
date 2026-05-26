const BaseCard = ({
  children,
  className = "",
  padding = "p-6",
  hover = true,
}) => {
  return (
    <div
      className={`
        
        bg-white
        rounded-[30px]
        overflow-hidden
        
        shadow-md
        border
        border-gray-100
        
        transition-all
        duration-300
        
        ${
          hover
            ? `
              hover:-translate-y-2
              hover:shadow-2xl
            `
            : ""
        }

        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BaseCard;