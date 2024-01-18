import React from 'react'
import './Forgetpass.css'

const Forgetpass = () => {
  return (
    <div className='formcontainer'>
      <div>
  <h1 className='mb-5'>Forgot your password?</h1>
  <h3>Enter your email address to reset your password</h3>
  <form action="index.html" method="post">
    <label htmlFor="mail">Email</label>
    <input type="email" id="name" name="name" placeholder="Enter your email address" />
    <button type="submit" className='d-block mt-3'>Submit</button>
    <span id="nameError" style={{display: 'none'}}>There was an error with your email</span>
  </form>
</div>

    </div>
  )
}

export default Forgetpass