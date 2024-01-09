// BasicDetails.js
import React from 'react';
import Form from '../../../Components/form/Form';
import formData from'../../../Components/form/formData.json';

const BasicDetails = () => {
  
  return (
    <div>
      <Form configs={formData} />
    </div>
  );
};

export default BasicDetails;
