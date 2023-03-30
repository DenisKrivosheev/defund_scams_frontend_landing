import React from 'react';
import { Card, Carousel  } from 'react-bootstrap';
import '../css/Reviews.css'
import useWindowDimensions from '../components/usewindowdimensions';
const Reviews = () => {
    
    const { height, width } = useWindowDimensions();
    console.log(  width , height)
    let cont = true
    let swipe = false
    if(width <= 1080){
        cont = false
        swipe = true
    }

    return (
        <div className='pr bg'>
            <p className='h1 txth1 compbg ptb '> See how others have returned their losses with us </p>
          <Carousel className='pr bg' controls={cont} slide={false}>
            
      <Carousel.Item className='d-flex justify-content-center'>
      
            {width <= 1100 ?



<>

<Card className='review-card '>
<Card.Body>
    <div className='d-flex'>
    <img className='star ' src={require('../lib/icons/Star.png')}></img>
    <img className='star' src={require('../lib/icons/Star.png')}></img>
    <img className='star' src={require('../lib/icons/Star.png')}></img>
    <img className='star' src={require('../lib/icons/Star.png')}></img>
    <img className='star' src={require('../lib/icons/Star.png')}></img>
    <p className='revp'>5.0</p>
    </div>
<Card.Text className='review-txt'>
The task of the organization, especially the lines of development.

</Card.Text>
<div className='d-flex'>
<img src={require('../lib/avatar/Julia.png')} className="float-left rounded-circle revimg"/>
<div className='message'>
<Card.Title className='txt-title txttp  txtlp'>Julia. M</Card.Title>
<Card.Subtitle className='txt-subtitle txtlp'>01.12.2023</Card.Subtitle>
</div>
</div>
</Card.Body>
</Card>

<Card className='review-card '>
               <Card.Body>
                   <div className='d-flex'>
                   <img className='star ' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/starnot.png')}></img>
                   <p className='revp'>4.0</p>
                   </div>
               <Card.Text className='review-txt'>
               The task of the organization, especially the lines of development.
               
               </Card.Text>
               <div className='d-flex'>
               <img src={require('../lib/avatar/Alice.png')} className="float-left rounded-circle revimg"/>
               <div className='message'>
               <Card.Title className='txt-title txttp  txtlp'>Julia. M</Card.Title>
               <Card.Subtitle className='txt-subtitle txtlp'>01.12.2023</Card.Subtitle>
               </div>
               </div>
               </Card.Body></Card>
               </>







               
               
               : 
                <>
               <Card className='review-card '>
               <Card.Body>
                   <div className='d-flex'>
                   <img className='star ' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <p className='revp'>5.0</p>
                   </div>
               <Card.Text className='review-txt'>
               The task of the organization, especially the lines of development.
               
               </Card.Text>
               <div className='d-flex'>
               <img src={require('../lib/avatar/Julia.png')} className="float-left rounded-circle revimg"/>
               <div className='message'>
               <Card.Title className='txt-title txttp  txtlp'>Julia. M</Card.Title>
               <Card.Subtitle className='txt-subtitle txtlp'>01.12.2023</Card.Subtitle>
               </div>
               </div>
               </Card.Body>
               </Card>
               <Card className='review-card '>
               <Card.Body>
                   <div className='d-flex'>
                   <img className='star ' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/starnot.png')}></img>
                   <p className='revp'>4.0</p>
                   </div>
               <Card.Text className='review-txt'>
               The task of the organization, especially the lines of development.
               
               </Card.Text>
               <div className='d-flex'>
               <img src={require('../lib/avatar/Alice.png')} className="float-left rounded-circle revimg"/>
               <div className='message'>
               <Card.Title className='txt-title txttp  txtlp'>Julia. M</Card.Title>
               <Card.Subtitle className='txt-subtitle txtlp'>01.12.2023</Card.Subtitle>
               </div>
               </div>
               </Card.Body></Card>
               <Card className='review-card '>
               <Card.Body>
                   <div className='d-flex'>
                   <img className='star ' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <img className='star' src={require('../lib/icons/Star.png')}></img>
                   <p className='revp'>5.0</p>
                   </div>
               <Card.Text className='review-txt'>
               The task of the organization, especially the lines of development.
               
               </Card.Text>
               <div className='d-flex'>
               <img src={require('../lib/avatar/Max.png')} className="float-left rounded-circle revimg"/>
               <div className='message'>
               <Card.Title className='txt-title txttp  txtlp'>Julia. M</Card.Title>
               <Card.Subtitle className='txt-subtitle txtlp'>01.12.2023</Card.Subtitle>
               </div>
               </div>
               </Card.Body></Card>

                </>




                 
            }
            
            
        
       
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Reviews;