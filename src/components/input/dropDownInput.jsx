import React, { useRef, useState } from "react";





const DropDownInput = ({
    setValue,
    value,
    referralOptions,
    errorMessage,
    setErrorMessage,
    label,
    register,
    name,
    handleReferralChange,
}) => {
    const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Please select an option");

  const inputRef = document.getElementById("custom-dropdown-input");

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (value) => {
    setOpen(false);

    if (value === "Other") {
      inputRef.focus();
      handleReferralChange("");
      setErrorMessage("");
      setPlaceholder("Please enter how you found us");
    } else {
      inputRef.blur();
      setErrorMessage("");
      handleReferralChange(value);
      setPlaceholder("Please select an option");
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    handleReferralChange(value);
  };

  const handleInputClick = () => {
    setPlaceholder("Please select an option");
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
          style={{
            width: "100%",
            display: "flex",
            height: "100%",
          }}>
<div className="showList">
{register ? (
              <input className="Input"
                id="custom-dropdown-input"
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                onClick={handleInputClick}
                ref={inputRef}
                {...register(name)}
              />
            ) : (
              <nput className="Input"
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                onClick={handleInputClick}
              />
            )}
</div>
      
      </div>
      </div>
    </div>
  );
};

export default DropDownInput;

   