import React, { useState, useEffect } from 'react';
import Card from '../../Configurations/cardcomponent/Card';
import Button from '../../Configurations/Buttoncomponent/Button';
import { cardContent, ButtonData, tableContent, USERS_API } from './EmployeeContent';
import TableComponent from '../../Configurations/tables/TableComponent';
import { getApiUrl } from '../../Api/getAPI/GetAPI';
import axios from 'axios';
import AddEmployee from './AddEmployee/AddEmployee';
import { parseExcelFile, uploadEmployeeData, generateTemplate, exportToPDF, exportToExcel, exportToCSV } from '../../excelUtils';

const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [empcardData, setCardData] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showImportPopup, setShowImportPopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);

  const fetchemployeeData = async () => {
    try {
      const response = await axios.get("http://192.168.0.126:8000/employees/");
      // const response = await axios.get("http://localhost:3001/employees");
      setEmployeeData(response.data);

      const excelData = await parseExcelFile();
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
      const response = await axios.get("http://192.168.0.126:8000/api/total_ctc_and_employees");
      // const response = await axios.get("http://localhost:3001/cardData");
      setCardData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);
  console.log()

  const handleButtonClick = (label) => {
    if (label === 'Add Employee') {
      setShowAddEmployee(true);
    } else if (label === 'Import') {
      setShowImportPopup(true);
    } else if (label === 'Export') {
      setShowExportPopup(true);
    }
  };

  const handleExportButtonClick = (format) => {
    if (format === 'pdf') {
      exportToPDF(employeeData);
    } else if (format === 'excel') {
      exportToExcel(employeeData);
    } else if (format === 'csv') {
      exportToCSV(employeeData);
    }

    setShowExportPopup(false);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    try {
      const parsedData = await parseExcelFile(file);
      await uploadEmployeeData(parsedData);
      setEmployeeData([...employeeData, ...parsedData]);
    } catch (error) {
      console.error('Error processing file content:', error);
    }

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
            <TableComponent config={tableContent} data={employeeData} />
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
              onClick={generateTemplate}
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

      {showExportPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
              onClick={() => handleExportButtonClick('pdf')}
            >
              Download as PDF
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-4"
              onClick={() => handleExportButtonClick('excel')}
            >
              Download as Excel
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-4"
              onClick={() => handleExportButtonClick('csv')}
            >
              Download as CSV
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setShowExportPopup(false)}
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
