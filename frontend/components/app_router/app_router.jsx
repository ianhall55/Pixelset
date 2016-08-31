import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app.jsx';
import LoginFormContainer from '../login_form/login_form_container.jsx';
import SignupFormContainer from '../signup_form/signup_form_container.jsx';
import AlbumsIndexContainer from '../albums_index/albums_index_container.jsx';
import SplashContainer from '../splash/splash_container.jsx';


class AppRouter extends React.Component {
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._createRoutes = this._createRoutes.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if(!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser){
      replace('/home');
    }
  }

  _createRoutes() {
    return (
      <Route path="/" component={ App }>
        <IndexRoute component={SplashContainer} />
        <Route path="/login" component={ LoginFormContainer } onEnter={this._redirectIfLoggedIn}/>
        <Route path="/signup" component={ SignupFormContainer } onEnter={this._redirectIfLoggedIn}/>
        <Route path="/home" component={ AlbumsIndexContainer } onEnter={this._ensureLoggedIn}/>
      </Route>
    );
  }

  render() {
    return(
      <Router history={ hashHistory }>
        {this._createRoutes()}
      </Router>
    );
  }
}

export default AppRouter;
