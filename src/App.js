
import './App.css';
import Gallery from './components/home/Gallery.jsx'
import Message from './components/home/Message.jsx';
import IconSection from './components/home/IconSection.jsx';

function App() {
  return (

    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
      <Gallery />
      <Message />
      <IconSection />
      
    </div>

  );
}

export default App;
