import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
  

const CustomConfig = [
    {
      label: 'Custom Document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin />, 
    },
    {
      label: 'Custom Number',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard',
      icon:<CiEdit />,
    },
    
  
  ];
  
  export default CustomConfig;
  