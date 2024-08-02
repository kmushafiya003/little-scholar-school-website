import Message from './components/home/Message.jsx'
import './App.css';
import HeroSection from './components/home/HeroSection';




function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
       <HeroSection />

    
      <Message />
    </div>

 );
}

export default App;
