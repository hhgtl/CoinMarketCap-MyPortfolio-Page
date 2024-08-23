import React from 'react';
import style from './CreatePorfolioMenu.module.scss';
import cross from '../../../img/cross.svg';
import arrowLeft from '../../../img/arrow-left.svg';
import { useSelector } from 'react-redux';

const CreatePorfolioMenu = ({
  toggleMenuIsVisible,
  changePortfolioNameValue,
  portflolioNameValue,
  createPortfolioAndCloseModal,
  selectedEmoji,
  selectedColor,
}) => {
  return (
    <div className={style.modal__create__portfolio__wrapper}>
      <div className={style.modal__create__portfolio__text__wrapper}>
        <img
          className={style.modal__create__portfolio__ArrowLeft}
          src={arrowLeft}
          alt="arrow left"
          onClick={() => toggleMenuIsVisible('startMenu')}
        />
        Create Portfolio
      </div>
      <img
        className={style.modal__create__portfolio__cross}
        src={cross}
        alt="cross"
        onClick={() => toggleMenuIsVisible('closeModal')}
      />
      <div className={style.body}>
        <div className={style.change__avatar__box__wrapper}>
          <p>Portfolio Avatar</p>
          <div className={style.change__avatar__box}>
            <span style={{ backgroundColor: selectedColor }}>{selectedEmoji}</span>
            <button onClick={() => toggleMenuIsVisible('changeAvatar')}>Change</button>
          </div>
        </div>
        <div className={style.formItem__wrapper}>
          <div className={style.formItem__label}>Portfolio Name</div>
          <div className={style.formItem__input__wrapper}>
            <input
              type="text"
              placeholder="Enter your portfolio name"
              value={portflolioNameValue}
              onChange={(e) => changePortfolioNameValue(e.target.value)}
            />
          </div>
          <div className={style.formItem__helpTip__wrapper}>0/24 characters</div>
        </div>
        <hr className={style.line} />
        <div className={style.editorForm__item__wrapper}>
          <div className={style.editorForm__item__text}>
            <div className={style.editorForm__item__title}>Count as my portfolio</div>
            <div className={style.editorForm__item__subTitle}>
              Assets in this portfolio will be included in total value
            </div>
          </div>
          <button>btn</button>
        </div>
        <div className={style.create__portfolio__btn__wrapper}>
          <button onClick={createPortfolioAndCloseModal}>Create Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePorfolioMenu;
