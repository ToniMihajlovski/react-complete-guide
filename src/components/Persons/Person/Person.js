import React from 'react';
import './Person.css';

const person = (props) => {
   console.log('[Person.js] rendering....');
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} Old, and this is a random number {Math.floor(Math.random() * 30)} </p>
            <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name}/>   
        </div>   
    )
}

export default person;