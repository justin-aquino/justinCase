import "./Projects.css"
import { Card } from "react-bootstrap"

const Project = ({project}) => {
  return (
    <>
        <Card style={{ width: '30rem', backgroundColor: "gray" }} className="m-2 card-body">
           <a href={project.deployedLink}> <Card.Img src={project.image} /> </a>
        <Card.Body className="card-body">
            <Card.Title><h3>{project.name}</h3></Card.Title>
            <Card.Text>
                <p>{project.name} </p>
            </Card.Text>
        </Card.Body>
        </Card>
    </> 
  
  )
}

export default Project