import React from 'react'
import BankDetailForm from '../../../Components/form/BankDetailForm/BankDetailForm'
import BankDetailData from '../../../Components/form/BankDetailForm/BankDetailData'

const BankDetails = ({handleNextClick}) => {
  return (
    <div>
      <div className='bankdeatils'>
        <BankDetailForm configs={BankDetailData} handleNextClick={handleNextClick} />
      </div>
    </div>
  )
}

export default BankDetails
