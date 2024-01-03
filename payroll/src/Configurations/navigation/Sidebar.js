import React from 'react'
import DynamicSidebar from './DynamicSidebar'

const Sidebar = ({menuConfigs}) => {
  
  return (
    <>
    <DynamicSidebar menuConfig={menuConfigs} />

    
    </>
  )
}


export default Sidebar



// import { Router } from 'react-router-dom';


//  const Sidebar = () => {
//   return (
//     <div>
//         {/* <Router> */}
//         <DynamicSidebar />
//         {/* </Router> */}
//     </div>
//   )
// }

// export default Sidebar;

