import React, { useState } from 'react';
import axios from 'axios';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';



const BankDetailFormComponent = ({ config, handleSubmit }) => {
    const [values, setValues] = useState({});

    const handleChange = (name, value) => {
      setValues({ ...values, [name]: value });
    };

    // const addbank=() =>{
    //   // <BankDetailFormComponent config={config}  />
    //   BankDetailFormComponent()
    //   // setValues({});
    //   console.log('yes')
    // }
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make your axios call here
        const response = await axios.post('http://localhost:8000/bankdetails/', values);
        // const response = await axios.post('http://127.0.0.1:8000/api/banks', values);
        console.log('Data sent:', response.data);
        
        // If the above API call is successful, trigger the handleSubmit function from props
        handleSubmit(values);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    return (
        <form onSubmit={onSubmit}>
         
   
         <div className="form-line flex mb-4">
           {config.slice(0, 2).map((field, index) => (
             <div key={index} className={`form-field ${field.fieldstyle}`}>
   
                 <label className={TextStyle[field.textcss].label}>{field.label}</label>
                 {field.type === 'options' && (
                   <OptionsComponent
                     name={field.label}
                     placeholder={field.placeholder}
                     options={field.options}
                     value={values[field.label] || ''}
                     onChange={(e) => handleChange(field.label, e.target.value)}
                     textcss={TextStyle[field.textcss].input}
                   />
                 )}
                 {field.type === 'text' && (
                 <TextComponent
                   value={values[field.label] || ''}  
                //    options={field.options}
                   onChange={(e) => handleChange(field.label, e.target.value)}
                   textcss={TextStyle[field.textcss].input}
                   placeholder={field.placeholder}
                 />
               )}
               </div>
           ))}
         </div>

         
   
         <div className="form-line flex mb-4">
           {config.slice(2, 4).map((field, index) => (
             <div key={index} className={`form-field ${field.fieldstyle}`}>
   
                 <label className={TextStyle[field.textcss].label}>{field.label}</label>
                 {field.type === 'number' && (
                   <TextComponent
                     name={field.label}
                     placeholder={field.placeholder}
                     value={values[field.label] || ''}
                     onChange={(e) => handleChange(field.label, e.target.value)}
                     textcss={TextStyle[field.textcss].input}
                   />
                 )}
                {field.type === 'text' && (
                   <TextComponent
                     name={field.label}
                     placeholder={field.placeholder}
                     value={values[field.label] || ''}
                     onChange={(e) => handleChange(field.label, e.target.value)}
                     textcss={TextStyle[field.textcss].input}
                   />
                 )}
   
               </div>
           ))}
         </div>
   
         
         
         <div className='buttons flex  mt-6' >
         <button type="button" className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-5'>Set default for payroll</button>
         <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button>
         <button type="button" className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2'>Next</button>
         {/* <button type="button" onClick={() =>addbank()} 
           className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center hover:text-white hover:bg-blue-600 focus:outline-none mb-2 mr-2'>
            ADD Another Bank 
           <span className='font-bold'> +</span> 
        </button> */}
         </div>
       </form>
     );
};

export default BankDetailFormComponent;