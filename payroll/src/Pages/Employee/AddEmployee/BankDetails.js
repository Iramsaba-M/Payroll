import React from 'react'
import BankDetailForm from '../../../Components/form/BankDetailForm/BankDetailForm'
import BankDetailData from '../../../Components/form/BankDetailForm/BankDetailData'

const BankDetails = ({ handleNextClick, employeeId }) => {
  return (
    <div className='bankdeatils '>
      <BankDetailForm configs={BankDetailData} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default BankDetails
