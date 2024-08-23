import React from 'react';
import CreatePorfolioMenu from './CreatePorfolioMenu';
import { useDispatch, useSelector } from 'react-redux';
import { changePortfolioNameValue } from '../../../redux/modalSlice';
import { createPortfolio } from '../../../redux/portfolioSlice';

const CreatePorfolioMenuContainer = ({ toggleMenuIsVisible }) => {
  const { selectedColor, selectedEmoji, portflolioNameValue } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const createPortfolioAndCloseModal = () => {
    dispatch(
      createPortfolio({ color: selectedColor, img: selectedEmoji, name: portflolioNameValue }),
    );
    toggleMenuIsVisible('closeModal');
  };
  return (
    <CreatePorfolioMenu
      changePortfolioNameValue={(portflolioNameValue) =>
        dispatch(changePortfolioNameValue({ portflolioNameValue }))
      }
      selectedColor={selectedColor}
      selectedEmoji={selectedEmoji}
      toggleMenuIsVisible={toggleMenuIsVisible}
      portflolioNameValue={portflolioNameValue}
      createPortfolioAndCloseModal={() => createPortfolioAndCloseModal()}
    />
  );
};

export default CreatePorfolioMenuContainer;
