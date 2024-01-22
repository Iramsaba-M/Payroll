import { MdPerson } from 'react-icons/md';
import { IoNotificationsOutline } from "react-icons/io5"; 
import { FaCalculator } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { LiaHomeSolid } from "react-icons/lia";
import { PiHandCoinsLight } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";

export const DASHBOARD_SIDEBAR_LINKS ={ 

    default: {
        submenus: [
          {
            label: 'Home',
            path:'home', 
            icon: <LiaHomeSolid />
          },
          {
            label: 'Employee',
            path:'employee',
            icon: <MdPerson />
          },
          {
            label: 'Run Payroll',
            path:'runpayroll',
            icon: <LuWallet /> 
          },
          {
            label: 'Notifications',
            path:'notifications', 
            icon: <IoNotificationsOutline /> 
          },
          {
            label: 'CTC Calculator',
            path:'ctccalculator',
            icon: <FaCalculator />
          },
          {
            label: 'Loans',
            path:'loans',
            icon: <PiHandCoinsLight />
          },
          {
            label: 'Reports',
            path:'reports',
            icon: <VscGraph />
          },
          {
            label: 'Settings',
            path:'SlSettings',
            icon: <SlSettings />
          },
          
        ],
               
    }
}    