import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalCreatePortfolio } from '../../redux/modalSlice';
import ModalCreatePortfolio from './ModalCreatePortfolio';

const ModalCreatePortfolioContainer = () => {
  const dispatch = useDispatch();
  return (
    <ModalCreatePortfolio
      toggleModalCreatePortfolio={() => dispatch(toggleModalCreatePortfolio())}
    />
  );
};

export default ModalCreatePortfolioContainer;
