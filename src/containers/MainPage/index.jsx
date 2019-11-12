import React from "react";
import PhotoComponent from "../../components/LoginComponent";
import { connect } from "react-redux";
import { userSignIn } from "../../actions/actionMain";
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
            <h1> I am home page </h1>
            <div className="row">              
            <LoginComponent userSignIn={this.props.userSignIn}/> 
          </div>
          </div>      
    )

  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users || [],
    usersLoading: state.usersReducer.usersLoading || false,
    usersError: state.usersReducer.photosError || ''
  };
}

export default connect(
  mapStateToProps,
  { userSignIn }
)(MainPage);



