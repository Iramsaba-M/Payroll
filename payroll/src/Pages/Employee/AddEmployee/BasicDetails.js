
import React from 'react';
import BasicDetailsFormComponent from '../../../Components/form/BasicDetailForm/BasicDetailsFormComponent'
import { basicdetailform } from './AddEmplyeeContent'


const BasicDetails = ({handleNextClick,handleEmpId,}) => {
 

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsFormComponent config={basicdetailform} handleNextClick={handleNextClick} handleEmpId={handleEmpId}  />
      </div>
    </div>
  );
};

export default BasicDetails;
