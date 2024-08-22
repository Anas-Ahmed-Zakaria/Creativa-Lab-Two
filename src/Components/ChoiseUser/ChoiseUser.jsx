import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import LoginComponent from '../LoginComponent/LoginComponent';
import RegisterComponent from '../RegisterComponent/RegisterComponent';

export default class ChoiseUser extends Component {
    constructor() {
        super();
        this.state = {
            userLogin: true,
            userRegister: false, 
        }
    }

    handleUserLogin() {
        this.setState({ userLogin: true, userRegister: false });
    }

    handleUserRegister() {
        this.setState({ userLogin: false, userRegister: true });
    }


  render() {
    return (
    <>
        <div>
            {this.state.userLogin? <LoginComponent/> : <RegisterComponent/>}
        </div>
        <div className='container'>
            <Button className='me-3 px-4' onClick={() => this.handleUserLogin()}>Login</Button>
            <Button onClick={() => this.handleUserRegister()}>Register</Button>
        </div>
    </>
    )
  }
}
