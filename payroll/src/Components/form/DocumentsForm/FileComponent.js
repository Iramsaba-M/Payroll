
import React, { useState } from 'react';

const FileComponent = ({ name, onChange, textcss,icon,  placeholder }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (e) => {
    setUploadedFile(e.target.files[0]);
    onChange(e.target.files[0]);
  };

  const handleCancelFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className={textcss}>
      {uploadedFile ? (
        <>
          <span className="mr-2">{uploadedFile.name}</span>
          <button onClick={handleCancelFile}>Cancel</button>
        </>
      ) : (
        <label htmlFor={name} className="cursor-pointer">
          <div className='flex items-center mt-2 '>
           <div className='text-gray-400'>{placeholder}</div> 
            <span className="ml-[185px] vh ">{icon}</span>
          </div>
          <input
            type="file"
            placeholder={placeholder}
          
            id={name}
            name={name}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
      )}
    </div>
  );
};

export default FileComponent;

