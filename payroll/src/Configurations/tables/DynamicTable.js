// // /components/DynamicTable.js
// import React, { useState } from 'react';
// import { MdOutlineEdit } from 'react-icons/md';
// import TableStyle from './TableStyle';

// function DynamicTable({ config, data }) {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   const handleCheckboxChange = (row) => {
//     // Implement your checkbox change logic here
//     if (selectedRows.includes(row)) {
//       setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
//     } else {
//       setSelectedRows([...selectedRows, row]);
//     }
//   };

  // const handleSelectAll = () => {
  //   // Implement logic to select/deselect all rows
  //   if (selectAll) {
  //     setSelectedRows([]);
  //   } else {
  //     setSelectedRows([...data]);
  //   }
  //   setSelectAll(!selectAll);
  // };

//   const handleEdit = (row) => {
//     // Implement your edit logic here
//     console.log('Edit clicked for row:', row);
//   };

//   return (
//     <table className='border-2 hover:border-blue-500'>
//       <thead>
//         <tr className='bg-gray-100'>
//           <th>
//             <input
//               type="checkbox"
//               onChange={handleSelectAll}
//               checked={selectAll}
//             />
//           </th>
//           {config.map((column) => (
//             <th key={column.name} className={TableStyle[column.clmncss]}>
//               {column.label}
//             </th>
//           ))}
//           <th></th> {/* Edit column */}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             <td>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(row)}
//                 checked={selectedRows.includes(row)}
//               />
//             </td>
//             {config.map((column) => (
//               <td key={column.name} className={TableStyle[column.cssClass]} style={{ textAlign: 'center' }}>
//                 {column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name]}
//               </td>
//             ))}
//             <td>
//               <MdOutlineEdit onClick={() => handleEdit(row)} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default DynamicTable;



// /components/DynamicTable.js
 
import TableStyle from './TableStyle'

import React, { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';

function DynamicTable({ config, data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (row) => {
    // Implement your checkbox change logic here
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleEdit = (row) => {
    // Implement your edit logic here
    console.log('Edit clicked for row:', row);
  };

  const renderCellContent = (row, column) => {
    if (column.name === 'employee_name') {
      const { First_name, Middle_Name, Last_Name } = row.employee_name;
      return `${First_name} ${Middle_Name} ${Last_Name}`;
    }
    return column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name];
  };


  return (
    
    <table className='border-2 hover:border-blue-500'>
      <thead>
        <tr>
          <th></th> {/* Checkbox column */}
          {config.map((column) => (
            <th key={column.name} className={TableStyle[column.clmncss]}>
              {column.label}               
              
            </th>
          ))}
          <th></th> {/* Edit column */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(row)}
                checked={selectedRows.includes(row)}
              />
            </td>
            {config.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]} style={{ textAlign: 'center' }}>
              {renderCellContent(row, column)}
            </td>

                
            ))}
            <td>
              <MdOutlineEdit onClick={() => handleEdit(row)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DynamicTable;
