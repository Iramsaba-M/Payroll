import React from 'react'
import SalaryDetailsForm from '../../../Components/form/SalaryDetailForm/SalaryDetailsForm';
import { salaryData} from './AddEmplyeeContent'

const SalaryDetails = ({handleNextClick, employeeId}) => {
  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === 'Save') {
     } 
  };

  return (
    <div>
      <div className='salarydeatils'>
        <SalaryDetailsForm configs={salaryData} handleNextClick={handleNextClick} employeeId={employeeId} />
      </div>

      {/* <div className='buttons flex justify-end mt-6'>
        <Button Configs={basicdetails_ButtonData} onClick={handleButtonClick} />
      </div> */}
    </div>
  );
};

export default SalaryDetails;
