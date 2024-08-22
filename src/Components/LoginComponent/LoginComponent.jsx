import React, { Component } from 'react'

export default class LoginComponent extends Component {
  render() {
    return (
      <>
      <h1 className=' text-center'>Login Page</h1>
       <div className='login container mx-auto my-5 shadow bg-light px-3 py-4'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-control" placeholder='Enter Your Name'/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="form-control" placeholder='Enter Your Password'/>
        </div> 
      </>
    )
  }
}
