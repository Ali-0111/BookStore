import { Routes, Route } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Category from './components/Category';
import BookWrapper from './components/Books/BookWrapper';

function App() {
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
