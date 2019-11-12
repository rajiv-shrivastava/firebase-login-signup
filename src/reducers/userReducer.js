/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { SIGNIN_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  userLoading: false,
  user: [],
  userError: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${SIGNIN_USER}_LOADING`:
      return {
        ...state,
        user: [],
        userLoading: true
      };
    case `${SIGNIN_USER}_SUCCESS`:
      console.log("payload",action.payload)
      return {
        ...state,
        user: action.payload.user || {},
        userLoading: false
      };

    case `${SIGNIN_USER}_FAILURE`:
        console.log("payload",action.payload.user)  
        return {
            ...state,
            user: action.payload.error,
            userLoading: false,
            userError: "Something went wrong"
          };

    default:
      return state;
  }
}
