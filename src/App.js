
import './App.css';

import Home from './pages/Home';
import { Routes , Route } from 'react-router-dom';

import Navbar from './components/common/Navbar.jsx';





function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar/>

      <Routes>

        <Route path='/'  element={<Home/>}/>
      </Routes>
    

       

    </div>

 );
}

export default App;
