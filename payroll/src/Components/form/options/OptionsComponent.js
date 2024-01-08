import React from 'react';

const OptionsComponent = ({ label, value, options, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={textcss}
        placeholder={[placeholder]}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsComponent;
