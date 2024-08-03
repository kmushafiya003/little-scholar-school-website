
import './App.css';
import Gallery from './components/home/Gallery.jsx'
import Message from './components/home/Message.jsx';
import IconSection from './components/home/IconSection.jsx';
import Footer from './components/home/Footer.jsx';

function App() {
  return (

    <div className="w-screen min-h-screen overflow-x-hidden bg-black">
      <Gallery />
      <Message />
      <IconSection />
      <Footer />
    </div>

  );
}

export default App;
