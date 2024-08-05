import React from 'react';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>



    </div>
  );
}

export default App;
