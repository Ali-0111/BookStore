import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';

const BookList = ({ collection, filter }) => (
  <div className="book-list-wrapper">
    <h2>List of the Book...</h2>
    {
      collection.map((book) => (
        <BookInfo
          key={book.name}
          author={book.author}
          name={book.name}
          filter={filter}
        />
      ))
      }
    <hr />
  </div>
);

BookList.propTypes = {
  collection: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
  filter: PropTypes.func.isRequired,
};

export default BookList;
