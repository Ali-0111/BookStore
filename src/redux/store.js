import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookSlice from './books/booksSlice';
import categorySlice from './categories/categorySlice';

const rootReducer = combineReducers({
  bookReducer: bookSlice.reducer,
  categoryReducer: categorySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
