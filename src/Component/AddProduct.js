import React, { useState } from 'react'

const AddProduct = () => {
    // const [product,setProduct]=useState({
    //     name:"",
    //     price:"",
    //     des:""
    // })
    const [product,setProduct]=useState()
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
        des
    }),
   });
    }
  return (
    <>
    <div className="container p-5">
    <div className='card p-5'>
       <form action="" method="post" name="form1">
       <table>
        <tr>
            <td>Prdocuct Name:</td>
            <td><input type="text" onChange={(e)=>setProduct(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Price:</td>
            <td><input type="text" onChange={(e)=>setPrice(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Description</td>
            <tr><input type="text" onChange={(e)=>setdes(e.target.value)} /></tr>
        </tr>
       </table>
       <button type='submit' onClick={submitdata}>Submit</button>

    </form>
    </div>
    </div>
    </>
  )
}

export default AddProduct
