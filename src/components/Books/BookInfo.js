import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

const BookInfo = ({
  id, name, author,
}) => (
  <article>
    {/* div info */}
    <div className="info">
      <h2>{name}</h2>
      <p>{author}</p>
      <Buttons id={id} />
    </div>
    {/* div progroress */}
  </article>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
