

import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ScrollText from './components/common/ScrollText';
import FounderDesk from './components/about/FounderDesk';
import PrincipalDesk from './components/about/PrincipalDesk';
import SchoolManagement from './components/about/SchoolManagement';
import ManagingCommittee from './components/about/ManagingCommittee';
import Principles from './components/about/Principles';
import Infragallery from './components/about/Infragallery';

import Admission from './pages/Admission';
import Helpdesk from './components/adimission/Helpdesk'
import AdmissionProcedure from './components/adimission/AdmissionProcedure';
import Registration from './components/adimission/Registration';
import FeeStructure from './components/adimission/FeeStructure';
import SchoolTiming from './components/adimission/SchoolTiming';
import FQA from './components/adimission/FQA';




import './App.css';

const App = () => {
  return (


    <div className="min-h-screen overflow-x-hidden ">

      <ScrollText />
      <Navbar />
    

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path = '/about-us' element={<About />}>
          <Route path='founder-desk' element={<FounderDesk />} />
          <Route path='principal-desk' element={<PrincipalDesk />} />
          <Route path='school-management' element={<SchoolManagement />} />
          <Route path='managing-committee' element={<ManagingCommittee />} />
          <Route path='principles-policies' element={<Principles />} />
          <Route path='infrastructure' element={<Infragallery />} />
        </Route>

        <Route path = '/admissions' element={<Admission/>}>
            <Route path = 'helpdesk' element = {<Helpdesk/>}></Route>
            <Route path = 'admissionprocedure' element={<AdmissionProcedure/>}></Route>
            <Route path = 'registration' element = {<Registration/>}></Route>
            <Route path = 'fee-structure' element={<FeeStructure/>}></Route>
            <Route path = 'school-timings' element = {<SchoolTiming/>}></Route>
            <Route path = 'faq' element = {<FQA/>}></Route>
        </Route>



      </Routes>

      <Footer />



    </div>
  );
}

export default App;
