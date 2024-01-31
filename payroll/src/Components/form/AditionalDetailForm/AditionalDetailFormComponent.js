import React, { useState } from 'react';
import axios from 'axios';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PasswordIcon from './PasswordIcon';
import { VscTools } from "react-icons/vsc";
import TagComponent from './TagComponent';
import TagConfig from './TagConfig';

const AditionalDetailFormComponent = ({ config, handleSubmit, handleNextClick }) => {
    const [values, setValues] = useState({});
    const [showPassword, setShowPassword] = useState(false);



    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    const getDropdownOptions = (fieldName) => {
        const fieldConfig = config.find((field) => field.name === fieldName);
        return fieldConfig ? fieldConfig.options : [];
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);

    };



    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            //   const response = await axios.post(getApiUrl(BASIC_DETAILS_API, values));
            const response = await axios.post('http://localhost:8000/aditionalDetails', values);
            //   const response = await axios.post('http://192.168.0.126:8000/employees/', values);

            console.log('Data sent:', response.data);

            // If the above API call is successful, trigger the handleSubmit function from props
            handleSubmit(values);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <form onSubmit={onSubmit} >
            <div className='border border-gray-300 mb-5 p-5'>
                <h1 className='text-gray-800 font-semibold mb-2'>Security</h1>
                <div className="form-line flex mb-4 ">
                    {config.slice(0, 1).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>

                            <label className={TextStyle[field.textcss].label}>{field.label}</label>
                            {field.type === 'password' && (
                                <PasswordIcon
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={values[field.name] || ''}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    icon={showPassword ? field.icon2 : field.icon}
                                    showPassword={showPassword}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex justify-col'>
                    <button type="button" className=' text-blue-600  rounded flex items-center  mb-2 mr-2'>Reset Password  </button>
                    <span className='ml-2' ><VscTools /></span>
                </div>
            </div>

            <div className='border border-gray-300  p-7'>
                <h1 className=' text-gray-800 font-semibold mb-2'>Employee Benefits</h1>
                <div className="form-line flex mb-4">
                    {config.slice(1, 2).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>

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
                    <TagComponent cardConfig={TagConfig} />
                </div>
            </div>


            <div className="form-line flex mb-4 p-2">
                {config.slice(3, 6).map((field, index) => (
                    <div key={index} className={`form-field ${field.fieldstyle}`}>

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

            </div>
            <div className='buttons flex justify-end mt-6' >
                <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button>
            </div>
        </form>
    );
};

export default AditionalDetailFormComponent;