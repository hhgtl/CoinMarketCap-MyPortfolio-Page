import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsVisible } from '../../redux/modalSlice';
import ModalCreatePortfolio from './ModalCreatePortfolio';

const ModalCreatePortfolioContainer = () => {
  const {
    startMenuIsVisible,
    createPortfolioMenuIsVisible,
    changeAvatarMenuIsVisible,
    selectCoinMenuIsVisible,
    addTransactionMenuIsVisible,
    dateAndTimeMenuIsVisible,
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <ModalCreatePortfolio
      toggleMenuIsVisible={(modalType) => dispatch(toggleMenuIsVisible({ modalType }))}
      startMenuIsVisible={startMenuIsVisible}
      createPortfolioMenuIsVisible={createPortfolioMenuIsVisible}
      changeAvatarMenuIsVisible={changeAvatarMenuIsVisible}
      selectCoinMenuIsVisible={selectCoinMenuIsVisible}
      addTransactionMenuIsVisible={addTransactionMenuIsVisible}
      dateAndTimeMenuIsVisible={dateAndTimeMenuIsVisible}
    />
  );
};

export default ModalCreatePortfolioContainer;
