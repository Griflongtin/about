import React from 'react';

import Nav from './Nav';
import Logo from './Logo';

function Header() {
  return (
    <div className="headerBox">
      <style jsx>{`
          .headerBox {
            width: 100%;
            background-color: rgb(230, 158, 50);
            height: 150px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
          }
      `}</style>
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
