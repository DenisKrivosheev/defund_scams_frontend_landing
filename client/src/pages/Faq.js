import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import '../css/Accordion.css'

function Faq() {
    return (
<>  <div className='faq bg'>
            <p className='h1 txth1 bg'>You have questions? </p>
            <p className='h1 faqtext bg'>We have answers.</p>
            <div className='mt-5'/>
         <Accordion defaultActiveKey="0" className='compbg'>
            <Accordion.Item eventKey="0">
        <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
         </Accordion>
         <Accordion className='pt'>
            <Accordion.Item eventKey='0'>
            <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
            <Accordion.Body>asdvcasdv</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className='pt'>
            <Accordion.Item eventKey='0'>
            <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
            <Accordion.Body>asdvcasdv</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className='pt'>
            <Accordion.Item eventKey='0'>
            <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
            <Accordion.Body>asdvcasdv</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className='pt'>
            <Accordion.Item eventKey='0'>
            <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
            <Accordion.Body>asdvcasdv</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className='pt'>
            <Accordion.Item eventKey='0'>
            <Accordion.Header>Who is a sponsor of this airdrop?</Accordion.Header>
            <Accordion.Body>asdvcasdv</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    
    </div>
</>         
        
    );
};

export default Faq