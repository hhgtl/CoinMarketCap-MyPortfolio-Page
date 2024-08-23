import React from 'react';
import SidePanel from './SidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsVisible } from '../../redux/modalSlice';
import { selectPortfolio } from '../../redux/portfolioSlice';

const SidePanelContainer = () => {
  const portfolioData = useSelector((state) => state.portfolioData);
  const dispatch = useDispatch();
  return (
    <SidePanel
      portfolioData={portfolioData.portfolio}
      toggleMenuIsVisible={() => dispatch(toggleMenuIsVisible({ modalType: 'startMenu' }))}
      selectPortfolio={(id) => dispatch(selectPortfolio({ id }))}
    />
  );
};

export default SidePanelContainer;
