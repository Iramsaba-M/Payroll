import React, { useState , useEffect} from 'react';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import axios from 'axios';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import { SALARY_DETAILS_API } from '../../../Api/getAPI/EndPoints';
import { getApiUrl } from '../../../Api/getAPI/GetAPI';
import NumberComponent from '../Formfields/number/numbercompoent';
import ButtonConfig from '../../../Configurations/Buttoncomponent/ButtonConfig';
import {ButtonDataNew} from '../../../Configurations/Buttoncomponent/ButtonData';
import {ButtonDataNew1}from '../../../Configurations/Buttoncomponent/ButtonData';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig';
// const API_BASE_URL = 'http://localhost:3001'; // Adjust the port as needed
// const POST_API_ENDPOINT = '/postSalaryDetails';
// const GET_API_ENDPOINT = '/getSalaryDetails';

const API_BASE_URL = 'http://192.168.0.108:8000';
const POST_API_ENDPOINT = '/calculate_ctc';
const GET_API_ENDPOINT = '/get_ctc/';


const SalaryDetailsComp = ({ config, handleSubmit, handleNextClick, employeeId }) => {
  const [values, setValues] = useState({});
  const [postSuccess, setPostSuccess] = useState(false);
  const [ctcDetails, setCtcDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (label, type) => {
    if (label === 'Save' && type === 'submit') {
      // onSubmit();
      setIsModalOpen(true);
    } else if (label === 'Next') {
      handleNextClick(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { annual_ctc, ctc_template } = values;
      const postResponse = await axios.post(`${API_BASE_URL}${POST_API_ENDPOINT}`, {
        annual_ctc,
        ctc_template,
        employee_id: employeeId,
      });
      console.log('Data sent:', postResponse.data);
      setPostSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received. Request details:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postSuccess) {
          const response = await axios.get(`${API_BASE_URL}${GET_API_ENDPOINT}${employeeId}`);
          console.log('GET Response Data:', response.data);
          setCtcDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [employeeId, postSuccess]);

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
    <label className={field && TextStyle[field.numbercss]?.label}>
      {field && field.label}
    </label>
          {field.type === "number" && (
            <NumberComponent
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              numberType={field.numberType}  // Use field.numberType or default to "float"
              numbercss={TextStyle[field.numbercss].input}
            />
          )}
        </div>
      ))}
    </div>
        <div className="form-line flex justify-end mt-6">
        <ButtonConfig Config={ButtonDataNew1} onClick={handleButtonClick} />
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
         <label className={field && TextStyle[field.numbercss]?.label}>
           {field && field.label}
         </label>
               {field.type === "number" && (
                 <NumberComponent
                   name={field.name}
                   placeholder={field.placeholder}
                   value={values.earning && values.earning[field.name] || ""}
                   onChange={(e) => handleChange("earning", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                   numbercss={TextStyle[field.numbercss].input}
                 />
               )}
             </div>
        ))}
      </div>

      {/* Section 4: HRA, Allowances, Other Special Allowances */}
<div className="form-line flex mb-4">
  {config.slice(5, 8).map((field, index) => (
    <div key={index}>
    <label className={field && TextStyle[field.numbercss]?.label}>
      {field && field.label}
    </label>
          {field.type === "number" && (
            <NumberComponent
              name={field.name}
              placeholder={field.placeholder}
              value={values.earning && values.earning[field.name] || ""}
              onChange={(e) => handleChange("earning", field.name, e.target.value)}
              numberType={field.numberType}  // Use field.numberType or default to "float"
              numbercss={TextStyle[field.numbercss].input}
            />
          )}
        </div>
  ))}
</div>


      {/* Section 5: Gross Salary */}
      <div className="form-line flex mb-4">
        {config.slice(8, 9).map((field, index) => (
         <div key={index}>
         <label className={field && TextStyle[field.numbercss]?.label}>
           {field && field.label}
         </label>
               {field.type === "number" && (
                 <NumberComponent
                   name={field.name}
                   placeholder={field.placeholder}
                   value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                   numbercss={TextStyle[field.numbercss].input}
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
          <label className={field && TextStyle[field.numbercss]?.label}>
            {field && field.label}
          </label>
                {field.type === "number" && (
                  <NumberComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values.deduction && values.deduction[field.name] || ""}
                   onChange={(e) => handleChange("deduction", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                    numbercss={TextStyle[field.numbercss].input}
                  />
                )}
              </div>
        ))}
      </div>

      {/* Section 8: Gratuity, Medical Insurance, Others */}
      <div className="form-line flex mb-4">
        {config.slice(12, 15).map((field, index) => (
          <div key={index}>
          <label className={field && TextStyle[field.numbercss]?.label}>
            {field && field.label}
          </label>
                {field.type === "number" && (
                  <NumberComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values.deduction && values.deduction[field.name] || ""}
                   onChange={(e) => handleChange("deduction", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                    numbercss={TextStyle[field.numbercss].input}
                  />
                )}
              </div>
        ))}
      </div>

      {/* Section 9: Net Salary */}
      <div className="form-line flex mb-4">
        {config.slice(15, 16).map((field, index) => (
       <div key={index}>
       <label className={field && TextStyle[field.numbercss]?.label}>
         {field && field.label}
       </label>
             {field.type === "number" && (
               <NumberComponent
                 name={field.name}
                 placeholder={field.placeholder}
                 value={values[field.name] || ""}
                 onChange={(e) => handleChange(field.name, e.target.value)}
                 numberType={field.numberType}  // Use field.numberType or default to "float"
                 numbercss={TextStyle[field.numbercss].input}
               />
             )}
           </div>
        ))}
      </div>

      {/* Submit button */}
      <div className="form-line flex justify-end mt-6">
        {/* <button
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
          
        </button> */}

<ButtonConfig Config={ButtonDataNew} onClick={handleButtonClick} />
      </div>
      {/* </div> */}
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} config={ModalConfig} />
          </form>
  );
};

export default SalaryDetailsComp;