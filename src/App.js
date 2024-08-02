
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden ">
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>


      </Routes>

 
    </div>




  );
}

export default App;
