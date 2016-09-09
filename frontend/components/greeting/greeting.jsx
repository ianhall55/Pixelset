import React from 'react';
import {Link, hashHistory, withRouter } from 'react-router';


// const not_logged_in = () => (
//   <nav className="login-signup">
//     <Link to="/login" >Login</Link>
//         &nbsp;or&nbsp;
//     <Link to="/signup" >Sign up!</Link>
//   </nav>
// );

class Greeting extends React.Component{
  constructor(props) {
    super(props);
  }

  goToDashboard(e) {
    e.preventDefault();
    hashHistory.push("/home");
  }

  render() {

    if (this.props.currentUser) {
      return(
        <hgroup className="header-group login-signup">
          <Link to="/login" >OPEN DASHBOARD</Link>
          <a className="logout-button" onClick={this.props.logout}>
            <i className="fa fa-power-off fa-fw">
              <span>Log Out</span>
            </i>
          </a>
        </hgroup>
      );
    } else {
      return(
        <nav className="login-signup">
          <Link to="/login" >LOGIN</Link>

          <Link to="/signup" >SIGN UP</Link>
        </nav>
      );
    }
  }


}


// function noneGreeting( {currentUser, logout}) {
//     if (currentUser) {
//       return personalGreeting(currentUser, logout);
//     } else {
//       return not_logged_in();
//     }
// }

export default withRouter(Greeting);
