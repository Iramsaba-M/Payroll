import React from 'react'
import FormComponent from './FormComponent';
import formData from './formData.json'

const Form = ({configs}) => {

  return (
    <div>
        <FormComponent config={configs} />
    </div>
  )
  }

export default Form;

