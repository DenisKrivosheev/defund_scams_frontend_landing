import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Footer.css'
const Footer = () => {
    return (
        <div>
            <Row>

                <Col>
                <p>
                Cartel collusion does not allow for a situation in which interactive prototypes only add to factional differences and are equally left to themselves. Here is a vivid example of current trends-the innovative path we have chosen unequivocally captures the need for progress in the professional community. The significance of these problems is so obvious that the further development of various forms of activity speaks to the possibilities of new principles of formation of the material, technical, and personnel base.
                </p>
                <p className='footer-txt-white mt-5 fnt-medium'>© 2023 Defundscams </p>
                </Col>
               
                <Col xs lg="2">
                <div className='d-flex flex-column mt-1'>
                <img 
                className='footer-logo'
                src={require('../lib/img/full_logo.png')}/>
                <a className='footer-link mt-2' href="#login">About Us</a>
                <a className='footer-link mt-2' href="#login">Reviews</a>
                <a className='footer-link mt-2' href="#login">FAQ</a>
                <a className='footer-link mt-2' href="#login">Contact us</a>
                </div>
                </Col>
                <div className='mt-7 '/>
            </Row>
            
        </div>
    );
};

export default Footer;