import React, { Component } from 'react';
import './App.css';
import fire from './config/config';
import Login from './components/Login';
import Home from './components/Home'
import FacebookLogin from './components/FacebookLogin';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
        <FacebookLogin/>
      </div>
    );
  }
}


export default App
