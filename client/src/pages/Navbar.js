import React from 'react';
import { Button, Nav, Navbar, Container, Offcanvas} from 'react-bootstrap';
import '../css/Navigation.css'
import logo from '../lib/img/logo.svg'
import OffcanvasExample from '../components/Testnav';

function Navigation(){
    return (
        <>
         
          {['xl'].map((expand) => (
        <Navbar key={expand} className="" expand={expand} >
          <Container >
          <Navbar.Brand href="/" className='nav-brand'>
            <img
              width='160em'
              height='30em'
              src={require('../lib/img/full_logo.png')}
              
              className="d-inline-block align-top"
            />
               </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
              width='160em'
              height='30em'
              src={require('../lib/img/full_logo.png')}
              
              className="d-inline-block align-top"
            />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className='nav-links' href="#about">About us</Nav.Link>
              <Nav.Link  className='nav-links' href="#reviews">Reviews</Nav.Link>
              <Nav.Link className='nav-links' href="#faq">FAQ</Nav.Link>
              <Nav.Link className='nav-links'href="#contact">Contact Us</Nav.Link>
                  
                </Nav>
                <Button variant="in" >Sing in</Button>
                <Button variant="out" >Get Started</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
    );
};

export default Navigation;