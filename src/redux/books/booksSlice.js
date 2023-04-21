import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookCollection: [
    {
      id: Date.now().toString(),
      title: 'History',
      author: 'Safari',
      category: 'NA',
    },
  ],
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
  },
);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
