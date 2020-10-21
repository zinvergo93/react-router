import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class NavigationComponent extends Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return (
            <div>
            <NavLink exact to = "/" activeClassName = "active-link">Home</NavLink>,
            <NavLink exact to = "/about" activeClassName = "active-link">About</NavLink>,
            <NavLink exact to = "/contact" activeClassName = "active-link">Contact</NavLink>,
            <NavLink exact to = "/blog" activeClassName = "active-link">Blog</NavLink>,
            </div>
        );
    }
}
 
export default NavigationComponent;