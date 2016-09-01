import {connect} from 'react-redux';
import React from 'react';
import SignupForm from './signup_form.jsx';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/forms_actions';



const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.forms.signup.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
