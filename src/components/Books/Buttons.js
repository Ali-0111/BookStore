import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookApi } from '../../redux/api/apiFunctions';
import '../../styles/Buttons.css';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBookApi(id));
  };

  return (
    <>
      <button className="action-btn rob commentsBtn" type="button">Comments</button>
      <button className="action-btn rob deleteBtn" type="button" onClick={removeHandler}>Remove</button>
      <button className="action-btn rob editBtn" type="button">Edit</button>
    </>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Buttons;
