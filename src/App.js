import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
const FounderDesk = lazy(() => import('./components/About/FounderDesk'));
const PrincipalDesk = lazy(() => import('./components/About/PrincipalDesk'));
const SchoolManagement = lazy(() => import('./components/About/SchoolManagement'));
const ManagingCommittee = lazy(() => import('./components/About/ManagingCommittee'));
const Principles = lazy(() => import('./components/About/Principles'));
const Infragallery = lazy(() => import('./components/About/Infragallery'));


const Admission = lazy(() => import('./pages/Admission'));
const Helpdesk = lazy(() => import('./components/adimission/Helpdesk'));
const AdmissionProcedure = lazy(() => import('./components/adimission/AdmissionProcedure'));
const Registration = lazy(() => import('./components/adimission/Registration'));
const FeeStructure = lazy(() => import('./components/adimission/FeeStructure'));
const SchoolTiming = lazy(() => import('./components/adimission/SchoolTiming'));
const FAQ = lazy(() => import('./components/adimission/FQA'));


const StudentLife = lazy(() => import('./pages/StudentLIfe'));
const Academics =lazy(()=>('./components/student-life/academics'))
const Achievements = lazy(() => import('./components/student-life/achievement/Achievement'))


const App = () => {

  const location = useLocation();

  useEffect(()=> {
    console.log("Yaha Ayya")
    window.scrollTo({
      top: 10,
    
  });

  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollText />

      {/* ------ Dynamic button with flip animation --------- */}

      {/* <Dynamic3dButton
        text1="Front Text - Flip"
        text2="Back Text - Flip"
        className="flip-card"
        showIcon={true} //Show Icon
      /> */}

      {/* ------ Dynamic button with scale animation --------- */}

      {/* <Dynamic3dButton
        text1="Front Text - Scale"
        className="scale-card"
        showIcon={false} //Hide Icon
      /> */}

      <Navbar />

      <Suspense fallback={<div> <Loading /> </div>}>
        <Routes>

          {/* ------------ Home Page --------------- */}

          <Route path='/' element={<Home />} />

          {/* ------------ About Page --------------- */}

          <Route element={<About />}>
            <Route path='/about-us/founder-desk' element={<FounderDesk />} />
            <Route path='/about-us/principal-desk' element={<PrincipalDesk />} />
            <Route path='/about-us/school-management' element={<SchoolManagement />} />
            <Route path='/about-us/managing-committee' element={<ManagingCommittee />} />
            <Route path='/about-us/principles&policies' element={<Principles />} />
            <Route path='/about-us/infrastructure' element={<Infragallery />} />
          </Route>


          {/* -------------- Admission Page ------------------ */}

          <Route element={<Admission />}>
            <Route path='/admissions/admission-enquiry' element={<Helpdesk />} />
            <Route path='/admissions/admission-procedure' element={<AdmissionProcedure />} />
            <Route path='/admissions/registration' element={<Registration />} />
            <Route path='/admissions/fee-structure' element={<FeeStructure />} />
            <Route path='/admissions/school-timings' element={<SchoolTiming />} />
            <Route path='/admissions/faq' element={<FAQ />} />
          </Route>

          {/* -------------- Student Life ------------------ */}

          <Route element={<StudentLife/>}>
          <Route path='/student-life/achievements' element={<Achievements />} />
          </Route>

        </Routes>
      </Suspense>

      <ScrollTop />
      <Footer />

    </div>
  );
}

export default App;
