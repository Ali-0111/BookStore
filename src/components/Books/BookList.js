import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
import getAllBooksAPI from '../../redux/api/apiFunctions';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAPI());
  }, []);

  const { bookCollection, isLoading } = useSelector((store) => (
    store.bookReducer));

  if (isLoading) {
    return (
      <article>
        <h2>Loading Books...</h2>
      </article>
    );
  }

  return (
    <div className="book-list-wrapper">
      <h2>List of the Book: </h2>
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
