import React from 'react';
import Home from './pages/Home';
import './App.css';
import AdmissionProcedure from './pages/AdmissionProcedure';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">

      <AdmissionProcedure/>

      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
     
   



    </div>
  );
}

export default App;
