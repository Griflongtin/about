import React from 'react';
import logo from './../assets/images/logo.png';

function Logo(){
  return (
    <div>
      <style jsx>{`
              img {
                height: 100%;
                }
            `}</style>
      <img src={logo}/>
    </div>
  );
}

export default Logo;
