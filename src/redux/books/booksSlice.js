import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookCollection: [],
};
const bookSlice = createSlice(
  {
    name: 'book',
    initialState,
    reducers: {
      addBook: (state) => (
        [...state, { name: 'Math', author: 'safari' }]
      ),
    },
  },
);

export default bookSlice;
