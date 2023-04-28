import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './app.css';
import Header from './components/Header';
import Category from './components/Category';
import BookWrapper from './components/Books/BookWrapper';
import getAllBooksAPI from './redux/api/apiFunctions';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllBooksAPI());
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <BookWrapper />
              }
          />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
