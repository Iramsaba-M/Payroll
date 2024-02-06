import React from 'react'
import BankForm from '../../../Components/form/BankDetailForm/BankForm'
import BankDetailData from '../../../Components/form/BankDetailForm/BankDetailData'

const BankDetails = ({handleNextClick}) => {
  return (
    <div>
      <div className='bankdeatils'>
        <BankForm configs={BankDetailData} handleNextClick={handleNextClick} />
      </div>
    </div>
  )
}

export default BankDetails
