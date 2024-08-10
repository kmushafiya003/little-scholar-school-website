import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Principles from './pages/About/Principles';

const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes>  */}
 <Principles/>
    </div>
  );
}

export default App;
