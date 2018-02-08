import React from 'react';
import People from './People';
import griffin from './../assets/images/griffin.png';

var masterClassList = [
  {
    img: `${griffin}`,
    name: 'GRIFFIN',
    courseYear: 'React - 2017',
    dinoId: 'Styracosaurus',
    quote: 'Eat Bacon'
  },
  {
    img: 'https://i.ytimg.com/vi/0pNMRvGnamU/hqdefault.jpg',
    name: 'you2',
    courseYear: 'PHP - 2012',
    dinoId: 'T-rex',
    quote: 'shit'
  },
  {
    img: 'https://i.ytimg.com/vi/0pNMRvGnamU/hqdefault.jpg',
    name: 'you3',
    courseYear: 'PHP - 2012',
    dinoId: 'T-rex',
    quote: 'shit'
  },
  {
    img: 'https://i.ytimg.com/vi/0pNMRvGnamU/hqdefault.jpg',
    name: 'you4',
    courseYear: 'PHP - 2012',
    dinoId: 'T-rex',
    quote: 'shit'
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
