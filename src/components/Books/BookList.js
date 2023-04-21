import React from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';

const BookList = () => {
  const collection = useSelector((store) => (
    store.bookReducer.bookCollection));
  return (
    <div className="book-list-wrapper">
      <h2>List of the Book...</h2>
      {
        collection.map((book) => (
          <BookInfo
            key={book.id}
            author={book.author}
            id={book.id}
            name={book.title}
          />
        ))
        }
      <hr />
    </div>
  );
};
export default BookList;
