import React  from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Part1.css'
import useWindowDimensions from './usewindowdimensions';
import { Component } from 'react';
import { Videocard1, Videocard2, Videocard3 } from './Videocards';
function VideoCarusel () {

    const { height, width } = useWindowDimensions();
    console.log(  width , height)
    let cont = true
    let swipe = false
    if(width <= 1080){
        cont = false
        swipe = true
    }





    return (
        <div>
            <Carousel
            controls={cont}
            slide= {false} 
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon videocarsel me-5" />}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon videocarsel ms-5" />}	
         
             >
               
      <Carousel.Item >
      
        {width <= 900 ?   
    
        <div className='d-flex justify-content-between'>
            <Videocard1/>
            <Videocard2/>
        </div>
    
      
    :
     
    <div className='d-flex justify-content-between'>
    <Videocard1/>
    <Videocard2/>
    <Videocard3/>
    </div>
     
    

}
        
        
       
       
      </Carousel.Item>
      
    </Carousel>
</div>
    );
};

export default VideoCarusel;


/* 


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
        






*/