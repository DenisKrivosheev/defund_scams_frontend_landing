import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="black" expand={expand} >
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
            
            <Button variant="out" >Sing Up</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;