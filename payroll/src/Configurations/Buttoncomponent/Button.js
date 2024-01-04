import React from 'react';
import ButtonConfig from './ButtonConfig'; // Assuming this is where you use ButtonConfig
import ButtonData from './ButtonData';

const Button = () => {
  return (
    <div>
      {/* Other components or content */}
      <ButtonConfig Config={ButtonData} />
    </div>
  );
};

export default Button;
