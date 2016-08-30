import React from 'react';
import {Link} from 'react-router';


const not_logged_in = () => (
  <nav className="login-signup">
    <Link to="/login" >Login</Link>
        &nbsp;or&nbsp;
    <Link to="/signup" >Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);


function Greeting( {currentUser, logout}) {
    if (currentUser) {
      return personalGreeting(currentUser, logout);
    } else {
      return not_logged_in();
    }
}

export default Greeting;
