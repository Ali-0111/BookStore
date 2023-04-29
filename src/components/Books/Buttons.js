import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookApi } from '../../redux/api/apiFunctions';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBookApi(id));
  };

  return (
    <>
      <button className="action-btn" type="button">Comments</button>
      <button className="action-btn" type="button" onClick={removeHandler}>Remove</button>
      <button className="action-btn" type="button">Edit</button>
    </>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Buttons;
