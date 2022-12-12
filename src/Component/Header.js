import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <>
    <div class="d-flex bd-highlight bg-success p-2">
  <di class="p-2 border-2 flex-grow-1 h1 bd-highlight "> 
  <Link to="/">
  <button  className="rounded-3">Ecom</button>
  </Link>
  </di>
  <Link to='/login'> <button class="p-2 m-2 rounded-3 border-2 h3 bd-highlight">Login</button></Link>
  <Link to='/signup'> <button class="p-2 m-2 rounded-3 border-2 h3 text-danger bd-highlight">sign up</button></Link>
</div>
   
    </>
  )
}

export default Header
