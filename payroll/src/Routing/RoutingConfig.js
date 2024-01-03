import HomeMenus from '../Components/SidebarMenus/SidebarMenus/HomeMenus'
import AppMenus from '../Components/SidebarMenus/SidebarMenus/AppMenus'
import Settings from '../Components/SidebarMenus/SidebarMenus/SettingsMenus'
import TeamMeanus from '../Components/SidebarMenus/SidebarMenus/SettingsMenus'
import Home from '../pages/userContent/User'
import Groups from '../pages/groups/Groups';
import Roles from '../pages/roles/Roles';

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
        path: 'users',
        element: <User />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
      {
        path: 'roles',
        element: <Roles />,
      },
      {
        path: 'policies',
        element: <User />,
      },
      {
        path: 'apps',
        element: <User />,
      },
    ],
  },
  {
    path: 'apps',
    label:"Appplication",
    element: <AppMenus />,
    children: [
        {
          path: 'app1',
          element: <User />,
        },
        {
          path: 'app2',
          element: <Groups />,
        },
        {
          path: 'app3',
          element: <Roles />,
        },
        {
          path: 'app4',
          element: <User />,
        },
      ],
  },
  {
    path: 'settings',
    label:"Setting",
    element: <Settings />,
    children: [
      
      {
        path: 'users',
        element: <User />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
      {
        path: 'roles',
        element: <Roles />,
      },
      {
        path: 'policies',
        element: <User />,
      },
    ],
  },
];

export default routesConfig;