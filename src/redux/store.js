import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './portfolioSlice';
import modalSlice from './modalSlice';
import modalAddTransactionSlice from './modalAddTransactionSlice';
import dateAndTimeModalSlice from './dateAndTimeModalSlice';

export default configureStore({
  reducer: {
    portfolioData: portfolioSlice,
    modal: modalSlice,
    modalAddTransaction: modalAddTransactionSlice,
    dateAndTime: dateAndTimeModalSlice,
  },
});
