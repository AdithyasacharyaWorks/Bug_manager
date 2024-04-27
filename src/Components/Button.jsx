import { useState } from "react";

function Button({ text, fnc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className="bg-[rgb(255,153,0)] text-white py-2 px-6 rounded-lg flex items-center justify-between transition duration-300 hover:translate-x-1"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ minWidth: "220px" }} // Set a fixed width here
      onClick={fnc}
    >
      {text}
      <span
        className={`transform transition-transform ${
          isHovered ? "translate-x-1" : "translate-x-0"
        }`}
      >
        &rarr;
      </span>
    </button>
  );
}

export default Button;
