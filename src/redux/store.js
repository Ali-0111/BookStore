import { configureStore } from '@reduxjs/toolkit';
import bookSlice, { addBook, removeBook } from './books/booksSlice';

const store = configureStore({
  reducer: bookSlice.reducer,
});

// initial state
console.log(store.getState());

// add 4 book
store.dispatch(addBook('Math'));
store.dispatch(addBook('Physics'));
store.dispatch(addBook('Biology'));
store.dispatch(addBook('Chemistry'));
console.log(store.getState());

// remove one book, book remined: 3
store.dispatch(removeBook('Math'));
console.log(store.getState(), 'Math removed');

export default store;
