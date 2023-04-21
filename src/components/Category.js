import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';

const Category = () => {
  const dispatch = useDispatch();
  const status = useSelector((store) => (store.categoryReducer));
  return (
    <main>
      <div>
        <h2>
          {status.isChecked ? status.status : ''}
        </h2>
        <button
          className="status-btn"
          onClick={() => { dispatch(checkStatus()); }}
          type="button"
        >
          {status.isChecked ? 'Checked' : 'Check Status'}
        </button>
      </div>
    </main>
  );
};
export default Category;
