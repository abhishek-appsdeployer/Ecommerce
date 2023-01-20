import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CartModel = () => {
    const [show,setShow]=useState(false)
    const mystate=useSelector((state)=>state.changeNumber)
    const productname=useSelector((state)=>state.Productname)
    console.log("cart",productname)
    const myid=useSelector((state)=>state.getId)
    // console.log(myid)
    const [data,setdata]=useState([])
    const [totaldata,setTotal]=useState([])

    useEffect(() => {
      fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((actualData) => 
        {
          const res=actualData.products
        const re=  res.filter((e)=>e.id===myid)
          setdata(re)
          setTotal(re)
          console.log(re)
        }
        )
        .catch((err) => {
          console.log(err.message);
        });
    }, [myid]);
    
  return (


    <div>
      <div className="addtocart" onClick={()=>setShow(true)}>
    <span className="noofitems">{productname.length}</span>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHkPW4rSaI-Ir33ZeNRIDw1HaEHDwe_1W_OrE8xmn&s" alt="" />     
</div>

{/* Models for cart  */}

<div>
<Modal
        size="sm"
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
        {
          productname.map((e)=>{
            return(
              <>
                <h2>{e.name}</h2>
              </>
            )
          })
        }
        </Modal.Body>
      </Modal>
</div>
    </div>
  )
}

export default CartModel
