import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../App.css';


function header() {
    return (
        <div>
            <Card className="main-card">

                <Card.Title className="card-title">Welcome to Our Website</Card.Title>
                <Card.Text className="card-text">
                    It's nice to meet you
                </Card.Text>
                <Button size="lg" className="card-btn">
                    Tell me more
                </Button>

                <img src="https://swashenterprises.com/wp-content/uploads/2019/11/illus-webdesign-2.png" className="card-img" />

            </Card>
        </div>
    );
}

export default header;

