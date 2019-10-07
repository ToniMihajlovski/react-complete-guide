import React from 'react';
import c from './Cockpit.css';


const cockpit = (props) => {

    const classes = [];

    if(props.persons.length <= 2)
    {
      classes.push('red'); // classes = ['red'];
    }

    if(props.persons.length <= 1)
    {
      classes.push('bold'); //classes = [red bold]
    }

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };
    if(props.showPersons){
      style.backgroundColor = 'red';
    }

    return(
        <div>
            <h3>{props.title}</h3>
            <p className={classes.join(' ')}>This is realy working</p>
            <button style ={style}
            onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;