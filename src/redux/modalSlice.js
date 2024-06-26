import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalCreatePortfolioIsVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalCreatePortfolio: (state) => {
      state.modalCreatePortfolioIsVisible = !state.modalCreatePortfolioIsVisible; // Переключатель видимості модального вікна для створювання портфеля
    },
  },
});

export const { toggleModalCreatePortfolio } = modalSlice.actions;

export default modalSlice.reducer;
