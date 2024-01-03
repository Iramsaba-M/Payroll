import React from 'react';

import TableStyle from './TableStyle'
// import { tableContent } from './Tabledata';

function DynamicTable({ config, data }) {
  return (
    <table className=' mx-4' >
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
          // <tr key={rowIndex} className={TableStyle.style3}>
          <tr key={rowIndex}  >
            {config.map((column) => (
              <td key={column.name} className={TableStyle[column.cssClass]}>
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
