// import React, { useState } from "react";

// const DropDownInput = ({ options, onSelect }) => {
//   // Check if options is undefined or empty, set default to an empty array
//   const initialSelectedValue = options && options.length > 0 ? options[0] : null;

//   const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

//   const handleSelect = (selected) => {
//     setSelectedValue(selected);
//     onSelect(selected);
//   };

  
//   return (
//     <div>
//       <select value={selectedValue} onChange={(e) => handleSelect(e.target.value)}>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };



// export default DropDownInput;




import React, {useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const DropDownInput = ({setValue, Options, errorMessage, label, initialValue, onSelect}) => {

  const [selectedValue, setSelectedValue] = useState(initialValue);

  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };
  const handleSelect = (selected) => {
    setSelectedValue(selected);
    setValue(selected)
    // onSelect(selected);
    setOpen(false);
  };




  return (
    <div className={`custom-div `}key="DropDownInput">
      <div className="Top">
        {label ? <label className='Label'>{label}</label> : null}

        {errorMessage ? <div className='ErrMsg'>{errorMessage}</div> : null}
      </div>

      <div className={`InputWrapper ${errorMessage ? 'error' : ''}`}>
        <div className="dropDownW" onClick={handleOpenDropdown}>
          <div className="showList">{selectedValue}</div>
          <div className='ShowListIcon'>
            {open ? (
              <HiChevronUp size={24} color="#4E5152" />
            ) : (
              <HiChevronDown size={24} color="#4E5152" />
            )}
          </div>
        </div>
        {open && (
          <>
            <div className='InvisibleBackDrop' onClick={() => setOpen(false)} />
            <div className='DropDown'>
              <div className="ListItems">
                {Options.map((option, index) => (
                  <div className='ListItem' key={index} onClick={() => handleSelect(option)} >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropDownInput;


