import React, { useEffect } from 'react';
import AddTransaction from './AddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsVisible } from '../../../redux/modalSlice';
import axios from 'axios';
import {
  setCoinListAT,
  setDataAndTime,
  setSelectCoinAT,
  setTransactionMode,
  toggleAddTransferMenu,
  toggleOpenSelectCoinWindow,
} from '../../../redux/modalAddTransactionSlice';

const AddTransactionContainer = () => {
  const { coinListAT, selectCoin, openSelectCoinWindow, transactionMode, reformattedDate } =
    useSelector((state) => state.modalAddTransaction);
  const { addTransactionMenuIsVisible, dateAndTimeMenuIsVisible } = useSelector(
    (state) => state.modal,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30')
      .then((res) => dispatch(setCoinListAT({ coinList: res.data })));
    const todayDate = new Date(); // Аби за замочуванням була вибрана сьогоднішня дата
    let day = todayDate.getDate();
    if (String(day).length === 1) {
      day = `0${day}`;
    }
    let mounth = todayDate.getMonth() + 1;
    if (String(mounth).length === 1) {
      mounth = `0${mounth}`;
    }
    const year = todayDate.getFullYear();
    const date = `${mounth}/${day}/${year}`;

    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    if (String(hours).length === 1) {
      hours = `0${hours}`;
    }
    if (String(minutes).length === 1) {
      minutes = `0${minutes}`;
    }
    const time = `${hours}:${minutes}`;

    dispatch(setDataAndTime({ date, time }));
  }, []);
  return (
    <AddTransaction
      toggleMenuIsVisible={(modalType) => dispatch(toggleMenuIsVisible({ modalType }))}
      coinListAT={coinListAT}
      setSelectCoin={(coin) => dispatch(setSelectCoinAT({ coin }))}
      selectCoin={selectCoin}
      toggleOpenSelectCoinWindow={(type) => dispatch(toggleOpenSelectCoinWindow({ type }))}
      openSelectCoinWindow={openSelectCoinWindow}
      dateAndTimeMenuIsVisible={dateAndTimeMenuIsVisible}
      toggleAddTransferMenu={(type) => dispatch(toggleAddTransferMenu({ type: type }))}
      setSelectCoinAT={(coin) => dispatch(setSelectCoinAT({ coin: coin }))}
      setTransactionMode={(mode) => dispatch(setTransactionMode({ mode: mode }))}
      transactionMode={transactionMode}
      addTransactionMenuIsVisible={addTransactionMenuIsVisible}
      reformattedDate={reformattedDate}
    />
  );
};

export default AddTransactionContainer;
