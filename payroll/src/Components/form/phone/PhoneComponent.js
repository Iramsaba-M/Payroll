// PhoneComponent.js
import React from 'react';

const PhoneComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="tel"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default PhoneComponent;
