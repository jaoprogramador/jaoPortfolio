import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Select = ({ options, value, onChange, classes }) => {
  const { theme } = useTheme();
  
  return (
    <select
      value={value}
      onChange={onChange}
      className={`ml-2 p-1 border rounded transition-all duration-300 ease-out
        ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}
        hover:scale-105 active:scale-100 ${data.showCursor && "cursor-none"} ${classes}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;