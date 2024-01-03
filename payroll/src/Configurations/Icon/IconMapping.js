import { BiHome, BiGridAlt, BiGroup, BiCog, BiBell, BiLogOut } from 'react-icons/bi';
import IconStyle from './IconStyle';

const IconMapping = {
  home: {
    icon: <BiHome />,
    style: IconStyle.homeStyle1,
  },
  apps: {
    icon: <BiGridAlt />,
    style: IconStyle.appStyle1,
  },
  users: {
    icon: <BiGroup />,
    style: IconStyle.usersStyle,
  },
  settings: {
    icon: <BiCog />,
    style: IconStyle.settingsStyle,
  },
  notifications: {
    icon: <BiBell />,
    style: IconStyle.notificationsStyle,
  },
  notifications1: {
    icon: <BiLogOut />,
    style: IconStyle.notificationsStyle1,
  },
};

export default IconMapping;
