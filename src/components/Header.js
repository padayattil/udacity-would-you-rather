import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authedUser from '../actions/authedUser';

const Header = (props) => (
  <div className="bg-light">
    {
      !props.authedUser ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div><p className="font-weight-bold">Login</p></div>
      </nav>
      :
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Create Poll</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leader Board</Link>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.users[props.authedUser].name}
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" type="submit" onClick={() => props.actions.logout()}>Log Out</button>
          </div>
        </div>
      </nav>
    }
  </div>
)

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authedUser, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    users: state.users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
