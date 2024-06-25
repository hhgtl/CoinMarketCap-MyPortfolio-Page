import React from 'react';
import style from './StartPage.module.scss';

const StartPage = () => {
  return (
    <div className={style.startPage__wrapper}>
      <img
        src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/no-portfolio.png?_=d19da91"
        alt="Portfolio"
        className={style.portfolio__img}
      />
      <div className={style.title}>Let’s get started with your first portfolio!</div>
      <div className={style.desc}>Track profits, losses and valuation all in one place.</div>
      <div className={style.add__transaction__container}>
        <div className={style.icon}>
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/manual.svg?_=d19da91"
            alt=""
          />
        </div>
        <div className={style.text}>
          <div className={style.title}>Add Transactions Manually</div>
          <div className={style.desc}>
            Enter all transaction details at your own pace to track your portfolio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
