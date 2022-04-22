import Project from "./Project"
import "./Projects.css"
import { CardGroup } from "react-bootstrap"

const ProjectList = ({projects}) => {

    const mappedProjects = projects.map((project, idx) => {
        return(
            <Project key={idx} project={project}/>
        )
    })
  return (
    <CardGroup>
        <h1>Projects</h1>
        <div className="main-container">
            { mappedProjects }
        </div>
    </CardGroup>
  )
}

export default ProjectList