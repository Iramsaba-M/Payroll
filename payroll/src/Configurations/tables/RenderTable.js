import React from 'react'
import TableComponent from './TableComponent'
import { tableContent } from './Tabledata'



const Render = () => {
  return (
    <div>

<TableComponent tableConfig={tableContent} />
    </div>
  )
}

export default Render