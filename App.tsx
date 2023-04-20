import * as React from 'react';
import './style.css';

export default function App() {
  const myBioData = [
    {
      id: 0,
      Name: 'vinay',
      Age: 21,
    },
    { id: 1, Name: 'kumar', Age: 22 },
    { id: 2, Name: 'singh', Age: 24 },
  ];

  const [myArray, SetMyArray] = React.useState(myBioData);
  const clearData = () => {
    SetMyArray([]);
  };
  // const removeElem = (id) => {
  //   alert(id);
  // };
  const removeElem = (id: number) => {
    const myNewArray = myArray.filter((currElem) => {
      return currElem.id != id;
    });
    SetMyArray(myNewArray);
  };
  return (
    <div>
      {myArray.map((currElm) => {
        return (
          <h1 className="btn" key={currElm.id}>
            Name:{currElm.Name},Age:{currElm.Age}
            <button onClick={() => removeElem(currElm.id)}>remove</button>;
          </h1>
        );
      })}
      <button onClick={clearData}>Clear</button>
    </div>
  );
}
