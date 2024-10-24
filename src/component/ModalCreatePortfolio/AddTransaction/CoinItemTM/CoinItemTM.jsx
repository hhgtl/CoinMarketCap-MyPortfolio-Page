import React from 'react';
import style from './CoinItemTM.module.scss';

const CoinItemTM = ({
  id,
  symbol,
  name,
  image,
  setSelectCoinAT,
  selectCoinId,
  price,
  lastUpdated,
}) => {
  return (
    <button
      className={
        selectCoinId === id
          ? `${style.coinItem__wrapper} + ${style.selected}`
          : style.coinItem__wrapper
      }
      onClick={() => {
        setSelectCoinAT({ id, symbol, name, image, price, lastUpdated });
      }}
    >
      <div className={style.coin__descr}>
        <img src={image} alt="bitcoin" />
        <div className={style.coinName}>{name}</div>
        <div className={style.coinSybol}>{symbol.toUpperCase()}</div>
      </div>
    </button>
  );
};

export default CoinItemTM;
