import React from 'react';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Helpdesk from './components/adimission/Helpdesk'
const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/founder-desk' element={<FounderDesk />} /> 
        

      </Routes>   */}
        <Helpdesk/>
 

    
    </div>
  );
}

export default App;
