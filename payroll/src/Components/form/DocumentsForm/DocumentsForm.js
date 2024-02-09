// call only
import React from 'react'
import DocumentsFormComponent from './DocumentsFormComponent'


const DocumentsForm = ({configs,handleNextClick,employeeId}) => {

  const handleSubmit = (formData) => {
  
    console.log('Form submitted with values:',formData);
  };
  return (
    <div>
      <DocumentsFormComponent config={configs}  handleNextClick={handleNextClick}  handleSubmit={handleSubmit} employeeId={employeeId} />
    </div>
  )
}

export default DocumentsForm
