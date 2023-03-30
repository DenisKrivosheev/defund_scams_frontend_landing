import React from 'react';
import { Button, Container } from 'react-bootstrap';
const Companies = () => {
    return (
        <div className='bg2 pr ptb'>
            <div className='bg2 pr'>
            <p className='h1 txth1  pr bg2'>100% guarantee of recovering funds from</p>
            <div className='d-flex justify-content-center mt-4  bg2 '>
            <img className='companies-img pr'  src={require('../lib/img/companies.png') }   />
            </div>
            <div className='d-flex justify-content-center mt-4 bg2 pr'>
                <Button className='btn-recover pr '>Recover crypto</Button>
                <Button className='btn-more pr'>More scams<img className='mrsc' src={require('../lib/icons/Arrow1.png')}></img></Button>
            </div>
            </div>
        </div>
    );
};

export default Companies;