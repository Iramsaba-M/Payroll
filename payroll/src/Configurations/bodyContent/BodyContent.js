import React from 'react'

const BodyContent = ({content: NewComponent}) => {

return (    
    <>
    <div className='pt-16 flex'>
    <NewComponent />
    </div>
   </>

  )
  
}

export default BodyContent