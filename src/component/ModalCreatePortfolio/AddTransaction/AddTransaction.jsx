import React from 'react';
import style from './AddTransaction.module.scss';

import TransferMenu from './TransferMenu/TransferMenu';
import DataAndTimeMenuContainer from './DataAndTimeMenu/DataAndTimeMenuContainer';
import BuyAndSellMenuContainer from './BuyAndSellMenu/BuyAndSellMenuContainer';

const AddTransaction = ({
  toggleMenuIsVisible,
  coinListAT,
  selectCoin,
  toggleOpenSelectCoinWindow,
  openSelectCoinWindow,
  dateAndTimeMenuIsVisible,
  toggleAddTransferMenu,
  setSelectCoinAT,
  setTransactionMode,
  transactionMode,
  addTransactionMenuIsVisible,
  reformattedDate,
}) => {
  let menu;
  if (addTransactionMenuIsVisible && (transactionMode === 'buy' || transactionMode === 'sell')) {
    menu = (
      <BuyAndSellMenuContainer
        toggleAddTransferMenu={toggleAddTransferMenu}
        toggleMenuIsVisible={toggleMenuIsVisible}
        selectCoin={selectCoin}
        coinListAT={coinListAT}
        toggleOpenSelectCoinWindow={toggleOpenSelectCoinWindow}
        openSelectCoinWindow={openSelectCoinWindow}
        setSelectCoinAT={setSelectCoinAT}
        setTransactionMode={setTransactionMode}
        transactionMode={transactionMode}
        reformattedDate={reformattedDate}
      />
    );
  } else if (addTransactionMenuIsVisible && transactionMode === 'transfer') {
    menu = (
      <TransferMenu
        toggleMenuIsVisible={toggleMenuIsVisible}
        selectCoin={selectCoin}
        coinListAT={coinListAT}
        toggleOpenSelectCoinWindow={toggleOpenSelectCoinWindow}
        openSelectCoinWindow={openSelectCoinWindow}
        setSelectCoinAT={setSelectCoinAT}
        setTransactionMode={setTransactionMode}
        transactionMode={transactionMode}
        reformattedDate={reformattedDate}
      />
    );
  } else if (dateAndTimeMenuIsVisible) {
    menu = <DataAndTimeMenuContainer />;
  }

  return <div className={style.addTransaction__wrapper}>{menu}</div>;
};

export default AddTransaction;
