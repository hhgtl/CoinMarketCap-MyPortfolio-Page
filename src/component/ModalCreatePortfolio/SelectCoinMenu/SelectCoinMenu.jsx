import React from 'react';
import style from './AddTransaction.module.scss';
import cross from '../../../img/cross.svg';
import CoinItem from './CoinItem/CoinItem';

const SelectCoinMenu = ({ coinList, toggleMenuIsVisible, setSelectCoinAT }) => {
  return (
    <div className={style.selectCoinMenu__wrapper}>
      <div className={style.header}>
        <div className={style.title__wrapper}>
          <div className={style.title}>Select Coin</div>
          <img src={cross} alt="cross" onClick={() => toggleMenuIsVisible('closeModal')} />
        </div>
      </div>
      <div className={style.body}>
        <input className={style.searchPanel} type="text" placeholder="Search" />
        <div className={style.coinList__menu}>
          {coinList.map((coinObj) => (
            <CoinItem
              key={coinObj.id}
              id={coinObj.id}
              symbol={coinObj.symbol}
              name={coinObj.name}
              image={coinObj.image}
              setSelectCoinAT={setSelectCoinAT}
              toggleMenuIsVisible={toggleMenuIsVisible}
              price={coinObj.current_price}
              lastUpdated={coinObj.last_updated}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCoinMenu;
