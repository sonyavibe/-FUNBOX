import React from "react";
import "./card.css";
import Data from "./Data";
import { useState } from "react";

const Card = ({item}) => {

  const [state, setState] = useState (false);
  const [hover, setHover] = useState (false);

  const handleClick = () => {
    setState(prevState => !prevState);
  };

  const handleHover = () => {
    setHover(prevHover => !prevHover);
  };
  
  return (
    <div className="card__box" key={item.id}>
      
      <div  onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} className={`${state ? 'card-active' : 'card'}`}>

        <div className="card_text">

          <img src="../assets/cat.png" alt="" className="card__img" />

          <span 
          className={`${state ? (hover ? 'pre__heading-active' : 'pre__heading') : 'pre__heading'}`}>
            {
            state 
              ? (hover ? 'Котэ не одобряет?' : 'Сказочное заморское явство') 
              : 'Сказочное заморское явство'
            }
          </span>
          <h2 className="card__heading">Нямушка</h2>
          <h3 className="card__subheading">{item.name}</h3>
          <span className="subtext"><b>{item.portions}</b> порций<br></br>{item.bonus}<br></br></span>
          <span className="subtext">{item.bonus2}</span>
          
        </div>
        <div className={`${state ? 'size__icon-active' : 'size__icon'}`}>
          <span className="text__1">{item.size}</span>
          <span className="text__2">кг</span>
        </div>
      </div>
      {
        state ? 
        <span className="to-buy__subtext">{item.activeSubtext}</span>
        : 
        <span >Чего сидишь? Порадуй котэ, <button className="to-buy__button" onClick={handleClick}>купи</button>.</span>
      }
    </div>
  )
}

export default Card;