import React from 'react';
import style from './Portfolio.module.scss';
// import eyeHide from '../../img/eyeHide.svg';
import eyeOpen from '../../img/eyeOpen.svg';
import EmptyPortfolio from './EmptyPortfolio/EmptyPortfolio';
const Portfolio = ({ portfolioData, toggleMenuIsVisible }) => {
  const { name, img, color } = portfolioData.portfolioDescr;
  const { totalBalance } = portfolioData;
  return (
    <div className={style.portfolio}>
      <div className={style.header}>
        <div className={style.header__summary__info__wrapper}>
          <div className={style.name__portfolio__wrapper}>
            <span style={{ backgroundColor: color }}>{img}</span>
            <p>{name}</p>
          </div>
          <div className={style.total__balance__wrapper}>
            <div className={style.total__balance}>${totalBalance}</div>
            <img src={eyeOpen} alt="Open eye" />
          </div>
          <div className={style.change__total__balance__wrapper}>
            <span>$0 (24h)</span>
          </div>
        </div>
        <div className={style.header__chartBox__item__wrapper}>
          <div className={style.show__charts__btn}>
            <span>Show charts</span>
            <button>btn</button>
          </div>
          <div className={style.addTransaction__btn__wrapper}>
            <button onClick={() => toggleMenuIsVisible('selectCoin')}>+ Add Transaction</button>
          </div>
          <div className={style.popup__menu__wrapper}>
            <button>...</button>
          </div>
        </div>
      </div>
      <div className={style.main}>
        <EmptyPortfolio toggleMenuIsVisible={toggleMenuIsVisible} />
      </div>
    </div>
  );
};

export default Portfolio;
