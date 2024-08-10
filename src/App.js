import React from 'react';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Principles from './pages/About/Principles';
=======
import './App.css';

//import Infragallery from '../src/components/about/Infragallery'
//import Infrastructure  from '../src/components/home/infrastructure'
//import { Route, Routes } from 'react-router-dom';
//import StudentForm from '../../src/components/adimission/Helpdesk'
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
//import StudentForm from './components/adimission/Helpdesk';

>>>>>>> 971eaaa85780cd9f94c9c6059d1d311c34277282

;
const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">
       {/* <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
      </Routes>  */}
 <Principles/>
=======
        <Route path='/founder-desk' element={<FounderDesk />} />
        

      </Routes>  */}
      
     
      


  {/* <AdmissionEnquiry/> */}
  {/* < Infragallery />
  < Infrastructure /> */}

 

    
>>>>>>> 971eaaa85780cd9f94c9c6059d1d311c34277282
    </div>
  );
}

export default App;
