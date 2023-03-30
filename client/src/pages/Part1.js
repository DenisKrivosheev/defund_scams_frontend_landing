import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Counter from '../components/Counter';
import '../css/Part1.css'
import '../css/Counter.css'
import Reviews from './Reviews';
import Faq from './Faq';
import VideoCarusel from '../components/VideoCarusel';
import Block1 from '../components/Block1';
import Footer from './Footer';
import Companies from '../components/Companies';

function Part1 (){
    return (
        <div className='bg '>
             
            <Counter/>
            <div className='pr'>
            <Companies/>
            </div>
            <div className='pr bg'>
            <Container className='pr bg'>
                
            <div className='pr bg'>   
            
            </div> 
            
            <div className='bg pr'/>
            <Reviews/>

            </Container>
            </div>
            <Container>
            <p className='h1 txth1 mt-5'>This is what we do</p>
            <p className='txth1 mt-2'>123123123</p>
            <div className='d-flex justify-content-center mt-5'>
            
            <iframe 
           
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player" 
            frameborder="0"
            className='video aboutvid'
            allow="accelerometer;
            autoplay; 
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen></iframe>
            
            
            </div>
            <div className='mt-2'/>
            <div className='d-flex justify-content-center'  >
                <Button className='aboutbtn'>About us</Button>
                </div>
            
            

            



            <p className='h1 txth1 mt-5'>Video reviews</p>
            <VideoCarusel/>

                        
            
            </Container>
            <div className='mt-5'/>
            <Block1/>
            <Container>
                <div className='mt-5'/>
                
                <div className='compbg pr'>
                <Faq/></div>
                <div className='mt-7'/>
                <Footer/>
                
            </Container>


        </div>
    );
};

export default Part1;