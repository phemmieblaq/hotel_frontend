import React, { useState } from "react";

const DropDownInput = ({ options, onSelect }) => {
  // Check if options is undefined or empty, set default to an empty array
  const initialSelectedValue = options && options.length > 0 ? options[0] : null;

  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  const handleSelect = (selected) => {
    setSelectedValue(selected);
    onSelect(selected);
  };

  if (!options || options.length === 0) {
    return <div>No options available</div>; // You might want to handle this case gracefully
  }
  
  return (
    <div>
      <select value={selectedValue} onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownInput;
