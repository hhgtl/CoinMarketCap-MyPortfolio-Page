import React from 'react';
import style from './PortfolioCard.module.scss';

const PortfolioCard = ({
  id,
  portfolioDescr,
  totalBalance,
  selectedPortfolio,
  selectPortfolio,
}) => {
  const portfolioActive = selectedPortfolio
    ? `${style.portfolio__card} ${style.active}`
    : `${style.portfolio__card}`;
  return (
    <div className={portfolioActive} onClick={() => selectPortfolio(id)}>
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
