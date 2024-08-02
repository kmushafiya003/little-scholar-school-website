
import './App.css';
import HeroSection from './components/home/HeroSection';
import Message from './components/home/Message';
import Welcome from './components/home/Welcome';







function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
       <HeroSection/>
      <Welcome />
      <Message />
     



    </div>
  );
}

export default App;
