import React from 'react'
import BasicDetailsFormComponent from './BasicDetailsFormComponent';


const BasicDetailsForm = ({configs}) => {

  return (
    <div>
        <BasicDetailsFormComponent config={configs} />
    </div>
  )
  }

export default BasicDetailsForm;

