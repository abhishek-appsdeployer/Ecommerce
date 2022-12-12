import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"
  
export default function Carouselecom() {
  return (
    <div style={{ display: 'block', padding: 30 }}>
     
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

            alt="e One"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://wallpaperaccess.com/full/2593044.jpg"
            alt="ITwo"
          />
          
        </Carousel.Item>

       
        <Carousel.Item interval={500}>
          <img
            className="d-block  w-100"
src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Two"
          />
          
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}