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

    return(
        <div>
            <h3>Hi i am a react App</h3>
            <p className={classes.join(' ')}>This is realy working</p>
            <button style ={style}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;