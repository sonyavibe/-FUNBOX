import React from "react";
import "./card.css";
import Data from "./Data";

const InactiveCard = ({item}) => {
  return (
    <div className="card__box" key={item.id}>
      
      <div  className="card-inactive">

        <div className="card_text">
          <span className='pre__heading inactive'> Сказочное заморское явство</span>
          <h2 className="card__heading inactive">Нямушка</h2>
          <h3 className="card__subheading inactive">{item.name}</h3>
          <span className="subtext inactive"><b>{item.portions}</b> порций<br></br>{item.bonus}<br></br></span>
          <span className="subtext inactive">{item.bonus2}</span>
          
        </div>
        <div className="size__icon-inactive">
          <span className="text__1">{item.size}</span>
          <span className="text__2">кг</span>
        </div>
      </div>
        <span className="to-buy__subtext-inactive">{item.inactiveSubtext}</span>
    </div>
  );
}

export default InactiveCard