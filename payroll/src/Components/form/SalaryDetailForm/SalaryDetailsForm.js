import React from 'react'
import SalaryDetailsComp from './SalaryDetailsComp';


const SalaryDetailsForm = ({configs , handleNextClick,employeeId}) => {

  return (
    <div>
        <SalaryDetailsComp config={configs} handleNextClick={handleNextClick} employeeId={employeeId}/>
    </div>
  )
  }

export default SalaryDetailsForm;

