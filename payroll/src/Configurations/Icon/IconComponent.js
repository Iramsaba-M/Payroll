import React from 'react';
import IconConfig from './IconMapping';
import IconStyle from './IconStyle';
const IconComponent = ({ name, type }) => {
  const iconInfo = IconConfig[name];

  if (!iconInfo) {
    return null; // Return null for unrecognized keys
  }

  const { icon, style } = iconInfo;

  return (
    <div className={style}>
      {icon}
    </div>
  );
};

export default IconComponent;
