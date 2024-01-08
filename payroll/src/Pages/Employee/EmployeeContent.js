import { CiImport } from 'react-icons/ci';
import { MdOutlineModeEdit } from "react-icons/md";

export const USERS_API = 'users';

export const CardData = [
  { card: 'Card1', title: 'Total CTC', contentKey: 'TOTALCTC' },
  { card: 'Card2', title: 'Total CTC for January', contentKey: 'JAN_CTC' },
  { card: 'Card3', title: 'Total Employees', contentKey: 'TOTAL_EMPLOYEE' },
  // Add more card data as needed
];
  
export const ButtonData = [
  { label: 'Add Employee',icon: <CiImport /> },
  { label: 'Import', icon: <CiImport /> },
  { label: 'Export', icon: <CiImport /> },
  // Add more button data as needed
];

export const tableContent = [
  {
    name: "employee_name",
    label: "EMPLOYEE NAME",
    dataType: "string",
    cssClass: "datastyle",
    clmncss : "style1"
},
{
    name: "designation",
    label: "DESIGNATION",
    dataType: "string",
    cssClass: "datastyle1",
    clmncss : "style1"
},
{
    name: "ctc",
    label: "CTC",
    dataType: "string",
    cssClass: "datastyle1",
    clmncss : "style1"
},
{
    name: "date_of_joining",
    label: "JOINING DATE",
    dataType: "Date",
    cssClass: "datastyle2",
    clmncss : "style1"
},
// Add more column data as needed
];

export const employeeData = [
  { EMPLOYEE_NAME: 'John Doe', DESIGNATION: 'CEO', CTC: '$10', JOINING_DATE: '10/7/2023' },
  { EMPLOYEE_NAME: 'Jane Smith', DESIGNATION: 'CTO', CTC: '$10', JOINING_DATE: '10/7/2023'},
  { EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'CFO', CTC: '$10', JOINING_DATE: '10/7/2023'},
  { EMPLOYEE_NAME: 'Marketing', DESIGNATION: 'Marketing', CTC: '$10', JOINING_DATE: '10/7/2023'},
  { EMPLOYEE_NAME: 'Human resource', DESIGNATION: 'Human resource', CTC: '$10', JOINING_DATE: '10/7/2023'},
  // Add more data as needed
];


