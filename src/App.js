import "./App.css";
import Landing from "./components/pages/About/Landing";
import NaviBar from "./components/layouts/Navibar/NaviBar";
import TechStack from "./components/pages/TechStack/TechStack";
import ProjectList from "./components/pages/Portfolio/ProjectList";
import { useState } from "react";
import About from "./components/pages/About/About";
import Footer from "./components/layouts/Footer/Footer";

const App = () => {
 const [projects, setProjects] = useState([
  {
   name: "DupeFlix",
   image: "dupeflix.png",
   description:
    "Netflix Clone developed using TypeScript, Next.JS, Prisma, MongoDB, and TailwindCSS.",
   deployedLink: "https://dupeflix.vercel.app/auth",
   username: "aryameow",
   password: "aryameow",
   githubUrl: "https://github.com/justin-aquino/netflix-clone",
  },
  {
   name: "KAT Inventory Management System",
   image: "katims.png",
   description:
    "Inventory management software for pharmacies, utilizing the FDA open drug API. Pharmacies can monitor the current inventory to help make decisions on placing additional orders to minimize over / under stocking and ultimately lower costs.",
   deployedLink: "https://elegant-gumption-829ed0.netlify.app/contact",
   username: "admin",
   password: "admin",
   githubUrl:
    "https://github.com/justin-aquino/kat-inventory-management-client",
  },
  {
   name: "LFG- Looking For Group",
   image: "lfg.png",
   description:
    "LFG allows a user to create a party relating to the specific game the user is playing. The admin of the party has the privileges to accept any user who wants to join the party as well as assign other members to be co-admins. Non-admin users can join any party on any game as long as they’ve sent a ‘request to join’ to the admin and the admin approves it. Once a user becomes a member, they can interact with other people in the party through the party chat. Non-members are prohibited to interact with party members.",
   deployedLink: "https://lookingforgroup.netlify.app/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/justin-aquino/LFG-client",
  },
  // {
  //   name: "Little Juans",
  //   description: "Little Juans is a hackathon-winning website for a non-profit organization where you can choose to sponsor or send a gift to a poverty stricken child from the Philippines. Little Juans is a play on the word little ones, and Juan, a very common name for boys in the Philippines. The website is inspired by Juan Portrait, a group of photographer volunteers that aids children living in the mountain areas of the Philippines.",
  //   image: "lfg.png",
  //   deployedLink: "url here",
  //   username: "admin",
  //   password: "admin",
  //   githubUrl: "github here"
  // },
  // {
  //   name: "Anime-Bakari",
  //   description: "Anime-Bakari (roughly translates to 'nothing but anime'), is an anime list app where you can list your favorite animes, and post a blog review about them.",
  //   image: "lfg.png",
  //   deployedLink: "url here",
  //   username: "admin",
  //   password: "admin",
  //   githubUrl: "github here"
  // },
  {
   name: "Beer House",
   description:
    "Beer House is an artisan/ craft beer tracker app made for beer connoiseurs. You can search from the API, or manually add your own to your favorites list. It also has a random beer generator button for the indecisive ones out there!",
   image: "beer.png",
   deployedLink: "https://beer-house.herokuapp.com/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/justin-aquino/beer-house",
  },
  {
   name: "Keylometer/ Minute",
   description:
    "For my first project in this course, I decided to build my version of a speed typing challenge. As a novice mechanical keyboard enthusiast, I enjoy building keyboards using different switches depending on what sound profile and feel I am looking for at certain times. And to test out the build, I always use websites like monkeytype and kbsim.",
   image: "keylo.png",
   deployedLink: "https://justin-aquino.github.io/speed-typer/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/justin-aquino/speed-typer",
  },
  {
   name: "Pokedex Router",
   description:
    "A frontend webapp for displaying pokemon utilizing React + Redux",
   image: "pokedex.png",
   deployedLink: "https://akinojuno.github.io/pokedexrouting/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/akinojuno/pokedexrouting",
  },
  {
   name: "To Do App",
   description: "A simple frontend to do list web app utilizing React + Redux",
   image: "todo.png",
   deployedLink: "https://akinojuno.github.io/reduxtodoapp/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/akinojuno/reduxtodoapp",
  },
  {
   name: "Alto Music",
   description:
    "My first ever coding project. Alto Music, a static website for a fictional recording studio. Made using HTML + CSS",
   image: "alto.png",
   deployedLink: "https://akinojuno.github.io/altomusic/",
   username: "admin",
   password: "admin",
   githubUrl: "https://github.com/akinojuno/altomusic",
  },
 ]);

 return (
  <div className="App">
   <NaviBar />
   <Landing />
   <div className="flex-with-center" id="tech-stack">
    <TechStack />
   </div>
   <About />
   <div id="project">
    <ProjectList projects={projects} />
   </div>
   <Footer />
  </div>
 );
};

export default App;
