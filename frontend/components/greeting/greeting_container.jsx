import {connect} from 'react-redux';
import React from 'react';
import Greeting from './greeting.jsx';
import { signup, login, logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  signup: () => dispatch(signup()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
