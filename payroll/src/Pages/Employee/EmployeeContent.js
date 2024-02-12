import { CiImport } from 'react-icons/ci';
import { BsArrowBarUp } from "react-icons/bs";

export const cardContent = [
  { card: 'style1', title: 'Total CTC', contentKey: 'total_ctc' },
  { card: 'style2', title: 'Total Monthly CTC', contentKey: 'total_monthly_ctc' },
  { card: 'style3', title: 'Total Employees', contentKey: 'total_employees' },
  // Add more card data as needed
];
  
export const ButtonData = [
  { label: 'Add Employee', icon: <CiImport />, style: 'buttonStyle' },
  { label: 'Import', icon: <CiImport />, style: 'buttonStyle1' },
  { label: 'Export', icon: <BsArrowBarUp />, style: 'buttonStyle1' }, 
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
    name: "CTC",
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
{
  name: "employee_id",
  label: "EMPLOYEE ID",
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






