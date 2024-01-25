// //json data
// const DocumentsData=[
//     {
//         "label": "Employee Name",
//         "type": "text",
//         "placeholder": "First Name",
//         "textcss": "standard",
        
//       },
//       {
//         "label": "",
//         "type": "text",
//         "placeholder": "Middle Name",
//         "textcss": "standard1"
//       },
//       {
//         "placeholder": "Last Name",
//         "type": "text",
//         "textcss": "standard1"
//       },
//   {
//       "label": "DOB: ",
//       "type": "date",
//       "placeholder": "dd/yy/mm",
//       "textcss": "standard"
//   },
//   {
//       "label": "Gender: ",
//       "type": "options",
//       "options": [
//           { "label": "Female", "value": "female" },
//           { "label": "Male", "value": "male" }
//       ],
//       "placeholder":"",
//       "textcss": "standard"
//   },
//   {
//       "label": "Date Of Joining: ",
//       "type": "date",
//       "placeholder": "dd/yy/mm",
//       "textcss": "standard"
//   },
//   {
//       "label": "Blood group: ",
//       "type": "text",
//       "placeholder": "Enter here",
//       "textcss": "standard"
//   },
//   {
//       "label": "Designation: ",
//       "type": "options",
//       "options": [
//           { "label": "CEO", "value": "ceo" },
//           { "label": "CTO", "value": "cto" },
//           { "label": "Manager", "value": "manager" },
//           { "label": "Software Engineer", "value": "software_engineer" }
//       ],
//       "textcss": "standard"
//   },
//   {
//       "label": "Employee Id: ",
//       "type": "text",
//       "placeholder": "Enter here",
//       "textcss": "standard"
//   },
//   {
//       "label": "Department: ",
//       "type": "text",
//       "placeholder": "Enter here",
//       "textcss": "standard"
//   },
//   {
//       "label": "Type Of Employee: ",
//       "type": "options",
    
//       "options": [
         
//           {
//               "label": "employed",
//               "value": "employed"
//           },
//           {
//               "label": "intern",
//               "value": "intern"
//           }
//       ],
//        "textcss": "standard"
       
//       },
//   {
//       "label": "Address: ",
//       "type": "doubleInput",
//       "placeholders": ["Line 1", "Line 2"],
//       "textcss": "standard"
      
//   },
//   {
        
//     "label": "Differently abled: ",
//     "type": "options",
    
//     "options": [
       
//         {
//             "label": "Yes",
//             "value": "Yes"
//         },
//         {
//             "label": "No",
//             "value": "No"
//         }
//     ],
//      "textcss": "standard"
     
//     },
//   {
//       "label": "Personal Email: ",
//       "type": "email",
//       "placeholder": "Enter your email",
//       "textcss": "standard2"
     
//   },
//   {
//       "label": "Work Email: ",
//       "type": "email",
//       "placeholder": "Enter your email",
//       "textcss": "standard2"
      
//   },
//   {
//       "label": "Phone Number: ",
//       "type": "tel",
//       "placeholder": "Enter your phone number",
//       "textcss": "standard"
      
//   },
//   {
//       "label": "Alternate Phone Number: ",
//       "type": "tel",
//       "placeholder": "Enter your phone number",
//       "textcss": "standard"
      
//   },
//   {
//       "label": "Work Location: ",
//       "type": "options",
//       "options": [
//           { "label": "Headquarters", "value": "headquarters" },
//           { "label": "Branch Office 1", "value": "branch_office_1" },
//           { "label": "Branch Office 2", "value": "branch_office_2" },
//           { "label": "Remote", "value": "remote" },
//           { "label": "Client Site", "value": "client_site" }
//       ],
//       "textcss": "standard"

//   },
// ]
// export default DocumentsData    


import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
  

const DocumentsData  = [
    {
      label: 'Upload Aadhar Documents',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin />, 
    },
    {
      label: 'Enter Aadhar Number ',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard',
      icon:<CiEdit />,
    },
    {
        label: 'Upload PAN Documents',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin />,
      },
      {
        label: 'Enter PAN Number ',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit />,
        
      },
    
      {
        label: 'Upload ESIC Document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin />,
      },
      {
        label: 'Enter ESIC Number ',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit />,
      },
      {
        label: 'Upload EPFO Document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin />,
      },
      {
        label: 'Enter EPFO Number ',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit />,
      },
      {
        label: 'Upload Form 16 Document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin />,
      },
      {
        label: 'Enter Aadhar Number. ',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit />,
      },
      
  
  ];
  
  export default DocumentsData ;
  