import React, { useEffect, useState } from 'react'
import Card from '../../Configurations/cardcomponent/Card'
import Button from '../../Configurations/Buttoncomponent/Button'
import {CardData, ButtonData, tableContent, USERS_API, data} from './EmployeeContent'
import TableComponent from '../../Configurations/tables/TableComponent'
import {getApiUrl} from '../../Api/getAPI/GetAPI'
import axios from 'axios'

const EmployeeComponent = () => {

  //   const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(getApiUrl(USERS_API));
  //     console.log('API Response:', response.data);

  //     setData(response.data);
  //   } catch (error) {
  //     console.error(`Error fetching ${USERS_API} data:`, error);
  //   }
  // };

  // useEffect(() => {
    
  //     fetchData();
   
  // }, []);

  const data = [
    { EMPLOYEE_NAME: 'John Doe', DESIGNATION: 'CEO',CTC:'$10',JOINING_DATE:'10/7/2023' },
    {  EMPLOYEE_NAME: 'Jane Smith', DESIGNATION: 'CTO',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
    {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'CFO',CTC:'$10',JOINING_DATE:'10/7/2023'  },
    {  EMPLOYEE_NAME: 'Bob Johnson', DESIGNATION: 'Marketing',CTC:'$10' ,JOINING_DATE:'10/7/2023' },
    {  EMPLOYEE_NAME: 'Bob Johnson hgghh', DESIGNATION: 'Human resource',CTC:'$10',JOINING_DATE:'10/7/2023'  },
  ];
    
  return (
    <div>
        <div className='card p-2'>
        <Card Configs={CardData} />    
        </div>

        <div className="flex items-center justify-between">
        <div className='text-left ml-4 font-lg font-bold'>
            Detailed report
        </div>
        <div className='text-right'>
        <Button Configs={ButtonData} />
        </div>
        </div>

        <div className='table p-2'>
            <TableComponent config= {tableContent} data={data} /> 
        </div>
    </div>
  )
}

export default EmployeeComponent

