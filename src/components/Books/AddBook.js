import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const update = (bookName, authorName) => (
    dispatch(addBook(
      {
        title: bookName,
        author: authorName,
        category: 'NA',
        id: Date.now().toString(),
      },
    )));
  const submitHandler = (e) => {
    e.preventDefault();
    update(bookName, authorName);
    setBookName('');
  };

  const inputHandler = (e) => {
    // input handler is for taking bookname
    setBookName(e.target.value);
  };

  const selectHandler = (e) => {
    // selectHandler is for selecting authors
    setAuthorName(e.target.value);
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={submitHandler}>
        <input
          type="text"
          value={bookName}
          placeholder="Book Name"
          onChange={inputHandler}
          required
        />

        <select required onChange={selectHandler}>
          <option value="">--Select author--</option>
          <option value="John">John</option>
          <option value="Ahmad">Ahmad</option>
          <option value="Ronaldo">Ronaldo</option>
          <option value="Bosh">Bosh</option>
        </select>
        <button type="submit">Add</button>

      </form>
    </>
  );
};

export default AddBook;
