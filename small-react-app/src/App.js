


import Home from '../src/components/home'
import Login from './components/login';
import React from 'react';
import { Routes, Route } from 'react-router';
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
