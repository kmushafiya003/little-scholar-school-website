import React from 'react';
// import Home from './pages/Home/Home';
// import { Routes , Route } from 'react-router-dom';
import './App.css';
import AdmissionProcedure from './components/adimission/AdmissionProcedure';






const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden font-open-sans">
       {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes>  */}
      <AdmissionProcedure/>
    
  
    </div>
  );
}

export default App;
