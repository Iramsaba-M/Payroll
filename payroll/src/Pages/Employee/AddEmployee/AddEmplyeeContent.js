export const navs = [
    {
          "id": 1,
          "name": "Basic Details", 
          "link": "Basic Details",
          "navcss": "style6"
        
    },
    { 
        "id": 2, 
        "name": "Salary Details", 
        "link": "Salary Details",
        "navcss": "style6"
    },
    { 
        "id": 3, 
        "name": "Bank Details", 
        "link": "Bank Details",
        "navcss": "style6"
    },
    { 
        "id": 4, 
        "name": "Documents", 
        "link": "Documents",
        "navcss": "style6"
    },
    { 
        "id": 5, 
        "name": "Aditional Details", 
        "link": "Aditional Details",
        "navcss": "style6"
    }
  ];

  export const basicdetailform = [
    {
      "name": "employee_name",
      "label": "Employee Name",
      "type": "tripleInput",
      "placeholders": ["First Name", "Middle Name", "Last Name"],
      "textcss": "standard1",
      "keys": ["First_name", "Middle_Name", "Last_Name"], // keys for first name, middle name, and last name
    },
    {
      "name": "dob",
      "label": "DOB: ",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard"
    },
    {
      "name":"gender",
      "label": "Gender: ",
      "type": "options",
      "options": [
          { "name": "Female", "value": "female" },
          { "name": "Male", "value": "male" }
      ],
      "placeholder":"",
      "textcss": "standard"
    },
    {
      "name":"dateofjoining",
      "label": "Date Of Joining: ",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard"
    },
    {
      "name":"name",
      "label": "Blood group: ",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"designation",
      "label": "Designation: ",
      "type": "options",
      "options": [
          { "name": "CEO", "value": "ceo" },
          { "name": "CTO", "value": "cto" },
          { "name": "Manager", "value": "manager" },
          { "name": "Software Engineer", "value": "software_engineer" }
      ],
      "textcss": "standard"
    },
    {
      "name":"employeeid",
      "label": "Employee Id: ",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"department",
      "label": "Department: ",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"type of employee",
      "label": "Type Of Employee: ",
      "type": "options",
    
      "options": [
         
          {
              "name": "employed",
              "value": "employed"
          },
          {
              "name": "intern",
              "value": "intern"
          }
      ],
       "textcss": "standard"
       
    },
    {
      "name":"address",
      "label": "Address: ",
      "type": "doubleInput",
      "placeholders": ["Line 1", "Line 2"],
      "textcss": "standard",
      "keys": ["Line 1", "Line 2"],
  },
  {
    "name":"differently_abled",   
    "label": "Differently abled: ",
    "type": "options",
    
    "options": [
       
        {
            "name": "Yes",
            "value": "Yes"
        },
        {
            "name": "No",
            "value": "No"
        }
    ],
     "textcss": "standard"
     
    },
  {
    "name":"personalemail",
      "label": "Personal Email: ",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
     
  },
  {
    "name":"WorkEmail",
      "label": "Work Email: ",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
      
  },
  {
    "name":"pn",
      "label": "Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
  },
  {
    "name":"apn",
      "label": "Alternate Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
  },
  {
    "name":"WorkLocation",
      "label": "Work Location: ",
      "type": "options",
      "options": [
          { "name": "Headquarters", "value": "headquarters" },
          { "name": "Branch Office 1", "value": "branch_office_1" },
          { "name": "Branch Office 2", "value": "branch_office_2" },
          { "name": "Remote", "value": "remote" },
          { "name": "Client Site", "value": "client_site" }
      ],
      "textcss": "standard"

  },
  
];


export const basicdetails_ButtonData = [
    { label: 'Save', style: 'buttonStyle2' },
    { label: 'Next', style: 'buttonStyle3' },
  ];


  export const salaryData= [
    {
      "name":"ctc_template",
      "label": "CTC Template",
      "type": "options",
      "options": [
          { "name": "template 1", "value": "template 1" },
          { "name": "template 2", "value": "template 2" },
          { "name": "template 3", "value": "template 3" },
         
      ],
      "textcss": "standard"
    },
    {
      "name":"annual_ctc",
      "label": "Annual CTC",
      "type": "number",
      "placeholder": "Enter Annual CTC",
      "numbercss": "standard",
      "fieldstyle": "inline-block ",
      "numberType": "float"
    },
    {
      "name":"monthly_ctc",
      "label": "Monthly CTC",
      "type": "number",
      "placeholder": "Enter Monthly CTC",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"basic",
      "label": "Basic",
      "type": "number",
      "placeholder": "Enter Basic",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"da",
      "label": "DA",
      "type": "number",
      "placeholder": "Enter DA",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    },
    {
      "name":"hra",
      "label": "HRA",
      "type": "number",
      "placeholder": "Enter HRA",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"allowances",
      "label": "Allowances",
      "type": "number",
      "placeholder": "Enter Allowances",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"other_special_allowances",
      "label": "Other Special Allowances",
      "type": "number",
      "placeholder": "Enter Other Special Allowances",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    },
    {
      "name":"gross_salary",
      "label": "Gross Salary",
      "type": "number",
      "placeholder": "Enter Gross Salary",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    },
    {
      "name":"epf",
      "label": "EPF",
      "type": "number",
      "placeholder": "Enter EPF",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"esic",
      "label": "ESIC",
      "type": "number",
      "placeholder": "Enter ESIC",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"pt",
      "label": "PT",
      "type": "number",
      "placeholder": "Enter PT",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    },
    {
      "name":"gratuity",
      "label": "Gratuity",
      "type": "number",
      "placeholder": "Enter Gratuity",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"medical_insurance",
      "label": "Medical Insurance",
      "type": "number",
      "placeholder": "Enter Medical Insurance",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float"
    },
    {
      "name":"others",
      "label": "Others",
      "type": "number",
      "placeholder": "Enter Others",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    },
    {
      "name":"net_salary",
      "label": "Net Salary",
      "type": "number",
      "placeholder": "Enter Net Salary",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "float"
    }
  ]
  
  
  
  
  
  