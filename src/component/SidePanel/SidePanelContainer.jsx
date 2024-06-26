import React from 'react';
import SidePanel from './SidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalCreatePortfolio } from '../../redux/modalSlice';

const SidePanelContainer = () => {
  const portfolioData = useSelector((state) => state.portfolioData);
  const dispatch = useDispatch();
  return (
    <SidePanel
      portfolioData={portfolioData.portfolio}
      toggleModalCreatePortfolio={() => dispatch(toggleModalCreatePortfolio())}
    />
  );
};

export default SidePanelContainer;
