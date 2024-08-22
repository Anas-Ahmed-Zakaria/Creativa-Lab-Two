import React, { Component } from 'react'

export default class RegisterComponent extends Component {
  render() {
    return (
        <>
      <h1 className=' text-center'>Register Page</h1>
       <div className='login container mx-auto my-5 shadow bg-light px-3 py-4'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-control" placeholder='Enter Your Name'/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="name" name="email" className="form-control" placeholder='Enter Your Email'/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="form-control" placeholder='Enter Your Password'/>
        </div> 
      </>
    )
  }
}
