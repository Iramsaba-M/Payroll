// call only
import React from 'react'
import DocumentsFormComponent from './DocumentsFormComponent'


const DocumentsForm = ({configs,handleNextClick,employeeId}) => {

  const handleSubmit = (values) => {
  
    console.log('Form submitted with values:', values);
  };
  return (
    <div>
      <DocumentsFormComponent config={configs}  handleNextClick={handleNextClick}  handleSubmit={handleSubmit} employeeId={employeeId} />
    </div>
  )
}

export default DocumentsForm
