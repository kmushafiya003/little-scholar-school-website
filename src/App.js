import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollText from './components/common/ScrollText';
import Loading from './components/common/Loading';

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
      <Navbar />

      <Suspense fallback={<div> <Loading/> </div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />}>
            <Route path='founder-desk' element={<FounderDesk />} />
            <Route path='principal-desk' element={<PrincipalDesk />} />
            <Route path='school-management' element={<SchoolManagement />} />
            <Route path='managing-committee' element={<ManagingCommittee />} />
            <Route path='principles-policies' element={<Principles />} />
            <Route path='infrastructure' element={<Infragallery />} />
          </Route>

          <Route path='/admissions' element={<Admission />}>
            <Route path='helpdesk' element={<Helpdesk />} />
            <Route path='admissionprocedure' element={<AdmissionProcedure />} />
            <Route path='registration' element={<Registration />} />
            <Route path='fee-structure' element={<FeeStructure />} />
            <Route path='school-timings' element={<SchoolTiming />} />
            <Route path='faq' element={<FAQ />} />
          </Route>
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
