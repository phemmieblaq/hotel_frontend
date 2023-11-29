import React, { useState, useEffect, useRef } from "react";


import './style.css'

const InputWithLabel = ({
  label,
  labelStyle,
  containerStyle,
  edit,
  error,
  errorMessage,
  warningMessage,
  rightText,
  leftText,
  leftIcon,
  rightIcon,
  container,
  placeholder,
  secureTextEntry,
  type,
  text,
  name,
  password,
  register,
  bottomText,
  topStyles,
  inputClass,
  bottomTextClass,
  disable,
  onChange,
  onBlur,
  onKeyDown = () => { },
  maxNumber,
  defaultValue,
  value,
  ref,
  inputId,
  nextElementId,
  step,

  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active) {
      inputRef.current.focus();
    }
  }, [active]);
  const handleBorder = (bool) => {
    setActive(bool);
  };

  const handleKeyDown = (e) => {
    onKeyDown(e);
    if (e.key === "Enter" && nextElementId) {
      e.preventDefault();
      let element = document.getElementById(nextElementId);
      element.focus();
    }
  };

  return (

    <div className={`custom-div `}>

      <div className="Top">
        {label && <label className='Label'>{label}</label>}

        {errorMessage ? <div className='ErrMsg'>{errorMessage}</div> : null}
        {warningMessage ? <div className='WarnMsg'>{warningMessage}</div> : null}
      </div>

      <div className={`InputWrapper ${errorMessage ? 'error' : warningMessage ? 'warning' : ''}`}



        ref={inputRef}
        onFocus={() => handleBorder(true)}
        onBlur={() => handleBorder(false)}
        disable={disable}
      >
        {leftIcon && <div className='Iconwrapper'>{leftIcon}</div>}
        {leftText && <div className='TextWrapper'>{leftText}</div>}
        {register ? (
          <input className="Input"
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            edit={edit}
            type={!show ? type || "password" : "text"}
            step={step || "any"}
            name={name}
            id={inputId}
            disabled={disable}
            max={maxNumber}
            value={value}
            // onChange={onChange}
            onKeyDown={handleKeyDown}
            defaultValue={defaultValue}
            {...register(name, { onChange: onChange })}
            {...rest}
          />
        ) : (
          <input className="Input"
            ref={ref}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            edit={edit}
            type={!show ? type || "password" : "text"}
            step={step || "any"}
            name={name}
            id={inputId}
            disabled={disable}
            max={maxNumber}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            {...rest}
          />
        )}
        {rightIcon && <div className='RightIconwrapper'>{rightIcon}</div>}
        {rightText ? (
          <div onClick={() => setShow(!show)}>
            <p className='Show'>{!show ? "show" : "hide"}</p>
          </div>
        ) : null}


      </div>

      {bottomText ? <p className='BottomText'>{bottomText}</p> : null}
    </div>
  );
};

export default InputWithLabel;
