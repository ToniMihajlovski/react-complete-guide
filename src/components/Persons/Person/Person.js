import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxilliary from '../../../hoc/Auxilliary.js';
import withClass from '../../../hoc/withClass.js'
import './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering....');
         return (
            <Auxilliary>
                <p  onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} Old, 
                    and this is a random number {Math.floor(Math.random() * 30)} 
                </p>
                <p >{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>   
            </Auxilliary>
         )               
    }
}
Person.PropTypes = {
    click: PropTypes.func, // for a click i expect function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, 'Person');