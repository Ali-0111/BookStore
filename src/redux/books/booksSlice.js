import { createSlice } from '@reduxjs/toolkit';
import getAllBooksAPI, { addBookToAPI, removeBookApi } from '../api/apiFunctions';

const initialState = {
  bookCollection: {},
  isLoading: false,
};
const bookSlice = createSlice(
  {
    name: 'book',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllBooksAPI.fulfilled, (state, action) => (
        {
          ...state,
          bookCollection: action.payload,
          isLoading: false,
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
            isLoading: false,
            bookCollection: {
              ...state.bookCollection,
              ...objectBook,
            },
          });
      });

      builder.addCase(removeBookApi.fulfilled, (state, { payload }) => {
        const allRecordsByIdProperty = {
          ...state.bookCollection,
        };

        delete allRecordsByIdProperty[payload];

        return (
          {
            ...state,
            isLoading: false,
            bookCollection: allRecordsByIdProperty,
          }
        );
      });

      builder.addCase(getAllBooksAPI.pending, (state) => (
        {
          ...state,
          isLoading: true,
        }));
      builder.addCase(addBookToAPI.pending, (state) => (
        {
          ...state,
          isLoading: true,
        }));
      builder.addCase(removeBookApi.pending, (state) => (
        {
          ...state,
          isLoading: true,
        }));
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
