import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import './styles/app.css';

function App() {
  return (
    <div className="app-wrapper">
      <h2 className="title">Hi</h2>
      <Routes>
        <Route path="/" exact element={<Categories />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
