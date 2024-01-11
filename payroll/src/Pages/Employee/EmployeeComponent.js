import React, { useState, useEffect } from 'react';
import Card from '../../Configurations/cardcomponent/Card';
import Button from '../../Configurations/Buttoncomponent/Button';
import { cardContent, ButtonData, tableContent, USERS_API } from './EmployeeContent';
import TableComponent from '../../Configurations/tables/TableComponent';
import { getApiUrl } from '../../Api/getAPI/GetAPI';
import axios from 'axios';
import AddEmployee from './AddEmployee/AddEmployee'; // Import the AddEmployee component

const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [empcardData, setCardData] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false); // State to track rendering of AddEmployee

  const fetchemployeeData = async () => {
    // Fetch Employee Data
    try {
      const response = await axios.get("http://192.168.0.128:5000/api/employees");
      // const response = await axios.get("http://localhost:3001/employees");
      setEmployeeData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    fetchemployeeData();
  }, []);
  console.log(employeeData)

  const fetchCardData = async () => {
    // Fetch Card Data
    try {
      const response = await axios.get("http://192.168.0.128:8000/api/total_ctc_and_employees");
      // const response = await axios.get("http://localhost:3001/cardData");
      setCardData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);
console.log(empcardData)

  const handleButtonClick = (label) => {
    // Update state based on button click
    if (label === 'Add Employee') {
      setShowAddEmployee(true); // Show AddEmployee component when 'Add Employee' button is clicked
    }
    // Handle other button actions if needed
  };

  return (
    <div className="flex flex-col">
      {!showAddEmployee ? ( // Render EmployeeComponent if showAddEmployee is false
        <>
          <div className='card p-2'>
            <Card Configs={cardContent} data={empcardData} />
          </div>

          <div className="flex items-center justify-between p-1 ml-4">
            <div className='text-left ml-4 font-lg font-bold'>
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
        <AddEmployee /> // Render AddEmployee component if showAddEmployee is true
      )}
    </div>
  );
};

export default EmployeeComponent;
