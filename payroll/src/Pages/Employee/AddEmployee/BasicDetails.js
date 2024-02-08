// // BasicDetails.js
// import React, { useState } from 'react';
// import BasicDetailsForm from '../../../Components/form/BasicDetailForm/BasicDetailForm';
// import { basicdetailform } from './AddEmplyeeContent'
// import Button from '../../../Configurations/Buttoncomponent/Button';
// import { basicdetails_ButtonData} from './AddEmplyeeContent'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BasicDetails = ({handleNextClick}) => {
 

//   return (
//     <div>
//       <div className='basicdeatils'>
//         <BasicDetailsForm configs={basicdetailform} handleNextClick={handleNextClick} />
//       </div>
//     </div>
//   );
// };

// export default BasicDetails;

import React, { useState } from 'react';
import BasicDetailsForm from '../../../Components/form/BasicDetailForm/BasicDetailForm';
import { basicdetailform } from './AddEmplyeeContent'
import Button from '../../../Configurations/Buttoncomponent/Button';
import { basicdetails_ButtonData} from './AddEmplyeeContent'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BasicDetails = ({handleNextClick,handleEmpId,}) => {
 

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsForm configs={basicdetailform} handleNextClick={handleNextClick} handleEmpId={handleEmpId}  />
      </div>
    </div>
  );
};

export default BasicDetails;
