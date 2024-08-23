import React, { useEffect, useRef } from 'react';
import style from './TransferMenu.module.scss';
import cross from '../../../../img/cross.svg';
import calendarImg from '../../../../img/calendar.png';
import feeImg from '../../../../img/fee.png';
import notesImg from '../../../../img/notes.png';
import arrowDown from '../../../../img/arrowDown.png';
import arrowDownType2 from '../../../../img/arrowDownType2.png';
import CoinItemTM from '../CoinItemTM/CoinItemTM';
const TransferMenu = ({
  toggleMenuIsVisible,
  coinListAT,
  selectCoin,
  toggleOpenSelectCoinWindow,
  openSelectCoinWindow,
  setSelectCoinAT,
  setTransactionMode,
  transactionMode,
  reformattedDate,
}) => {
  const { image, name, symbol } = selectCoin;
  const activeSelectCoinDropDownMenu = openSelectCoinWindow
    ? `${style.selectCoinDropDownMenu__wrapper} + ${style.active}`
    : style.selectCoinDropDownMenu__wrapper;
  const closeModal = () => {
    toggleMenuIsVisible('closeModal');
    toggleOpenSelectCoinWindow(false);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (openSelectCoinWindow) {
      inputRef.current.focus();
    }
  }, [openSelectCoinWindow]);

  const closeSelectCoinDropDownMenu = () => {
    if (openSelectCoinWindow) {
      toggleOpenSelectCoinWindow(false);
    }
  };
  return (
    <div className={style.transferMenu__wrapper} onClick={closeSelectCoinDropDownMenu}>
      <div className={style.header}>
        <div className={style.title}>Add Transaction</div>
        <img src={cross} alt="cross" onClick={closeModal} />
      </div>
      <div className={style.body}>
        <ul className={style.selectModePanel}>
          <li
            className={transactionMode === 'buy' ? style.active : null}
            onClick={() => setTransactionMode('buy')}
          >
            Buy
          </li>
          <li
            className={transactionMode === 'sell' ? style.active : null}
            onClick={() => setTransactionMode('sell')}
          >
            Sell
          </li>
          <li
            className={transactionMode === 'transfer' ? style.active : null}
            onClick={() => setTransactionMode('transfer')}
          >
            Transfer
          </li>
        </ul>
        <div className={style.selectCoinMenu__wrapper}>
          {openSelectCoinWindow ? (
            <input className={style.seachCoin} type="text" ref={inputRef} />
          ) : (
            <div
              className={style.selectedCoin__wrapper}
              onClick={() => toggleOpenSelectCoinWindow()}
            >
              <div className={style.selectedCoin}>
                <img src={image} alt={name} /> <span className={style.selectCoinName}>{name}</span>
                <span className={style.selectCoinSymbol}>{symbol ? symbol.toUpperCase() : ''}</span>
              </div>
              <img src={arrowDownType2} alt="" />
            </div>
          )}
          <div className={activeSelectCoinDropDownMenu}>
            {coinListAT.map((coin) => (
              <CoinItemTM
                key={coin.id}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                image={coin.image}
                setSelectCoinAT={setSelectCoinAT}
                selectCoinId={selectCoin.id}
              />
            ))}
          </div>
        </div>
        <div className={style.transfer__wrapper}>
          <p className={style.transferTitle}>Transfer</p>
          <div className={style.transferBtn__wrapper}>
            <div className={style.transferBtn}>
              Transfer In <img src={arrowDown} alt="arrow" />
            </div>
            <div className={style.transferMenu}></div>
          </div>
        </div>
        <div className={style.detailsTransaction__wrapper}>
          <div className={style.quantity__wrapper}>
            <p>Quantity</p>
            <input type="number" placeholder="0.00" />
          </div>
        </div>
        <div className={style.controlPanel__wrapper}>
          <button
            className={style.calendar__btn}
            onClick={() => toggleMenuIsVisible('dateAndTime')}
          >
            <img src={calendarImg} alt="calendar" />
            {reformattedDate}
          </button>
          <button className={style.fee__btn}>
            <img src={feeImg} alt="fee" />
            Fee
          </button>
          <button className={style.notes__btn}>
            <img src={notesImg} alt="notes" />
            Notes
          </button>
        </div>
        <button className={style.addTransactionBtn__wrapper}>Add Transaction</button>
      </div>
    </div>
  );
};

export default TransferMenu;
