import React from 'react';
import style from './StartMenu.module.scss';
import cross from '../../../img/cross.svg';

const StartMenu = ({ toggleMenuIsVisible }) => {
  return (
    <div className={style.Modal__title__wrapper}>
      <div className={style.Modal__title}>Create Portfolio</div>
      <div
        className={style.Modal__crossIcon__Wrapper}
        onClick={() => toggleMenuIsVisible('closeModal')}
      >
        <img src={cross} alt="cross" />
      </div>
      <div
        className={style.Add__body__wrapper}
        onClick={() => toggleMenuIsVisible('createPortfolio')}
      >
        <div className={style.Add__transaction__wrapper}>
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/portfolio/manual.svg?_=18ab4b3"
            alt="cursor"
          />
          <div className={style.Main__text__wrapper}>
            <div className={style.Main__title__text}>Add Transactions Manually</div>
            <div className={style.Main__desc__text}>
              Enter all transaction details at your own pace to track your portfolio.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
