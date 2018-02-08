import React from 'react';
import PropTypes from 'prop-types';

function People(props) {
  return (
    <div className="peopleBox">
      <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }
          .peopleBox {
            width: 30%;
            border: 1px solid rgb(230, 158, 50);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin: 10px;
          }
          .peopleImg {
            border-radius: 100%;
            width: 60%;
            margin-bottom: 15px;
            border: 1px darkgray solid
          }
          h2 {
            color: rgb(230, 158, 50);
          }

      `}</style>
      <img className="peopleImg" src={props.img}></img>
      <h2>{props.name}</h2>
      <h3>{props.courseYear}</h3>
      <h4>{props.dinoId}</h4>
      <p>{props.quote}</p>
    </div>
  );
}

People.propType = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  courseYear: PropTypes.string.isRequired,
  dinoId: PropTypes.string,
  quote: PropTypes.string
};

export default People;
