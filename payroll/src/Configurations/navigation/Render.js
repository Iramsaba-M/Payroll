import React from 'react'
import Sidebar from './Sidebar'
import SidebarContent from './SidebarContent.json'


const Render = () => {
  return (
    <div>

<Sidebar menuConfigs={SidebarContent} />
    </div>
  )
}

export default Render