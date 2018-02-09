import React from 'react';
// import ReactDOM from "react-dom";

import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
            font-family: sans-serif;
          }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
