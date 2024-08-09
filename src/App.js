import React from 'react';
import './App.css';
import Registration from './components/adimission/Registration';
import AdmissionProcedure from './components/adimission/AdmissionProcedure';
import ManagingCommittee from './components/about/ManagingCommittee';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';

;
const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
        

      </Routes>  */}
      <Registration/>
     
      

    </div>
  );
}

export default App;
