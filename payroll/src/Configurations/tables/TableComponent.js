import React from 'react';
import DynamicTable from './DynamicTable';
// import DynamicTable1 from './DynamicTable1';

// const data = [
//   { name: 'John Doe', email: 'aa@gmail.com',  },
//   { name: 'Jane Smith', email: 'aa@gmail.com' },
//   {  name: 'Bob Johnson',  email: 'aa@gmail.com'},
//   { name: 'Bob Johnson',  email: 'aa@gmail.com'},
//   {  name: 'Bob Johnson hgghh', email: 'aa@gmail.com' },
// ];




function TableComponent({config, data}) {
  return (
    <div >
      
      <DynamicTable config= {config} data={data} />
    </div>
  );
}

export default TableComponent; 