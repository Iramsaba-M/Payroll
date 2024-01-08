// CardConfig.js
import React from 'react';
import CardStyles from './CardStyle';

const Card = ({ card, title, content }) => {
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
      <h3 className={CardStyles.CardTitle}>{title}</h3>
      <p className={CardStyles.CardContent}>{content}</p>
    </div>
  );
};

const CardConfig = ({ Config, cardsPerRow = 3, data }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % cardsPerRow === 0 && <div className="w-full"></div>}
          <Card
            {...card}
            content={data && data.length > 0 ? data[0][card.contentKey] : 'Loading...'}
          />
        </React.Fragment>
      ))}
    </div>
  );
};


export default CardConfig;


