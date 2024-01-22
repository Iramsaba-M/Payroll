import React from 'react';

const EmailComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
        />
    </div>
  );
};

export default EmailComponent;
