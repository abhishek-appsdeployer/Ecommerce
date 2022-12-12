import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from "./Footer"

const Payment = () => {
  let {id}=useParams()
  return (
    <div className='bgad'>
    <Header/>
    <div className='m-md-5 m-3 '>
    <div className="card  flexchild m-auto  ">
        <h1>PAYMENT</h1>
        
        <hr />
        <h1>Amount: {id}</h1>
        <div className='m-5'>
        {/* payment options */}
        <div className='h3'>
    <input type="radio" id="cc" name="pay" value="cc"/>
    <label className='px-2' for="cc">Credit Card</label>
  </div>
  
  <div className='h3'>
    <input type="radio" id="dd" name="pay" value="dd"/>
    <label className='px-2' for="dd">Debit Card</label>
  </div>
  
  <div className='h3'>
    <input type="radio" id="upi" name="pay" value="upi" />
    <label className='px-2' for="Microsoft">UPI</label>
  </div>

  <div className='h3'>
    <input type="radio" id="COD" name="pay" value="COD" />
    <label className='px-2' for="Microsoft">COD</label>
  </div>

  </div>
    <div className='m-5 -mt-5t'>
    <Link to="/thanks">
      <button className='btn btn-success' type="submit">Submit</button>
      </Link>
    </div>
  

    </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Payment
