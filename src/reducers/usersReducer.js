/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { SIGNIN_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  usersLoading: false,
  users: [],
  usersError: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${SIGNIN_USER}_LOADING`:
      return {
        ...state,
        users: [],
        usersLoading: true
      };
    case `${SIGNIN_USER}_SUCCESS`:
      return {
        ...state,
        users: action.payload.data || [],
        usersLoading: false
      };

    case `${SIGNIN_USER}_FAILURE`:
      return {
        ...state,
        users: [],
        usersLoading: false,
        usersError: "Something went wrong"
      };

    default:
      return state;
  }
}
