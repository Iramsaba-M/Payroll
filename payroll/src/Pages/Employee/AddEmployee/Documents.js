import React from 'react'
import DocumentsData from '../../../Components/form/DocumentsForm/DocumentsData'
import DocumentsForm from '../../../Components/form/DocumentsForm/DocumentsForm'
const Documents = ({handleNextClick}) => {
  return (
    <div>

<DocumentsForm configs={DocumentsData} handleNextClick={handleNextClick} />
    </div>
  )
}

export default Documents
