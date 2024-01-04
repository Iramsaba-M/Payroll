import React from 'react'





const BodyContent = ({content: NewComponent}) => {
console.log("Bodyyyyy")
console.log(NewComponent)
   


  return (
    
    
        
    <>
    <div className=' w-[1024px]  ml-20 flex justify-center'>
    <NewComponent />
    
    </div>
   
    </>

    

  )
  
}

export default BodyContent