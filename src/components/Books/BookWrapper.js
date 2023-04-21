import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../redux/books/booksSlice';
import AddBook from './AddBook';
import BookList from './BookList';

const BookWrapper = ({ collection }) => {
  const dispatch = useDispatch();
  const update = (bookName, authorName) => (
    dispatch(addBook({ name: bookName, author: authorName })));

  const filter = (name) => {
    dispatch(removeBook(name));
  };

  return (
    <main>
      <BookList collection={collection} filter={filter} />
      <AddBook update={update} />
    </main>
  );
};
BookWrapper.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default BookWrapper;
