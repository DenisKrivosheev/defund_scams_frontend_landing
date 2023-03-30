import React from 'react';
import { Card } from 'react-bootstrap';
export function Videocard1() {
    return (
        <div>
            <Card className='card-part1' >
        <Card.Body><div className='d-flex'>
        <img src={require('../lib/avatar/Julia.png')} className="float-left rounded-circle"/>
        <div className='message'>
        <Card.Title className='txt-title'>Julia. M</Card.Title>
        <Card.Subtitle className='txt-subtitle'>01.12.2023</Card.Subtitle>
        
        </div>
        </div> </Card.Body>
        
        <iframe 
            width="300rem"
            height="200rem"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player" 
            frameborder="0"
            className='video'
            allow="accelerometer;
            autoplay; 
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen></iframe>
        </Card>
        </div>
    );
};


export function Videocard2() { 
    return(<>
        

        <Card className='card-part1'>
        <Card.Body><div className='d-flex'>
        <img src={require('../lib/avatar/Alice.png')} className="float-left rounded-circle"/>
        <div className='message'>
        <Card.Title className='txt-title'>Alice D.</Card.Title>
        <Card.Subtitle className='txt-subtitle'>01.03.2023</Card.Subtitle>
        </div>
        </div> </Card.Body>
         <iframe 
            width="300rem"
            height="200rem"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player" 
            frameborder="0"
            className='video'
            allow="accelerometer;
            autoplay; 
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen></iframe>
        </Card>

        
    </>)}

export function Videocard3() { 
    return(<>
    
    
    <Card className='card-part1'>
        <Card.Body><div className='d-flex'>
        <img src={require('../lib/avatar/Max.png')} className="float-left rounded-circle"/>
        <div className='message'>
        <Card.Title className='txt-title'>Max I.</Card.Title>
        <Card.Subtitle className='txt-subtitle'>01.21.2023</Card.Subtitle>
        </div>
        </div> </Card.Body>
        
        <iframe 
            width="300rem"
            height="200rem"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player" 
            frameborder="0"
            className='video'
            allow="accelerometer;
            autoplay; 
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen></iframe>
        </Card>
        
    
    </>)}







