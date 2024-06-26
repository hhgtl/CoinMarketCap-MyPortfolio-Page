import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './portfolioSlice';
import modalSlice from './modalSlice';

export default configureStore({
  reducer: {
    portfolioData: portfolioSlice,
    modal: modalSlice,
  },
});
