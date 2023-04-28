import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../../redux/api/apiFunctions';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const update = (bookName, authorName) => {
    dispatch(
      addBookToAPI(
        {
          item_id: Date.now().toString(),
          title: bookName,
          author: authorName,
          category: 'N/A',
        },
      ),
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    update(bookName, authorName);
    setBookName('');
    setAuthorName('');
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

        <input
          type="text"
          value={authorName}
          placeholder="Author Name"
          onChange={selectHandler}
          required
        />

        <button type="submit">Add</button>

      </form>
    </>
  );
};

export default AddBook;
