import React, { Component } from "react";
// import {Route, Switch, Link} from 'react-router-dom';
import './GroupView.css';
import JoinGroup from '../JoinGroup/JoinGroup';

class GroupView extends Component{
    state = {
        invalidForm: true,
        formData : {
            name : '',
        },
    };
    formRef = React.createRef();
    handleSubmitGroup = e => {
        e.preventDefault();
        this.props.handleAddGroup(this.state.formData);
    };
    handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
    });
    };
    render(){
        return(
            <div>
                <h1>Public Channels</h1>
                <p>You can join to one of these three public channels, just enter the password of one of the channels.</p> 
                <div>
                    <h1>Global health</h1>
                    <p>5eb30bb61f1a291fbc85de39</p>
                </div>
               
                <JoinGroup handleJoinGroup={this.props.handleJoinGroup} ></JoinGroup>
               
            </div>
        );
    
    }
}
export default GroupView;