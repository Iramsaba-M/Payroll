import React, { useState } from 'react';
import axios from 'axios';
import DateComponent from './date/DateComponent';
import TextComponent from './text/TextComponent';
import TextStyle from './text/TextStyle';
import CheckboxComponent from './checkbox/CheckboxComponent';
import EmailComponent from './email/EmailComponent';
import FileComponent from './file/FileComponent';
import OptionsComponent from './options/OptionsComponent';
import PasswordComponent from './password/PasswordComponent';
import RadioComponent from './radio_button/RadioComponent';
import TextareaComponent from './textarea/TextareaComponent';
import TimeComponent from './time/TimeComponent';
import DoubleInputComponent from './text/DoubleInputComponent';
import PhoneComponent from './phone/PhoneComponent';

const FormComponent = ({ config, onSubmit }) => {
  const [values, setValues] = React.useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed as a prop
    onSubmit(values);
  };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make your axios call here
  //     const response = await axios.post('http://localhost:3001/roles', values);
  //     console.log('Data sent:', response.data);
      
  //     // If the above API call is successful, trigger the handleSubmit function from props
  //     handleSubmit(values);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

    return (
     <form onSubmit={handleFormSubmit}>
      <div className="form-line flex">
        {config.slice(0, 3).map((field, index) => (
          <div key={index}>  
                   
              <label className={TextStyle[field.textcss].label}>{field.label}</label>
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

      <div className="form-line flex">
        {config.slice(3, 5).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'date' && (
                <DateComponent
                  name={field.label}
                  placeholder={field.placeholder}
                  value={values[field.label] || ''}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
              {field.type === 'options' && (
                <OptionsComponent
                  value={config[field.label] || ''}
                  options={field.options}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
            </div>
        ))}
      </div>

      <div className="form-line flex">
        {config.slice(5, 7).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'date' && (
                <DateComponent
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

      <div className="form-line flex">
        {config.slice(7, 10).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
                <OptionsComponent
                  value={config[field.label] || ''}
                  options={field.options}
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

      <div className="form-line flex">
        {config.slice(10, 12).map((field, index) => (
          <div key={index}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'text' && (
                <TextComponent
                  name={field.label}
                  placeholder={field.placeholder}
                  value={values[field.label] || ''}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
              {field.type === "doubleInput" && (
                <DoubleInputComponent
                  values={values[field.label] || ["", ""]}
                  placeholders={field.placeholders || ["Field 1", "Field 2"]}
                  onChange={(inputIndex, value) => {
                  const updatedValues = [...(values[field.label] || ["", ""])];
                  updatedValues[inputIndex] = value;
                  handleChange(field.label, updatedValues);
                }}
                textcss={TextStyle[field.textcss].input}
              />
                )}
              {/* Add other field types as needed */}
            </div>
        ))}
      </div>

      <div className="form-line flex">
        {config.slice(12, 13).map((field, index) => (
          <div key={index}>
          <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
                <OptionsComponent
                  value={config[field.label] || ''}
                  options={field.options}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
              {/* Add other field types as needed */}
            </div>
        ))}
      </div>

      <div className="form-line flex">
        {config.slice(13, 15).map((field, index) => (
          <div key={index}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === "email" && (
              <EmailComponent
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
            </div>
        ))}
      </div>

      <div className="form-line flex">
        {config.slice(15, 18).map((field, index) => (
          <div key={index}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === "tel" && (
            <PhoneComponent
              name={field.label}
              placeholder={field.placeholder}
              value={values[field.label] || ""}
              onChange={(e) => handleChange(field.label, e.target.value)}
              textcss={TextStyle[field.textcss].input}
            />
          )}
              {field.type === 'options' && (
                <OptionsComponent
                  value={config[field.label] || ''}
                  options={field.options}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
            </div>
        ))}
      </div>
      
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};
  export default FormComponent;
  
  
// import React, { useState } from 'react';
// import DateComponent from './date/DateComponent';
// import TextComponent from './text/TextComponent';
// import TextStyle from './text/TextStyle';
// import CheckboxComponent from './checkbox/CheckboxComponent';
// import EmailComponent from './email/EmailComponent';
// import FileComponent from './file/FileComponent';
// import OptionsComponent from './options/OptionsComponent';
// import PasswordComponent from './password/PasswordComponent';
// import RadioComponent from './radio_button/RadioComponent';
// import TextareaComponent from './textarea/TextareaComponent';
// import PhoneComponent from './phone/PhoneComponent';
// import TimeComponent from './time/TimeComponent';
// import TripleInputComponent from './text/TripleInputComponent';
// import DoubleInputComponent from './text/DoubleInputComponent';

// const FormComponent = ({ config }) => {
//   const [values, setValues] = useState({});

//   const handleChange = (name, value) => {
//     setValues({ ...values, [name]: value });
//   };
  

//   return (
//     <div className='w-full h-400 bg-white-200 p-4'>
//       <form className='fullform'>
//       {config.map((field, index) => (
//         <div key={index}>
//           {field.type === "text" && (
//             <TextComponent
//               label={field.label}
//               name={field.label}
//               placeholder={field.placeholder}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss] || "defaultTextStyle"}
//             />
//           )}

//           {field.type === "date" && (
//             <DateComponent
//               label={field.label}
//               name={field.label}
//               placeholder={field.placeholder}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "email" && (
//             <EmailComponent
//               label={field.label}
//               name={field.label}
//               placeholder={field.placeholder}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "password" && (
//             <PasswordComponent
//               label={field.label}
//               name={field.label}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "tel" && (
//             <PhoneComponent
//               label={field.label}
//               name={field.label}
//               placeholder={field.placeholder}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss] || "defaultTextStyle"}
//             />
//           )}
//           {field.type === "checkbox" && (
//             <CheckboxComponent
//               label={field.label}
//               checked={config[field.label] || false}
//               onChange={(e) => handleChange(field.label, e.target.checked)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "radio" && (
//             <RadioComponent
//               label={field.label}
//               value={field.value} // Replace 'value' with the correct property name from your config
//               checked={config[field.label] === field.value}
//               onChange={() => handleChange(field.label, field.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}

//           {field.type === "options" && (
//             <OptionsComponent
//               label={field.label}
//               value={values[field.label] || ""}
//               options={field.options}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//               placeholder={field.placeholder} // Pass the placeholder to the OptionsComponent
//             />
//           )}

//           {field.type === "time" && (
//             <TimeComponent
//               label={field.label}
//               placeholder={field.placeholder}
//               value={config[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "file" && (
//             <FileComponent
//               label={field.label}
//               onChange={(e) => handleChange(field.label, e.target.files[0])}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}

//           {field.type === "textarea" && (
//             <TextareaComponent
//               label={field.label}
//               name={field.label}
//               placeholder={field.placeholder}
//               value={values[field.label] || ""}
//               onChange={(e) => handleChange(field.label, e.target.value)}
//               textcss={TextStyle[field.textcss]}
//             />
//           )}
//           {field.type === "tripleInput" && (
//             <TripleInputComponent
//               label={field.label}
//               values={values[field.label] || ["", "", ""]}
//               placeholders={
//                 field.placeholders || ["Field 1", "Field 2", "Field 3"]
//               }
//               onChange={(inputIndex, value) => {
//                 const updatedValues = [
//                   ...(values[field.label] || ["", "", ""]),
//                 ];
//                 updatedValues[inputIndex] = value;
//                 handleChange(field.label, updatedValues);
//               }}
//               textcss={TextStyle[field.textcss] || "defaultTextStyle"}
//             />
//           )}
//           {field.type === "doubleInput" && (
//   <DoubleInputComponent
//     label={field.label}
//     values={values[field.label] || ["", ""]}
//     placeholders={field.placeholders || ["Field 1", "Field 2"]}
//     onChange={(inputIndex, value) => {
//       const updatedValues = [...(values[field.label] || ["", ""])];
//       updatedValues[inputIndex] = value;
//       handleChange(field.label, updatedValues);
//     }}
//     textcss={TextStyle[field.textcss] || "defaultTextStyle"}
//   />
// )}
//         </div>
//       ))}
//     </form>
//     </div>
//   );
//   };
  
//   export default FormComponent;