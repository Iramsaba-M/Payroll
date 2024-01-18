// OptionsComponent.jsx

import React from 'react';

const OptionsComponent = ({ label, value, options, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={textcss}
      >
        {value ? null : (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {value && (
        <p className="text-gray-500 mt-1">Selected: {value}</p>
      )}
    </div>
  );
};

export default OptionsComponent;
