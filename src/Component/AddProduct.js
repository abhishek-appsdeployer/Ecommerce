import React, { useState } from 'react'
import "./AddProduct.css"

const AddProduct = () => {
    // const [product,setProduct]=useState({
    //     name:"",
    //     price:"",
    //     des:""
    // })
    const [product,setProduct]=useState()
    const [url,seturl]=useState()
    const [id,setId]=useState()
    const [price,setPrice]=useState()
    const [des,setdes]=useState()
    const submitdata=async(e)=>{
        e.preventDefault()
        alert(product)
        console.log(product.name)

        const response= await fetch("https://ecom-ce32a-default-rtdb.firebaseio.com/Addproduct.json",
   {
    method:"POST",
    headers:{
        "Content-Type" : "application/json",
    },
    body:JSON.stringify({
        product, 
        price, 
        des,
        url,
        id
    }),
   });
   console.log(response)
    }
  return (
    <>
    <div className="bgad">
    <div className="container p-5">
    <h1 className='text-light m-5'>Add Product</h1>
    <div className='card add p-5'>
       <form action="" method="post" name="form1">
       <table>
       <tr className='m-5 h5'>
            <td>Prdocuct_Id:</td>
            <td><input type="text" onChange={(e)=>setId(e.target.value)} /></td>
        </tr>
      
        <tr className='m-5 h5'>
            <td>Prdocuct_Name:</td>
            <td><input type="text" onChange={(e)=>setProduct(e.target.value)} /></td>
        </tr>
        <tr className='m-5 h5'>
            <td>Price:</td>
            <td><input type="text" onChange={(e)=>setPrice(e.target.value)} /></td>
        </tr>
        <tr className='m-5 h5'>
            <td>Image_Url</td>
            <td className=''><input type="text" onChange={(e)=>seturl(e.target.value)}/></td>
        </tr>
        <tr className='m-5 h5'>
            <td>Description</td>
            <tr className='m-5 h5'><input type="text" onChange={(e)=>setdes(e.target.value)} /></tr>
        </tr>
       </table>
       <button type='submit ' className='btn btn-success rounded-5  mt-3' onClick={submitdata}>Submit</button>

    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default AddProduct
