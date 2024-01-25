// call only
import React from 'react'
import DocumentsFormComponent from './DocumentsFormComponent'
import DocumentsData from './DocumentsData'

const DocumentsForm = ({configs}) => {

  const handleSubmit = (values) => {
  
    console.log('Form submitted with values:', values);
  };
  return (
    <div>
      <DocumentsFormComponent config={configs}    handleSubmit={handleSubmit} />
    </div>
  )
}

export default DocumentsForm
