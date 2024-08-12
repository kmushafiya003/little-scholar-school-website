import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollText from './components/common/ScrollText';
import Loading from './components/common/Loading';
import ScrollTop from './components/common/ScrollTop';
import Dynamic3dButton from './components/common/Dynamic3dButton';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const FounderDesk = lazy(() => import('./components/about/FounderDesk'));
const PrincipalDesk = lazy(() => import('./components/about/PrincipalDesk'));
const SchoolManagement = lazy(() => import('./components/about/SchoolManagement'));
const ManagingCommittee = lazy(() => import('./components/about/ManagingCommittee'));
const Principles = lazy(() => import('./components/about/Principles'));
const Infragallery = lazy(() => import('./components/about/Infragallery'));
const Admission = lazy(() => import('./pages/Admission'));
const Helpdesk = lazy(() => import('./components/adimission/Helpdesk'));
const AdmissionProcedure = lazy(() => import('./components/adimission/AdmissionProcedure'));
const Registration = lazy(() => import('./components/adimission/Registration'));
const FeeStructure = lazy(() => import('./components/adimission/FeeStructure'));
const SchoolTiming = lazy(() => import('./components/adimission/SchoolTiming'));
const FAQ = lazy(() => import('./components/adimission/FQA'));


const App = () => {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollText />
      
      {/* <Dynamic3dButton /> */}
{/*  --------this code used to flip the card and show front-text, back-text and icon----------
      <Dynamic3dButton
        text1="Front Text - Flip"
        text2="Back Text - Flip"
        className="flip-card"
        showIcon={true} // Icon is shown
      />
---------------this code is used to scale the code and disable the flip and icon
     
      <Dynamic3dButton
        text1="Front Text - Scale"
        className="scale-card"
        showIcon={false} // Icon is hidden
      />
       */}
      <Navbar />

      <Suspense fallback={<div> <Loading /> </div>}>
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

          <Route element={<Admission />}>
            <Route path='/admissions/admission-enquiry' element={<Helpdesk />} />
            <Route path='/admissions/admission-procedure' element={<AdmissionProcedure />} />
            <Route path='/admissions/registration' element={<Registration />} />
            <Route path='/admissions/fee-structure' element={<FeeStructure />} />
            <Route path='/admissions/school-timings' element={<SchoolTiming />} />
            <Route path='/admissions/faq' element={<FAQ />} />


          </Route>

        </Routes>
      </Suspense>

      <ScrollTop />
      <Footer />

    </div>
  );
}

export default App;
