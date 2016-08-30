import {connect} from 'react-redux';
import React from 'react';
import LoginForm from './login_form.jsx';
import { login } from '../../actions/session_actions';



const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
