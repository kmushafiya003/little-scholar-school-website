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
//import TransferCertificateForm from './components/student-life/Transfer-certificate/Transfer-certificate.jsx';


// -------- Home -------

const Home = lazy(() => import('./pages/Home'));


// ------ About -----------

const About = lazy(() => import('./pages/About'));
const FounderDesk = lazy(() => import('./components/about/FounderDesk.jsx'));
const PrincipalDesk = lazy(() => import('./components/about/PrincipalDesk.jsx'));
const SchoolManagement = lazy(() => import('./components/about/SchoolManagement.jsx'));
const ManagingCommittee = lazy(() => import('./components/about/ManagingCommittee.jsx'));
const Principles = lazy(() => import('./components/about/Principles.jsx'));
const Infragallery = lazy(() => import('./components/about/Infragallery.jsx'));

// ------------ Admission -------

const Admission = lazy(() => import('./pages/Admission'));
const Helpdesk = lazy(() => import('./components/adimission/Helpdesk'));
const AdmissionProcedure = lazy(() => import('./components/adimission/AdmissionProcedure'));
const Registration = lazy(() => import('./components/adimission/Registration'));
const FeeStructure = lazy(() => import('./components/adimission/FeeStructure'));
const SchoolTiming = lazy(() => import('./components/adimission/SchoolTiming'));
const FAQ = lazy(() => import('./components/adimission/FQA'));


// ------------ Student Life ------------

const StudentLife = lazy(() => import('./pages/StudentLIfe'));
const Academics =lazy(()=>import('./components/student-life/academics/Academics.jsx'))
const Cocurricular=lazy(()=>import('./components/student-life/co-curricular/Cocurricular.jsx'))
const Sociocultural=lazy(()=>import('./components/student-life/sociocultural/SocioCultural'))
const Counselling=lazy(()=>import('./components/student-life/counselling/Counselling.jsx'))
const Sports =lazy(()=>import('./components/student-life/sports/Sports.jsx'))
const Achievements = lazy(() => import('./components/student-life/achievement/Achievement'));
const Topper = lazy(() => import('./components/student-life/toppers/Topper'));
const EventCalendar = lazy (() => import('./components/student-life/events/EventCalander'))
const Cabinet = lazy(()=> import('./components/student-life/cabinet/CabinetYear.jsx'))
const TransferCertificate = lazy(()=> import('./components/student-life/Transfer-certificate/TransferCertificate.jsx'))

// -------------- News & Calendar ---------------

const NewsCalendar = lazy(()=> import('./pages/NewsCalendar.jsx'))
const StudentHandBook = lazy(() => import('./components/news&calendar/StudentHandbook.jsx'));
const ScholarTimes = lazy(() => import('./components/news&calendar/scholar/ScholarTimes.jsx'));

// ----------- students (for summer camp) --------------

const Students = lazy(()=> import('./pages/Students.jsx'));
const SummerCampConsent = lazy(()=> import('./components/news&calendar/student/SummerCampConsent.jsx'));
const SummerCamp = lazy(() => import('./components/news&calendar/student/SummerCamp.jsx'))


// ------------ Mandatory Disclosure ----------
const MandatoryDisclosure = lazy(() => import('./pages/MandatoryDisclosure.jsx'))
const BookList  = lazy(() => import('./components/MandatoryDisclosure/BookList.jsx'))
const SafetyCertificates = lazy(() => import('./components/MandatoryDisclosure/SafetyCertificates.jsx'))

// ------------- Contact ------------

const Contact = lazy(()=> import('./pages/Contact.jsx'));



const App = () => {

  const location = useLocation();

  useEffect(()=> {
    
    window.scrollTo({
      top: 10,
    
  });

  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollText />
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
          <Route path='/student-life/academics' element={<Academics/>}/>
          <Route path='/student-life/sports' element={<Sports/>}/>
          <Route path='/student-life/co-curricular' element={<Cocurricular/>}/>
          <Route path='/student-life/social-cultural&development' element={<Sociocultural/>}/>
          <Route path='/student-life/Counselling' element={<Counselling/>}/>
          <Route path='/student-life/achievements' element={<Achievements />} />
          <Route path='/student-life/events' element={<EventCalendar />} />
          <Route path='/student-life/toppers' element={<Topper />} />
          <Route path='/student-life/cabinet' element={<Cabinet/>}/>
          <Route path='/student-life/Transfer-certificate' element={<TransferCertificate/>}/>
        
          </Route>


          {/* --------------- News & Calendar -------------------- */}

          <Route element={<NewsCalendar/>}>
          <Route path='/news&calendar/student-handbook' element={<StudentHandBook/>}/>
          <Route path='/news&calendar/scholars-times' element={<ScholarTimes/>}/>
          </Route>


          {/* ------------------- Students ( for summer camp -----------) */}

          <Route element={<Students/>}>

          <Route path='/summer-consent-form' element={<SummerCampConsent/>}/>
          <Route path='/summer-camp-form' element={<SummerCamp/>}/>

          </Route>


           


           {/* -------------- Mandatory Disclosure ------------------ */}

           <Route element={<MandatoryDisclosure/>}>
          <Route path='/mandatory-disclosures/booklist' element={<BookList />} />
          <Route path='/mandatory-disclosures/safety-certificate&affiliations' element={<SafetyCertificates/>}/>
        
          </Route>


          {/* ------------------- Contact us page -------------------- */}

          <Route path='/contact-us' element={<Contact/>}/>


        </Routes>
      </Suspense>

      <ScrollTop />
      <Footer />

     

    </div>
  );
}

export default App;
