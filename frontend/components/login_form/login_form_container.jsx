import {connect} from 'react-redux';
import React from 'react';
import LoginForm from './login_form.jsx';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/forms_actions';



const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.forms.login.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
