/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { SIGNIN_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  userLoading: false,
  user: [],
  userError: null,
  usersignedOut: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${SIGNIN_USER}_LOADING`:
      return {
        ...state,
        user: [],
        userLoading: true,
        usersignedOut: false
      };
    case `${SIGNIN_USER}_SUCCESS`:
      console.log("payload",action.payload)
      return {
        ...state,
        user: action.payload.user || {},
        userLoading: false,
        usersignedOut: false
      };

    case `${SIGNIN_USER}_FAILURE`:
        console.log("payload",action.payload.user)  
        return {
            ...state,
            user: action.payload.error,
            userLoading: false,
            usersignedOut: false,
            userError: "Something went wrong"
          };

    case `SIGN_OUT_SUCCESS`:
        return {
          ...state,
          user: {},
          userLoading: false,
          userError: "",
          usersignedOut: true
        };

    default:
      return state;
  }
}
