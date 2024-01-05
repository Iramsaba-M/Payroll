import React, { useState } from 'react';
import axios from 'axios';
import DateComponent from './date/DateComponent';
// import DateStyle from './date/DateStyle';
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

const FormComponent = ({ config }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
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
      <form >
        {config.map((field, index) => (
          <div key={index}>
            {field.type === "text" && (
              <TextComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]} // Access textStyle.textcss
              />
            )}
            {field.type === "date" && (
              <DateComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "email" && (
              <EmailComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "password" && (
              <PasswordComponent
                label={field.label}
                name={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "tel" && (
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'checkbox' && (
              <CheckboxComponent
                label={field.label}
                checked={config[field.label] || false}
                onChange={(e) => handleChange(field.label, e.target.checked)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'radio' && (
              <RadioComponent
                label={field.label}
                value={field.value}  // Replace 'value' with the correct property name from your config
                checked={config[field.label] === field.value}
                onChange={() => handleChange(field.label, field.value)}
                textcss={TextStyle[field.textcss]}
               />
            )}

            {field.type === 'options' && (
              <OptionsComponent
                label={field.label}
                value={config[field.label] || ''}
                options={field.options}  // Replace 'options' with the correct property name from your config
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}

            {field.type === 'time' && (
              <TimeComponent
                label={field.label}
                placeholder={field.placeholder}
                value={config[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'file' && (
              <FileComponent
                label={field.label}
                onChange={(e) => handleChange(field.label, e.target.files[0])}
                textcss={TextStyle[field.textcss]}

              />
            )}
            {field.type === 'textarea' && (
              <TextareaComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}

              />
            )}
          </div>
        ))}
          {/* <button type="submit">Submit</button> */}
    </form>
    );
  };
  
  export default FormComponent;
  
  