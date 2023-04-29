import React from 'react';
import '../../styles/bookList.css';

// import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
// import getAllBooksAPI from '../../redux/api/apiFunctions';

const BookList = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllBooksAPI());
  // }, []);

  // const { bookCollection, isLoading } = useSelector((store) => (
  //   store.bookReducer));
  const bookCollection = {
    123: [{
      item_id: 3,
      title: 'History',
      author: 'Safari',
      category: 'N/A',
    }],
    124: [{
      item_id: 4,
      title: 'Math',
      author: 'Safari',
      category: 'N/A',
    }],
    125: [{
      item_id: 5,
      title: 'English',
      author: 'Safari',
      category: 'N/A',
    }],
  };
  console.log(Object.keys(bookCollection), bookCollection[123]);
  // if (isLoading) {
  //   return (
  //     <article>
  //       <h2>Loading Books...</h2>
  //     </article>
  //   );
  // }

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
