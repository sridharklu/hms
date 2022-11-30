import React from "react";

const TextArea = ({ className, placeholder,onChange,value }) => {
  return (
    <div>
      <textarea className={className} placeholder={placeholder} onChange={onChange} value={value}></textarea>
    </div>
  );
};

export default TextArea;
