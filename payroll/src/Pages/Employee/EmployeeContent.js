import { CiImport } from 'react-icons/ci';

export const USERS_API = 'users';

export const CardData = [
    { card: 'Card1', title: 'Card 1', content: 'Content for Card 1' },
    { card: 'Card2', title: 'Card 2', content: 'Content for Card 2' },
    { card: 'Card3', title: 'Card 3', content: 'Content for Card 3' },

  ];
  

export const ButtonData = [
  { label: 'Add Employee',icon: <CiImport /> },
  { label: 'Import', icon: <CiImport /> },
  { label: 'Export', icon: <CiImport /> },
  // Add more button data as needed
];

// export const tableContent = [
//     {
//         name: "name",
//         label: "Name",
//         dataType: "string",
//         cssClass: "datastyle",
//         clmncss : "style1"
//     },
//     {
//         name: "email",
//         label: "Email",
//         dataType: "string",
//         cssClass: "datastyle",
//         clmncss : "style1"
//     },
     
//   ];

export const tableContent = [
  {
      name: "EMPLOYEE_NAME",
      label: "EMPLOYEE NAME",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "style1"
  },
  {
      name: "DESIGNATION",
      label: "DESIGNATION",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "style1"
  },
  {
      name: "CTC",
      label: "CTC",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "style1"
  },
  {
      name: "JOINING_DATE",
      label: "JOINING DATE",
      dataType: "Date",
      cssClass: "datastyle",
      clmncss : "style1"
  },
 
  
];

export const data = [
  { EMPLOYEE_NAME: 'John Doe', DESIGNATION: 'CEO',CTC:'$10',JOINING_DATE:'10/7/2023' },
  {  EMPLOYEE_NAME: 'Jane Smith', DESIGNATION: 'CTO',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
  {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'CFO',CTC:'$10',JOINING_DATE:'10/7/2023'  },
  {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'Marketing',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
  {  EMPLOYEE_NAME: 'Bob Johnson hgghh', DESIGNATION: 'Human resource',CTC:'$10',JOINING_DATE:'10/7/2023'  },
];



