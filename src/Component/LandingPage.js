import React from 'react'
import Carouselecom from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Lcard from './Lcard'
import Top from './Top'

const LandingPage = () => {
  return (
    <div className='landing'>
    <Header/>
    {/* <h1 className='bg-red-500 border-x-2 border-red-300'>Landing page</h1> */}
      {/* <img src="https://cdn.pixabay.com/photo/2018/08/29/17/07/ecommerce-3640321__340.jpg" alt="" /> */}
   
   <Carouselecom/>
   <Top/>
   <Lcard/>
   <Footer/>
    </div>
  )
}

export default LandingPage
