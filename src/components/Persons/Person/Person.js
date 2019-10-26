import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering....');
         return [
                 <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} Old, and this is a random number {Math.floor(Math.random() * 30)} </p>,
                 <p key='i2'>{this.props.children}</p>,
                  <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}/>   
                ]
    }
}

export default Person;