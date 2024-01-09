import { MdPerson } from 'react-icons/md';
import { GoHomeFill } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5"; 
import { FaCalculator } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";

export const DASHBOARD_SIDEBAR_LINKS ={ 

    default: {
        submenus: [
          {
            label: 'Home',
            path:'home', 
            icon: <GoHomeFill />
          },
          {
            label: 'Employee',
            path:'employee',
            icon: <MdPerson />
          },
          {
            label: 'Run Payroll',
            path:'runpayroll',
            icon: <MdPerson /> 
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
            icon: <GiReceiveMoney />
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