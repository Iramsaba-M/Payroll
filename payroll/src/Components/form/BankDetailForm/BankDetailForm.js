
import React, { useState } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';

const BankDetailForm = ({ configs ,handleNextClick }) => {
  const [forms, setForms] = useState([<BankDetailFormComponent key={0} config={configs} handleNextClick={handleNextClick} />]);

  const addBank = () => {
    const newForms = [...forms, <BankDetailFormComponent key={forms.length} config={configs} handleNextClick={handleNextClick} />];
    setForms(newForms);
    console.log('yes');
  };

  return (
    <>
      <div>
        {forms.map((form, index) => (
          <div key={index}>{form}</div>
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
    </>
  );
};

export default BankDetailForm;
