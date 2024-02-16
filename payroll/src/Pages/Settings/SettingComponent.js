

// import React from 'react';
// import CardConfig from './cardcomponent/CardConfig';
// import SettingContent from './SettingContent';

// const SettingComponent = () => {
//   const cardsPerRow = 3;

//   // Function to chunk the array into groups of three
//   const chunkArray = (array, size) => {
//     return array.reduce((chunks, item, index) => {
//       if (index % size === 0) {
//         chunks.push([item]);
//       } else {
//         chunks[chunks.length - 1].push(item);
//       }
//       return chunks;
//     }, []);
//   };

//   // Chunk the SettingContent array
//   const chunkedSettingContent = chunkArray(SettingContent, cardsPerRow);

//   return (
//     <div>
//       Setting
//       {chunkedSettingContent.map((chunk, index) => (
//         <CardConfig key={index} Config={chunk} />
//       ))}
//     </div>
//   );
// };

// export default SettingComponent;

// SettingComponent.js




// import React from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import CardConfig from './cardcomponent/CardConfig';
// import SettingContent from './SettingContent';
// import CTCTemplateSetting from './CTCTemplateSetting';
// import PayRollSetting from './PayRollSetting';
// import LoanSetting from './LoanSetting/LoanSetting';
// import { Navigate } from 'react-router-dom';

// const SettingComponent = () => {
//   const navigate = useNavigate();

//   // const handleCardClick = (route) => {

//   //   const currentPath = window.location.pathname;
//   //   const newPath =  `${currentPath}${route}`;
//   //   console.log(`Navigating to ${newPath}`);
//   //   navigate(newPath);

//   // };

//   const cardsPerRow = 3;

//   const chunkArray = (array, size) => {
//     return array.reduce((chunks, item, index) => {
//       if (index % size === 0) {
//         chunks.push([item]);
//       } else {
//         chunks[chunks.length - 1].push(item);
//       }
//       return chunks;
//     }, []);
//   };

//   const chunkedSettingContent = chunkArray(SettingContent, cardsPerRow);

//   return (
//     <div>
//       {/* Setting */}
//       {chunkedSettingContent.map((chunk, index) => (

//         // <CardConfig key={index} Config={chunk} handleCardClick={handleCardClick} />
//         <CardConfig key={index} Config={chunk}  />


//       ))}

//       {/* Routes */}
//       <Routes>
//       {/* <Route path="/" element={<Navigate to="CTCTemplateSetting" />} /> */}
//         <Route path="CTCTemplateSetting" element={<CTCTemplateSetting />} />
//         <Route path="PayRollSetting" element={<PayRollSetting />} />
//         <Route path="LoanSetting" element={<LoanSetting />} />
//         <Route path="*" element={<div>Error: Page Not Found</div>} />


//       </Routes>
//     </div>
//   );
// };

// export default SettingComponent;



import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import CardConfig from './cardcomponent/CardConfig';
import SettingContent from './SettingContent';
import { Outlet } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const SettingComponent = () => {
  // const [selectedCard, setSelectedCard] = useState(null);
  const [cardclick, setCardClick] = useState(false)
  const navigate = useNavigate();
  // const [currentPath, setcurrentPath] = useState(window.location.pathname);

  const handleCardClick = (route) => {
    // const currentPath = window.location.pathname;
    // const newPath =  `/apps/Settings${route.to}`;
    // console.log(`Navigating to ${cardclick}`);
    // setSelectedCard(route.title);
    navigate(route.to)

    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/settings');
    setCardClick(false);
  };


  const cardsPerRow = 3;
  const chunkedSettingContent = chunkArray(SettingContent, cardsPerRow);

  return (
    <div>
      {/* Setting */}
      {
        (!cardclick) &&
        chunkedSettingContent.map((chunk, index) => (
          <CardConfig key={index} Config={chunk} handleCardClick={handleCardClick} />
        ))}
      {cardclick && (
        <>
          <button onClick={handleBackClick}><IoMdArrowBack /></button>
          <Outlet />
        </>
      )}
    </div>
  );
};

// Helper function to chunk the array into groups of three
const chunkArray = (array, size) => {
  return array.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};

export default SettingComponent;
