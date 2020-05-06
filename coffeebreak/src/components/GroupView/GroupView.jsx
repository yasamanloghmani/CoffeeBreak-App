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
                <h1>My Group</h1>
                {this.props.groups
                    ?
                    <p>
                        {this.props.groups[0].name}
                    </p>
                    :
                    <form className='' ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmitJoin}>
                    <div className="col-auto">
                        <label className="sr-only"></label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">Name</div>
                            </div>
                            <input className="form-control" 
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                             />
                        </div>
                    </div>
                    
                    <button className=''
                        type='submit'
                        disabled={this.state.invalidForm}
                    >
                        Create Group
                    </button>
            
            
                </form>
                
                    
                } 
                <JoinGroup handleJoinGroup={this.props.handleJoinGroup}></JoinGroup>
               
            </div>
        );
    
    }
}
export default GroupView;