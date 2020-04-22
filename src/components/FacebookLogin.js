import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class FacebookLogin extends Component {
    state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    render() {
      return (
        <div className="App">
          {this.state.isSignedIn ? (
            <div>
              <br></br>
              <h2 className='h1'>Thank you {firebase.auth().currentUser.displayName} for visit my website</h2>

              <img src = {firebase.auth().currentUser.photoURL} alt="profile"/>

              <br></br>
              <button className='button3' onClick={() => firebase.auth().signOut()}>Sign out</button>
            </div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      )
    }
  }
  
  export default FacebookLogin