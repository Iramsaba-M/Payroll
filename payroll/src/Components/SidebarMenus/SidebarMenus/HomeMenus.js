import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HOME_SIDEBAR_LINKS } from "../sidebarConfigs/MenuConfig";

const HomeMenus = () => {
const activeLink = "text-black mt-2 w-full rounded-md bg-[#E6E8EB] ";

const normalLink = "mt-2 ";
  
  return (
    <>
     {/* <div className=' h-[700px] bg-blue-500  mx-6  '> */}
      
        <ul>
          {HOME_SIDEBAR_LINKS.default.submenus.map((items) => (
            
            <Link to={items.path} className={({isActive}) => 
              isActive ? activeLink : normalLink
             }>
              <button className=" rounded-md  w-48 mx-6 text-left p-1.5  hover:bg-gray-100  text-[13px]">{items.label}</button>
            </Link>
          ))}
        </ul>
      {/* </div> */}
          <Outlet />
    </>
  );
};

export default HomeMenus;
