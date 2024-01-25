// import React, { useState } from 'react';
// import Nav from '../../../Configurations/Navbar/Nav'
// import { navs } from './AddEmplyeeContent'
// import BasicDetails from './BasicDetails'
// import SalaryDetails from './SalaryDetails';
// import BankDetails from './BankDetails'
// import Documents from './Documents'
// import AditionalDetails from './AditionalDetails'
// import axios from 'axios'

// const AddEmployee = () => {

//   const [selectedNavItem, setSelectedNavItem] = useState(null);

//   const handleNavClick = (itemName) => {
//     setSelectedNavItem(itemName);
// };

//   return (
//     <div>
  
//       <div className='navtabs items-center justify-center p-5 ml-4'>
//         <Nav configs={navs} handleNavClick={handleNavClick} />

//         <div className='main-body pt-4 ml-4'>
//           <div className='forms'>
//             {(selectedNavItem === 'Basic Details' || selectedNavItem === null) && <BasicDetails />}
//             {selectedNavItem === 'Salary Details' && <SalaryDetails />}
//             {selectedNavItem === 'Bank Details' && <BankDetails />}
//             {selectedNavItem === 'Documents' && <Documents />}
//             {selectedNavItem === 'Aditional Details' && <AditionalDetails />}
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default AddEmployee

import React, { useState } from 'react';
import Nav from '../../../Configurations/Navbar/Nav';
import { navs } from './AddEmplyeeContent';
import BasicDetails from './BasicDetails';
import SalaryDetails from './SalaryDetails';
import BankDetails from './BankDetails';
import Documents from './Documents';
import AditionalDetails from './AditionalDetails';

const AddEmployee = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0); // Initialize with the index of the first item

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
    console.log({nextIndex})
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
