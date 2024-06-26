import React from 'react';
import style from './PortfolioCard.module.scss';

const PortfolioCard = ({ portfolioDescr, totalBalance }) => {
  return (
    <div className={`${style.portfolio__card} ${style.active}`}>
      <div className={style.img__wrapper} style={{ backgroundColor: portfolioDescr.color }}>
        <span>{portfolioDescr.img}</span>
      </div>
      <div className={style.text}>
        <div className={style.title}>{portfolioDescr.name}</div>
        <p className={style.full__price}>${totalBalance}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
