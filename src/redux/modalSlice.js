// toggleMenuIsVisible – універсальний метод для переключання між модальними вікнами.
// Приймає в action об'єкт з modalType. Приймає один з чотирьох можливих типів: 'startMenu', 'createPortfolio', 'changeAvatar', 'closeModal'.

// toggleTestSelectedColor в компоненті ColorCircle.jsx при наведенні на колір компонент відправляє
// його в testSelectedColor, де потім в компоненті ChangeAvatar.jsx перевіряється, чи testSelectedColor
// має в собі колір, і якщо має, підставляє його і відправляє в компонент ColorCircle.jsx.
// Якщо курсор забрали і не вибрали колір, тоді в компоненті ColorCircle.jsx підставляється вибраний колір з selectedColor.

// selectColor з компонента ColorCircle.jsx: приходить колір і міняє значення в selectedColor.

// toggleTestSelectEmoji в компоненті Emoji.jsx: при наведенні на емодзі компонент відправляє
// action з емодзі в testSelectEmoji. В компоненті ChangeAvatar.jsx
// перевіряється, чи в testSelectEmoji є емодзі, і якщо є, то підставляє емодзі і відправляє його в Emoji.jsx.

// selectEmoji з компонента Emoji.jsx приходить в action емодзі і міняє значення в selectedEmoji
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsVisible: false, // Включити модальне вікно
  startMenuIsVisible: false, // Включити стартове вікно
  createPortfolioMenuIsVisible: false, // Включити вікно для створення портфоліо
  changeAvatarMenuIsVisible: false, // Включити вікно для зміни аватарки портфоліо
  selectCoinMenuIsVisible: false,
  addTransactionMenuIsVisible: false,
  dateAndTimeMenuIsVisible: false,
  avatarBackgroundColor: [
    '#8A3FFC',
    '#45EFE5',
    '#23DCF5',
    '#F5B97F',
    '#16C784',
    '#FF775F',
    '#EA3943',
    '#808A9D',
  ],
  selectedColor: '#8A3FFC',
  testSelectedColor: '',
  emojisImg: [
    '🚀',
    '🔥',
    '❤️',
    '👻',
    '⚡',
    '🔑',
    '⚒️',
    '🔶',
    '🔷',
    '💎',
    '💰',
    '🏦',
    '💵',
    '🔔',
    '🦄',
    '🦊',
    '🐶',
    '🐰',
    '🐯',
    '🐻',
    '🐮',
    '🍕',
    '🍔',
    '💊',
    '👑',
    '🌈',
    '🤖',
    '🌕',
  ],
  selectedEmoji: '🚀',
  testSelectEmoji: '',
  portflolioNameValue: '',
  coinList: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleMenuIsVisible: (state, action) => {
      if (action.payload.modalType === 'startMenu') {
        // Включити стартове меню
        state.modalIsVisible = true;
        state.startMenuIsVisible = true;
        state.createPortfolioMenuIsVisible = false;
        state.changeAvatarMenuIsVisible = false;
      } else if (action.payload.modalType === 'createPortfolio') {
        // Включити модальне вікно для створення портфоліо
        state.modalIsVisible = true;
        state.startMenuIsVisible = false;
        state.createPortfolioMenuIsVisible = true;
        state.changeAvatarMenuIsVisible = false;
      } else if (action.payload.modalType === 'changeAvatar') {
        // Включити модальне вікно для зміни аватарки портфоліо
        state.modalIsVisible = true;
        state.startMenuIsVisible = false;
        state.createPortfolioMenuIsVisible = false;
        state.changeAvatarMenuIsVisible = true;
      } else if (action.payload.modalType === 'selectCoin') {
        // Включити модальне вікно для додавання транзакціїї
        state.modalIsVisible = true;
        state.startMenuIsVisible = false;
        state.createPortfolioMenuIsVisible = false;
        state.changeAvatarMenuIsVisible = false;
        state.selectCoinMenuIsVisible = true;
      } else if (action.payload.modalType === 'addTransaction') {
        state.modalIsVisible = true;
        state.addTransactionMenuIsVisible = true;
        state.selectCoinMenuIsVisible = false;
        state.dateAndTimeMenuIsVisible = false;
      } else if (action.payload.modalType === 'dateAndTime') {
        state.addTransactionMenuIsVisible = false;
        state.dateAndTimeMenuIsVisible = true;
      } else if (action.payload.modalType === 'closeModal') {
        // Закрити модальне вікно
        state.modalIsVisible = false;
        state.startMenuIsVisible = false;
        state.createPortfolioMenuIsVisible = false;
        state.changeAvatarMenuIsVisible = false;
        state.selectCoinMenuIsVisible = false;
        state.addTransactionMenuIsVisible = false;
        state.dateAndTimeMenuIsVisible = false;
        state.selectedColor = '#8A3FFC';
        state.selectedEmoji = '🚀';
        state.portflolioNameValue = '';
      }
    },
    toggleTestSelectedColor: (state, action) => {
      // При наведині відображає тестовий  колір в редакторі аватарки
      state.testSelectedColor.length === 0
        ? (state.testSelectedColor = action.payload.color)
        : (state.testSelectedColor = '');
    },
    selectColor: (state, action) => {
      // Вибрати колір
      state.selectedColor = action.payload.color;
    },
    toggleTestSelectEmoji: (state, action) => {
      // При наведині відображає тестову емодзі в редакторі аватарки
      state.testSelectEmoji.length === 0
        ? (state.testSelectEmoji = action.payload.emoji)
        : (state.testSelectEmoji = '');
    },
    selectEmoji: (state, action) => {
      // Вибрати емодзі
      state.selectedEmoji = action.payload.emoji;
    },
    changePortfolioNameValue: (state, action) => {
      // Змінити назву портфоліо
      state.portflolioNameValue = action.payload.portflolioNameValue;
    },
    setCoinList: (state, action) => {
      state.coinList = action.payload.coinList;
    },
  },
});

export const {
  toggleMenuIsVisible,
  toggleTestSelectedColor,
  toggleTestSelectEmoji,
  selectColor,
  selectEmoji,
  changePortfolioNameValue,
  setCoinList,
} = modalSlice.actions;

export default modalSlice.reducer;
