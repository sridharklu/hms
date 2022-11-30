import React from "react";

const Input = ({ className, type, placeholder, label,icon,value,onChange,onBlur,onFocus}) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        label={label}
        icon={icon}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
