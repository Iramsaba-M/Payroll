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

  const fetchemployeeData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
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

