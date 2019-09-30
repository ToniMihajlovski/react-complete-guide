import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {name:'Max', age:29},
      {name:'Manu', age: 28},
      {name:'Stefani', age:26}, 
    ],
    showPersons: false
  }
  switchNameHandler = (changeName) => {
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons : [
        {name:changeName, age:29},
        {name:'Manu', age: 28},
        {name:'Stefani', age:2656}, 
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Maximilian', age:29},
        {name: event.target.value, age: 28},
        {name:'Stefani', age:2656}, 
      ],
      showPersons: false
    })
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
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>

            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}/>

            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Max!!!!')}>
              Child from props text
            </Person>          
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
