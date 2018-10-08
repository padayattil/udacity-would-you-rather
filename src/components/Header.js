import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="Header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <button className="btn btn-outline-info" type="submit">Log Out</button>
      </div>
    </nav>
  </div>
)

export default Header;
