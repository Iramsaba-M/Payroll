import React from 'react'
import AditionalDetailForm from '../../../Components/form/AditionalDetailForm/AditionalDetailForm'
import AditionalDetailData from '../../../Components/form/AditionalDetailForm/AditionalDetailData'

const AditionalDetails = ({handleNextClick}) => {
  return (
    <div>
      <div className='bankdeatils'>
        <AditionalDetailForm  configs={AditionalDetailData} handleNextClick={handleNextClick} />
      </div>
    </div>
  )
}

export default AditionalDetails
