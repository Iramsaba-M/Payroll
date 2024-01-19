// import React, { useState, useEffect } from 'react';
// import Card from '../../Configurations/cardcomponent/Card';
// import Button from '../../Configurations/Buttoncomponent/Button';
// import { cardContent, ButtonData, tableContent, USERS_API } from './EmployeeContent';
// import TableComponent from '../../Configurations/tables/TableComponent';
// import { getApiUrl } from '../../Api/getAPI/GetAPI';
// import axios from 'axios';
// import AddEmployee from './AddEmployee/AddEmployee'; // Import the AddEmployee component

// const EmployeeComponent = () => {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [empcardData, setCardData] = useState([]);
//   const [showAddEmployee, setShowAddEmployee] = useState(false); // State to track rendering of AddEmployee

//   const fetchemployeeData = async () => {
//     // Fetch Employee Data
//     try {
//       // const response = await axios.get("http://192.168.0.128:5000/api/employees");
//       const response = await axios.get("http://localhost:3000/employees");
//       setEmployeeData(response.data);
//     } catch (error) {
//       console.error(`Error fetching ${USERS_API} data:`, error);
//     }
//   };

//   useEffect(() => {
//     fetchemployeeData();
//   }, []);
//   console.log(employeeData)

//   const fetchCardData = async () => {
//     // Fetch Card Data
//     try {
//       // const response = await axios.get("http://192.168.0.128:8000/api/total_ctc_and_employees");
//       const response = await axios.get("http://localhost:3000/cardData");
//       setCardData(response.data);
//     } catch (error) {
//       console.error(`Error fetching ${USERS_API} data:`, error);
//     }
//   };

//   useEffect(() => {
//     fetchCardData();
//   }, []);
// console.log(empcardData)

//   const handleButtonClick = (label) => {
//     // Update state based on button click
//     if (label === 'Add Employee') {
//       setShowAddEmployee(true); // Show AddEmployee component when 'Add Employee' button is clicked
//     }
//     // Handle other button actions if needed
//   };

//   return (
//     <div className="flex flex-col">
//       {!showAddEmployee ? ( // Render EmployeeComponent if showAddEmployee is false
//         <>
//           <div className='card p-2'>
//             <Card Configs={cardContent} data={empcardData} />
//           </div>

//           <div className="flex items-center justify-between p-1 ml-4">
//             <div className='text-left ml-4 font-lg font-bold text-gray-500'>
//               Detailed report
//             </div>
//             <div className='text-right p-1 mr-4'>
//               <Button Configs={ButtonData} onClick={handleButtonClick} />
//             </div>
//           </div>

//           <div className="flex p-4 ml-4">
//             <TableComponent config={tableContent} data={employeeData} />
//           </div>
//         </>
//       ) : (
//         <AddEmployee /> // Render AddEmployee component if showAddEmployee is true
//       )}
//     </div>
//   );
// };

// export default EmployeeComponent;

import React, { useState, useEffect } from 'react';
import Card from '../../Configurations/cardcomponent/Card';
import Button from '../../Configurations/Buttoncomponent/Button';
import { cardContent, ButtonData, tableContent, USERS_API } from './EmployeeContent';
import TableComponent from '../../Configurations/tables/TableComponent';
import { getApiUrl } from '../../Api/getAPI/GetAPI';
import axios from 'axios';
import AddEmployee from './AddEmployee/AddEmployee';
import { parseExcelFile, uploadEmployeeData, generateTemplate } from '../../excelUtils';

const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [empcardData, setCardData] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showImportPopup, setShowImportPopup] = useState(false);
  const [excelData, setExcelData] = useState([]);

  const fetchemployeeData = async () => {
    try {
      const response = await axios.get("http://192.168.0.103:8000/employees/");
      // const response = await axios.get("http://localhost:3000/employees");
      setEmployeeData(response.data);
      
      // Fetch data from Excel sheet and append it to the existing data
      const excelData = await parseExcelFile(); // Assuming parseExcelFile is a function that fetches and parses the Excel data
      setEmployeeData(prevData => [...prevData, ...excelData]);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };
  

  useEffect(() => {
    fetchemployeeData();
  }, []);

  const fetchCardData = async () => {
    try {
      const response = await axios.get("http://192.168.0.103:8000/api/total_ctc_and_employees");
      // const response = await axios.get("http://localhost:3000/cardData");
      setCardData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const handleButtonClick = (label) => {
    if (label === 'Add Employee') {
      setShowAddEmployee(true);
    } else if (label === 'Import') {
      setShowImportPopup(true);
    }
  };

  const uploadFile = async (file) => {
    try {
      const parsedData = await parseExcelFile(file);

      // Upload the parsed data to the server
      await uploadEmployeeData(parsedData);

      // Update the state with the parsed data
      setEmployeeData([...employeeData, ...parsedData]);
      setExcelData(parsedData);
    } catch (error) {
      console.error('Error processing file content:', error);
    }
  };
  

 const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  try {
    const parsedData = await parseExcelFile(file);

    // Upload the parsed data to the server
    await uploadEmployeeData(parsedData);

    // Update the state with the parsed data
    setEmployeeData([...employeeData, ...parsedData]);
    setExcelData(parsedData);
  } catch (error) {
    console.error('Error processing file content:', error);
  }

  // Close the import popup after uploading the file
  setShowImportPopup(false);
};

  const closeImportPopup = () => {
    setShowImportPopup(false);
  };

  return (
    <div className="flex flex-col">
      {!showAddEmployee ? (
        <>
          <div className='card p-2'>
            <Card Configs={cardContent} data={empcardData} />
          </div>

          <div className="flex items-center justify-between p-1 ml-4">
            <div className='text-left ml-4 font-lg font-bold text-gray-500'>
              Detailed report
            </div>
            <div className='text-right p-1 mr-4'>
              <Button Configs={ButtonData} onClick={handleButtonClick} />
            </div>
          </div>

          <div className="flex p-4 ml-4">
            <TableComponent config={tableContent} data={employeeData}  />
          </div>
        </>
      ) : (
        <AddEmployee />
      )}

      {showImportPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
              onClick={generateTemplate} // "Download Template" button
            >
              Download Template
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-4"
              onClick={() => document.getElementById('fileInput').click()}
            >
              Upload File
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={closeImportPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeComponent;
