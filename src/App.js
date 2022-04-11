import Particles from 'react-tsparticles';
import './App.css';
import Landing from './components/pages/About/Landing';
import NaviBar from './components/layouts/Navibar/NaviBar';
import TechStack from './components/pages/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Landing />
      <div className="flex-with-center">

      <TechStack />
      </div>
    </div>
  );
}

export default App;
