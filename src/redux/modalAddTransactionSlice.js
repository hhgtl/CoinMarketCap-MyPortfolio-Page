import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinListAT: [],
  selectCoin: {},
  openSelectCoinWindow: false,
  date: '',
  time: '',
  typeTime: 'AM',
  reformattedDate: '',
  transactionMode: 'buy',
  priceSelectCoin: 0,
  quantity: '',
};

const modalAddTransactionSlice = createSlice({
  name: 'modalAddTransaction',
  initialState,
  reducers: {
    setCoinListAT: (state, action) => {
      state.coinListAT = action.payload.coinList;
    },
    setSelectCoinAT: (state, action) => {
      state.selectCoin = action.payload.coin;
      state.priceSelectCoin = action.payload.coin.price;
    },
    toggleOpenSelectCoinWindow: (state, action) => {
      action.payload.type === 'close'
        ? (state.openSelectCoinWindow = false)
        : (state.openSelectCoinWindow = true);
    },
    setDataAndTime: (state, action) => {
      state.date = action.payload.date;
      state.time = action.payload.time;

      if (Number(action.payload.time.replace(':', '')) <= 1145) {
        state.typeTime = 'AM';
      } else {
        state.typeTime = 'PM';
      }

      let reformattedDate = '';
      const mounth = [
        'Jun',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      mounth.forEach((m, i) => {
        i++;
        if (Number(state.date.slice(0, 2)) === i) {
          reformattedDate = `${m} ${state.date.slice(3, 5)}, ${state.date.slice(6, 10)}, ${
            action.payload.time
          } ${state.typeTime}`;
        }
      });
      state.reformattedDate = reformattedDate;
    },
    toggleAddTransferMenu: (state, action) => {
      switch (action.payload.type) {
        case 'BuyAndSellMenu':
          state.buyAndSellMenuIsVisible = !state.buyAndSellMenuIsVisible;
          break;
        case 'TransferMenu':
          state.transferMenuIsVisible = !state.transferMenuIsVisible;
          break;
        case 'DataAndTimeMenu':
          state.dateAndTimeMenuIsVisible = !state.dateAndTimeMenuIsVisible;
      }
    },
    setTransactionMode: (state, action) => {
      state.transactionMode = action.payload.mode;
    },
    changePriceSelectCoin: (state, action) => {
      state.priceSelectCoin = action.payload.price;
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload.quantity;
    },
  },
});

export const {
  setCoinListAT,
  setSelectCoinAT,
  toggleOpenSelectCoinWindow,
  setDataAndTime,
  toggleAddTransferMenu,
  setTransactionMode,
  changePriceSelectCoin,
  changeQuantity,
} = modalAddTransactionSlice.actions;

export default modalAddTransactionSlice.reducer;
