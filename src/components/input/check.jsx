import React, { useRef, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import {
  DropDown,
  DropDownWrapper,
  ListItem,
  ListItems,
  ShowList,
  ShowListIcon,
  Label,
  ErrMsg,
  Top,
  InvisibleBackDrop,
  Input,
} from "./styled";

const DropOther = ({
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
    <>
      <Top>
        <Label>{label}</Label>

        {errorMessage ? <ErrMsg>{errorMessage}</ErrMsg> : null}
      </Top>
      <DropDownWrapper border={errorMessage ? "1px solid red" : "1px solid #e1e1de"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100%",
          }}
          onClick={handleOpenDropdown}
        >
          <ShowList>
            {register ? (
              <Input
                id="custom-dropdown-input"
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                onClick={handleInputClick}
                ref={inputRef}
                {...register(name)}
              />
            ) : (
              <Input
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                onClick={handleInputClick}
              />
            )}
          </ShowList>
          <ShowListIcon>
            {open ? (
              <HiChevronUp size={24} color="#4E5152" />
            ) : (
              <HiChevronDown size={24} color="#4E5152" />
            )}
          </ShowListIcon>
        </div>
        {open && (
          <>
            <InvisibleBackDrop onClick={() => setOpen(false)} />
            <DropDown>
              <ListItems>
                {referralOptions.map((option, index) => (
                  <ListItem key={index} onClick={() => handleOptionClick(option.value)}>
                    {option.label}
                  </ListItem>
                ))}
              </ListItems>
            </DropDown>
          </>
        )}
      </DropDownWrapper>
    </>
  );
};

export default DropOther;
export const Input = styled.input`
  color: #4e5152;
  height: 48px;
  width: 90%;
  border: none;
  background: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? "#aca09f" : "")};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-size: 14px;
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ShowList = styled.div`
  background: #ffffff;
  width: 90%;
  align-items: center;
  display: flex;
  gap: 10px;
  padding-inline: 24px;
`;

export const ShowListIcon = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  cursor: pointer;
`;

export const DropDown = styled.div`
  background: #ffffff;
  border: 1px solid #e1e1de;
  position: absolute;
  width: 100%;
  height: 200px;
  top: 50px;
  overflow-y: auto;
  right: 1px;
  z-index: 5;
  padding: 10px 0px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 15px 15px #00000011;
`;

export const ListItems = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  padding: 14px 10px;
  align-items: center;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 162, 212, 0.1);
    cursor: pointer;
  }
`;

export const Item = styled.p`
  font-size: 14px;
`;
export const DefaultItem = styled.p`
  font-size: 14px;
  color: #727474;
`;
export const OtherInput = styled.input`
  height: 80%;
  width: 80%;
  border: none;
  font-size: 14px;
  outline: none;
`;

export const InvisibleBackDrop = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
`;
