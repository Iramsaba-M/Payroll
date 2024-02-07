import React from 'react'
import AditionalDetailForm from '../../../Components/form/AditionalDetailForm/AditionalDetailForm'
import AditionalDetailData from '../../../Components/form/AditionalDetailForm/AditionalDetailData'

const AditionalDetails = ({handleNextClick ,employeeId}) => {
  return (
    <div>
      <div className='bankdeatils'>
        <AditionalDetailForm  configs={AditionalDetailData} handleNextClick={handleNextClick} employeeId={employeeId} />
      </div>
    </div>
  )
}

export default AditionalDetails
