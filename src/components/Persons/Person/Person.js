import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxilliary from '../../../hoc/Auxilliary.js';
import withClass from '../../../hoc/withClass.js'
import './Person.css';
import AuthContext from '../../../contex/auth-contex';

class Person extends Component {
    constructor(props)
    {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
       // this.inputElement.focus();
       this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering....');
         return (
            <Auxilliary>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Is Authenticated</p>: <p>Please log in</p>}
                </AuthContext.Consumer>
                <p  onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} Old, 
                    and this is a random number {Math.floor(Math.random() * 30)} 
                </p>
                <p >{this.props.children}</p>
                <input
                //ref={(inputEl) => {this.inputElement = inputEl}} 
                ref = {this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>   
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