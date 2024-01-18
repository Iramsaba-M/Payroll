import React, { useState } from 'react';
import StyleSearch from './StyleSearch';

const DynamicSearch = ({ data, searchKey, config, searchFunrecd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recSearchedData, setRecSearchedData] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchFunrecd(filteredData)
  };
  
  const filteredData = data.filter((item) =>
  String(item[searchKey]).toLowerCase().includes(searchTerm.toLowerCase())
  );
  
 
 
  
  console.log(filteredData)
  console.log("hhhhhhhh")

  return (
    <div className=''> 
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className={StyleSearch[config.style]}
        placeholder={config.placeholder}
      />

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {/* {item[searchKey]} */}
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default DynamicSearch;













