import React from 'react';
import Message from './components/home/Message.jsx';
import ImageSlider from './components/home/ImageSlider.jsx';
import HeroSection from './components/home/HeroSection.jsx';
import Welcome from './components/home/Welcome.jsx';

import './App.css';

function App() {
  

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
      <HeroSection />
      <Welcome />
      <Message />
      <ImageSlider />
      
     
        
      </div>
    
  );
}

export default App;
