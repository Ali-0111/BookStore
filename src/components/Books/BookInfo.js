import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

const BookInfo = ({
  id, name, author,
}) => (
  <article className="rob">
    <div className="info">
      <h2 className="title">{name}</h2>
      <p className="author">{author}</p>
      <Buttons id={id} />
    </div>
    <div className="progressContainer">
      <div className="progressBar">
        <div className="progressBarContent" />
      </div>
      <p className="percentage mont">0%</p>
      <p className="completed mont">Completed</p>
    </div>
    <div className="chapterCont">
      <p className="curChap rob">CURRENT CHAPTER</p>
      <p className="chapter rob">Introduction</p>
      <button className="updateProgressBtn rob" type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </article>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
