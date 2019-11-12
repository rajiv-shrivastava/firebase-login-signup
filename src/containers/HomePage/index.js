import React from "react";
import PhotoComponent from "../../components/LoginComponent";
import { connect } from "react-redux";
import { userSignOut } from "../../actions/actionUser";
import './style.css'
import fire from "../../config/fire";
import LoginComponent from "../../components/LoginComponent";



class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  render() {
    return (
          <div  className="container-fluid">
              Hi {user.email}

              <button className="btn btn-danger"> 
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



