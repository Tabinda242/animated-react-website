import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './Components/Appbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faLinkedin, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>

      <div>
        <Appbar />
      </div>

      <div>
        <Card className="main-card">
          <Card.Title className="card-title"
             data-aos="fade-down"
             data-aos-once="true"
             data-aos-delay="400"
             data-aos-duration="500">
            Welcome to Our Website</Card.Title>
          <Card.Text className="card-text"
             data-aos="fade-right"
             data-aos-once="true"
             data-aos-delay="400"
             data-aos-duration="500">
            It's nice to meet you
          </Card.Text>
          <Button size="lg" className="card-btn"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            data-aos-duration="500">
            Tell me more
          </Button>
          <img src="https://swashenterprises.com/wp-content/uploads/2019/11/illus-webdesign-2.png" alt="web-pic" className="card-img" 
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="400"
             data-aos-duration="500"/>
        </Card>
      </div>

      <div id="service">
        <h3 className="service-head"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          What We Do ?</h3>
        <p className="service-para"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          We provide a complete web solutions for small to medium sized businesses.</p>
      </div>

      <div className="service-container">
        <Card style={{ width: '20rem' }} className="service-main"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          <Card.Img variant="top" src="https://www.websenor.com/wp-content/uploads/2019/09/26c4d0a6a14c2a492bdfec84a3b28df7.jpg" className="service-img" />
          <Card.Body>
            <Card.Title className="service-title">E-Commerce</Card.Title>
            <Card.Text className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }} className="service-main"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          <Card.Img variant="top" src="https://www.websenor.com/wp-content/uploads/2019/09/26c4d0a6a14c2a492bdfec84a3b28df7.jpg" className="service-img" />
          <Card.Body>
            <Card.Title className="service-title2">Responsive Design</Card.Title>
            <Card.Text className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }} className="service-main"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          <Card.Img variant="top" src="https://www.websenor.com/wp-content/uploads/2019/09/26c4d0a6a14c2a492bdfec84a3b28df7.jpg" alt="web-pic" className="service-img" />
          <Card.Body>
            <Card.Title className="service-title">Web Design</Card.Title>
            <Card.Text className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div>
        <h3 className="choose-head"
               data-aos="zoom-in"
               data-aos-once="true"
               data-aos-delay="400"
               data-aos-duration="500">
          Why Choose Us ?</h3>
      </div>
      <div className="main-choose">
        <img src="https://igt.hwe.mybluehost.me/l1vew1a_1/wp-content/uploads/2020/03/wfh001.png" alt="web-pic" className="choose-img" 
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-delay="400"
             data-aos-duration="500"/>

        <div className="choose-list"
             data-aos="fade-right"
             data-aos-once="true"
             data-aos-delay="400"
             data-aos-duration="500">
          <ul>
            <li>Understand our client's business goal first</li>
            <li>We deliver on time</li>
            <li>We protect your online reputation</li>
            <li>Believe in doing business with honesty</li>
            <li>We create a winning content strategy</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 id="contact"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-duration="500">
          Find Us On Social Media</h3>
        <div  className="font-icon" >
       <FontAwesomeIcon icon={faFacebookF} size="2x" spin color="blue" />
       <FontAwesomeIcon icon={faWhatsapp} size="2x" spin color="green" />
       <FontAwesomeIcon icon={faLinkedin} size="2x" spin color=" #0072b1" />
       <FontAwesomeIcon icon={faTwitter} size="2x" spin color="blue" />
       <FontAwesomeIcon icon={faInstagram} size="2x" spin color="#fb3958" />
        
        </div>
      </div>

      <div>
        <Card className="footer-head">
          <Card.Body>
            <Card.Title className="footer-title">Contact Us</Card.Title>
            <Card.Text className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Button variant="primary" className="footer-btn">Learn More</Button>
            </Card.Body>
         
          <Form className="footer-form">
            <h3 className="footer-head2">Get In Touch</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your email" className="footer-email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="footer-btn2">
              Subscribe
            </Button>
          </Form>
        </Card>
      </div>
    
    </div>
  );
}

export default App;
