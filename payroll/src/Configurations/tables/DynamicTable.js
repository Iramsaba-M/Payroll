import React from 'react';

import TableStyle from './TableStyle'
// import { tableContent } from './Tabledata';

function DynamicTable({ config, data }) {
  return (
    <table className=' border-2 hover:border-blue-500' >
      <thead className=''>
        <tr >
          {config.map((column) => (
            <th key={column.name} className={TableStyle[column.clmncss]}>
              {column.label}               
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {config.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]} style={{ textAlign: 'center' }}>
              {column.dataType === 'number' ? parseFloat(row[column.name]).toFixed() : row[column.name]}
            </td>
            
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
