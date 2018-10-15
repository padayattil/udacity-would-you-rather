import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => (
  <div>
    <div><h1>404 Not Found</h1></div>
    <div><h6><Link to="/">Home</Link></h6></div>
  </div>
)

export default NotFound;
