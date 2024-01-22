import React from 'react'
import SalaryDetailsComp from './SalaryDetailsFormComponent';


const SalaryDetailsForm = ({configs}) => {

  return (
    <div>
        <SalaryDetailsComp config={configs} />
    </div>
  )
  }

export default SalaryDetailsForm;

