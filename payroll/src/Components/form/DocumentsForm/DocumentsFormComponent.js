import React, { useState } from "react";
import TextComponent from "../Formfields/text/TextComponent";
import FileComponent from "../Formfields/file/FileComponent";
import DocumentStyles from "./DocumentStyles";
import axios from "axios";
import CustomComponent from "./CustomComponent";
import CustomConfig from "./CustomConfig";
import {
  ButtonDataNew,
  ButtonDataAdd,
} from "../../../Configurations/Buttoncomponent/ButtonData";
import { getApiUrl3 } from "../../../Api/getAPI/GetAPI";
import { DOCUMENTS_API } from "../../../Api/getAPI/EndPoints";
import ButtonConfig from "../../../Configurations/Buttoncomponent/ButtonConfig";
import ModalComponent from "../Formfields/modal/ModalComponent";
import { ModalConfig } from "../Formfields/modal/ModalConfig";
const DocumentsFormComponent = ({
  config,
  handleNextClick,
  handleSubmit,
  employeeId,
}) => {
  const [values, setValues] = useState({});
  const [customComponents, setCustomComponents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = (label, type) => {
    if (label === "Save" && type === "submit") {
      setIsModalOpen(true);
    } else if (label === "Next") {
      handleNextClick(true);
    }
  };

  const addCustomComponent = () => {
    setCustomComponents((prev) => [...prev, { customValue: "" }]);
  };

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
      const data = {
        ...values,
        employee_id: employeeId,
      };
      console.log(data);
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "file") {
          formData.append(key, data[key]);
        }
      });

      if (data.file) {
        formData.append("file", data.file);
      }

      console.log("Form values:", data);

      const response = await axios.post(getApiUrl3(DOCUMENTS_API), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form submitted successfully:", response.data);

      handleSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex-col w-[140vh] h-5/6 mt-8 ">
        <div className="form-line flex mb-4 ml-20">
          {config.slice(0, 2).map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              <div className="mb-1">
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={DocumentStyles[field.textcss].input}
                    icon={field.icon}
                  />
                )}
              </div>
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DocumentStyles[field.textcss].input}
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
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DocumentStyles[field.textcss].input}
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
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DocumentStyles[field.textcss].input}
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
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DocumentStyles[field.textcss].input}
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
              <label className={DocumentStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>
        <div className="ml-[50vh]">
          {" "}
          <ButtonConfig Config={ButtonDataNew} onClick={handleButtonClick} />
        </div>

        <div className="ml-20 mb-2 mr-2">
          {" "}
          <ButtonConfig Config={ButtonDataAdd} onClick={addCustomComponent} />
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
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
};

export default DocumentsFormComponent;
