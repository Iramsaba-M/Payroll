import React from 'react'

const BodyContent = ({content: NewComponent}) => {

return (    
    <>
    <div className=' w-[1024px] flex'>
    <NewComponent />
    </div>
   </>

  )
  
}

export default BodyContent