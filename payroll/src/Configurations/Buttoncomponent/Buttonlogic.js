// components/ButtonLogic.js
import React, { useState } from 'react';
import ButtonConfig from './ButtonConfig';
import EmpForm from '../empform/EmpForm';
import ButtonData from './ButtonData';

const ButtonLogic = () => {
  const [showBody, setShowBody] = useState(false);

  const handleButtonClick = (label) => {
  
    if (label === 'Add Employee') {
      setShowBody(true);
    }
    // Add more conditions as need
  };

  return (
    <div className="flex">
      {showBody ? (
        <EmpForm />
      ) : (
        <ButtonConfig Config={ButtonData} onClick={handleButtonClick} />
      )}
    </div>
  );
};

export default ButtonLogic;


