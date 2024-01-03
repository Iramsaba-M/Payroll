

import React from 'react';
import CardConfig from './CardConfig'; // Assuming this is where you use CardConfig
import CardData from './CardData';

const YourComponent = () => {
  return (
    <div>
      {/* Other components or content */}
      <CardConfig Config={CardData} />
    </div>
  );
};

export default YourComponent;


