import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card__box">
      <div className="card">
        <span className="subtext">Котэ не одобряет?</span>
        <h2>Нямушка</h2>
        <h3>С фуагра</h3>
        <span className="subtext">10 порций</span>
        <span className="subtext">Мышь в подарок</span>
        <img src="./" alt="" className="card__img" />
        <div className="size__icon">0.5 кг</div>
      </div>
      <span className="card__subtext">Чего сидишь? Порадуй котэ, <button>купи</button>.</span>
    </div>
  )
}

export default Card;