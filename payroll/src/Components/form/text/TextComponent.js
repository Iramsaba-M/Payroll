
import React from 'react';


const TextComponent = ({ label, value, onChange, textcss, placeholder }) => {
   
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default TextComponent;
