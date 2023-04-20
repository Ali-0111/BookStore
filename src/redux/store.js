import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/booksSlice';

const store = configureStore({
  reducer: bookSlice.reducer,
});

export default store;
