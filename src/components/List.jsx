import React from 'react';
import People from './People';
import griffin from './../assets/images/griffin.png';
import lena from './../assets/images/lena.png';
import kevin from './../assets/images/kevin.png';
import holly from './../assets/images/holly.png';

var masterClassList = [
  {
    img: `${griffin}`,
    name: 'Griffin',
    courseYear: 'React - 2017',
    dinoId: 'Styracosaurus',
    quote: 'Eat Bacon'
  },
  {
    img: `${holly}`,
    name: 'Holly',
    courseYear: 'React - 2017',
    dinoId: 'T-rex',
    quote: 'No empty <div>s!'
  },
  {
    img: `${kevin}`,
    name: 'Kevin',
    courseYear: 'React - 2017',
    dinoId: 'Mamenchisaurus',
    quote: 'That works'
  },
  {
    img: `${lena}`,
    name: 'Lena',
    courseYear: 'React - 2017',
    dinoId: 'Deinonychus',
    quote: 'Time for a walk?'
  }
];


function List() {
  return (
    <div className="peopleBox">
      <style jsx>{`
          .peopleBox {
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
          }
      `}</style>
      {masterClassList.map((people, index) =>
        <People img={people.img}
          name={people.name}
          courseYear={people.courseYear}
          dinoId={people.dinoId}
          quote={people.quote}
          key={index}/>
      )}
    </div>
  );
}

export default List;
