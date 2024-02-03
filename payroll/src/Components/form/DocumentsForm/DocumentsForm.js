// call only
import React from 'react'
import DocumentsFormComponent from './DocumentsFormComponent'


const DocumentsForm = ({configs,handleNextClick}) => {

  const handleSubmit = (values) => {
  
    console.log('Form submitted with values:', values);
  };
  return (
    <div>
      <DocumentsFormComponent config={configs}  handleNextClick={handleNextClick}  handleSubmit={handleSubmit} />
    </div>
  )
}

export default DocumentsForm
