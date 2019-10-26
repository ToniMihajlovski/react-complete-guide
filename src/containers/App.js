import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  };

  static getDerivedStateFromProps(props, state){
    console.log('App.js Get derived state from props', props);
    return state;
  }

  componentDidMount(){
    console.log('App.js Component Did Mount');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  state = {
    persons : [
      {id: '0', name:'Max', age:29},
      {id: '1', name:'Manu', age: 28},
      {id: '2', name:'Stefani', age:26}, 
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter:0
  }
  
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

      this.setState((prevState, props) => {
        return {
        persons : persons,
        changeCounter: prevState.changeCounter +1
        }
      });

    // this.setState({
    //   persons : persons,
    //   changeCounter: this.state.changeCounter +1
    // })
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
    
    console.log('App.js render');

    let persons = null;

    if(this.state.showPersons){
     persons = <Persons 
       persons = {this.state.persons} 
       clicked = {this.deletePersonHandler}
       changed = {this.nameChangeHandler}/>
    }
    
    return (
      <Auxilliary>
        <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        /> : null }
        {persons}         
       </Auxilliary>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1', null, 'Hi I\'m a React App !!!!')) 
  }
}
export default withClass(App, 'app');
