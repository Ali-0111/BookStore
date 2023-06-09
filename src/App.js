import React from 'react';
import Header from './components/Header';
import AppRoutes from './components/Routing/RoutesConfig';
import './app.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
