import React from 'react'
import Header from './Header'
import Footer from "./Footer"
const Thanks = () => {
    const refrencedid=Date.now()
  return (
    <div>
    <div className='bgad'>
    <Header/>
    <div className='mthanks  '>
    <div className="card  flexchild m-auto  ">
    <h1>Your Order id: {refrencedid}</h1>
   <h3 className='p-md-5 p-3'>Thanks For ordering your product is delivered within days and 
   Status of your product is updated in your email and phone
   </h3>
       
  
  
  
  

    </div>
      
    </div>
    <Footer/>
    </div>
      
    </div>
  )
}

export default Thanks
