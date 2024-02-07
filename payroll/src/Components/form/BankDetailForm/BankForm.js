import React from 'react';
import BankDetailForm from './BankDetailForm';

function BankForm({configs,handleNextClick}) {
  return (
    <div>
      <BankDetailForm configs={configs} handleNextClick={handleNextClick} />
    </div>
  );
}

export default BankForm;
