import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookCollection: [],
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
          bookCollection: state.bookCollection.filter((element) => element !== action.payload),
        }
      ),
    },
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
