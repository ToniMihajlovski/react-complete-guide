import React, {useEffect} from 'react';
import c from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
      console.log('Cockpit.js useEffect');

      //Http Request....
      const timer = setTimeout(() => {
        alert('Saved Data');
      },1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] clean up work in useEffects');
      }
    }, []);

    useEffect(() => {
      console.log('Cockpit.js 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] clean up work in 2nd useEffects');
      }
    });

    const classes = [];

    if(props.personsLength <= 2)
    {
      classes.push('red'); // classes = ['red'];
    }

    if(props.personsLength <= 1)
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

export default React.memo(cockpit);