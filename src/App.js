import './App.css';
import Landing from './components/pages/About/Landing';
import NaviBar from './components/layouts/Navibar/NaviBar';
import TechStack from './components/pages/TechStack/TechStack';
import ProjectList from './components/pages/Portfolio/ProjectList';
import { useState } from 'react';

const App = () => {

  const [projects, setProjects] = useState([
    {
      name: "KAT Inventory Management System",
      image: "katims.png",
      deployedLink: "https://elegant-gumption-829ed0.netlify.app/contact",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
    {
      name: "LFG- Looking For Group",
      image: "lfg.png",
      deployedLink: "https://boisterous-crostata-b66bd1.netlify.app/",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
    {
      name: "Little Juans",
      image: "lfg.png",
      deployedLink: "url here",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
    {
      name: "Anime-Bakari",
      image: "lfg.png",
      deployedLink: "url here",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
    {
      name: "Beer House",
      image: "beer.png",
      deployedLink: "https://beer-house.herokuapp.com/",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
    {
      name: "Keylometer/ Minute",
      image: "keylo.png",
      deployedLink: "https://justin-aquino.github.io/speed-typer/",
      username: "admin",
      password: "admin",
      githubUrl: "github here"
    },
  ])

  return (
    <div className="App">
      <NaviBar />
      <Landing />
      <div className="flex-with-center" id="tech-stack">
        <TechStack />
      </div>
      <div id="project">
        <ProjectList projects={projects} />
      </div>
        
    </div>
  );
  }

export default App;
