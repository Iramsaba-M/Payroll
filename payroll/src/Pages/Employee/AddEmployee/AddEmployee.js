import React, { useState } from 'react';
import Nav from '../../../Configurations/Navbar/Nav';
import { navs } from './AddEmplyeeContent';
import BasicDetails from './BasicDetails';
import SalaryDetails from './SalaryDetails';
import BankDetails from './BankDetails';
import Documents from './Documents';
import AditionalDetails from './AditionalDetails';

const AddEmployee = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0); 
  
  const handleNavClick = (itemName) => {
    const selectedIndex = navs.findIndex((item) => item.name === itemName);
    setSelectedNavItem(selectedIndex);
  };

  const handleNextClick = (itemName) => {
    const selectedIndex = navs.findIndex((item) => item.name === itemName);
    const nextIndex = selectedNavItem + 1;
    if (nextIndex < navs.length) {
      setSelectedNavItem(nextIndex);
    }
    // console.log({nextIndex})
  };

  return (
    <div>
      <div className='navtabs items-center justify-center p-5 ml-4'>
        <Nav configs={navs} handleNavClick={handleNavClick} activeItem={navs[selectedNavItem].name} />

        <div className='main-body pt-4 ml-4'>
          <div className='forms'>
            {navs[selectedNavItem].name === 'Basic Details' && <BasicDetails  handleNextClick={handleNextClick}/>}
            {navs[selectedNavItem].name === 'Salary Details' && <SalaryDetails  handleNextClick={handleNextClick}/>}
            {navs[selectedNavItem].name === 'Bank Details' && <BankDetails handleNextClick={handleNextClick} />}
            {navs[selectedNavItem].name === 'Documents' && <Documents  handleNextClick={handleNextClick}/>}
            {navs[selectedNavItem].name === 'Aditional Details' && <AditionalDetails  handleNextClick={handleNextClick}/>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddEmployee;
