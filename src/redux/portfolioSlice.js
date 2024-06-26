import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolio: [
    {
      id: 1,
      portfolioDescr: { color: '#8A3FFC', img: '🐻', name: 'testss' },
      totalBalance: 1000,
      activePortfolio: true,
    },
  ],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export const {} = portfolioSlice.actions;

export default portfolioSlice.reducer;
