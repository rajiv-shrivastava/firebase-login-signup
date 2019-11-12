/*  
  LoginComponent

  Component for a user Login

*/


import React, { Component } from "react";
import './style.css'
import { Link } from "react-router";


export default class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '' 
    }
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name] : e.target.value})  
  }

  loginToFireBase = (e) => {
    e.preventDefault();    
    this.props.userSignIn(this.state.email,this.state.password)
  }

  render() {
    return (
      <div className="container-fluid">
      <form className="mb-2">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange = {this.handleInputChange} 
              name="email" type="email" className="form-control col-sm-4" id="exampleInputEmail1" required aria-describedby="emailHelp" 
              placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="password" onChange = {this.handleInputChange} type="password" minLength="8" required className="form-control col-sm-4" id="exampleInputPassword1" placeholder="Password" />
            <small id="emailHelp" className="form-text text-muted">Should be minimum of 8 chars</small>            
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.loginToFireBase}>Sign In</button>
          &nbsp;&nbsp;          
        </form>
        <div className="row container">
        No Account ?
          <Link href="/signup" >Signup</Link>
          </div>
          </div>
    );
  }
}
