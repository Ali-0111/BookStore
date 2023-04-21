import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './app.css';
import Header from './components/Header';
import Category from './components/Category';
import BookWrapper from './components/Books/BookWrapper';

function App() {
  const collection = useSelector((store) => (
    store.bookReducer.bookCollection));
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <BookWrapper collection={collection} />
              }
          />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
