import React from 'react';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';

import { Route, Routes } from 'react-router-dom';
import Principles from './components/About/Principles';

;
const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/founder-desk' element={<FounderDesk />} />
        

      </Routes>  */}
      
     
      


  {/* <AdmissionEnquiry/> */}
  {/* < Infragallery />
  < Infrastructure /> */}

 
<Principles/>
   
    </div>
  );
}

export default App;
