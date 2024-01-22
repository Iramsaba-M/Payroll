// src/components/DateComponent.js
import React from 'react';

const DateComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="date"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default DateComponent;
