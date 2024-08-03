import React from 'react';
import Message from './components/home/Message.jsx';
// import ImageSlider from './components/home/ImageSlider.jsx';
import HeroSection from './components/home/HeroSection.jsx';
import Welcome from './components/home/Welcome.jsx';
import Infrastructure from './components/home/infrastructure.jsx';
import Faculty from './components/home/faculty.jsx';

import './App.css';

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
      <HeroSection />
      <Welcome />
      <Message />
      <Infrastructure />
      <Faculty />
    </div>
  );
}

export default App;
