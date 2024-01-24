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
      "textcss": "standard"
      
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
          { "label": "Headquarters", "value": "headquarters" },
          { "label": "Branch Office 1", "value": "branch_office_1" },
          { "label": "Branch Office 2", "value": "branch_office_2" },
          { "label": "Remote", "value": "remote" },
          { "label": "Client Site", "value": "client_site" }
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
      "label": "CTC Template",
      "type": "options",
      "options": [
          { "label": "template 1", "value": "template 1" },
          { "label": "template 2", "value": "template 2" },
          { "label": "template 3", "value": "template 3" },
         
      ],
      "textcss": "standard"
    },
    {
      "label": "Annual CTC",
      "type": "text",
      "placeholder": "Enter Annual CTC",
      "textcss": "standard",
      "fieldstyle": "inline-block "
    },
    {
      "label": "Monthly CTC",
      "type": "text",
      "placeholder": "Enter Monthly CTC",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "Basic",
      "type": "text",
      "placeholder": "Enter Basic",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "DA",
      "type": "text",
      "placeholder": "Enter DA",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "label": "HRA",
      "type": "text",
      "placeholder": "Enter HRA",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "Allowances",
      "type": "text",
      "placeholder": "Enter Allowances",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "Other Special Allowances",
      "type": "text",
      "placeholder": "Enter Other Special Allowances",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "label": "Gross Salary",
      "type": "text",
      "placeholder": "Enter Gross Salary",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "label": "EPF",
      "type": "text",
      "placeholder": "Enter EPF",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "ESIC",
      "type": "text",
      "placeholder": "Enter ESIC",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "PT",
      "type": "text",
      "placeholder": "Enter PT",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "label": "Gratuity",
      "type": "text",
      "placeholder": "Enter Gratuity",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "Medical Insurance",
      "type": "text",
      "placeholder": "Enter Medical Insurance",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "label": "Others",
      "type": "text",
      "placeholder": "Enter Others",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "label": "Net Salary",
      "type": "text",
      "placeholder": "Enter Net Salary",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    }
  ]
  
  
  
  
  
  