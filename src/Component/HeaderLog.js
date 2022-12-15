import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useSelector } from 'react-redux'
import CartModel from './CartModel'

const HeaderLog = () => {
  const mystate=useSelector((state)=>state.changeNumber)
  const myid=useSelector((state)=>state.getId)
  console.log(myid)
  return (
    <>
    <div class="d-flex bd-highlight bg-success p-2">
  <div class="p-2 border-2 flex-grow-1 h1 bd-highlight "> 
  <Link to="/">
  <button  className="rounded-3">Ecom</button>
  </Link>
  </div>
  <CartModel/>
  {/* <div className="addtocart">
    <span className="noofitems">{mystate}</span>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHkPW4rSaI-Ir33ZeNRIDw1HaEHDwe_1W_OrE8xmn&s" alt="" />     
</div> */}
  {/* <Link to='/login'> <button class="p-2 m-2 rounded-3 border-2 h3 bd-highlight">Login</button></Link> */}
  <Link to='/'> <button class="p-2 m-2 rounded-3 border-2 h3 text-danger bd-highlight">sign Out</button></Link>
</div>
   
    </>
  )
}

export default HeaderLog
