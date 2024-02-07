import React from 'react'
import BankForm from '../../../Components/form/BankDetailForm/BankForm'
import BankDetailData from '../../../Components/form/BankDetailForm/BankDetailData'

const BankDetails = ({ handleNextClick, employeeId }) => {
  return (
    <div className='bankdeatils '>
      <BankForm configs={BankDetailData} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default BankDetails
