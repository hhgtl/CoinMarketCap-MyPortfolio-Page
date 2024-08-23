import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
  time: '',
  timeNow: '',
  openSelectTimeMenu: false,
};

const dateAndTimeModalSlice = createSlice({
  name: 'dateAndTime',
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.date = action.payload.date;
    },
    changeTime: (state, action) => {
      state.time = action.payload.time;
    },
    changeTimeNow: (state, action) => {
      state.timeNow = action.payload.time;
    },
    toggleSelectTimeMenu: (state, action) => {
      state.openSelectTimeMenu = action.payload.boolean;
    },
  },
});

export const { changeData, changeTime, toggleSelectTimeMenu, changeTimeNow } =
  dateAndTimeModalSlice.actions;

export default dateAndTimeModalSlice.reducer;
