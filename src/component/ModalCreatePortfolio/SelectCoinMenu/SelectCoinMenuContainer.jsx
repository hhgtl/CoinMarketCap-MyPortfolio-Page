import React, { useEffect } from 'react';
import SelectCoin from './SelectCoinMenu';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsVisible } from '../../../redux/modalSlice';
import { setCoinListAT, setSelectCoinAT } from '../../../redux/modalAddTransactionSlice';

const SelectCoinMenuContainer = () => {
  const { coinListAT } = useSelector((state) => state.modalAddTransaction);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((res) => dispatch(setCoinListAT({ coinList: res.data })));
  }, []);
  return (
    <SelectCoin
      coinList={coinListAT}
      toggleMenuIsVisible={(modalType) => dispatch(toggleMenuIsVisible({ modalType: modalType }))}
      setSelectCoinAT={(coin) => dispatch(setSelectCoinAT({ coin: coin }))}
    />
  );
};

export default SelectCoinMenuContainer;
