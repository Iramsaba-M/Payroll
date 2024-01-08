import React from 'react';
import ButtonConfig from './ButtonConfig';
import ButtonData from './ButtonData';

const Button = ({ Configs, onClick }) => {
  return (
    <div>
      <ButtonConfig Config={Configs} onClick={onClick} />
    </div>
  );
};

export default Button;
