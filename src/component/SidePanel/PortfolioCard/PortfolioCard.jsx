import React from 'react';
import style from './PortfolioCard.module.scss';

const PortfolioCard = () => {
  return (
    <div className={`${style.portfolio__card} ${style.active}`}>
      <div className={style.img__wrapper}>
        <span>🐻</span>
      </div>
      <div className={style.text}>
        <div className={style.title}>Test</div>
        <p className={style.full__price}>$100</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
