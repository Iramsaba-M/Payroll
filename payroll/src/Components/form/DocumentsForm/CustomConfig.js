import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";

import DocumentStyles from "./DocumentStyles";
  

const CustomConfig = [
    {
      label: 'Custom Document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle} />, 
    },
    {
      label: 'Custom Number',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document',
      icon:<CiEdit className={DocumentStyles.iconstyle1} />,
    },
    
  
  ];
  
  export default CustomConfig;
  