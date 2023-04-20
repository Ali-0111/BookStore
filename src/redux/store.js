/* eslint-disable no-console */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookSlice, { addBook, removeBook } from './books/booksSlice';
import categorySlice, { checkStatus } from './categories/categorySlice';

const rootReducer = combineReducers({
  bookReducer: bookSlice.reducer,
  categoryReducer: categorySlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// initial state
console.log('initial state for 2 reducer', store.getState());

// add 4 book
store.dispatch(addBook('Math'));
store.dispatch(addBook('Physics'));
store.dispatch(addBook('Biology'));
store.dispatch(addBook('Chemistry'));
console.log('added 4 book', store.getState().bookReducer);

// remove one book, book remined: 3
store.dispatch(removeBook('Math'));
console.log('Math removed', store.getState().bookReducer);

//                       section book slice end

store.dispatch(checkStatus());
console.log('status for catergory:', store.getState().categoryReducer);
export default store;
/* eslint-enable no-console */
