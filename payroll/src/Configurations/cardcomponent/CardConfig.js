// // CardConfig.js
// import React, { useState, useEffect } from 'react';
// import CardData from './CardData';
// import CardStyles from './CardStyle'

// const CardConfig = () => {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     // Fetch data from JSON server
//     fetch('http://localhost:3000/cards') // Replace with your JSON server endpoint
//       .then(response => response.json())
//       .then(data => setCardData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="flex justify-center mt-8">
//       {cardData.map((card, index) => (
//         <div key={index} className={`${CardStyles[card.card]} ${CardStyles.MarginBetweenCards}`}>
//           <h3 className={CardStyles.CardTitle}>{card.title}</h3>
//           <p className={CardStyles.CardContent}>{card.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardConfig;
// // CardConfig.js
// import React from 'react';
// import CardStyles from './CardStyle';
// import CardData from './CardData';

// const Card = ({ card, title, content }) => {
//   return (
//     <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
//       <h3 className={CardStyles.CardTitle}>{title}</h3>
//       <p className={CardStyles.CardContent}>{content}</p>
//     </div>
//   );
// };

// const CardConfig = () => {
//   return (
//     <div className="flex justify-center mt-8">
//       {CardData.map((cardData, index) => (
//         <Card key={index} {...cardData} />
//       ))}
//     </div>
//   );
// };

// export default CardConfig;
// CardConfig.js
import React from 'react';
import CardStyles from './CardStyle';
import CardData from './CardData';

const Card = ({ card, title, content }) => {
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
      <h3 className={CardStyles.CardTitle}>{title}</h3>
      <p className={CardStyles.CardContent}>{content}</p>
    </div>
  );
};

const CardConfig = ({ Config, cardsPerRow=3 }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % cardsPerRow === 0 && <div className="w-full"></div>}
          <Card {...card} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;


