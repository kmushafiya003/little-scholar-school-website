import React from 'react';
import Home from './pages/Home/Home';
import './App.css';
import FQA from './components/adimission/FQA';




const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes>  */}
      <FQA/>
  
    </div>
  );
}

export default App;
