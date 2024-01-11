import React, { useState } from 'react';
import Nav from '../../../Configurations/Navbar/Nav'
import { navs } from './AddEmplyeeContent'
import BasicDetails from './BasicDetails'
import SalaryDetails from './SalaryDetails';
import BankDetails from './BankDetails'
import Documents from './Documents'
import AditionalDetails from './AditionalDetails'

const AddEmployee = () => {

  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavClick = (itemName) => {
    setSelectedNavItem(itemName);
};
  return (
    <div>

      <div className='navtabs items-center justify-center p-5'>
      <Nav configs={navs} handleNavClick={handleNavClick} />

      <div className='main-body pt-4'>
              <div className=''>
                {(selectedNavItem === 'Basic Details' || selectedNavItem === null) && <BasicDetails />}
                {selectedNavItem === 'Salary Details' && <SalaryDetails />}
                {selectedNavItem === 'Bank Details' && <BankDetails />}
                {selectedNavItem === 'Documents' && <Documents />}
                {selectedNavItem === 'Aditional Details' && <AditionalDetails />}
              </div>
            </div>
      </div>
      
    </div>
  )
}

export default AddEmployee

