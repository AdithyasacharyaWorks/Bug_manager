import React, { useState, useRef, useEffect } from "react";

function CustomDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-40 px-4 py-2 rounded border border-gray-300 flex items-center justify-between cursor-pointer ${
          isOpen ? "bg-[rgb(255,153,0)] text-[rgb(23,25,30)]" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.41-1.42L10 10.59l3.29-3.3a1 1 0 1 1 1.42 1.42l-4 4a1 1 0 0 1-.71.3z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-32 rounded-md bg-white shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  option === value
                    ? "bg-[rgb(255,153,0)] text-[rgb(23,25,30)]"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
