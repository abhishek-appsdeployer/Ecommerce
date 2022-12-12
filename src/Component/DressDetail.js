import React, { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';

const DressDetail = () => {
    let { id } = useParams();
    console.log(id)
    const num=Number(id)
    const [post, setPost] = useState([]);
 
useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => 
      {
        const res=actualData.products
      const re=  res.filter((e)=>e.id===num)
        setPost(re)
        console.log(re)
      }
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className='container'>
    <h1>Products Details</h1>
    <div className="">
    {
        post.map((e)=>{
            return(
                <>
                    <h1>{e.brand}</h1>
                    {/* <h3>{e.description}</h3> */}
                    <div className="d-flex ">
                      <div className='flexchild'>
                        <img className='imgchild img-fluid' src={e.images[0]} alt="" />
                      </div>
                      <div className='flexchild'>
                        <h2>{e.title}</h2>
                        <h6>{e.description}</h6>
                        <h1>Rating: {e.rating}</h1>
                        <h1>Price:{e.price}</h1>

                        <div className="d-flex gap-5">
                        <Link to= {`/adress/${e.price}`} >
                          <button className='btn btn-success rounded-5'>Buy Now</button>
                           </Link>
                          <button className='btn btn-danger rounded-5'>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                </>
            )
        })
    }
    </div>

      
    </div>
  )
}

export default DressDetail
