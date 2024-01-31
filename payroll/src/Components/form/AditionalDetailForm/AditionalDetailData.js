import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

const AditionalDetailData = [
    {
      "label": "Current Password",
      "name":"current_password",
      "type": "password",
      "placeholder": "current Password",
      "textcss": "standard",
      "icon":<IoEyeOutline />,
        "icon2":<FiEyeOff />,
    },
    {
        "label": "Type of Employee",
        "name":"employe_type",
        "type": "options",
        "options": [
          { "name": "Employee", "value": "Employee" },
          { "name": "Unpaid Intern", "value": "Unpaid Intern" },
          { "name": "Paid Intern", "value": "Paid Intern" }
        ],
        "placeholder": "",
        "textcss": "standard",
    },
  
    {
        "label": "Add Benefit",
        "name":"employe_Benefit",
        "type": "options1",
        "dropdownOptions": [
          { "label": "food", "value": "food" },
          { "label": "Transport", "value": "Transport" },
          { "label": "Accomodation", "value": "Accomodation" }
        ],
        "placeholder": "",
        "textcss": "standard",
    },
    {
      
        "label": "Employee Status",
        "name":"Employee Status",
        "type": "options",
        "next":"options",
        "options": [
          { "name": "Active", "value": "Active" , "next":"",},
          { "name": "Inactive", "value": "Inactive" , "next":"options", 
            "Inactive_Options":[
                { "name": "On Leave", "value": "On Leave" , "next":"options1", 
                    "LeaveOptions":[{ "name": "Maternity Leave", "value": "Maternity Leave" },
                    { "name": "Paternity Leave", "value": "Paternity Leave" },
                    { "name": "Vacation Leave", "value": "Vacation Leave" },
                    { "name": "Medical Leave", "value": "Medical Leave" },
                    { "name": "Sabbatical Leave", "value": "Sabbatical Leave" },
                    { "name": "Marriage Leave", "value": "Marriage Leave" },]
                },
                { "name": "Suspended", "value": "Suspended", "next":"options2", 
                    "SuspendedOptions":[
                        { "name": "Due to Disciplinary Action", "value": "Due to Disciplinary Action" },
                        { "name": "Other Reason", "value": "Other Reason" },
                    ]
                },
            ]
        },
          { "name": "Terminate/Resign", "value": "Terminate/Resign" ,"next":""},
          { "name": "Retired", "value": "Retired","next":"" }
        ],
        "placeholder": "Employee Status",
        "textcss": "standard1",
    },
    {
      
        "label": ".",
        "name":"Employee_Inactive_Status1",
        "type": "options",
        "options":[],
        "options": [
          { "name": "On Leave", "value": "On Leave" , "next":"options1",},
          { "name": "Suspended", "value": "Suspended", "next":"options2", },
          
        ],
        "placeholder": "",
        "textcss": "standard1",
    },
    {
      
        "label": ".",
        "name":"Employee_Inactive_Status2",
        "type": "options",
        "options":[],
        "options": [
          { "name": "Maternity Leave", "value": "Maternity Leave" },
          { "name": "Paternity Leave", "value": "Paternity Leave" },
          { "name": "Vacation Leave", "value": "Vacation Leave" },
          { "name": "Medical Leave", "value": "Medical Leave" },
          { "name": "Sabbatical Leave", "value": "Sabbatical Leave" },
          { "name": "Marriage Leave", "value": "Marriage Leave" },

        ],
        "options1": [
            { "name": "Due to Disciplinary Action", "value": "Due to Disciplinary Action" },
            { "name": "Other Reason", "value": "Other Reason" },
            
          ],
        "placeholder": "",
        "textcss": "standard1",
    },
    
  
  ]
  export default AditionalDetailData