

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
              {column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name]}
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