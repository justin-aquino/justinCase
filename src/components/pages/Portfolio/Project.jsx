import "./Projects.css"
import { Card } from "react-bootstrap"

const Project = ({project}) => {
  return (
    <>
        <Card style={{ backgroundColor: "gray" }} className="m-4 card card-body ">
           <a href={project.deployedLink} target="_blank"> <Card.Img src={project.image} className="project-card" /> </a>
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