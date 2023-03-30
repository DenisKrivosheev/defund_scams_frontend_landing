import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Counter.css'
const Counter = () => {
    return (
        <>
        <div className='bg2'>
            <div className='d-flex justify-content-end'>
            <img className='background_img' src={require('../lib/img/back.png')}/>
            </div>
            <div className='d-flex justify-content-end'>
               
        <img src={require('../lib/img/hacker.png')} className='hacker '/>
        </div>
        <Container>
        <div className=''>
            <Row><Col>
            <span className=' textcolw ch1 mt-6 fntb'>Recover</span>
            <span className=' textcolw ch1 mt-6 fntb'> your</span>
         
         </Col></Row>
         <Row>
         <Col>
         <div className=' h1 ch1'>
            <span className='textcolbl' >Crypto</span>
            <span className='textcolw ch1'> from</span>
         </div>
         
         </Col>
         </Row>
         <Row>
         <p className='h1 textcolw ch1'>Scams</p>
         <p className='texcolg h4'>The significance of these problems is </p>
         <p className='texcolg h4'> so obvious that a new proposals.
         </p>
         
         </Row>
        </div>
        </Container>
        <div className='counter'>
            
            <Container>
            <div className=''>
                <Row className='h1 txth1 txtcolpt d-flex justify-content-between'>
                    <Col>11.3K+</Col>
                    <Col>20.1K+</Col>
                    <Col>92%+</Col>
                    <Col>20.1K+</Col>
                </Row>
                <Row className='txt txtcolpb '>
                    <Col>People use our service</Col>
                    <Col>Total request mode</Col>
                    <Col>Recived a refund</Col>
                    <Col>Total request</Col>
                </Row>
            </div>
            </Container>
        </div>
        </div>
        </>
    );
};

export default Counter;