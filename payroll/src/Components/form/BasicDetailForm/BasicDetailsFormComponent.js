// import React, { useState } from "react";
// import axios from "axios";
// import DateComponent from "../Formfields/date/DateComponent";
// import TextComponent from "../Formfields/text/TextComponent";
// import TextStyle from "../Formfields/text/TextStyle";
// import EmailComponent from "../Formfields/email/EmailComponent";
// import OptionsComponent from "../Formfields/options/OptionsComponent";
// import DoubleInputComponent from "../Formfields/inputs/DoubleInputComponent";
// import PhoneComponent from "../Formfields/phone/PhoneComponent";
// import TripleInputComponent from "../Formfields/inputs/TripleInputComponent";
// import { BASIC_DETAILS_API } from "../../../Api/getAPI/EndPoints";
// import { getApiUrl } from "../../../Api/getAPI/GetAPI";
// import CardComponent from "./CardComponent";
// import CardConfig from "./CardConfig";

// const BasicDetailsFormComponent = ({
//   config,
//   handleSubmit,
//   handleNextClick,
// }) => {
//   const [values, setValues] = useState({});

//   // const handleChange = (name, value) => {
//   //   setValues({ ...values, [name]: value });
//   // };

//   const handleChange = (name, value) => {
//     // If the input is an image file, set it in a separate field in the values object
//     if (name === 'photo_content') {
//       setValues({ ...values, [name]: value });
//     } else {
//       setValues({ ...values, [name]: value });
//     }
//   };
//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     // Make your axios call here
//   //     const response = await axios.post(getApiUrl(BASIC_DETAILS_API), values);
//   //     // const response = await axios.post('http://localhost:3001/basicdetail', values);
//   //     // const response = await axios.post('http://192.168.0.126:8000/employees/', values);

//   //     console.log("Data sent:", response.data);

//   //     // If the above API call is successful, trigger the handleSubmit function from props
//   //     handleSubmit(values);
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //   }
//   // };
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Form Values:', values);
//       // Create a FormData object to handle file uploads
//       const formData = new FormData();

//       // Append text data to FormData
//       Object.entries(values).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       // Append image file to FormData if it exists
//       if (values.photo_content) {
//         formData.append('photo_content', values.photo_content);
//       }

//       // Make the axios call using FormData
//       const response = await axios.post(getApiUrl(BASIC_DETAILS_API), formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Set content type for FormData
//         },
//       });

//       console.log('Data sent:', response.data);

//       // If the above API call is successful, trigger the handleSubmit function from props
//       handleSubmit(values);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <div className="form-line flex mb-4  ">
//         {config.slice(0, 1).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             <TripleInputComponent
//               name={field.name}
//               values={values[field.name] || ["", "", ""]}
//               placeholders={
//                 field.placeholders || ["Field 1", "Field 2", "Field 3"]
//               }
//               onChange={(inputIndex, value) => {
//                 const updatedValues = [...(values[field.name] || ["", "", ""])];
//                 updatedValues[inputIndex] = value;
//                 handleChange(field.name, updatedValues);
//               }}
//               textcss={TextStyle[field.textcss].input}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <div className="form-line flex mb-4">
//           {config.slice(1, 3).map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "date" && (
//                 <DateComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                 />
//               )}
//               {field.type === "options" && (
//                 <OptionsComponent
//                   name={field.name}
//                   value={values[field.name] || ""}
//                   options={field.options}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="form-line flex mb-4">
//         <div className="form-line flex mb-4">
//           {config.slice(3, 5).map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "date" && (
//                 <DateComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                 />
//               )}
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                 />
//               )}
//             </div>
//           ))}
//           <div className=" translate-y-[-390%] ml-8 p-3">
//           <CardComponent CardConfig={CardConfig} handleChange={handleChange} />
//           </div>
//         </div>

//       </div>

//       <div className="form-line flex mb-4">
//         {config.slice(5, 8).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             {field.type === "options" && (
//               <OptionsComponent
//                 name={field.name}
//                 value={values[field.name] || ""}
//                 options={field.options}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//             {field.type === "text" && (
//               <TextComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ""}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4">
//         {config.slice(8, 10).map((field, index) => (
//           <div key={index}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             {field.type === "options" && (
//               <OptionsComponent
//                 name={field.name}
//                 value={values[field.name] || ""}
//                 options={field.options}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//             {field.type === "doubleInput" && (
//               <DoubleInputComponent
//                 name={field.name}
//                 values={values[field.name] || ["", ""]}
//                 placeholders={field.placeholders || ["Field 1", "Field 2"]}
//                 onChange={(inputIndex, value) => {
//                   const updatedValues = [...(values[field.name] || ["", ""])];
//                   updatedValues[inputIndex] = value;
//                   handleChange(field.name, updatedValues);
//                 }}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//             {/* Add other field types as needed */}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4">
//         {config.slice(10, 11).map((field, index) => (
//           <div key={index}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             {field.type === "options" && (
//               <OptionsComponent
//                 name={field.name}
//                 value={values[field.name] || ""}
//                 options={field.options}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//             {/* Add other field types as needed */}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4">
//         {config.slice(11, 13).map((field, index) => (
//           <div key={index}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             {field.type === "email" && (
//               <EmailComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ""}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4">
//         {config.slice(13, 16).map((field, index) => (
//           <div key={index}>
//             <label className={TextStyle[field.textcss].label}>
//               {field.label}
//             </label>
//             {field.type === "tel" && (
//               <PhoneComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ""}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//             {field.type === "options" && (
//               <OptionsComponent
//                 name={field.name}
//                 value={values[field.name] || ""}
//                 options={field.options}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="buttons flex justify-end mt-6">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5"
//         >
//           Save
//         </button>
//         <button
//           type="button"
//           onClick={handleNextClick}
//           className="bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-2"
//         >
//           Next
//         </button>
//       </div>
//     </form>
//   );
// };
// export default BasicDetailsFormComponent;

import React, { useState } from "react";
import axios from "axios";
import DateComponent from "../Formfields/date/DateComponent";
import TextComponent from "../Formfields/text/TextComponent";
import TextStyle from "../Formfields/text/TextStyle";
import EmailComponent from "../Formfields/email/EmailComponent";
import OptionsComponent from "../Formfields/options/OptionsComponent";

import PhoneComponent from "../Formfields/phone/PhoneComponent";

import { BASIC_DETAILS_API } from "../../../Api/getAPI/EndPoints";
import { getApiUrl } from "../../../Api/getAPI/GetAPI";
import CardComponent from "./CardComponent";
import CardConfig from "./CardConfig";

const BasicDetailsFormComponent = ({
  config,
  handleSubmit,
  handleNextClick,
}) => {
  const [values, setValues] = useState({});
  const [originalDateValues, setOriginalDateValues] = useState({});
  // const handleChange = (name, value) => {
  //   setValues({ ...values, [name]: value });
  // };

  // const handleChange = (name, value) => {
  //   // If the input is an image file, set it in a separate field in the values object
  //   if (name === "photo_content") {
  //     setValues({ ...values, [name]: value });
  //   } else {
  //     setValues({ ...values, [name]: value });
  //   }
  // };
  const handleChange = (name, value) => {
    // If the input is a date field, format the date as dd-mm-yyyy
    if (config.some((field) => field.name === name && field.type === 'date')) {
      const formattedDate = value.split('-').reverse().join('-');
      setOriginalDateValues({ ...originalDateValues, [name]: value });
      setValues({ ...values, [name]: formattedDate });
    } else {
      // If the input is not a date, update the state as usual
      setValues({ ...values, [name]: value });
    }
  };
  
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make your axios call here
  //     const response = await axios.post(getApiUrl(BASIC_DETAILS_API), values);
  //     // const response = await axios.post('http://localhost:3001/basicdetail', values);
  //     // const response = await axios.post('http://192.168.0.126:8000/employees/', values);

  //     console.log("Data sent:", response.data);

  //     // If the above API call is successful, trigger the handleSubmit function from props
  //     handleSubmit(values);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Values:", values);
      // Create a FormData object to handle file uploads
      const formData = new FormData();

      // Append text data to FormData
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Append image file to FormData if it exists
      if (values.photo_content) {
        formData.append("photo_content", values.photo_content);
      }

      // Make the axios call using FormData
      const response = await axios.post(
        getApiUrl(BASIC_DETAILS_API),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        }
      );

      console.log("Data sent:", response.data);

      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(values);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="block text-gray-600 text-xs font-bold my-1">Employee Name*</h1>
      <div className="form-line flex mb-4  ">
        <div className="form-field flex ">
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
      <div className="form-line flex mb-4">
        <div className="form-line flex mb-4">
          {config.slice(5, 7).map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
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

      <div className="form-line flex mb-4">
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
        <div className=" -translate-x-[-30%] -translate-y-[60%] ml-8 p-3  ">
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
            {/* Add other field types as needed */}
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

      <div className="buttons flex justify-end -translate-y-[15vh] -translate-x-12">
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
    </form>
  );
};
export default BasicDetailsFormComponent;
