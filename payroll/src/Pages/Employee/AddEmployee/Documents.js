import React from 'react'
import DocumentsData from '../../../Components/form/DocumentsForm/DocumentsData'
import DocumentsForm from '../../../Components/form/DocumentsForm/DocumentsForm'
const Documents = ({handleNextClick,employeeId}) => {
  return (
    <div>

<DocumentsForm configs={DocumentsData} handleNextClick={handleNextClick} employeeId={employeeId}/>
    </div>
  )
}

export default Documents
