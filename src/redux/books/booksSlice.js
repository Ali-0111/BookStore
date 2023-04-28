import { createSlice } from '@reduxjs/toolkit';
import getAllBooksAPI, { addBookToAPI } from '../api/apiFunctions';

const initialState = {
  bookCollection: {},
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
      builder.addCase(getAllBooksAPI.fulfilled, (state, action) => (
        {
          ...state,
          bookCollection: action.payload,
        }));
      builder.addCase(addBookToAPI.fulfilled, (state, { payload }) => {
        const objectBook = {};
        objectBook[payload.item_id] = [
          {
            author: payload.author,
            title: payload.title,
            category: payload.category,
          },
        ];

        return (
          {
            ...state,
            ...objectBook,
          });
      });
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
