import React, { useState } from 'react';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import axios from 'axios';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import { SALARY_DETAILS_API } from '../../../Api/getAPI/EndPoints';
import { getApiUrl } from '../../../Api/getAPI/GetAPI'

const SalaryDetailsComp = ({ config, handleSubmit ,handleNextClick}) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make your axios call here
     
      const response = await axios.post(getApiUrl(SALARY_DETAILS_API), values);
      console.log('Data sent:', response.data);
      
      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(values);
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return (
     <form onSubmit={onSubmit}>
      {/* Section 1: CTC Template and Annual CTC (SIDE BY SIDE) */}
      {/* <div className='bg-red-200 w-[123vh]'> */}
      <div className="form-line flex mb-4">
        {config.slice(0, 1).map((field, index) => (
          <div key={index}>
            <label className={TextStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
              <OptionsComponent
              name={field.name}
                value={values[field.name] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <div className="form-line flex mb-4">
          {config.slice(1, 2).map((field, index) => (
            <div key={index}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.label] || ""}
                  onChange={(value) => handleChange(field.name, value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
            </div>
          ))}
        </div>
        <div className="form-line flex justify-end mt-6">
        <button type="submit" className="bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5">Generate CTC</button>
        <button type="button" className="bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2">Revise CTC</button>
      </div>
      </div>

      {/* Section 2: Earnings (at center) */}
      <div className="form-line flex justify-center mb-4">
        <h2>Earnings</h2>
      </div>

      {/* Section 3: Monthly CTC, Basic, DA */}
      <div className="form-line flex mb-4">
        {config.slice(2, 5).map((field, index) => (
          <div key={index}>
            <label className={TextStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
          </div>
        ))}
      </div>

      {/* Section 4: HRA, Allowances, Other Special Allowances */}
<div className="form-line flex mb-4">
  {config.slice(5, 8).map((field, index) => (
    <div key={index}>
      <label className={TextStyle[field.textcss].label}>
        {field.label}
      </label>
      {field.type === "text" && (
        <TextComponent
          name={field.name}
          placeholder={field.placeholder}
          value={values[field.name] || ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          textcss={TextStyle[field.textcss].input}
        />
      )}
    </div>
  ))}
</div>


      {/* Section 5: Gross Salary */}
      <div className="form-line flex mb-4">
        {config.slice(8, 9).map((field, index) => (
          <div key={index}>
            <label className={TextStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
          </div>
        ))}
      </div>

      {/* Section 6: Deductions (at center) */}
      <div className="form-line flex justify-center mb-4">
        <h2>Deductions</h2>
      </div>

      {/* Section 7: EPF, ESIC, PT */}
      <div className="form-line flex mb-4">
        {config.slice(9, 12).map((field, index) => (
          <div key={index}>
            <label className={TextStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
          </div>
        ))}
      </div>

      {/* Section 8: Gratuity, Medical Insurance, Others */}
      <div className="form-line flex mb-4">
        {config.slice(12, 15).map((field, index) => (
          <div key={index}>
            <label className={TextStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
          </div>
        ))}
      </div>

      {/* Section 9: Net Salary */}
      <div className="form-line flex mb-4">
        {config.slice(15, 16).map((field, index) => (
          <div className="form-line flex mb-4">
            <label className={TextStyle[field.textcss].label}>
              {field.label}
            </label>
            {field.type === "text" && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
          </div>
        ))}
      </div>

      {/* Submit button */}
      <div className="form-line flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2"
        >
          Next
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default SalaryDetailsComp;
