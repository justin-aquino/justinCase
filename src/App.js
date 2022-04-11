import Particles from 'react-tsparticles';
import './App.css';
import About from './components/pages/About/About';
import NaviBar from './components/layouts/Navibar/NaviBar';
import TechStack from './components/pages/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <NaviBar />
      <About />
      <div className="flex-with-center">

      <TechStack />
      </div>
    </div>
  );
}

export default App;
