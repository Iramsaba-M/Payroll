import React from 'react';
import BankDetailForm from './BankDetailForm';

function BankForm({configs,handleNextClick,employeeId}) {
  return (
    <div>
      <BankDetailForm configs={configs} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  );
}

export default BankForm;
