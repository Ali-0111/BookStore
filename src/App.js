import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Header from './components/Header';
import Category from './components/Category';
import BookWrapper from './components/Books/BookWrapper';

function App() {
  const [collection, setCollection] = useState([{ name: 'Math', author: 'Safari' }]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <BookWrapper collection={collection} setCollection={setCollection} />
              }
          />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
