import React, { useState } from 'react';
import axios from 'axios';
import DateComponent from '../Formfields/date/DateComponent';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import EmailComponent from '../Formfields/email/EmailComponent';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import DoubleInputComponent from '../Formfields/inputs/DoubleInputComponent';
import PhoneComponent from '../Formfields/phone/PhoneComponent';
import TripleInputComponent from '../Formfields/inputs/TripleInputComponent'

const BasicDetailsFormComponent = ({ config, handleSubmit }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make your axios call here

      const response = await axios.post('http://localhost:3001/basicdetail', values);
      // const response = await axios.post('http://192.168.0.126:8000/employees/', values);

      const response = await axios.post('http://localhost:8000/basicdetail', values);
      // const response = await axios.post('http://192.168.0.103:8000/employees/', values);

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
      {config.slice(0, 1).map((field, index) => (
      <div key={index} className={`form-field ${field.fieldstyle}`}>
      <label className={TextStyle[field.textcss].label}>{field.label}</label>
        <TripleInputComponent
        values={values[field.label] || ["", "", ""]}
        placeholders={field.placeholders || ["Field 1", "Field 2", "Field 3"]}
        onChange={(inputIndex, value) => {
        const updatedValues = [...(values[field.label] || ["", "", ""])];
        updatedValues[inputIndex] = value;
        handleChange(field.label, updatedValues);
      }}
      textcss={TextStyle[field.textcss].input}
      />
      </div>
      ))}
</div>

      <div className="form-line flex mb-4">
        {config.slice(1, 3).map((field, index) => (
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
                value={values[field.label] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
            </div>
        ))}
      </div>

      <div className="form-line flex mb-4">
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

      <div className="form-line flex mb-4">
        {config.slice(5, 8).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
              <OptionsComponent
                value={values[field.label] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
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

      <div className="form-line flex ">
        {config.slice(8, 10).map((field, index) => (
          <div key={index}>

              <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
              <OptionsComponent
                value={values[field.label] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
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

      <div className="form-line flex mb-4">
        {config.slice(10, 11).map((field, index) => (
          <div key={index}>
          <label className={TextStyle[field.textcss].label}>{field.label}</label>
            {field.type === 'options' && (
              <OptionsComponent
                value={values[field.label] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
              {/* Add other field types as needed */}
            </div>
        ))}
      </div>

      <div className="form-line flex mb-4">
        {config.slice(11, 13).map((field, index) => (
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

      <div className="form-line flex mb-4">
        {config.slice(13, 16).map((field, index) => (
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
                value={values[field.label] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
            </div>
        ))}
      </div>
      
      <div className='buttons flex justify-end mt-6' >
      <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button>
      <button type="button" className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2'>Next</button>
      </div>
    </form>
  );
};
  export default BasicDetailsFormComponent;