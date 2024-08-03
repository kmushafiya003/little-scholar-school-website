
import './App.css';
import Navbar from './components/common/Navbar.jsx';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home.jsx';


function App() {
  return (

    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>

  );
}

export default App;
