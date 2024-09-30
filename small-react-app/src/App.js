


import Home from '../src/components/home'
import React from 'react';
import { Routes, Route } from 'react-router';
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
