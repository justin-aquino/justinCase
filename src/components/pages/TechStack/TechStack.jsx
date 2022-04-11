import "./Carousel.css"
import { FaReact, FaNodeJs, FaBootstrap, FaCss3, FaHtml5 } from "react-icons/fa"
import { SiMongodb, SiTailwindcss,SiJavascript, SiPostgresql } from "react-icons/si"


const TechStack = () => {
  return (
    <div>
      <h1>My Tech Stack:</h1>
        <div className='carousel-parent'>
        </div>
        <div className="gallery">
          <span style={{"--i" : 1}}>
            <FaReact color="cyan" />
          </span>
          <span style={{"--i" : 2}}>
            <FaNodeJs color="#5C9C47" />
          </span>
          <span style={{"--i" : 3}}>
            <FaCss3 color="#7195C0"/>
          </span>
          <span style={{"--i" : 4}}>
            <FaHtml5 color="#C23B22"/>
          </span>
          <span style={{"--i" : 5}}>
            <FaBootstrap color="#7195C0" />
          </span>
          <span style={{"--i" : 6}}>
            <SiTailwindcss color="#3A3F66"/>
          </span>
            <span style={{"--i" : 7}}>
              <SiMongodb color="#5C9C47" />
            </span>
            <span style={{"--i" : 8}}>
              <SiJavascript color="yellow"/>
            </span>
            <span style={{"--i" : 9}}>
              <SiPostgresql color="#3A3F66"/>
            </span>
            
        </div>
    </div>
  )
}

export default TechStack