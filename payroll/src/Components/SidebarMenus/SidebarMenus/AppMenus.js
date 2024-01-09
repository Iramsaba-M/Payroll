import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../sidebarConfigs/AppsmenuConfig";

const AppMenus = () => {
  const activeLink = "text-black mt-2 rounded-md bg-[#E6E8EB]";
  const normalLink = "mt-2";

  return (
    <>
      <ul className="w-[280px] border-r">
        <div className="appname text-gray-600 text-4xl font-mono font-bold px-5">
          iKamai
        </div>
        {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((items) => (
          <Link
            to={items.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <button className="flex items-center rounded-md w-60 mx-6 text-left p-1.5 hover:bg-blue-500 hover:text-white text-[13px]">
              {items.icon && <span className="mr-2">{items.icon}</span>}
              <span>{items.label}</span>
            </button>
          </Link>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default AppMenus;
