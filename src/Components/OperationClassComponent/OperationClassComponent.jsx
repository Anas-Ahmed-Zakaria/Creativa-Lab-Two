import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class OperationClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            number: 1,
        }
    }

    decreaseNumber() {
            if(this.state.number !== 1) {
                this.setState({
                    number: this.state.number - 1,
                });
            }
    }
    increaseNumber() {
        this.setState({
            number:  this.state.number + 1,
        });
    }
  render() {
    
    return (
      <>
      <div className='text-center my-4 bg-light shadow px-4 py-5 w-50 mx-auto container'>
        <Button onClick={()=> {this.decreaseNumber()}} className='btn btn-danger fs-4 rounded'>Decrease</Button>
        <span className='fs-4 mx-4'>{this.state.number}</span>
        <Button onClick={()=> {this.increaseNumber()}} className='btn btn-primary fs-4 rounded'>Increase</Button>
        </div>
      </>
    )
  }
}
