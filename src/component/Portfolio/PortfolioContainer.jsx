import React from 'react';
import Portfolio from './Portfolio';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsVisible } from '../../redux/modalSlice';

const PortfolioContainer = () => {
  const { portfolio } = useSelector((state) => state.portfolioData);
  const dispatch = useDispatch();
  const portfolioData = portfolio.find((p) => p.selectedPortfolio);
  return (
    <Portfolio
      portfolioData={portfolioData}
      toggleMenuIsVisible={(modalType) => dispatch(toggleMenuIsVisible({ modalType }))}
    />
  );
};

export default PortfolioContainer;
