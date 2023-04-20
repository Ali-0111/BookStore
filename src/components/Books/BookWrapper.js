import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import BookList from './BookList';

const BookWrapper = ({ collection, setCollection }) => {
  const update = (bookName, authorName) => {
    setCollection([...collection,
      { name: bookName, author: authorName }]);
  };

  const filter = (name) => {
    const newCol = collection.filter((object) => object.name !== name);
    setCollection(newCol);
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
  setCollection: PropTypes.func.isRequired,
};
export default BookWrapper;
