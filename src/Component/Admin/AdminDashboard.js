import React from 'react'
import AdminHeader from './AdminHeader'
import Footer from "../Footer"
import "./Admin.css"
import { AiOutlineEye } from 'react-icons/ai';
import Userdash from './Userdash';
import Bargaph from './Bargaph';
import { LineChart } from 'recharts';
import Linechart from './Linechart';
const AdminDashboard = () => {
  return (
    <div className='bgad'>
    <AdminHeader/>
    <div className='container'>
    <h1>Dashboardssdfd</h1>
    <div className="d-flex gap-5 flex-md-row flex-column">
    <div className='flexadmin '>
    <div className="card text-light p-5 bg-primary">
    <div className="d-flex">
    <div>
    <h3 className='text-center'>83</h3>
      <h6 className='h4'>Registered user</h6>
      <h6>User come regulary to website</h6>
    </div>
    <div className='m-auto dim'>
      <img className='aim m-2' src="https://static.thenounproject.com/png/4201276-200.png" alt="" />
    </div>
     
    </div>

    </div>

    </div>

    <div className='flexadmin '>
    <div className="card text-light p-5 bg-warning">
    <div className="d-flex">
    <div>
    <h3 className='text-center'>135</h3>
      <h6 className='h4'>Daily Visitor</h6>
      <h6>User come regulary to website</h6>
    </div>
    <div className='m-auto dim'>
    {/* <AiOutlineEye value={{ color: 'blue', size: '50px',padding:"10px" }}/> */}
      <img className='aim m-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpcR7dpETt6mZgIkMtg4-OErmH46MqIcK_H6BXtc&s" alt="" />
    </div>
     
    </div>

    </div>

    </div>


    <div className='flexadmin '>
    <div className="card text-light p-5 bg-danger">
    <div className="d-flex">
    <div>
    <h3 className='text-center'>23</h3>
      <h6 className='h4'>New Message</h6>
      <h6>User come regulary to website</h6>
    </div>
    <div className='m-auto dim'>
      <img className='aim m-2' src="https://www.shutterstock.com/image-vector/chat-icon-vector-speech-bubble-260nw-1908594901.jpg" alt="" />
    </div>
     
    </div>

    </div>

    </div>
    </div>

    <div className="d-flex mt-5 gap-5">
      <div className="flexchild">
      <Userdash/>
      </div>

      <div className="flexchild">
      <div className="card car">
        <h1>Global markets</h1>
        <img className='glimg img-fluid' src="https://reports.essity.com/2021/annual-and-sustainability-report/pics/files/009a.svg" 
        alt="" />
      </div>

      </div>
    </div>
    <div className="d-flex flex-md-row flex-column gap-5 m-5">
    <Bargaph/>
    <Linechart/>
    </div>

   
    </div>
    <Footer/>
      
    </div>
  )
}

export default AdminDashboard
