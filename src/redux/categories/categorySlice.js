import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryCollection: [],
  status: 'UnderConstruction',
};
const categorySlice = createSlice(
  {
    name: 'category',
    initialState,
    reducers: {
      checkStatus: (state) => (state.status),
    },
  },
);

export const { checkStatus } = categorySlice.actions;
export default categorySlice;