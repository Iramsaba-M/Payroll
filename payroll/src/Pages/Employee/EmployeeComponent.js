import React, { useEffect, useState } from 'react'
import Card from '../../Configurations/cardcomponent/Card'
import Button from '../../Configurations/Buttoncomponent/Button'
import {CardData, ButtonData, tableContent, USERS_API} from './EmployeeContent'
import TableComponent from '../../Configurations/tables/TableComponent'
import {getApiUrl} from '../../Api/getAPI/GetAPI'
import axios from 'axios'

const EmployeeComponent = () => {

    const [employeeData, setemployeeData] = useState([])
    const [cardData, setcardData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  const fetchemployeeData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employeeData");
      console.log('API Response:', response.data);

      setemployeeData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };
  
  useEffect(() => {
    
    fetchemployeeData();
   
  }, []);


  const fetchcardData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cardData");
      console.log('API Response:', response.data);

      setcardData(response.data);
    } catch (error) {
      console.error(`Error fetching ${USERS_API} data:`, error);
    }
  };
  
  useEffect(() => {
    
    fetchcardData();
   
  }, []);

  // const data = [
  //   { EMPLOYEE_NAME: 'John Doe', DESIGNATION: 'CEO',CTC:'$10',JOINING_DATE:'10/7/2023' },
  //   {  EMPLOYEE_NAME: 'Jane Smith', DESIGNATION: 'CTO',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
  //   {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'CFO',CTC:'$10',JOINING_DATE:'10/7/2023'  },
  //   {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'Marketing',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
  //   {  EMPLOYEE_NAME: 'Bob Johnson hgghh', DESIGNATION: 'Human resource',CTC:'$10',JOINING_DATE:'10/7/2023'  },
  // ];
    
  return (
    <div>
        <div className='card p-2'>
        <Card Configs={CardData} data={cardData} />    
        </div>

        <div className="flex items-center justify-between p-1 ml-4">
          <div className='text-left ml-4 font-lg font-bold'>
            Detailed report
          </div>
          <div className='text-right p-1 mr-4'>
            <Button Configs={ButtonData} />
          </div>
        </div>

        <div className='table p-4 ml-4'>
            <TableComponent config= {tableContent} data={employeeData} /> 
        </div>
    </div>
  )
}

export default EmployeeComponent

