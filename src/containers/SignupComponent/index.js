/*  
  LoginComponent

  Component for a user Login

*/


import React, { Component } from "react";
// import './style.css'
import {Link} from 'react-router';
import { userSignUp } from "../../actions/actionUser";
import { connect } from "react-redux";
import {browserHistory} from 'react-router'



 
class SignupComponent extends Component {
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

  
  signupToFirebase = (e) => {
    let userObj = this.props.user;
    e.preventDefault();    
    this.props.userSignUp(this.state.email,this.state.password).then((res) => {
      this.props.userError && this.props.userError.length > 0 ? '' : browserHistory.push("/home")
    }).catch(e => {
      console.log('error')
    }) 
  }



  render() {
    return (
      <div>
        <h1 className="text-center"> Sign Up </h1> 
        {
            this.props.userError && this.props.userError.length > 0 ? 
             <div className="alert alert-danger"> {this.props.userError} </div> : 
            '' }

        <form>
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
              <small id="emailHelp" className="form-text text-muted">Should be minimum of 8 chars</small>                      </div>
            <button type="submit" className="btn btn-primary" onClick={this.signupToFirebase}>Sign UP</button>
          </form>
        <div className="row container">
          Already have Account ?
          <Link href="/" >Login</Link>
          </div>
        </div> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    userError: state.userReducer.userError || ''
  };
}

export default connect(
  mapStateToProps,
  { userSignUp }
)(SignupComponent);



