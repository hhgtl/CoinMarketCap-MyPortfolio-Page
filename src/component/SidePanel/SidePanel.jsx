import React from 'react';
import style from './SidePanel.module.scss';
import pencil from '../../img/pencil.png';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import bluePlus from '../../img/blue__plus.png';

const SidePanel = ({ portfolioData, toggleMenuIsVisible, selectPortfolio }) => {
  return (
    <div className={style.side__panel}>
      <div className={style.title__container}>
        <span>My portfolio</span>
        <div className={style.icon__wrapper}>
          <img src={pencil} alt="pencil" />
        </div>
      </div>
      {portfolioData.map((p) => (
        <PortfolioCard
          key={p.id}
          id={p.id}
          portfolioDescr={p.portfolioDescr}
          totalBalance={p.totalBalance}
          selectedPortfolio={p.selectedPortfolio}
          selectPortfolio={selectPortfolio}
        />
      ))}

      <button className={style.create__portfolio__btn} onClick={toggleMenuIsVisible}>
        <div>
          <img src={bluePlus} alt="plus" />
        </div>
        Create portfolio
      </button>
    </div>
  );
};

export default SidePanel;
