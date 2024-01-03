import React, { useState } from 'react';
import StyleSearch from './StyleSearch';



const DynamicSearch = ({ data, searchKey, config }) => {
  const [searchTerm, setSearchTerm] = useState('');
 
 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredData = data.filter((item) =>
  //   item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className= {StyleSearch[config.style]} 
        placeholder={config.placeholder || "Search..."}
        // className={StyleSearch[config.style] || StyleSearch.search1}
        
      
      />

      {/* <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item[searchKey]}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default DynamicSearch;

// import React, { useState } from 'react';
// import SearchInput from './SearchInput';
// import searchInputConfig from './SearchInputConfig.json'

// const DynamicSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const renderSearchInput = () => {
//     const { type, props } = searchInputConfig.SearchInput;
//     return <SearchInput type={type} props={{ ...props, value: searchTerm, onChange: handleSearch }} />;
//   };

//   return (
//     <div>
//       {renderSearchInput()}
//       <ul>
//         {/* Your other rendering logic */}
//       </ul>
//     </div>
//   );
// };

// export default DynamicSearch;

// import React from 'react'

// const DynamicSearch = () => {
//   return (
//     <div>


//     </div>
//   )
// }

// export default DynamicSearch