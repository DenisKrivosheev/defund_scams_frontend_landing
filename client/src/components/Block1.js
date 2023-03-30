import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../css/Block1.css'
const Block1 = () => {
    return (
        <div className='block1-bg'>
            
           <Container>
            <Row><div className='mt-5'/>
                <Col>
                <p className='h1 block1-txt block-1txth bl1-pad-right'>Return</p>
                <p className='h1 block1-txt block-1txth bl1-pad-right'>your crypto </p>
                <p className='h1 block1-txt block-1txth bl1-pad-right'>in 3 easy steps</p>
                <div class="d-flex justify-content-end bl1-pad-right bl1-pad-top">
                <Button variant="b1in"  >Sing in</Button>
                <div className='block1-padding'></div>
                <Button variant="b1out"  >Get started</Button>

                </div>
                <div className='mt-5'></div>
                </Col>
                <Col >
                <Card className='card-block1 bl1-pad-left'><Card.Body>
                <div className='d-flex '>
                <img className='block-1-img float-left rounded-circle block-1-img' src={require('../lib/avatar/block1ava.png')}  />
                <div className='card-body-block1'>
                     <Card.Title className='block1-txt-white blc1-txt-pt' >Register yourclaim</Card.Title>
                    <Card.Subtitle className='block1-txt-grey'>It's free now and later</Card.Subtitle>
                </div></div>
                </Card.Body></Card>
                <div>
                    
                    <Card className='card-block1 bl1-pad-left'><Card.Body>
                                
                    <div className='d-flex'>
                    <img src={require('../lib/avatar/block1ava2.png')} className="float-left rounded-circle block-1-img"/>
                     <div className='card-body-block1'>
                     <Card.Title className='block1-txt-white blc1-txt-pt' >Track your claim</Card.Title>
                    <Card.Subtitle className='block1-txt-grey'>Allow us 1-2 weeks to resolving the case</Card.Subtitle>
                    </div></div>
                  </Card.Body></Card>
                </div>
               

                <Card className='card-block1 bl1-pad-left'><Card.Body>
                <div className='d-flex'>
                <img className='block-1-img float-left rounded-circle block-1-img' src={require('../lib/avatar/block1ava3.png')} />
                <div className='card-body-block1 '>
                     <Card.Title className='block1-txt-white blc1-txt-pt' >Get your money back</Card.Title>
                    <Card.Subtitle className='block1-txt-grey'>If success, receive the recovered money</Card.Subtitle>
                </div></div>
                </Card.Body></Card>







                </Col>
            </Row>
            
            </Container>
        </div>
    );
};

export default Block1;