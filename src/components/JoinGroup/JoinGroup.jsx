import React, { Component } from "react";

class JoinGroup extends Component{
    state = {
        invalidForm: true,
        formData : {
            groupId : '',
        },
    };

    formRef = React.createRef();
    handleSubmitJoin = e => {
        e.preventDefault();
        this.props.handleJoinGroup(this.state.formData.groupId);
        
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
            <div className="JoinGroup">
                    <form className='' ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmitJoin}>
                    <div className="col-auto">
                        <label className="sr-only"></label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">Password</div>
                            </div>
                            <input className="form-control" 
                            name="groupId"
                            value={this.state.formData.groupId}
                            onChange={this.handleChange}
                            required
                             />
                        </div>
                    </div>
                    
                    <button className='btn bg-primary'
                        type='submit'
                        disabled={this.state.invalidForm}
                    >
                        Join Channel
                    </button>
            
            
                </form>
            </div>
        );
    }
}


export default JoinGroup;