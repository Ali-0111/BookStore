import { createSlice } from '@reduxjs/toolkit';
import getAllBooksAPI, { addBookToAPI } from '../api/apiFunctions';

const initialState = {
  bookCollection: {},
  result: '',
};
const bookSlice = createSlice(
  {
    name: 'book',
    initialState,
    reducers: {
      addBook: (state, action) => (
        {
          ...state,
          bookCollection: [...state.bookCollection, action.payload],
        }),
      removeBook: (state, action) => (
        {
          ...state,
          bookCollection: state.bookCollection.filter((book) => book.id !== action.payload),
        }
      ),
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllBooksAPI.fulfilled, (state, action) => (
          {
            ...state,
            bookCollection: action.payload,
          }))
        .addCase(addBookToAPI.fulfilled, (_, action) => {
          console.log(action.payload);
        });
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
