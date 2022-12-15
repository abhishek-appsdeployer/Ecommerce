import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"
import HeaderLog from './HeaderLog';

const Dress = () => {
    const base="https://dummyjson.com/products"


const [post, setPost] = useState([]);
 
useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => 
      {
        console.log(actualData.products)
        setPost(actualData.products)
      }
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className='dress'>
    <HeaderLog/>
    <div className='container '>
        <h1 className='text-light'>Dress</h1>
    <div className="row ">
    {
        post.map((e)=>{
            return(
                <>
                
                <div className='px-lg-3   mt-5  col-md-3 col-sm-12' key={e.id}>
                    <div className="card">
                    <img className="p-2 ih" src={e.images[0]} alt="" />
                        <h1>{e.title.slice(0,9)}</h1>
                        <h4>Price:{e.price}</h4>
                        {/* <button onClick={(a)=>go(a)}>Detail</button> */}
                        <div className="d-flex gap-5 pb-2 m-auto mt-2">
                        <Link to={`/ddetail/${e.id}`}> <button className='btn btn-danger rounded-5 text-align-center' >Detail</button></Link>
                        {/* <button className='btn btn-success rounded-5'>Buy Now</button> */}
                        <Link to= {`/adress/${e.price}`} >
                          <button className='btn btn-success rounded-5'>Buy Now</button>
                           </Link>
                        </div>
                    </div>
                    </div>
                {/* <div className='px-lg-3 m-5   mt-5  col-md-3 col-sm-12'>
                    <div className="card">
                        <h1>{e.title}</h1>
                        <h2>{e.price}</h2>
                        <h3>{e.rating}</h3>
                     <Link to={`/ddetail/${e.id}`}>   <button>Details</button> </Link>
                    </div>
                    </div> */}
                </>
            )
        })
      
    }
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dress
