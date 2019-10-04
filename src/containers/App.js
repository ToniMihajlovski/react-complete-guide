import React, { Component } from 'react';
import c from './App.modules.css'
import Persons from '../components/Persons/Persons';



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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let persons = null;

    if(this.state.showPersons){
     persons = ( 
     <div>
       <Persons 
       persons = {this.state.persons} 
       clicked = {this.deletePersonHandler}
       changed = {this.nameChangeHandler}/>
     </div>
     );
     
     style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('red'); // classes = ['red'];
    }

    if(this.state.persons.length <= 1)
    {
      classes.push('bold'); //classes = [red bold]
    }

    return (
      <div className='App'>
        <h3>Hi i am a react App</h3>
        <p className={classes.join(' ')}>This is realy working</p>
        <p className={c.Asd}>HEY</p>
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
