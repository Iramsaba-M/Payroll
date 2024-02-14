import React from 'react'
import AditionalDetailFormComponent from '../../../Components/form/AditionalDetailForm/AditionalDetailFormComponent'
import AditionalDetailData from '../../../Components/form/AditionalDetailForm/AditionalDetailData'

const AditionalDetails = ({handleNextClick ,employeeId}) => {
  return (
    <div>
        <AditionalDetailFormComponent  config={AditionalDetailData} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default AditionalDetails
