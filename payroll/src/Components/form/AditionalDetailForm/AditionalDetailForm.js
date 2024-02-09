import React from 'react';
import AditionalDetailFormComponent from './AditionalDetailFormComponent';

export default function AditionalDetailForm({configs,handleNextClick ,employeeId}) {
  return (
    <div>
      <AditionalDetailFormComponent config={configs} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  );
}
