import React, { useState } from "react";
import axios from "axios";
import DateComponent from "../Formfields/date/DateComponent";
import TextComponent from "../Formfields/text/TextComponent";
import TextStyle from "../Formfields/text/TextStyle";
import EmailComponent from "../Formfields/email/EmailComponent";
import OptionsComponent from "../Formfields/options/OptionsComponent";
import { ButtonDataNew } from "../../../Configurations/Button/ButtonData";
import PhoneComponent from "../Formfields/phone/PhoneComponent";
import ButtonConfig from "../../../Configurations/Button/ButtonConfig";
import { BASIC_DETAILS_API } from "../../../Api/getAPI/EndPoints";
import { getApiUrl } from "../../../Api/getAPI/GetAPI";
import CardComponent from "./CardComponent";
import CardConfig from "./CardConfig";
import ModalComponent from "../Formfields/modal/ModalComponent";
import { ModalConfig } from "../Formfields/modal/ModalConfig";
const BasicDetailsFormComponent = ({
  config,
  handleSubmit,
  handleNextClick,
  handleEmpId,
}) => {
  const [values, setValues] = useState({});
  const [originalDateValues, setOriginalDateValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this state variable
  const handleChange = (name, value) => {
    if (config.some((field) => field.name === name && field.type === "date")) {
      const formattedDate = value.split("-").reverse().join("-");
      setOriginalDateValues({ ...originalDateValues, [name]: value });
      setValues({ ...values, [name]: formattedDate });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  const handleButtonClick = (label, type) => {
    if (label === "Save" && type === "submit") {
      setIsModalOpen(true);
    } else if (label === "Next") {
      handleNextClick(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Values:", values);
      const textData = { ...values }; // Copy values object
      delete textData.photo_content; // Remove photo_content from the copy
      const response = await axios.post(
        getApiUrl(BASIC_DETAILS_API),
        textData,
        {
          headers: {
            "Content-Type": "application/json", // Set content type for JSON data
          },
        }
      );
      console.log("Data sent:", response.data);
      const employeeId = values.employee_id;
      handleEmpId(employeeId);
      console.log("Employee ID:", employeeId);

      handleSubmit(values);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {

  //     console.log("Form Values:", values);
  //     // Create a FormData object to handle file uploads
  //     const formData = new FormData();

  //     // Append text data to FormData
  //     Object.entries(values).forEach(([key, value]) => {
  //       formData.append(key, value);
  //     });

  //     // Append image file to FormData if it exists
  //     if (values.photo_content) {
  //       formData.append("photo_content", values.photo_content);
  //     }

  //     // Make the axios call using FormData
  //     const response = await axios.post(
  //       getApiUrl(BASIC_DETAILS_API),
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data", // Set content type for FormData
  //         },
  //       }
  //     );

  //     console.log("Data sent:", response.data);

  //     const employeeId = values.employee_id;

  //     handleEmpId(employeeId)

  //     console.log('Employee ID:', employeeId);
  //     // If the above API call is successful, trigger the handleSubmit function from props
  //     handleSubmit(values);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <form onSubmit={onSubmit}>
      <div className="">
        <h1 className="block text-gray-600 text-xs font-bold my-1">
          Employee Name*
        </h1>
        <div className="form-line flex mb-4  ">
          <div className="form-field flex  ">
            {config.slice(0, 1).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
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
            {config.slice(1, 2).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
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
            {config.slice(2, 3).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
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
        </div>
        <div className="flex">
          <div className="form-line flex mb-4">
            {config.slice(3, 5).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>

                {field.type === "date" && (
                  <DateComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={originalDateValues[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                {field.type === "options" && (
                  <OptionsComponent
                    name={field.name}
                    value={values[field.name] || ""}
                    options={field.options}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="form-line flex mb-2">
          <div className="form-line flex mb-4">
            {config.slice(5, 7).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "date" && (
                  <DateComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={originalDateValues[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
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
            <div className=" translate-y-[-390%] ml-8 p-3">
              <CardComponent
                CardConfig={CardConfig}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-line flex mb-4 ">
          {config.slice(7, 10).map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                />
              )}
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
        <div className="form-line  mb-4">
          {config.slice(10, 11).map((field, index) => (
            <div key={index}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
          <div className="translate-x-[45vh] -translate-y-[60%]  p-3 mr-2 w-14 ">
            {config.slice(11, 12).map((field, index) => (
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
            <div className=" translate-y-[5vh] ">
              {config.slice(12, 13).map((field, index) => (
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
          </div>
        </div>
        <div className=" flex mb-4 -translate-y-[19vh] w-6">
          {config.slice(13, 14).map((field, index) => (
            <div key={index}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>
        <div className="-translate-y-[90%]">
          <div className="form-line flex mb-4">
            {config.slice(14, 16).map((field, index) => (
              <div key={index}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "email" && (
                  <EmailComponent
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
          <div className="form-line flex mb-4 translate-y-[2vh]">
            {config.slice(16, 19).map((field, index) => (
              <div key={index}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "tel" && (
                  <PhoneComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                {field.type === "options" && (
                  <OptionsComponent
                    name={field.name}
                    value={values[field.name] || ""}
                    options={field.options}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" ml-[110vh] -translate-y-[15vh]">
        {" "}
        <ButtonConfig Config={ButtonDataNew} onClick={handleButtonClick} />
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
};
export default BasicDetailsFormComponent;
