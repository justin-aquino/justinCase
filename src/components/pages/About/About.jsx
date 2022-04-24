import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const About = () => {
  return (
    <div id="about" className="intro flex-container">
        <div className="flex-image">
            <img src="justin.png" alt="justin" />
        </div>
            
        <div className="branding flex-child">
            <p> I am a proactive and dedicated individual with a background in restaurant management, desiring to utilize full-stack development skills. My tenacity for learning and 
                creating led me to pursue a career in tech with hopes of transferring my creativity in making menus and recipes over to creating something inclusive, that may help with the 
                collective advancement of human technology.
            </p>

            <p>Let's connect!</p>
            <div className="icons-div">
               <a className="icons" href="https://www.linkedin.com/in/justinaquino-dev/" target="_blank"> <FaLinkedin /> </a>
               <a className="icons" href="https://github.com/justin-aquino" target="_blank"> <FaGithubSquare /> </a>
               <a className="icons" href="mailto:jbaquino25@gmail.com" target="_blank"> <SiGmail /> </a>
            </div>
            
        </div>
    </div>
  )
}

export default About