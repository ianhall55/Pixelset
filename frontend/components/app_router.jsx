import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import LoginFormContainer from './login_form/login_form_container.jsx';
import SignupFormContainer from './signup_form/signup_form_container.jsx';



const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } />
    <Route path="/login" component={ LoginFormContainer } />
    <Route path="/signup" component={ SignupFormContainer } />
  </Router>
);

export default AppRouter;
