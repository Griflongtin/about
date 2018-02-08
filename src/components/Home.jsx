import React from 'react';
import Description from './Description';
import Form from './Form';

function Home() {
  return (
    <div className="homePage">
      <style jsx>{`
          .homePage {
            box-sizing: border-box;
            display: flex;
          }
      `}</style>
      <Description/>
      <Form />
    </div>
  );
}

export default Home;
