import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { mdata } from './mdata'
const ProductDetail = () => {
  let { id } = useParams();
  const num=Number(id)
    console.log(id)
    const [data,setdata]=useState([])
    useEffect(()=>{
        const d=mdata.filter((item)=>item.id===num)
        setdata(d)
        console.log("data")
        console.log(d)

    },[])
  return (
    <div>
      <h1>Product details</h1>
      <div className='d-flex'>
     {data.map((e)=>{
        return(
            <>
            <div className="d-flex">
                <img src={e.img} alt="" />
                <div>
                    <h1>{e.des}</h1>
                </div>

                </div>
            </>
        )
     })}

      </div>
    </div>
  )
}

export default ProductDetail
