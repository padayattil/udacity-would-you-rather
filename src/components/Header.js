import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authedUser from '../actions/authedUser';

const Header = (props) => (
  <div className="Header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {
        !props.authedUser ?
        <div className="Header">
          <div><p className="font-weight-bold">Login</p></div>
        </div>
      :
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-poll">Create Poll</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leader-board">Leader Board</Link>
            </li>
          </ul>
          <button className="btn btn-outline-info" type="submit" onClick={() => props.actions.logout()}>Log Out</button>
        </div>
      }
    </nav>
  </div>
)

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authedUser, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
