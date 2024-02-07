import React from 'react';

const NumberComponent = ({ name, label, value, onChange, numberType, numbercss, placeholder }) => {
  const inputType = numberType === 'float' ? 'float' : (numberType === 'int' ? 'int' : 'text');

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={numbercss}
      />
    </div>
  );
};

export default NumberComponent;
