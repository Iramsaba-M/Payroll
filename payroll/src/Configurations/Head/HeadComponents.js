// HeadComponents.js
import React from 'react';
import HeaderStyles from './HeadStyles';

const HeadComponents = ({ props, currentPath }) => {
  const spacing = `space-x-${props.length}`;
  
  return (
    <div className={`${HeaderStyles.HeaderBg} ${spacing}`}>
      <ul className="flex items-center">
        <li className={HeaderStyles.HeaderPath}>{currentPath}</li>
      </ul>

      <ul className="flex items-center">
        {props.map((element, index) => (
          <li key={index} className={HeaderStyles[element.css]}>
            {element.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadComponents;