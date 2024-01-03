import React from 'react';
import IconComponent from './IconComponent'; // Assuming IconComponent.js is in the same directory
import IconMapping from './IconMapping'; // Import your icon configuration

const Icon = () => {
  return (
    <div>
      {Object.keys(IconMapping).map((name) => (
        <IconComponent
          key={name}
          name={name}
          type="icon"
        />
      ))}
    </div>
  );
};

export default Icon;
