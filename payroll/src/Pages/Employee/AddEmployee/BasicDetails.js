// BasicDetails.js
import React, { useState } from 'react';
import BasicDetailsForm from '../../../Components/form/BasicDetailForm/BasicDetailForm';
import { basicdetailform } from './AddEmplyeeContent'
import Button from '../../../Configurations/Buttoncomponent/Button';
import { basicdetails_ButtonData} from './AddEmplyeeContent'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BasicDetails = () => {
  

  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === 'Save') {
     } 
  };

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsForm configs={basicdetailform}  />
      </div>

      {/* <div className='buttons flex justify-end mt-6'>
        <Button Configs={basicdetails_ButtonData} onClick={handleButtonClick} />
      </div> */}
    </div>
  );
};

export default BasicDetails;
