import React from 'react';
import AditionalDetailFormComponent from './AditionalDetailFormComponent';

export default function AditionalDetailForm({configs,handleNextClick}) {
  return (
    <div>
      <AditionalDetailFormComponent config={configs} handleNextClick={handleNextClick} />
    </div>
  );
}
