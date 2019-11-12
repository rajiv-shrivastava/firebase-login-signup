import React from "react";
import { connect } from "react-redux";
import { userSignOut } from "../../actions/actionUser";
import {browserHistory} from 'react-router'


class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  userSignOutAction = (e) => {
      e.preventDefault();
      this.props.userSignOut().then(
         browserHistory.push("/")
      )
  }

  componentDidMount(){
      if(this.props.user && Object.keys(this.props.user).length === 0){
          browserHistory.push("/")
      }
  }

  render() {
    return (
          <div  className="container-fluid">
              Hi {this.props.user.email}
              <button className="btn btn-danger" onClick = {this.userSignOutAction} > 
              Sign Out 
              </button>
          </div>      
    )

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user || []
  };
}

export default connect(
  mapStateToProps,
  { userSignOut }
)(MainPage);



