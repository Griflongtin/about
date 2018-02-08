import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  };
  return (
    <div>
      <style jsx>{`
          ul {
            display: flex;

          }
          li {
            list-style: none;
            margin: 20px;
          }
      `}</style>
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/list" style={linkStyle}>People</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
