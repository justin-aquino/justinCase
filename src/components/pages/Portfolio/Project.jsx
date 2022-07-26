import "./Projects.css"
import { Card } from "react-bootstrap"

const Project = ({project}) => {
  return (
    <>
        <Card className=" mb-5 card card-body" style={{backgroundColor: "gray"}}>
          <a href={project.deployedLink} target="_blank" className="project-card"> <Card.Img src={project.image}  /> </a>
          <Card.Body className="card-body">
              <Card.Title><h3>{project.name}</h3></Card.Title>
              <Card.Text>
                  { project.description }
              </Card.Text>
          </Card.Body>
        </Card>
    </> 
  )
}

export default Project