import React from 'react';
import DynamicSearch from './DynamicSearch'; // Adjust the path based on your file structure


const SearchableComp = ({SearchConfig}) => {
  // const data = [
  //   { id: 1, name: 'John Doe' },
  //   { id: 2, name: 'Jane Doe' },
  //   { id: 3, name: 'Alice Smith' },
  //   { id: 4, name: 'Alice Smith' },
  //   { id: 5, name: 'Alice Smith' },
  //   // ... other data
  // ];

  return (
    <div>
     
      <DynamicSearch  searchKey="name" config={SearchConfig} />
    </div>
  );
};

export default SearchableComp;
