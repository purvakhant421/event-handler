import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Login from './Login'
import Signup from './Signup'
import Forgetpass from './Forgetpass'

const Home = () => {
  const [formShow,setFormShow]=useState(1)
  return (
   <div className='container'>
    <h1 className='text-center'>Event Handler</h1>
    <div className='d-flex justify-content-evenly'>
    <Button variant="primary" onClick={()=>setFormShow(1)}>Log in</Button>
    <Button variant="success" onClick={()=>setFormShow(2)}>Sign up</Button>
    <Button variant="secondary" onClick={()=>setFormShow(3)}>Forgot Password</Button>
    </div>
    <div>
    {
      (formShow===1)?<Login/>:(formShow===2)?<Signup/>:<Forgetpass/>
    }
    </div>
   </div>
  )
}

export default Home