import { data } from 'autoprefixer'
import React from 'react'
import { Link } from 'react-router-dom'
import { mdata } from './mdata'
import ProductDetail from './ProductDetail'
import { Navigate,useNavigate } from 'react-router-dom';

const Mobile = () => {
    const navi=useNavigate()
   function go(e)
   {
    alert("dfd")
    navi("/mobile/e")
   }
    // const mdata=[
    //     {id:1,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:2,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:3,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:4,
    //     name:"Redmi Note 12",
    // price:"9999"}
    // ,
    // {id:3,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:4,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:3,
    //     name:"Redmi Note 12",
    // price:"9999"},
    // {id:4,
    //     name:"Redmi Note 12",
    // price:"9999"}
    
    // ]
  return (
    <div className='bg-success'>
    <div className='container '>
    <h1 className='text-info'>Mobile</h1>
    <div className="row">
        {
            mdata.map((e)=>{
                
                return(
                   <div className='px-lg-3   mt-5  col-md-3 col-sm-12'>
                    <div className="card">
                    <img className="p-2 ih" src={e.img} alt="" />
                        <h1>{e.name}</h1>
                        <h4>Price:{e.price}</h4>
                        {/* <button onClick={(a)=>go(a)}>Detail</button> */}
                        <div className="m-auto pb-2">
                        <Link to={`/mobile/${e.id}`}> <button className='btn btn-primary text-align-center' >Detail</button></Link>

                        </div>
                    </div>
                    </div>
                )
            })
        }
    </div>
      
    </div>
    </div>
  )
}

export default Mobile
