

import React from 'react';
import CardConfig from './CardConfig'; // Assuming this is where you use CardConfig
import CardData from './CardData';

const card = ({Configs}) => {
  return (
    <div>
      {/* Other components or content */}
      <CardConfig Config={Configs} />
    </div>
  );
};

export default card;


