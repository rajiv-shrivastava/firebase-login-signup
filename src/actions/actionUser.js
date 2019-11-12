/*  
  actionMain.js

  Collection of all async actions in the app

*/

// import axios from "./axios";
import { SIGNIN_USER } from "./actionTypes";
import fire from "../config/fire";




//Sign in logic starts here

//Async Action for firebase sign in
export const userSignIn = (email,password) => {
  return (dispatch) => {
    dispatch(signinLoading())
    return fire.auth().signInWithEmailAndPassword(email,password).then(u => {
      console.log("Signup success",u)
      dispatch(signinSuccess(u))
    }).catch(error => {
      console.log("error",error)
      dispatch(signinFailure(error))
    })
  }
}


export const signinLoading = () => {
  return {
    type: `${SIGNIN_USER}_LOADING`
  }
};

export const signinSuccess = (user) => {
  return {
    type: `${SIGNIN_USER}_SUCCESS`,
    payload: user
  }
};

export const signinFailure = (error) => {
  return {
    type: `${SIGNIN_USER}_FAILURE`,
    payload: error
  }
};



//Sign in logic ends here




//Sign up logic starts here


//Async Action for firebase sign out
export const userSignUp = (email,password) => {
  return (dispatch) => {
    dispatch(signupLoading())
    return fire.auth().signupWithEmailAndPassword(email,password).then(u => {
      console.log("Signup success",u)
      dispatch(signupSuccess(u))
    }).catch(error => {
      console.log("error",error)
      dispatch(signupFailure(error))
    })
  }
}

export const signupLoading = () => {
  return {
    type: `${SIGNUP_USER}_LOADING`
  }
};

export const signupSuccess = (user) => {
  return {
    type: `${SIGNUP_USER}_SUCCESS`,
    payload: user
  }
};

export const signupFailure = (error) => {
  return {
    type: `${SIGNUP_USER}_FAILURE`,
    payload: error
  }
};


//Sign up logic ends here
