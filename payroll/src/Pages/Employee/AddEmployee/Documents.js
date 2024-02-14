import React from 'react'
import DocumentsData from '../../../Components/form/DocumentsForm/DocumentsData'
import DocumentsFormComponent from '../../../Components/form/DocumentsForm/DocumentsFormComponent'

const Documents = ({handleNextClick,employeeId}) => {
  return (
    <div>
      <DocumentsFormComponent config={DocumentsData} handleNextClick={handleNextClick} employeeId={employeeId}/>
    </div>
    )
  }

export default Documents
