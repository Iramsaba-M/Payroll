import React, { useState } from 'react';
import DynamicSearch from './DynamicSearch'; // Adjust the path based on your file structure


const SearchableComp = ({SearchConfig, data, searchFunrec }) => {
  // const data = [
  //   { name: 'John Doe', email: 'aa@gmail.com',  },
  //   { name: 'Jane Smith', email: 'aa@gmail.com' },
  //   {  name: 'Bob Johnson',  email: 'aa@gmail.com'},
  //   { name: 'Bob Johnson',  email: 'aa@gmail.com'},
  //   {  name: 'Bob Johnson hgghh', email: 'aa@gmail.com' },
  // ];


  const [searchData, setSearchData] = useState('')

  
  const recSearchData = (searchedData) => {
   console.log("search data================")
  setSearchData(searchedData)
  searchFunrec(searchedData)
 }


  return (
    <div>
     
      <DynamicSearch data={data} searchKey="name" config={SearchConfig} searchFunrecd={recSearchData} />
    </div>
  );
};

export default SearchableComp;
