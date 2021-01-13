// import React, { Component, useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [personsState, setPersonState] = useState(
//     {
//       persons: [
//         {name: 'Joe', age: 29},
//         {name: 'Jane', age: 30}
//       ]
//     }
//   );

//   const switchPerson = () => {
//     console.log('switch is called');
//       setPersonState({
//         persons: [
//         {name: 'Stephane', age: 29},
//         {name: 'Trump', age: 15}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h2>Welcome to React</h2>
//       <button onClick={switchPerson}>Switch Person</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies are playing football</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//     </div>
//   );

// }

// export default app;
