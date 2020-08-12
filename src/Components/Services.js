import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../App.css';


function Services() {
  return (
    <div className="service-div">
        <h2>Services</h2>
     <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://f0.pngfuel.com/png/300/1007/person-standing-on-ladder-illustration-web-development-responsive-web-design-web-designing-png-clip-art.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Services;

