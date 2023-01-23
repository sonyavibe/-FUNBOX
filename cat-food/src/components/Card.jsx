import React from "react";
import "./card.css";
import Data from "./Data";

const Card = ({item}) => {
  return (
    <div className="card__box" key={item.id}>
      <div className="card">
        <div className="card_text">
          <img src="../assets/cat.png" alt="" className="card__img" />

          <span className="pre__heading">Сказочное заморское яство</span>
          <h2 className="card__heading">Нямушка</h2>
          <h3 className="card__subheading">{item.name}</h3>
          <span className="subtext"><b>{item.portions}</b> порций<br></br>{item.bonus}<br></br></span>
          <span className="subtext">{item.bonus2}</span>
          
        </div>
        <div className="size__icon">
          <span className="text__1">{item.size}</span>
          <span className="text__2">кг</span>
        </div>
      </div>
      <span className="to-buy__subtext">Чего сидишь? Порадуй котэ, <button className="to-buy__button">купи</button>.</span>
    </div>
  )
}

export default Card;