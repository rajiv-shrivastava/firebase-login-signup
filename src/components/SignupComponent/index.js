/*  
  LoginComponent

  Component for a user Login

*/


import React, { Component } from "react";
// import './style.css'

import fire from "../../config/fire";

// signupForFirebase = () => {
//   fire.auth().createUserWithEmailAndPassword(email, password).then(u => {
      //  console.log('signup success',u)
// }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });
// }

export default class SignupComponent extends Component {
  render() {
    return (
      <div>
        <h1> Sign Up </h1>
      
      <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
              placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        </div> 
    );
  }
}
