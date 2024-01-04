import React from 'react';
import ButtonConfig from './ButtonConfig'; // Assuming this is where you use ButtonConfig
import ButtonData from './ButtonData';

const Button = ({Configs}) => {
  return (
    <div>
      {/* Other components or content */}
      <ButtonConfig Config={Configs} />
    </div>
  );
};

export default Button;
