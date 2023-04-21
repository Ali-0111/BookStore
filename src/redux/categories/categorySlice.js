import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryCollection: [],
  status: 'UnderConstruction',
  isChecked: false,
};
const categorySlice = createSlice(
  {
    name: 'category',
    initialState,
    reducers: {
      checkStatus: (state) => (
        { ...state, status: 'UnderConstruction', isChecked: true }),
    },
  },
);

export const { checkStatus } = categorySlice.actions;
export default categorySlice;
