import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupView.css';

class GroupView extends Component{
    
    

    render(){
        return(
            <div>
                {this.props.user.groups} : <p>hi</p>
                <h1>My Group</h1>
        
            </div>
        );
    
    }
}
export default GroupView;