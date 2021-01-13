import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Student from './Student/Student';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Joe', age: 29},
      {id: 2, name: 'Jane', age: 30}
    ],
    showPerson: false,
    students: [
      {fname: 'Jane', lname: 'Smith', gender: 'Female'},
      {fname: 'Joe', lname: 'Smith', gender: 'Male'},
      {fname: 'Stephane', lname: 'Smith', gender: 'Male'}
    ]
  }

  switchPerson = (newName) => {
    this.setState({
        persons: [
        {name: newName, age: 29},
        {name: 'Trump', age: 15}
      ]
    });
  }

  switchStudent = (gender) => {
    this.setState({
      students: [
        {fname: 'Jane', lname: 'Smith', gender: gender},
        {fname: 'Joe', lname: 'Smith', gender: gender},
        {fname: 'Stephane', lname: 'Smith', gender: gender}
      ]
    })
  }

  nameChanged = event => {
    this.setState({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 15}
      ]
    });
  }

  togglePerson = () => {
    this.setState({showPerson: !this.state.showPerson});
  }

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  updatePerson = (id, event) => {
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {... this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  render() {

    let buttonStyle = this.state.showPerson ? 'Toggle-Button Background-Green' : 
        'Toggle-Button Background-Red'
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age}
             key={person.id} click={this.deletePerson.bind(this, index)} changed={this.updatePerson.bind(this, person.id)}/>
          })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
              click={this.switchPerson.bind(this, 'Maxilian')}>
                My Hobbies are playing football</Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
              click={this.switchPerson.bind(this, 'Maxi!!')}
            changed={this.nameChanged}/>  */}
        </div>
      );
    }

    return (
      <div>
        <div className="App">
          <h2>Welcome to React</h2>
          <button onClick={this.togglePerson} className={buttonStyle}>Toggle Person</button>
          {/* <button onClick={this.switchPerson.bind(this, 'Sugar')}>Switch Person</button> */}

          {persons}
        
        </div>  

        {/* <div className="App">
          <button onClick={this.switchStudent.bind(this, 'Male')}>Change Gender</button>
          <Student fname={this.state.students[0].fname} 
                  lname={this.state.students[0].lname}
                  gender={this.state.students[0].gender}
                  changeGender={this.switchStudent.bind(this, 'Male')}>
          </Student>
          <Student fname={this.state.students[1].fname} 
                  lname={this.state.students[1].lname}
                  gender={this.state.students[1].gender}
                  changeGender={this.switchStudent.bind(this, 'Female')}>
          </Student>
        </div> */}
      </div>
    );
  }
}

export default App;
