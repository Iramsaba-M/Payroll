import HomeMenus from '../Components/SidebarMenus/SidebarMenus/HomeMenus'
import AppMenus from '../Components/SidebarMenus/SidebarMenus/AppMenus'
import SettingsMenus from '../Components/SidebarMenus/SidebarMenus/SettingsMenus'
import TeamMeanus from '../Components/SidebarMenus/SidebarMenus/TeamMenus'
import Home from '../Pages/Home/Home'
import Employee from '../Pages/Employee/Employee';
import RunPayroll from '../Pages/Run Payroll/RunPayroll';
import Notifications from '../Pages/Notifications/Notifications'
import CTC_Calculator from '../Pages/CTC Calculator/CTC_Calculator'
import Loans from '../Pages/Loans/Loans'
import Reports from '../Pages/Reports/Reports'

// import Settings from '../Pages/Settings/Setting'
import CTCTemplateSetting from '../Pages/Settings/CTCTemplateSetting'
import PayRollSetting from '../Pages/Settings/PayRollSetting'
import ReimbursementSetting from '../Pages/Settings/ReimbursementSetting'
import LoanSetting from '../Pages/Settings/LoanSettings/LoanSetting'
import Setting from '../Pages/Settings/Setting'
import PayslipSetting from '../Pages/Settings/PayslipSetting'
import PaymentReminderSetting from '../Pages/Settings/PaymentReminderSetting'
import AnnouncementSetting from '../Pages/Settings/AnnouncementSetting'
import LeaveSetting from '../Pages/Settings/LeaveSetting'

import AddEmp from '../Pages/Employee/AddEmployee/AddEmp'


const routesConfig = [
  {
    path: '/',
    label:"Home",
    element: <HomeMenus />,
    children: [
        {
          path: 'home1',
          element: <Home />,
        },
        {
          path: 'home2',
          element: <Employee />,
        },
        {
          path: 'home3',
          element: <RunPayroll />,
        },
        {
          path: 'home4',
          element: <Notifications />,
        },
      ],
  },
  {
    path: '/team',
    label:"Team",
    element: <TeamMeanus />,
    children: [
        {
            path: 'home1',
            element: <Home />,
          },
          {
            path: 'home2',
            element: <Employee />,
          },
          {
            path: 'home3',
            element: <RunPayroll />,
          },
          {
            path: 'home4',
            element: <Notifications />,
          },
    ],
  },
  {
    path: 'apps',
    label:"Appplication",
    element: <AppMenus />,
    children: [
        {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'employee',
            element: <Employee />,
            children: [
              {
                  path: 'addemployee',
                  element: <AddEmp/>,
              },    
            ],
          },
          {
            path: 'runpayroll',
            element: <RunPayroll />,
          },
          {
            path: 'notifications',
            element: <Notifications />,
          },
          {
            path: 'ctccalculator',
            element: <CTC_Calculator />,
          },
          {
            path: 'loans',
            element: <Loans />,
          },
          {
            path: 'reports',
            element: <Reports />,
          },
          {
            path: 'Settings',
            element: <Setting />,
            children: [
              {
                  path: 'CTCTemplateSetting',
                  element: <CTCTemplateSetting />,
                },
                {
                  path: 'PayRollSetting',
                  element: <PayRollSetting />,
                },
                {
                  path: 'ReimbursementSetting',
                  element: <ReimbursementSetting />,
                },
                {
                  path: 'LoanSetting',
                  element: <LoanSetting />,
                },
                {
                  path: 'PayslipSetting',
                  element: <PayslipSetting />,
                },
                {
                  path: 'PaymentReminderSetting',
                  element: <PaymentReminderSetting />,
                },
                {
                  path: 'AnnouncementSetting',
                  element: <AnnouncementSetting />,
                },
                {
                  path: 'LeaveSetting',
                  element: <LeaveSetting />,
                },
                
            ],
          },
      ],
  },
  {
    path: 'settings',
    label:"Setting",
    element: <SettingsMenus />,
    children: [
        {
            path: 'home1',
            element: <Home />,
          },
          {
            path: 'home2',
            element: <Employee />,
          },
          {
            path: 'home3',
            element: <RunPayroll />,
          },
          {
            path: 'home4',
            element: <Notifications />,
          },
    ],
  },
];

export default routesConfig;