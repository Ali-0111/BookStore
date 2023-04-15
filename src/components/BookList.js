import Book from './Book';

const BookList = () => {
  const books = [{
    id: 1,
    author: 'Ahmed',
    title: 'The History',
  },
  {
    id: 2,
    author: 'John',
    title: 'My Coding Journey',
  },
  {
    id: 3,
    author: 'Kamal',
    title: 'The life and challenges',
  }];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} category={book.category} />
      ))}
    </div>
  );
};

export default BookList;
