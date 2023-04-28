import React from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';

const BookList = () => {
  const { bookCollection } = useSelector((store) => (
    store.bookReducer));
  console.log('This is collection', bookCollection);
  return (
    <div className="book-list-wrapper">
      <h2>List of the Book...</h2>
      {
        Object.keys(bookCollection).map((id) => (
          <BookInfo
            key={id}
            author={bookCollection[id][0].author}
            id={id}
            name={bookCollection[id][0].title}
          />
        ))
        }
      <hr />
    </div>
  );
};
export default BookList;
