


import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
// import Home from './pages/Home';
import About from './pages/About';
import ScrollText from './components/common/ScrollText';
import FounderDesk from './components/about/FounderDesk';
import PrincipalDesk from './components/about/PrincipalDesk';
import SchoolManagement from './components/about/SchoolManagement';
import ManagingCommittee from './components/about/ManagingCommittee';
import Principles from './components/about/Principles';
import Infragallery from './components/about/Infragallery';
const Home = lazy(() => import('./pages/Home'));


const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">

      <ScrollText />
      <Navbar />
    
        
      <Routes>
        


        <Route path='/' element={<Home />} />
        <Route element={<About />}>
          <Route path='/about-us/founder-desk' element={<FounderDesk />} />
          <Route path='/about-us/principal-desk' element={<PrincipalDesk />} />
          <Route path='/about-us/school-management' element={<SchoolManagement />} />
          <Route path='/about-us/managing-committee' element={<ManagingCommittee />} />
          <Route path='/about-us/principles-policies' element={<Principles />} />
          <Route path='/about-us/infrastructure' element={<Infragallery />} />


        </Route>



      </Routes>

      <Footer />

      {/* <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Try />
            </Suspense>
          }
        />
      </Routes> */}



    </div>
  );
}

export default App;
