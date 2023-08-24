import {createSlice} from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    wishList: [],
    currentlyReading: [],
  },
  reducers: {
    addToWishList: (state, {payload}) => {
      state.wishList.push(payload);
    },
    removeFromWishList: (state, {payload}) => {
      state.wishList = state.wishList.filter(bookId => bookId !== payload);
    },
    addToCurrentlyReading: (state, {payload}) => {
      state.currentlyReading.push(payload);
    },
    removeFromCurrentlyReading: (state, {payload}) => {
      state.currentlyReading = state.currentlyReading.filter(
        bookId => bookId !== payload,
      );
    },
  },
});

export const {
  addToWishList,
  removeFromWishList,
  addToCurrentlyReading,
  removeFromCurrentlyReading,
} = booksSlice.actions;

export default booksSlice.reducer;
