
import './App.css';
import MessageOne from './components/common/MessageOne';
import MessageTwo from './components/common/MessageTwo'
import HeroSection from './components/home/HeroSection';





function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
       <HeroSection />
      <MessageOne />
      <MessageTwo/>
 

      
    </div>
  );
}

export default App;
