import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolio: [
    {
      id: 1,
      portfolioDescr: { color: '#8A3FFC', img: '🐻', name: 'testss' },
      totalBalance: 1000,
      selectedPortfolio: true,
    },
  ],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    createPortfolio: (state, action) => {
      const uniqueId = Date.now().toString(36) + Math.random().toString(36);
      state.portfolio.push({
        id: uniqueId,
        portfolioDescr: {
          color: action.payload.color,
          img: action.payload.img,
          name: action.payload.name,
        },
        totalBalance: 0,
        selectedPortfolio: false,
      });
    },
    selectPortfolio: (state, action) => {
      state.portfolio.map((p) =>
        action.payload.id === p.id ? (p.selectedPortfolio = true) : (p.selectedPortfolio = false),
      );
    },
  },
});

export const { createPortfolio, selectPortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
