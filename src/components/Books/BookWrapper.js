import React, { useState } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const BookWrapper = () => {
  const [collection, setCollection] = useState([]);

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
export default BookWrapper;
