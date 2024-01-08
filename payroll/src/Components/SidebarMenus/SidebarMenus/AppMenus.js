import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../sidebarConfigs/AppsmenuConfig";
// import Head from "../../../Configurations/Head/Head";
// import HeadConfi from "../../../Layouts/HeadConfi";
const AppMenus = () => {
const activeLink = "text-black mt-2 rounded-md bg-[#E6E8EB] ";

const normalLink = "mt-2 ";
  
// const location = useLocation();
// const currentPath = location.pathname;
  return (
    <>
     {/* <div className=' h-[700px] bg-blue-500  mx-6  '> */}
      
        <ul className="   w-[280px]  border-r   ">
      
        <div className='appname text-gray-900 text-4xl font-mono font-bold px-6'>
          iKamai
        </div>
        
          {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((items) => (
            
            <Link to={items.path} className={({isActive}) => 
              isActive ? activeLink : normalLink
             }>
              <button className=" rounded-md  w-60 mx-6 text-left p-1.5  hover:bg-gray-100  text-[13px]">{items.label}</button>
            </Link>
          ))}
        </ul>

        {/* <div className="flex">
        <Head HeadConfi={HeadConfi} currentPath={currentPath} />
      </div>    */}
        
      {/* </div> */}
          <Outlet />
    </>
  );
};

export default AppMenus;
