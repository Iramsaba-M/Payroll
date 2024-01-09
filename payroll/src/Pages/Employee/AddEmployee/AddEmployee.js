import React, { useState } from 'react';
import Nav from '../../../Configurations/Navbar/Nav'
import { navs } from './AddEmplyeeContent'

export const AddEmployee = () => {

  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavClick = (itemName) => {
    setSelectedNavItem(itemName);
};
  return (
    <div>
      {/* <div className='navtabs p2'>
      <Nav config={navs} handleNavClick={handleNavClick} />

      <div className='main-body'>
              <div className=''>
                {(selectedNavItem === 'Apps' || selectedNavItem === null) && <AppNav />}
                {selectedNavItem === 'User' && <UserNav />}
                {selectedNavItem === 'Permissions' && <PermissionNav />}
              </div>
            </div>
      </div> */}
      <h1>add employee</h1>
    </div>
  )
}

export default AddEmployee

