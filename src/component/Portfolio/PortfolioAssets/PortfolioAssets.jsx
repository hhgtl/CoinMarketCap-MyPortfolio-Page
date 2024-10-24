import React from 'react';
import style from './PortfolioAssets.module.scss';
import AssetsContainer from './Assets/AssetsContainer';

const PortfolioAssets = () => {
  return (
    <div className={style.portfolioAssets__wrapper}>
      <div className={style.title}>Assets</div>
      <AssetsContainer />
    </div>
  );
};

export default PortfolioAssets;
