import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolio: [
    {
      id: 1,
      portfolioDescr: { color: '#8A3FFC', img: '🐻', name: 'testss' },
      coin: [
        {
          id: 'bitcoin',
          symbol: 'btc',
          name: 'Bitcoin',
          image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
          quantity: 1,
          avgPrice: 63263,
          currentPrice: [{ price: 63854, quantity: 1, date: '2024-09-25T08:33:03.177Z' }],
        },
      ],
      сurrentPriceOfCoins: { bitcoin: { usd: 63854 } },
      totalBalance: 0,
      costBasis: 0,
      selectedPortfolio: true,
      pieData: [],
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
        coin: [],
        totalBalance: 0,
        selectedPortfolio: false,
      });
    },
    selectPortfolio: (state, action) => {
      state.portfolio.map((p) =>
        action.payload.id === p.id ? (p.selectedPortfolio = true) : (p.selectedPortfolio = false),
      );
    },
    setCoin: (state, action) => {
      state.portfolio.forEach((p) => {
        if (p.selectedPortfolio) {
          if (p.coin.some((coin) => coin.id === action.payload.coin.id)) {
            // Оновлюємо існуючу монету
            p.coin.forEach((coin) => {
              if (coin.id === action.payload.coin.id) {
                coin.quantity = Number(coin.quantity) + Number(action.payload.coin.quantity);
                coin.currentPrice.push({
                  price: action.payload.coin.price,
                  quantity: action.payload.coin.quantity,
                  date: action.payload.coin.date,
                });
              }
            });

            let price = 0;

            // Проходимо по кожній монеті в портфоліо
            p.coin.forEach((coin) => {
              // Проходимо по кожній ціні цієї монети
              if (coin.id === action.payload.coin.id) {
                coin.currentPrice.forEach((priceObj) => {
                  price += Number(priceObj.quantity) * priceObj.price;
                });
              }
            });

            p.coin.forEach((coin) => {
              if (coin.id === action.payload.coin.id) {
                coin.avgPrice = price / coin.quantity;
              }
            });

            p.costBasis += action.payload.coin.price * action.payload.coin.quantity; // Додаємо базову суму
          } else {
            // Додаємо нову монету в портфоліо
            p.coin.push({
              id: action.payload.coin.id,
              symbol: action.payload.coin.symbol,
              name: action.payload.coin.name,
              image: action.payload.coin.image,
              quantity: action.payload.coin.quantity,
              avgPrice: action.payload.coin.price,
              currentPrice: [
                {
                  price: action.payload.coin.price,
                  quantity: action.payload.coin.quantity,
                  date: action.payload.coin.lastUpdated,
                },
              ],
            });
            p.costBasis += action.payload.coin.price * action.payload.coin.quantity; // Додаємо базову суму
          }
        }
      });
    },
    setCurrentPriceOfCoins: (state, action) => {
      state.portfolio.forEach((p) => {
        if (p.selectedPortfolio) {
          p.сurrentPriceOfCoins = { ...action.payload.newCoinPrice };
        }
      });
    },
    updateTotalBalance: (state) => {
      state.portfolio.forEach((p) => {
        if (p.selectedPortfolio) {
          p.totalBalance = 0;
          p.coin.forEach((coin) => {
            p.totalBalance += p.сurrentPriceOfCoins[coin.id].usd * coin.quantity;
          });
        }
      });
    },
  },
  setPieData: (state, action) => {
    state.pieData = { ...state.pieData, ...action.payload.data };
  },
});

export const {
  createPortfolio,
  selectPortfolio,
  setCoin,
  setCurrentPriceOfCoins,
  updateTotalBalance,
  setPieData,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
