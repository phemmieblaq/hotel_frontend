import React, { useState } from "react";

const DropDownInput = ({ options = [], onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleSelect = (selected) => {
    setSelectedValue(selected);
    onSelect(selected);
  };

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
