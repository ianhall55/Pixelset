import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form.jsx';
import { signup } from '../../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
