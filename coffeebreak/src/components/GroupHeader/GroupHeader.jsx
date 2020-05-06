import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupHeader.css';

class GroupHeader extends Component{

    render(){
        return(
            <div className='headerbox fixed'>
            <h1>{this.props.lastGroup.name} Channel</h1>
            <img src='images/group.png' className='HeaderImg'/>
            <p></p>
        <ul>
            <li>
                <h5>{this.props.lastGroup.slogan}</h5>
            </li>
        </ul>
        </div>
        )
    }
    
}


export default GroupHeader;