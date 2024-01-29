import React from 'react'
import BasicDetailsFormComponent from './BasicDetailsFormComponent';


const BasicDetailsForm = ({configs,handleNextClick}) => {

  return (
    <div>
        <BasicDetailsFormComponent config={configs} handleNextClick={handleNextClick} />
    </div>
  )
  }

export default BasicDetailsForm;

