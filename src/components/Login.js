import React from 'react';
import fire from '../config/config';
import '../Login.css'


function Login() {

  const signUp = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  const login = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  
  
    return (
      <div className='li'>
        <div>
            <h1 className='text'>Please Login</h1>
            <div className='text'>Email</div>
            <input id="email" placeholder="Enter Email" type="text"/>
        </div>

        <div>
            <div className='text'>Password</div>
            <input id = "password"  placeholder="Enter Password" type="password"/>
        </div>

        <div className='container'>
            <button className='button1' onClick={login}>Login</button>
            <button className='button2' onClick={signUp}>Sign Up</button>
        </div>
      </div>
      
    )
}

export default Login;