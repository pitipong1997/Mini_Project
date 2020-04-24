import React from 'react';
import './NavBar.scss'
import firebase from '../config/config';





function NavBar () {

    const logout = () => {
        firebase.auth().signOut();
      }

    return (
        <div className='nevbar-container'>

            <div className='menu nevbar-left'>
                <img className='nevbar_logo' src='/images/logo.png' alt='logo'  />
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='https://www.facebook.com/Joe.Pitipong'>About us</a></li>
                </ul>
            </div>
            <div className='nevbar-right'>
            <button className='nevbar-logout' onClick = {logout}>Sign out</button><br></br>
            </div>

        </div>
        
    )
}

export default NavBar;