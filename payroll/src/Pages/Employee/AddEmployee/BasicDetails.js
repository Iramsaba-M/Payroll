// BasicDetails.js
import React, { useState } from 'react';
import Form from '../../../Components/form/Form';
import { basicdetailform } from './AddEmplyeeContent'
import Button from '../../../Configurations/Buttoncomponent/Button';
import { basicdetails_ButtonData} from './AddEmplyeeContent'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BasicDetails = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Make your axios call here
      const response = await axios.post('http://localhost:3000/basicdetail', values);
      console.log('Data sent:', response.data);

      // Handle form submission actions here (e.g., navigate to the next page)
      console.log('Form submitted:', values);

      // Navigate to the next page (SalaryDetails page)
      // You can use react-router-dom or any other navigation method here
      // console.log('Navigate to SalaryDetails page');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === 'Save') {
      // Trigger form submission
      handleSubmit();
    } else if (buttonLabel === 'Next') {
      navigate('/salary-details');
      // Navigate to the next page (SalaryDetails page)
      // You can use react-router-dom or any other navigation method here
      console.log('Navigate to SalaryDetails page');
    }
  };

  return (
    <div>
      <div className='basicdeatils'>
        <Form configs={basicdetailform} onSubmit={handleSubmit} />
      </div>

      <div className='buttons flex justify-end mt-6'>
        <Button Configs={basicdetails_ButtonData} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default BasicDetails;
