// BasicDetails.js
import React from 'react';
import Form from '../../../Components/form/Form';
import formData1 from'../../../Components/form/formData1.json';

const BasicDetails = () => {
  
  return (
    <div>
      <h2>Basic Details</h2>
      <Form configs={formData1} />
    </div>
  );
};

export default BasicDetails;
