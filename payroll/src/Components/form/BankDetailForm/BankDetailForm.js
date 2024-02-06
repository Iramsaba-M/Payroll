
import React, { useState } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';
import axios from 'axios';
import { BANK_DETAILS_API } from '../../../Api/getAPI/EndPoints';
import { getApiUrl2 } from '../../../Api/getAPI/GetAPI';

const BankDetailForm = ({ configs, handleNextClick, handleSubmit }) => {
  const [forms, setForms] = useState([
    { id: 0, values: {} },
  ]);

  const addBank = () => {
    const newForms = [...forms, { id: forms.length, values: {} }];
    setForms(newForms);
  };

  const handleFormChange = (id, values) => {
    const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
    setForms(updatedForms);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const allFormValues = forms.map(form => form.values);
      const dataToSend = { bank_details: allFormValues };
      const response = await axios.post(getApiUrl2(BANK_DETAILS_API), dataToSend);
      // const response = await axios.post('http://localhost:8000/bankdetails', dataToSend);

      console.log('Data sent:', response.data);

      handleSubmit(dataToSend);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        {forms.map((form, index) => (
          <div key={index}>
            <BankDetailFormComponent
              id={form.id}
              config={configs}
              handleNextClick={handleNextClick}
              onChange={handleFormChange}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => addBank()}
        className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center hover:text-white hover:bg-blue-600 focus:outline-none mb-2 mr-2'
      >
        Add Another Bank
        <span className='font-bold'> +</span>
      </button>
      <div className='buttons flex justify-end mt-6 mb-96'>
        <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button>
        <button type="button" onClick={handleNextClick} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex justify-end mb-2 mr-2'>
          Next
        </button>
      </div>
    </form>
  );
};

export default BankDetailForm;

