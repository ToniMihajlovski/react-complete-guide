import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {id: '0', name:'Max', age:29},
      {id: '1', name:'Manu', age: 28},
      {id: '2', name:'Stefani', age:26}, 
    ],
    showPersons: false
  }
  // switchNameHandler = (changeName) => {
  //   //this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons : [
  //       {name:changeName, age:29},
  //       {name:'Manu', age: 28},
  //       {name:'Stefani', age:2656}, 
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => 
      {
       return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState({
      persons : persons
    })
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
     persons =( 
     <div>
       {this.state.persons.map((person, index) => 
        {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}
          />
        })}
     </div>     )   
    }
    return (
      <div className="App">
        <h3>Hi i am a react App</h3>
        <p>This is realy working</p>
        <button style ={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <Person name='Max' age='29'/> 
        <Person name='Manu' age='28'/> 
        <Person name='Stefani' age='26'>my hobies are: Skiing</Person>  */} 
        {persons}         
       </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1', null, 'Hi I\'m a React App !!!!')) 
  }
}

export default App;
