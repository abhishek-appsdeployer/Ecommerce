import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import "./Address.css"

const Address = () => {
    const {id}=useParams()
  return (
    <div className='bgad'>
    <Header/>
    <div className="container p-5">
        <div className="d-flex flex-md-row flex-column flex-reverse gap-5">
            <div className="flexchild">
                <div className="card">
                    <h1>Billing Address</h1>
                    <hr />
                    <form action="">
                    <label htmlFor="">
                    Name:
                    </label>
                    <input type="text" required />
                    <label htmlFor="">
                    Email:
                    </label>
                    <input type="email" required />
                    <label htmlFor="">
                    Adress1:
                    </label>
                    <input type="text" required />
                    <label htmlFor="">
                    Address2:
                    </label>
                    <input type="text" required />
                    <label htmlFor="">
                    Pincode:
                    </label>
                    <input type="text" required />
                    <label htmlFor="">
                    Phone:
                    </label>
                    <input type="number" />

                   <Link to="pay"> <button type="submit" className='m-auto mb-5 mt-5 btn btn-success'>Checkout</button>
                   </Link>
                    

                    </form>
                   

                </div>
            </div>
            <div className="flexchild">
            <div className="card ">
                <h1>Summary</h1>
                <hr />
                <h2 className='p-5'>Total: {id}</h2>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
      
    </div>
  )
}

export default Address
