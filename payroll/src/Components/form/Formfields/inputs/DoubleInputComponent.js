import React from 'react';

const DoubleInputComponent = ({ label, values, onChange, textcss, placeholders }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        {Array.from({ length: 2 }).map((_, index) => (
          <input
            key={index}
            type="text"
            value={values[index] || ""}
            placeholder={placeholders[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className={textcss}
            style={{ marginBottom: '10px' }} // Adjust margin as needed
          />
        ))}
      </div>
    </div>
  );
};

export default DoubleInputComponent;
