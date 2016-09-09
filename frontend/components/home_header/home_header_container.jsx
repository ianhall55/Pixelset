import {connect} from 'react-redux';
import React from 'react';
import HomeHeader from './home_header.jsx';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeader);
