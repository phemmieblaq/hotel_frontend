import React, { useRef, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";






const DropDownInput = ({
    setValue,
    value,
    Options,
    errorMessage,
    setErrorMessage,
    label,
    initialValue,
    register,
    name,
    handleReferralChange,
}) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);



  
    const [open, setOpen] = useState(false);
 
  const handleOpenDropdown = () => {
    setOpen(!open);
  };
  const handleSelect = (selected) => {
    setSelectedValue(selected);
    setValue(selected)
   
    setOpen(false);
  };

 

  
  return (
    <div className={`custom-div `}
      key="DropDownInput"
    
      
    >
      <div className="Top">
        {label && <label className='Label'>{label}</label>}

        {errorMessage ? <div className='ErrMsg'>{errorMessage}</div> : null}
      </div>

      <div className={`InputWrapper ${errorMessage ? 'error' : ''}`}>
      <div
       onClick={handleOpenDropdown}
          style={{
            width: "100%",
            display: "flex",
            justifyContent:'space-between',
            alignItems: 'center',
            height: "100%",
          }}>
<div className="showList">
{selectedValue}
</div>
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

   