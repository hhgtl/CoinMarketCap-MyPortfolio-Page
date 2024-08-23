import React from 'react';
import BuyAndSellMenu from './BuyAndSellMenu';
import { useDispatch, useSelector } from 'react-redux';
import { changePriceSelectCoin, changeQuantity } from '../../../../redux/modalAddTransactionSlice';

const BuyAndSellMenuContainer = ({
  toggleAddTransferMenu,
  selectCoin,
  coinListAT,
  toggleOpenSelectCoinWindow,
  openSelectCoinWindow,
  setSelectCoinAT,
  transactionMode,
  setTransactionMode,
  toggleMenuIsVisible,
  reformattedDate,
}) => {
  const { priceSelectCoin, quantity } = useSelector((state) => state.modalAddTransaction);
  const dispatch = useDispatch();
  return (
    <BuyAndSellMenu
      toggleAddTransferMenu={toggleAddTransferMenu}
      selectCoin={selectCoin}
      coinListAT={coinListAT}
      toggleOpenSelectCoinWindow={toggleOpenSelectCoinWindow}
      openSelectCoinWindow={openSelectCoinWindow}
      setSelectCoinAT={setSelectCoinAT}
      transactionMode={transactionMode}
      setTransactionMode={setTransactionMode}
      toggleMenuIsVisible={toggleMenuIsVisible}
      priceSelectCoin={priceSelectCoin}
      changePriceSelectCoin={(price) => dispatch(changePriceSelectCoin({ price }))}
      quantity={quantity}
      changeQuantity={(quantity) => dispatch(changeQuantity({ quantity }))}
      reformattedDate={reformattedDate}
    />
  );
};

export default BuyAndSellMenuContainer;
