import React from 'react';
import style from './ModalCreatePortfolio.module.scss';
import StartMenu from './StartMenu/StartMenu';
import ChangeAvatarContainer from './ChangeAvatar/ChangeAvatarContainer';
import CreatePorfolioMenuContainer from './CreatePorfolioMenu/CreatePorfolioMenuContainer';
import SelectCoinMenuContainer from './SelectCoinMenu/SelectCoinMenuContainer';
import AddTransactionContainer from './AddTransaction/AddTransactionContainer';
const ModalCreatePortfolio = ({
  toggleMenuIsVisible,
  startMenuIsVisible,
  createPortfolioMenuIsVisible,
  changeAvatarMenuIsVisible,
  selectCoinMenuIsVisible,
  addTransactionMenuIsVisible,
  dateAndTimeMenuIsVisible,
}) => {
  let renderMenu;
  if (startMenuIsVisible) {
    renderMenu = <StartMenu toggleMenuIsVisible={toggleMenuIsVisible} />;
  } else if (createPortfolioMenuIsVisible) {
    renderMenu = <CreatePorfolioMenuContainer toggleMenuIsVisible={toggleMenuIsVisible} />;
  } else if (changeAvatarMenuIsVisible) {
    renderMenu = <ChangeAvatarContainer toggleMenuIsVisible={toggleMenuIsVisible} />;
  } else if (selectCoinMenuIsVisible) {
    renderMenu = <SelectCoinMenuContainer />;
  } else if (addTransactionMenuIsVisible || dateAndTimeMenuIsVisible) {
    renderMenu = <AddTransactionContainer />;
  } else {
    renderMenu = null;
  }

  return <div className={style.modalCreatePortfolio__Wpapper}>{renderMenu}</div>;
};

export default ModalCreatePortfolio;
