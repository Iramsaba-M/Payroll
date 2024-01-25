import React from 'react'
import SalaryDetailsComp from './SalaryDetailsFormComponent';


const SalaryDetailsForm = ({configs , handleNextClick}) => {

  return (
    <div>
        <SalaryDetailsComp config={configs} handleNextClick={handleNextClick}/>
    </div>
  )
  }

export default SalaryDetailsForm;

