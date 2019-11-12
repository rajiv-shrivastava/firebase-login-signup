import React from "react";
import PhotoComponent from "../../components/LoginComponent";
import { connect } from "react-redux";
import { userSignIn } from "../../actions/actionUser";
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

  componentDidMount() {
    this.authListner()
    // this.props.fetchPhotos()
  }

  authListner(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else {
        this.setState({user: null})
      }
    }) 
  }

  
  render() {

    return (
          <div  className="container-fluid">
            <h3 className="text-center"> Firebase basic Signup/Login App </h3>
            <hr />
            <div className="row">              
            <LoginComponent userSignIn={this.props.userSignIn}/> 
          </div>
          </div>      
    )

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user || [],
    userLoading: state.userReducer.userLoading || false,
    userError: state.userReducer.photosError || ''
  };
}

export default connect(
  mapStateToProps,
  { userSignIn }
)(MainPage);



