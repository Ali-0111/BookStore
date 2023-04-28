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
      <button type="button">Comments</button>
      <button type="button" onClick={removeHandler}>Remove</button>
      <button type="button">Edit</button>
    </>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Buttons;
