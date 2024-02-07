import React from 'react'
import BasicDetailsFormComponent from './BasicDetailsFormComponent';


const BasicDetailsForm = ({configs,handleNextClick, handleEmpId}) => {

  return (
    <div>
        <BasicDetailsFormComponent config={configs} handleNextClick={handleNextClick}  handleEmpId={handleEmpId} />
    </div>
  )
  }

export default BasicDetailsForm;

