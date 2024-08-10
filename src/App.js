import React from 'react';
<<<<<<< HEAD
import Home from './pages/Home';
import Navbar from './components/common/Navbar';

import { Route, Routes } from 'react-router-dom';
import Principles from './components/About/Principles';

;
=======
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Helpdesk from './components/adimission/Helpdesk'
>>>>>>> a5f69e1363b9a484b32e941f0bc99d0ccce8a149
const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/founder-desk' element={<FounderDesk />} /> 
        

      </Routes>   */}
        <Helpdesk/>
 
<Principles/>
   
    </div>
  );
}

export default App;
