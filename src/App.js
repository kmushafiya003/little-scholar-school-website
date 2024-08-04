import React from 'react';
import Home from './pages/Home';
// import ImageSlider from './components/home/ImageSlider.jsx';


import './App.css';
import Navbar from './components/common/Navbar';

const App = () => {
  return (


   

    <div className="w-screen min-h-screen overflow-x-hidden ">
      <Navbar />
      <Home />
      
     
    </div>
  );
}

export default App;
