import React from 'react';
import style from './EmptyPortfolio.module.scss';
const EmptyPortfolio = () => {
  return (
    <div className={style.emptyPortfolio__wrapper}>
      <img
        src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/no-manual-portfolio.png?_=18ab4b3"
        alt="No portfolio"
      />
      <div className={style.title__text}>This portfolio needs some final touches…</div>
      <div className={style.desc}>Add a coin to get started</div>
      <button>+ Add Transaction</button>
    </div>
  );
};

export default EmptyPortfolio;
