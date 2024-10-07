import React, { useEffect, useRef, useState } from "react";
import './style.css'

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./flag.css";
import { activeStyle,nonActiveStyle,errorStyle, inputStyle } from "./phonenumber";
const NumberInput = ({
  label,
  labelStyle,
  containerStyle,
  edit,
  error,
  errorMessage,
  container,
  onSelectedChange = () => {},
  placeholder,
  onChange,
  value,
  type,
  options,
  name,
  phoneInputStyles,
  register,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active) {
      inputRef.current.focus();
    }
  }, [active]);

  

  return (
    <div className={`custom-div ${errorMessage ? 'error' :''}`}
      
    >
      <div className="Top">
        {label && <label className='Label'>{label}</label>}
        {errorMessage ? <div className='ErrMsg'>{errorMessage}</div> : null}
      </div>
      <div
        // className={errorMessage ? "error" : active ? "active" : "nonActive"}
        className={errorMessage ? "error" : ""}
        ref={inputRef}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        
        style={
          !errorMessage
            ? active
              ? { ...activeStyle, ...phoneInputStyles }
              : { ...nonActiveStyle, ...phoneInputStyles }
            : { ...errorStyle, ...phoneInputStyles }
        }
        // style={phoneInputStyles}
      >
        <PhoneInput
          country={"ng"}
          // countryCallingCodeEditable={false}
          value={value}
          onChange={onChange}
          containerStyle={{
            height: "100%",
            borderRadius: "20px",
          }}
          
          inputStyle={inputStyle}
        />
      </div>
    </div>
  );
};

export default NumberInput;
