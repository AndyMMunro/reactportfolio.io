import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReactEmpDir from '../../Assets/Images/ReactEmpDir.JPG'
import "./card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ReactEmpDir} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="https://andymmunro.github.io/reactEmployeeDirectory.io/">Another Link</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;