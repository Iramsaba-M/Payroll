// components/ButtonConfig.js
import React from 'react';
import ButtonStyles from './ButtonStyles';
import ButtonData from './ButtonData';

const Button = ({ label, icon }) => {
  return (
    <button className={`${ButtonStyles.buttonStyle}`}>
      {icon && <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>}
      {label}
    </button>
  );
};



const ButtonConfig = ({ Config }) => {
  return (
    <div className="flex ">
      {Config.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};




export default ButtonConfig;
