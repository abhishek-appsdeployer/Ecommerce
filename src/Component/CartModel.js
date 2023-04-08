import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CartModel = () => {
    const [show,setShow]=useState(false)
    const [total,settotal]=useState(0)
    const mystate=useSelector((state)=>state.changeNumber)
    const productname=useSelector((state)=>state.Productname)
    console.log("cart",productname)
    const myid=useSelector((state)=>state.getId)
    // console.log(myid)
    const [data,setdata]=useState([])
    const [totaldata,setTotal]=useState([])
    const[products,setProducts]=useState([])

    useEffect(()=>{
    console.log("updata")
    function multiDimensionalUnique(productname) {
      var uniques = [];
      var itemsFound = {};
      for(var i = 0, l = productname.length; i < l; i++) {
          var stringified = JSON.stringify(productname[i]);
          if(itemsFound[stringified]) { continue; }
          uniques.push(productname[i]);
          itemsFound[stringified] = true;
      }
      return uniques;
  }
  
  const res=multiDimensionalUnique(productname);
  setProducts(res)
  console.log("res",res)

    },[productname])
    useEffect(() => {
      // Update total whenever products changes
      let totalAmount = 0;
    products.forEach((item) => {
      // totalAmount += item.price; // Add the price of each item to the total amount
    item.forEach((e)=>{
      totalAmount +=e.price
    })
    
    });
      settotal(totalAmount);
      console.log(total)
      console.log(totalAmount) // Update the total state variable
    }, [products]);
    
  return (


    <div>
      <div className="addtocart" onClick={()=>setShow(true)}>
    <span className="noofitems">{products.length}</span>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHkPW4rSaI-Ir33ZeNRIDw1HaEHDwe_1W_OrE8xmn&s" alt="" />     
</div>

{/* Models for cart  */}

<div>
<Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
      <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Cart Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <h1>Cart items</h1>
        
          {products.map((item) => (
        <div key={item.title}>
          
          
            {item.map((innerItem) => (
              <div className='d-flex gap-5 mt-2'>
              <img style={{width
              :50,height:50,borderRadius:25}} src={innerItem.images[0]} alt="" />
              <h2 key={innerItem.title}>{innerItem.title}</h2>
              <h2 key={innerItem.price}>Rs {innerItem.price}</h2>
              {/* {
                settotal(innerItem.price)
              } */}
              </div>
            ))}
         
        </div>
      ))}
      <Link to= {`/adress/${total}`} >
     
                          <button className='btn btn-success rounded-5' >Buy Now</button>
                           </Link>
        </Modal.Body>
      </Modal>
</div>
    </div>
  )
}

export default CartModel
