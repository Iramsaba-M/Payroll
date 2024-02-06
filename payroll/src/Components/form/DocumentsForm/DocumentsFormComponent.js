import React, { useState } from "react";
import TextComponent from "./TextComponent";
import FileComponent from "./FileComponent";
import DemoStyles from "./DemoStyles"; // Import the styles
import axios from "axios";
import CustomComponent from "./CustomComponent";
import CustomConfig from "./CustomConfig";

import {  getApiUrl3 } from "../../../Api/getAPI/GetAPI";
import { DOCUMENTS_API } from "../../../Api/getAPI/EndPoints";

const DocumentsFormComponent = ({ config, handleNextClick,handleSubmit }) => {
  const [values, setValues] = useState({});
  const [customComponents, setCustomComponents] = useState([]); // Renamed the state variable

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const addCustomComponent = () => {
    setCustomComponents((prev) => [...prev, { customValue: "" }]); //syntax is creating a new array that includes all the elements from the previous state (prev) and adds a new object { customValue: '' } to the end.
  }; //adding a new object with customValue: '' to the existing array.

  const updateCustomValue = (index, value) => {
    setCustomComponents((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, customValue: value } : item
      )
    );
  };

  const handleFileChange = (name, selectedFile) => {
    setValues({ ...values, [name]: selectedFile });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
  //add non form data to form data
      Object.keys(values).forEach((key) => {
        if (key !== "file") {
          formData.append(key, values[key]);
        }
      });
  //if we have a file, add it to the form data
      if (values.file) {
        formData.append("file", values.file);
      }
  
      // Log values and formData to the console for debugging
      console.log("Form values:", values);
  
    // Assuming getApiUrl is a valid function
      const response = await axios.post(getApiUrl3(DOCUMENTS_API), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Form submitted successfully:", response.data);
  
      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex-col w-3/6 h-5/6">
        <div className="form-line flex mb-4 ml-20">
          {config.slice(0, 2).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(2, 4).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(4, 6).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(6, 8).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(8, 10).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="buttons flex justify-start mt-6 ml-[40vh]">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={addCustomComponent}
            className="bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center ml-20 mb-2 mr-2"
          >
            + Add Another Document
          </button>
        </div>

        <div className="ml-20">
          {customComponents.map((customComponent, index) => (
            <CustomComponent
              key={index}
              value={customComponent.customValue}
              config={CustomConfig}
              onCustomChange={(value) => updateCustomValue(index, value)}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default DocumentsFormComponent;
