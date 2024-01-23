import React from 'react'
import BankDetailForm from '../../../Components/form/BankDetailForm/BankDetailForm'
import BankDetailData from '../../../Components/form/BankDetailForm/BankDetailData'

const BankDetails = () => {
  return (
    <div>
      <div className='bankdeatils'>
        <BankDetailForm configs={BankDetailData}  />
      </div>
    </div>
  )
}

export default BankDetails
