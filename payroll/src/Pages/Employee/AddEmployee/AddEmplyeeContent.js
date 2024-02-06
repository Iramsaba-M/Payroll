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
    // {
    //   "name": "employee_name",
    //   "label": "Employee Name",
    //   "type": "tripleInput",
    //   "placeholders": ["First Name", "Middle Name", "Last Name"],
    //   "textcss": "standard1",
    //   "keys": ["First_name", "Middle_Name", "Last_Name"], // keys for first name, middle name, and last name
    // },
    {
      "name":"first_name",
      "label": "",
      "type": "text",
      "placeholder": "First Name ",
      "textcss": "standard"
    }, 
    {
      "name":"middle_name",
      "label": " ",
      "type": "text",
      "placeholder": "Middle Name ",
      "textcss": "standard"
    },
    {
      "name":"last_name",
      "label": "",
      "type": "text",
      "placeholder": "Last Name ",
      "textcss": "standard"
    },
    {
      "name": "dob",
      "label": "DOB* ",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard"
    },
    {
      "name":"gender",
      "label": "Gender* ",
      "type": "options",
      "options": [
          { "name": "Female", "value": "female" },
          { "name": "Male", "value": "male" }
      ],
      "placeholder":"",
      "textcss": "standard"
    },
    {
      "name":"date_of_joining",
      "label": "Date Of Joining*",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard"
    },
    {
      "name":"blood_group",
      "label": "Blood group*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"designation",
      "label": "Designation*",
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
      "name":"employee_id",
      "label": "Employee ID*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"department",
      "label": "Department*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"type_of_employee",
      "label": "Type Of Employee*",
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
  //   {
  //     "name":"address_line1",
  //     "label": "Address: ",
  //     "type": "doubleInput",
  //     "placeholders": ["Line 1", "Line 2"],
  //     "textcss": "standard",
  //     "keys": ["Line 1", "Line 2"],
  // },
  {
    "name":"address_line1",
    "label": "Address*",
    "type": "text",
    "placeholder": "Line 1 ",
    "textcss": "standard"
    
  },
  {
    "name":"address_line2",
    "label": "",
    "type": "text",
    "placeholder": "Line 2",
    "textcss": "standard"
  },

  {
    "name":"differently_abled",   
    "label": "Differently abled*",
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
    "name":"personal_email",
      "label": "Personal Email* ",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
     
  },
  {
    "name":"work_email",
      "label": "Work Email*",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
      
  },
  {
    "name":"phone_number",
      "label": "Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
  },
  {
    "name":"alternate_phone_number",
      "label": "Alternate Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
  },
  {
    "name":"work_location",
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
          { "label": "template 1", "value": "template 1" },
          { "label": "template 2", "value": "template 2" },
          { "label": "template 3", "value": "template 3" },
         
      ],
      "textcss": "standard"
    },
    {
      "name":"annual_ctc",
      "label": "Annual CTC",
      "type": "text",
      "placeholder": "Enter Annual CTC",
      "textcss": "standard",
      "fieldstyle": "inline-block "
    },
    {
      "name":"earning.monthly_ctc",
      "label": "Monthly CTC",
      "type": "text",
      "placeholder": "Enter Monthly CTC",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"earning.basic",
      "label": "Basic",
      "type": "text",
      "placeholder": "Enter Basic",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"earning.da",
      "label": "DA",
      "type": "text",
      "placeholder": "Enter DA",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "name":"earning.hra",
      "label": "HRA",
      "type": "text",
      "placeholder": "Enter HRA",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"earning.allowances",
      "label": "Allowances",
      "type": "text",
      "placeholder": "Enter Allowances",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"earning.other_special_allowances",
      "label": "Other Special Allowances",
      "type": "text",
      "placeholder": "Enter Other Special Allowances",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "name":"gross_salary",
      "label": "Gross Salary",
      "type": "text",
      "placeholder": "Enter Gross Salary",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "name":"deduction.epf",
      "label": "EPF",
      "type": "text",
      "placeholder": "Enter EPF",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"deduction.esic",
      "label": "ESIC",
      "type": "text",
      "placeholder": "Enter ESIC",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"deduction.pt",
      "label": "PT",
      "type": "text",
      "placeholder": "Enter PT",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "name":"deduction.gratuity",
      "label": "Gratuity",
      "type": "text",
      "placeholder": "Enter Gratuity",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"deduction.medical_insurance",
      "label": "Medical Insurance",
      "type": "text",
      "placeholder": "Enter Medical Insurance",
      "textcss": "standard",
      "fieldstyle": "inline-block mr-4"
    },
    {
      "name":"deduction.others",
      "label": "Others",
      "type": "text",
      "placeholder": "Enter Others",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    },
    {
      "name":"net_salary",
      "label": "Net Salary",
      "type": "text",
      "placeholder": "Enter Net Salary",
      "textcss": "standard",
      "fieldstyle": "inline-block"
    }
  ]
  
  
  
  
  
  