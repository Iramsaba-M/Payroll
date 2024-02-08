
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { HOME_SIDEBAR_LINKS } from "../sidebarConfigs/MenuConfig";

const HomeMenus = () => {
  const activeLink = "text-WHITE mt-2 rounded-md bg-[#E6E8EB]";
  const normalLink = "mt-2";

  return (
    <>
      <ul>
        <div className="appname text-gray-800 text-4xl font-mono font-bold px-5 mt-3">
          iKamai
        </div>
        {HOME_SIDEBAR_LINKS.default.submenus.map((items) => (
          <NavLink
            to={items.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <button className="flex items-center rounded-md w-48 mx-6 my-3 text-gray-600 text-left p-1.5 hover:bg-blue-500 hover:text-white text-[13px]">
              {items.icon && <span className="mr-6">{items.icon}</span>}
              <span>{items.label}</span>
            </button>
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default HomeMenus;


