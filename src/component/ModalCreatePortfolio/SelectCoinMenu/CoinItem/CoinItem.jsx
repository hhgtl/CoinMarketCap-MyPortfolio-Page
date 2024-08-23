import React from 'react';
import style from './CoinItem.module.scss';
import arrowRigth from '../../../../img/arrow-rigth-type2.png';
const CoinItem = ({ id, symbol, name, image, setSelectCoinAT, toggleMenuIsVisible, price }) => {
  const closeModalAndSendCoin = () => {
    setSelectCoinAT({ id: id, symbol: symbol, name: name, image: image, price: price });
    toggleMenuIsVisible('addTransaction');
  };
  return (
    <button className={style.coinItem__wrapper} onClick={closeModalAndSendCoin}>
      <div className={style.coin__descr}>
        <img src={image} alt="bitcoin" />
        <div className={style.coinName}>{name}</div>
        <div className={style.coinSybol}>{symbol.toUpperCase()}</div>
      </div>
      <img src={arrowRigth} alt="arrowRigth" />
    </button>
  );
};

export default CoinItem;
